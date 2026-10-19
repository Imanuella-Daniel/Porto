export interface Screenshot {
  src: string;
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
    id: 'perpus',
    title: 'Library BBPPKS Jayapura',
    tagline: 'Sistem Informasi Perpustakaan Digital & Sirkulasi Buku',
    category: 'Web Development · Information System',
    year: '2026',
    role: 'Fullstack Developer',
    duration: '',
    team: 'Proyek Mandiri / Balai Besar Jayapura',
    tech: ['Laravel', 'MySQL', 'Tailwind CSS', 'Alpine.js'],
    description: 'Aplikasi web perpustakaan digital untuk Balai Besar Pendidikan dan Pelatihan Kesejahteraan Sosial (BBPPKS) Jayapura, menyediakan katalog publik interaktif, otomasi sampul buku, dashboard peminjaman anggota, dan panel sirkulasi admin terpadu.',
    problem: 'Pencarian koleksi buku, pencatatan peminjaman, dan pemantauan ketersediaan eksemplar fisik memerlukan sistem terpusat yang modern dan mudah diakses oleh civitas dan staf.',
    solution: 'Membangun platform perpustakaan modern dengan katalog publik informatif, otomatisasi metadata sampul buku, dashboard riwayat peminjaman member, serta manajemen eksemplar dan sirkulasi untuk admin.',
    features: [
      'Katalog buku publik dengan pencarian, filter status ketersediaan, dan buku populer',
      'Detail informasi buku lengkap dengan jumlah eksemplar tersedia',
      'Dashboard member untuk memantau status dan batas waktu peminjaman',
      'Panel admin terpadu untuk pencatatan peminjaman, pengembalian, dan denda',
      'Sistem buku tamu digital dan ringkasan statistik koleksi real-time',
    ],
    challenges: 'Mengelola konsistensi status ketersediaan eksemplar buku secara real-time antara peminjaman aktif dan pengembalian.',
    result: 'Memodernisasi operasional perpustakaan, mempermudah pemustaka menemukan referensi, dan mengefisienkan administrasi sirkulasi buku.',
    github: 'https://github.com/Imanuella-Daniel',
    featured: true,
    screenshots: [
      { src: '/projects/Perpus/01-homepage.png', label: 'Beranda Katalog Perpustakaan' },
      { src: '/projects/Perpus/02-katalog-buku.png', label: 'Daftar Katalog Buku' },
      { src: '/projects/Perpus/03-detail-buku.png', label: 'Detail Buku & Eksemplar' },
      { src: '/projects/Perpus/06-dashboard-member.png', label: 'Dashboard Anggota' },
      { src: '/projects/Perpus/07-peminjaman-member.png', label: 'Riwayat Peminjaman Anggota' },
      { src: '/projects/Perpus/08-dashboard-admin.png', label: 'Dashboard Admin Perpustakaan' },
      { src: '/projects/Perpus/09-peminjaman-admin.png', label: 'Sirkulasi Peminjaman Admin' },
      { src: '/projects/Perpus/04-login-member.png', label: 'Halaman Masuk Member' },
      { src: '/projects/Perpus/05-login-admin.png', label: 'Halaman Masuk Admin' },
    ],
  },
  {
    id: 'meetrack',
    title: 'Meetrack',
    tagline: 'Sistem Pemantauan Proyek dan Tindak Lanjut Rapat',
    category: 'Web Development · Information System',
    year: '2026',
    role: 'Web Developer',
    duration: '',
    team: 'Tim Proyek',
    tech: ['Laravel', 'MySQL', 'Bootstrap'],
    description: 'Aplikasi web untuk membantu tim mencatat pertemuan, mengelola isu/masalah, serta memantau progres tindak lanjut proyek dalam satu tempat secara transparan.',
    problem: 'Informasi rapat, masalah operasional, dan progres tindak lanjut tugas sering tercecer dan sulit dipantau ketika pencatatan dilakukan manual terpisah.',
    solution: 'Membangun sistem terstruktur dengan dashboard per peran pengguna, manajemen rapat, pelaporan isu, penunjukan PIC, dan pembaruan progres tugas.',
    features: [
      'Autentikasi dan manajemen pengguna berbasis peran (Role-Based Access Control)',
      'Pencatatan agenda, notulensi, dan detail rapat proyek',
      'Pelaporan isu/masalah beserta status penanganan terstruktur',
      'Dashboard PIC untuk memantau beban tugas dan memperbarui progres tindak lanjut',
    ],
    challenges: 'Menjaga alur data dan hak akses tetap konsisten serta transparan untuk setiap peran pengguna di lapangan.',
    result: 'Menghasilkan alur kerja proyek yang lebih terstruktur dan akuntabel, dari notulensi rapat hingga pembaruan progres oleh PIC.',
    github: 'https://github.com/Imanuella-Daniel',
    featured: true,
    screenshots: [
      { src: '/projects/Meetrack/20_pic_dashboard.png', label: 'Dashboard PIC' },
      { src: '/projects/Meetrack/12_meetings_index.png', label: 'Daftar Rapat' },
      { src: '/projects/Meetrack/17_masalah_create.png', label: 'Tambah Masalah Proyek' },
      { src: '/projects/Meetrack/21_pic_update_progress.png', label: 'Pembaruan Progres PIC' },
      { src: '/projects/Meetrack/01_login.png', label: 'Halaman Masuk' },
      { src: '/projects/Meetrack/02_users_index.png', label: 'Manajemen Pengguna' },
    ],
  },
  {
    id: 'rekom',
    title: 'REKOM',
    tagline: 'Sistem Rekomendasi Internal & Pelaporan Analitik',
    category: 'Web Development · Information System',
    year: '2026',
    role: 'Web Developer',
    duration: '',
    team: 'Tim Proyek',
    tech: ['Laravel', 'MySQL', 'Chart.js'],
    description: 'Aplikasi web untuk tata kelola rekomendasi internal organisasi, mulai dari pencatatan rekomendasi, monitoring tindak lanjut, hingga visualisasi laporan analitis per departemen.',
    problem: 'Data rekomendasi kerja dan status tindak lanjut antar departemen memerlukan pengarsipan terorganisir dan visualisasi data yang mudah dievaluasi pimpinan.',
    solution: 'Membangun dashboard grafik interaktif dengan modul pengelolaan rekomendasi, struktur departemen, jabatan, tanda tangan digital, dan laporan berkala.',
    features: [
      'Dashboard analitik dengan visualisasi grafik rekomendasi bulanan dan per departemen',
      'Modul CRUD lengkap daftar rekomendasi beserta status dan detailnya',
      'Pengelolaan master data departemen, jabatan, dan pengguna sistem',
      'Fitur digital signature dan ekspor laporan untuk kebutuhan evaluasi manajemen',
    ],
    challenges: 'Menyajikan ringkasan visual data analitik yang cepat dipahami eksekutif sekaligus tetap detail saat ditelusuri per rekomendasi.',
    result: 'Memusatkan proses evaluasi rekomendasi internal, memangkas birokrasi manual, dan mempermudah pemantauan performa departemen.',
    github: 'https://github.com/Imanuella-Daniel',
    featured: true,
    screenshots: [
      { src: '/projects/REKOM/02_home_dashboard.png', label: 'Dashboard Analitik' },
      { src: '/projects/REKOM/03_daftar_rekomendasi.png', label: 'Daftar Rekomendasi' },
      { src: '/projects/REKOM/04_add_rekomendasi.png', label: 'Tambah Rekomendasi' },
      { src: '/projects/REKOM/06_report.png', label: 'Laporan Analisis' },
      { src: '/projects/REKOM/07_department.png', label: 'Manajemen Departemen' },
      { src: '/projects/REKOM/08_jabatan.png', label: 'Manajemen Jabatan' },
    ],
  },
  {
    id: 'sap',
    title: 'SAP Internal Plantation',
    tagline: 'Sistem Administrasi & Sinkronisasi Tenaga Kerja',
    category: 'Web Development · Information System',
    year: '2026',
    role: 'Web Developer',
    duration: '',
    team: 'Tim Proyek',
    tech: ['Laravel', 'MySQL', 'Bootstrap'],
    description: 'Aplikasi web operasional internal untuk mengelola master pengumuman, panduan kode transaksi (TCode), hierarki peran, dan proses sinkronisasi data tenaga kerja perkebunan.',
    problem: 'Pengelolaan data tenaga kerja lapangan dan dokumentasi transaksi mandor memerlukan portal terpadu dengan integrasi data terpusat.',
    solution: 'Mengembangkan sistem administrasi operasional perkebunan yang terintegrasi dengan modul panduan transaksi SAP, pengelolaan peran, dan sinkronisasi data.',
    features: [
      'Modul sinkronisasi data tenaga kerja lapangan perkebunan',
      'Manajemen pengumuman penting bagi operasional tim mandor',
      'Katalog panduan TCode (Transaction Code) untuk panduan staf',
      'Manajemen pengguna, hierarki peran (Role), dan pemulihan akun',
    ],
    challenges: 'Merancang arsitektur navigasi yang rapi untuk modul-modul administrasi dan menjamin integritas data saat sinkronisasi tenaga kerja.',
    result: 'Menghasilkan sistem internal yang memusatkan operasional mandor lapangan dan mempercepat alur koordinasi data tenaga kerja.',
    github: 'https://github.com/Imanuella-Daniel',
    featured: true,
    screenshots: [
      { src: '/projects/SAP/13_sinkronisasi_tenaga_kerja.png', label: 'Sinkronisasi Tenaga Kerja' },
      { src: '/projects/SAP/04_master_pengumuman.png', label: 'Manajemen Pengumuman' },
      { src: '/projects/SAP/07_master_panduan_tcode.png', label: 'Panduan TCode' },
      { src: '/projects/SAP/10_pengelolaan_user.png', label: 'Pengelolaan Pengguna' },
      { src: '/projects/SAP/12_master_role.png', label: 'Master Role Akses' },
    ],
  },
  {
    id: 'reusemart',
    title: 'ReuseMart',
    tagline: 'Platform E-Commerce Barang Bekas & Donasi Berkelanjutan',
    category: 'Mobile Development · Web Development',
    year: '2025',
    role: 'Fullstack Developer',
    duration: '',
    team: 'Tim Proyek Akademik',
    tech: ['Flutter', 'Laravel', 'Tailwind CSS', 'MySQL'],
    description: 'Platform e-commerce berkelanjutan untuk jual beli barang preloved berkualitas dan donasi barang layak pakai, dilengkapi sistem gamifikasi reward point dan multi-peran pengguna.',
    problem: 'Barang-barang preloved yang masih layak pakai sering terbuang sia-sia, sementara pasar barang bekas konvensional minim verifikasi kelayakan dan tanpa program insentif belanja ramah lingkungan.',
    solution: 'Membangun ekosistem e-commerce sirkular ekonomi dengan pemisahan peran login (Pembeli, Penitip, Pegawai, Organisasi), verifikasi barang titipan, fitur donasi, serta poin reward yang dapat ditukar potongan belanja.',
    features: [
      'Alur masuk multi-peran (Pembeli, Penitip Barang, Pegawai, Organisasi Sosial)',
      'Katalog barang preloved terverifikasi dan kategori produk siap didonasikan',
      'Sistem Reward Poin pada setiap transaksi yang dapat ditukarkan saat checkout',
      'Manajemen keranjang belanja, pemilihan kurir pengiriman, dan ringkasan order',
      'Peringkat penitip terpercaya (Top Rated Penitip) untuk menjaga mutu barang',
    ],
    challenges: 'Mengintegrasikan logika bisnis kompleks multi-peran antara penitip barang, verifikasi pegawai, dan pembeli serta perhitungan poin diskon.',
    result: 'Menghadirkan platform belanja ramah lingkungan yang transparan, mendorong budaya daur ulang barang layak pakai, dan memberi insentif positif bagi pengguna.',
    github: 'https://github.com/Imanuella-Daniel',
    featured: false,
    screenshots: [
      { src: '/projects/Reuse Mart/01_reusemart.png', label: 'Beranda ReuseMart' },
      { src: '/projects/Reuse Mart/05_reusemart.png', label: 'Katalog Produk & Donasi' },
      { src: '/projects/Reuse Mart/06_reusemart.png', label: 'Keranjang Belanja & Checkout' },
      { src: '/projects/Reuse Mart/04_reusemart.png', label: 'Program Reward Poin' },
      { src: '/projects/Reuse Mart/02_reusemart.png', label: 'Pilihan Peran Masuk' },
    ],
  },
  {
    id: 'blue-haven',
    title: 'Blue Haven Hotel',
    tagline: 'Website Reservasi Kamar & Manajemen Layanan Hotel',
    category: 'Web Development',
    year: '2025',
    role: 'Web Developer',
    duration: '',
    team: 'Tim Proyek Akademik',
    tech: ['Laravel', 'Bootstrap', 'MySQL'],
    description: 'Website pemesanan kamar hotel modern yang memudahkan calon tamu mengeksplorasi akomodasi, memesan tipe kamar, memilih paket penawaran khusus, serta panel front office untuk mengelola tamu.',
    problem: 'Pemesanan kamar hotel secara manual rawan salah pencatatan tanggal check-in/check-out dan menyulitkan tamu dalam memilih tipe kamar yang sesuai kebutuhan.',
    solution: 'Merancang website reservasi hotel dengan antarmuka elegan, katalog kamar (Superior, Junior Suite, Suite), formulir booking dengan catatan permintaan khusus, paket meeting/honeymoon, dan panel admin check-in.',
    features: [
      'Landing page informatif dengan showcase fasilitas hotel bintang',
      'Penawaran paket spesial (Meeting Room & Honeymoon Room) dengan diskon',
      'Formulir pemesanan kamar interaktif beserta kalkulasi tarif otomatis',
      'Panel admin front office untuk memantau data tamu, status check-in, dan check-out',
      'Modul registrasi dan autentikasi akun tamu',
    ],
    challenges: 'Membuat alur pemesanan kamar yang ramah pengguna dengan validasi rentang tanggal menginap serta kalkulasi biaya akurat.',
    result: 'Mempermudah proses booking kamar hotel secara mandiri oleh tamu serta mempercepat koordinasi operasional resepsionis hotel.',
    github: 'https://github.com/Imanuella-Daniel',
    featured: false,
    screenshots: [
      { src: '/projects/Blue Hevan/03_Blue_Hevan.jpg', label: 'Beranda Blue Haven Hotel' },
      { src: '/projects/Blue Hevan/04_Blue_Hevan.jpg', label: 'Penawaran Spesial Kamar' },
      { src: '/projects/Blue Hevan/05_Blue_Hevan.jpg', label: 'Detail Kamar & Reservasi' },
      { src: '/projects/Blue Hevan/02_Blue_Hevan.jpg', label: 'Panel Admin Reservasi Kamar' },
      { src: '/projects/Blue Hevan/01_Blue_Hevan.jpg', label: 'Pendaftaran Akun Tamu' },
    ],
  },
  {
    id: 'atma-salon',
    title: 'Atma Salon',
    tagline: 'Aplikasi Mobile Reservasi Perawatan Rambut & Barbershop',
    category: 'Mobile Development',
    year: '2025',
    role: 'Mobile Developer',
    duration: '',
    team: 'Tim Proyek Akademik',
    tech: ['Flutter', 'Laravel', 'MySQL', 'Bootstrap'],
    description: 'Aplikasi mobile reservasi layanan salon dan perawatan rambut berbasis Flutter, memudahkan pelanggan memilih perawat/barber favorit, menentukan jadwal appointment, dan mendapatkan e-receipt QR Code untuk check-in instan.',
    problem: 'Pelanggan salon sering mengalami waktu tunggu antrean yang tidak pasti, serta kesulitan mengetahui ketersediaan barber favorit mereka di hari tertentu.',
    solution: 'Membangun aplikasi mobile pemesanan salon dengan katalog treatment lengkap, profil rating kapster/barber, slot waktu reservasi real-time, serta struk digital QR Code.',
    features: [
      'Katalog lengkap layanan salon (Hair Color, Keratin, Hair Cut, Creambath, Blow)',
      'Daftar profil barber populer beserta rating dan review pelanggan',
      'Pemilihan slot tanggal dan jam reservasi secara fleksibel',
      'Struk reservasi digital (E-Receipt) dilengkapi QR Code untuk check-in salon',
      'Fitur shake-phone promo diskon dan pengelolaan profil akun pengguna',
    ],
    challenges: 'Merancang antarmuka mobile yang bersih, interaktif, dan intuitif dengan responsivitas optimal pada berbagai ukuran layar smartphone.',
    result: 'Meningkatkan kepuasan pelanggan dengan kepastian jadwal kunjungan salon tanpa antre serta digitalisasi sistem tiket reservasi salon.',
    github: 'https://github.com/Imanuella-Daniel',
    featured: false,
    screenshots: [
      { src: '/projects/Atma Salon/02_atma_salon.jpg.jpg', label: 'Beranda & Promo Salon' },
      { src: '/projects/Atma Salon/03_atma_salon.jpg', label: 'Katalog Layanan & Barbers' },
      { src: '/projects/Atma Salon/04_atma_salon.jpg', label: 'Formulir Reservasi Jadwal' },
      { src: '/projects/Atma Salon/05_atma_salon.jpg', label: 'E-Receipt & QR Check-in' },
      { src: '/projects/Atma Salon/06_atma_salon.jpg', label: 'Pengaturan Profil Pengguna' },
      { src: '/projects/Atma Salon/01_atma_salon.jpg', label: 'Halaman Masuk' },
    ],
  },
];

export function getProject(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}
