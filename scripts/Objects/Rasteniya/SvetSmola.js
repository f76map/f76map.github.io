var svetsmolaicons = L.layerGroup().addTo(map);
function SvetSmolaOnOff() {
	var chbox;
	chbox=document.getElementById('SvetSmolaButton');
	if (chbox.checked) {
		var svetsmola = [
			[-16075, -4906],
			[-46879, -19738],
			[-33668, -12402],
			[-87931, -30651],
			[-87930, -30653],
			[-96287, -18284],
			[-67940, -18612],
			[-71505, -6813],
			[-108729, -31362],
			[-108724, -31362],
			[-117922, -18883],
			[-117946, -18941],
			[-99352, -18033],
			[-128547, -12423],
			[-108822, -4496],
			[-108722, -4450],
			[-120845, -1621],
			[-129994, -39206],
			[-129987, -39178],
			[-126833, -34678],
			[-126853, -33645],
			[-147682, -21479],
			[-158153, -6849],
			[-141238, -4440],
			[-168899, -18571],
			[-166383, -4425],
			[-171989, -1499],
			[-156601, -52044],
			[-156581, -52050],
			[-156536, -52006],
			[-149042, -45041],
			[-149037, -45050],
			[-149051, -43054],
			[-150033, -41551],
			[-162329, -35872],
			[-158751, -35834],
			[-140662, -33566],
			[-195944, -46415],
			[-195941, -46302],
			[-195940, -46302],
			[-193303, -48049],
			[-193351, -48092],
			[-189769, -46428],
			[-189775, -46429],
			[-188279, -46066],
			[-188243, -46069],
			[-167444, -45129],
			[-167426, -45128],
			[-193341, -42557],
			[-193330, -42532],
			[-189784, -41095],
			[-186293, -44036],
			[-186325, -44020],
			[-187144, -37929],
			[-186199, -38032],
			[-186224, -38041],
			[-191412, -33796],
			[-191424, -33826],
			[-178840, -34712],
			[-161338, -94309],
			[-161300, -95822],
			[-163037, -92213],
			[-163441, -88660],
			[-163411, -88674],
			[-162719, -80346],
			[-160925, -78465],
			[-174682, -97583],
			[-174723, -97661],
			[-174678, -97609],
			[-171961, -95965],
			[-175110, -93720],
			[-173909, -93306],
			[-170018, -92132],
			[-170950, -91619],
			[-170026, -93696],
			[-165538, -91418],
			[-176677, -86131],
			[-176263, -86590],
			[-177199, -86608],
			[-177817, -87379],
			[-172138, -87613],
			[-168623, -88941],
			[-169518, -86617],
			[-171596, -87893],
			[-170147, -87187],
			[-165749, -88562],
			[-180118, -83640],
			[-176728, -83015],
			[-178219, -82975],
			[-177718, -84019],
			[-168018, -82723],
			[-170611, -82468],
			[-166022, -85630],
			[-165973, -85816],
			[-178063, -81232],
			[-178084, -81272],
			[-166864, -79486],
			[-160903, -113514],
			[-163488, -107884],
			[-163409, -110164],
			[-162959, -107526],
			[-160576, -99441],
			[-160340, -100400],
			[-161144, -102040],
			[-177117, -108167],
			[-179926, -108804],
			[-174940, -107982],
			[-166552, -107072],
			[-166726, -106557],
			[-165946, -110365],
			[-177241, -103337],
			[-178159, -102546],
			[-178234, -102986],
			[-169003, -105159],
			[-164942, -104986],
			[-171604, -98426],
			[-164776, -99236],
			[-164777, -99237],
			[207026, -58618],
			[207025, -58654],
			[205800, -53409],
			[205772, -53425],
			[205779, -53389],
			[196334, -58904],
			[196355, -58940],
			[196361, -58910],
			[161593, -88279],
			[161577, -88261],
			[161574, -88260],
			[30544, -11373],
			[2, -1],
			[31927, -2900],
			[130458, -43379],
			[130469, -43358],
			[-36501, -161488],
			[-33127, -161326],
			[-28650, -183646],
			[-24027, -170713],
			[-29755, -164318],
			[-24953, -166150],
			[-37734, -170293],
			[-178014, -144829],
			[72417, -161094],
			[72379, -161096],
			[78465, -162477],
			[78560, -162486],
			[73657, -158695],
			[72251, -151650],
			[72255, -151711],
			[72365, -151818],
			[75972, -151484],
			[75971, -151449],
			[80606, -147982],
			[80386, -147933],
			[89901, -165183],
			[89969, -165220],
			[90029, -165246],
			[192984, 181227],
			[193001, 181265],
			[192961, 181265],
			[186956, 132625],
			[186882, 132584],
			[186891, 132674],
			[187563, 141700],
			[187450, 141665],
			[187467, 141744],
			[164196, 152070],
			[164081, 152145],
			[164118, 152072],
			[164164, 152180],
			[193988, 153672],
			[193905, 153648],
			[193937, 153744],
			[140770, 151335],
			[140697, 151363],
			[140657, 151302],
			[-1024, 109390],
			[-965, 107262],
			[-21489, 112871],
			[-20233, 114059],
			[-26275, 125181],
			[-35721, 98819],
			[-36187, 102702],
			[-44436, 109778],
			[-64487, 120780],
			[-64510, 120791],
			[-53915, 124751],
			[-51339, 124308],
			[-41067, 128538],
			[-41023, 128537],
			[-70690, 99834],
			[-30156, 66281],
			[-9734, 68887],
			[-9452, 72630],
			[-1546, 73181],
			[-22212, 74343],
			[-19922, 76903],
			[-9955, 74919],
			[-9888, 74898],
			[-20866, 78952],
			[-16984, 80466],
			[-18583, 84947],
			[-10190, 85412],
			[-3603, 85209],
			[-22706, 91981],
			[-23372, 92436],
			[-10443, 94920],
			[-10384, 94901],
			[-60167, 70836],
			[-35930, 71969],
			[-64129, 75680],
			[-54900, 76316],
			[-37662, 75021],
			[-62965, 80289],
			[-38825, 79081],
			[-64749, 84309],
			[-64722, 84341],
			[-51974, 82335],
			[-39494, 83174],
			[-38475, 82247],
			[-34695, 84693],
			[-45647, 97136],
			[-45902, 95959],
			[-88975, 66649],
			[-88908, 66613],
			[-88458, 70629],
			[-93760, 76453],
			[-84553, 74149],
			[-85299, 75385],
			[-86552, 79241],
			[-84355, 81716],
			[-76375, 79835],
			[-70592, 78723],
			[-65906, 79101],
			[-67761, 80558],
			[-93712, 85603],
			[-79432, 85865],
			[-123663, 69417],
			[-103868, 65569],
			[-128476, 74652],
			[-125073, 75842],
			[-107643, 75298],
			[-108898, 74972],
			[-103129, 74021],
			[-99997, 79238],
			[-100052, 79249],
			[-120608, 83330],
			[-98386, 84473],
			[-118618, 95800],
			[-30622, 33144],
			[-30668, 33088],
			[-11186, 36225],
			[-11229, 36211],
			[-11171, 36213],
			[-1265, 36268],
			[-31038, 37259],
			[-25872, 40338],
			[-25896, 40365],
			[-31088, 41578],
			[-31138, 41542],
			[-25246, 45004],
			[-13593, 41722],
			[-13569, 41657],
			[-13533, 41708],
			[-11787, 47816],
			[-26976, 51548],
			[-17337, 52696],
			[-6913, 54186],
			[-11967, 60623],
			[-55011, 35263],
			[-48432, 33456],
			[-48460, 33475],
			[-43545, 36599],
			[-42549, 33062],
			[-39919, 33097],
			[-37581, 36254],
			[-34557, 36198],
			[-34587, 36219],
			[-46079, 39228],
			[-46049, 39181],
			[-46037, 39249],
			[-50511, 41911],
			[-50471, 41936],
			[-50476, 41854],
			[-45724, 42771],
			[-40189, 43395],
			[-40142, 43483],
			[-40215, 43538],
			[-38930, 41223],
			[-38931, 41207],
			[-64836, 46886],
			[-64769, 46933],
			[-64866, 46991],
			[-44691, 45338],
			[-64396, 52550],
			[-47293, 53131],
			[-47374, 53199],
			[-60480, 57103],
			[-56119, 56871],
			[-56192, 56804],
			[-56163, 56889],
			[-56388, 59972],
			[-56439, 59960],
			[-54074, 59985],
			[-49721, 59396],
			[-49710, 59369],
			[-48507, 58750],
			[-48445, 58681],
			[-63538, 62193],
			[-42376, 61493],
			[-42312, 62110],
			[-96704, 33607],
			[-76154, 32837],
			[-76178, 32780],
			[-85447, 38328],
			[-72543, 37206],
			[-97199, 45980],
			[-76374, 45400],
			[-76348, 45372],
			[-90874, 52403],
			[-90261, 51661],
			[-77759, 52260],
			[-77753, 52253],
			[-66286, 55433],
			[-95187, 59099],
			[-79051, 60074],
			[-69593, 61169],
			[-74351, 63984],
			[-68318, 61570],
			[-68319, 61598],
			[-114248, 34046],
			[-125779, 38573],
			[-110089, 40627],
			[-129568, 43828],
			[-108994, 44379],
			[-108450, 48061],
			[-98779, 46312],
			[-117210, 50336],
			[-106340, 52973],
			[-120845, 56013],
			[-104751, 56609],
			[-127648, 58678],
			[-122157, 63131],
			[-103716, 63521],
			[-98562, 62144],
			[-23155, 4003],
			[-23199, 4029],
			[-23178, 4094],
			[-21185, 4994],
			[-9140, 4998],
			[-9075, 4983],
			[-9125, 4958],
			[-3693, 5244],
			[-3724, 5308],
			[-3641, 5290],
			[-3667, 5327],
			[-19839, 11513],
			[-19863, 11527],
			[-12836, 10776],
			[-31548, 12585],
			[-31583, 12584],
			[-26579, 15710],
			[-26578, 15733],
			[-23732, 16289],
			[-23722, 16286],
			[-2076, 14342],
			[-29096, 24416],
			[-30183, 24324],
			[-25287, 24448],
			[-25474, 24393],
			[-31003, 28074],
			[-12041, 27178],
			[-25625, 31785],
			[-7885, 29090],
			[-62526, 5081],
			[-33653, 5713],
			[-33693, 5694],
			[-33632, 5707],
			[-62178, 8873],
			[-35189, 11359],
			[-35218, 11362],
			[-65076, 13571],
			[-53569, 14057],
			[-45723, 15150],
			[-37700, 12877],
			[-64182, 19403],
			[-57506, 18507],
			[-43286, 19678],
			[-35253, 19583],
			[-35280, 19585],
			[-35299, 19573],
			[-45635, 24175],
			[-52371, 26892],
			[-38767, 27335],
			[-62001, 31499],
			[-56487, 32059],
			[-56441, 32094],
			[-56444, 32022],
			[-42443, 30144],
			[-37534, 32028],
			[-89267, 259],
			[-66921, 7739],
			[-92502, 11904],
			[-92489, 11907],
			[-72227, 11071],
			[-79105, 18934],
			[-79079, 18962],
			[-79556, 21988],
			[-79570, 21979],
			[-74582, 21103],
			[-89614, 32239],
			[-75412, 30017],
			[-126475, 7332],
			[-115149, 5813],
			[-98517, 4323],
			[-102524, 9770],
			[-108592, 13170],
			[-108734, 13281],
			[-101156, 13342],
			[-100035, 17303],
			[-127487, 21823],
			[-116634, 21077],
			[-103920, 23048],
			[-103895, 23050],
			[-125567, 26690],
			[-116727, 28129],
			[-101798, 26087],
			[-126489, 30088],
			[-109376, 30360],
			[-141921, 100404],
			[-141863, 102395],
			[-137451, 101680],
			[-174709, 98998],
			[-173485, 106142],
			[-161768, 68353],
			[-159230, 69610],
			[-145814, 71869],
			[-136365, 72442],
			[-154042, 75331],
			[-148224, 80903],
			[-157783, 83357],
			[-157779, 83329],
			[-156247, 82796],
			[-152161, 82646],
			[-136730, 84947],
			[-143987, 92241],
			[-150625, 94818],
			[-135277, 94805],
			[-173623, 69528],
			[-171754, 72649],
			[-168374, 75091],
			[-178673, 83115],
			[-172177, 83649],
			[-173648, 89102],
			[-167047, 89842],
			[-164832, 97315],
			[-163245, 34325],
			[-150910, 33346],
			[-143644, 35655],
			[-135135, 32877],
			[-158940, 37689],
			[-150079, 39459],
			[-146634, 40002],
			[-138915, 39427],
			[-153747, 42778],
			[-159829, 45585],
			[-153228, 49114],
			[-145331, 47736],
			[-153807, 50712],
			[-154845, 50742],
			[-154854, 50772],
			[-131705, 50414],
			[-157490, 59858],
			[-158044, 61579],
			[-148220, 63523],
			[-178486, 33020],
			[-179594, 33534],
			[-169880, 38388],
			[-166055, 39764],
			[-166903, 47323],
			[-177050, 54200],
			[-165480, 54905],
			[-170393, 57649],
			[-174502, 62447],
			[-133485, 4063],
			[-158682, 4233],
			[-158711, 4211],
			[-152784, 6458],
			[-155430, 7352],
			[-144609, 8127],
			[-147682, 10820],
			[-157933, 14756],
			[-141133, 13871],
			[-158273, 20315],
			[-158149, 17088],
			[-145678, 18750],
			[-139217, 18217],
			[-143281, 22812],
			[-161147, 26652],
			[-158735, 26601],
			[-131697, 26646],
			[-156503, 30352],
			[-148769, 30460],
			[-178197, 7529],
			[-168589, 16452],
			[-180094, 26028],
			[-170361, 29234],
			[-166555, 30004],
			[198999, 109160],
			[199001, 109081],
			[170759, 105731],
			[172106, 104163],
			[172052, 105886],
			[173009, 116692],
			[172658, 117530],
			[174103, 117121],
			[173861, 118181],
			[193083, 119935],
			[152271, 101185],
			[151462, 113120],
			[152648, 113958],
			[153470, 115793],
			[155567, 115179],
			[155929, 115273],
			[160406, 118020],
			[159902, 116468],
			[183454, 84424],
			[185303, 85542],
			[181629, 92036],
			[169535, 95837],
			[149969, 91080],
			[154760, 90929],
			[197911, 44405],
			[197650, 47039],
			[197598, 47052],
			[200709, 61395],
			[202361, 63178],
			[189511, 37197],
			[194920, 47453],
			[194840, 48180],
			[194855, 48147],
			[169994, 64076],
			[141581, 56233],
			[142015, 60823],
			[149531, 60832],
			[149584, 29942],
			[149530, 29962],
			[104644, 101157],
			[104726, 101177],
			[106376, 100068],
			[106517, 99799],
			[107511, 100981],
			[108733, 102160],
			[108692, 102160],
			[109485, 103754],
			[112436, 103163],
			[112436, 103168],
			[111652, 102577],
			[111467, 103882],
			[123323, 107405],
			[83326, 99020],
			[83305, 98977],
			[76739, 107997],
			[76743, 108039],
			[75476, 112944],
			[75426, 112933],
			[75321, 112193],
			[81020, 113012],
			[84338, 113166],
			[84380, 113176],
			[82563, 114579],
			[82574, 114606],
			[80975, 117623],
			[84346, 117899],
			[84303, 117886],
			[82817, 116816],
			[82826, 116898],
			[35984, 106396],
			[35965, 107882],
			[35798, 106755],
			[62297, 108121],
			[62848, 108447],
			[64923, 109992],
			[64927, 109999],
			[64972, 110004],
			[51565, 115991],
			[37453, 124951],
			[11194, 104058],
			[10108, 103189],
			[9496, 102737],
			[9498, 102727],
			[21354, 112790],
			[23519, 113471],
			[23557, 113497],
			[14686, 120366],
			[14701, 120392],
			[13761, 120892],
			[13757, 120873],
			[103459, 74730],
			[104007, 74833],
			[112589, 81329],
			[111920, 80479],
			[113127, 80235],
			[107456, 86949],
			[107676, 86931],
			[111691, 89367],
			[105514, 90158],
			[128405, 96897],
			[127099, 97182],
			[127106, 97207],
			[73271, 70641],
			[73277, 70642],
			[83919, 82190],
			[83909, 82189],
			[83923, 82206],
			[66953, 91523],
			[66953, 91523],
			[81357, 97023],
			[46669, 66863],
			[46682, 66874],
			[64941, 72627],
			[64937, 72608],
			[64963, 72614],
			[35811, 81799],
			[35790, 81795],
			[58093, 83442],
			[58083, 83436],
			[58088, 83454],
			[62821, 86723],
			[62839, 86716],
			[49365, 95132],
			[49348, 95148],
			[49370, 95125],
			[17565, 72375],
			[2020, 77125],
			[6045, 75576],
			[25501, 84354],
			[25500, 84354],
			[25130, 89179],
			[25144, 89165],
			[25136, 89138],
			[14732, 97647],
			[14738, 97637],
			[12651, 94846],
			[12625, 94838],
			[100338, 43583],
			[105014, 44390],
			[86663, 36994],
			[89940, 40351],
			[70167, 49346],
			[70189, 49373],
			[86256, 59241],
			[86252, 59232],
			[86282, 59209],
			[45847, 34351],
			[45855, 34355],
			[44162, 39995],
			[44166, 39981],
			[34368, 44271],
			[46145, 44546],
			[59090, 47341],
			[59097, 47343],
			[35513, 51265],
			[35569, 51225],
			[48505, 52634],
			[48508, 52631],
			[32199, 42683],
			[4201, 57628],
			[9585, 58046],
			[9588, 58061],
			[2381, 64458],
			[30556, 65493],
			[30550, 65494],
			[75460, 28321],
			[85891, 28472],
			[86937, 28933],
			[98208, 31074],
			[45568, 32566],
			[45556, 32568],
			[1058, 14137],
			[1065, 14150],
			[23512, 28570],
			[30119, 27148],
			[30116, 27145],
			[15811, 32487],
			[24593, 31291]
		];
		for (var i = 0; i < svetsmola.length; i++) {
			svetsmola_1 = new L.circleMarker([svetsmola[i][0],svetsmola[i][1]], {color: "#FFFF00"})
			.bindPopup("Светящаяся смола")
			.bindTooltip("Светящаяся смола", {direction: 'top'})
			.addTo(svetsmolaicons);
		}
	}
	else {
		svetsmolaicons.clearLayers();
	}
}