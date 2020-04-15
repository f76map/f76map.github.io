let kislotaicons = L.layerGroup().addTo(map);
function KislotaOnOff() {
	let chbox;
	chbox=document.getElementById('KislotaButton');
	if (chbox.checked) {
		let kislota = [
			[180165, -27298],
			[182890, -60081],
			[184819, -60848],
			[184880, -59986],
			[149876, -37578],
			[177255, -72232],
			[205066, -113338],
			[59753, -49514],
			[-94573, 187809],
			[-75002, 153214],
			[-369, 62904],
			[-143091, 52219],
			[-155267, 1961],
			[110947, 104611],
			[67579, 116203],
			[15667, 100795],
			[72865, 97691],
			[77370, 46142],
			[54584, 35392]
		];
		for (let i = 0; i < kislota.length; i++) {
			new L.Marker([kislota[i][0],kislota[i][1]], {icon: icon_kislota})
				.bindPopup("Кислота")
				.bindTooltip("Кислота", {direction: 'top'})
				.addTo(kislotaicons);
		}
	}
	else {
		kislotaicons.clearLayers();
	}
}