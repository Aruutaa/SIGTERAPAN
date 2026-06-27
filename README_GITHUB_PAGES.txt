CARA UPLOAD KE GITHUB PAGES

1. Upload isi folder PROJECT_GITHUB_FIX ke repository. Jangan upload foldernya sebagai subfolder lagi.
   Struktur yang benar di root repository:
   - index.html
   - css/style.css
   - js/app.js
   - data/depok.geojson
   - data/images/...
   - assets/audio/backsound.wav
   - .nojekyll

2. Buka GitHub > repository > Settings > Pages.
   Source: Deploy from a branch
   Branch: main
   Folder: / (root)

3. Kalau index.html tetap berada di dalam folder PROJECT atau PROJECT_GITHUB_FIX, GitHub Pages tidak akan membaca halaman utama dengan benar.

4. Kalau rute/GPS tidak aktif, cek permission lokasi browser. Di versi ini, kalau GPS ditolak sistem tetap memakai titik tengah peta sebagai fallback.

5. Kalau 3D tidak aktif, 2D tetap berjalan. Penyebab biasanya token Cesium, CDN Cesium, atau WebGL browser.
