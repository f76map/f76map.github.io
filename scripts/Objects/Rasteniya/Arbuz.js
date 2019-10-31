	var arbuzicons = L.layerGroup().addTo(map);
	function ArbuzOnOff() {
	var chbox;
	chbox=document.getElementById('ArbuzButton');
	if (chbox.checked) {
	L.circleMarker([-59735, 117369], {pane: "top", color: "#9ACD32"}).addTo(arbuzicons).bindPopup("Арбуз").bindTooltip("Арбуз", {direction: 'top'});
	L.circleMarker([-41518, -175531], {pane: "top", color: "#9ACD32"}).addTo(arbuzicons).bindPopup("Арбуз").bindTooltip("Арбуз", {direction: 'top'});
	}
	else {
		arbuzicons.clearLayers();
	}
}
//1 в Убежище 94
//4 в лаборатории