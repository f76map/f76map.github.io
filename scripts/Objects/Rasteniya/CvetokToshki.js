let cvetoktoshkiicons = L.layerGroup().addTo(map);
function CvetokToshkiOnOff() {
	let chbox;
	chbox=document.getElementById('CvetokToshkiButton');
	if (chbox.checked) {
		let cvetoktoshki = [
			[-43899, -90757],
			[-43734, -91099],
			[-43648, -90930],
			[-19603, -126162],
			[-19549, -126149],
			[-19138, -126099],
			[-19313, -125905],
			[-21671, -122398],
			[-21834, -122220],
			[-21696, -122656],
			[-54203, -129511],
			[-54288, -129644],
			[-53053, -128443],
			[-32955, -111297],
			[-34236, -111418],
			[-32835, -111258],
			[-32799, -110211],
			[-34215, -110226],
			[-33997, -110089],
			[107222, -22416],
			[107765, -23573],
			[29671, -21161],
			[29844, -21307],
			[29680, -21284],
			[-8500, -157562],
			[-8602, -157679],
			[-8580, -157884],
			[-8682, -158001],
			[-8382, -157814],
			[-8264, -157673],
			[-8261, -157509],
			[-8145, -157407],
			[-7551, -157084],
			[-7715, -157203],
			[-7687, -157356],
			[-7839, -157475],
			[-7325, -157179],
			[-7472, -157310],
			[-7313, -157005],
			[-7177, -156903],
			[137297, 144673],
			[137118, 144368],
			[137309, 144493],
			[137218, 144478],
			[136975, 144707],
			[136946, 144719],
			[137326, 144674],
			[137403, 144354],
			[137854, 144588],
			[137590, 144869],
			[137958, 144789],
			[137657, 144558],
			[137596, 144553],
			[137967, 144503],
			[-60046, 117171]
		];
		for (let i = 0; i < cvetoktoshki.length; i++) {
			new L.circleMarker([cvetoktoshki[i][0],cvetoktoshki[i][1]], {pane: "top", color: "#991199"})
			.bindPopup("Цветок дикой тошки")
			.bindTooltip("Цветок дикой тошки", {direction: 'top'})
			.addTo(cvetoktoshkiicons);
		}
	}
	else {
		cvetoktoshkiicons.clearLayers();
	}
}