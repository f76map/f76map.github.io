let wb3icons = L.layerGroup().addTo(map);
function Wb3OnOff() {
	let chbox;
	chbox=document.getElementById('Wb3Button');
	if (chbox.checked) {
		let wb3_1 = [
			[-24551, -58992],
			[-52231, -46475],
			[-120295, -46177],
			[-45723, -72600],
			[-93129, -83532],
			[-99930, -67002],
			[-1307, -129174],
			[-15722, -125143],
			[-10807, -123513],
			[-111266, -112390],
			[-148500, -57821],
			[-147825, -56911],
			[-152031, -71728],
			[-148460, -125838],
			[187870, -16209],
			[140954, -347],
			[142366, -59852],
			[151460, -43868],
			[197039, -91013],
			[182829, -93358],
			[183347, -77244],
			[160825, -91820],
			[130004, -27892],
			[101311, -14175],
			[90069, -10619],
			[90134, -9310],
			[9124, -30580],
			[50634, -44232],
			[27026, -62709],
			[29403, -58721],
			[55955, -65930],
			[69647, -103922],
			[61031, -99318],
			[10014, -107371],
			[22725, -108196],
			[-1062, -162867],
			[-81613, -160972],
			[-95976, -135056],
			[-124011, -132933],
			[-5329, -170368],
			[-113826, -171025],
			[-139198, -147032],
			[166363, -149022],
			[142584, -151455],
			[131528, -132036],
			[191988, -169449],
			[126020, -154077],
			[74632, -177137],
			[78840, -173229],
			[-95554, 184139],
			[-4078, 162312],
			[-42747, 137466],
			[-35491, 159014],
			[-150100, 150817],
			[189057, 230126],
			[152812, 140453],
			[68191, 202022],
			[101126, 192410],
			[107229, 162064],
			[71935, 138317],
			[84842, 151849],
			[45018, 161859],
			[14868, 136474],
			[349, 139642],
			[-64394, 41843],
			[-103704, 38816],
			[-46470, 2707],
			[-42547, 2379],
			[-46649, 19858],
			[-46224, 28809],
			[-98770, 7915],
			[-152356, 761],
			[200001, 46038],
			[169236, 59097],
			[160532, 58808],
			[190200, 31179],
			[132489, 20960],
			[97375, 103733],
			[24792, 69427],
			[53969, 55927],
			[122245, 4074],
			[18556, 29],
			[-101416, -130232]
		];
		let wb3_2 = [
			["Ремонтный верстак<br>[Внутри локации Бункер Рейли Клэя]", 59527, 185466],
			["Ремонтный верстак - 5 шт.<br>[Внутри локации Бункер &quotУайтспринг&quot]", -64373, 4696],
			["Ремонтный верстак<br>[Внутри здания Ван Лоу, таксидермист]", -112937, -62704],
			["Ремонтный верстак<br>[Внутри здания Восточная региональная тюрьма]", 127398, -29105],
			["Ремонтный верстак<br>[Внутри локации Горящая шахта]", -102236, -84358],
			["Ремонтный верстак<br>[Внутри здания Завод &quotЯдер-колы&quot — Канова]", -53492, -162144],
			["Ремонтный верстак - 4 шт.<br>[Внутри здания Курорт &quotУайтспринг&quot]", -52810, 6663],
			["Ремонтный верстак<br>[Внутри локации Лаборатория биомов &quotАрктос фарма&quot]", 51382, -42352],
			["Ремонтный верстак<br>[Внутри здания Ломбард Графтона]", 146626, -51271],
			["Ремонтный верстак<br>[Внутри локации Мезонин]", 14204, 39088],
			["Ремонтный верстак - 2 шт.<br>[Внутри локации Норы]", -3956, 157951],
			["Ремонтный верстак<br>[Внутри здания Особняк Риверсайд]", -70220, -70715],
			["Ремонтный верстак<br>[Внутри локации &quotОтрыжка Бетти&quot]", -82471, -118114],
			["Ремонтный верстак<br>[Внутри локации Точка &quotАльфа&quot]", -14505, 80945],
			["Ремонтный верстак - 2 шт.<br>[Внутри локации Точка &quotБраво&quot]", 137056, 43038],
			["Ремонтный верстак - 2 шт.<br>[Внутри локации Точка &quotЧарли&quot]", -118164, 1654],
			["Ремонтный верстак - 2 шт.<br>[Внутри здания Терминал аэропорта Моргантауна]", 101313, -19704],
			["Ремонтный верстак<br>[Внутри здания Форт Дефайанс]", -131600, 107048],
			["Ремонтный верстак<br>[Внутри здания Центр &quotВест-Тек Рисерч&quot]", -60624, 88526],
			["Ремонтный верстак<br>[Внутри здания Штаб-квартира &quotГаррахан майнинг&quot]", -160896, -73687],
			["Ремонтный верстак<br>[Внутри здания Штаб-квартира &quotХорнрайт индастриал&quot]", -46784, -108174],
			["Ремонтный верстак<br>[Внутри здания Электростанция &quotМононга&quot]", 74024, 39088],
			["Ремонтный верстак - 2 шт.<br>[Внутри здания Электростанция &quotПосейдон Энерджи&quot WV-06]", -40971, -132032]
		];
		for (let i = 0; i < wb3_1.length; i++) {
			new L.circleMarker([wb3_1[i][0],wb3_1[i][1]], {pane: "top", color: "#7fa235"})
			.bindPopup("Ремонтный верстак")
			.bindTooltip("Ремонтный верстак", {direction: 'top'})
			.addTo(wb3icons);
		}
		for (let i = 0; i < wb3_2.length; i++) {
			new L.circleMarker([wb3_2[i][1],wb3_2[i][2]], {pane: "top", color: "#7fa235", fillColor: "#000000", fillOpacity: "0.8"})
			.bindPopup(wb3_2[i][0])
			.bindTooltip(wb3_2[i][0], {direction: 'top'})
			.addTo(wb3icons);
		}
	}
	else {
		wb3icons.clearLayers();
	}
}