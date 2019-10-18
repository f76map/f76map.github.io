var yaycomolerotaicons = L.layerGroup().addTo(map);
function YaycoMolerotaOnOff() {
	var chbox;
	chbox=document.getElementById('YaycoMolerotaButton');
	if (chbox.checked) {
		var yaycomolerota = [
			[72355, -180753],
			[72414, -180832],
			[72477, -180853],
			[72540, -180812],
			[72527, -180710],
			[72430, -180683],
			[72744, -177259],
			[72785, -177320],
			[73480, -177327],
			[73449, -177327],
			[73485, -177283],
			[73513, -177225],
			[73379, -177565],
			[73458, -177517],
			[73485, -177537],
			[73424, -177559],
			[72589, -177353],
			[72588, -177317],
			[72554, -177184],
			[72529, -177210],
			[72531, -177124],
			[73029, -177477],
			[72983, -177449],
			[72981, -177419],
			[73093, -177483],
			[73160, -177489],
			[73192, -177469],
			[73221, -177427]
		];
		for (var i = 0; i < yaycomolerota.length; i++) {
			yaycomolerota_1 = new L.circleMarker([yaycomolerota[i][0],yaycomolerota[i][1]], {color: "#FF0000"})
			.bindPopup("Яйцо молерота")
			.bindTooltip("Яйцо молерота", {direction: 'top'})
			.addTo(yaycomolerotaicons);
		}
	}
	else {
		yaycomolerotaicons.clearLayers();
	}
}