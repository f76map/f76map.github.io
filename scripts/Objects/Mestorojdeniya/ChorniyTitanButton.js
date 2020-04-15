let chorniytitanicons = L.layerGroup().addTo(map);
function ChorniyTitanOnOff() {
	let chbox;
	chbox=document.getElementById('ChorniyTitanButton');
	if (chbox.checked) {
		let titan = [
			[-99391, -73043],
			[-116181, -108327],
			[-154674, -126053],
			[162537, -76121],
			[90434, -58005],
			[-73160, -140576],
			[-129753, -169855],
			[-90733, 136015],
			[8641, 179010],
			[104331, 163248],
			[-99050, 130377]
		];
		for (let i = 0; i < titan.length; i++) {
			new L.Marker([titan[i][0],titan[i][1]], {icon: icon_titan})
				.bindPopup("Месторождение черного титана")
				.bindTooltip("Месторождение черного титана", {direction: 'top'})
				.addTo(chorniytitanicons);
		}	
	}
	else {
		chorniytitanicons.clearLayers();
	}
}