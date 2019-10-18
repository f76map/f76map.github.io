var gribicons = L.layerGroup().addTo(map);
function GribOnOff() {
	var chbox;
	chbox=document.getElementById('GribButton');
	if (chbox.checked) {
		var grib = [
			[-115716, -57742],
			[-118917, -55174],
			[-120506, -55685],
			[-113710, -53336],
			[-113088, -53436],
			[-113149, -53413],
			[-128221, -51185],
			[-128292, -51216],
			[-116436, -51281],
			[-116622, -51096],
			[-116714, -52582],
			[-112506, -50605],
			[-119213, -48387],
			[-113999, -48497],
			[-113956, -48499],
			[-113227, -47602],
			[-118412, -33343],
			[-118412, -33343],
			[-118479, -33384],
			[-118479, -33384],
			[-87742, -96614],
			[-87615, -96631],
			[-83705, -95698],
			[-66290, -111690],
			[-78529, -103038],
			[-134508, -63175],
			[-134458, -63206],
			[-134689, -60955],
			[-134657, -60923],
			[-134466, -61430],
			[-134674, -51945],
			[-134118, -51927],
			[-133975, -51991],
			[-154670, -94822],
			[-155219, -92878],
			[-154771, -94194],
			[-145432, -91170],
			[-146124, -92146],
			[-161967, -87386],
			[-156683, -87468],
			[-158440, -88954],
			[-153278, -89334],
			[-152803, -88274],
			[-155074, -89907],
			[-146234, -86444],
			[-163565, -82954],
			[-162042, -85268],
			[-162685, -85800],
			[-156762, -82266],
			[-158418, -83787],
			[-154691, -83082],
			[-153162, -85834],
			[-151382, -82312],
			[-147548, -84997],
			[-145900, -82062],
			[-141621, -85240],
			[-142022, -85424],
			[-142055, -85355],
			[-140150, -82716],
			[-162820, -79427],
			[-157272, -80927],
			[-157284, -77870],
			[-154310, -80963],
			[-141402, -79816],
			[-141603, -79238],
			[-150312, -71924],
			[-150301, -71869],
			[-133009, -67737],
			[-132981, -67701],
			[-170023, -84028],
			[-164773, -85744],
			[-164047, -85519],
			[-160891, -129961],
			[-156305, -129869],
			[-158676, -127948],
			[-157285, -127304],
			[-155992, -128140],
			[-154481, -126998],
			[-152989, -127806],
			[-152320, -130675],
			[-153009, -129465],
			[-151073, -127604],
			[-149644, -129881],
			[-150198, -130323],
			[-150220, -130336],
			[-145738, -130714],
			[-143676, -127017],
			[-145263, -128041],
			[-142931, -128097],
			[-140436, -129537],
			[-141352, -128567],
			[-132009, -130879],
			[-132380, -130392],
			[-163456, -125829],
			[-157359, -124381],
			[-157738, -126487],
			[-154364, -123297],
			[-151710, -125284],
			[-154368, -125074],
			[-143952, -123480],
			[-137743, -123299],
			[-160946, -122174],
			[-157099, -120811],
			[-155913, -120188],
			[-156453, -122599],
			[-147909, -119245],
			[-149485, -121345],
			[-150107, -121902],
			[-150088, -119095],
			[-145575, -119044],
			[-144864, -121829],
			[-144443, -120869],
			[-141849, -122372],
			[-140327, -120759],
			[-142317, -121162],
			[-162036, -116340],
			[-157060, -115485],
			[-153440, -116005],
			[-153436, -116010],
			[-150838, -118066],
			[-151141, -117514],
			[-150659, -117125],
			[-149194, -117345],
			[-145370, -117218],
			[-141351, -116307],
			[-142733, -115211],
			[-160422, -111403],
			[-162520, -113373],
			[-158718, -113128],
			[-154272, -113855],
			[-152216, -111497],
			[-152243, -111491],
			[-149506, -112758],
			[-150261, -113148],
			[-149267, -111520],
			[-149284, -111472],
			[-144943, -112698],
			[-146473, -114158],
			[-144125, -114126],
			[-144109, -114103],
			[-144921, -112714],
			[-140983, -112272],
			[-140787, -112307],
			[-142600, -113179],
			[-156444, -107772],
			[-157686, -106982],
			[-150006, -109099],
			[-146384, -108529],
			[-144948, -106696],
			[-145888, -109587],
			[-140612, -108791],
			[-142350, -109403],
			[-142009, -109594],
			[-150157, -103019],
			[-147620, -104742],
			[-148956, -105456],
			[-141242, -105371],
			[-142947, -104536],
			[-157521, -100731],
			[-157812, -101282],
			[-155464, -100676],
			[-151812, -102349],
			[-149475, -102224],
			[-143945, -99888],
			[-143931, -99909],
			[-177391, -127131],
			[-176089, -129771],
			[-173625, -128871],
			[-164689, -130027],
			[-179721, -124084],
			[-178364, -124373],
			[-170623, -124968],
			[-169467, -125117],
			[-167329, -125435],
			[-165149, -125326],
			[-179461, -121132],
			[-178222, -119960],
			[-176687, -120828],
			[-170407, -121720],
			[-170262, -119199],
			[-178814, -116721],
			[-178343, -116684],
			[-178347, -116669],
			[-175441, -116513],
			[-164376, -116552],
			[-166124, -117661],
			[-167144, -116618],
			[-167110, -116640],
			[-179088, -112326],
			[-178715, -112207],
			[-178367, -111329],
			[-174732, -111262],
			[-172966, -110962],
			[-173006, -110940],
			[-171033, -112529],
			[-170974, -112523],
			[-171434, -110613],
			[-171440, -110465],
			[-60929, -148524],
			[-60939, -148568],
			[-60952, -148516],
			[-66320, -151276],
			[-66298, -151320],
			[-66196, -151438],
			[-69255, -133373],
			[-69277, -133390],
			[-69318, -133383],
			[-67704, -132591],
			[-68023, -132577],
			[-127559, -147990],
			[-125131, -148541],
			[-125127, -148557],
			[-125372, -148879],
			[-120908, -146399],
			[-130437, -136050],
			[-128355, -136485],
			[-109008, -183730],
			[-108979, -183717],
			[-108957, -183846],
			[-102473, -182307],
			[-102553, -182345],
			[-115131, -179989],
			[-110798, -178409],
			[-103298, -177229],
			[-103329, -177100],
			[-150250, -163503],
			[-150218, -163393],
			[-159623, -155970],
			[-156713, -157259],
			[-156743, -157385],
			[-143983, -156021],
			[-144086, -155964],
			[-140773, -157092],
			[-142134, -157083],
			[-139165, -155991],
			[-163386, -155019],
			[-162150, -152335],
			[-158132, -153070],
			[-159263, -153135],
			[-154359, -152036],
			[-154066, -154146],
			[-155268, -151946],
			[-155268, -151701],
			[-162133, -147999],
			[-161425, -149813],
			[-159481, -148267],
			[-158725, -150728],
			[-152385, -149060],
			[-148391, -147982],
			[-156805, -145728],
			[-158113, -146093],
			[-159580, -145250],
			[-152306, -145927],
			[-151789, -144107],
			[-148042, -147008],
			[-141567, -144533],
			[-140406, -143962],
			[-163170, -142080],
			[-161196, -141042],
			[-162401, -140325],
			[-150481, -141308],
			[-140748, -143087],
			[-162882, -136237],
			[-162168, -137142],
			[-160370, -136124],
			[-158287, -135563],
			[-155147, -136249],
			[-153594, -135304],
			[-154650, -136740],
			[-147298, -138147],
			[-145951, -135962],
			[-145004, -137461],
			[-161819, -131486],
			[-162491, -133068],
			[-156942, -132024],
			[-156029, -134577],
			[-156750, -133653],
			[-158544, -131660],
			[-154202, -132164],
			[-153135, -133656],
			[-154952, -134263],
			[-150927, -132710],
			[-149561, -132671],
			[-150768, -133983],
			[-145289, -135062],
			[-143733, -131923],
			[-143371, -132149],
			[-144768, -132999],
			[-144746, -134147],
			[-143494, -134481],
			[-141837, -133090],
			[-141362, -131667],
			[-139227, -132082],
			[-137774, -132548],
			[-171725, -156823],
			[-171550, -157224],
			[-164614, -156377],
			[-172360, -154712],
			[-174662, -154149],
			[-172592, -153305],
			[-167988, -153974],
			[-164420, -155079],
			[-174822, -150561],
			[-172684, -150845],
			[-170133, -150515],
			[-166065, -144331],
			[-166810, -146170],
			[-166007, -141724],
			[-166614, -142873],
			[-166556, -137724],
			[-164880, -136453],
			[-174036, -132411],
			[-173247, -133456],
			[-169649, -133396],
			[-131883, -187394],
			[-133319, -184383],
			[-133259, -184251],
			[-148996, -164408],
			[-134716, -165013],
			[114477, -164984]
		];
		for (var i = 0; i < grib.length; i++) {
			grib_1 = new L.circleMarker([grib[i][0],grib[i][1]], {color: "#B8860B"})
			.bindPopup("Гриб")
			.bindTooltip("Гриб", {direction: 'top'})
			.addTo(gribicons);
		}
	}
	else {
		gribicons.clearLayers();
	}
}