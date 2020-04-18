let cvetokarbuzaicons = L.layerGroup().addTo(map);
function CvetokArbuzaOnOff() {
	let chbox;
	chbox=document.getElementById('CvetokArbuzaButton');
	if (chbox.checked) {
		let cvetokarbuza = [
			[151544, -73268],
			[151189, -73290],
			[171152, -119982],
			[170378, -119685],
			[172568, -119670],
			[173439, -119240],
			[106544, -23494],
			[88920, -31554],
			[61982, -97773],
			[62136, -97794],
			[101946, -98835],
			[101629, -98802],
			[101898, -98749],
			[101541, -98811],
			[-61067, -145281],
			[194472, -165527],
			[-58704, 177839],
			[-58699, 177562],
			[-58684, 178276],
			[-58708, 178687],
			[-58681, 178053],
			[-58709, 178484],
			[-171893, 141616],
			[-59560, 117244]
		];
		for (let i = 0; i < cvetokarbuza.length; i++) {
			new L.circleMarker([cvetokarbuza[i][0],cvetokarbuza[i][1]], {pane: "top", color: "#CD00CD"})
			.bindPopup("Цветок дикого арбуза")
			.bindTooltip("Цветок дикого арбуза", {direction: 'top'})
			.addTo(cvetokarbuzaicons);
		}
	}
	else {
		cvetokarbuzaicons.clearLayers();
	}
}