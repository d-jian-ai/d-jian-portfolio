"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useWeather } from "@/components/weather-provider";

export function LoadingGate() {
  const { mood } = useWeather();
  const [entered, setEntered] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const alreadyEntered = window.sessionStorage.getItem("creer-entered");
    if (alreadyEntered === "true") {
      setEntered(true);
      return;
    }

    setEntered(false);
    const timer = window.setTimeout(() => setReady(true), 1800);

    return () => window.clearTimeout(timer);
  }, []);

  function enterSite() {
    window.sessionStorage.setItem("creer-entered", "true");
    setEntered(true);
  }

  if (entered) return null;

  return (
    <section className={`loading-gate gate-${mood}`} aria-label="Loading">
      <Image
        alt=""
        className="gate-image"
        fill
        priority
        sizes="100vw"
        src="/images/forest-entry.png"
      />
      <div className="gate-shade" />
      <div className="gate-focus" />
      <div className={ready ? "gate-loader ready" : "gate-loader"}>
        <span className="loader-ring" />
        <button
          aria-label="Enter portfolio"
          className="entry-trigger"
          disabled={!ready}
          onClick={enterSite}
          type="button"
        />
      </div>
    </section>
  );
}
