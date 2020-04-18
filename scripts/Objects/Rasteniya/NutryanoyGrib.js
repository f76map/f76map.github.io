let nutryanoygribicons = L.layerGroup().addTo(map);
function NutryanoyGribOnOff() {
	let chbox;
	chbox=document.getElementById('NutryanoyGribButton');
	if (chbox.checked) {
		let nutryanoygrib1 = [
			[99359, 178336],
			[99447, 178387]
		];
		let nutryanoygrib2 = [
			["Нутряной гриб - 10 шт.<br>[Внутри локации Норы]", -3956, 157951]
		];
		
		for (let i = 0; i < nutryanoygrib1.length; i++) {
			new L.circleMarker([nutryanoygrib1[i][0],nutryanoygrib1[i][1]], {pane: "top", color: "#B22222"})
			.bindPopup("Нутряной гриб")
			.bindTooltip("Нутряной гриб", {direction: 'top'})
			.addTo(nutryanoygribicons);
		}
		for (let i = 0; i < nutryanoygrib2.length; i++) {
			new L.circleMarker([nutryanoygrib2[i][1],nutryanoygrib2[i][2]], {pane: "top", color: "#B22222", fillColor: "#000000", fillOpacity: "0.8"})
			.bindPopup(nutryanoygrib2[i][0])
			.bindTooltip(nutryanoygrib2[i][0], {direction: 'top'})
			.addTo(nutryanoygribicons);
		}
	}
	else {
		nutryanoygribicons.clearLayers();
	}
}