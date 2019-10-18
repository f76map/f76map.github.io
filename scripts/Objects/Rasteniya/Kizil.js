var kizilicons = L.layerGroup().addTo(map);
function KizilOnOff() {
	var chbox;
	chbox=document.getElementById('KizilButton');
	if (chbox.checked) {
		var kizil = [
			[198420, -31189],
			[198592, -21904],
			[198289, -21968],
			[199905, -16790],
			[201314, -17207],
			[200937, -16842],
			[200623, -1543],
			[201136, -2195],
			[177687, -29506],
			[177021, -29635],
			[176338, -29390],
			[181301, -31455],
			[181815, -30719],
			[178771, -26273],
			[178368, -26589],
			[178059, -26522],
			[191657, -21487],
			[190415, -22199],
			[190644, -21345],
			[187042, -16799],
			[186834, -16715],
			[191356, -19646],
			[187976, -15614],
			[187849, -15319],
			[187779, -15038],
			[194520, -14119],
			[194418, -14549],
			[194584, -14306],
			[180014, -10183],
			[180065, -9114],
			[178417, -8787],
			[180598, -9492],
			[169890, -7737],
			[178334, -7555],
			[185482, -5656],
			[185160, -5716],
			[190641, -4442],
			[194294, -6821],
			[183878, -608],
			[183641, -808],
			[182308, -646],
			[183280, -1080],
			[182622, -963],
			[183357, -2200],
			[183191, -1630],
			[184603, -2997],
			[185738, -3324],
			[186976, -3200],
			[190921, -897],
			[191700, -659],
			[195864, -2671],
			[195737, -2962],
			[148523, -28722],
			[148962, -28757],
			[148561, -28279],
			[162632, -27420],
			[162452, -27190],
			[162642, -26910],
			[149323, -22454],
			[149142, -23024],
			[149109, -23014],
			[149501, -22823],
			[154539, -22799],
			[154130, -23508],
			[153814, -23037],
			[154550, -21974],
			[154446, -22660],
			[161550, -22190],
			[161645, -22720],
			[162299, -22703],
			[155063, -19543],
			[154820, -19848],
			[154786, -19767],
			[158511, -18907],
			[159098, -18409],
			[159165, -18368],
			[158900, -18407],
			[155783, -19169],
			[155850, -19128],
			[156132, -18468],
			[160426, -16881],
			[160498, -16851],
			[148451, -782],
			[149051, -1545],
			[149359, -810],
			[149270, -309],
			[163193, -3043],
			[163413, -1317],
			[163183, -1238],
			[196901, -45798],
			[205566, -47212],
			[205488, -37082],
			[199802, -34003],
			[199744, -34167],
			[199797, -34479],
			[201729, -36683],
			[170099, -63175],
			[170099, -62820],
			[170399, -63132],
			[186017, -61716],
			[186013, -62029],
			[189681, -62058],
			[181133, -58229],
			[172188, -49169],
			[182562, -51146],
			[174517, -47092],
			[174696, -47228],
			[186164, -47864],
			[192406, -46284],
			[174266, -42827],
			[173764, -41902],
			[178942, -42981],
			[179104, -42746],
			[178719, -42456],
			[170321, -39125],
			[184950, -36091],
			[185140, -35376],
			[185287, -35736],
			[196175, -36038],
			[196131, -36086],
			[148307, -62328],
			[148375, -62292],
			[139885, -56933],
			[140100, -56309],
			[139903, -56404],
			[154141, -52344],
			[154133, -52430],
			[143190, -48004],
			[143256, -47963],
			[141057, -45806],
			[141136, -45739],
			[140972, -45751],
			[140046, -46272],
			[139973, -45869],
			[140005, -46139],
			[140155, -45835],
			[144392, -43639],
			[144427, -43473],
			[144293, -43362],
			[152923, -41768],
			[157389, -41676],
			[157456, -41635],
			[143101, -40323],
			[142885, -40730],
			[142911, -40647],
			[139031, -34402],
			[139052, -34328],
			[141017, -35184],
			[141073, -35118],
			[139473, -33822],
			[178697, -76544],
			[178839, -76783],
			[179027, -76491],
			[181974, -74641],
			[181988, -74271],
			[182245, -74554],
			[170807, -72263],
			[171412, -68179],
			[171457, -68435],
			[159505, -86728],
			[159101, -86941],
			[159026, -86958],
			[145083, -79308],
			[144985, -79260],
			[144693, -78810],
			[150897, -78656],
			[158856, -79759],
			[142898, -76725],
			[142839, -76660],
			[144031, -74803],
			[144047, -74716],
			[144283, -74393],
			[143898, -74330],
			[147730, -74910],
			[137709, -71968],
			[138065, -72495],
			[138142, -72507],
			[-126356, 102019],
			[-156014, 15128],
			[203000, 41569],
			[203781, 42230],
			[203570, 42474],
			[203645, 41844],
			[195677, 33545],
			[195268, 33491],
			[195111, 33836],
			[194777, 39909],
			[195187, 39346],
			[195300, 39392],
			[195821, 42299],
			[196147, 42390],
			[195859, 42693],
			[199756, 1191],
			[203336, 1446],
			[203217, 8966],
			[203269, 9036],
			[206861, 23274],
			[171031, 3662],
			[170625, 3567],
			[191802, 3664],
			[195460, 1408],
			[195797, 385],
			[165384, 7241],
			[165403, 7166],
			[168243, 5671],
			[169001, 5119],
			[169240, 5489],
			[171097, 4285],
			[177399, 7017],
			[177666, 6445],
			[177304, 5892],
			[177174, 6324],
			[182388, 5414],
			[182080, 5982],
			[182572, 7159],
			[183009, 7324],
			[182919, 6807],
			[182395, 7772],
			[182212, 6686],
			[169708, 11627],
			[169795, 11090],
			[170217, 11218],
			[180398, 13710],
			[180712, 12307],
			[192023, 12885],
			[192146, 13167],
			[179779, 20002],
			[181231, 20347],
			[196324, 17185],
			[196245, 17723],
			[196503, 17503],
			[175397, 22842],
			[176004, 22283],
			[175838, 21121],
			[175268, 21412],
			[174814, 24376],
			[179692, 20526],
			[181100, 21139],
			[181732, 21173],
			[177015, 24869],
			[178096, 26611],
			[178549, 26269],
			[178664, 26532],
			[177348, 25117],
			[176714, 25703],
			[171018, 31287],
			[170914, 31598],
			[170568, 31686],
			[169015, 31860],
			[169345, 31876],
			[169039, 31520],
			[144545, 3721],
			[152371, 3235],
			[152365, 3441],
			[142712, 5574],
			[142666, 5528],
			[145886, 5150],
			[145965, 5212],
			[135676, 9992],
			[135784, 10368],
			[135745, 9912],
			[135642, 9927],
			[142717, 11837],
			[141401, 10802],
			[142598, 12072],
			[146348, 9967],
			[144897, 10666],
			[137037, 12521],
			[136740, 12931],
			[140432, 12653],
			[144046, 13703],
			[162134, 15934],
			[146269, 17354],
			[162210, 18800]
		];
		for (var i = 0; i < kizil.length; i++) {
			kizil_1 = new L.circleMarker([kizil[i][0],kizil[i][1]], {color: "#9ACD32"})
			.bindPopup("Обесцвеченный кизил")
			.bindTooltip("Обесцвеченный кизил", {direction: 'top'})
			.addTo(kizilicons);
		}
	}
	else {
		kizilicons.clearLayers();
	}
}