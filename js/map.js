var map = L.map('map').setView([44.4658, 26.1182], 20);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([44.4658, 26.1182]).addTo(map)
		.bindPopup('Komora <br>Engineering')
		.openPopup();	