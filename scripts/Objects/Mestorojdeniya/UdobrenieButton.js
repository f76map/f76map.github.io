let udobrenieicons = L.layerGroup().addTo(map);
function UdobrenieOnOff() {
	let chbox;
	chbox=document.getElementById('UdobrenieButton');
	if (chbox.checked) {
		let udobrenie = [
			[-155406, -42744],
			[150052, -35939],
			[143981, -69348],
			[124856, -118294],
			[-27013, -142388],
			[-12259, -172597],
			[198261, -162168],
			[142602, -158688],
			[88470, -138828],
			[30144, -140565],
			[25253, -136099],
			[31297, -137825],
			[-25807, 188246],
			[-26148, 194352],
			[-53896, 191710],
			[-36066, 138073],
			[-112376, 135873],
			[-37804, 108817],
			[-10198, 47147],
			[-158008, 122657],
			[172837, 3157]
		];
		for (let i = 0; i < udobrenie.length; i++) {
			new L.Marker([udobrenie[i][0],udobrenie[i][1]], {icon: icon_udobrenie})
				.bindPopup("Месторождение фосфатов (Удобрение)")
				.bindTooltip("Месторождение фосфатов (Удобрение)", {direction: 'top'})
				.addTo(udobrenieicons);
		}
	}
	else {
		udobrenieicons.clearLayers();
	}
}