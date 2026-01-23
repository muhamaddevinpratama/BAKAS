# BAKAS - Simple Contact & WhatsApp Sender

Deskripsi:
Aplikasi web sederhana untuk menyimpan data kontak (nama, nomor telepon, pesan) dan mengirim pesan WhatsApp:
- "Open WA" — membuka WhatsApp Web / aplikasi ponsel dengan pesan terisi (user menekan send).
- "Send via Server (Twilio)" — opsi otomatis mengirim dari server menggunakan Twilio WhatsApp API (harus punya akun Twilio dan kredensial).

Struktur:
- server.js         — server Express, API untuk simpan dan kirim (opsional Twilio).
- public/index.html — frontend (form & daftar).
- data.json         — penyimpanan sederhana (file JSON).
- package.json      — dependensi & skrip.
- .env.example      — contoh variabel environment untuk Twilio.

Cara pakai (lokal):
1. Clone / buat folder project, lalu letakkan file-file ini.
2. Install:
   npm install
3. (Opsional) Jika mau enable Twilio server-send, buat file `.env` dari `.env.example` dan isi variabel:
   - TWILIO_ACCOUNT_SID
   - TWILIO_AUTH_TOKEN
   - TWILIO_WHATSAPP_FROM  (contoh: whatsapp:+14155238886)
4. Jalankan:
   node server.js
5. Buka browser: http://localhost:3000

Catatan penting:
- Untuk "Open WA" link (wa.me) nomor harus dalam format internasional tanpa tanda +. Contoh: 6281234567890 (untuk Indonesia).
  Form akan otomatis mengubah nomor yang dimulai dengan 0 menjadi 62 (Indonesia) jika Anda biarkan input biasa.
- Untuk pengiriman otomatis dari server (Twilio): Twilio membatasi pengiriman WhatsApp dan butuh nomor terdaftar; Anda perlu akun Twilio, nomor WhatsApp terverifikasi, dan mungkin biaya.
- Penyimpanan saat ini sederhana: file data.json di server. Untuk produksi gunakan database (Postgres, MongoDB).

Jika Anda mau saya tambahkan:
- Validasi lebih ketat, UI/UX yang lebih baik, atau penyimpanan ke database.
- Integrasi otomatis penuh ke WhatsApp Business API (bukan Twilio) — perlu akses dan akun.

Selanjutnya saya bisa:
- Sesuaikan tampilan frontend Anda,
- Buatkan deployment (Heroku/Vercel/Render) atau Dockerfile jika Anda mau.