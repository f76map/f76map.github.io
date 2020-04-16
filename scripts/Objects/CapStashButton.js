let capstashicons = L.layerGroup().addTo(map);
function CapStashOnOff() {
	let chbox;
	chbox=document.getElementById('CapStashButton');
	if (chbox.checked) {
		let capstash1 = [
			[-66949, -22661],
			[-95231, -361],
			[-11633, -44142],
			[-55787, -60470],
			[-50493, -55642],
			[-47438, -49568],
			[-54790, -48493],
			[-101863, -56425],
			[-41967, -86338],
			[-72482, -98239],
			[-71615, -69328],
			[-109480, -88874],
			[-49586, -128732],
			[-48246, -127254],
			[-41493, -128220],
			[-44035, -129334],
			[-40738, -129470],
			[-36881, -128990],
			[-37893, -128620],
			[-38918, -130322],
			[-37437, -125246],
			[-47244, -101995],
			[-48597, -100192],
			[-89061, -125954],
			[-119784, -109672],
			[-148105, -59019],
			[-149542, -58063],
			[-155326, -36646],
			[-170608, -60173],
			[-170614, -60168],
			[-131297, -113403],
			[-141275, -106084],
			[189991, -31149],
			[167255, -25951],
			[164729, -21228],
			[147086, -57767],
			[149114, -53012],
			[128655, -25940],
			[90115, -32619],
			[82137, -18733],
			[93136, -11635],
			[94807, -8474],
			[76357, -6720],
			[88080, -7043],
			[89482, -4310],
			[79502, -2899],
			[84399, -2007],
			[85492, -956],
			[94512, -3949],
			[17852, -1134],
			[34400, -37212],
			[29103, -58446],
			[17357, -44575],
			[5179, -32978],
			[45625, -74687],
			[13575, -91731],
			[27651, -79575],
			[-53084, -158362],
			[-46390, -137279],
			[-126763, -134070],
			[-123897, -134304],
			[-29840, -173697],
			[-53897, -166156],
			[-56982, -163954],
			[-80912, -177268],
			[-126419, -189261],
			[-114498, -171314],
			[-162667, -157090],
			[-166018, -153828],
			[142704, -148147],
			[133472, -172678],
			[25989, -137769],
			[70258, -174704],
			[-59619, 183136],
			[-60430, 183433],
			[-72895, 184565],
			[-32344, 150746],
			[-17650, 162014],
			[170611, 240176],
			[137668, 143971],
			[156470, 160219],
			[156470, 160219],
			[68251, 202758],
			[89374, 202987],
			[103404, 195434],
			[43556, 177108],
			[58856, 176704],
			[48787, 190967],
			[8043, 173492],
			[3327, 182772],
			[112064, 141314],
			[112063, 141335],
			[100079, 152164],
			[-18551, 116072],
			[-129204, 119774],
			[-48543, 76535],
			[-56629, 88511],
			[-41853, 88494],
			[-103053, 84564],
			[-37382, 49156],
			[-58396, 7160],
			[-45909, 27333],
			[-47646, 28125],
			[-68127, 2952],
			[167917, 58454],
			[168504, 58857],
			[190481, 31177],
			[129683, 119581],
			[30573, 130853],
			[98684, 92540],
			[70884, 80099],
			[28667, 93362],
			[114360, 63040],
			[34230, 64057],
			[99889, 1927],
			[92507, 32092]
		];
		let capstash2 = [
			["Тайник с крышками<br>[Внутри локации Бункер Сэма Блэквелла]", 26723, 185034, icon_capstash2],
			["Тайник с крышками<br>[Внутри локации Бункер &quotУайтспринг&quot]", -64373, 4696, icon_capstash2],
			["Тайник с крышками<br>[Внутри локации Бункер Эбби]", 138117, 185219, icon_capstash2],
			["Тайники с крышками - 3 шт.<br>[Внутри здания Восточная региональная тюрьма]", 127398, -29105, icon_capstash3],
			["Тайник с крышками<br>[Внутри здания Дункан и Дункан Роботикс]", -19583, -44179, icon_capstash2],
			["Тайники с крышками - 3 шт.<br>[Внутри здания Завод &quotЯдер-колы&quot — Канова]", -53492, -162144, icon_capstash3],
			["Тайник с крышками<br>[Внутри здания Капитолий Чарлстона]", -57828, -91983, icon_capstash2],
			["Тайники с крышками - 2 шт.<br>[Внутри здания Капитолий Чарлстона - суд]", -57285, -93883, icon_capstash3],
			["Тайник с крышками<br>[Внутри здания Курорт &quotУайтспринг&quot]", -52810, 6663, icon_capstash2],
			["Тайник с крышками<br>[Внутри здания Медцентр AVR]", -55735, -114894, icon_capstash2],
			["Тайник с крышками<br>[Внутри здания Муниципальный центр Ватоги]", -141320, 143840, icon_capstash2],
			["Тайники с крышками - 2 шт.<br>[Внутри локации Норы]", -3956, 157951, icon_capstash3],
			["Тайники с крышками - 2 шт.<br>[Внутри здания Обсерватория АТЛАС]", 73912, 79507, icon_capstash3],
			["Тайник с крышками<br>[Внутри здания Общественный центр Ватоги]", -136952, 138432, icon_capstash2],
			["Тайник с крышками<br>[Внутри здания Особняк Риверсайд]", -70220, -70715, icon_capstash2],
			["Тайник с крышками<br>[Внутри здания Офис компании &quotЛюмбер&quot, Западная Вирджиния]", 189120, -168814, icon_capstash2],
			["Тайник с крышками<br>[Внутри локации Пещера вендиго]", 43120, 87360, icon_capstash2],
			["Тайники с крышками - 3 шт.<br>[Внутри локации Подземка Ватоги]", -141432, 152462, icon_capstash3],
			["Тайники с крышками - 3 шт.<br>[Внутри локации Точка &quotАльфа&quot]", -14505, 80945, icon_capstash3],
			["Тайники с крышками - 3 шт.<br>[Внутри локации Точка &quotБраво&quot]", 137056, 43038, icon_capstash3],
			["Тайники с крышками - 3 шт.<br>[Внутри локации Точка &quotЧарли&quot]", -118164, 1654, icon_capstash3],
			["Тайники с крышками - 2 шт.<br>[Внутри локации Стеклянная пещера]", -161792, 200480, icon_capstash3],
			["Тайники с крышками - 4 шт.<br>[Внутри здания Терминал аэропорта Моргантауна]", 102094, -23035, icon_capstash3],
			["Тайник с крышками<br>[Внутри локации Тоннель &quotБольшой излом&quot]", -149488, 112944, icon_capstash2],
			["Тайник с крышками<br>[Внутри локации Тоннель &quotБольшой излом&quot]", -120808, -44088, icon_capstash2],
			["Тайник с крышками<br>[Внутри здания Центр аграрных исследований &quotВолт-Тек&quot]", 19445, -117195, icon_capstash2],
			["Тайники с крышками - 2 шт.<br>[Внутри здания Центр &quotВест-Тек Рисерч&quot]", -60624, 88526, icon_capstash3],
			["Тайник с крышками<br>[Внутри здания Школа Ватоги]", -146584, 153175, icon_capstash2],
			["Тайник с крышками<br>[Внутри здания Школа Моргантауна]", 94128, 2135, icon_capstash2],
			["Тайник с крышками<br>[Внутри здания Штаб-квартира &quotХорнрайт индастриал&quot]", -46784, -108174, icon_capstash2],
			["Тайник с крышками<br>[Внутри здания Шугар гроув]", -15204, 118972, icon_capstash2],
			["Тайник с крышками<br>[Внутри здания Экстренные службы Ватоги]", -141039, 141012, icon_capstash2],
			["Тайники с крышками - 3 шт.<br>[Внутри здания Электростанция &quotПосейдон Энерджи&quot WV-06]", -40971, -132032, icon_capstash3]
		];
		for (let i = 0; i < capstash1.length; i++) {
			new L.Marker([capstash1[i][0],capstash1[i][1]], {icon: icon_capstash1})
				.bindPopup("Тайник с крышками")
				.bindTooltip("Тайник с крышками", {direction: 'top'})
				.addTo(capstashicons);
		}
		for (let i = 0; i < capstash2.length; i++) {
			new L.Marker([capstash2[i][1],capstash2[i][2]], {icon: capstash2[i][3]})
				.bindPopup(capstash2[i][0])
				.bindTooltip(capstash2[i][0], {direction: 'top'})
				.addTo(capstashicons);
			}
	}
	else {
		capstashicons.clearLayers();
	}
}
//Автотайник "РобКо" #001 2