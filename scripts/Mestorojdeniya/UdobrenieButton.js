	var udobrenieicons = L.layerGroup().addTo(map);
	function UdobrenieOnOff() {
	var chbox;
	chbox=document.getElementById('UdobrenieButton');
	if (chbox.checked) {
	icons = new L.marker([142602, -158688], {icon: icon_udobrenie}).addTo(udobrenieicons).bindPopup("Месторождение фосфатов (Удобрение)").bindTooltip("Месторождение фосфатов (Удобрение)", {direction: 'top'});
	icons = new L.marker([30144, -140565], {icon: icon_udobrenie}).addTo(udobrenieicons).bindPopup("Месторождение фосфатов (Удобрение)").bindTooltip("Месторождение фосфатов (Удобрение)", {direction: 'top'});
	icons = new L.marker([31297, -137825], {icon: icon_udobrenie}).addTo(udobrenieicons).bindPopup("Месторождение фосфатов (Удобрение)").bindTooltip("Месторождение фосфатов (Удобрение)", {direction: 'top'});
	icons = new L.marker([25253, -136099], {icon: icon_udobrenie}).addTo(udobrenieicons).bindPopup("Месторождение фосфатов (Удобрение)").bindTooltip("Месторождение фосфатов (Удобрение)", {direction: 'top'});
	icons = new L.marker([-27013, -142388], {icon: icon_udobrenie}).addTo(udobrenieicons).bindPopup("Месторождение фосфатов (Удобрение)").bindTooltip("Месторождение фосфатов (Удобрение)", {direction: 'top'});
	icons = new L.marker([-12259, -172597], {icon: icon_udobrenie}).addTo(udobrenieicons).bindPopup("Месторождение фосфатов (Удобрение)").bindTooltip("Месторождение фосфатов (Удобрение)", {direction: 'top'});
	icons = new L.marker([88470, -138828], {icon: icon_udobrenie}).addTo(udobrenieicons).bindPopup("Месторождение фосфатов (Удобрение)").bindTooltip("Месторождение фосфатов (Удобрение)", {direction: 'top'});
	icons = new L.marker([124856, -118294], {icon: icon_udobrenie}).addTo(udobrenieicons).bindPopup("Месторождение фосфатов (Удобрение)").bindTooltip("Месторождение фосфатов (Удобрение)", {direction: 'top'});
	icons = new L.marker([172837, 3157], {icon: icon_udobrenie}).addTo(udobrenieicons).bindPopup("Месторождение фосфатов (Удобрение)").bindTooltip("Месторождение фосфатов (Удобрение)", {direction: 'top'});
	icons = new L.marker([143981, -69348], {icon: icon_udobrenie}).addTo(udobrenieicons).bindPopup("Месторождение фосфатов (Удобрение)").bindTooltip("Месторождение фосфатов (Удобрение)", {direction: 'top'});
	icons = new L.marker([150052, -35939], {icon: icon_udobrenie}).addTo(udobrenieicons).bindPopup("Месторождение фосфатов (Удобрение)").bindTooltip("Месторождение фосфатов (Удобрение)", {direction: 'top'});
	icons = new L.marker([198261, -162168], {icon: icon_udobrenie}).addTo(udobrenieicons).bindPopup("Месторождение фосфатов (Удобрение)").bindTooltip("Месторождение фосфатов (Удобрение)", {direction: 'top'});
	icons = new L.marker([161389, -128054], {icon: icon_udobrenie}).addTo(udobrenieicons).bindPopup("Месторождение фосфатов (Удобрение)").bindTooltip("Месторождение фосфатов (Удобрение)", {direction: 'top'});
	icons = new L.marker([-26148, 194352], {icon: icon_udobrenie}).addTo(udobrenieicons).bindPopup("Месторождение фосфатов (Удобрение)").bindTooltip("Месторождение фосфатов (Удобрение)", {direction: 'top'});
	icons = new L.marker([-53896, 191710], {icon: icon_udobrenie}).addTo(udobrenieicons).bindPopup("Месторождение фосфатов (Удобрение)").bindTooltip("Месторождение фосфатов (Удобрение)", {direction: 'top'});
	icons = new L.marker([-158008, 122657], {icon: icon_udobrenie}).addTo(udobrenieicons).bindPopup("Месторождение фосфатов (Удобрение)").bindTooltip("Месторождение фосфатов (Удобрение)", {direction: 'top'});
	icons = new L.marker([-112376, 135873], {icon: icon_udobrenie}).addTo(udobrenieicons).bindPopup("Месторождение фосфатов (Удобрение)").bindTooltip("Месторождение фосфатов (Удобрение)", {direction: 'top'});
	icons = new L.marker([-155406, -42744], {icon: icon_udobrenie}).addTo(udobrenieicons).bindPopup("Месторождение фосфатов (Удобрение)").bindTooltip("Месторождение фосфатов (Удобрение)", {direction: 'top'});
	icons = new L.marker([-25807, 188246], {icon: icon_udobrenie}).addTo(udobrenieicons).bindPopup("Месторождение фосфатов (Удобрение)").bindTooltip("Месторождение фосфатов (Удобрение)", {direction: 'top'});
	icons = new L.marker([-10198, 47147], {icon: icon_udobrenie}).addTo(udobrenieicons).bindPopup("Месторождение фосфатов (Удобрение)").bindTooltip("Месторождение фосфатов (Удобрение)", {direction: 'top'});
	icons = new L.marker([-37804, 108817], {icon: icon_udobrenie}).addTo(udobrenieicons).bindPopup("Месторождение фосфатов (Удобрение)").bindTooltip("Месторождение фосфатов (Удобрение)", {direction: 'top'});
	icons = new L.marker([-36066, 138073], {icon: icon_udobrenie}).addTo(udobrenieicons).bindPopup("Месторождение фосфатов (Удобрение)").bindTooltip("Месторождение фосфатов (Удобрение)", {direction: 'top'});
	}
	else {
		udobrenieicons.clearLayers();
	}
}