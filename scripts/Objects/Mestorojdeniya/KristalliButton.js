let kristalliicons = L.layerGroup().addTo(map);
function KristalliOnOff() {
	let chbox;
	chbox=document.getElementById('KristalliButton');
	if (chbox.checked) {
		let kristalli = [
			[-26110, -59652],
			[185070, -58008],
			[142183, -121605],
			[-11098, -165311],
			[-127550, -189121],
			[94545, 192045],
			[26443, 122132]
		];
		for (let i = 0; i < kristalli.length; i++) {
			new L.Marker([kristalli[i][0],kristalli[i][1]], {icon: icon_kristalli})
				.bindPopup("Месторождение кристаллов")
				.bindTooltip("Месторождение кристаллов", {direction: 'top'})
				.addTo(kristalliicons);
		}
	}
	else {
		kristalliicons.clearLayers();
	}
}