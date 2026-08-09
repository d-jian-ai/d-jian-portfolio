type PreviewShard = {
  clipPath: string;
  color: string;
};

export const POLY_SPECIES_PREVIEW = {
    "id":  "tapir",
    "theme":  {
                  "background":  "#FEC54F",
                  "accent":  "#FEC54F"
              },
    "shards":  [
                   {
                       "clipPath":  "polygon(11.1% 81.286%, 13.9% 80.286%, 13.9% 74.429%)",
                       "color":  "#262327"
                   },
                   {
                       "clipPath":  "polygon(9.6% 71.3%, 11.2% 81.2%, 13.95% 74.571%)",
                       "color":  "#3C3642"
                   },
                   {
                       "clipPath":  "polygon(9.6% 71.6%, 13.8% 74.571%, 18% 65.7%)",
                       "color":  "#262327"
                   },
                   {
                       "clipPath":  "polygon(9.55% 71.8%, 17.9% 65.857%, 11.7% 56.286%)",
                       "color":  "#2E2C31"
                   },
                   {
                       "clipPath":  "polygon(11.7% 56.5%, 17.9% 66%, 16.5% 46.143%)",
                       "color":  "#37343E"
                   },
                   {
                       "clipPath":  "polygon(17.8% 65.7%, 15.6% 70.714%, 26.2% 61.286%)",
                       "color":  "#17171A"
                   },
                   {
                       "clipPath":  "polygon(16.44% 45.8%, 17.7% 65.857%, 26.4% 61.429%)",
                       "color":  "#262327"
                   },
                   {
                       "clipPath":  "polygon(16.4% 46.143%, 26.2% 61.429%, 26.4% 36%)",
                       "color":  "#1B1B1E"
                   },
                   {
                       "clipPath":  "polygon(13.8% 41.857%, 16.5% 41%, 17.4% 47.429%)",
                       "color":  "#131215"
                   },
                   {
                       "clipPath":  "polygon(26.3% 36%, 26.1% 61.429%, 34.3% 63.4%)",
                       "color":  "#262327"
                   },
                   {
                       "clipPath":  "polygon(26.2% 36.05%, 45.7% 40.29%, 34% 63.429%)",
                       "color":  "#2F2B36"
                   },
                   {
                       "clipPath":  "polygon(26.3% 36.143%, 42.8% 27%, 44.8% 40.429%)",
                       "color":  "#262529"
                   },
                   {
                       "clipPath":  "polygon(44.7% 40.429%, 33.9% 63.429%, 47.9% 61.429%)",
                       "color":  "#171619"
                   },
                   {
                       "clipPath":  "polygon(33.9% 63.286%, 30.2% 78%, 48% 61.2%)",
                       "color":  "#29282C"
                   },
                   {
                       "clipPath":  "polygon(30.2% 77.857%, 35.6% 72.7%, 32.6% 88%)",
                       "color":  "#131215"
                   },
                   {
                       "clipPath":  "polygon(40.5% 68.143%, 47.9% 61.286%, 46.1% 77.857%)",
                       "color":  "#040808"
                   },
                   {
                       "clipPath":  "polygon(40.5% 68%, 43.4% 84.857%, 46.1% 77.6%)",
                       "color":  "#262327"
                   },
                   {
                       "clipPath":  "polygon(42.25% 77.714%, 37.6% 85.286%, 43.45% 84.714%)",
                       "color":  "#131215"
                   },
                   {
                       "clipPath":  "polygon(42.7% 27%, 47.8% 61.429%, 59.2% 41.571%)",
                       "color":  "#C6CFDD"
                   },
                   {
                       "clipPath":  "polygon(42.7% 27%, 59.1% 41.571%, 71.5% 25.857%)",
                       "color":  "#DCE6F0"
                   },
                   {
                       "clipPath":  "polygon(59.1% 41.429%, 49.3% 58.571%, 65% 62.143%)",
                       "color":  "#BCC2CD"
                   },
                   {
                       "clipPath":  "polygon(49.5% 58.429%, 47.9% 61.429%, 64.9% 62.143%)",
                       "color":  "#29282C"
                   },
                   {
                       "clipPath":  "polygon(59.1% 41.3%, 71.5% 25.857%, 64.9% 62.143%)",
                       "color":  "#CED7E5"
                   },
                   {
                       "clipPath":  "polygon(71.5% 25.857%, 64.9% 62.143%, 89.3% 43.429%)",
                       "color":  "#DCE6F0"
                   },
                   {
                       "clipPath":  "polygon(83.9% 63.571%, 82.4% 86.286%, 86.5% 86.286%)",
                       "color":  "#302B2B"
                   },
                   {
                       "clipPath":  "polygon(74.4% 57.714%, 85.6% 77.857%, 83.1% 57%)",
                       "color":  "#000000"
                   },
                   {
                       "clipPath":  "polygon(64.9% 62.143%, 89.3% 43.286%, 86.2% 56.286%)",
                       "color":  "#1B1B1E"
                   },
                   {
                       "clipPath":  "polygon(70.7% 60.4%, 79.8% 77.8%, 79.8% 57.8%)",
                       "color":  "#29282C"
                   },
                   {
                       "clipPath":  "polygon(76.1% 70.6%, 73% 86.6%, 79.88% 77.6%)",
                       "color":  "#19191B"
                   },
                   {
                       "clipPath":  "polygon(88.8% 44.643%, 87.6% 50.071%, 92.7% 47.5%)",
                       "color":  "#2F2F32"
                   }
               ]
} as const satisfies {
  id: string;
  shards: readonly PreviewShard[];
  theme: { accent: string; background: string };
};
