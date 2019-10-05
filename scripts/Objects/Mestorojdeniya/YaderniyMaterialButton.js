	var yaderniymaterialicons = L.layerGroup().addTo(map);
	function YaderniyMaterialOnOff() {
	var chbox;
	chbox=document.getElementById('YaderniyMaterialButton');
	if (chbox.checked) {
	icons = new L.marker([-42694, -123128], {icon: icon_yaderniymaterial}).addTo(yaderniymaterialicons).bindPopup("Месторождение урана (Ядерный материал)").bindTooltip("Месторождение урана (Ядерный материал)", {direction: 'top'});
	icons = new L.marker([-146304, -89409], {icon: icon_yaderniymaterial}).addTo(yaderniymaterialicons).bindPopup("Месторождение урана (Ядерный материал)").bindTooltip("Месторождение урана (Ядерный материал)", {direction: 'top'});
	icons = new L.marker([-115486, -87839], {icon: icon_yaderniymaterial}).addTo(yaderniymaterialicons).bindPopup("Месторождение урана (Ядерный материал)").bindTooltip("Месторождение урана (Ядерный материал)", {direction: 'top'});
	icons = new L.marker([-169311, -119320], {icon: icon_yaderniymaterial}).addTo(yaderniymaterialicons).bindPopup("Месторождение урана (Ядерный материал)").bindTooltip("Месторождение урана (Ядерный материал)", {direction: 'top'});
	icons = new L.marker([-156282, -2230], {icon: icon_yaderniymaterial}).addTo(yaderniymaterialicons).bindPopup("Месторождение урана (Ядерный материал)").bindTooltip("Месторождение урана (Ядерный материал)", {direction: 'top'});
	icons = new L.marker([-136426, 190871], {icon: icon_yaderniymaterial}).addTo(yaderniymaterialicons).bindPopup("Месторождение урана (Ядерный материал)").bindTooltip("Месторождение урана (Ядерный материал)", {direction: 'top'});
	icons = new L.marker([-171831, 160691], {icon: icon_yaderniymaterial}).addTo(yaderniymaterialicons).bindPopup("Месторождение урана (Ядерный материал)").bindTooltip("Месторождение урана (Ядерный материал)", {direction: 'top'});
	icons = new L.marker([-157800, -1473], {icon: icon_yaderniymaterial}).addTo(yaderniymaterialicons).bindPopup("Месторождение урана (Ядерный материал)").bindTooltip("Месторождение урана (Ядерный материал)", {direction: 'top'});
	icons = new L.marker([-156824, -1592], {icon: icon_yaderniymaterial}).addTo(yaderniymaterialicons).bindPopup("Месторождение урана (Ядерный материал)").bindTooltip("Месторождение урана (Ядерный материал)", {direction: 'top'});
	icons = new L.marker([70301, 45680], {icon: icon_yaderniymaterial}).addTo(yaderniymaterialicons).bindPopup("Месторождение урана (Ядерный материал)").bindTooltip("Месторождение урана (Ядерный материал)", {direction: 'top'});
	icons = new L.marker([93279, 187919], {icon: icon_yaderniymaterial}).addTo(yaderniymaterialicons).bindPopup("Месторождение урана (Ядерный материал)").bindTooltip("Месторождение урана (Ядерный материал)", {direction: 'top'});
	icons = new L.marker([13654, 11518], {icon: icon_yaderniymaterial}).addTo(yaderniymaterialicons).bindPopup("Месторождение урана (Ядерный материал)").bindTooltip("Месторождение урана (Ядерный материал)", {direction: 'top'});
	icons = new L.marker([148958, 137712], {icon: icon_yaderniymaterial}).addTo(yaderniymaterialicons).bindPopup("Месторождение урана (Ядерный материал)").bindTooltip("Месторождение урана (Ядерный материал)", {direction: 'top'});
	}
	else {
		yaderniymaterialicons.clearLayers();
	}
}