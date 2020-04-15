let hlamicons = L.layerGroup().addTo(map);
function HlamOnOff() {
	let chbox;
	chbox=document.getElementById('HlamButton');
	if (chbox.checked) {
		let hlam = [
			[-83471, -21748],
			[-62126, -129768],
			[-62891, -125765],
			[-58805, -126710],
			[-144198, -46587],
			[186423, -9983],
			[190900, -2582],
			[172621, -116359],
			[89525, -52190],
			[80640, -38730],
			[135983, -159700],
			[131152, -133762],
			[99224, -162196],
			[95692, -134134],
			[37786, -149141],
			[59840, -135568],
			[25875, -139068],
			[116444, -167389],
			[65241, -165783],
			[-23211, 185922],
			[-105756, 176346],
			[-118254, 142912],
			[-175462, 190402],
			[158704, 183717],
			[153505, 138567],
			[28934, 177458],
			[47236, 134839],
			[24198, 151526],
			[-49849, 112325],
			[-128574, 68749],
			[-121261, 98016],
			[-125915, 56473],
			[182989, 108917],
			[169908, 14059],
			[181126, 15523],
			[4753, 49986],
			[-159050, -64597]
		];
		for (let i = 0; i < hlam.length; i++) {
			new L.Marker([hlam[i][0],hlam[i][1]], {icon: icon_hlam})
				.bindPopup("Куча хлама")
				.bindTooltip("Куча хлама", {direction: 'top'})
				.addTo(hlamicons);
		}
	}
	else {
		hlamicons.clearLayers();
	}
}