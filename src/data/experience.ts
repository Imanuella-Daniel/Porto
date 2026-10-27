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
    title: "Student Staff Perpustakaan",
    institution: "Universitas Atma Jaya Yogyakarta",
    location: "Yogyakarta, Indonesia",
    period: "Mei 2026 – Oktober 2026",
    description:
      "Mendukung operasional layanan perpustakaan dan membantu administrasi koleksi perpustakaan secara terstruktur.",
    details: [
      "Mengorganisasi 300+ koleksi perpustakaan berdasarkan standar Dewey Decimal Classification (DDC) serta memperbarui data ketersediaan buku, majalah, dan jurnal.",
      "Membantu sekitar 10–20 pengunjung setiap hari kerja menemukan referensi melalui katalog digital perpustakaan (OPAC).",
      "Mendata 28 transaksi peminjaman fasilitas perpustakaan untuk mendukung pencatatan administrasi penggunaan fasilitas.",
    ],
  },
  {
    type: "work",
    title: "IT System Support Plantation",
    institution: "Great Giant Foods",
    location: "Lampung Tengah, Indonesia",
    period: "September 2025 – Maret 2026",
    description:
      "Magang sebagai IT Business Partner, terlibat dalam perancangan dan pengembangan modul sistem operasional perkebunan yang terintegrasi dengan SAP.",
    details: [
      "Berkolaborasi dengan tim untuk menganalisis kebutuhan pengguna di lingkungan perkebunan dan menyusun spesifikasi fungsional sebagai acuan pengembangan sistem.",
      "Mengembangkan sistem terintegrasi SAP bersama tim developer untuk mendukung pengelolaan data tenaga kerja bagi 150+ mandor, mencakup validasi status keaktifan dan pelaporan ketidaksesuaian data dengan kondisi aktual di lapangan.",
      "Menjalankan 15 skenario pengujian API menggunakan Postman untuk memvalidasi respons endpoint dan kesesuaian data yang dikembalikan.",
      "Merancang dan mengembangkan sistem manajemen rapat secara mandiri untuk 5 departemen, dengan mengotomatisasi 3 proses: pengingat jadwal rapat, distribusi hasil rapat, dan pemantauan tenggat tugas PIC.",
    ],
    tech: ["SAP", "Laravel", "MySQL", "Bootstrap", "Postman"],
  },
  {
    type: "work",
    title: "Asisten Dosen – Pemrograman Berorientasi Objek",
    institution: "Universitas Atma Jaya Yogyakarta",
    location: "Yogyakarta, Indonesia",
    period: "Februari 2025 – Juli 2025",
    description:
      "Membimbing 195 mahasiswa dalam memahami konsep Object-Oriented Programming (OOP) dan penanganan kesalahan (Exception Handling) menggunakan Java.",
    details: [
      "Membimbing 195 mahasiswa dalam memahami dan menerapkan konsep Pemrograman Berorientasi Objek melalui 60 pertemuan praktikum.",
      "Menyusun materi Exception Handling dan latihan pemrograman Java untuk mendukung pembelajaran praktikum, dengan rata-rata nilai akhir mahasiswa sebesar 92/100.",
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
