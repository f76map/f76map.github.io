	var zolotoicons = L.layerGroup().addTo(map);
	function ZolotoOnOff() {
	var chbox;
	chbox=document.getElementById('ZolotoButton');
	if (chbox.checked) {
	icons = new L.marker([76793, 150917], {icon: icon_zoloto}).addTo(zolotoicons).bindPopup("Месторождение золота").bindTooltip("Месторождение золота", {direction: 'top'});
	icons = new L.marker([-11997, -169484], {icon: icon_zoloto}).addTo(zolotoicons).bindPopup("Месторождение золота").bindTooltip("Месторождение золота", {direction: 'top'});
	icons = new L.marker([108470, -63756], {icon: icon_zoloto}).addTo(zolotoicons).bindPopup("Месторождение золота").bindTooltip("Месторождение золота", {direction: 'top'});
	icons = new L.marker([-125148, -52496], {icon: icon_zoloto}).addTo(zolotoicons).bindPopup("Месторождение золота").bindTooltip("Месторождение золота", {direction: 'top'});
	icons = new L.marker([-70845, 179027], {icon: icon_zoloto}).addTo(zolotoicons).bindPopup("Месторождение золота").bindTooltip("Месторождение золота", {direction: 'top'});
	icons = new L.marker([-127737, 156429], {icon: icon_zoloto}).addTo(zolotoicons).bindPopup("Месторождение золота").bindTooltip("Месторождение золота", {direction: 'top'});
	icons = new L.marker([161108, 138097], {icon: icon_zoloto}).addTo(zolotoicons).bindPopup("Месторождение золота").bindTooltip("Месторождение золота", {direction: 'top'});
	icons = new L.marker([198728, 167366], {icon: icon_zoloto}).addTo(zolotoicons).bindPopup("Месторождение золота").bindTooltip("Месторождение золота", {direction: 'top'});
	icons = new L.marker([183653, -59285], {icon: icon_zoloto}).addTo(zolotoicons).bindPopup("Месторождение золота").bindTooltip("Месторождение золота", {direction: 'top'});
	icons = new L.marker([-126230, -191283], {icon: icon_zoloto}).addTo(zolotoicons).bindPopup("Месторождение золота").bindTooltip("Месторождение золота", {direction: 'top'});
	icons = new L.marker([-102522, 37874], {icon: icon_zoloto}).addTo(zolotoicons).bindPopup("Месторождение золота").bindTooltip("Месторождение золота", {direction: 'top'});
	icons = new L.marker([-105974, 41749], {icon: icon_zoloto}).addTo(zolotoicons).bindPopup("Месторождение золота").bindTooltip("Месторождение золота", {direction: 'top'});
	icons = new L.marker([-107786, 38717], {icon: icon_zoloto}).addTo(zolotoicons).bindPopup("Месторождение золота").bindTooltip("Месторождение золота", {direction: 'top'});
	icons = new L.marker([93559, 22143], {icon: icon_zoloto}).addTo(zolotoicons).bindPopup("Месторождение золота").bindTooltip("Месторождение золота", {direction: 'top'});
	icons = new L.marker([-94378, 186293], {icon: icon_zoloto}).addTo(zolotoicons).bindPopup("Месторождение золота").bindTooltip("Месторождение золота", {direction: 'top'});
	icons = new L.marker([19614, 121324], {icon: icon_zoloto}).addTo(zolotoicons).bindPopup("Месторождение золота").bindTooltip("Месторождение золота", {direction: 'top'});
	}
	else {
		zolotoicons.clearLayers();
	}
}