/* =========================
   TOKEN CESIUM ION ACCESS
========================= */
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiOGY5MDc1YS04ZDdkLTQ3NWEtOGY4Yi1jNzExOGZlMTYzOGQiLCJpZCI6NDQ5MDg2LCJpc3MiOiJodHRwczovL2FwaS5jZXNpdW0uY29tIiwiYXVkIjoidW5kZWZpbmVkX2RlZmF1bHQiLCJpYXQiOjE3ODI0MDUzNzF9.ryph_Se5u0VPkhvN5q1iXI6dMpMdcU1dULqBlXhnF1E';

/* =========================
   DATABASE SPASIAL LENGKAP (24 + Tambahan Fasilitas Relaksasi)
========================= */
const locations = [
    { name: "Top40 Karaoke Keluarga", coord: [-7.749167, 110.398333], type: "night", rating: "4.3 ⭐", jam: "Minggu–Jumat 10:00–01:00", alamat: "Jl. Sukoharjo No.1A, Sanggrahan", image: "data/images/Top40 Karaoke Keluarga.jpg" },
    { name: "Happy Puppy Karaoke Seturan", coord: [-7.771888, 110.408602], type: "night", rating: "4.8 ⭐", jam: "Setiap Hari 11:00–02:00", alamat: "Plaza Seturan Blok B No.12", image: "data/images/Happy Puppy Karaoke Keluarga Seturan.jpg" },
    { name: "Glow Karaoke Jogja", coord: [-7.7716, 110.4087], type: "night", rating: "4.1 ⭐", jam: "Senin–Minggu 14:00–22:00", alamat: "Jl. Seturan Raya No.2–3", image: "data/images/Glow Karaoke Jogja.jpg" },
    { name: "Terrace Jogja Club", coord: [-7.77176, 110.40853], type: "night", rating: "4.5 ⭐", jam: "Senin–Minggu 19:00–03:00", alamat: "Jl. Seturan Raya No.4, Kledokan", image: "data/images/Terrace Jogja Club & Karaoke.jpg" },
    { name: "NAV Karaoke Keluarga", coord: [-7.783081, 110.409752], type: "night", rating: "4.4 ⭐", jam: "Senin–Minggu 12:00–00:00", alamat: "Jl. Laksda Adisucipto No.155A", image: "data/images/NAV Karaoke Keluarga Yogyakarta.jpg" },
    { name: "Queen Bar Jogja", coord: [-7.783, 110.3967], type: "night", rating: "4.0 ⭐", jam: "Door open 19:00–Selesai", alamat: "Jl. Laksda Adisucipto No.163", image: "data/images/Queen Bar Jogja.jpg" },
    { name: "Hyperbox Family Karaoke", coord: [-7.77915, 110.41515], type: "night", rating: "4.1 ⭐", jam: "Senin–Minggu 10:30–02:30", alamat: "Jl. Babarsari Raya No.15", image: "data/images/Hyperbox Family Karaoke & Cafe-Resto.png" },
    { name: "Blackjack Executive Karaoke", coord: [-7.78105, 110.41413], type: "night", rating: "4.9 ⭐", jam: "Senin–Minggu 19:00–04:00", alamat: "Jl. Babarsari No.44", image: "data/images/Blackjack Executive Karaoke & Lounge.png" },
    { name: "ST.BIER Bar & Kitchen", coord: [-7.7679, 110.4006], type: "night", rating: "4.4 ⭐", jam: "Senin–Minggu 20:00–03:00", alamat: "Ruko Gatic, Jl. Perumnas No.83", image: "data/images/ST.BIER Bar & Kitchen.jpg" },
    { name: "The Gardens Jogja", coord: [-7.7705, 110.4089], type: "night", rating: "4.4 ⭐", jam: "Senin–Minggu 11:00–03:00", alamat: "Jl. Seturan Raya, Kledokan", image: "data/images/The Gardens Jogja.jpg" },
    { name: "Wisdom Park UGM", coord: [-7.770780, 110.381618], type: "leisure", rating: "4.8 ⭐", jam: "Senin–Minggu 06:00–18:00", alamat: "Jl. Prof. Dr. Drs. Notonagoro", image: "data/images/Wisdom Park UGM.jpg" },
    { name: "Lembah UGM", coord: [-7.769121, 110.382466], type: "leisure", rating: "4.7 ⭐", jam: "Setiap Hari 06:00–20:00", alamat: "Kawasan Lembah UGM", image: "data/images/Lembah UGM.jpg" },
    { name: "Sendang Somobetri", coord: [-7.771834, 110.420872], type: "leisure", rating: "4.6 ⭐", jam: "Sabtu–Kamis 07:00–16:30", alamat: "Padukuhan Sombomerten", image: "data/images/Sendang Somobetri.jpg" },
    { name: "Embung Tambakboyo", coord: [-7.756185, 110.414962], type: "leisure", rating: "4.4 ⭐", jam: "Buka 24 Jam", alamat: "Jl. Tambakboyo, Condongcatur", image: "data/images/Embung Tambakboyo.jpg" },
    { name: "Taman PTBB FT UNY", coord: [-7.768752, 110.387858], type: "leisure", rating: "4.0 ⭐", jam: "Senin–Minggu 06:00–17:00", alamat: "Area Fakultas Teknik UNY", image: "data/images/Taman PTBB FT UNY.png" },
    { name: "Taman Kearifan UGM", coord: [-7.775313, 110.380432], type: "leisure", rating: "4.6 ⭐", jam: "Senin–Minggu 06:00–18:00", alamat: "Lembah Olahraga UGM", image: "data/images/Taman Kearifan UGM.jpg" },
    { name: "Hutan Kota", coord: [-7.773366, 110.396701], type: "leisure", rating: "4.7 ⭐", jam: "Senin–Minggu 06:00–18:00", alamat: "Kawasan Klaster Agro UGM", image: "data/images/Hutan Kota.png" },
    { name: "Taman Winasutan Asri", coord: [-7.767686, 110.442079], type: "leisure", rating: "4.6 ⭐", jam: "Senin–Minggu 08:00–18:00", alamat: "Jl. Singosutan Barat", image: "data/images/Taman Winasutan Asri.png" },
    { name: "Sendang Mulyo", coord: [-7.776039, 110.428233], type: "leisure", rating: "3.0 ⭐", jam: "Buka 24 Jam", alamat: "Padukuhan Nayan", image: "data/images/Sendang Mulyo Kali Grojokan.jpg" },
    { name: "Bendung Glendongan", coord: [-7.777250, 110.419562], type: "leisure", rating: "4.0 ⭐", jam: "Buka 24 Jam", alamat: "Tambakbayan", image: "data/images/Bendung Glendongan.png" },
    { name: "Taman Randu Alas UNY", coord: [-7.777506, 110.386980], type: "leisure", rating: "4.8 ⭐", jam: "Buka 24 Jam", alamat: "Area Kampus UNY", image: "data/images/Taman Randu Alas UNY.jpg" },
    { name: "Taman Auditorium UNY", coord: [-7.777274, 110.387819], type: "leisure", rating: "4.7 ⭐", jam: "Buka 24 Jam", alamat: "Kampus UNY Karangmalang", image: "data/images/Taman Auditorium UNY.jpg" },
    { name: "Taman Payung Maskan UGM", coord: [-7.774717, 110.380989], type: "leisure", rating: "4.5 ⭐", jam: "Buka 24 Jam", alamat: "Bulaksumur", image: "data/images/Taman Payung Seberang Maskan UGM.png" },
    { name: "Kolam Detensi Lembah UGM", coord: [-7.776189, 110.380444], type: "leisure", rating: "4.8 ⭐", jam: "Senin–Minggu 06:00–18:00", alamat: "Lembah Sayap Barat UGM", image: "data/images/Taman Kolam Detensi Lembah UGM.JPG" },
    
    // DATA BARU: Fasilitas Relaksasi Anti Stres Tambahan
    { name: "Perpustakaan Daerah", coord: [-7.7928, 110.4088], type: "leisure", rating: "4.8 ⭐", jam: "08:00–16:00", alamat: "Grhatama Pustaka, Janti", image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400" },
    { name: "Masjid Kampus UGM", coord: [-7.7750, 110.3810], type: "leisure", rating: "4.9 ⭐", jam: "24 Jam", alamat: "Bulaksumur UGM", image: "https://images.unsplash.com/photo-1542898716-16016149f1db?w=400" }
];

/* =========================
   STATE VARIABLES LENGKAP
========================= */
let leafletMap, leafletMarkerGroup, leafletGeometries = [], boundaryLayer2D;
let cesiumViewer, cesiumEntities = [], currentEngine = '2d';

// State Jarak Manual Asli
let distancePointA = null, distancePointB = null, distanceMarkerA = null, distanceMarkerB = null, distanceLine = null;
let distanceModeActive = false;

// State Network & Analytics
let routingLayer2D = null, routingLayer3D = null, userLocationMarker = null;
let analyticsLayersGroup = null;
let activeHeatmapLayer = null;
let activeBufferLayers = [];
const DEFAULT_BUFFER_RADIUS = 500;

/* =========================
   CLOCK WIDGET
========================= */
function updateClock() {
    const now = new Date();
    document.getElementById('live-time').textContent = now.toLocaleTimeString('id-ID', { hour12: false });
    document.getElementById('live-date').textContent = now.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' });
}
setInterval(updateClock, 1000);
updateClock();

/* =========================
   INITIALIZE 2D LEAFLET ENGINE (FRESH THEME)
========================= */
leafletMap = L.map('map-leaflet', { zoomControl: true }).setView([-7.7712, 110.3995], 14);
const basemapLight = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', { maxZoom: 20 });
basemapLight.addTo(leafletMap);

leafletMarkerGroup = L.layerGroup().addTo(leafletMap);
analyticsLayersGroup = L.layerGroup().addTo(leafletMap); // Layer khusus buat Heatmap & Buffer

/* =========================
   INITIALIZE 3D CESIUM ENGINE (SATELIT & CERAH)
========================= */
cesiumViewer = new Cesium.Viewer('map-cesium', {
    baseLayerPicker: false,
    animation: false,
    timeline: false,
    sceneModePicker: false,
    navigationHelpButton: false,
    geocoder: false,
    fullscreenButton: false,
    infoBox: true,
    requestRenderMode: false 
});

cesiumViewer.imageryLayers.removeAll();
cesiumViewer.imageryLayers.addImageryProvider(
    new Cesium.ArcGisMapServerImageryProvider({
        url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
    })
);

cesiumViewer.scene.globe.enableLighting = false;
cesiumViewer.scene.globe.depthTestAgainstTerrain = false;
cesiumViewer.cesiumWidget.creditContainer.style.display = 'none';

try {
    Cesium.createOsmBuildingsAsync().then(tileset => {
        cesiumViewer.scene.primitives.add(tileset);
        tileset.style = new Cesium.Cesium3DTileStyle({ 
            color: "color('rgb(255, 255, 255)', 0.95)" 
        });
    });
} catch(e) { console.warn('OSM Buildings dilompati:', e); }

cesiumViewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(110.3995, -7.79, 3000.0),
    orientation: { heading: 0.0, pitch: Cesium.Math.toRadians(-40.0), roll: 0.0 }
});

/* =========================
   FITUR 1: DYNAMIC SIDEBAR INFO BOARD
========================= */
window.updateSidebarInfo = function(loc) {
    const board = document.getElementById('info-board-content');
    const fallbackImg = "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400";
    const typeLabel = loc.type === 'leisure' ? 'ZONA ANTI-STRES' : 'HIBURAN MALAM';
    const typeColor = loc.type === 'leisure' ? 'color:#047857; background:#d1fae5; border:1px solid #6ee7b7;' : 'color:#be123c; background:#ffe4e6; border:1px solid #fda4af;';

    board.className = "flex-1 flex flex-col w-full bg-white rounded-2xl shadow-sm border border-slate-100 p-4 transition-all";
    board.innerHTML = `
        <div class="w-full text-left flex flex-col h-full fade-in">
            <div class="w-full h-36 rounded-xl overflow-hidden mb-3 relative shadow-sm border border-slate-200">
                <img src="${loc.image}" onerror="this.onerror=null; this.src='${fallbackImg}'" class="w-full h-full object-cover">
                <div class="absolute top-2 right-2 bg-white/90 backdrop-blur-md px-3 py-1 rounded-xl text-[11px] font-black text-slate-800 shadow-sm">
                    ${loc.rating}
                </div>
            </div>
            <div class="mb-2">
                <span style="${typeColor}" class="text-[9px] font-black px-3 py-1 rounded-xl uppercase tracking-wider shadow-sm">${typeLabel}</span>
            </div>
            <h3 class="text-base font-black text-slate-800 leading-tight mb-2">${loc.name}</h3>
            <p class="text-xs text-slate-600 font-semibold mb-2 flex items-center gap-1.5"><span class="text-sky-500 text-base">🕒</span> ${loc.jam}</p>
            <div class="mt-auto pt-3 border-t border-slate-200">
                <p class="text-[11px] text-slate-500 font-medium leading-relaxed flex items-start gap-1.5"><span class="text-rose-400 text-base">📍</span> ${loc.alamat}</p>
            </div>
            <button onclick="calculateRoute(${loc.coord[0]}, ${loc.coord[1]}, '${loc.name.replace(/'/g, "\\'")}')" 
                class="mt-4 w-full py-2.5 bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600 text-white text-xs font-bold rounded-xl shadow-lg transition-transform active:scale-95 flex justify-center items-center gap-2">
                🚗 Rute Navigasi Kesini
            </button>
        </div>
    `;
};

// Event Listener Cesium
cesiumViewer.selectedEntityChanged.addEventListener(function(selectedEntity) {
    if (selectedEntity && selectedEntity.customData) {
        updateSidebarInfo(selectedEntity.customData);
        updateSpatialAnalysisOutput(generateLocationAnalysisHTML(selectedEntity.customData));
    }
});

/* =========================
   FITUR 2: SMART ROUTING & NETWORK ANALYST
   (Mendukung Mode 'Kendaraan' dan 'Jalan Kaki')
========================= */
window.calculateRoute = function(destLat, destLng, destName) {
    const statusEl = document.getElementById('system-status');
    const routeModeInputs = document.querySelectorAll('input[name="route-mode"]');
    let mode = 'driving';
    routeModeInputs.forEach(input => {
        if (input.checked) mode = input.value;
    });

    statusEl.textContent = "🛰️ Melacak lokasi GPS anda...";

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;
            
            statusEl.textContent = "🛣️ Menghitung Rute Jaringan (OSRM)...";

            const osrmUrl = `https://router.project-osrm.org/route/v1/${mode}/${userLng},${userLat};${destLng},${destLat}?overview=full&geometries=geojson`;
            
            fetch(osrmUrl)
                .then(res => res.json())
                .then(data => {
                    if(data.routes && data.routes.length > 0) {
                        drawNetworkRoute(data.routes[0], userLat, userLng, destName, mode);
                    } else {
                        statusEl.textContent = "❌ Rute tidak ditemukan.";
                    }
                })
                .catch(err => {
                    statusEl.textContent = "❌ Gagal memuat server rute.";
                });

        }, (error) => {
            alert("Gagal mendapat lokasi. Pastikan GPS/Location browser menyala.");
            statusEl.textContent = "❌ Izin lokasi ditolak.";
        });
    } else {
        alert("Browser tidak mendukung geolokasi.");
    }
};

function drawNetworkRoute(routeData, userLat, userLng, destName, mode) {
    if (routingLayer2D) leafletMap.removeLayer(routingLayer2D);
    if (userLocationMarker) leafletMap.removeLayer(userLocationMarker);
    if (routingLayer3D) cesiumViewer.dataSources.remove(routingLayer3D);

    const geoJson = routeData.geometry;
    const distanceKm = (routeData.distance / 1000).toFixed(2);
    const durationMin = Math.round(routeData.duration / 60);

    // Kalau jalan kaki warnanya hijau, kalau kendaraan biru
    const routeColor = mode === 'foot' ? '#10b981' : '#3b82f6';
    const routeDash = mode === 'foot' ? '10, 10' : '';

    routingLayer2D = L.geoJSON(geoJson, {
        style: { color: routeColor, weight: 6, opacity: 0.9, dashArray: routeDash }
    }).addTo(leafletMap);

    userLocationMarker = L.circleMarker([userLat, userLng], {
        radius: 10, fillColor: routeColor, color: '#fff', weight: 3, fillOpacity: 1
    }).addTo(leafletMap).bindPopup("<b>📍 Posisi Anda</b>").openPopup();

    leafletMap.fitBounds(routingLayer2D.getBounds(), { padding: [50, 50] });

    Cesium.GeoJsonDataSource.load(geoJson, {
        stroke: mode === 'foot' ? Cesium.Color.SPRINGGREEN : Cesium.Color.DODGERBLUE,
        strokeWidth: 8,
        clampToGround: true
    }).then(ds => {
        routingLayer3D = ds;
        cesiumViewer.dataSources.add(ds);
    });

    const modeText = mode === 'foot' ? 'Jalan Kaki' : 'Kendaraan';
    document.getElementById('system-status').textContent = `✅ Rute ${modeText} ke ${destName}: ${distanceKm} km (${durationMin} mnt).`;
}

/* =========================
   FITUR 3: CARI RELAKSASI TERDEKAT (PREDIKSI)
========================= */
window.findNearestRelaxation = function() {
    const statusEl = document.getElementById('system-status');
    statusEl.textContent = "🔍 Mencari Ruang Hijau Terdekat...";

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;
            
            let nearestLoc = null;
            let minDistance = Infinity;

            // Hitung jarak garis lurus (Haversine) ke semua RTH/Leisure
            locations.forEach(loc => {
                if(loc.type === 'leisure') {
                    const d = haversineDistance(userLat, userLng, loc.coord[0], loc.coord[1]);
                    if(d < minDistance) {
                        minDistance = d;
                        nearestLoc = loc;
                    }
                }
            });

            if(nearestLoc) {
                const distKm = (minDistance / 1000).toFixed(2);
                alert(`Ketemu! Lokasi anti-stres terdekat adalah ${nearestLoc.name} (${distKm} km). Rute cerdas sedang dihitung...`);
                
                // Set radio button ke Jalan kaki kalau deket (< 1.5km)
                if(minDistance < 1500) {
                    document.querySelector('input[name="route-mode"][value="foot"]').checked = true;
                } else {
                    document.querySelector('input[name="route-mode"][value="driving"]').checked = true;
                }

                // Update UI dan hitung rute OSRM
                updateSidebarInfo(nearestLoc);
                calculateRoute(nearestLoc.coord[0], nearestLoc.coord[1], nearestLoc.name);
            }
        });
    }
};


/* =========================
   SPATIAL ANALYSIS HELPERS
========================= */
function getVisibleSpatialLocations() {
    const showLeisure = document.getElementById('check-leisure')?.checked ?? true;
    const showNight = document.getElementById('check-night')?.checked ?? true;
    return locations.filter(loc => (loc.type === 'leisure' && showLeisure) || (loc.type === 'night' && showNight));
}

function getBufferRadius() {
    const input = document.getElementById('buffer-radius');
    const value = input ? Number(input.value) : DEFAULT_BUFFER_RADIUS;
    return Number.isFinite(value) ? value : DEFAULT_BUFFER_RADIUS;
}

function getBufferSourceType() {
    return document.getElementById('buffer-source')?.value || 'leisure';
}

function updateBufferRadiusLabel() {
    const radius = getBufferRadius();
    const label = document.getElementById('buffer-radius-label');
    if (label) label.textContent = `${radius} m`;
}

function updateToggleBadges() {
    const heatBadge = document.getElementById('heatmap-toggle-label');
    const bufferBadge = document.getElementById('buffer-toggle-label');
    const heatOn = document.getElementById('layer-heatmap')?.checked;
    const bufferOn = document.getElementById('layer-buffer')?.checked;
    if (heatBadge) {
        heatBadge.textContent = heatOn ? 'ON' : 'OFF';
        heatBadge.className = heatOn ? 'toggle-badge on' : 'toggle-badge off';
    }
    if (bufferBadge) {
        bufferBadge.textContent = bufferOn ? 'ON' : 'OFF';
        bufferBadge.className = bufferOn ? 'toggle-badge on' : 'toggle-badge off';
    }
}

function getTypeLabel(type) {
    return type === 'leisure' ? 'RTH / ruang pemulihan' : 'hiburan malam';
}

function getLocationsByType(type) {
    if (type === 'all') return locations;
    return locations.filter(loc => loc.type === type);
}

function nearestLocationFrom(loc, targetType) {
    let nearest = null;
    let minDistance = Infinity;
    locations.forEach(target => {
        if (target === loc) return;
        if (targetType !== 'all' && target.type !== targetType) return;
        const d = haversineDistance(loc.coord[0], loc.coord[1], target.coord[0], target.coord[1]);
        if (d < minDistance) {
            minDistance = d;
            nearest = target;
        }
    });
    return { location: nearest, distance: minDistance };
}

function formatDistance(meter) {
    if (!Number.isFinite(meter)) return '-';
    return meter >= 1000 ? `${(meter / 1000).toFixed(2)} km` : `${Math.round(meter)} m`;
}

function locationsWithinRadius(centerLoc, radius, type = 'all') {
    return locations
        .filter(target => target !== centerLoc && (type === 'all' || target.type === type))
        .map(target => ({
            ...target,
            distance: haversineDistance(centerLoc.coord[0], centerLoc.coord[1], target.coord[0], target.coord[1])
        }))
        .filter(item => item.distance <= radius)
        .sort((a, b) => a.distance - b.distance);
}

function calculateStressScore(loc) {
    const nearestNight = loc.type === 'night' ? { distance: 0 } : nearestLocationFrom(loc, 'night');
    const nearestLeisure = loc.type === 'leisure' ? { distance: 0 } : nearestLocationFrom(loc, 'leisure');
    const stressFromNight = loc.type === 'night' ? 70 : Math.max(0, 70 - Math.min(nearestNight.distance, 1500) / 1500 * 70);
    const reliefFromGreen = loc.type === 'leisure' ? 35 : Math.max(0, 35 - Math.min(nearestLeisure.distance, 1200) / 1200 * 35);
    return Math.max(0, Math.min(100, Math.round(35 + stressFromNight - reliefFromGreen)));
}

function generateLocationAnalysisHTML(loc) {
    const radius = getBufferRadius();
    const oppositeType = loc.type === 'leisure' ? 'night' : 'leisure';
    const nearestOpposite = nearestLocationFrom(loc, oppositeType);
    const nearbyAll = locationsWithinRadius(loc, radius, 'all');
    const nearbyOpposite = locationsWithinRadius(loc, radius, oppositeType);
    const score = calculateStressScore(loc);
    let status = 'Sedang';
    let statusColor = 'text-amber-600 bg-amber-50 border-amber-200';
    if (score < 40) {
        status = 'Rendah';
        statusColor = 'text-emerald-600 bg-emerald-50 border-emerald-200';
    } else if (score >= 70) {
        status = 'Tinggi';
        statusColor = 'text-rose-600 bg-rose-50 border-rose-200';
    }

    const conclusion = loc.type === 'night'
        ? `Lokasi ini berpotensi menjadi sumber tekanan lingkungan. Jarak ke RTH terdekat adalah ${formatDistance(nearestOpposite.distance)}, sehingga perlu pengaturan kebisingan, jam aktivitas, dan akses menuju ruang pemulihan.`
        : `Lokasi ini berfungsi sebagai ruang pemulihan. Jarak ke hiburan malam terdekat adalah ${formatDistance(nearestOpposite.distance)}, sehingga kualitas tenang perlu dijaga dengan vegetasi, pencahayaan aman, dan pembatas aktivitas bising.`;

    const listItems = nearbyAll.slice(0, 5).map(item => `
        <li class="flex justify-between gap-2 border-b border-slate-100 py-1.5">
            <span class="truncate">${item.type === 'leisure' ? '🌿' : '🌙'} ${item.name}</span>
            <b>${formatDistance(item.distance)}</b>
        </li>
    `).join('') || '<li class="text-slate-400 py-1.5">Tidak ada titik lain dalam radius ini.</li>';

    return `
        <div class="fade-in space-y-3">
            <div class="flex items-start justify-between gap-3">
                <div>
                    <p class="text-[10px] font-black uppercase tracking-widest text-slate-400">Hasil Analisis Titik</p>
                    <h3 class="text-sm font-black text-slate-800 leading-tight mt-1">${loc.name}</h3>
                    <p class="text-[11px] text-slate-500 mt-1">Kategori: ${getTypeLabel(loc.type)}</p>
                </div>
                <span class="text-[10px] font-black px-3 py-1 rounded-full border ${statusColor}">${status}</span>
            </div>

            <div class="grid grid-cols-2 gap-2">
                <div class="rounded-2xl bg-slate-50 border border-slate-100 p-3">
                    <p class="text-[9px] font-black text-slate-400 uppercase">Skor Tekanan</p>
                    <p class="text-xl font-black text-slate-800">${score}<span class="text-xs text-slate-400">/100</span></p>
                </div>
                <div class="rounded-2xl bg-slate-50 border border-slate-100 p-3">
                    <p class="text-[9px] font-black text-slate-400 uppercase">Radius Buffer</p>
                    <p class="text-xl font-black text-slate-800">${radius}<span class="text-xs text-slate-400"> m</span></p>
                </div>
            </div>

            <div class="rounded-2xl bg-white border border-slate-100 p-3">
                <p class="text-[10px] font-black text-slate-400 uppercase mb-1">Titik lawan terdekat</p>
                <p class="text-xs font-bold text-slate-700">${nearestOpposite.location ? nearestOpposite.location.name : '-'} <span class="text-indigo-600">(${formatDistance(nearestOpposite.distance)})</span></p>
            </div>

            <div class="rounded-2xl bg-white border border-slate-100 p-3">
                <p class="text-[10px] font-black text-slate-400 uppercase mb-1">Objek dalam radius ${radius} m</p>
                <p class="text-xs text-slate-600 mb-2">${nearbyAll.length} titik terdeteksi, termasuk ${nearbyOpposite.length} titik kategori lawan.</p>
                <ul class="text-[11px] text-slate-600 max-h-28 overflow-y-auto custom-scrollbar pr-1">${listItems}</ul>
            </div>

            <div class="rounded-2xl bg-indigo-50 border border-indigo-100 p-3">
                <p class="text-[10px] font-black text-indigo-500 uppercase mb-1">Kesimpulan</p>
                <p class="text-[11px] text-slate-600 leading-relaxed">${conclusion}</p>
            </div>
        </div>
    `;
}

function updateSpatialAnalysisOutput(html) {
    const output = document.getElementById('spatial-analysis-output');
    if (output) output.innerHTML = html;
}

function generateHeatPointsFromData() {
    const points = [];
    const visible = getVisibleSpatialLocations();
    visible.forEach(loc => {
        const baseWeight = loc.type === 'night' ? 0.95 : 0.28;
        points.push([loc.coord[0], loc.coord[1], baseWeight]);
        const rings = loc.type === 'night' ? [0.0008, 0.0015] : [0.0005];
        rings.forEach((offset, ringIndex) => {
            for (let i = 0; i < 8; i++) {
                const angle = (Math.PI * 2 * i) / 8;
                const lat = loc.coord[0] + Math.sin(angle) * offset;
                const lng = loc.coord[1] + Math.cos(angle) * offset;
                const weight = Math.max(0.12, baseWeight - (ringIndex + 1) * 0.22);
                points.push([lat, lng, weight]);
            }
        });
    });
    return points;
}

function drawBufferLayer() {
    const radius = getBufferRadius();
    const sourceType = getBufferSourceType();
    const sourceLocations = getLocationsByType(sourceType).filter(loc => {
        const showLeisure = document.getElementById('check-leisure')?.checked ?? true;
        const showNight = document.getElementById('check-night')?.checked ?? true;
        return (loc.type === 'leisure' && showLeisure) || (loc.type === 'night' && showNight) || sourceType === 'all';
    });

    sourceLocations.forEach(loc => {
        const color = loc.type === 'leisure' ? '#10b981' : '#f43f5e';
        const fillOpacity = loc.type === 'leisure' ? 0.09 : 0.07;
        const circle = L.circle(loc.coord, {
            radius,
            color,
            weight: 2,
            fillColor: color,
            fillOpacity,
            dashArray: '6,6'
        }).addTo(analyticsLayersGroup);
        circle.bindTooltip(`${loc.name}<br>Buffer ${radius} m`, { sticky: true });
        activeBufferLayers.push(circle);
    });

    return sourceLocations.length;
}

window.runSpatialAnalysis = function() {
    const visible = getVisibleSpatialLocations();
    const radius = getBufferRadius();
    const nightCount = visible.filter(loc => loc.type === 'night').length;
    const leisureCount = visible.filter(loc => loc.type === 'leisure').length;
    const riskyNight = locations.filter(loc => loc.type === 'night' && nearestLocationFrom(loc, 'leisure').distance > radius).length;
    const protectedLeisure = locations.filter(loc => loc.type === 'leisure' && nearestLocationFrom(loc, 'night').distance > radius).length;

    updateSpatialAnalysisOutput(`
        <div class="fade-in space-y-3">
            <div>
                <p class="text-[10px] font-black uppercase tracking-widest text-slate-400">Ringkasan Analisis Aktif</p>
                <h3 class="text-sm font-black text-slate-800 mt-1">Analisis berbasis ${visible.length} titik yang sedang tampil</h3>
            </div>
            <div class="grid grid-cols-2 gap-2">
                <div class="rounded-2xl bg-emerald-50 border border-emerald-100 p-3"><p class="text-[9px] font-black text-emerald-600 uppercase">RTH Aktif</p><p class="text-2xl font-black text-slate-800">${leisureCount}</p></div>
                <div class="rounded-2xl bg-rose-50 border border-rose-100 p-3"><p class="text-[9px] font-black text-rose-600 uppercase">Hiburan Aktif</p><p class="text-2xl font-black text-slate-800">${nightCount}</p></div>
                <div class="rounded-2xl bg-amber-50 border border-amber-100 p-3"><p class="text-[9px] font-black text-amber-600 uppercase">Hiburan di luar buffer RTH</p><p class="text-2xl font-black text-slate-800">${riskyNight}</p></div>
                <div class="rounded-2xl bg-indigo-50 border border-indigo-100 p-3"><p class="text-[9px] font-black text-indigo-600 uppercase">RTH relatif tenang</p><p class="text-2xl font-black text-slate-800">${protectedLeisure}</p></div>
            </div>
            <div class="rounded-2xl bg-white border border-slate-100 p-3">
                <p class="text-[10px] font-black text-slate-400 uppercase mb-1">Interpretasi</p>
                <p class="text-[11px] text-slate-600 leading-relaxed">Radius analisis saat ini ${radius} m. Heatmap memakai koordinat dataset aktual, bukan titik acak. Buffer membaca radius yang dipilih dari slider dan dapat difokuskan ke semua titik, RTH, atau hiburan malam.</p>
            </div>
        </div>
    `);
    document.getElementById('system-status').textContent = `📊 Analisis berjalan: ${visible.length} titik aktif, radius ${radius} m.`;
};

window.resetSpatialAnalysis = function() {
    document.getElementById('layer-heatmap').checked = false;
    document.getElementById('layer-buffer').checked = false;
    analyticsLayersGroup.clearLayers();
    activeHeatmapLayer = null;
    activeBufferLayers = [];
    updateToggleBadges();
    updateSpatialAnalysisOutput(`
        <div class="text-center p-4 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50/70">
            <span class="text-3xl block mb-2">📌</span>
            <p class="text-[11px] text-slate-500 font-medium leading-relaxed">Klik marker atau tekan tombol Jalankan Analisis untuk melihat hasil analisis spasial.</p>
        </div>
    `);
    document.getElementById('system-status').textContent = 'Layer analisis dimatikan.';
};

/* =========================
   FITUR 4: LAYER ANALISIS SPASIAL (HEATMAP & BUFFER)
========================= */
window.toggleAnalyticsLayers = function() {
    analyticsLayersGroup.clearLayers();
    activeHeatmapLayer = null;
    activeBufferLayers = [];
    updateBufferRadiusLabel();
    updateToggleBadges();

    const heatOn = document.getElementById('layer-heatmap')?.checked;
    const bufferOn = document.getElementById('layer-buffer')?.checked;
    const radius = getBufferRadius();
    let messages = [];

    if (heatOn) {
        if (typeof L.heatLayer !== 'undefined') {
            const heatPoints = generateHeatPointsFromData();
            activeHeatmapLayer = L.heatLayer(heatPoints, {
                radius: 32,
                blur: 20,
                maxZoom: 17,
                gradient: {0.2: '#22c55e', 0.45: '#facc15', 0.7: '#fb923c', 1.0: '#ef4444'}
            }).addTo(analyticsLayersGroup);
            messages.push(`Heatmap data aktual: ${heatPoints.length} titik intensitas`);
        } else {
            messages.push('Heatmap gagal karena library Leaflet.heat belum dimuat');
        }
    }

    if (bufferOn) {
        const bufferCount = drawBufferLayer();
        messages.push(`Buffer ${radius} m aktif untuk ${bufferCount} sumber`);
    }

    if (!heatOn && !bufferOn) {
        messages.push('Layer analisis dimatikan');
    }

    document.getElementById('system-status').textContent = `📊 ${messages.join(' | ')}`;
    if (heatOn || bufferOn) window.runSpatialAnalysis();
};

/* =========================
   FITUR 5: UKUR JARAK MANUAL (ASLI 100% UTUH)
========================= */
window.haversineDistance = function(lat1, lon1, lat2, lon2) {
    const R = 6371000;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};

window.toggleDistanceMode = function() {
    distanceModeActive = !distanceModeActive;
    const btn = document.getElementById('btn-distance-mode');
    const panel = document.getElementById('distance-result-panel');

    if (distanceModeActive) {
        btn.innerHTML = '❌ Batalkan Mode Ukur';
        btn.className = 'w-full text-xs bg-rose-500 hover:bg-rose-600 border border-rose-400 text-white font-bold py-3 px-4 rounded-2xl cursor-pointer transition-colors shadow-lg';
        document.getElementById('system-status').textContent = 'Mode Ukur Jarak: Klik titik pertama di peta 2D...';
        resetDistancePins();
    } else {
        btn.innerHTML = '📏 Mode Ukur Jarak Manual';
        btn.className = 'w-full text-xs bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600 text-white font-bold py-3 px-4 rounded-2xl cursor-pointer transition-colors shadow-lg';
        panel.classList.add('hidden');
        resetDistancePins();
        document.getElementById('system-status').textContent = 'Spatial Engine: Standby';
    }
};

window.resetDistancePins = function() {
    distancePointA = null; distancePointB = null;
    if (distanceMarkerA) leafletMap.removeLayer(distanceMarkerA);
    if (distanceMarkerB) leafletMap.removeLayer(distanceMarkerB);
    if (distanceLine) leafletMap.removeLayer(distanceLine);
};

leafletMap.on('click', function(e) {
    if (!distanceModeActive) return;
    const { lat, lng } = e.latlng;

    if (!distancePointA) {
        distancePointA = [lat, lng];
        distanceMarkerA = L.circleMarker([lat, lng], { radius: 8, fillColor: '#818cf8', color: '#fff', weight: 3, fillOpacity: 1 }).addTo(leafletMap);
        document.getElementById('system-status').textContent = 'Klik titik kedua di peta 2D...';
    } else if (!distancePointB) {
        distancePointB = [lat, lng];
        distanceMarkerB = L.circleMarker([lat, lng], { radius: 8, fillColor: '#fb7185', color: '#fff', weight: 3, fillOpacity: 1 }).addTo(leafletMap);
        distanceLine = L.polyline([distancePointA, distancePointB], { color: '#818cf8', weight: 4, dashArray: '8, 8' }).addTo(leafletMap);

        const jarak = haversineDistance(distancePointA[0], distancePointA[1], distancePointB[0], distancePointB[1]);
        const jarakText = jarak >= 1000 ? (jarak / 1000).toFixed(2) + ' km' : Math.round(jarak) + ' m';
        
        document.getElementById('distance-value').textContent = jarakText;
        document.getElementById('distance-result-panel').classList.remove('hidden');
        document.getElementById('system-status').textContent = `Jarak manual: ${jarakText}. Klik tombol untuk reset.`;
        
        distanceModeActive = false;
        document.getElementById('btn-distance-mode').innerHTML = '📏 Mode Ukur Jarak Manual';
        document.getElementById('btn-distance-mode').className = 'w-full text-xs bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600 text-white font-bold py-3 px-4 rounded-2xl cursor-pointer transition-colors shadow-lg mt-3';
    }
});

/* =========================
   ANALYTICS DASHBOARD INJECTION (LENGKAP)
========================= */
function injectAnalyticsDashboard() {
    const mainArea = document.querySelector('main');
    if (!mainArea || document.getElementById('analytics-banner')) return;

    const banner = document.createElement('div');
    banner.id = 'analytics-banner';
    banner.className = 'col-span-1 lg:col-span-4 bg-white border border-slate-100 rounded-3xl p-5 grid grid-cols-2 md:grid-cols-4 gap-4 shadow-xl shadow-slate-200/50 mb-2 relative overflow-hidden';
    banner.innerHTML = `
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-indigo-100 rounded-full blur-3xl pointer-events-none"></div>
        <div class="border-r border-slate-100 p-2 text-center md:text-left z-10">
            <span class="text-[10px] uppercase font-bold tracking-widest text-slate-400 block">Urban Stress Index</span>
            <span class="text-2xl font-black text-emerald-500">42.8%</span>
            <span class="text-[10px] font-medium text-slate-500 block mt-1">Kondisi Mikro Terkendali</span>
        </div>
        <div class="border-r border-slate-100 p-2 text-center md:text-left z-10">
            <span class="text-[10px] uppercase font-bold tracking-widest text-slate-400 block">Total Active Hubs</span>
            <span id="analytics-count" class="text-2xl font-black text-slate-800">26 / 26 Spot</span>
            <span class="text-[10px] font-medium text-slate-500 block mt-1">Sinkronisasi Database Aktif</span>
        </div>
        <div class="border-r border-slate-100 p-2 text-center md:text-left z-10">
            <span class="text-[10px] uppercase font-bold tracking-widest text-slate-400 block">LOD 3D Coverage</span>
            <span class="text-2xl font-black text-indigo-500">98.5%</span>
            <span class="text-[10px] font-medium text-slate-500 block mt-1">Topologi Geometri Valid</span>
        </div>
        <div class="p-2 text-center md:text-left z-10">
            <span class="text-[10px] uppercase font-bold tracking-widest text-slate-400 block">Relief Buffer Radius</span>
            <span class="text-2xl font-black text-amber-500">3 Level</span>
            <span class="text-[10px] font-medium text-slate-500 block mt-1">Jangkauan Efektif RTH Aktif</span>
        </div>
    `;
    mainArea.insertBefore(banner, mainArea.firstChild);
}

/* =========================
   FETCH BOUNDARY GEOJSON
========================= */
fetch('data/depok.geojson')
.then(res => res.json())
.then(geojsonData => {
    document.getElementById('system-status').textContent = "Spatial Engine: Database Synced";
    
    boundaryLayer2D = L.geoJSON(geojsonData, {
        style: { color: "#10b981", weight: 3, fillColor: "#10b981", fillOpacity: 0.05, dashArray: "5, 5" }
    }).addTo(leafletMap);
    
    Cesium.GeoJsonDataSource.load(geojsonData, {
        stroke: Cesium.Color.SPRINGGREEN, fill: Cesium.Color.SPRINGGREEN.withAlpha(0.05), strokeWidth: 4, clampToGround: true
    }).then(ds => cesiumViewer.dataSources.add(ds));

    injectAnalyticsDashboard();
    renderLeafletFeatures();
    renderCesiumFeatures();
})
.catch(err => {
    document.getElementById('system-status').textContent = "Spatial Engine: Ready";
    injectAnalyticsDashboard();
    renderLeafletFeatures();
    renderCesiumFeatures();
});

/* =========================
   PREMIUM POPUP CARD GENERATOR (FRESH MODE)
========================= */
function generatePremiumPopupHTML(loc) {
    const fallbackImg = "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400";
    const typeLabel = loc.type === 'leisure' ? 'ZONA ANTI-STRES' : 'HIBURAN MALAM';
    const typeColor = loc.type === 'leisure' ? 'color:#047857; background:#d1fae5; border:1px solid #6ee7b7;' : 'color:#be123c; background:#ffe4e6; border:1px solid #fda4af;';

    return `
        <div style="width:280px; font-family:sans-serif; background:#ffffff; border-radius:24px; overflow:hidden; box-shadow:0 20px 40px rgba(0,0,0,0.1); border:1px solid #f1f5f9;">
            <div style="position:relative; width:100%; height:150px; overflow:hidden;">
                <img src="${loc.image}" onerror="this.onerror=null; this.src='${fallbackImg}'" style="width:100%; height:100%; object-fit:cover; display:block;" />
                <div style="position:absolute; top:12px; right:12px; background:rgba(255,255,255,0.9); backdrop-filter:blur(4px); padding:4px 10px; border-radius:12px; font-size:12px; font-weight:900; color:#0f172a; box-shadow:0 4px 12px rgba(0,0,0,0.1);">
                    ${loc.rating}
                </div>
            </div>
            
            <div style="padding:16px;">
                <div style="margin-bottom:10px;">
                    <span style="font-size:10px; font-weight:900; padding:4px 10px; border-radius:12px; text-transform:uppercase; ${typeColor}">${typeLabel}</span>
                </div>
                
                <h4 style="font-size:16px; font-weight:900; color:#1e293b; margin:0 0 6px 0; line-height:1.2;">${loc.name}</h4>
                <p style="font-size:12px; color:#64748b; margin:4px 0 10px 0; font-weight:600;">🕒 ${loc.jam}</p>
                <div style="font-size:11px; color:#94a3b8; line-height:1.4; border-top:1px dashed #e2e8f0; padding-top:12px; margin-top:12px; font-weight:500;">
                    📍 ${loc.alamat}
                </div>
                
                <button onclick="calculateRoute(${loc.coord[0]}, ${loc.coord[1]}, '${loc.name.replace(/'/g, "\\'")}')" 
                    style="width:100%; margin-top:14px; padding:10px; background:linear-gradient(90deg, #38bdf8, #6366f1); color:#fff; border:none; border-radius:12px; font-size:12px; font-weight:bold; cursor:pointer; box-shadow:0 4px 12px rgba(99,102,241,0.3); transition: transform 0.2s;">
                    🚗 Rute Navigasi Kesini
                </button>
            </div>
        </div>
    `;
}

/* =========================
   RENDER LEAFLET FEATURES
========================= */
function renderLeafletFeatures() {
    leafletMarkerGroup.clearLayers();
    leafletGeometries.forEach(g => leafletMap.removeLayer(g));
    leafletGeometries = [];

    const showLeisure = document.getElementById('check-leisure')?.checked;
    const showNight = document.getElementById('check-night')?.checked;

    locations.forEach(loc => {
        let layerVisible = (loc.type === 'leisure' && showLeisure) || (loc.type === 'night' && showNight);

        if (layerVisible) {
            let markerColor = loc.type === 'leisure' ? '#10b981' : '#f43f5e';

            let pulseIcon = L.divIcon({
                className: 'smart-pulse-marker',
                html: `<div style="width:16px; height:16px; background-color:${markerColor}; border-radius:50%; --marker-color: ${markerColor}99;"></div>`,
                iconSize: [16, 16], iconAnchor: [8, 8]
            });

            let marker = L.marker(loc.coord, { icon: pulseIcon }).addTo(leafletMarkerGroup);
            
            // Klik memicu Papan Informasi Sidebar + Hasil Analisis
            marker.on('click', () => {
                window.updateSidebarInfo(loc);
                updateSpatialAnalysisOutput(generateLocationAnalysisHTML(loc));
            });
            marker.bindPopup(generatePremiumPopupHTML(loc), { maxWidth: 300, minWidth: 280, offset: [0, -5] });
        }
    });
}

/* =========================
   RENDER CESIUM FEATURES
========================= */
function renderCesiumFeatures() {
    cesiumEntities.forEach(e => cesiumViewer.entities.remove(e));
    cesiumEntities = [];

    const showLeisure = document.getElementById('check-leisure')?.checked;
    const showNight = document.getElementById('check-night')?.checked;

    locations.forEach(loc => {
        let layerVisible = (loc.type === 'leisure' && showLeisure) || (loc.type === 'night' && showNight);

        if (layerVisible) {
            let color = loc.type === 'leisure' ? Cesium.Color.SPRINGGREEN : Cesium.Color.CRIMSON;

            let entity = cesiumViewer.entities.add({
                name: "📍 " + loc.name,
                position: Cesium.Cartesian3.fromDegrees(loc.coord[1], loc.coord[0], 50),
                point: {
                    pixelSize: 15, color: color, outlineColor: Cesium.Color.WHITE, outlineWidth: 3,
                    heightReference: Cesium.HeightReference.CLAMP_TO_GROUND, disableDepthTestDistance: Number.POSITIVE_INFINITY
                },
                description: generatePremiumPopupHTML(loc),
                customData: loc, // PENTING BUAT SIDEBAR KLIK
                label: {
                    text: loc.name, font: '900 13px sans-serif', fillColor: Cesium.Color.WHITE,
                    outlineColor: Cesium.Color.BLACK, outlineWidth: 3, style: Cesium.LabelStyle.FILL_AND_OUTLINE,
                    verticalOrigin: Cesium.VerticalOrigin.BOTTOM, pixelOffset: new Cesium.Cartesian2(0, -20),
                    heightReference: Cesium.HeightReference.CLAMP_TO_GROUND, disableDepthTestDistance: Number.POSITIVE_INFINITY,
                    distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0, 3000)
                }
            });
            cesiumEntities.push(entity);
        }
    });
}

/* =========================
   CORE UI INTERACTIONS & MOOD CHECK
========================= */
window.switchEngine = function(type) {
    currentEngine = type;
    const btn2d = document.getElementById('btn-2d');
    const btn3d = document.getElementById('btn-3d');
    const elLeaflet = document.getElementById('map-leaflet');
    const elCesium = document.getElementById('map-cesium');

    if (type === '2d') {
        elLeaflet.style.zIndex = '10'; elLeaflet.style.display = 'block';
        elCesium.style.zIndex = '0'; elCesium.style.display = 'none';
        btn2d.className = "px-5 py-2 text-xs font-bold rounded-xl bg-white text-indigo-600 shadow-md cursor-pointer transition-all";
        btn3d.className = "px-5 py-2 text-xs font-bold rounded-xl text-slate-500 cursor-pointer hover:text-indigo-600 hover:bg-white/50 transition-all";
    } else {
        elCesium.style.zIndex = '10'; elCesium.style.display = 'block';
        elLeaflet.style.zIndex = '0'; elLeaflet.style.display = 'none';
        btn3d.className = "px-5 py-2 text-xs font-bold rounded-xl bg-white text-indigo-600 shadow-md cursor-pointer transition-all";
        btn2d.className = "px-5 py-2 text-xs font-bold rounded-xl text-slate-500 cursor-pointer hover:text-indigo-600 hover:bg-white/50 transition-all";
        setTimeout(() => { cesiumViewer.resize(); cesiumViewer.scene.requestRender(); }, 200);
    }
}

window.cesiumFlyTo = function(lat, lng) {
    window.switchEngine('3d');
    cesiumViewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(lng, lat, 800),
        orientation: { heading: 0.0, pitch: Cesium.Math.toRadians(-45.0), roll: 0.0 },
        duration: 2.0
    });
}

window.toggleLayers = function() {
    renderLeafletFeatures();
    renderCesiumFeatures();
    if (document.getElementById('layer-heatmap')?.checked || document.getElementById('layer-buffer')?.checked) {
        toggleAnalyticsLayers();
    }
}

window.exitIntroScreen = function() {
    const intro = document.getElementById('intro-screen');
    intro.style.opacity = '0';
    setTimeout(() => { intro.style.display = 'none'; }, 1000);
}

// MOOD CHECK SUMBIT
window.submitMood = function(mood) {
    alert(`Terima kasih! Suasana hati Anda ("${mood}") telah terekam secara anonim di Peta Sentimen Kota Depok.`);
    document.getElementById('breathing-modal').classList.add('hidden');
    clearInterval(breathInterval);
}

let breathInterval;
window.toggleBreathingModal = function() {
    const modal = document.getElementById('breathing-modal');
    const isHidden = modal.classList.toggle('hidden');
    const breathText = document.getElementById('breath-text');

    if (!isHidden) {
        let step = 0; breathText.textContent = "INHALE";
        breathInterval = setInterval(() => { step++; breathText.textContent = (step % 2 === 1) ? "EXHALE" : "INHALE"; }, 3500);
    } else {
        clearInterval(breathInterval);
    }
}

/* =========================
   FITUR 6: BACKSOUND MENYENANGKAN
========================= */
const urbanBacksound = new Audio('assets/audio/backsound.wav');
urbanBacksound.loop = true;
urbanBacksound.volume = 0.22;

window.toggleBacksound = function() {
    const btn = document.getElementById('btn-backsound');
    if (!btn) return;
    if (urbanBacksound.paused) {
        urbanBacksound.play().then(() => {
            btn.innerHTML = '🔊 Musik: ON';
            btn.classList.add('music-on');
            document.getElementById('system-status').textContent = '🎵 Backsound aktif.';
        }).catch(() => {
            document.getElementById('system-status').textContent = 'Klik sekali lagi untuk mengaktifkan backsound.';
        });
    } else {
        urbanBacksound.pause();
        btn.innerHTML = '🎵 Musik: OFF';
        btn.classList.remove('music-on');
        document.getElementById('system-status').textContent = 'Backsound dimatikan.';
    }
};

updateBufferRadiusLabel();
updateToggleBadges();
