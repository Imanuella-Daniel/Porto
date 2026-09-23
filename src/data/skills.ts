export interface Skill {
  name: string;
  level: 'primary' | 'secondary';
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming Languages',
    icon: '{ }',
    skills: [
      { name: 'PHP', level: 'primary' },
      { name: 'JavaScript', level: 'primary' },
      { name: 'Java', level: 'primary' },
      { name: 'Python', level: 'secondary' },
      { name: 'Dart', level: 'secondary' },
      { name: 'SQL', level: 'primary' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    icon: '⬡',
    skills: [
      { name: 'Laravel', level: 'primary' },
      { name: 'Flutter', level: 'primary' },
      { name: 'Bootstrap', level: 'primary' },
      { name: 'Tailwind CSS', level: 'primary' },
      { name: 'Filament PHP', level: 'secondary' },
      { name: 'REST API', level: 'primary' },
    ],
  },
  {
    category: 'Database',
    icon: '◫',
    skills: [
      { name: 'MySQL', level: 'primary' },
      { name: 'PostgreSQL', level: 'secondary' },
      { name: 'SQL', level: 'primary' },
    ],
  },
  {
    category: 'Tools & Technologies',
    icon: '⚙',
    skills: [
      { name: 'GitHub', level: 'primary' },
      { name: 'Postman', level: 'primary' },
      { name: 'Docker', level: 'secondary' },
      { name: 'Railway', level: 'secondary' },
      { name: 'Figma', level: 'primary' },
      { name: 'Blender', level: 'secondary' },
      { name: 'Canva', level: 'secondary' },
    ],
  },
  {
    category: 'Other Skills',
    icon: '◈',
    skills: [
      { name: 'Problem Solving', level: 'primary' },
      { name: 'Teamwork', level: 'primary' },
      { name: 'Adaptability', level: 'primary' },
      { name: 'REST API', level: 'primary' },
    ],
  },
];
