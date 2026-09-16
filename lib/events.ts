export type ClubEvent = {
  id: string;
  title: string;
  date: string;
  when: string;
  type: "meetup" | "workshop" | "office-hours";
  status: "upcoming" | "past";
  blurb: string;
};

export const events: ClubEvent[] = [
  {
    id: "oss-onboarding-sep",
    title: "Open-source onboarding workshop",
    date: "2026-09-28",
    when: "Sat · 4:00 PM IST",
    type: "workshop",
    status: "upcoming",
    blurb: "Git basics, first PR walkthrough, and how we review contributions.",
  },
  {
    id: "office-hours-oct",
    title: "Contributor office hours",
    date: "2026-10-05",
    when: "Sun · 7:00 PM IST",
    type: "office-hours",
    status: "upcoming",
    blurb: "Drop in with questions about issues, setup, or pitching a project.",
  },
  {
    id: "kickoff-aug",
    title: "OSClub kickoff meetup",
    date: "2026-08-16",
    when: "Sat · 5:00 PM IST",
    type: "meetup",
    status: "past",
    blurb: "Introduced the club, domain osclub.org, and first project ideas.",
  },
];
