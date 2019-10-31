var morkovyicons = L.layerGroup().addTo(map);
function MorkovyOnOff() {
	var chbox;
	chbox=document.getElementById('MorkovyButton');
	if (chbox.checked) {
		var morkovy1 = [
			[-109395, -65019],
			[-109298, -65006],
			[-109481, -65058],
			[171202, -115203],
			[171067, -113913],
			[169518, -113776],
			[171720, -114063],
			[61733, -97632],
			[62001, -97669],
			[61901, -97659],
			[61828, -97638],
			[-27245, -184334],
			[174242, -141059],
			[174202, -141009],
			[174200, -140949],
			[174268, -140966],
			[174147, -140954],
			[174259, -141012],
			[174393, -141181],
			[112469, -154178],
			[69281, -143172],
			[76584, -142399],
			[71013, -133293],
			[73180, -133081],
			[-59759, 178424],
			[-59701, 178716],
			[-59597, 178634],
			[-59613, 178715],
			[-59554, 178713],
			[-59535, 178475],
			[-59727, 178637],
			[-59787, 178521],
			[-59797, 178650],
			[-59654, 178644],
			[-59533, 178594],
			[-59672, 178486],
			[-59591, 178446],
			[-59698, 178547],
			[-59603, 178536],
			[-13925, 107522],
			[-13929, 107498],
			[-49287, 86297],
			[-49290, 86263],
			[-49274, 86237],
			[-49289, 86325],
			[173929, 59626],
			[174469, 59709],
			[173467, 59574],
			[173778, 59610],
			[173618, 59591],
			[174156, 59652],
			[64473, 76800],
			[64449, 76685],
			[64448, 76755],
			[64485, 76721],
			[64509, 76774],
			[64413, 76709],
			[32863, 92255],
			[32917, 92264],
			[32936, 92351],
			[32819, 92291],
			[32889, 92317],
//Кювета
			[-937, -163242]
		];
		var morkovy2 = [
			["Морковь<br>[Внутри локации Бункер Рейли Клэя]", 59527, 185466],
			["Морковь - 8 шт.<br>[Внутри здания Центр &quotВест-Тек Рисерч&quot]", -60624, 88526]
		];
		for (var i = 0; i < morkovy1.length; i++) {
			morkovy1_1 = new L.circleMarker([morkovy1[i][0],morkovy1[i][1]], {pane: "top", color: "#ff8c00"})
			.bindPopup("Морковь")
			.bindTooltip("Морковь", {direction: 'top'})
			.addTo(morkovyicons);
		}
		for (var i = 0; i < morkovy2.length; i++) {
			morkovy2_1 = new L.circleMarker([morkovy2[i][1],morkovy2[i][2]], {pane: "top", color: "#ff8c00", fillColor: "#000000", fillOpacity: "0.8"})
			.bindPopup(morkovy2[i][0])
			.bindTooltip(morkovy2[i][0], {direction: 'top'})
			.addTo(morkovyicons);
		}
	}
	else {
		morkovyicons.clearLayers();
	}
}
//8 в Убежище 94
//3 в лаборатории