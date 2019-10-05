	var korenyjenyshenyaicons = L.layerGroup().addTo(map);
	function KorenyJenyshenyaOnOff() {
	var chbox;
	chbox=document.getElementById('KorenyJenyshenyaButton');
	if (chbox.checked) {
	L.circleMarker([-43155, -6546], {color: "#B5B8B1"}).addTo(korenyjenyshenyaicons).bindPopup("Корень женьшеня").bindTooltip("Корень женьшеня", {direction: 'top'});
	L.circleMarker([-43129, -6512], {color: "#B5B8B1"}).addTo(korenyjenyshenyaicons).bindPopup("Корень женьшеня").bindTooltip("Корень женьшеня", {direction: 'top'});
	L.circleMarker([-43052, -6360], {color: "#B5B8B1"}).addTo(korenyjenyshenyaicons).bindPopup("Корень женьшеня").bindTooltip("Корень женьшеня", {direction: 'top'});
	L.circleMarker([-52813, -926], {color: "#B5B8B1"}).addTo(korenyjenyshenyaicons).bindPopup("Корень женьшеня").bindTooltip("Корень женьшеня", {direction: 'top'});
	L.circleMarker([-73567, -34153], {color: "#B5B8B1"}).addTo(korenyjenyshenyaicons).bindPopup("Корень женьшеня").bindTooltip("Корень женьшеня", {direction: 'top'});
	L.circleMarker([-73617, -34380], {color: "#B5B8B1"}).addTo(korenyjenyshenyaicons).bindPopup("Корень женьшеня").bindTooltip("Корень женьшеня", {direction: 'top'});
	L.circleMarker([90168, -111779], {color: "#B5B8B1"}).addTo(korenyjenyshenyaicons).bindPopup("Корень женьшеня").bindTooltip("Корень женьшеня", {direction: 'top'});
	L.circleMarker([-32162, 171534], {color: "#B5B8B1"}).addTo(korenyjenyshenyaicons).bindPopup("Корень женьшеня").bindTooltip("Корень женьшеня", {direction: 'top'});
	L.circleMarker([-24725, 187312], {color: "#B5B8B1"}).addTo(korenyjenyshenyaicons).bindPopup("Корень женьшеня").bindTooltip("Корень женьшеня", {direction: 'top'});
	L.circleMarker([-24725, 188091], {color: "#B5B8B1"}).addTo(korenyjenyshenyaicons).bindPopup("Корень женьшеня").bindTooltip("Корень женьшеня", {direction: 'top'});
	L.circleMarker([-23662, 186379], {color: "#B5B8B1"}).addTo(korenyjenyshenyaicons).bindPopup("Корень женьшеня").bindTooltip("Корень женьшеня", {direction: 'top'});
	L.circleMarker([-24443, 187047], {color: "#B5B8B1"}).addTo(korenyjenyshenyaicons).bindPopup("Корень женьшеня").bindTooltip("Корень женьшеня", {direction: 'top'});
	L.circleMarker([-24415, 187725], {color: "#B5B8B1"}).addTo(korenyjenyshenyaicons).bindPopup("Корень женьшеня").bindTooltip("Корень женьшеня", {direction: 'top'});
	L.circleMarker([-36166, 171081], {color: "#B5B8B1"}).addTo(korenyjenyshenyaicons).bindPopup("Корень женьшеня").bindTooltip("Корень женьшеня", {direction: 'top'});
	L.circleMarker([-36421, 170942], {color: "#B5B8B1"}).addTo(korenyjenyshenyaicons).bindPopup("Корень женьшеня").bindTooltip("Корень женьшеня", {direction: 'top'});
	L.circleMarker([15032, 197339], {color: "#B5B8B1"}).addTo(korenyjenyshenyaicons).bindPopup("Корень женьшеня").bindTooltip("Корень женьшеня", {direction: 'top'});
	L.circleMarker([11643, 182819], {color: "#B5B8B1"}).addTo(korenyjenyshenyaicons).bindPopup("Корень женьшеня").bindTooltip("Корень женьшеня", {direction: 'top'});
	L.circleMarker([100340, 27769], {color: "#B5B8B1"}).addTo(korenyjenyshenyaicons).bindPopup("Корень женьшеня").bindTooltip("Корень женьшеня", {direction: 'top'});
	L.circleMarker([98078, 25804], {color: "#B5B8B1"}).addTo(korenyjenyshenyaicons).bindPopup("Корень женьшеня").bindTooltip("Корень женьшеня", {direction: 'top'});
	L.circleMarker([62138, 12389], {color: "#B5B8B1"}).addTo(korenyjenyshenyaicons).bindPopup("Корень женьшеня").bindTooltip("Корень женьшеня", {direction: 'top'});
	L.circleMarker([57078, 17166], {color: "#B5B8B1"}).addTo(korenyjenyshenyaicons).bindPopup("Корень женьшеня").bindTooltip("Корень женьшеня", {direction: 'top'});
	L.circleMarker([58774, 19116], {color: "#B5B8B1"}).addTo(korenyjenyshenyaicons).bindPopup("Корень женьшеня").bindTooltip("Корень женьшеня", {direction: 'top'});
	L.circleMarker([53295, 22051], {color: "#B5B8B1"}).addTo(korenyjenyshenyaicons).bindPopup("Корень женьшеня").bindTooltip("Корень женьшеня", {direction: 'top'});
	L.circleMarker([56730, 22744], {color: "#B5B8B1"}).addTo(korenyjenyshenyaicons).bindPopup("Корень женьшеня").bindTooltip("Корень женьшеня", {direction: 'top'});
	L.circleMarker([54862, 24868], {color: "#B5B8B1"}).addTo(korenyjenyshenyaicons).bindPopup("Корень женьшеня").bindTooltip("Корень женьшеня", {direction: 'top'});
	}
	else {
		korenyjenyshenyaicons.clearLayers();
	}
}