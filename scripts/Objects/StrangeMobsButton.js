	var strangemobsicons = L.layerGroup().addTo(map);
	function StrangeMobsOnOff() {
	var chbox;
	chbox=document.getElementById('StrangeMobsButton');
	if (chbox.checked) {
		var strangemobs = [
			[-25903, -24075],
			[-1510, -20996],
			[-28477, -14053],
			[-28231, -3192],
			[-48127, -29099],
			[-58998, -22876],
			[-67226, -29853],
			[-69783, -20004],
			[-81485, -9192],
			[-91402, -5598],
			[-69235, -2385],
			[-118062, -28054],
			[-111214, -12578],
			[-102854, -12229],
			[-110678, -2155],
			[-3253, -60719],
			[-25333, -37343],
			[-48666, -39943],
			[-63757, -32856],
			[-89003, -62045],
			[-90382, -52995],
			[-78698, -52998],
			[-81092, -37319],
			[-101023, -47397],
			[-107804, -44818],
			[-107575, -35284],
			[-6263, -79419],
			[-87108, -98221],
			[-81363, -90438],
			[-83022, -86041],
			[-106282, -97061],
			[-108002, -69226],
			[-100253, -67152],
			[-29934, -116865],
			[-62851, -112955],
			[-85950, -101012],
			[-113506, -106059],
			[-158162, -31643],
			[-150067, -31448],
			[-137161, -24576],
			[-152294, -19516],
			[-179826, -14126],
			[-179686, -9536],
			[-143515, -62254],
			[-140900, -60577],
			[-141343, -52960],
			[-146473, -43376],
			[-135094, -40341],
			[-166437, -46420],
			[-171508, -36614],
			[-169903, -89369],
			[-176507, -81859],
			[-134992, -127331],
			[-156314, -103912],
			[180204, -30591],
			[171487, -13850],
			[194543, -10597],
			[180668, -3001],
			[161148, -26744],
			[134723, -21894],
			[138646, -11375],
			[170317, -49695],
			[157505, -59006],
			[135683, -46261],
			[138237, -39503],
			[162932, -34987],
			[200731, -85133],
			[196693, -75677],
			[198556, -67045],
			[168061, -96847],
			[184752, -97817],
			[170786, -88333],
			[190186, -84554],
			[166597, -67186],
			[143513, -91152],
			[132477, -79890],
			[163600, -75910],
			[196844, -120843],
			[199229, -108064],
			[165617, -130906],
			[186011, -117603],
			[178514, -114352],
			[164498, -105194],
			[136347, -125099],
			[132268, -121403],
			[141131, -118901],
			[161287, -99416],
			[111301, -25788],
			[125804, -10446],
			[46457, -29158],
			[42299, -22168],
			[64405, -12682],
			[42564, -907],
			[17283, -12654],
			[807, -6675],
			[118829, -47083],
			[103930, -41519],
			[121386, -40012],
			[86079, -40501],
			[73607, -34437],
			[52208, -57473],
			[49704, -59970],
			[57410, -34801],
			[23246, -45654],
			[10127, -42819],
			[102811, -92921],
			[120230, -86885],
			[100429, -69385],
			[91104, -76018],
			[87746, -70579],
			[41303, -77201],
			[30573, -88642],
			[27058, -78776],
			[106368, -115635],
			[119708, -114589],
			[103866, -107585],
			[123712, -106445],
			[130629, -105949],
			[89322, -128059],
			[89425, -130530],
			[69051, -119101],
			[76273, -109539],
			[77533, -101414],
			[38569, -130897],
			[45749, -124123],
			[35210, -113357],
			[42174, -104418],
			[45849, -98956],
			[5192, -128084],
			[-21366, -163686],
			[-17390, -159703],
			[-17246, -134879],
			[-33744, -159342],
			[-44989, -152514],
			[-62749, -139072],
			[-93444, -156803],
			[-96875, -152395],
			[-82989, -152815],
			[-85081, -139332],
			[-116334, -160129],
			[-106340, -163339],
			[-111213, -154411],
			[-66057, -166309],
			[-107749, -182749],
			[-99488, -178861],
			[-127140, -173214],
			[-142356, -159686],
			[-131697, -140088],
			[-165502, -162537],
			[197917, -147733],
			[198535, -133527],
			[170581, -152841],
			[180429, -155448],
			[193038, -150982],
			[169412, -146612],
			[161890, -150734],
			[146252, -133523],
			[113188, -140885],
			[120346, -138528],
			[108226, -132843],
			[84058, -156288],
			[69628, -153584],
			[92550, -154197],
			[97285, -152544],
			[73063, -144606],
			[84884, -141620],
			[42051, -152143],
			[45619, -141178],
			[426, -146516],
			[10120, -137620],
			[55216, -164151],
			[-49341, 205849],
			[-128646, 205099],
			[-115918, 205593],
			[-17378, 176579],
			[-44469, 171216],
			[-34585, 178593],
			[-81646, 193849],
			[-119946, 172488],
			[-101721, 172709],
			[-124018, 186073],
			[-31851, 143740],
			[-12370, 154427],
			[-35030, 132584],
			[-50365, 152791],
			[-63453, 162656],
			[-71812, 135856],
			[-88113, 139683],
			[-94960, 144277],
			[-76011, 161593],
			[-99040, 135376],
			[-147566, 201056],
			[-131621, 172008],
			[-165283, 167023],
			[-166259, 182014],
			[-173161, 156727],
			[192223, 199737],
			[204443, 170954],
			[202251, 187832],
			[171024, 166296],
			[187604, 177192],
			[174948, 195851],
			[155031, 170412],
			[136692, 185880],
			[153893, 189150],
			[133921, 194410],
			[197027, 162921],
			[193541, 132636],
			[190127, 142817],
			[172490, 145629],
			[173855, 159816],
			[138345, 138818],
			[145478, 158685],
			[111594, 198310],
			[66519, 197551],
			[39591, 201182],
			[51804, 202136],
			[60285, 202524],
			[21526, 203742],
			[120281, 173593],
			[108845, 178719],
			[101127, 181432],
			[116474, 182637],
			[72014, 168492],
			[75882, 173775],
			[84064, 173295],
			[83940, 178555],
			[89982, 177498],
			[87845, 185097],
			[75533, 190825],
			[51581, 181994],
			[35491, 187737],
			[48837, 186259],
			[63642, 185771],
			[36715, 192318],
			[7345, 177351],
			[1200, 183331],
			[21390, 195578],
			[121454, 133254],
			[112022, 137935],
			[111589, 144030],
			[130815, 148443],
			[121558, 154765],
			[118811, 162848],
			[89110, 134857],
			[94463, 139306],
			[69014, 153610],
			[41867, 138243],
			[58628, 137488],
			[46894, 150621],
			[55804, 158844],
			[-529, 107589],
			[-6111, 113340],
			[-32045, 117939],
			[-23158, 122444],
			[-4881, 121910],
			[-717, 127527],
			[-35141, 100821],
			[-52587, 103610],
			[-32955, 106728],
			[-51953, 118831],
			[-61743, 125557],
			[-56911, 128355],
			[-92302, 99696],
			[-69855, 101711],
			[-86472, 107442],
			[-74036, 108841],
			[-69815, 116231],
			[-74688, 119813],
			[-109814, 104349],
			[-100075, 112281],
			[-113144, 122538],
			[-100978, 130872],
			[-26286, 73200],
			[-13315, 76840],
			[-13466, 92076],
			[-4531, 92000],
			[-25278, 94902],
			[-59843, 65852],
			[-33345, 71139],
			[-51193, 81698],
			[-47548, 97482],
			[-88654, 79099],
			[-76551, 81608],
			[-82975, 94850],
			[-120196, 66099],
			[-101097, 70368],
			[-128066, 77580],
			[-12779, 48100],
			[-2362, 57976],
			[-11458, 62696],
			[-41528, 39347],
			[-52338, 42339],
			[-65406, 50624],
			[-43111, 60960],
			[-34077, 61120],
			[-58928, 63306],
			[-90585, 35125],
			[-71147, 40454],
			[-82551, 52674],
			[-74065, 65070],
			[-130043, 48957],
			[-121882, 59445],
			[-108798, 62016],
			[-30135, 4038],
			[-15195, 4685],
			[-323, 8114],
			[-7552, 32618],
			[-89181, 4976],
			[-97266, 13496],
			[-91957, 18296],
			[-69977, 19677],
			[-111740, 14840],
			[-98590, 20073],
			[-156795, 103197],
			[-148774, 105883],
			[-166894, 103515],
			[-178506, 108209],
			[-164617, 107302],
			[-177261, 126256],
			[-133675, 68993],
			[-149065, 79111],
			[-163479, 89190],
			[-131449, 94375],
			[-165204, 65626],
			[-170487, 80021],
			[-138693, 34175],
			[-159439, 36950],
			[-148992, 39447],
			[-142138, 37401],
			[-141732, 42825],
			[-143429, 52737],
			[-160952, 58354],
			[-157954, 65026],
			[-171325, 33723],
			[-171629, 56907],
			[-178060, 65530],
			[-138132, 3317],
			[-150666, 10547],
			[-152967, 17268],
			[-139781, 26240],
			[-177598, 4468],
			[-177755, 14092],
			[-166545, 16043],
			[-172775, 18609],
			[202461, 106080],
			[197995, 120208],
			[188734, 101814],
			[169846, 105063],
			[180428, 119415],
			[151372, 103522],
			[134085, 106849],
			[131338, 131043],
			[177362, 67815],
			[187239, 72717],
			[186712, 75311],
			[164216, 85530],
			[181193, 94374],
			[154283, 71172],
			[148243, 80611],
			[157789, 80965],
			[138654, 82244],
			[152130, 84772],
			[132942, 93522],
			[184252, 38114],
			[172157, 51426],
			[181090, 55777],
			[143325, 42708],
			[141135, 55187],
			[148597, 56694],
			[135708, 59637],
			[198827, 3376],
			[189391, 19016],
			[143684, 25192],
			[158341, 25040],
			[128746, 98417],
			[102770, 113393],
			[116098, 125165],
			[127898, 128067],
			[67120, 108801],
			[84076, 115594],
			[55069, 103992],
			[34172, 107270],
			[43713, 112570],
			[55954, 114413],
			[63228, 110931],
			[57196, 121876],
			[42473, 129767],
			[50142, 127811],
			[63262, 129717],
			[16731, 99635],
			[28427, 98794],
			[24867, 111983],
			[29073, 120885],
			[16777, 129399],
			[105069, 76835],
			[94472, 67665],
			[85379, 78671],
			[95729, 81529],
			[69714, 90798],
			[89640, 94377],
			[61065, 65561],
			[56385, 75167],
			[33209, 79106],
			[46592, 80948],
			[64428, 86124],
			[38832, 95328],
			[1942, 69426],
			[11588, 84556],
			[107494, 35109],
			[100501, 37132],
			[121465, 43334],
			[109648, 48777],
			[116650, 46459],
			[122763, 59879],
			[85317, 35155],
			[68770, 51078],
			[91801, 64859],
			[54178, 33606],
			[53720, 36697],
			[54472, 42826],
			[38736, 64117],
			[5109, 59245],
			[20382, 63618],
			[114194, 3037],
			[117688, 26837],
			[128545, 30284],
			[85539, 18668],
			[73942, 25231],
			[91858, 28204],
			[37079, 7015],
			[37412, 25717],
			[62684, 26732],
			[12913, 20292]
		];
	for (var i = 0; i < strangemobs.length; i++) {
				strangemobs_1 = new L.circleMarker([strangemobs[i][0],strangemobs[i][1]], {color: "#cc00cc"})
					.bindPopup("Возможное место появления<br>флэтвудского монстра или<br>молерота<br>(появляются ночью)")
					.bindTooltip("Возможное место появления<br>флэтвудского монстра или<br>молерота<br>(появляются ночью)", {direction: 'top'})
					.addTo(strangemobsicons);
			}
	}
	else {
		strangemobsicons.clearLayers();
	}
}