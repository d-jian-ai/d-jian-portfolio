import type { SpeciesStatistic } from "@/config/poly-species";

export const VERIFIED_SPECIES_STATISTICS: Partial<
  Record<string, SpeciesStatistic[]>
> = {
  bear: [
    {
      facts: [
        { label: "IUCN status", value: "VU" },
        { label: "Population trend", value: "Decreasing" },
        { label: "Primary threat", value: "Habitat loss and poaching" },
      ],
      kind: "profile",
      source: {
        date: "IUCN action plan / checked 2026",
        organization: "IUCN SSC Bear Specialist Group",
      },
      title: "Verified conservation update",
    },
  ],
  butterfly: [
    {
      facts: [
        { label: "Trade protection", value: "CITES Appendix II" },
        { label: "Endemic range", value: "North Maluku" },
        { label: "Population evidence", value: "Limited" },
      ],
      kind: "profile",
      source: {
        date: "2017 review of significant trade",
        organization: "CITES / Indonesia Scientific Authority",
      },
      title: "Verified conservation update",
    },
  ],
  damselfly: [
    {
      facts: [
        { label: "European status", value: "CR" },
        { label: "Population trend", value: "Decreasing" },
        { label: "Endemic range", value: "Europe" },
      ],
      kind: "profile",
      source: {
        date: "European assessment / checked 2026",
        organization: "IUCN European Red List",
      },
      title: "Verified conservation update",
    },
  ],
  frog: [
    {
      facts: [
        { label: "IUCN status", value: "EN" },
        { label: "Population trend", value: "Decreasing" },
        { label: "Primary threat", value: "Rainforest loss" },
      ],
      kind: "profile",
      source: {
        date: "assessment profile / checked 2026",
        organization: "IUCN Red List",
      },
      title: "Verified conservation update",
    },
  ],
  vaquita: [
    {
      facts: [
        { label: "Observed in 2021", value: "7-8" },
        { label: "1997 estimate", value: "567" },
        { label: "Primary threat", value: "Gillnets" },
      ],
      kind: "profile",
      source: {
        date: "2021 survey / updated 2026",
        organization: "NOAA Fisheries",
      },
      title: "Verified conservation update",
    },
  ],
  kakapo: [
    {
      facts: [
        { label: "Managed population", value: "235" },
        { label: "1995 baseline", value: "51" },
        { label: "IUCN status", value: "CR" },
      ],
      kind: "profile",
      source: {
        date: "19 March 2026",
        organization: "New Zealand Department of Conservation",
      },
      title: "Verified conservation update",
    },
  ],
  penguin: [
    {
      facts: [
        { label: "IUCN status", value: "CR" },
        { label: "Reassessment", value: "2024" },
        { label: "Population trend", value: "Decreasing" },
      ],
      kind: "profile",
      source: {
        date: "2024-2025 report",
        organization: "IUCN Species Survival Commission",
      },
      title: "Verified conservation update",
    },
  ],
  oryx: [
    {
      facts: [
        { label: "IUCN status", value: "EN" },
        { label: "Reassessment", value: "December 2023" },
        { label: "Previous status", value: "Extinct in the wild" },
      ],
      kind: "profile",
      source: {
        date: "December 2023",
        organization: "IUCN Antelope Specialist Group",
      },
      title: "Verified conservation update",
    },
  ],
  lynx: [
    {
      facts: [
        { label: "IUCN status", value: "VU" },
        { label: "Mature individuals 2022", value: "648" },
        { label: "Total population", value: "more than2,000" },
      ],
      kind: "profile",
      source: {
        date: "20 June 2024",
        organization: "IUCN Red List",
      },
      title: "Verified conservation update",
    },
  ],
};
