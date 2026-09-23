export type TimelineType = 'education' | 'work' | 'project';

export interface TimelineItem {
  type: TimelineType;
  title: string;
  institution: string;
  location?: string;
  period: string;
  description: string;
  details: string[];
  tech?: string[];
}

export const timeline: TimelineItem[] = [
  {
    type: 'education',
    title: 'Sarjana Informatika (S.Kom.)',
    institution: 'Universitas Atma Jaya Yogyakarta',
    location: 'Yogyakarta, Indonesia',
    period: 'Agustus 2022 – Agustus 2026',
    description:
      'Menempuh studi S1 Informatika dengan IPK 3.40 / 4.00, berfokus pada pengembangan perangkat lunak, sistem informasi, dan pemrograman berorientasi objek.',
    details: [
      'IPK: 3.40 / 4.00',
      'Asisten Dosen mata kuliah Pemrograman Berorientasi Objek (OOP)',
      'Student Staff di Perpustakaan Universitas Atma Jaya Yogyakarta',
    ],
  },
  {
    type: 'work',
    title: 'Student Staff',
    institution: 'Perpustakaan Universitas Atma Jaya Yogyakarta',
    location: 'Yogyakarta, Indonesia',
    period: 'Mei 2026 – Sekarang',
    description:
      'Mendukung operasional layanan perpustakaan dan membantu administrasi koleksi perpustakaan secara terstruktur.',
    details: [
      'Mendukung operasional layanan perpustakaan dan membantu pemustaka dalam proses peminjaman dan pengembalian koleksi.',
      'Mengelola serta memeriksa data koleksi perpustakaan untuk memastikan kesesuaian informasi pada sistem dengan kondisi fisik koleksi.',
      'Membantu memastikan kelancaran administrasi dan pelayanan perpustakaan sesuai prosedur yang berlaku.',
    ],
  },
  {
    type: 'work',
    title: 'IT System Support Plantation',
    institution: 'Great Giant Foods',
    location: 'Lampung, Indonesia',
    period: 'September 2025 – Maret 2026',
    description:
      'Magang sebagai IT Business Partner, terlibat dalam perancangan dan pengembangan sistem operasional perkebunan yang terintegrasi dengan SAP.',
    details: [
      'Mengembangkan sistem operasional perkebunan yang terintegrasi dengan SAP, digunakan oleh mandor lapangan untuk pengelolaan data tenaga kerja secara terpusat.',
      'Merancang dan mengimplementasikan sistem manajemen rapat untuk pencatatan isu, penunjukan PIC, serta monitoring tindak lanjut guna meningkatkan transparansi operasional.',
      'Mengurangi proses pelaporan manual dan mempercepat alur pelaporan operasional melalui digitalisasi sistem.',
    ],
    tech: ['SAP', 'Laravel', 'MySQL', 'JavaScript'],
  },
  {
    type: 'work',
    title: 'Asisten Dosen – Pemrograman Berorientasi Objek',
    institution: 'Universitas Atma Jaya Yogyakarta',
    location: 'Yogyakarta, Indonesia',
    period: 'Februari 2025 – Juni 2025',
    description:
      'Membimbing mahasiswa dalam memahami konsep Object-Oriented Programming (OOP) dengan bahasa pemrograman Java.',
    details: [
      'Membimbing 195 mahasiswa dalam memahami konsep Object-Oriented Programming (OOP).',
      'Merancang materi pembelajaran yang berfokus pada topik Exception Handling menggunakan bahasa pemrograman Java.',
      'Menyusun soal latihan, tugas, dan modul pembelajaran untuk memperdalam pemahaman Exception Handling dan meningkatkan pemahaman mahasiswa.',
    ],
    tech: ['Java', 'OOP'],
  },
];
