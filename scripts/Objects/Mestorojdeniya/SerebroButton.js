let serebroicons = L.layerGroup().addTo(map);
function SerebroOnOff() {
	let chbox;
	chbox=document.getElementById('SerebroButton');
	if (chbox.checked) {
		let serebro = [
			[-22809, -1266],
			[-28401, -62422],
			[-108208, -47678],
			[-27985, -89382],
			[-132510, -125592],
			[175948, -2611],
			[146012, -11123],
			[-84110, -132770],
			[138848, -160010],
			[136968, -153823],
			[139428, -154535],
			[-92991, 187700],
			[-92986, 163161],
			[-102435, 135872],
			[54905, 137779],
			[55809, 156936],
			[-165342, 9581],
			[179776, 112303],
			[169552, 74152],
			[115185, 88740],
			[76857, 44214],
			[43501, 27241]
		];
		for (let i = 0; i < serebro.length; i++) {
			new L.Marker([serebro[i][0],serebro[i][1]], {icon: icon_serebro})
				.bindPopup("Месторождение серебра")
				.bindTooltip("Месторождение серебра", {direction: 'top'})
				.addTo(serebroicons);
		}
	}
	else {
		serebroicons.clearLayers();
	}
}