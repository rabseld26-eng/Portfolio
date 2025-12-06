let map = L.map('home').setView([51.224416, 4.414788], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let bounds = [[51.228271, 4.401558], [51.220327, 4.430393]];


L.rectangle(bounds, { color: "#e60005", weight: 1 }).addTo(map);