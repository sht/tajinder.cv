export interface CV {
  name: string;
  role: string;
  location: string;
  intro: string;
  summary: string;
  about: string;
  contact: { email: string; linkedin: string; github: string };
  selected_work: { eyebrow: string; title: string; description: string; details: string[] }[];
  experience: { company: string; location: string; roles: { title: string; dates: string; points: string[] }[] }[];
  skills: { category: string; items: string }[];
  recognition: { title: string; note: string }[];
  education: { degree: string; institution: string; dates: string; note?: string }[];
  languages: string;
}
