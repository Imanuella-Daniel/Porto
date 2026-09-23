export interface Screenshot {
  type: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  role: string;
  duration: string;
  team: string;
  tech: string[];
  description: string;
  problem: string;
  solution: string;
  features: string[];
  challenges: string;
  result: string;
  github: string;
  demo?: string;
  featured: boolean;
  screenshots: Screenshot[];
}

export const projects: Project[] = [
  {
    id: 'reusemart',
    title: 'ReuseMart',
    tagline: 'E-Commerce Barang Bekas',
    category: 'Mobile & Web Development · E-Commerce',
    year: '2025',
    role: 'Full Stack Developer',
    duration: '',
    team: 'Tim Akademik',
    tech: ['Flutter', 'Laravel', 'Tailwind CSS', 'MySQL'],
    description:
      'Aplikasi mobile dan website e-commerce untuk jual beli barang bekas secara terpusat. Dibangun dengan Flutter untuk aplikasi mobile dan Laravel sebagai backend, dengan tampilan menggunakan Tailwind CSS.',
    problem:
      'Tidak adanya platform terpadu bagi mahasiswa dan masyarakat umum untuk menjual dan membeli barang bekas secara praktis dan terpercaya.',
    solution:
      'Membangun aplikasi mobile (Flutter) dan website (Laravel + Tailwind CSS) yang terintegrasi dengan database MySQL, memungkinkan pengguna untuk melihat, menjual, dan membeli barang bekas dengan mudah.',
    features: [
      'Aplikasi mobile dengan Flutter untuk pengalaman pengguna yang optimal',
      'Website e-commerce berbasis Laravel dan Tailwind CSS',
      'Manajemen produk: listing, pencarian, dan filter kategori',
      'Sistem autentikasi pengguna (login & registrasi)',
      'Database terpusat dengan MySQL',
    ],
    challenges:
      'Menyinkronkan data antara aplikasi mobile Flutter dan website Laravel agar konsisten secara real-time melalui REST API.',
    result:
      'Proyek akademik yang berhasil mengintegrasikan mobile app dan web app dalam satu ekosistem dengan backend yang sama.',
    github: '#',
    featured: true,
    screenshots: [
      { type: 'reusemart-home', label: 'Home' },
    ],
  },
  {
    id: 'atma-salon',
    title: 'Atma Salon',
    tagline: 'Aplikasi Informasi Salon Rambut',
    category: 'Mobile Development · Information System',
    year: '2024',
    role: 'Mobile Developer',
    duration: '',
    team: 'Tim Akademik',
    tech: ['Flutter', 'Laravel', 'Bootstrap', 'MySQL'],
    description:
      'Aplikasi mobile berbasis Flutter untuk menampilkan informasi salon rambut, termasuk layanan, harga, dan jadwal. Backend dikelola dengan Laravel dan MySQL.',
    problem:
      'Pelanggan salon kesulitan mendapatkan informasi layanan, harga, dan ketersediaan jadwal secara cepat dan akurat tanpa harus datang langsung ke salon.',
    solution:
      'Membangun aplikasi mobile dengan Flutter yang menampilkan informasi salon secara real-time, terhubung ke backend Laravel dengan database MySQL.',
    features: [
      'Tampilan informasi layanan dan harga salon',
      'Jadwal dan ketersediaan layanan',
      'Antarmuka mobile yang responsif dengan Flutter',
      'Backend REST API dengan Laravel',
      'Admin dashboard untuk pengelolaan data salon',
    ],
    challenges:
      'Merancang antarmuka yang intuitif di Flutter agar informasi salon mudah diakses oleh pengguna dari berbagai kalangan.',
    result:
      'Aplikasi berhasil menyajikan informasi salon secara terstruktur dan mudah diakses melalui perangkat mobile.',
    github: '#',
    featured: true,
    screenshots: [
      { type: 'atma-salon-home', label: 'Home' },
    ],
  },
  {
    id: 'blue-haven-hotel',
    title: 'Blue Haven Hotel',
    tagline: 'Website Pemesanan Hotel',
    category: 'Web Development · Information System',
    year: '2024',
    role: 'Full Stack Developer',
    duration: '',
    team: 'Tim Akademik',
    tech: ['Laravel', 'Bootstrap', 'MySQL'],
    description:
      'Website pemesanan hotel berbasis web yang dibangun dengan Laravel dan Bootstrap. Memungkinkan tamu untuk melihat kamar, memeriksa ketersediaan, dan melakukan pemesanan secara online.',
    problem:
      'Manajemen reservasi hotel yang masih manual menyebabkan proses pemesanan lambat, rentan kesalahan, dan sulit dipantau secara real-time.',
    solution:
      'Membangun website pemesanan hotel dengan Laravel yang memungkinkan pemesanan online, manajemen kamar oleh admin, dan laporan reservasi yang akurat.',
    features: [
      'Halaman katalog kamar dengan detail dan harga',
      'Sistem pemesanan kamar secara online',
      'Pengecekan ketersediaan kamar berdasarkan tanggal',
      'Panel admin untuk manajemen kamar dan reservasi',
      'Laporan pemesanan dan riwayat transaksi',
    ],
    challenges:
      'Merancang logika ketersediaan kamar yang akurat agar tidak terjadi double booking, serta membuat alur pemesanan yang sederhana bagi tamu.',
    result:
      'Proyek akademik yang menghasilkan sistem reservasi hotel yang fungsional dengan antarmuka yang bersih dan mudah digunakan.',
    github: '#',
    featured: true,
    screenshots: [
      { type: 'hotel-home', label: 'Homepage' },
    ],
  },
  {
    id: 'relax-gaming',
    title: 'Relax Gaming',
    tagline: 'Desain Manajemen Proyek Perangkat Lunak',
    category: 'UI/UX Design · Project Management',
    year: '2024',
    role: 'UI/UX Designer',
    duration: '',
    team: 'Tim Akademik',
    tech: ['Figma', 'Blender'],
    description:
      'Proyek desain manajemen perangkat lunak yang menghasilkan prototipe antarmuka aplikasi gaming menggunakan Figma, dilengkapi dengan aset visual 3D yang dibuat di Blender.',
    problem:
      'Kebutuhan akan desain antarmuka yang menarik dan terstruktur untuk aplikasi gaming, sekaligus mendokumentasikan proses manajemen proyek perangkat lunak secara formal.',
    solution:
      'Merancang prototipe UI/UX di Figma dengan alur pengguna yang terstruktur, serta membuat aset visual 3D menggunakan Blender untuk memperkuat identitas visual aplikasi.',
    features: [
      'Prototipe antarmuka aplikasi gaming di Figma',
      'Aset visual 3D dengan Blender',
      'Dokumentasi alur pengguna dan wireframe',
      'Desain komponen yang konsisten dan reusable',
    ],
    challenges:
      'Memadukan desain UI yang estetis dengan kebutuhan fungsional aplikasi gaming, serta mengintegrasikan aset 3D dari Blender ke dalam prototipe Figma.',
    result:
      'Menghasilkan prototipe desain yang komprehensif dengan identitas visual yang kuat, sekaligus mendokumentasikan seluruh proses manajemen proyek perangkat lunak.',
    github: '#',
    featured: false,
    screenshots: [
      { type: 'relax-gaming-design', label: 'UI Design' },
    ],
  },
];

export function getProject(id: string): Project | undefined {
  return projects.find(p => p.id === id);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured);
}
