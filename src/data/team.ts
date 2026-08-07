export interface TeamMember {
  name: string;
  role: string;
  image: string;
  slug: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Sunil Verma',
    role: 'Managing Director',
    image: '/assets/team/Sunil_Verma.jpeg',
    slug: 'sunil-verma'
  }
];

export const leadershipIntro = {
  subtitle: 'Leadership',
  title: 'Architect of Trust',
  description: 'Our Managing Director leads with experience, vision, and precision—shaping the enterprise into a brand that is trusted by millions and respected across the industry.'
};
