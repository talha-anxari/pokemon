// Single source of truth - nav links aur social links yahan se manage hote hain

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const SOCIAL_LINKS = {
  github: "https://github.com/talha-anxari",
  linkedin: "https://linkedin.com/in/your-linkedin-here", // TODO: apna LinkedIn URL daal dena
};

export const SITE_STATS = [
  { label: "Pokémon", value: "1000+" },
  { label: "Types", value: "18" },
  { label: "Generations", value: "9" },
  { label: "Live API", value: "100%" },
];

export const FEATURES = [
  {
    title: "Instant Search",
    description: "Debounced search se kisi bhi Pokémon ko name se turant dhoondo.",
    icon: "Search",
  },
  {
    title: "Save Favorites",
    description: "Apne favorite Pokémon save karo, persisted state ke sath browser mein.",
    icon: "Heart",
  },
  {
    title: "Detailed Stats",
    description: "Har Pokémon ke stats, abilities aur types ek click mein dekho.",
    icon: "BarChart3",
  },
  {
    title: "Type-Based Theming",
    description: "Har card aur detail page Pokémon ke type ke hisab se color glow karta hai.",
    icon: "Sparkles",
  },
];