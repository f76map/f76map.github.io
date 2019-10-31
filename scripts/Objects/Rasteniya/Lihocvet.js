	var lihocveticons = L.layerGroup().addTo(map);
	function LihocvetOnOff() {
	var chbox;
	chbox=document.getElementById('LihocvetButton');
	if (chbox.checked) {
	L.circleMarker([71179, -172735], {pane: "top", color: "#20B2AA"}).addTo(lihocveticons).bindPopup("Лихоцвет").bindTooltip("Лихоцвет");
	}
	else {
		lihocveticons.clearLayers();
	}
}