	var cvetokarbuzaicons = L.layerGroup().addTo(map);
	function CvetokArbuzaOnOff() {
	var chbox;
	chbox=document.getElementById('CvetokArbuzaButton');
	if (chbox.checked) {
	L.circleMarker([151544, -73268], {color: "#CD00CD"}).addTo(cvetokarbuzaicons).bindPopup("Цветок дикого арбуза").bindTooltip("Цветок дикого арбуза", {direction: 'top'});
	L.circleMarker([151189, -73290], {color: "#CD00CD"}).addTo(cvetokarbuzaicons).bindPopup("Цветок дикого арбуза").bindTooltip("Цветок дикого арбуза", {direction: 'top'});
	L.circleMarker([171152, -119982], {color: "#CD00CD"}).addTo(cvetokarbuzaicons).bindPopup("Цветок дикого арбуза").bindTooltip("Цветок дикого арбуза", {direction: 'top'});
	L.circleMarker([170378, -119685], {color: "#CD00CD"}).addTo(cvetokarbuzaicons).bindPopup("Цветок дикого арбуза").bindTooltip("Цветок дикого арбуза", {direction: 'top'});
	L.circleMarker([172568, -119670], {color: "#CD00CD"}).addTo(cvetokarbuzaicons).bindPopup("Цветок дикого арбуза").bindTooltip("Цветок дикого арбуза", {direction: 'top'});
	L.circleMarker([173439, -119240], {color: "#CD00CD"}).addTo(cvetokarbuzaicons).bindPopup("Цветок дикого арбуза").bindTooltip("Цветок дикого арбуза", {direction: 'top'});
	L.circleMarker([106544, -23494], {color: "#CD00CD"}).addTo(cvetokarbuzaicons).bindPopup("Цветок дикого арбуза").bindTooltip("Цветок дикого арбуза", {direction: 'top'});
	L.circleMarker([88920, -31554], {color: "#CD00CD"}).addTo(cvetokarbuzaicons).bindPopup("Цветок дикого арбуза").bindTooltip("Цветок дикого арбуза", {direction: 'top'});
	L.circleMarker([61982, -97773], {color: "#CD00CD"}).addTo(cvetokarbuzaicons).bindPopup("Цветок дикого арбуза").bindTooltip("Цветок дикого арбуза", {direction: 'top'});
	L.circleMarker([62136, -97794], {color: "#CD00CD"}).addTo(cvetokarbuzaicons).bindPopup("Цветок дикого арбуза").bindTooltip("Цветок дикого арбуза", {direction: 'top'});
	L.circleMarker([101946, -98835], {color: "#CD00CD"}).addTo(cvetokarbuzaicons).bindPopup("Цветок дикого арбуза").bindTooltip("Цветок дикого арбуза", {direction: 'top'});
	L.circleMarker([101629, -98802], {color: "#CD00CD"}).addTo(cvetokarbuzaicons).bindPopup("Цветок дикого арбуза").bindTooltip("Цветок дикого арбуза", {direction: 'top'});
	L.circleMarker([101898, -98749], {color: "#CD00CD"}).addTo(cvetokarbuzaicons).bindPopup("Цветок дикого арбуза").bindTooltip("Цветок дикого арбуза", {direction: 'top'});
	L.circleMarker([101541, -98811], {color: "#CD00CD"}).addTo(cvetokarbuzaicons).bindPopup("Цветок дикого арбуза").bindTooltip("Цветок дикого арбуза", {direction: 'top'});
	L.circleMarker([-61067, -145281], {color: "#CD00CD"}).addTo(cvetokarbuzaicons).bindPopup("Цветок дикого арбуза").bindTooltip("Цветок дикого арбуза", {direction: 'top'});
	L.circleMarker([-58704, 177839], {color: "#CD00CD"}).addTo(cvetokarbuzaicons).bindPopup("Цветок дикого арбуза").bindTooltip("Цветок дикого арбуза", {direction: 'top'});
	L.circleMarker([-58699, 177562], {color: "#CD00CD"}).addTo(cvetokarbuzaicons).bindPopup("Цветок дикого арбуза").bindTooltip("Цветок дикого арбуза", {direction: 'top'});
	L.circleMarker([-58684, 178276], {color: "#CD00CD"}).addTo(cvetokarbuzaicons).bindPopup("Цветок дикого арбуза").bindTooltip("Цветок дикого арбуза", {direction: 'top'});
	L.circleMarker([-58708, 178687], {color: "#CD00CD"}).addTo(cvetokarbuzaicons).bindPopup("Цветок дикого арбуза").bindTooltip("Цветок дикого арбуза", {direction: 'top'});
	L.circleMarker([-58681, 178053], {color: "#CD00CD"}).addTo(cvetokarbuzaicons).bindPopup("Цветок дикого арбуза").bindTooltip("Цветок дикого арбуза", {direction: 'top'});
	L.circleMarker([-58709, 178484], {color: "#CD00CD"}).addTo(cvetokarbuzaicons).bindPopup("Цветок дикого арбуза").bindTooltip("Цветок дикого арбуза", {direction: 'top'});
	L.circleMarker([-171893, 141616], {color: "#CD00CD"}).addTo(cvetokarbuzaicons).bindPopup("Цветок дикого арбуза").bindTooltip("Цветок дикого арбуза", {direction: 'top'});
	L.circleMarker([-59560, 117244], {color: "#CD00CD"}).addTo(cvetokarbuzaicons).bindPopup("Цветок дикого арбуза").bindTooltip("Цветок дикого арбуза", {direction: 'top'});
//5 в Убежище 94
	}
	else {
		cvetokarbuzaicons.clearLayers();
	}
}