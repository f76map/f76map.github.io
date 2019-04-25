	var chorniytitanicons = L.layerGroup().addTo(map);
	function ChorniyTitanOnOff() {
	var chbox;
	chbox=document.getElementById('ChorniyTitanButton');
	if (chbox.checked) {
	icons = new L.marker([90434, -58005], {icon: icon_titan}).addTo(chorniytitanicons).bindPopup("Месторождение черного титана").bindTooltip("Месторождение черного титана", {direction: 'top'});
	icons = new L.marker([-73160, -140576], {icon: icon_titan}).addTo(chorniytitanicons).bindPopup("Месторождение черного титана").bindTooltip("Месторождение черного титана", {direction: 'top'});
	icons = new L.marker([-116181, -108327], {icon: icon_titan}).addTo(chorniytitanicons).bindPopup("Месторождение черного титана").bindTooltip("Месторождение черного титана", {direction: 'top'});
	icons = new L.marker([-129753, -169855], {icon: icon_titan}).addTo(chorniytitanicons).bindPopup("Месторождение черного титана").bindTooltip("Месторождение черного титана", {direction: 'top'});
	icons = new L.marker([-154674, -126053], {icon: icon_titan}).addTo(chorniytitanicons).bindPopup("Месторождение черного титана").bindTooltip("Месторождение черного титана", {direction: 'top'});
	icons = new L.marker([-99391, -73043], {icon: icon_titan}).addTo(chorniytitanicons).bindPopup("Месторождение черного титана").bindTooltip("Месторождение черного титана", {direction: 'top'});
	icons = new L.marker([162537, -76121], {icon: icon_titan}).addTo(chorniytitanicons).bindPopup("Месторождение черного титана").bindTooltip("Месторождение черного титана", {direction: 'top'});
	icons = new L.marker([-90733, 136015], {icon: icon_titan}).addTo(chorniytitanicons).bindPopup("Месторождение черного титана").bindTooltip("Месторождение черного титана", {direction: 'top'});
	icons = new L.marker([104331, 163248], {icon: icon_titan}).addTo(chorniytitanicons).bindPopup("Месторождение черного титана").bindTooltip("Месторождение черного титана", {direction: 'top'});
	icons = new L.marker([8641, 179010], {icon: icon_titan}).addTo(chorniytitanicons).bindPopup("Месторождение черного титана").bindTooltip("Месторождение черного титана", {direction: 'top'});
	icons = new L.marker([-99050, 130377], {icon: icon_titan}).addTo(chorniytitanicons).bindPopup("Месторождение черного титана").bindTooltip("Месторождение черного титана", {direction: 'top'});
	}
	else {
		chorniytitanicons.clearLayers();
	}
}