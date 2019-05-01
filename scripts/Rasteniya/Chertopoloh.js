	var chertopolohicons = L.layerGroup().addTo(map);
	function ChertopolohOnOff() {
	var chbox;
	chbox=document.getElementById('ChertopolohButton');
	if (chbox.checked) {
	L.circleMarker([203831, -30097], {color: "#191970"}).addTo(chertopolohicons).bindPopup("Чертополох").bindTooltip("Чертополох", {direction: 'top'});
	L.circleMarker([204625, -31133], {color: "#191970"}).addTo(chertopolohicons).bindPopup("Чертополох").bindTooltip("Чертополох", {direction: 'top'});
	L.circleMarker([200923, -25464], {color: "#191970"}).addTo(chertopolohicons).bindPopup("Чертополох").bindTooltip("Чертополох", {direction: 'top'});
	L.circleMarker([199250, -16824], {color: "#191970"}).addTo(chertopolohicons).bindPopup("Чертополох").bindTooltip("Чертополох", {direction: 'top'});
	L.circleMarker([197419, -13490], {color: "#191970"}).addTo(chertopolohicons).bindPopup("Чертополох").bindTooltip("Чертополох", {direction: 'top'});
	L.circleMarker([210817, -9974], {color: "#191970"}).addTo(chertopolohicons).bindPopup("Чертополох").bindTooltip("Чертополох", {direction: 'top'});
	L.circleMarker([189330, -32214], {color: "#191970"}).addTo(chertopolohicons).bindPopup("Чертополох").bindTooltip("Чертополох", {direction: 'top'});
	L.circleMarker([188550, -25322], {color: "#191970"}).addTo(chertopolohicons).bindPopup("Чертополох").bindTooltip("Чертополох", {direction: 'top'});
	L.circleMarker([192800, -24600], {color: "#191970"}).addTo(chertopolohicons).bindPopup("Чертополох").bindTooltip("Чертополох", {direction: 'top'});
	L.circleMarker([191023, -23049], {color: "#191970"}).addTo(chertopolohicons).bindPopup("Чертополох").bindTooltip("Чертополох", {direction: 'top'});
	L.circleMarker([191000, -18373], {color: "#191970"}).addTo(chertopolohicons).bindPopup("Чертополох").bindTooltip("Чертополох", {direction: 'top'});
	L.circleMarker([191836, -18571], {color: "#191970"}).addTo(chertopolohicons).bindPopup("Чертополох").bindTooltip("Чертополох", {direction: 'top'});
	L.circleMarker([187201, -14821], {color: "#191970"}).addTo(chertopolohicons).bindPopup("Чертополох").bindTooltip("Чертополох", {direction: 'top'});
	L.circleMarker([188509, -12410], {color: "#191970"}).addTo(chertopolohicons).bindPopup("Чертополох").bindTooltip("Чертополох", {direction: 'top'});
	L.circleMarker([195373, -15084], {color: "#191970"}).addTo(chertopolohicons).bindPopup("Чертополох").bindTooltip("Чертополох", {direction: 'top'});
	L.circleMarker([193518, -14594], {color: "#191970"}).addTo(chertopolohicons).bindPopup("Чертополох").bindTooltip("Чертополох", {direction: 'top'});
	L.circleMarker([192960, -8870], {color: "#191970"}).addTo(chertopolohicons).bindPopup("Чертополох").bindTooltip("Чертополох", {direction: 'top'});
	L.circleMarker([155073, -48302], {color: "#191970"}).addTo(chertopolohicons).bindPopup("Чертополох").bindTooltip("Чертополох", {direction: 'top'});
	L.circleMarker([150589, -82562], {color: "#191970"}).addTo(chertopolohicons).bindPopup("Чертополох").bindTooltip("Чертополох", {direction: 'top'});
	L.circleMarker([161921, -80381], {color: "#191970"}).addTo(chertopolohicons).bindPopup("Чертополох").bindTooltip("Чертополох", {direction: 'top'});
	L.circleMarker([147010, -70361], {color: "#191970"}).addTo(chertopolohicons).bindPopup("Чертополох").bindTooltip("Чертополох", {direction: 'top'});
	L.circleMarker([166459, 8710], {color: "#191970"}).addTo(chertopolohicons).bindPopup("Чертополох").bindTooltip("Чертополох", {direction: 'top'});
	L.circleMarker([150922, 4594], {color: "#191970"}).addTo(chertopolohicons).bindPopup("Чертополох").bindTooltip("Чертополох", {direction: 'top'});
//1 в Ловушки на складке ???
	}
	else {
		chertopolohicons.clearLayers();
	}
}