import type { CSSProperties } from "react";
import type {
  SpeciesSeriesPoint,
  SpeciesStatistic,
} from "@/config/poly-species";
import {
  getStatisticLabel,
  getStatisticNote,
  getStatisticValue,
} from "@/config/poly-species-copy";

type BarStyle = CSSProperties & {
  "--sip-bar": string;
};

function getMetricValue(value: string) {
  const values = value
    .replaceAll(",", "")
    .match(/\d+(?:\.\d+)?/g)
    ?.map(Number);

  return values?.length ? Math.max(...values) : 0;
}

function getBarWidths(points: SpeciesSeriesPoint[]) {
  const values = points.map((point) => getMetricValue(point.value));
  const maximum = Math.max(...values, 0);

  return values.map((value, index) => {
    if (!maximum) return 42 + ((index * 13) % 46);
    return Math.max(7, (value / maximum) * 100);
  });
}

function TrendVisual({
  locale,
  points,
}: {
  locale: "zh" | "en" | "fr";
  points: SpeciesSeriesPoint[];
}) {
  const values = points.map((point) => getMetricValue(point.value));
  const minimum = Math.min(...values);
  const maximum = Math.max(...values);
  const spread = maximum - minimum || maximum || 1;
  const chartPoints = values.map((value, index) => ({
    x: points.length === 1 ? 50 : 5 + (index / (points.length - 1)) * 90,
    y: 7 + (1 - (value - minimum) / spread) * 28,
  }));
  const polyline = chartPoints.map(({ x, y }) => `${x},${y}`).join(" ");

  return (
    <div className="sip-stat-trend">
      <svg aria-hidden="true" viewBox="0 0 100 42">
        <path className="sip-stat-trend-grid" d="M5 7H95M5 21H95M5 35H95" />
        <polyline className="sip-stat-trend-line" points={polyline} />
        {chartPoints.map(({ x, y }, index) => (
          <circle cx={x} cy={y} key={`${x}-${y}-${index}`} r="1.35" />
        ))}
      </svg>
      <div className="sip-stat-trend-labels">
        {points.map((point, index) => (
          <span key={`${point.label}-${index}`}>
            <small>{getStatisticLabel(point.label, locale)}</small>
            <strong>{getStatisticValue(point.value, locale)}</strong>
          </span>
        ))}
      </div>
    </div>
  );
}

export function SpeciesStatisticVisual({
  locale,
  sourceLabel,
  statistic,
}: {
  locale: "zh" | "en" | "fr";
  sourceLabel: string;
  statistic: SpeciesStatistic;
}) {
  let visual;

  if (statistic.kind === "headline") {
    const value = getStatisticValue(statistic.value, locale);
    const wordValue = !/\d/.test(value);
    const compactValue = value.length > 11 || wordValue;
    visual = (
      <div
        className={`sip-stat-visual sip-stat-visual--headline${compactValue ? " is-compact" : ""}${wordValue ? " is-word-value" : ""}`}
      >
        <i aria-hidden="true" />
        <i aria-hidden="true" />
        <div>
          <strong>{value}</strong>
          <span>{getStatisticNote(statistic.note, locale)}</span>
        </div>
      </div>
    );
  } else if (statistic.visual === "trend") {
    visual = (
      <div className="sip-stat-visual sip-stat-visual--series">
        <TrendVisual locale={locale} points={statistic.points} />
      </div>
    );
  } else {
    const widths = getBarWidths(statistic.points);
    visual = (
      <div className="sip-stat-visual sip-stat-visual--series">
        <div className="sip-stat-series">
          {statistic.points.map((point, index) => (
            <div className="sip-stat-row" key={`${point.label}-${index}`}>
              <span>{getStatisticLabel(point.label, locale)}</span>
              <i
                aria-hidden="true"
                style={{ "--sip-bar": `${widths[index]}%` } as BarStyle}
              />
              <strong>{getStatisticValue(point.value, locale)}</strong>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="sip-stat-composition">
      {visual}
      {statistic.source ? (
        <p className="sip-stat-source">
          <span>{sourceLabel}</span>
          {statistic.source}
        </p>
      ) : null}
    </div>
  );
}
