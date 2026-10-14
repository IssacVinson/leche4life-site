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

export type SalesPackage = {
  id: string;
  name: string;
  /** Two or three sentences on who the package is for. */
  forWho: string;
  included: string[];
  cover: string[];
  breakdown: string[];
  price: string;
  image: { src: string; alt: string };
};

export const expectingPackages: SalesPackage[] = [
  {
    id: "prenatal-consultation",
    name: "Prenatal Consultation",
    forWho:
      "For the mama who is still expecting and wants the first days of feeding to feel familiar instead of frantic. One virtual visit, from your own space, before your baby arrives.",
    included: [
      "One virtual prenatal consultation",
      "A plan shaped around your birth preferences and your return-to-work timing",
      "Practical guidance for the person who will be supporting you at home",
    ],
    cover: [
      "Latch, milk supply, newborn feeding patterns, and pumping",
      "What the first days of feeding usually look like",
      "The questions you would rather ask now than at 2 a.m.",
    ],
    breakdown: ["1 virtual prenatal consultation, before your baby arrives"],
    price: "$200",
    image: {
      src: "/images/prenatal-consultation.jpg",
      alt: "A pregnant woman in a lace top cradling her belly outdoors.",
    },
  },
  {
    id: "signature",
    name: "Signature Package",
    forWho:
      "Continuous care from pregnancy into the early postpartum months. For the mama who wants her support in place before she needs it: preparation before birth, visits in your home after, and a way to reach Amanda between appointments.",
    included: [
      "The Prenatal Consultation (virtual)",
      "4 in-home visits over 3 months after your baby arrives",
      "Text support while you are in care",
      "Scheduling that keeps your follow-up from slipping",
    ],
    cover: [
      "Before birth: latch, supply, newborn feeding patterns, and pumping",
      "After birth: a feeding assessment for you and your baby",
      "Latch, position, comfort, and milk transfer",
      "A written plan you can follow between visits, adjusted as feeding changes",
    ],
    breakdown: [
      "Before baby: 1 virtual prenatal consultation",
      "After baby: 4 in-home visits over 3 months",
      "Throughout: text support between visits",
    ],
    price: "$1,100",
    image: {
      src: "/images/expecting-signature.jpg",
      alt: "Sunlight falling across a pregnant belly.",
    },
  },
];

export const babyHerePackages: SalesPackage[] = [
  {
    id: "signature",
    name: "Signature Package",
    forWho:
      "For the mama who wants steady, ongoing care through the early months, not a single fix. Amanda comes to you, assesses feeding where it actually happens, and stays reachable between visits.",
    included: [
      "4 in-home visits over 3 months",
      "Text support between visits",
      "A written plan you can follow between visits",
      "Scheduling that keeps your follow-up from slipping",
    ],
    cover: [
      "A feeding assessment for you and your baby",
      "Latch, position, comfort, and milk transfer",
      "Pain, weight, supply, and the questions that show up once you are home",
      "Adjusting the plan as feeding changes in the early weeks",
    ],
    breakdown: [
      "4 in-home visits, spread over 3 months",
      "Text support throughout",
    ],
    price: "$995",
    image: {
      src: "/images/baby-signature.jpg",
      alt: "A mother smiling down at her baby while breastfeeding at home.",
    },
  },
  {
    id: "emergency",
    name: "Emergency Package",
    forWho:
      "For the week feeding feels urgent: pain, a baby who will not latch, a supply scare, or a mastitis worry. Your first visit happens within a day or two, and two more follow in the same month.",
    included: [
      "3 in-home visits within 1 month",
      "First visit within a day or two",
      "A short-term plan to steady feeding",
    ],
    cover: [
      "The problem in front of you, first",
      "Assessment of comfort, latch, and milk transfer",
      "Clear signs for when to call your medical provider",
    ],
    breakdown: [
      "Visit 1: within a day or two",
      "Visits 2 and 3: follow-ups within the same month",
    ],
    price: "$750",
    image: {
      src: "/images/emergency.jpg",
      alt: "A close view of a baby breastfeeding and looking up at their mother.",
    },
  },
  {
    id: "two-pack",
    name: "Two-Pack",
    forWho:
      "For families who want a clear start and one planned follow-up, without a longer package.",
    included: [
      "2 in-home visits within 3 weeks",
      "An initial assessment and a feeding plan",
      "Notes you can share with your baby’s other care providers",
    ],
    cover: [
      "Assessment of latch, comfort, and milk transfer",
      "What changed between visits, and refining what is working",
      "Room to decide, after the second visit, whether you want more care",
    ],
    breakdown: [
      "Visit 1: assessment and a feeding plan",
      "Visit 2: follow-up within 3 weeks",
    ],
    price: "$550",
    image: {
      src: "/images/two-pack.jpg",
      alt: "A mother’s hand cradling her baby’s tiny feet.",
    },
  },
  {
    id: "single-visit",
    name: "Single Visit",
    forWho:
      "A single visit when you want an experienced set of eyes, not an ongoing package. A fit for a specific question: bottles, pumping, solids, work, or weight.",
    included: [
      "1 in-home visit",
      "1 week of support after your visit",
      "A plan you leave with",
    ],
    cover: [
      "Assessment and teaching around your specific question",
      "A plan for the days after the visit",
      "Honest guidance about whether one visit is enough",
    ],
    breakdown: ["1 in-home visit", "1 week of support afterward"],
    price: "$300",
    image: {
      src: "/images/single-visit.jpg",
      alt: "A laughing baby lying on a soft blanket at home.",
    },
  },
  {
    id: "tongue-tie",
    name: "Tongue-Tie Support",
    forWho:
      "High-touch feeding support when oral function or a tongue-tie is part of the story — while you are deciding, and through the work around a release.",
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
