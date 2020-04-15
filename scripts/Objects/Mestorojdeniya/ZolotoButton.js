let zolotoicons = L.layerGroup().addTo(map);
function ZolotoOnOff() {
	let chbox;
	chbox=document.getElementById('ZolotoButton');
	if (chbox.checked) {
		let zoloto = [
			[-125148, -52496],
			[183653, -59285],
			[108470, -63756],
			[-11997, -169484],
			[-126230, -191283],
			[-70845, 179027],
			[-94378, 186293],
			[198728, 167366],
			[161108, 138097],
			[76793, 150917],
			[19614, 121324],
			[93559, 22143]
		];
		for (let i = 0; i < zoloto.length; i++) {
			new L.Marker([zoloto[i][0],zoloto[i][1]], {icon: icon_zoloto})
				.bindPopup("Месторождение золота")
				.bindTooltip("Месторождение золота", {direction: 'top'})
				.addTo(zolotoicons);
		}
	}
	else {
		zolotoicons.clearLayers();
	}
}