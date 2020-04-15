let ugolyicons = L.layerGroup().addTo(map);
function UgolyOnOff() {
	let chbox;
	chbox=document.getElementById('UgolyButton');
	if (chbox.checked) {
		let ugoly = [
			[-90939, -123647],
			[-111451, -116808],
			[-121448, -99246],
			[-152323, -52285],
			[-58786, -136426],
			[-82861, -137703],
			[-127949, -138649],
			[-163604, -137600],
			[-72026, 139873],
			[42952, 194274],
			[-68999, 48588],
			[-85135, 14080],
			[149935, 53764],
			[152273, 21063],
			[59738, 105035],
			[100860, 71102],
			[75559, 27540]
		];
		for (let i = 0; i < ugoly.length; i++) {
			new L.Marker([ugoly[i][0],ugoly[i][1]], {icon: icon_ugoly})
				.bindPopup("Месторождение угля")
				.bindTooltip("Месторождение угля", {direction: 'top'})
				.addTo(ugolyicons);
		}
	}
	else {
		ugolyicons.clearLayers();
	}
}