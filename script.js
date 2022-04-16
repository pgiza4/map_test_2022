var map = L.map('map');

L.tileLayer('http://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
    attribution: "<a href='http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html' target='_blank'>‘“y’n—‰@</a>"
}).addTo(map);

map.setView([35.681382, 139.766084], 15);