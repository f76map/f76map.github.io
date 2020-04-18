let chertopolohicons = L.layerGroup().addTo(map);
function ChertopolohOnOff() {
	let chbox;
	chbox=document.getElementById('ChertopolohButton');
	if (chbox.checked) {
		let chertopoloh = [
			[203831, -30097],
			[204625, -31133],
			[200923, -25464],
			[199250, -16824],
			[197419, -13490],
			[210817, -9974],
			[189330, -32214],
			[188550, -25322],
			[192800, -24600],
			[191023, -23049],
			[191000, -18373],
			[191836, -18571],
			[187201, -14821],
			[188509, -12410],
			[195373, -15084],
			[193518, -14594],
			[192960, -8870],
			[155073, -48302],
			[150589, -82562],
			[161921, -80381],
			[147010, -70361],
			[166459, 8710],
			[150922, 4594]
		];
		for (let i = 0; i < chertopoloh.length; i++) {
			new L.circleMarker([chertopoloh[i][0],chertopoloh[i][1]], {pane: "top", color: "#191970"})
			.bindPopup("Чертополох")
			.bindTooltip("Чертополох", {direction: 'top'})
			.addTo(chertopolohicons);
		}
	}
	else {
		chertopolohicons.clearLayers();
	}
}