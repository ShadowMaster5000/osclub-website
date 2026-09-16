export type Person = {
  name: string;
  handle: string;
  role: string;
  bio: string;
};

export const people: Person[] = [
  {
    name: "Shadow",
    handle: "shadow",
    role: "Organizer",
    bio: "Steers OSClub direction, domain (osclub.org), and community ops.",
  },
  {
    name: "Maintainer seat",
    handle: "maintainer",
    role: "Maintainer",
    bio: "Placeholder — claim a project, triage issues, and ship releases.",
  },
  {
    name: "Mentor seat",
    handle: "mentor",
    role: "Mentor",
    bio: "Help newcomers find good first issues and land their first PR.",
  },
  {
    name: "Contributor seat",
    handle: "you",
    role: "Contributor",
    bio: "This could be you — join and pick something to build.",
  },
];
