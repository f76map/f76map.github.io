let yaderniymaterialicons = L.layerGroup().addTo(map);
function YaderniyMaterialOnOff() {
	let chbox;
	chbox=document.getElementById('YaderniyMaterialButton');
	if (chbox.checked) {
		let yaderniymaterial = [
			[-115486, -87839],
			[-42694, -123128],
			[-157800, -1473],
			[-156824, -1592],
			[-156282, -2230],
			[-146304, -89409],
			[-169311, -119320],
			[-136426, 190871],
			[-171831, 160691],
			[148958, 137712],
			[93279, 187919],
			[70301, 45680],
			[13654, 11518]
		];
		for (let i = 0; i < yaderniymaterial.length; i++) {
			new L.Marker([yaderniymaterial[i][0],yaderniymaterial[i][1]], {icon: icon_yaderniymaterial})
				.bindPopup("Месторождение урана (Ядерный материал)")
				.bindTooltip("Месторождение урана (Ядерный материал)", {direction: 'top'})
				.addTo(yaderniymaterialicons);
		}
	}
	else {
		yaderniymaterialicons.clearLayers();
	}
}