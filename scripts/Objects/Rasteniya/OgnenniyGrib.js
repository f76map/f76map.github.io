var ognenniygribicons = L.layerGroup().addTo(map);
function OgnenniyGribOnOff() {
	var chbox;
	chbox=document.getElementById('OgnenniyGribButton');
	if (chbox.checked) {
		var ognenniygrib = [
			[-18808, -23814],
			[-17491, -23969],
			[-10032, -12696],
			[-40519, -59189],
			[-37756, -59671],
			[-33112, -54215],
			[-34696, -51896],
			[-46569, -97507],
			[-44302, -65826],
			[-87711, -74546],
			[-21955, -118488],
			[-18708, -118694],
			[-18770, -118507],
			[-30185, -109200],
			[-30240, -109038],
			[-42282, -104775],
			[-42350, -104758],
			[-42518, -103825],
			[-42515, -103886],
			[-43452, -103681],
			[132379, -51857],
			[132257, -51702],
			[136739, -44440],
			[131807, -34502],
			[131958, -34338],
			[205612, -96389],
			[185015, -95098],
			[194746, -80252],
			[143096, -92888],
			[153827, -93013],
			[161214, -93966],
			[206676, -111558],
			[184122, -125966],
			[174461, -111145],
			[161238, -128838],
			[133815, -126920],
			[155002, -122615],
			[150063, -112141],
			[163245, -104813],
			[22444, -6802],
			[73380, -63504],
			[77285, -62399],
			[70378, -61204],
			[69904, -58993],
			[69900, -58996],
			[75677, -59827],
			[75394, -57046],
			[75082, -54853],
			[78653, -53409],
			[72005, -51655],
			[78130, -50640],
			[81061, -51261],
			[81792, -52472],
			[82499, -50653],
			[82363, -51034],
			[83023, -50859],
			[85196, -49392],
			[72457, -47602],
			[73310, -45484],
			[76779, -47026],
			[77370, -48299],
			[74118, -45119],
			[72022, -43397],
			[77223, -41759],
			[79315, -42161],
			[77407, -38828],
			[77411, -38802],
			[42129, -62685],
			[46758, -63056],
			[45264, -65381],
			[49874, -64125],
			[53165, -62618],
			[46185, -59187],
			[48258, -59982],
			[48164, -60200],
			[58058, -58089],
			[56724, -56985],
			[45410, -50875],
			[47054, -52061],
			[50420, -50969],
			[60377, -51116],
			[43496, -35842],
			[81028, -97300],
			[68436, -94152],
			[73778, -88141],
			[65739, -81532],
			[65850, -81576],
			[83116, -81291],
			[83142, -81142],
			[67451, -65872],
			[70843, -66821],
			[44434, -79834],
			[42368, -77501],
			[47589, -72615],
			[52885, -73284],
			[49417, -72956],
			[49335, -71696],
			[56934, -70552],
			[56894, -70717],
			[56895, -70671],
			[60469, -70534],
			[60569, -70465],
			[45304, -68133],
			[46969, -67294],
			[47723, -65715],
			[51498, -65766],
			[51356, -66707],
			[54097, -67244],
			[105175, -127398],
			[113088, -127096],
			[117880, -130611],
			[101280, -126272],
			[109392, -123401],
			[125068, -125268],
			[101579, -119529],
			[110948, -121513],
			[115464, -120897],
			[117898, -120073],
			[73308, -129770],
			[76177, -129575],
			[89889, -128100],
			[97296, -129757],
			[73593, -124594],
			[96341, -125848],
			[75488, -120103],
			[75435, -120070],
			[88018, -120566],
			[93629, -119139],
			[68281, -111103],
			[84076, -112761],
			[84016, -112735],
			[97178, -113706],
			[73947, -104509],
			[-29273, -144119],
			[-29267, -144311],
			[-25793, -143541],
			[-31046, -142833],
			[-31168, -142792],
			[-31099, -137163],
			[-30893, -136937],
			[-41996, -154019],
			[-42031, -153913],
			[-41982, -153966],
			[-34536, -146089],
			[-34470, -146007],
			[-33343, -139704],
			[-33164, -139184],
			[-26093, -181421],
			[-27037, -182601],
			[-19790, -180393],
			[-29089, -178253],
			[-27364, -172605],
			[-23119, -174577],
			[-18400, -174120],
			[-51279, -170845],
			[-51358, -170720],
			[-48770, -165085],
			[-48908, -165151],
			[-47154, -165305],
			[-47421, -165009],
			[197334, -163363],
			[196836, -163081],
			[199458, -149331],
			[198723, -142584],
			[197208, -142773],
			[197274, -142721],
			[190126, -146826],
			[189842, -140284],
			[189867, -140268],
			[171851, -136768],
			[174238, -137274],
			[184742, -164570],
			[98504, -136026],
			[100822, -137978],
			[103393, -136236],
			[105234, -138617],
			[112108, -138055],
			[123907, -137488],
			[107580, -133106],
			[116262, -131529],
			[121058, -132600],
			[73315, -158369],
			[73285, -158402],
			[73356, -158355],
			[80112, -143523],
			[86172, -142373],
			[91294, -135513],
			[87105, -134968],
			[68542, -174998],
			[68587, -174984],
			[66323, -170051],
			[81834, -168675],
			[81700, -168561],
			[77752, -166876],
			[77626, -166914],
			[79958, -166765],
			[79886, -166566],
			[83312, -166422],
			[80214, 6035],
			[77284, 10271],
			[37584, 7414],
			[39798, 9608],
			[49595, 10965],
			[39740, 16683],
			[43342, 20142],
			[59442, 19546],
			[61065, 24403],
			[49002, 27247],
			[52471, 28123],
			[19274, 11041],
			[32558, 9551],
			[30781, 14242]
		];
		for (var i = 0; i < ognenniygrib.length; i++) {
			ognenniygrib_1 = new L.circleMarker([ognenniygrib[i][0],ognenniygrib[i][1]], {color: "#FFA500"})
			.bindPopup("Огненный гриб")
			.bindTooltip("Огненный гриб", {direction: 'top'})
			.addTo(ognenniygribicons);
		}
	}
	else {
		ognenniygribicons.clearLayers();
	}
}