export interface Skill {
  name: string;
  tag?: string;
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
      { name: 'PHP', tag: 'Backend' },
      { name: 'JavaScript', tag: 'Fullstack' },
      { name: 'TypeScript', tag: 'Modern Web' },
      { name: 'Java', tag: 'OOP / Android' },
      { name: 'Python', tag: 'Scripting / Data' },
      { name: 'Dart', tag: 'Mobile' },
      { name: 'C / C++', tag: 'Fundamentals' },
      { name: 'HTML5', tag: 'Markup' },
      { name: 'CSS3', tag: 'Styling' },
      { name: 'SQL', tag: 'Database Query' },
    ],
  },
  {
    category: 'Frameworks and Libraries',
    icon: '⬡',
    skills: [
      { name: 'React', tag: 'Frontend Library' },
      { name: 'Laravel', tag: 'PHP Framework' },
      { name: 'Flutter', tag: 'Mobile SDK' },
      { name: 'Node.js', tag: 'JS Runtime' },
      { name: 'Tailwind CSS', tag: 'Utility-first CSS' },
      { name: 'Bootstrap', tag: 'CSS Framework' },
      { name: 'Vite', tag: 'Build Tool' },
      { name: 'Filament PHP', tag: 'Admin Panel' },
      { name: 'MySQL', tag: 'Relational DB' },
      { name: 'PostgreSQL', tag: 'Relational DB' },
      { name: 'REST API', tag: 'API Architecture' },
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: '⚙',
    skills: [
      { name: 'Git', tag: 'Version Control' },
      { name: 'GitHub', tag: 'Code Hosting' },
      { name: 'Postman', tag: 'API Testing' },
      { name: 'Docker', tag: 'Containerization' },
      { name: 'VS Code', tag: 'Code Editor' },
      { name: 'Railway', tag: 'Deployment' },
      { name: 'Figma', tag: 'UI/UX Design' },
      { name: 'Blender', tag: '3D Modeling' },
      { name: 'Canva', tag: 'Graphic Design' },
    ],
  },
];
