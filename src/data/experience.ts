export type TimelineType = "work" | "organization";

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

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  skills: string;
}

export const workExperience: TimelineItem[] = [
  {
    type: "work",
    title: "Student Staff",
    institution: "Perpustakaan Universitas Atma Jaya Yogyakarta",
    location: "Yogyakarta, Indonesia",
    period: "Mei 2026 – Sekarang",
    description:
      "Mendukung operasional layanan perpustakaan dan membantu administrasi koleksi perpustakaan secara terstruktur.",
    details: [
      "Mendukung operasional layanan sirkulasi perpustakaan dan membantu pemustaka dalam proses peminjaman serta pengembalian koleksi.",
      "Mengelola serta memverifikasi data koleksi fisik untuk memastikan kesesuaian informasi pada sistem katalog perpustakaan.",
      "Membantu kelancaran administrasi layanan harian pemustaka sesuai standar operasional yang berlaku.",
    ],
  },
  {
    type: "work",
    title: "IT System Support Plantation",
    institution: "Great Giant Foods",
    location: "Lampung, Indonesia",
    period: "September 2025 – Maret 2026",
    description:
      "Magang sebagai IT Business Partner, terlibat dalam perancangan dan pengembangan modul sistem operasional perkebunan yang terintegrasi dengan SAP.",
    details: [
      "Mengembangkan sistem operasional perkebunan yang terintegrasi dengan SAP, digunakan oleh mandor lapangan untuk pengelolaan data tenaga kerja secara terpusat.",
      "Merancang dan mengimplementasikan modul manajemen rapat (Meetrack) untuk pencatatan notulensi rapat, penugasan PIC, dan monitoring progres tindak lanjut.",
      "Mengurangi ketergantungan pada pencatatan manual dan mempercepat alur pelaporan data lapangan ke manajemen.",
    ],
    tech: ["SAP", "Laravel", "MySQL", "Bootstrap"],
  },
  {
    type: "work",
    title: "Asisten Dosen – Pemrograman Berorientasi Objek",
    institution: "Universitas Atma Jaya Yogyakarta",
    location: "Yogyakarta, Indonesia",
    period: "Februari 2025 – Juni 2025",
    description:
      "Membimbing 195 mahasiswa dalam memahami konsep Object-Oriented Programming (OOP) dan penanganan kesalahan (Exception Handling) menggunakan Java.",
    details: [
      "Membimbing secara langsung 195 mahasiswa dalam sesi praktikum dan pemahaman konsep OOP.",
      "Merancang modul pembelajaran dan materi praktikum dengan fokus pada implementasi Exception Handling berbasis Java.",
      "Menyusun soal latihan terstruktur, studi kasus pemrograman, dan melakukan penilaian kode mahasiswa.",
    ],
    tech: ["Java", "OOP", "Exception Handling"],
  },
];

export const organizationExperience: TimelineItem[] = [
  {
    type: "organization",
    title: "Anggota Sekretaris",
    institution: "Sparkfest 12",
    location: "Yogyakarta, Indonesia",
    period: "September 2023 – Juni 2024",
    description:
      "Bertanggung jawab dalam pengelolaan administrasi dan data kepesertaan acara.",
    details: [
      "Mengelola data registrasi dan rekapitulasi peserta lomba menggunakan Microsoft Excel.",
      "Berkoordinasi aktif dengan divisi acara untuk kelancaran jadwal dan komunikasi.",
      "Merancang sertifikat digital peserta menggunakan Canva.",
    ],
    tech: ["Microsoft Excel", "Canva"],
  },
  {
    type: "organization",
    title: "Anggota Keamanan",
    institution: "Sparkfest 11",
    location: "Yogyakarta, Indonesia",
    period: "Oktober 2022 – Agustus 2023",
    description:
      "Bertanggung jawab menjaga ketertiban dan kelancaran selama seluruh rangkaian kegiatan acara dan pertunjukan.",
    details: [
      "Menjaga ketertiban area panggung, peserta, dan penonton selama lomba dan konser.",
      "Menyusun dan menegakkan peraturan ketertiban demi keamanan bersama.",
    ],
  },
];

export const certifications: Certification[] = [
  {
    title: "Sertifikasi Pemrograman (Python, C, Dart, SQL, Back-End JS)",
    issuer: "Dicoding Indonesia",
    year: "2023 – 2025",
    skills: "Python, Dart, SQL, JavaScript, RESTful API",
  },
  {
    title: "EnglishScore CEFR B1",
    issuer: "British Council",
    year: "2024",
    skills: "Komunikasi Bahasa Inggris Kerja",
  },
];

export const timeline: TimelineItem[] = [
  ...workExperience,
  ...organizationExperience,
];
