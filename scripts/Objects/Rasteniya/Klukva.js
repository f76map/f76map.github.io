var klukvaicons = L.layerGroup().addTo(map);
function KlukvaOnOff() {
	var chbox;
	chbox=document.getElementById('KlukvaButton');
	if (chbox.checked) {
		var klukva = [
			[-168911, -13968],
			[-169006, -12905],
			[-169631, -13303],
			[-168392, -13771],
			[175051, -127358],
			[176098, -127409],
			[173944, -127058],
			[175411, -126828],
			[173590, -126751],
			[174988, -125689],
			[174511, -126668],
			[175745, -126177],
			[174735, -125986],
			[176208, -126828],
			[-74335, 170209],
			[-75048, 168872],
			[-74027, 169374],
			[-71312, 171072],
			[-71064, 171640],
			[-73544, 169416],
			[-73020, 171115],
			[-73472, 171096],
			[-71856, 169040],
			[-71328, 168520],
			[-71798, 170232],
			[-72896, 168440],
			[-73149, 170334],
			[-73464, 170656],
			[-119563, 171924],
			[-120336, 171795],
			[-119942, 171740],
			[-118278, 171079],
			[-119877, 173999],
			[-120670, 174528],
			[-120492, 172613],
			[-119502, 172203],
			[-120185, 172495],
			[-120448, 172384],
			[-120032, 172672],
			[-120456, 172163],
			[-119762, 172443],
			[-119777, 172032],
			[-120655, 174730],
			[-123440, 191736],
			[-120635, 191163],
			[-115908, 190296],
			[-123272, 194784],
			[-124632, 194536],
			[-119159, 195138],
			[-119730, 196022],
			[-121224, 192544],
			[-118008, 193016],
			[-87161, 151061],
			[-87262, 151149],
			[-75473, 158895],
			[-75765, 159638],
			[-76915, 159587],
			[-73667, 159307],
			[-78030, 162145],
			[-78107, 162032],
			[-77954, 161809],
			[-75043, 162195],
			[-75078, 162248],
			[-75136, 162328],
			[-76573, 162271],
			[-76658, 162042],
			[-76718, 162182],
			[-75402, 161224],
			[-75827, 161070],
			[-74261, 160399],
			[-76782, 160823],
			[-77781, 162666],
			[-75698, 162222],
			[-74446, 159986],
			[-75874, 159786],
			[-77001, 159836],
			[-158018, 171766],
			[-172352, 184040],
			[-172335, 182628],
			[-171578, 183333],
			[-171882, 184160],
			[-170157, 181880],
			[-172720, 185096],
			[-173356, 186480],
			[-172236, 184809],
			[-172634, 185573],
			[-173432, 186255],
			[-173056, 186099],
			[-173465, 187095],
			[-173133, 185794],
			[-171886, 185430],
			[-170039, 185258],
			[-163327, 131294],
			[-155885, 131281],
			[-160640, 155403],
			[-162963, 151681],
			[-162578, 154177],
			[-163772, 155386],
			[-162703, 155079],
			[-162956, 154383],
			[-162851, 152868],
			[-163483, 155919],
			[-177749, 138354],
			[-178964, 136431],
			[-172364, 142048],
			[-171996, 147490],
			[-164860, 154678],
			[-164896, 153944],
			[-164688, 152928],
			[-164320, 151872],
			[-164746, 154954],
			[-163879, 154092],
			[-163944, 153770],
			[-164560, 153114],
			[-164968, 152281],
			[-170429, 157338],
			[-164504, 156080],
			[-170911, 161704],
			[-167772, 161419],
			[-102842, 122384],
			[-102639, 121691],
			[-100295, 121021],
			[-98682, 123059],
			[-144761, 109259],
			[-133702, 114240],
			[-150814, 118622],
			[-145596, 116103],
			[-142407, 117312],
			[-139063, 118630],
			[-138503, 119623],
			[-157278, 124941],
			[-152858, 124729],
			[-148585, 123212],
			[-163530, 130779],
			[-152860, 127431],
			[-148675, 127232],
			[-175349, 122465],
			[-173171, 120177],
			[-169971, 121468],
			[-175563, 123236],
			[-175524, 123551],
			[-165185, 125706]
		];
		for (var i = 0; i < klukva.length; i++) {
			klukva_1 = new L.circleMarker([klukva[i][0],klukva[i][1]], {pane: "top", color: "#9e003a"})
			.bindPopup("Клюква")
			.bindTooltip("Клюква", {direction: 'top'})
			.addTo(klukvaicons);
		}
	}
	else {
		klukvaicons.clearLayers();
	}
}