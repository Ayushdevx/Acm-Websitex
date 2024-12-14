import { Github, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

export const footerLinks = [
  {
    title: 'About',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Team', href: '/about#team' },
      { name: 'Achievements', href: '/about#achievements' },
      { name: 'Partners', href: '/about#partners' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Events', href: '/events' },
      { name: 'Blog', href: '/blog' },
      { name: 'Projects', href: '/projects' },
      { name: 'Resources', href: '/resources' },
    ],
  },
  {
    title: 'Community',
    links: [
      { name: 'Join Us', href: '/join' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Contact', href: '/contact' },
      { name: 'Code of Conduct', href: '/code-of-conduct' },
    ],
  },
];

export const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/acm-vit',
    icon: Github,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/acmvit',
    icon: Twitter,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/acm-vit',
    icon: Linkedin,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/acmvit',
    icon: Instagram,
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/acmvit',
    icon: Youtube,
  },
];