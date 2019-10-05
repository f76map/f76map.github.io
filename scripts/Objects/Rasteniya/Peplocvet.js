	var peplocveticons = L.layerGroup().addTo(map);
	function PeplocvetOnOff() {
	var chbox;
	chbox=document.getElementById('PeplocvetButton');
	if (chbox.checked) {
	L.circleMarker([170257, -120254], {color: "#6495ED"}).addTo(peplocveticons).bindPopup("Пеплоцвет").bindTooltip("Пеплоцвет", {direction: 'top'});
	L.circleMarker([170170, -121039], {color: "#6495ED"}).addTo(peplocveticons).bindPopup("Пеплоцвет").bindTooltip("Пеплоцвет", {direction: 'top'});
	L.circleMarker([171153, -120486], {color: "#6495ED"}).addTo(peplocveticons).bindPopup("Пеплоцвет").bindTooltip("Пеплоцвет", {direction: 'top'});
	L.circleMarker([172747, -119570], {color: "#6495ED"}).addTo(peplocveticons).bindPopup("Пеплоцвет").bindTooltip("Пеплоцвет", {direction: 'top'});
	L.circleMarker([171229, -118646], {color: "#6495ED"}).addTo(peplocveticons).bindPopup("Пеплоцвет").bindTooltip("Пеплоцвет", {direction: 'top'});
	L.circleMarker([172063, -118713], {color: "#6495ED"}).addTo(peplocveticons).bindPopup("Пеплоцвет").bindTooltip("Пеплоцвет", {direction: 'top'});
	}
	else {
		peplocveticons.clearLayers();
	}
}