	var arbuzicons = L.layerGroup().addTo(map);
	function ArbuzOnOff() {
	var chbox;
	chbox=document.getElementById('ArbuzButton');
	if (chbox.checked) {
	L.circleMarker([-59735, 117369], {pane: "top", color: "#9ACD32"}).addTo(arbuzicons).bindPopup("Арбуз").bindTooltip("Арбуз", {direction: 'top'});
	L.circleMarker([-41518, -175531], {pane: "top", color: "#9ACD32"}).addTo(arbuzicons).bindPopup("Арбуз").bindTooltip("Арбуз", {direction: 'top'});
	
	L.circleMarker([51382, -42352], {pane: "top", color: "#9ACD32", fillColor: "#000000", fillOpacity: "0.8"}).addTo(arbuzicons).bindPopup("Арбуз - 4 шт.<br>[Внутри локации Лаборатория биомов &quotАрктос фарма&quot]").bindTooltip("Арбуз - 2 шт.<br>[Внутри локации Лаборатория биомов &quotАрктос фарма&quot]", {direction: 'top'});
	}
	else {
		arbuzicons.clearLayers();
	}
}