# Panduan Penempatan Berkas Sertifikat & Dokumen

Silakan taruh berkas sertifikat, magang, atau dokumen bukti lainnya di folder ini:
`public/certificates/`

### Format yang Didukung:
- Dokumen PDF: misalnya `sertifikat-bangkit.pdf`, `magang-nusaputra.pdf`
- Gambar: `sertifikat-1.jpg`, `sertifikat-1.png`

### Cara Menghubungkannya ke Data Portofolio:
Buka file `src/data/portfolio-data.ts`, pada bagian `CERTIFICATIONS` atau `TIMELINE`, kamu cukup mencantumkan path filenya, contoh:
```ts
credentialUrl: "/certificates/nama-sertifikat-kamu.pdf"
```
Website modal Guilloche otomatis bisa membuka dan menampilkan dokumen tersebut kepada pengunjung!
