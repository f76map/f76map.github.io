	var kristalliicons = L.layerGroup().addTo(map);
	function KristalliOnOff() {
	var chbox;
	chbox=document.getElementById('KristalliButton');
	if (chbox.checked) {
	icons = new L.marker([-26110, -59652], {icon: icon_kristalli}).addTo(kristalliicons).bindPopup("Месторождение кристаллов").bindTooltip("Месторождение кристаллов", {direction: 'top'});
	icons = new L.marker([-11098, -165311], {icon: icon_kristalli}).addTo(kristalliicons).bindPopup("Месторождение кристаллов").bindTooltip("Месторождение кристаллов", {direction: 'top'});
	icons = new L.marker([142183, -121605], {icon: icon_kristalli}).addTo(kristalliicons).bindPopup("Месторождение кристаллов").bindTooltip("Месторождение кристаллов", {direction: 'top'});
	icons = new L.marker([185070, -58008], {icon: icon_kristalli}).addTo(kristalliicons).bindPopup("Месторождение кристаллов").bindTooltip("Месторождение кристаллов", {direction: 'top'});
	icons = new L.marker([-127550, -189121], {icon: icon_kristalli}).addTo(kristalliicons).bindPopup("Месторождение кристаллов").bindTooltip("Месторождение кристаллов", {direction: 'top'});
	icons = new L.marker([94545, 192045], {icon: icon_kristalli}).addTo(kristalliicons).bindPopup("Месторождение кристаллов").bindTooltip("Месторождение кристаллов", {direction: 'top'});
	icons = new L.marker([26443, 122132], {icon: icon_kristalli}).addTo(kristalliicons).bindPopup("Месторождение кристаллов").bindTooltip("Месторождение кристаллов", {direction: 'top'});
	}
	else {
		kristalliicons.clearLayers();
	}
}