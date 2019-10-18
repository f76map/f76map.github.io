var tyikvaicons = L.layerGroup().addTo(map);
function TyikvaOnOff() {
	var chbox;
	chbox=document.getElementById('TyikvaButton');
	if (chbox.checked) {
		var tyikva1 = [
//LPI_FloraPumpkinVine01
			[-162163, -41775],
			[-161674, -41347],
			[-161712, -41706],
			[-161562, -41825],
			[-160967, -40603],
			[-160723, -40804],
			[-161129, -40924],
			[169370, -114732],
			[171617, -114797],
			[170192, -114139],
			[170080, -114271],
			[170207, -114525],
			[169752, -114679],
			[169836, -114296],
			[169589, -114364],
			[169302, -114536],
			[171576, -114135],
			[171081, -114181],
			[170961, -114609],
			[107993, -22255],
			[108123, -22382],
			[108227, -22483],
			[108326, -22608],
			[107970, -22513],
			[108069, -22639],
			[108173, -22740],
			[174538, -141124],
			[174637, -141119],
			[-23384, 173027],
			[-23046, 173105],
			[136902, 131434],
			[-110715, 81860],
			[-110819, 81863],
			[-111014, 81851],
			[-111220, 81848],
			[-111492, 81813],
			[-110871, 82281],
			[-110775, 82285],
			[-110852, 82072],
			[-111119, 82048],
			[-111348, 82038],
			[-111492, 82035],
			[-110589, 82099],
			[131076, 108956],
			[131104, 108971],
			[131171, 109044],
			[131182, 108933],
			[131274, 108952],
			[131315, 109088],
			[131377, 108904],
			[131320, 108953],
			[131389, 109036],
			[131419, 109075],
			[131595, 111003],
			[131680, 111055],
			[131520, 111194],
			[131480, 111117],
			[131539, 111200],
			[131608, 111271],
			[131615, 111161],
			[131791, 111234],
			[131753, 111311],
			[131785, 111215],
			[131813, 111104],
			[131708, 111176],
			[135624, 116643],
			[135500, 116646],
			[135563, 118421],
			[132391, 119487],
			[132276, 119415],
			[132329, 119615],
			[134916, 119908],
			[136016, 121040],
			[136633, 121855],
			[136022, 121515],
			[136493, 122131],
			[136023, 119325],
			[135927, 119413],
			[135849, 121254],
			[135816, 121152],
			[131151, 125047],
			[138167, 124277],
			[138249, 124277],
			[135267, 126417],
			[135279, 126292],
			[138640, 125161],
			[138837, 125071],
			[138767, 125197],
			[137937, 124393],
			[131496, 129950],
			[131334, 129481],
			[131420, 129535],
			[131445, 129407],
			[134500, 127640],
			[134398, 127629],
			[133222, 128761],
			[134261, 128663],
			[134034, 129379],
			[134148, 129408],
			[134120, 129296],
			[132513, 128295],
			[132517, 128194],
			[132432, 128248],
			[136677, 130453],
			[136576, 130461],
			[136594, 130371],
			[136510, 130875],
			[136567, 130961],
			[135222, 127989],
			[139621, 129821],
			[129192, 110281],
			[129073, 110429],
			[129058, 110522],
			[129168, 110530],
			[129208, 110384],
			[129131, 110346],
			[129112, 110352],
			[129030, 110352],
			[127513, 109581],
			[127507, 109612],
			[127531, 109770],
			[127547, 109677],
			[127436, 109670],
			[127473, 109853],
			[127473, 109877],
			[129097, 110598],
			[129091, 110618],
			[128484, 123104],
			[128539, 123466],
			[129841, 126177],
			[129514, 126068],
			[129553, 126025],
			[36270, 122346],
//FloraGourdVine01
			[-52302, 203600],
			[-52257, 203573],
			[-46046, 201515],
			[-46111, 201537],
			[-46176, 201586],
			[-55794, 193139],
			[-55735, 193169],
			[-55704, 193246],
			[-40174, 193904],
			[-40228, 193821],
			[-40181, 193852],
//LPI_FloraPumpkin01
			[-162499, -54190],
			[-160132, -41732],
			[-162163, -41775],
			[-161674, -41347],
			[-161712, -41706],
			[-161562, -41825],
			[-159436, -42119],
			[-159436, -42082],
			[-157312, -43045],
			[-160967, -40603],
			[-160723, -40804],
			[-161129, -40924],
			[-155828, -38255],
			[-155973, -38249],
			[-155430, -37496],
			[-155259, -37773],
			[-155357, -37922],
			[178103, -123634],
			[179867, -122282],
			[169370, -114732],
			[171617, -114797],
			[170192, -114139],
			[170080, -114271],
			[170207, -114525],
			[169752, -114679],
			[169836, -114296],
			[169589, -114364],
			[169302, -114536],
			[171576, -114135],
			[171081, -114181],
			[170961, -114609],
			[107993, -22255],
			[108123, -22382],
			[108227, -22483],
			[108326, -22608],
			[107970, -22513],
			[108069, -22639],
			[108173, -22740],
			[58879, -97290],
			[58832, -97132],
			[58875, -97256],
			[58947, -97276],
			[58845, -97189],
			[174538, -141124],
			[174637, -141119],
			[143751, -151703],
			[143780, -151719],
			[142730, -151184],
			[142762, -151374],
			[143759, -151549],
			[-23384, 173027],
			[-23046, 173105],
			[-34578, 170778],
			[-34608, 170666],
			[-34889, 145236],
			[136902, 131434],
			[151228, 160845],
			[-110715, 81860],
			[-110819, 81863],
			[-111014, 81851],
			[-111220, 81848],
			[-111492, 81813],
			[-110871, 82281],
			[-110775, 82285],
			[-110852, 82072],
			[-111119, 82048],
			[-111348, 82038],
			[-111492, 82035],
			[-110589, 82099],
			[144636, 106244],
			[131076, 108956],
			[131104, 108971],
			[131127, 108881],
			[131312, 109031],
			[131294, 108992],
			[131171, 109044],
			[131178, 108868],
			[131182, 108933],
			[131232, 108915],
			[131274, 108952],
			[131321, 108905],
			[131292, 108882],
			[131315, 109088],
			[131375, 108968],
			[131377, 108904],
			[131320, 108953],
			[131389, 109036],
			[131419, 109075],
			[145956, 107050],
			[145948, 107093],
			[145920, 107112],
			[131595, 111003],
			[131599, 111083],
			[131680, 111055],
			[131794, 110969],
			[131870, 111313],
			[131880, 111281],
			[131473, 111163],
			[131546, 111137],
			[131520, 111194],
			[131480, 111117],
			[131570, 111154],
			[131627, 111226],
			[131539, 111200],
			[131608, 111271],
			[131615, 111161],
			[131645, 111266],
			[131794, 111290],
			[131730, 111247],
			[131791, 111234],
			[131753, 111311],
			[131729, 111217],
			[131754, 111128],
			[131785, 111215],
			[131813, 111104],
			[131708, 111176],
			[131830, 111087],
			[135624, 116643],
			[135500, 116646],
			[135563, 118421],
			[132391, 119487],
			[132276, 119415],
			[132329, 119615],
			[134916, 119908],
			[136016, 121040],
			[136633, 121855],
			[136022, 121515],
			[136493, 122131],
			[136023, 119325],
			[135927, 119413],
			[135849, 121254],
			[135816, 121152],
			[131151, 125047],
			[138167, 124277],
			[138249, 124277],
			[135267, 126417],
			[135279, 126292],
			[138640, 125161],
			[138837, 125071],
			[138767, 125197],
			[137937, 124393],
			[131496, 129950],
			[131334, 129481],
			[131420, 129535],
			[131445, 129407],
			[134500, 127640],
			[134398, 127629],
			[133222, 128761],
			[134261, 128663],
			[134034, 129379],
			[134148, 129408],
			[134120, 129296],
			[132513, 128295],
			[132517, 128194],
			[132432, 128248],
			[136677, 130453],
			[136576, 130461],
			[136594, 130371],
			[136510, 130875],
			[136567, 130961],
			[135222, 127989],
			[139621, 129821],
			[130019, 109899],
			[130061, 109891],
			[129192, 110281],
			[129073, 110429],
			[129038, 110473],
			[129058, 110522],
			[129018, 110531],
			[129168, 110530],
			[129163, 110493],
			[129123, 110510],
			[129144, 110408],
			[129208, 110384],
			[129138, 110211],
			[129131, 110346],
			[129112, 110352],
			[129114, 110408],
			[129025, 110384],
			[129030, 110352],
			[127513, 109581],
			[127507, 109612],
			[127531, 109770],
			[127547, 109677],
			[127436, 109670],
			[127479, 109761],
			[127482, 109689],
			[127461, 109792],
			[127473, 109853],
			[127473, 109877],
			[127490, 109791],
			[127513, 109816],
			[129034, 110592],
			[129097, 110598],
			[129091, 110618],
			[128484, 123104],
			[128539, 123466],
			[129841, 126177],
			[129514, 126068],
			[129553, 126025],
			[36270, 122346],
			[114667, 64325],
			[23748, 15623],
			[23455, 15945],
//Кювета
			[-57707, -47927]
		];
		var tyikva2 = [
			["Тыква - 5 шт.<br>[Внутри здания Школа Моргантауна]", 94128, 2135],
			["Тыква<br>[Внутри здания Курорт &quotУайтспринг&quot]", -52810, 6663]
		];
		for (var i = 0; i < tyikva1.length; i++) {
			tyikva1_1 = new L.circleMarker([tyikva1[i][0],tyikva1[i][1]], {color: "#D2691E"})
			.bindPopup("Тыква")
			.bindTooltip("Тыква", {direction: 'top'})
			.addTo(tyikvaicons);
		}
		for (var i = 0; i < tyikva2.length; i++) {
			tyikva2_1 = new L.circleMarker([tyikva2[i][1],tyikva2[i][2]], {color: "#D2691E", fillColor: "#000000", fillOpacity: "0.8"})
			.bindPopup(tyikva2[i][0])
			.bindTooltip(tyikva2[i][0], {direction: 'top'})
			.addTo(tyikvaicons);
		}
	}
	else {
		tyikvaicons.clearLayers();
	}
}
//1 в лаборатории