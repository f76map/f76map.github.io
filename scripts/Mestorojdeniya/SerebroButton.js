	var serebroicons = L.layerGroup().addTo(map);
	function SerebroOnOff() {
	var chbox;
	chbox=document.getElementById('SerebroButton');
	if (chbox.checked) {
	icons = new L.marker([138848, -160010], {icon: icon_serebro}).addTo(serebroicons).bindPopup("Месторождение серебра").bindTooltip("Месторождение серебра", {direction: 'top'});
	icons = new L.marker([136968, -153823], {icon: icon_serebro}).addTo(serebroicons).bindPopup("Месторождение серебра").bindTooltip("Месторождение серебра", {direction: 'top'});
	icons = new L.marker([139428, -154535], {icon: icon_serebro}).addTo(serebroicons).bindPopup("Месторождение серебра").bindTooltip("Месторождение серебра", {direction: 'top'});
	icons = new L.marker([-27985, -89382], {icon: icon_serebro}).addTo(serebroicons).bindPopup("Месторождение серебра").bindTooltip("Месторождение серебра", {direction: 'top'});
	icons = new L.marker([-28401, -62422], {icon: icon_serebro}).addTo(serebroicons).bindPopup("Месторождение серебра").bindTooltip("Месторождение серебра", {direction: 'top'});
	icons = new L.marker([-84110, -132770], {icon: icon_serebro}).addTo(serebroicons).bindPopup("Месторождение серебра").bindTooltip("Месторождение серебра", {direction: 'top'});
	icons = new L.marker([-132510, -125592], {icon: icon_serebro}).addTo(serebroicons).bindPopup("Месторождение серебра").bindTooltip("Месторождение серебра", {direction: 'top'});
	icons = new L.marker([-108208, -47678], {icon: icon_serebro}).addTo(serebroicons).bindPopup("Месторождение серебра").bindTooltip("Месторождение серебра", {direction: 'top'});
	icons = new L.marker([146012, -11123], {icon: icon_serebro}).addTo(serebroicons).bindPopup("Месторождение серебра").bindTooltip("Месторождение серебра", {direction: 'top'});
	icons = new L.marker([175948, -2611], {icon: icon_serebro}).addTo(serebroicons).bindPopup("Месторождение серебра").bindTooltip("Месторождение серебра", {direction: 'top'});
	icons = new L.marker([-92986, 163161], {icon: icon_serebro}).addTo(serebroicons).bindPopup("Месторождение серебра").bindTooltip("Месторождение серебра", {direction: 'top'});
	icons = new L.marker([-102435, 135872], {icon: icon_serebro}).addTo(serebroicons).bindPopup("Месторождение серебра").bindTooltip("Месторождение серебра", {direction: 'top'});
	icons = new L.marker([54905, 137779], {icon: icon_serebro}).addTo(serebroicons).bindPopup("Месторождение серебра").bindTooltip("Месторождение серебра", {direction: 'top'});
	icons = new L.marker([55809, 156936], {icon: icon_serebro}).addTo(serebroicons).bindPopup("Месторождение серебра").bindTooltip("Месторождение серебра", {direction: 'top'});
	icons = new L.marker([169552, 74152], {icon: icon_serebro}).addTo(serebroicons).bindPopup("Месторождение серебра").bindTooltip("Месторождение серебра", {direction: 'top'});
	icons = new L.marker([-165342, 9581], {icon: icon_serebro}).addTo(serebroicons).bindPopup("Месторождение серебра").bindTooltip("Месторождение серебра", {direction: 'top'});
	icons = new L.marker([115185, 88740], {icon: icon_serebro}).addTo(serebroicons).bindPopup("Месторождение серебра").bindTooltip("Месторождение серебра", {direction: 'top'});
	icons = new L.marker([76857, 44214], {icon: icon_serebro}).addTo(serebroicons).bindPopup("Месторождение серебра").bindTooltip("Месторождение серебра", {direction: 'top'});
	icons = new L.marker([179776, 112303], {icon: icon_serebro}).addTo(serebroicons).bindPopup("Месторождение серебра").bindTooltip("Месторождение серебра", {direction: 'top'});
	icons = new L.marker([43501, 27241], {icon: icon_serebro}).addTo(serebroicons).bindPopup("Месторождение серебра").bindTooltip("Месторождение серебра", {direction: 'top'});
	icons = new L.marker([-22809, -1266], {icon: icon_serebro}).addTo(serebroicons).bindPopup("Месторождение серебра").bindTooltip("Месторождение серебра", {direction: 'top'});
	icons = new L.marker([-92991, 187700], {icon: icon_serebro}).addTo(serebroicons).bindPopup("Месторождение серебра").bindTooltip("Месторождение серебра", {direction: 'top'});
	}
	else {
		serebroicons.clearLayers();
	}
}