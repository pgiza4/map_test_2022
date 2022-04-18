var t_std = new L.tileLayer('http://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
    attribution: "<a href='http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html' target='_blank'>���y�n���@</a>"
});

var t_pale = new L.tileLayer('http://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
    attribution: "<a href='http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html' target='_blank'>���y�n���@</a>"
});

var t_ort = new L.tileLayer('http://cyberjapandata.gsi.go.jp/xyz/ort/{z}/{x}/{y}.jpg', {
    attribution: "<a href='http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html' target='_blank'>���y�n���@</a>"
});

var o_std = new L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&amp;copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
});

var g_roadmap = new L.Google('ROADMAP');

var g_satellite = new L.Google('SATELLITE');

var g_hybrid = new L.Google('HYBRID');

var Map_b = {
    "�n���@�n�} �W��": t_std,
    "�n���@�n�} �W�F": t_pale,
    "�n���@�n�} �I���\": t_ort,
    "OpenStreetMap �W��": o_std,
    "GoogleMap �W��": g_roadmap,
    "GoogleMap �I���\": g_satellite,
    "GoogleMap �n�C�u���b�h": g_hybrid,
};

var map = L.map('map', {
    center: [35.6910766, 139.7350616],
    zoom: 14,
    layers: [t_pale]
});

L.control.scale({ maxWidth: 250, imperial: false }).addTo(map);

L.control.layers(Map_b, null, { collapsed: false }).addTo(map);

$.getJSON("sample.geojson", function (data) {
    L.geoJson(data).addTo(map);
});