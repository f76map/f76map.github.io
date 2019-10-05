	var kislotaicons = L.layerGroup().addTo(map);
	function KislotaOnOff() {
	var chbox;
	chbox=document.getElementById('KislotaButton');
	if (chbox.checked) {
	icons = new L.marker([-75002, 153214], {icon: icon_kislota}).addTo(kislotaicons).bindPopup("Кислота").bindTooltip("Кислота", {direction: 'top'});
	icons = new L.marker([177255, -72232], {icon: icon_kislota}).addTo(kislotaicons).bindPopup("Кислота").bindTooltip("Кислота", {direction: 'top'});
	icons = new L.marker([180165, -27298], {icon: icon_kislota}).addTo(kislotaicons).bindPopup("Кислота").bindTooltip("Кислота", {direction: 'top'});
	icons = new L.marker([149876, -37578], {icon: icon_kislota}).addTo(kislotaicons).bindPopup("Кислота").bindTooltip("Кислота", {direction: 'top'});
	icons = new L.marker([205066, -113338], {icon: icon_kislota}).addTo(kislotaicons).bindPopup("Кислота").bindTooltip("Кислота", {direction: 'top'});
	icons = new L.marker([-143091, 52219], {icon: icon_kislota}).addTo(kislotaicons).bindPopup("Кислота").bindTooltip("Кислота", {direction: 'top'});
	icons = new L.marker([110947, 104611], {icon: icon_kislota}).addTo(kislotaicons).bindPopup("Кислота").bindTooltip("Кислота", {direction: 'top'});
	icons = new L.marker([72865, 97691], {icon: icon_kislota}).addTo(kislotaicons).bindPopup("Кислота").bindTooltip("Кислота", {direction: 'top'});
	icons = new L.marker([67579, 116203], {icon: icon_kislota}).addTo(kislotaicons).bindPopup("Кислота").bindTooltip("Кислота", {direction: 'top'});
	icons = new L.marker([184880, -59986], {icon: icon_kislota}).addTo(kislotaicons).bindPopup("Кислота").bindTooltip("Кислота", {direction: 'top'});
	icons = new L.marker([182890, -60081], {icon: icon_kislota}).addTo(kislotaicons).bindPopup("Кислота").bindTooltip("Кислота", {direction: 'top'});
	icons = new L.marker([184819, -60848], {icon: icon_kislota}).addTo(kislotaicons).bindPopup("Кислота").bindTooltip("Кислота", {direction: 'top'});
	icons = new L.marker([-155267, 1961], {icon: icon_kislota}).addTo(kislotaicons).bindPopup("Кислота").bindTooltip("Кислота", {direction: 'top'});
	icons = new L.marker([77370, 46142], {icon: icon_kislota}).addTo(kislotaicons).bindPopup("Кислота").bindTooltip("Кислота", {direction: 'top'});
	icons = new L.marker([-104877, 37398], {icon: icon_kislota}).addTo(kislotaicons).bindPopup("Кислота").bindTooltip("Кислота", {direction: 'top'});
	icons = new L.marker([54584, 35392], {icon: icon_kislota}).addTo(kislotaicons).bindPopup("Кислота").bindTooltip("Кислота", {direction: 'top'});
	icons = new L.marker([59753, -49514], {icon: icon_kislota}).addTo(kislotaicons).bindPopup("Кислота").bindTooltip("Кислота", {direction: 'top'});
	icons = new L.marker([15667, 100795], {icon: icon_kislota}).addTo(kislotaicons).bindPopup("Кислота").bindTooltip("Кислота", {direction: 'top'});
	icons = new L.marker([-369, 62904], {icon: icon_kislota}).addTo(kislotaicons).bindPopup("Кислота").bindTooltip("Кислота", {direction: 'top'});
	icons = new L.marker([-94573, 187809], {icon: icon_kislota}).addTo(kislotaicons).bindPopup("Кислота").bindTooltip("Кислота", {direction: 'top'});
	}
	else {
		kislotaicons.clearLayers();
	}
}