# Simple Calculator

Sebuah kalkulator web sederhana yang dibangun menggunakan modul ES modern dan Vite.

## Fitur

- Operasi aritmatika dasar: tambah, kurang, kali, bagi
- Dukungan persen
- Tombol hapus (`AC`) dan ganti tanda (`+/-`)
- Riwayat perhitungan disimpan di `localStorage`
- Toggle tema terang/gelap
- Tampilan responsif cocok untuk demo atau portofolio

## Struktur Proyek

- `index.html` - Tata letak utama HTML dan tombol kalkulator
- `src/app.js` - Entry point dan penanganan event UI
- `src/script/calculator.js` - Logika kalkulator dan pemrosesan ekspresi
- `src/script/history.js` - Penyimpanan riwayat dan rendering daftar riwayat
- `src/script/theme.js` - Inisialisasi tema dan toggle tema
- `src/script/keyboard.js` - Dukungan input keyboard
- `src/styles/` - Gaya CSS untuk layout, riwayat, tema, dan reset

## Cara Menjalankan

### Install dependensi

```bash
npm install
```

### Jalankan server development

```bash
npm run dev
```

Buka URL yang ditampilkan di terminal untuk menggunakan kalkulator secara lokal.

### Build untuk produksi

```bash
npm run build
```

### Preview build produksi

```bash
npm run preview
```

## Catatan

- Jika kamu deploy proyek ini, pastikan melakukan pengujian pada perangkat mobile dan memeriksa perilaku riwayat di `localStorage`.
- Implementasi saat ini cocok untuk demo atau portofolio, dengan ruang untuk meningkatkan aksesibilitas dan penanganan kasus tepi.
