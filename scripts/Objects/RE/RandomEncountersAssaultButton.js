let reassaulticons = L.layerGroup().addTo(map);
function REAssaultOnOff() {
	let chbox;
	chbox=document.getElementById('REAssaultButton');
	if (chbox.checked) {
		let reassault = [
			[107436, 173102],
			[-31328, 196400],
			[69816, 202368],
			[107480, 107064],
			[162680, 206512],
			[19847, -123055],
			[-114771, 86560],
			[-160050, -43785],
			[-106528, 68420],
			[193515, 125489],
			[-101046, -11749],
			[-155818, -14425],
			[-28587, 17750],
			[-156634, 129533],
			[193631, -144657],
			[-34473, 125051],
			[-65108, 68774],
			[14626, 29607],
			[148868, -68180],
			[172982, 8449],
			[-138166, -142823],
			[-109581, -113692],
			[56079, -67999],
			[77931, -154047],
			[-12922, -35586],
			[-80641, 159508],
			[-172169, 184118],
			[-82879, 198795]
		];
		
		for (let i = 0; i < reassault.length; i++) {
			new L.Marker([reassault[i][0],reassault[i][1]], {icon: icon_random1})
				.bindPopup("Место случайной встречи (Assault)")
				.bindTooltip("Место случайной встречи (Assault)", {direction: 'top'})
				.addTo(reassaulticons);
		}
	}
	else {
		reassaulticons.clearLayers();
	}
}