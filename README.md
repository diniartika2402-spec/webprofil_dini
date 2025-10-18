<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div id="welcome-screen">
    <div class="welcome-content">
      <h1>Hai, Selamat Datang di ruang kecilku di dunia digital 🌸</h1>
      <p>Kenalan sama aku yuk ✨</p>
      <button id="startBtn" class="btn">lets go 💕</button>
    </div>
  </div>

  <header>
    <nav class="navbar">
      <h1 class="logo">🌸 My Profile</h1>
      <ul class="nav-links">
        <li><a data-target="home" class="active">Home</a></li>
        <li><a data-target="about">About Me</a></li>
        <li><a data-target="portfolio">Portfolio</a></li>
      </ul>
      <button id="darkModeBtn"></button>
    </nav>
  </header>

  <main>
    <section id="home" class="active home slide">
  <div class="home-text">
    <h2>Hai, aku Dini Artika Rahmawati 💕</h2>
    <p>
      Aku seorang mahasiswi di <b>Universitas Lampung</b> yang memiliki ketertarikan besar di dunia 
      <b>teknologi, desain, dan pengembangan web</b>. Bagiku, setiap baris kode adalah bentuk seni — 
      dan setiap desain adalah cerita yang bisa menyentuh hati ✨
    </p>
    <p>
      Saat ini aku sedang mendalami <b>front-end development</b> dan <b>UI/UX design</b>, 
      sambil terus belajar untuk menciptakan karya yang bukan hanya berfungsi, 
      tapi juga punya sentuhan estetika yang lembut dan bermakna 🌷
    </p>
    <p>
      Lewat website kecil ini, aku ingin berbagi perjalanan belajarku, 
      proyek-proyek yang aku kerjakan, serta hal-hal kecil yang menginspirasi kehidupanku 💖
    </p>
    <button class="btn" onclick="document.querySelector('[data-target=\'portfolio\']').click()">
      Lihat Karyaku ✨
    </button>
  </div>
  <img src="foto/foto_2.jpg" alt="Foto Diri" class="profile-img">
</section>

    <section id="about" class="about slide">
      <div class="about-box">
        <img src="foto/foto_1.jpg" alt="Foto Dini">
        <div class="about-text">
          <h2>Tentang Aku 🌷</h2>
          <p>Halo! Namaku Dini Artika Rahmawati, mahasiswi <b>Pendidikan Teknologi Informasi Fakultas Keguruan & Ilmu Pendidikan</b> di Universitas Lampung.</p>
          <ul>
            <li>🎓 <b>Pendidikan:</b> Universitas Lampung</li>
            <li>💻 <b>Minat:</b> Desain UI/UX, Pemrograman Web, Konten Kreatif</li>
            <li>⭐ <b>Keahlian:</b> HTML, CSS, JavaScript, Canva, Photoshop</li>
            <li>🎨 <b>Hobi:</b> Membaca, desain grafis, fotografi</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="portfolio" class="slide">
      <h2>Portfolio ✨</h2>
      <p>Beberapa karya dan project dummy yang pernah aku buat 👇</p>
      
      <div class="portfolio-grid">
        <div class="card">
          <h3>Sistem Absensi Barcode</h3>
          <p>Mockup aplikasi mobile untuk sistem absensi mahasiswa.</p>
          <embed src="dokumen/Absensi_Barcode.pdf" type="application/pdf" width="100%" height="450px" />
        </div>

        <div class="card">
          <h3>Website Sekolah</h3>
          <p>Pembuatan Website Portofolio Sekolah.</p>
          <embed src="dokumen/Website_Sekolah.pdf" type="application/pdf" width="100%" height="450px" />
        </div>

        <div class="card">
          <h3>Aplikasi Baca Cepat</h3>
          <p>Rancangan & Desain Aplikasi Mobile.</p>
          <embed src="dokumen/Aplikasi_Baca Cepat.pdf" type="application/pdf" width="100%" height="450px" />
        </div>
      </div>

      <div class="contact">
        <h2>Hubungi Aku 💌</h2>
        <p>Kamu bisa menghubungiku lewat form ini atau via media sosial 📩</p>

        <form id="contactForm">
          <input type="text" id="name" placeholder="Nama" required>
          <input type="email" id="email" placeholder="Email" required>
          <textarea id="message" placeholder="Tulis pesanmu..." required></textarea>
          <button type="submit" class="btn">Kirim</button>
        </form>

        <div class="social-links">
  <h3>Atau hubungi aku lewat:</h3>
  <div class="social-box">
    <a href="mailto:diniartika2402@gmail.com" class="social-item" target="_blank">
      <span class="icon">📧</span> diniartika2402@gmail.com
    </a>
    <a href="https://www.instagram.com/dnrtkaa/" class="social-item" target="_blank">
      <span class="icon">📸</span> @dnrtkaa
    </a>
    <a href="https://diniartika2402-spec.github.io/webprofil_dini/" class="social-item" target="_blank">
      <span class="icon">💻</span> GitHub Portfolio
    </a>
  </div>
</div>
    </section>
  </main>

  <footer>
    <p>&copy; 2025 by Dini Artika Rahmawati</p>
  </footer>

  <script src="script.js" defer></script>
</body>
</html>
