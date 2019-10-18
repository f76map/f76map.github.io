var cvetoktyikvyiicons = L.layerGroup().addTo(map);
function CvetokTyikvyiOnOff() {
	var chbox;
	chbox=document.getElementById('CvetokTyikvyiButton');
	if (chbox.checked) {
		var cvetoktyikvyi = [
			[-54085, -54614],
			[-54216, -54232],
			[-53935, -55208],
			[-54124, -54692],
			[-54468, -54565],
			[-54090, -54654],
			[-53935, -54084],
			[-54029, -55207],
			[-54128, -54174],
			[-54338, -54465],
			[-53996, -54518],
			[-54365, -54059],
			[-54061, -54423],
			[-54110, -54302],
			[162159, -91458],
			[161966, -91547],
			[162391, -91336],
			[162325, -91398],
			[162068, -91499],
			[162244, -91396],
			[89217, -31401],
			[-61293, -145130],
			[193762, -145365],
			[194305, -145402],
			[194059, -144134],
			[193989, -144211],
			[194300, -144540],
			[193563, -144590],
			[-15811, 202200],
			[-14206, 201909],
			[-88801, 203149],
			[-88747, 203229],
			[-101524, 197627],
			[-31648, 167253],
			[-31635, 167145],
			[-31540, 167195],
			[-12635, 166099],
			[-13068, 167390],
			[-12575, 167588],
			[-3640, 165981],
			[-2484, 166184],
			[-3051, 165431],
			[-6502, 170742],
			[-14327, 180102],
			[-403, 187502],
			[-4510, 194294],
			[-8023, 193986],
			[-59756, 173165],
			[-59873, 173088],
			[-59822, 173260],
			[-69042, 165591],
			[-69095, 165605],
			[-71070, 179818],
			[-71067, 179742],
			[-96291, 181256],
			[-96344, 181300],
			[-96325, 181378],
			[-79126, 181467],
			[-79042, 181430],
			[-79100, 181371],
			[-66986, 193413],
			[-66874, 193381],
			[-103302, 170212],
			[-129397, 172642],
			[-129570, 176063],
			[-125821, 176331],
			[-129876, 186979],
			[-115615, 184908],
			[-115677, 184958],
			[-108063, 193481],
			[-14338, 133215],
			[-13806, 132776],
			[-13818, 140597],
			[-13282, 140565],
			[-13506, 140889],
			[-26262, 144404],
			[-26306, 144446],
			[-10535, 150160],
			[-10160, 150528],
			[-55980, 139865],
			[-56092, 139793],
			[-40679, 141656],
			[-40732, 141580],
			[-59811, 153934],
			[-59815, 153860],
			[-50715, 156394],
			[-50672, 156442],
			[-92008, 132124],
			[-92114, 132062],
			[-92155, 132165],
			[-79937, 144949],
			[-79976, 144911],
			[-79988, 145024],
			[-91342, 153274],
			[-91355, 153344],
			[-91269, 153364],
			[-101495, 149109],
			[-101619, 149139],
			[-117702, 155822],
			[-102091, 158259],
			[-102083, 158202],
			[-103861, 162457],
			[-103922, 162367],
			[-138500, 198235],
			[-159858, 203384],
			[-160023, 203386],
			[-149753, 203902],
			[-149730, 203938],
			[-158544, 165745],
			[-163562, 177614],
			[-132259, 182941],
			[-153663, 186826],
			[-141520, 187719],
			[-151813, 191106],
			[-151818, 191147],
			[-143844, 189651],
			[-173581, 173853],
			[-173756, 173853],
			[-173614, 173916],
			[-169784, 173031],
			[-169732, 173150],
			[-168584, 181612],
			[-168643, 181569],
			[-164524, 185444],
			[-164462, 185488],
			[-169039, 190847],
			[-171452, 188720],
			[-172649, 195743],
			[-153585, 136311],
			[-153698, 136296],
			[-153676, 136227],
			[-149467, 152622],
			[-177734, 131927],
			[181895, 169031],
			[181912, 169233],
			[180802, 176884],
			[180987, 176885],
			[165341, 187411],
			[170344, 191802],
			[175200, 190689],
			[179372, 189670],
			[179456, 191082],
			[140536, 170952],
			[140808, 169060],
			[142697, 171068],
			[144192, 170727],
			[131738, 172300],
			[140732, 172860],
			[150133, 175452],
			[147690, 174344],
			[135933, 177677],
			[135712, 177525],
			[135899, 177506],
			[138064, 177701],
			[154673, 179089],
			[146462, 183015],
			[144932, 181074],
			[149972, 181089],
			[146443, 185269],
			[145908, 187794],
			[144105, 186917],
			[144835, 185065],
			[150345, 186763],
			[154192, 187031],
			[152860, 187403],
			[147136, 189755],
			[145590, 191835],
			[148974, 189872],
			[153152, 191302],
			[152157, 189047],
			[131957, 195733],
			[134222, 196241],
			[136400, 195846],
			[142071, 194192],
			[140349, 195775],
			[146165, 193350],
			[145540, 195456],
			[143850, 195109],
			[129414, 170528],
			[129803, 179302],
			[130448, 184658],
			[129499, 189593],
			[127508, 194358],
			[129879, 193399],
			[128062, 195423],
			[107096, 155509],
			[107112, 155407],
			[107034, 155434],
			[101701, 159139],
			[101778, 159113],
			[101761, 159220],
			[80437, 137096],
			[80427, 137017],
			[71801, 140675],
			[71798, 140595],
			[75311, 140549],
			[75260, 140452],
			[96338, 151140],
			[96409, 151104],
			[96394, 151206],
			[72620, 154982],
			[72645, 154893],
			[59394, 138048],
			[59355, 138109],
			[56992, 142329],
			[57152, 142355],
			[57175, 142251],
			[700, 138544],
			[560, 138652],
			[658, 138614],
			[788, 138523],
			[381, 138766],
			[476, 138706],
			[-7518, 130703],
			[-7738, 130747],
			[-89368, 109560],
			[-88950, 110018],
			[-89580, 112775],
			[-89610, 112244],
			[-89379, 112212],
			[-94373, 118153],
			[-94839, 118372],
			[-94438, 118613],
			[-82976, 119310],
			[-82050, 119767],
			[-82413, 119720],
			[-91014, 125032],
			[-91177, 125322],
			[-90607, 124928],
			[-89977, 128240],
			[-89976, 128145],
			[-121770, 108804],
			[-119152, 107470],
			[-117504, 109369],
			[-115789, 109639],
			[-117711, 108320],
			[-112830, 108157],
			[-108204, 108974],
			[-104880, 110266],
			[-100494, 108264],
			[-124614, 113112],
			[-102114, 114017],
			[-99888, 112052],
			[-126478, 115577],
			[-117876, 118393],
			[-98389, 117314],
			[-100962, 116298],
			[-123622, 118805],
			[-123266, 121578],
			[-119300, 122125],
			[-112370, 122744],
			[-108063, 122325],
			[-113204, 126658],
			[-120256, 130011],
			[-99889, 127361],
			[-159325, 107936],
			[-159716, 113121],
			[-156029, 116008],
			[-152159, 115339],
			[-154101, 118058],
			[-162605, 122002],
			[-162070, 118827],
			[-157091, 121282],
			[-154944, 124503],
			[-159250, 127299],
			[-154835, 127426],
			[-151131, 130250],
			[-151019, 130635],
			[-177850, 117788],
			[-171692, 117318],
			[-177787, 118965],
			[-178648, 120562],
			[-178520, 121242],
			[-167547, 122550],
			[-167424, 121884],
			[-164011, 124551],
			[-179892, 130233],
			[-173624, 128092],
			[-168626, 127756],
			[46829, 129371],
			[46750, 129426],
			[46735, 129337],
			[59031, 129293],
			[59077, 129193],
			[100365, 91786],
			[100309, 91840],
			[100341, 91945],
			[100239, 91910]
		];
		for (var i = 0; i < cvetoktyikvyi.length; i++) {
			cvetoktyikvyi_1 = new L.circleMarker([cvetoktyikvyi[i][0],cvetoktyikvyi[i][1]], {color: "#DAA520"})
			.bindPopup("Цветок дикой тыквы")
			.bindTooltip("Цветок дикой тыквы", {direction: 'top'})
			.addTo(cvetoktyikvyiicons);
		}
	}
	else {
		cvetoktyikvyiicons.clearLayers();
	}
}