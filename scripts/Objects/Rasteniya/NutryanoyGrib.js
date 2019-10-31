	var nutryanoygribicons = L.layerGroup().addTo(map);
	function NutryanoyGribOnOff() {
	var chbox;
	chbox=document.getElementById('NutryanoyGribButton');
	if (chbox.checked) {
	L.circleMarker([-3956, 157951], {pane: "top", color: "#B22222", fillColor: "#000000", fillOpacity: "0.8"}).addTo(nutryanoygribicons).bindPopup("Нутряной гриб - 10 шт.<br>[Внутри локации Норы]").bindTooltip("Нутряной гриб - 10 шт.<br>[Внутри локации Норы]", {direction: 'top'});
	}
	else {
		nutryanoygribicons.clearLayers();
	}
}