export const site = {
  name: "Leche 4 Life Lactation",
  practitioner: "Amanda Howell, IBCLC",
  phoneDisplay: "980-313-1037",
  phoneHref: "tel:+19803131037",
  email: "amanda@leche4lifelactation.com",
  emailHref: "mailto:amanda@leche4lifelactation.com",
  instagram: "https://www.instagram.com/leche4lifelactation/",
  instagramFoods: "https://www.instagram.com/l4lfoods/",
  facebook: "https://www.facebook.com/leche4life",
  podcast: "https://4theloveofmilk.buzzsprout.com/",
  podcastApple: "https://podcasts.apple.com/podcast/id1763607369",
  podcastSpotify: "https://open.spotify.com/show/2RH0mpneTzMP0tUKfBBy3C",
  podcastAmazon:
    "https://music.amazon.com/podcasts/0240a15c-884d-4281-9921-df94eac7156c",
  /** Swap this for a specific Calendly event link when one exists. */
  calendly: "https://calendly.com/amanda-leche4lifelactation",
} as const;

/** Top menu. Contact renders as a button, so it is kept separate. */
export const nav = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/expecting/", label: "I’m Expecting" },
  { href: "/baby-is-here/", label: "The Baby Is Here" },
] as const;

export const contactLink = { href: "/contact/", label: "Contact" } as const;

/** Footer-only links (resources, blog, freebies, legal). */
export const footerLinks = [
  { href: "/resources/", label: "Resources/Podcast" },
] as const;

export const serviceArea = [
  "Mecklenburg",
  "Cabarrus",
  "Matthews",
  "Indian Trail",
  "Waxhaw",
  "Huntersville",
  "Gaston",
  "Mt. Holly",
  "Belmont",
] as const;

export const insuranceNote =
  "I don’t bill insurance directly, but I can provide a superbill you may submit for reimbursement, and FSA/HSA cards are often accepted — check with your plan.";

export const paymentNote = [
  "Payment is required to secure your appointment.",
  "Accepted: Cash, Venmo, Zelle, HSA/FSA, or Square.",
] as const;

export type SalesPackage = {
  id: string;
  name: string;
  /** Short line under the name, e.g. a tagline or the visit type. */
  subtitle?: string;
  /** Small highlight shown above the name, e.g. "Most Popular". */
  badge?: string;
  /** Paragraphs introducing the package. */
  description: string[];
  included?: string[];
  cover?: string[];
  breakdown?: string[];
  /** Paragraphs shown after the lists. */
  closing?: string[];
  price: string;
  image: { src: string; alt: string };
};

export const expectingPackages: SalesPackage[] = [
  {
    id: "prenatal-package",
    name: "The Prenatal Package",
    subtitle: "Held from Day One",
    description: [
      "A trusted partner from pregnancy through your baby’s first three months, not just information, but real support.",
      "Invest in yourself and this pregnancy with evidence-based guidance from a holistic IBCLC who tailors care to your family. You’ll have expert help whenever you need it, so you can step into motherhood with clarity, calm, and confidence.",
    ],
    included: [
      "One prenatal visit, in-home or virtual",
      "3 in-person visits",
      "Direct, immediate 24/7 access via Voxer once baby is in your arms",
      "Ongoing as needed Voxer support",
      "3 months to use",
    ],
    price: "$1,200",
    image: {
      src: "/images/expecting-signature.jpg",
      alt: "Sunlight falling across a pregnant belly.",
    },
  },
];

export const babyHerePackages: SalesPackage[] = [
  {
    id: "nurtured-support",
    name: "Nurtured Support",
    badge: "Most Popular",
    description: [
      "Feeding challenges rarely resolve in a single visit, babies change fast, and what worked last week may not work this week. This program gives you a dedicated partner through every shift: 1 comprehensive virtual check-in plus 4 in-home visits, so you’re never left guessing between appointments.",
    ],
    included: [
      "1 virtual check-in",
      "4 in-home visits",
      "Voxer message support between visits",
      "3 months to use",
    ],
    closing: [
      "This is where most families land, and for good reason: consistent, expert guidance through the early weeks means fewer surprises and faster progress.",
    ],
    price: "$1,400",
    image: {
      src: "/images/baby-signature.jpg",
      alt: "A mother smiling down at her baby while breastfeeding at home.",
    },
  },
  {
    id: "single-visit",
    name: "Single Visit Option",
    subtitle: "Initial Breastfeeding Consultation",
    description: [
      "A one-time, comprehensive feeding consultation in the comfort of your home.",
    ],
    included: [
      "Latch and positioning support",
      "Oral function observation",
      "Personalized feeding plan tailored to your baby’s needs",
      "Parent education and guidance",
      "Recommendations for continued support, if needed",
      "Pump support for exclusive pumping",
      "Bottle feeding guidance",
      "1 week of email correspondence (text messaging not included)",
    ],
    closing: [
      "Ideal for families seeking an initial evaluation or individualized support in the later postpartum period.",
      "Credit for this visit towards a package is considered.",
    ],
    price: "$400",
    image: {
      src: "/images/single-visit.jpg",
      alt: "A laughing baby lying on a soft blanket at home.",
    },
  },
  {
    id: "two-visit",
    name: "2-Visit Package",
    description: [
      "Includes everything above, plus one additional in-person follow-up visit.",
    ],
    price: "$700",
    image: {
      src: "/images/two-pack.jpg",
      alt: "A mother’s hand cradling her baby’s tiny feet.",
    },
  },
  {
    id: "milk-rescue",
    name: "Milk Rescue",
    subtitle: "Emergency Support Package",
    description: [
      "For urgent feeding concerns that need fast, hands-on attention: slow weight gain, delayed milk production, sore nipples, unresolving mastitis, or clogged milk ducts.",
    ],
    included: [
      "3 visits, with the first visit within 24-48 hours of booking",
      "Pre-approval is needed to secure this package",
      "All 3 visits must be used within 4 weeks",
      "4 weeks of Voxer (Texting Support)",
    ],
    price: "$1,050",
    image: {
      src: "/images/emergency.jpg",
      alt: "A close view of a baby breastfeeding and looking up at their mother.",
    },
  },
  {
    id: "tongue-tie",
    name: "Tongue-Tie Support",
    description: [
      "High-touch feeding support when oral function or a tongue-tie is part of the story — while you are deciding, and through the work around a release.",
    ],
    included: [
      "A feeding assessment with attention to oral function",
      "Support while you decide whether a release is right for your baby",
      "Feeding care after a release, alongside your release provider",
    ],
    cover: [
      "Oral function and how it is affecting feeding",
      "Comfort and milk transfer",
      "Your baby’s feeding skills before and after a release",
    ],
    breakdown: [
      "Visits are planned with you around your baby and your release provider",
    ],
    price: "Ask about pricing",
    image: {
      src: "/images/tongue-tie.jpg",
      alt: "A newborn’s foot peeking out of a soft white blanket.",
    },
  },
];

export const episodes = [
  {
    number: 62,
    date: "September 8, 2026",
    title: "Returning to work: Pumping logistics",
    summary:
      "When to start pumping, how much milk to send, how often to pump, storage, and bottles.",
    href: "https://4theloveofmilk.buzzsprout.com/2383347/episodes/19772715-returning-to-work-pumping-logistics",
  },
  {
    number: 61,
    date: "August 24, 2026",
    title: "Returning to work: Choosing a pump",
    summary:
      "Hospital-grade, double electric, manual, wearable, and collection cups, plus flange fit.",
    href: "https://4theloveofmilk.buzzsprout.com/2383347/episodes/19691896-returning-to-work-choosing-a-pump",
  },
  {
    number: 60,
    date: "August 17, 2026",
    title: "Ask an IBCLC: why do I keep getting mastitis?",
    summary:
      "Listener questions on antibiotics, recurrent mastitis, and breast abscess.",
    href: "https://4theloveofmilk.buzzsprout.com/2383347/episodes/19660197-ask-an-ibclc-why-do-i-keep-getting-mastitis",
  },
  {
    number: 59,
    date: "August 10, 2026",
    title: "Help! I have mastitis! Now what?",
    summary: "Home care, antibiotics, and what to do in the middle of a flare.",
    href: "https://4theloveofmilk.buzzsprout.com/2383347/episodes/19628105-help-i-have-mastitis-now-what",
  },
  {
    number: 58,
    date: "August 3, 2026",
    title: "Do I have mastitis?",
    summary: "Signs, symptoms, and what tends to set mastitis off.",
    href: "https://4theloveofmilk.buzzsprout.com/2383347/episodes/19593347-do-i-have-mastitis",
  },
] as const;
