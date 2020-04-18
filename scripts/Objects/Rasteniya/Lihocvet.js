let lihocveticons = L.layerGroup().addTo(map);
function LihocvetOnOff() {
	let chbox;
	chbox=document.getElementById('LihocvetButton');
	if (chbox.checked) {
	L.circleMarker([71179, -172735], {pane: "top", color: "#20B2AA"}).addTo(lihocveticons).bindPopup("Лихоцвет").bindTooltip("Лихоцвет");
	L.circleMarker([-38130, -34473], {pane: "top", color: "#20B2AA", fillColor: "#000000", fillOpacity: "0.8"}).addTo(lihocveticons).bindPopup("Лихоцвет - 32 шт.<br>[Внутри локации Яма]").bindTooltip("Лихоцвет - 32 шт.<br>[Внутри локации Яма]");
	}
	else {
		lihocveticons.clearLayers();
	}
}