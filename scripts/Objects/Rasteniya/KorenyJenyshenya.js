let korenyjenyshenyaicons = L.layerGroup().addTo(map);
function KorenyJenyshenyaOnOff() {
	let chbox;
	chbox=document.getElementById('KorenyJenyshenyaButton');
	if (chbox.checked) {
		let korenyjenyshenya = [
			[-43155, -6546],
			[-43129, -6512],
			[-43052, -6360],
			[-52813, -926],
			[-73567, -34153],
			[-73617, -34380],
			[90168, -111779],
			[-32162, 171534],
			[-24725, 187312],
			[-24725, 188091],
			[-23662, 186379],
			[-24444, 187049],
			[-24415, 187725],
			[-36166, 171081],
			[-36421, 170942],
			[15032, 197339],
			[11643, 182819],
			[100340, 27769],
			[98078, 25804],
			[62138, 12389],
			[57078, 17166],
			[58774, 19116],
			[53295, 22051],
			[56730, 22744],
			[54862, 24868]
		];
		for (let i = 0; i < korenyjenyshenya.length; i++) {
			new L.circleMarker([korenyjenyshenya[i][0],korenyjenyshenya[i][1]], {pane: "top", color: "#B5B8B1"})
			.bindPopup("Корень женьшеня")
			.bindTooltip("Корень женьшеня", {direction: 'top'})
			.addTo(korenyjenyshenyaicons);
		}
	}
	else {
		korenyjenyshenyaicons.clearLayers();
	}
}