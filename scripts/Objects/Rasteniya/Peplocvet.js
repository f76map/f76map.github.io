var peplocveticons = L.layerGroup().addTo(map);
function PeplocvetOnOff() {
	var chbox;
	chbox=document.getElementById('PeplocvetButton');
	if (chbox.checked) {
		var peplocvet = [
			[170257, -120254],
			[170170, -121039],
			[171153, -120486],
			[172747, -119570],
			[171229, -118646],
			[172063, -118713]
		];
		for (var i = 0; i < peplocvet.length; i++) {
			peplocvet_1 = new L.circleMarker([peplocvet[i][0],peplocvet[i][1]], {pane: "top", color: "#6495ED"})
			.bindPopup("Пеплоцвет")
			.bindTooltip("Пеплоцвет", {direction: 'top'})
			.addTo(peplocveticons);
		}
	}
	else {
		peplocveticons.clearLayers();
	}
}