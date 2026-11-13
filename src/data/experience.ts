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

export type CertificateCategory =
  | "all"
  | "backend"
  | "programming"
  | "data"
  | "devops"
  | "language"
  | "achievement";

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  partner?: string;
  category:
    | "Web & Backend"
    | "Pemrograman"
    | "Data & Basis Data"
    | "DevOps & Cloud"
    | "Bahasa Inggris"
    | "Prestasi & Akademik";
  categoryKey: CertificateCategory;
  date: string;
  year: string;
  validUntil?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills: string;
  skillsList: string[];
  description: string;
  fileUrl: string;
  fileType: "pdf" | "image";
  hours?: string;
  score?: string;
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
    id: "backend-js",
    title: "Belajar Back-End Pemula dengan JavaScript",
    issuer: "Dicoding Indonesia",
    partner: "AWS",
    category: "Web & Backend",
    categoryKey: "backend",
    date: "21 Januari 2025",
    year: "2025",
    validUntil: "21 Januari 2028",
    credentialId: "MEPJQEYYWX3V",
    credentialUrl: "https://www.dicoding.com/certificates/MEPJQEYYWX3V",
    hours: "45 Jam",
    skills: "Node.js, RESTful API, Hapi Framework, Postman, AWS EC2, Bookshelf API",
    skillsList: ["Node.js", "RESTful API", "Hapi Framework", "Postman", "AWS EC2"],
    description:
      "Standar kompetensi internasional AWS untuk membangun web service RESTful API menggunakan Node.js dan Hapi framework, otomatisasi pengujian endpoint via Postman, serta deployment ke Amazon EC2.",
    fileUrl: "/Sertifikat/Belajar Back-End Pemula dengan JavaScript.pdf",
    fileType: "pdf",
  },
  {
    id: "devops",
    title: "Belajar Dasar-Dasar DevOps",
    issuer: "Dicoding Indonesia",
    partner: "AWS",
    category: "DevOps & Cloud",
    categoryKey: "devops",
    date: "31 Januari 2025",
    year: "2025",
    validUntil: "31 Januari 2028",
    credentialId: "81P2L8K9YZOY",
    credentialUrl: "https://www.dicoding.com/certificates/81P2L8K9YZOY",
    hours: "15 Jam",
    skills: "DevOps Culture, CI/CD Pipeline, CALMS Framework, The Three Ways, AWS Ecosystem",
    skillsList: ["DevOps Culture", "CI/CD Pipeline", "CALMS Framework", "The Three Ways"],
    description:
      "Memahami kultur kolaborasi DevOps, prinsip The Three Ways, framework CALMS, implementasi otomatisasi pipeline CI/CD, dan studi kasus arsitektur cloud Amazon.",
    fileUrl: "/Sertifikat/Belajar Dasar-Dasar DevOps.pdf",
    fileType: "pdf",
  },
  {
    id: "solid",
    title: "Belajar Prinsip Pemrograman SOLID",
    issuer: "Dicoding Indonesia",
    category: "Pemrograman",
    categoryKey: "programming",
    date: "01 Februari 2025",
    year: "2025",
    validUntil: "01 Februari 2028",
    credentialId: "NVP75OY6WXR0",
    credentialUrl: "https://www.dicoding.com/certificates/NVP75OY6WXR0",
    hours: "15 Jam",
    skills: "SOLID Principles, OOP Architecture, Clean Code, Software Design Principles",
    skillsList: ["SOLID Principles", "OOP Architecture", "Clean Code", "Design Patterns"],
    description:
      "Mendalami 5 prinsip arsitektur perangkat lunak SOLID (Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion) untuk menghasilkan kode yang fleksibel, modular, dan maintainable.",
    fileUrl: "/Sertifikat/Belajar Prinsip Pemrograman SOLID.pdf",
    fileType: "pdf",
  },
  {
    id: "sql",
    title: "Belajar Dasar Structured Query Language (SQL)",
    issuer: "Dicoding Indonesia",
    category: "Data & Basis Data",
    categoryKey: "data",
    date: "04 Februari 2025",
    year: "2025",
    validUntil: "04 Februari 2028",
    credentialId: "1OP820NQ8PQK",
    credentialUrl: "https://www.dicoding.com/certificates/1OP820NQ8PQK",
    hours: "11 Jam",
    skills: "SQL, Relational Database, DBMS, DDL & DML, Data Querying",
    skillsList: ["SQL", "Relational Database", "DDL & DML", "Query Optimization"],
    description:
      "Menguasai bahasa SQL dan manajemen basis data relasional (RDBMS), perancangan skema data (DDL), manipulasi data (DML), agregasi, relasi, dan penulisan kueri terstruktur.",
    fileUrl: "/Sertifikat/Belajar Dasar Structured Query Language (SQL).pdf",
    fileType: "pdf",
  },
  {
    id: "data-science",
    title: "Belajar Dasar Data Science",
    issuer: "Dicoding Indonesia",
    partner: "Google Developers",
    category: "Data & Basis Data",
    categoryKey: "data",
    date: "18 Februari 2025",
    year: "2025",
    validUntil: "18 Februari 2028",
    credentialId: "JMZVE493QPN9",
    credentialUrl: "https://www.dicoding.com/certificates/JMZVE493QPN9",
    hours: "11 Jam",
    skills: "Data Science, Data Analysis Lifecycle, Machine Learning Concepts, Data Decision Making",
    skillsList: ["Data Science", "Machine Learning", "Data Lifecycle", "Python & SQL"],
    description:
      "Mengenal fondasi data science bersama Google Developers Partner, siklus analisis data, pengenalan algoritma machine learning di industri, dan metode pemanfaatan data untuk strategi bisnis.",
    fileUrl: "/Sertifikat/Belajar Dasar Data Science.pdf",
    fileType: "pdf",
  },
  {
    id: "data-vis",
    title: "Belajar Dasar Visualisasi Data",
    issuer: "Dicoding Indonesia",
    partner: "Google Developers",
    category: "Data & Basis Data",
    categoryKey: "data",
    date: "18 Februari 2025",
    year: "2025",
    validUntil: "18 Februari 2028",
    credentialId: "81P2L472NZOY",
    credentialUrl: "https://www.dicoding.com/certificates/81P2L472NZOY",
    hours: "16 Jam",
    skills: "Visualisasi Data, Google Sheets, Prinsip Gestalt, Preattentive Attributes, Data Storytelling",
    skillsList: ["Google Sheets", "Visualisasi Data", "Gestalt Principles", "Data Storytelling"],
    description:
      "Mempelajari transformasi dataset mentah menjadi visualisasi grafik yang komunikatif menggunakan Google Sheets, prinsip Gestalt, atribut pra-perhatian, dan teknik data storytelling.",
    fileUrl: "/Sertifikat/Belajar Dasar Visualisasi Data.pdf",
    fileType: "pdf",
  },
  {
    id: "java",
    title: "Memulai Pemrograman Dengan Java",
    issuer: "Dicoding Indonesia",
    category: "Pemrograman",
    categoryKey: "programming",
    date: "18 Februari 2025",
    year: "2025",
    validUntil: "18 Februari 2028",
    credentialId: "KEXL7Y8YYXG2",
    credentialUrl: "https://www.dicoding.com/certificates/KEXL7Y8YYXG2",
    hours: "15 Jam",
    skills: "Java, Object-Oriented Programming (OOP), Collections, Exception Handling",
    skillsList: ["Java", "OOP", "Collections Framework", "Exception Handling"],
    description:
      "Mempelajari sintaks dasar Java, struktur data koleksi (List, Set, Map), pilar Object-Oriented Programming (Inheritance, Polymorphism, Abstraction, Encapsulation), dan penanganan error.",
    fileUrl: "/Sertifikat/Pemrograman Dengan Java.pdf",
    fileType: "pdf",
  },
  {
    id: "dart",
    title: "Memulai Pemrograman dengan Dart",
    issuer: "Dicoding Indonesia",
    partner: "Google Developers",
    category: "Pemrograman",
    categoryKey: "programming",
    date: "01 Februari 2025",
    year: "2025",
    validUntil: "01 Februari 2028",
    credentialId: "L4PQEGMMOPO1",
    credentialUrl: "https://www.dicoding.com/certificates/L4PQEGMMOPO1",
    hours: "20 Jam",
    skills: "Dart, Dart Type System, OOP, Asynchronous Futures, Effective Dart",
    skillsList: ["Dart", "OOP", "Async Futures", "Effective Dart"],
    description:
      "Mempelajari dasar bahasa pemrograman Dart dengan standar industri Google, konsep OOP, type system, proses asynchronous dengan Future, dan konvensi penulisan Effective Dart.",
    fileUrl: "/Sertifikat/Memulai Pemrograman dengan Dart.pdf",
    fileType: "pdf",
  },
  {
    id: "dasar-js",
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding Indonesia",
    partner: "AWS",
    category: "Pemrograman",
    categoryKey: "programming",
    date: "29 September 2024",
    year: "2024",
    validUntil: "29 September 2027",
    credentialId: "KEXLY3R1MZG2",
    credentialUrl: "https://www.dicoding.com/certificates/KEXLY3R1MZG2",
    hours: "46 Jam",
    skills: "JavaScript ES6+, OOP, Functional Programming, Asynchronous (Promise, async/await), Code Quality",
    skillsList: ["JavaScript ES6+", "Async / Await", "OOP", "Functional Programming"],
    description:
      "Memahami esensi JavaScript modern (ES6+), struktur data lanjutan, OOP, functional programming, asynchronous runtime, hingga pengujian dan penulisan kode berkualitas.",
    fileUrl: "/Sertifikat/Belajar Dasar Pemrograman JavaScript.pdf",
    fileType: "pdf",
  },
  {
    id: "english-score",
    title: "EnglishScore Core Skills CEFR B1 - Intermediate",
    issuer: "British Council",
    partner: "Universitas Atma Jaya Yogyakarta",
    category: "Bahasa Inggris",
    categoryKey: "language",
    date: "25 Juni 2024",
    year: "2024",
    credentialId: "76712df1",
    credentialUrl: "https://englishscore.com/verify",
    score: "Skor 342 · CEFR B1 Intermediate",
    skills: "English Professional, Grammar (392), Vocabulary (377), Reading (291), Listening (307)",
    skillsList: ["English Professional", "CEFR B1", "Grammar 392", "Vocab 377", "Listening 307"],
    description:
      "Sertifikasi uji kompetensi bahasa Inggris berstandar internasional dari British Council dengan pencapaian CEFR Level B1 (Intermediate) untuk komunikasi kerja dan profesional.",
    fileUrl: "/Sertifikat/English Score_220711901_Imanuella Daniel.pdf",
    fileType: "pdf",
  },
  {
    id: "ossi-matematika",
    title: "Olimpiade Sains Seluruh Indonesia (OSSI) – Bidang Matematika",
    issuer: "Pusat Kejuaraan Sains Nasional (PUSKANAS.id)",
    partner: "Yayasan Berlian Hati Mulia",
    category: "Prestasi & Akademik",
    categoryKey: "achievement",
    date: "26 Februari 2023",
    year: "2023",
    credentialId: "0354950 /BHM-PUSKANAS/OSSI-S/II/2023",
    skills: "Matematika, Pemecahan Masalah Kuantitatif, Analisis Logika Komputasi",
    skillsList: ["Matematika", "Problem Solving", "Logika Kuantitatif"],
    description:
      "Piagam penghargaan sebagai Peserta Aktif dalam ajang kompetisi sains tingkat nasional perguruan tinggi se-Indonesia (OSSI) pada bidang Matematika.",
    fileUrl: "/Sertifikat/6 OSSI MATEMATIKA.pdf",
    fileType: "pdf",
  },
  {
    id: "pemikiran-desain",
    title: "Pameran Pemikiran Desain dan Kreatifitas (Design Thinking)",
    issuer: "Universitas Atma Jaya Yogyakarta",
    partner: "Prodi Informatika - Fakultas Teknologi Industri",
    category: "Prestasi & Akademik",
    categoryKey: "achievement",
    date: "Tahun Ajaran 2022/2023",
    year: "2023",
    skills: "Design Thinking, Ideasi Solusi Digital, Kreativitas, UI/UX Prototyping",
    skillsList: ["Design Thinking", "Inovasi Kreatif", "Prototyping", "Kreativitas"],
    description:
      "Sertifikat partisipasi sebagai Peserta dalam Pameran Karya Inovasi Mahasiswa Mata Kuliah Pemikiran Desain dan Kreatifitas Program Studi Informatika UAJY Tahun 2022/2023.",
    fileUrl: "/Sertifikat/8 Imanuella Daniel.png",
    fileType: "image",
  },
];

export const timeline: TimelineItem[] = [
  ...workExperience,
  ...organizationExperience,
];
