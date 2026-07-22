"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type WeatherMood = "mist" | "sun" | "rain" | "snow" | "night";

type WeatherContextValue = {
  mood: WeatherMood;
  source: "fallback" | "cache" | "live";
};

const WeatherContext = createContext<WeatherContextValue | null>(null);

const storageKey = "creer-weather-mood";

function isMood(value: string | null): value is WeatherMood {
  return (
    value === "mist" ||
    value === "sun" ||
    value === "rain" ||
    value === "snow" ||
    value === "night"
  );
}

function mapWeatherCode(code: number, isDay: number): WeatherMood {
  if (!isDay) return "night";
  if ([0, 1].includes(code)) return "sun";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "snow";
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82) || code >= 95) {
    return "rain";
  }
  return "mist";
}

export function WeatherProvider({ children }: { children: ReactNode }) {
  const [mood, setMood] = useState<WeatherMood>("mist");
  const [source, setSource] = useState<WeatherContextValue["source"]>(
    "fallback",
  );

  useEffect(() => {
    const cached = window.sessionStorage.getItem(storageKey);
    if (isMood(cached)) {
      setMood(cached);
      setSource("cache");
      return;
    }

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 3600);

    async function loadWeather() {
      try {
        const locationResponse = await fetch("https://ipapi.co/json/", {
          signal: controller.signal,
        });
        const location = (await locationResponse.json()) as {
          latitude?: number;
          longitude?: number;
        };

        if (!location.latitude || !location.longitude) {
          throw new Error("Location unavailable");
        }

        const weatherResponse = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=weather_code,is_day`,
          { signal: controller.signal },
        );
        const weather = (await weatherResponse.json()) as {
          current?: {
            weather_code?: number;
            is_day?: number;
          };
        };

        const code = weather.current?.weather_code;
        const isDay = weather.current?.is_day;

        if (typeof code !== "number" || typeof isDay !== "number") {
          throw new Error("Weather unavailable");
        }

        const nextMood = mapWeatherCode(code, isDay);
        window.sessionStorage.setItem(storageKey, nextMood);
        setMood(nextMood);
        setSource("live");
      } catch {
        setMood("mist");
        setSource("fallback");
      } finally {
        window.clearTimeout(timeout);
      }
    }

    loadWeather();

    return () => {
      window.clearTimeout(timeout);
      controller.abort();
    };
  }, []);

  const value = useMemo(() => ({ mood, source }), [mood, source]);

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
}

export function useWeather() {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeather must be used inside WeatherProvider");
  }

  return context;
}
