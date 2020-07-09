let magazineicons = L.layerGroup().addTo(map);
function MagazineOnOff() {
	let chbox;
	chbox=document.getElementById('MagazineButton');
	if (chbox.checked) {
		let magazine1 = [
			[-9008, -2687],
			[-51992, -13348],
			[-51388, -12572],
			[-53193, -12641],
			[-109146, -21916],
			[-107644, -18957],
			[-61703, -57405],
			[-55677, -60213],
			[-56139, -60319],
			[-55996, -60675],
			[-60583, -56648],
			[-46953, -50728],
			[-47182, -50601],
			[-54707, -48387],
			[-52055, -45937],
			[-41769, -37816],
			[-91195, -43373],
			[-88588, -41415],
			[-111183, -61097],
			[-112682, -58824],
			[-101530, -55237],
			[-120028, -45590],
			[-11460, -68768],
			[-47207, -69700],
			[-45387, -72518],
			[-46588, -69488],
			[-84541, -80246],
			[-117204, -96359],
			[-31655, -130238],
			[-6725, -117556],
			[-39738, -129455],
			[-37691, -125365],
			[-46969, -117157],
			[-51339, -107036],
			[-148427, -58861],
			[-147876, -57434],
			[-149150, -125895],
			[-131455, -113804],
			[-141940, -105822],
			[-141183, -105935],
			[-139805, -103406],
			[-169112, -116879],
			[-167284, -114534],
			[196865, -31277],
			[201128, -28088],
			[188969, -19093],
			[179546, -11183],
			[179356, -10037],
			[135976, -1061],
			[204934, -92313],
			[204948, -93423],
			[183861, -93787],
			[161205, -92221],
			[149497, -75855],
			[180786, -123247],
			[171546, -121974],
			[153810, -104121],
			[127835, -31586],
			[129872, -30662],
			[130445, -30869],
			[99822, -16461],
			[90598, -29949],
			[88530, -21098],
			[50793, -22939],
			[32972, -20442],
			[34692, -6227],
			[4811, -31303],
			[30505, -21479],
			[90490, -32847],
			[50336, -42846],
			[51328, -43894],
			[25793, -59091],
			[29047, -58150],
			[113897, -74242],
			[75683, -76942],
			[79341, -75029],
			[60571, -96293],
			[48988, -127401],
			[52109, -127944],
			[-6997, -161561],
			[-1786, -159695],
			[-31118, -153023],
			[-31153, -151692],
			[-30009, -132537],
			[-43812, -131509],
			[-38926, -132600],
			[-72261, -132144],
			[-121882, -136640],
			[-105496, -138269],
			[-124505, -131917],
			[-123972, -132265],
			[-32751, -187604],
			[-29615, -173773],
			[-43581, -173508],
			[-42281, -173268],
			[-41049, -175175],
			[-79680, -179558],
			[-81901, -177878],
			[-76141, -176489],
			[-120411, -189773],
			[-116517, -189072],
			[-121648, -184045],
			[-135572, -183314],
			[165028, -150963],
			[174775, -140464],
			[145528, -149754],
			[139223, -145456],
			[142712, -145552],
			[194438, -168892],
			[187655, -165254],
			[188701, -166450],
			[133452, -172805],
			[126063, -153622],
			[79363, -153867],
			[51569, -150995],
			[-95836, 197043],
			[-55705, 166296],
			[-61178, 179953],
			[-59554, 183280],
			[-83663, 165595],
			[-83410, 166023],
			[-69259, 171101],
			[-94527, 190403],
			[-94003, 190479],
			[-121582, 196347],
			[-105299, 195118],
			[-32072, 151282],
			[-27759, 162847],
			[-17198, 162936],
			[-38166, 159647],
			[-38886, 158619],
			[-90434, 150535],
			[-108719, 141100],
			[-102840, 142063],
			[-103176, 140689],
			[-100283, 142382],
			[-109692, 157191],
			[-169762, 202275],
			[-169057, 201456],
			[-154690, 164805],
			[-145779, 172406],
			[-143061, 138386],
			[-141086, 137117],
			[-144563, 140901],
			[-142967, 140529],
			[-143194, 149742],
			[-160363, 152369],
			[-144770, 154399],
			[-143294, 153042],
			[-137087, 153579],
			[-137619, 153503],
			[179022, 134005],
			[68524, 202572],
			[124699, 168887],
			[124875, 170716],
			[66128, 175484],
			[79912, 182187],
			[79938, 184480],
			[62930, 172044],
			[44788, 176940],
			[59972, 178677],
			[15173, 191297],
			[14739, 191159],
			[14887, 193366],
			[72264, 135905],
			[72200, 137693],
			[70873, 137828],
			[86242, 151708],
			[86958, 158951],
			[43672, 161983],
			[47506, 161436],
			[45685, 162700],
			[1623, 137648],
			[-58622, 98996],
			[-59273, 98817],
			[-87856, 115793],
			[-103099, 109346],
			[-129148, 119197],
			[-126080, 120400],
			[-41010, 88185],
			[-42431, 87320],
			[-33597, 92436],
			[-65774, 74593],
			[-38834, 48119],
			[-40702, 50774],
			[-52850, 56947],
			[-66160, 36123],
			[-79942, 46124],
			[-91211, 63254],
			[-90613, 65375],
			[-119461, 40472],
			[-104827, 41768],
			[-23186, 14074],
			[-19515, 17049],
			[-14628, 16508],
			[-7879, 20956],
			[-39243, 3472],
			[-34821, 13287],
			[-67049, 23209],
			[-122229, 2990],
			[-118358, 1778],
			[-99056, 7196],
			[-99482, 8126],
			[-99267, 8117],
			[-99513, 8208],
			[-165694, 122072],
			[-164200, 123352],
			[-146248, 65702],
			[-160672, 77914],
			[-180899, 73944],
			[-179795, 73980],
			[143901, 98912],
			[143657, 98667],
			[176334, 79731],
			[131148, 85231],
			[132921, 84810],
			[131572, 87592],
			[200083, 46314],
			[172416, 38979],
			[172631, 58613],
			[183658, 2146],
			[141378, 8636],
			[98435, 100662],
			[113692, 115995],
			[95429, 98817],
			[88109, 105494],
			[94167, 103072],
			[91789, 115201],
			[92650, 114765],
			[45769, 101158],
			[39498, 115193],
			[41279, 115307],
			[33977, 127811],
			[26060, 130994],
			[128966, 86474],
			[49442, 84810],
			[25039, 69550],
			[23478, 71115],
			[20591, 91042],
			[89193, 59819],
			[36083, 39147],
			[13776, 38836],
			[7578, 44182],
			[7060, 41759],
			[20952, 42951],
			[15707, 47347],
			[13733, 45851],
			[16501, 46039],
			[20582, 45727],
			[24703, 45734],
			[27840, 47195],
			[23585, 49192],
			[27676, 50321],
			[120525, 5352],
			[100618, 26776],
			[100520, 25740],
			[58287, 10607],
			[58126, 9997],
			[57417, 12677]
		];
		let magazine2 = [
			["Журнал<br>[Внутри здания Ван Лоу, таксидермист]", -112937, -62704, icon_magazine2],
			["Журналы - 4 шт.<br>[Внутри здания Восточная региональная тюрьма]", 127398, -29105, icon_magazine3],
			["Журналы - 2 шт.<br>[Внутри здания Галерея в долине]", -12605, 196567, icon_magazine3],
			["Журналы - 4 шт.<br>[Внутри локации Горящая шахта]", -102236, -84358, icon_magazine3],
			["Журналы - 2 шт.<br>[Внутри здания Дом &quotПи&quot]", 89394, -875, icon_magazine3],
			["Журналы - 2 шт.<br>[Внутри здания Дом &quotЭта Пси&quot]", 85875, 5283, icon_magazine3],
			["Журналы - 3 шт.<br>[Внутри здания Завод &quotЯдер-колы&quot — Канова]", -53492, -162144, icon_magazine3],
			["Журналы - 2 шт.<br>[Внутри здания Национальный исследовательский центр радиоастрономии]", -43120, 112631, icon_magazine3],
			["Журналы - 3 шт.<br>[Внутри здания Исследовательский центр &quotРобКо&quot]", -64897, 200091, icon_magazine3],
			["Журналы - 3 шт.<br>[Внутри здания Капитолий Чарлстона]", -57828, -91983, icon_magazine3],
			["Журналы - 2 шт.<br>[Внутри здания Капитолий Чарлстона - суд]", -57285, -93883, icon_magazine3],
			["Журналы - 5 шт.<br>[Внутри здания Лаборатория биомов &quotАрктос фарма&quot]", 50783, -40504, icon_magazine3],
			["Журналы - 3 шт.<br>[Внутри здания Медцентр AVR]", -55735, -114894, icon_magazine3],
			["Журналы - 3 шт.<br>[Внутри локации Мезонин]", 14430, 39100, icon_magazine3],
			["Журнал<br>[Внутри локации Место захоронения на горе Эммет]", -51807, 56146, icon_magazine2],
			["Журналы - 2 шт.<br>[Внутри здания Муниципальный центр Ватоги]", -141320, 143840, icon_magazine3],
			["Журналы - 2 шт.<br>[Внутри локации Необыкновенные пещеры]", -89947, -41527, icon_magazine3],
			["Журналы - 4 шт.<br>[Внутри локации Норы]", -3956, 157951, icon_magazine3],
			["Журнал<br>[Внутри здания Обсерватория АТЛАС]", 73912, 79507, icon_magazine2],
			["Журналы - 3 шт.<br>[Внутри здания Общественный центр Ватоги]", -136952, 138432, icon_magazine3],
			["Журналы - 4 шт.<br>[Внутри здания Особняк Риверсайд]", -70220, -70715, icon_magazine3],
			["Журнал<br>[Внутри здания Офис компании &quotЛюмбер&quot, Западная Вирджиния]", 189120, -168814, icon_magazine2],
			["Журналы - 4 шт.<br>[Внутри здания Переработка пищевых продуктов &quotМама Дольче&quot]", 84461, -15851, icon_magazine3],
			["Журналы - 4 шт.<br>[Внутри локации Пещера вендиго]", 43120, 87360, icon_magazine3],
			["Журналы - 4 шт.<br>[Внутри локации Подземка Ватоги]", -141432, 152462, icon_magazine3],
			["Журналы - 3 шт.<br>[Внутри локации Точка &quotАльфа&quot]", -14505, 80945, icon_magazine3],
			["Журналы - 4 шт.<br>[Внутри локации Точка &quotБраво&quot]", 137056, 43038, icon_magazine3],
			["Журналы - 4 шт.<br>[Внутри локации Точка &quotЧарли&quot]", -118164, 1654, icon_magazine3],
			["Журнал<br>[Внутри здания Складской подвал]", -104306, -119563, icon_magazine2],
			["Журналы - 4 шт.<br>[Внутри здания Терминал аэропорта Моргантауна]", 102094, -23035, icon_magazine3],
			["Журнал<br>[Внутри локации Тоннель &quotБольшой излом&quot]", -149488, 112944, icon_magazine2],
			["Журнал<br>[Внутри локации Тоннель &quotБольшой излом&quot]", -120808, -44088, icon_magazine2],
			["Журналы - 3 шт.<br>[Внутри локации Убежище 79]", 186772, 145375, icon_magazine3],
			["Журналы - 2 шт.<br>[Внутри локации Убежище Хоука]", 7828, 119103, icon_magazine3],
			["Журналы - 3 шт.<br>[Внутри здания Университет &quotВолт-Тек&quot]", 82071, -8020, icon_magazine3],
			["Журнал<br>[Внутри здания Форт Дефайанс]", -131600, 107048, icon_magazine2],
			["Журналы - 4 шт.<br>[Внутри здания Центр аграрных исследований &quotВолт-Тек&quot]", 19445, -117195, icon_magazine3],
			["Журнал<br>[Внутри здания Центр &quotВест-Тек Рисерч&quot]", -60624, 88526, icon_magazine2],
			["Журналы - 4 шт.<br>[Внутри локации Шахта &quotБлэкуотер&quot]", -46520, 28168, icon_magazine3],
			["Журналы - 2 шт.<br>[Внутри локации Шахта &quotГоули&quot]", -141320, 143840, icon_magazine3],
			["Журналы - 4 шт.<br>[Внутри локации Шахта &quotКервуд&quot]", -64741, 130050, icon_magazine3],
			["Журнал<br>[Внутри локации Шахта &quotМононга&quot]", 111115, 58020, icon_magazine2],
			["Журналы - 3 шт.<br>[Внутри локации Шахта &quotСчастливая дыра&quot]", -138108, 88917, icon_magazine3],
			["Журналы - 4 шт.<br>[Внутри здания Школа Ватоги]", -146584, 153175, icon_magazine3],
			["Журналы - 3 шт.<br>[Внутри здания Школа Моргантауна]", 94128, 2135, icon_magazine3],
			["Журнал<br>[Внутри здания Штаб-квартира АМС]", -139096, 148632, icon_magazine2],
			["Журнал<br>[Внутри здания Штаб-квартира &quotГаррахан майнинг&quot]", -160896, -73687, icon_magazine2],
			["Журналы - 3 шт.<br>[Внутри здания Штаб-квартира &quotХорнрайт индастриал&quot]", -46784, -108174, icon_magazine3],
			["Журналы - 6 шт.<br>[Внутри здания Шугар гроув]", -15204, 118972, icon_magazine3],
			["Журнал<br>[Внутри здания Экстренные службы Ватоги]", -141039, 141012, icon_magazine2],
			["Журналы - 6 шт.<br>[Внутри здания Электростанция &quotГрозовая гора&quot]", 98395, 192590, icon_magazine3],
			["Журналы - 6 шт.<br>[Внутри здания Электростанция &quotПосейдон Энерджи&quot WV-06]", -40971, -132032, icon_magazine3],
			["Журналы - 2 шт.<br>[Внутри здания Тату-салон &quotБольшая Эл&quot]", 76623, -6504, icon_magazine3]
		];
		for (let i = 0; i < magazine1.length; i++) {
			new L.Marker([magazine1[i][0],magazine1[i][1]], {icon: icon_magazine1})
				.bindPopup("Журнал")
				.bindTooltip("Журнал", {direction: 'top'})
				.addTo(magazineicons);
		}
		for (let i = 0; i < magazine2.length; i++) {
			new L.Marker([magazine2[i][1],magazine2[i][2]], {icon: magazine2[i][3]})
				.bindPopup(magazine2[i][0])
				.bindTooltip(magazine2[i][0], {direction: 'top'})
				.addTo(magazineicons);
		}
	}
	else {
		magazineicons.clearLayers();
	}
}
//Автотайник "РобКо" #001 2
//Пещера 2
//Яма 4