let aluminiyicons = L.layerGroup().addTo(map);
function AluminiyOnOff() {
	let chbox;
	chbox=document.getElementById('AluminiyButton');
	if (chbox.checked) {
		let aluminiy = [
			[-92704, -2910],
			[-87933, -34164],
			[-62198, -127397],
			[-45375, -126394],
			[-73530, -125879],
			[-83785, -103376],
			[-116079, -121651],
			[-169411, -42593],
			[-156506, -95505],
			[-159360, -152355],
			[137488, -156909],
			[31544, -140672],
			[-74557, 135245],
			[-67060, 145513],
			[-132667, 174101],
			[-178712, 179717],
			[-169356, 176621],
			[170472, 199374],
			[193835, 150128],
			[146993, 135288],
			[152498, 135482],
			[150542, 142202],
			[71193, 172117],
			[51315, 160631],
			[-127563, 125194],
			[-80513, 19509],
			[197259, 124930],
			[178450, 109260],
			[142485, 60358],
			[119431, 130668],
			[22088, 122296],
			[30318, 62441]
		];
		for (let i = 0; i < aluminiy.length; i++) {
			new L.Marker([aluminiy[i][0],aluminiy[i][1]], {icon: icon_aluminiy})
				.bindPopup("Месторождение алюминия")
				.bindTooltip("Месторождение алюминия", {direction: 'top'})
				.addTo(aluminiyicons);
		}
	}
	else {
		aluminiyicons.clearLayers();
	}
}