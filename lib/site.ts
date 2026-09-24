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

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services/Packages" },
  { href: "/resources", label: "Resources/Podcast" },
  { href: "/contact", label: "Contact" },
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

export const pricingNote =
  "Pricing discussed on discovery call. Most families find that insurance covers a significant portion, if not all, of this package.";

export type Offering = {
  title: string;
  pitch: string;
  includes: string[];
};

export type PackageGroup = {
  id: string;
  label: string;
  summary: string;
  offerings: Offering[];
};

export const packages: PackageGroup[] = [
  {
    id: "prenatal",
    label: "Prenatal",
    summary: "Prepare before the first feed.",
    offerings: [
      {
        title: "Prenatal",
        pitch:
          "A visit while you are still expecting, so the first days of feeding feel familiar instead of frantic.",
        includes: [
          "Education on latch, milk supply, newborn feeding patterns, and pumping",
          "A plan shaped around your birth preferences and your return-to-work timing",
          "Time for the questions you would rather ask now than at 2 a.m.",
          "Practical guidance for the person who will be supporting you at home",
        ],
      },
    ],
  },
  {
    id: "postpartum",
    label: "Baby is here / Postpartum",
    summary: "Hands-on care once your baby is in your arms.",
    offerings: [
      {
        title: "Baby is here / Postpartum",
        pitch:
          "Support after birth for latch, pain, weight, supply, and the questions that show up once you are home.",
        includes: [
          "A feeding assessment for you and your baby",
          "Help with latch, position, comfort, and milk transfer",
          "A written plan you can follow between visits",
          "Follow-up as feeding changes in the early weeks",
        ],
      },
    ],
  },
  {
    id: "signature",
    label: "Signature + 2-pack",
    summary: "Ongoing care, or two focused visits.",
    offerings: [
      {
        title: "Signature",
        pitch:
          "Continuous care from pregnancy into the early postpartum weeks: preparation, visits after birth, and a way to reach Amanda between appointments.",
        includes: [
          "Prenatal preparation before your baby arrives",
          "Postpartum visits to assess feeding and adjust the plan",
          "Messaging support while you are in care",
          "Scheduling that keeps your follow-up from slipping",
        ],
      },
      {
        title: "2-pack",
        pitch:
          "Two visits for families who want a clear start and one planned follow-up, without a longer package.",
        includes: [
          "An initial visit for assessment and a feeding plan",
          "A follow-up to see what changed and refine what is working",
          "Notes you can share with your baby’s other care providers",
          "Room to decide, after the second visit, whether you want more care",
        ],
      },
    ],
  },
  {
    id: "urgent",
    label: "Emergency / one-off",
    summary: "Urgent help, or a single consult.",
    offerings: [
      {
        title: "Emergency",
        pitch:
          "For the week feeding feels urgent: pain, a baby who will not latch, a supply scare, or a mastitis worry. Amanda will help you find the soonest visit that fits.",
        includes: [
          "A visit aimed at the problem in front of you",
          "Assessment of comfort, latch, and milk transfer",
          "A short-term plan to steady feeding",
          "Clear signs for when to call your medical provider",
        ],
      },
      {
        title: "One-off",
        pitch:
          "A single consult when you want an experienced set of eyes, not an ongoing package.",
        includes: [
          "One visit, virtual or at home",
          "Assessment, teaching, and a plan you leave with",
          "A fit for a specific question: bottles, pumping, solids, work, or weight",
          "Honest guidance about whether one visit is enough",
        ],
      },
    ],
  },
  {
    id: "tongue-tie",
    label: "Tongue-tie",
    summary: "Oral function, before and after a release.",
    offerings: [
      {
        title: "Tongue-tie",
        pitch:
          "High-touch feeding support when oral function or a tongue-tie is part of the story — while you are deciding, and through the work around a release.",
        includes: [
          "A feeding assessment with attention to oral function",
          "Support while you decide whether a release is right for your baby",
          "Feeding care after a release, alongside your release provider",
          "A plan for comfort, milk transfer, and your baby’s skills",
        ],
      },
    ],
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
