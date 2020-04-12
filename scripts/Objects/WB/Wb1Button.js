let wb1icons = L.layerGroup().addTo(map);
function Wb1OnOff() {
	let chbox;
	chbox=document.getElementById('Wb1Button');
	if (chbox.checked) {
		let wb1_1 = [
			[-11837, -68397],
			[-1364, -128294],
			[-47475, -118090],
			[-103772, -121000],
			[-148681, -57839],
			[-152108, -72926],
			[-149191, -125042],
			[165325, -22112],
			[189988, -16925],
			[146829, -56157],
			[171513, -121687],
			[152395, -103369],
			[101180, -13913],
			[129781, -27339],
			[92707, -28821],
			[81842, -20943],
			[92016, -9761],
			[47675, -21028],
			[49939, -44210],
			[24901, -60490],
			[32345, -38573],
			[22984, -106987],
			[-6838, -161567],
			[-32422, -187347],
			[-120454, -188586],
			[-152069, -160999],
			[-138721, -147160],
			[-135423, -181011],
			[194799, -169170],
			[76745, -179497],
			[-97974, 200285],
			[-13739, 189226],
			[-38737, 190543],
			[-91563, 177150],
			[-1418, 158730],
			[-5365, 160680],
			[-37947, 159678],
			[-35561, 159315],
			[-109432, 157144],
			[112219, 139976],
			[-37339, 83689],
			[-65565, 36473],
			[-25282, 11851],
			[-47082, 3300],
			[-70766, 24449],
			[-148536, 113280],
			[-132314, 10515],
			[134697, 127324],
			[169660, 57405],
			[27009, 49671],
			[-83945, -28133],
			[-20650, -44372],
			[-55548, -48495],
			[-51729, -46616],
			[-41984, -38050],
			[-120367, -64727],
			[-32163, -129802],
			[-24364, -114349],
			[-34326, -114537],
			[-69316, -105073],
			[-151152, -102204],
			[168234, -18231],
			[135531, -876],
			[135531, -876],
			[204846, -92307],
			[161504, -91545],
			[103125, -21156],
			[27559, -31005],
			[18565, -1669],
			[62229, -58268],
			[37602, -42122],
			[114251, -75594],
			[67951, -87911],
			[85140, -83345],
			[93577, -84351],
			[44134, -81232],
			[47387, -66529],
			[84061, -109752],
			[58973, -101821],
			[20031, -107096],
			[-7089, -161373],
			[-95813, -135085],
			[-82934, -176568],
			[-122410, -187836],
			[-114165, -169775],
			[-132855, -154500],
			[-145783, -143147],
			[-146652, -143006],
			[78972, -154267],
			[97281, -135165],
			[73510, -175467],
			[-23330, 189501],
			[-55369, 165232],
			[-60652, 181636],
			[-83171, 166157],
			[-95531, 174395],
			[-94909, 190402],
			[-146152, 173978],
			[-158974, 185889],
			[-178014, 165224],
			[-163582, 141863],
			[11499, 183098],
			[14446, 196303],
			[70784, 137285],
			[21543, 135445],
			[625, 139913],
			[-16794, 118088],
			[-58276, 99723],
			[-8056, 45150],
			[-42423, 2531],
			[-34859, 13539],
			[-46499, 27007],
			[-180079, 73976],
			[183594, 110812],
			[132006, 120907],
			[131386, 21078],
			[93965, 103382],
			[25596, 122122],
			[112512, 79219],
			[128886, 86299],
			[28401, 92409],
			[56776, 54665],
			[60365, 58131],
			[15486, 43141],
			[21281, 44240],
			[121581, 5234],
			[100621, 25297]
		];
		let wb1_2 = [
			["Оружейный верстак - 5 шт.<br>[Внутри локации Бункер &quotУайтспринг&quot]", -64373, 4696],
			["Оружейный верстак<br>[Внутри здания Восточная региональная тюрьма]", 127398, -29105],
			["Оружейный верстак<br>[Внутри локации Горящая шахта]", -102236, -84358],
			["Оружейный верстак<br>[Внутри здания Завод &quotЯдер-колы&quot — Канова]", -53492, -162144],
			["Оружейный верстак<br>[Внутри здания Исследовательский центр &quotРобКо&quot]", -64897, 200091],
			["Оружейный верстак<br>[Внутри локации Канализация  Дайер Кемикал]", 62784, 176065],
			["Оружейный верстак - 2 шт.<br>[Внутри здания Капитолий Чарлстона]", -57828, -91983],
			["Оружейный верстак - 2 шт.<br>[Внутри здания Курорт &quotУайтспринг&quot]", -52810, 6663],
			["Оружейный верстак<br>[Внутри локации Лаборатория биомов &quotАрктос фарма&quot]", 51382, -42352],
			["Оружейный верстак - 2 шт.<br>[Внутри локации Мезонин]", 14204, 39088],
			["Оружейный верстак<br>[Внутри локации Место захоронения на горе Эммет]", -51807, 56146],
			["Оружейный верстак<br>[Внутри локации Норы]", -3956, 157951],
			["Оружейный верстак - 2 шт.<br>[Внутри здания Обсерватория АТЛАС]", 73912, 79507],
			["Оружейный верстак<br>[Внутри здания Особняк Риверсайд]", -70220, -70715],
			["Оружейный верстак<br>[Внутри локации &quotОтрыжка Бетти&quot]", -82471, -118114],
			["Оружейный верстак - 3 шт.<br>[Внутри локации Точка &quotАльфа&quot]", -14505, 80945],
			["Оружейный верстак - 4 шт.<br>[Внутри локации Точка &quotБраво&quot]", 137056, 43038],
			["Оружейный верстак - 4 шт.<br>[Внутри локации Точка &quotЧарли&quot]", -118164, 1654],
			["Оружейный верстак - 4 шт.<br>[Внутри здания Терминал аэропорта Моргантауна]", 101313, -19704],
			["Оружейный верстак<br>[Внутри локации Тоннель &quotБольшой излом&quot]", -149488, 112944],
			["Оружейный верстак<br>[Внутри локации Тоннель &quotБольшой излом&quot]", -120808, -44088],
			["Оружейный верстак - 2 шт.<br>[Внутри здания Университет &quotВолт-Тек&quot]", 82071, -8020],
			["Оружейный верстак - 2 шт.<br>[Внутри здания Форт Дефайанс]", -131600, 107048],
			["Оружейный верстак<br>[Внутри локации Шахта &quotБлэкуотер&quot]", -46520, 28168],
			["Оружейный верстак<br>[Внутри локации Шахта &quotГоули&quot]", 62688, -58605],
			["Оружейный верстак<br>[Внутри здания Штаб-квартира &quotГаррахан майнинг&quot]", -160896, -73687],
			["Оружейный верстак<br>[Внутри здания Штаб-квартира &quotХорнрайт индастриал&quot]", -46784, -108174],
			["Оружейный верстак<br>[Внутри здания Шугар гроув]", -15204, 118972],
			["Оружейный верстак<br>[Внутри здания Электростанция &quotГрозовая гора&quot]", 98395, 192590],
			["Оружейный верстак<br>[Внутри здания Электростанция &quotМононга&quot]", 74024, 39088],
			["Оружейный верстак<br>[Внутри здания Электростанция &quotПосейдон Энерджи&quot WV-06]", -40971, -132032]
		];
		for (let i = 0; i < wb1_1.length; i++) {
			new L.circleMarker([wb1_1[i][0],wb1_1[i][1]], {pane: "top", color: "#85cace"})
			.bindPopup("Оружейный верстак")
			.bindTooltip("Оружейный верстак", {direction: 'top'})
			.addTo(wb1icons);
		}
		for (let i = 0; i < wb1_2.length; i++) {
			new L.circleMarker([wb1_2[i][1],wb1_2[i][2]], {pane: "top", color: "#85cace", fillColor: "#000000", fillOpacity: "0.8"})
			.bindPopup(wb1_2[i][0])
			.bindTooltip(wb1_2[i][0], {direction: 'top'})
			.addTo(wb1icons);
		}
	}
	else {
		wb1icons.clearLayers();
	}
}