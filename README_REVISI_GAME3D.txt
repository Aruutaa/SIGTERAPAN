PROJECT REVISI GAME 3D

Perubahan utama:
1. Garis dash hijau dari depok.geojson tidak lagi digambar di peta, karena terlihat seperti rute yang tidak jelas.
2. Mode 3D diperbaiki agar tidak bergantung pada Cesium Ion token. Basemap memakai OSM tile dan bangunan 3D diambil dari Overpass OSM.
3. Jika Overpass OSM lambat atau gagal, sistem otomatis membuat fallback 3D building block agar mode 3D tetap muncul.
4. Ditambahkan mode jelajah 3D seperti game sederhana. Gunakan W/A/S/D atau tombol panah. Q/E untuk berputar. Shift untuk gerak lebih cepat.
5. Avatar akan mendeteksi zona buffer berdasarkan radius yang dipilih di sidebar. Saat masuk buffer, informasi lokasi dan hasil analisis muncul otomatis.
6. Kalender aktivitas fiktif diganti menjadi aktivitas warga real-time berbasis keyword OSM: park, garden, fitness, sports centre, library, community centre, dan place_of_worship.
7. Jika data aktivitas real-time gagal dimuat, kartu aktivitas otomatis memakai rekomendasi dari database lokal.
8. Popup dan sidebar tidak lagi memicu rute otomatis. Tombol diganti menjadi Lihat di 3D Game.
9. Dashboard dibuat lebih realistis berdasarkan jumlah titik dan skor analisis dari dataset.

Catatan GitHub Pages:
- Upload isi folder ZIP ke root repository, bukan folder pembungkusnya.
- Pastikan index.html berada langsung di root.
- File .nojekyll tetap disertakan.
- Fitur OSM real-time membutuhkan koneksi internet. Jika API OSM sedang limit, fallback akan aktif dan aplikasi tetap berjalan.
