export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  category: 'workshop' | 'hackathon' | 'webinar' | 'competition';
  registrationLink?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  github?: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category: 'general' | 'membership' | 'events' | 'technical';
}

export interface JoinFormData {
  name: string;
  email: string;
  regNo: string;
  branch: string;
  year: string;
  phone: string;
  whyJoin: string;
  technicalSkills: string[];
  areasOfInterest: string[];
  previousProjects?: string;
  githubProfile?: string;
  linkedinProfile?: string;
  expectations: string;
  referral?: string;
}