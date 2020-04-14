let reminingicons = L.layerGroup().addTo(map);
function REMiningOnOff() {
	let chbox;
	chbox=document.getElementById('REMiningButton');
	if (chbox.checked) {
		let remining = [
			[-71790,-145200],
			[-124429,-55561],
			[-119651,-106150],
			[-169197,157889],
			[-101219,129455],
			[105208,-62759],
			[163229,-117548],
			[202848,167592],
			[88893,22984],
			[16981,15481],
			[160358,-71205]
		];
		
		for (let i = 0; i < remining.length; i++) {
			new L.Marker([remining[i][0],remining[i][1]], {icon: icon_random6})
				.bindPopup("Место случайной встречи (Mining)")
				.bindTooltip("Место случайной встречи (Mining)", {direction: 'top'})
				.addTo(reminingicons);
		}
	}
	else {
		reminingicons.clearLayers();
	}
}

