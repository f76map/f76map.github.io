	var ugolyicons = L.layerGroup().addTo(map);
	function UgolyOnOff() {
	var chbox;
	chbox=document.getElementById('UgolyButton');
	if (chbox.checked) {
	icons = new L.marker([-90939, -123647], {icon: icon_ugoly}).addTo(ugolyicons).bindPopup("Месторождение угля").bindTooltip("Месторождение угля", {direction: 'top'});
	icons = new L.marker([-127949, -138649], {icon: icon_ugoly}).addTo(ugolyicons).bindPopup("Месторождение угля").bindTooltip("Месторождение угля", {direction: 'top'});
	icons = new L.marker([-58786, -136426], {icon: icon_ugoly}).addTo(ugolyicons).bindPopup("Месторождение угля").bindTooltip("Месторождение угля", {direction: 'top'});
	icons = new L.marker([-82861, -137703], {icon: icon_ugoly}).addTo(ugolyicons).bindPopup("Месторождение угля").bindTooltip("Месторождение угля", {direction: 'top'});
	icons = new L.marker([-111451, -116808], {icon: icon_ugoly}).addTo(ugolyicons).bindPopup("Месторождение угля").bindTooltip("Месторождение угля", {direction: 'top'});
	icons = new L.marker([-163604, -137600], {icon: icon_ugoly}).addTo(ugolyicons).bindPopup("Месторождение угля").bindTooltip("Месторождение угля", {direction: 'top'});
	icons = new L.marker([-121448, -99246], {icon: icon_ugoly}).addTo(ugolyicons).bindPopup("Месторождение угля").bindTooltip("Месторождение угля", {direction: 'top'});
	icons = new L.marker([152273, 21063], {icon: icon_ugoly}).addTo(ugolyicons).bindPopup("Месторождение угля").bindTooltip("Месторождение угля", {direction: 'top'});
	icons = new L.marker([42952, 194274], {icon: icon_ugoly}).addTo(ugolyicons).bindPopup("Месторождение угля").bindTooltip("Месторождение угля", {direction: 'top'});
	icons = new L.marker([-72026, 139873], {icon: icon_ugoly}).addTo(ugolyicons).bindPopup("Месторождение угля").bindTooltip("Месторождение угля", {direction: 'top'});
	icons = new L.marker([149935, 53764], {icon: icon_ugoly}).addTo(ugolyicons).bindPopup("Месторождение угля").bindTooltip("Месторождение угля", {direction: 'top'});
	icons = new L.marker([100860, 71102], {icon: icon_ugoly}).addTo(ugolyicons).bindPopup("Месторождение угля").bindTooltip("Месторождение угля", {direction: 'top'});
	icons = new L.marker([-152323, -52285], {icon: icon_ugoly}).addTo(ugolyicons).bindPopup("Месторождение угля").bindTooltip("Месторождение угля", {direction: 'top'});
	icons = new L.marker([59738, 105035], {icon: icon_ugoly}).addTo(ugolyicons).bindPopup("Месторождение угля").bindTooltip("Месторождение угля", {direction: 'top'});
	icons = new L.marker([-68999, 48588], {icon: icon_ugoly}).addTo(ugolyicons).bindPopup("Месторождение угля").bindTooltip("Месторождение угля", {direction: 'top'});
	icons = new L.marker([75559, 27540], {icon: icon_ugoly}).addTo(ugolyicons).bindPopup("Месторождение угля").bindTooltip("Месторождение угля", {direction: 'top'});
	icons = new L.marker([-85135, 14080], {icon: icon_ugoly}).addTo(ugolyicons).bindPopup("Месторождение угля").bindTooltip("Месторождение угля", {direction: 'top'});
	}
	else {
		ugolyicons.clearLayers();
	}
}