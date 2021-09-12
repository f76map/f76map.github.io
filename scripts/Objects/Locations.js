let start=1;
let allicons = new L.LayerGroup();	
map.addLayer(allicons);
let controlSearch = new L.Control.Search({
	position:'topleft',		
	layer: allicons,
	initial: false,
	zoom: -7,
	marker: false
});
let m = {};
function LocationsOnOff() {
	let chbox;
	chbox=document.getElementById('LocationsButton');
	if (start==1 || chbox.checked) {
		start=0;
		map.addControl( controlSearch );
		let loc = [
			[-132309, 9983, "Станция R&G", icon01, "Станция R&G"],
			[-150058, 149826, "Станция Ватога", icon01, "Станция Ватога"],
			[142807, -59419, "Станция Графтон", icon01, "Станция Графтон"],
			[-117328, -62553, "Станция Льюисберг", icon01, "Станция Льюисберг"],
			[100931, -28920, "Станция Моргантаун", icon01 , "Станция Моргантаун"],
			[10024, 49104, "Станция Плезент-Вэлли", icon01, "Станция Плезент-Вэлли"],
			[130565, 74517, "Станция Саннитоп", icon01, "Станция Саннитоп"],
			[12390, -60197, "Станция Саттон", icon01, "Станция Саттон"],
			[-46750, 20095, "Станция Уайтспринг", icon01, "Станция Уайтспринг"],
			[-132179, -148979, "Станция Уэлч", icon01, "Станция Уэлч"],
			[-34818, -114761, "Станция Чарлстон", icon01, "Станция Чарлстон"],
			[15102, 136789, "Станция Беркли-Спрингс", icon01, "Станция Беркли-Спрингс"],
			[-150970, 58897, "Разлом #1", icon02, "Разлом"],
			[-159284, 173252, "Разлом #2", icon02, "Разлом"],
			[182385, 153700, "Разлом #3", icon02, "Разлом"],
			[-70771, -38686, "Разлом #4", icon02, "Разлом"],
			[-162345, -120766, "Разлом #5", icon02, "Разлом"],
			[75406, 129596, "Разлом #6", icon02, "Разлом"],
			[124837, 112457, "Разлом #7", icon02, "Разлом"],
			[-66537, 152676, "Разлом #8", icon02, "Разлом"],
			[-165776, 196808, "Разлом Прайм", icon02, "Разлом &quotПрайм&quot"],
			[-64373, 4696, "Бункер Уайтспринг", icon03, "Бункер &quotУайтспринг&quot"],
			[59527, 185466, "Бункер Рейли Клэя", icon03, "Бункер Рейли Клэя"],
			[138117, 185219, "Бункер Эбби", icon03, "Бункер Эбби"],
			[102922, 165802, "Бункер Эллы Эймс", icon03, "Бункер Эллы Эймс"],
			[69079, 159043, "Бункер семьи Карсон", icon03, "Бункер семьи Карсон"],
			[127372, 154881, "Заброшенный бункер", icon03, "Заброшенный бункер"],
			[688, 193738, "Разграбленный бункер", icon03, "Разграбленный бункер"],
			[-105312, 194822, "Точка сброса C2", icon03, "Точка сброса C2"],
			[-108719, 140874, "Точка сброса G3", icon03, "Точка сброса G3"],
			[-157601, 191371, "Точка сброса V9", icon03, "Точка сброса V9"],
			[-78437, -108156, "Очиститель воздуха Хорнрайт — точка #01", icon03, "Очиститель воздуха &quotХорнрайт&quot — точка #01"],
			[-101460, -67522, "Очиститель воздуха Хорнрайт — точка #02", icon03, "Очиститель воздуха &quotХорнрайт&quot — точка #02"],
			[-133268, -121064, "Очиститель воздуха Хорнрайт — точка #03", icon03, "Очиститель воздуха &quotХорнрайт&quot — точка #03"],
			[-108616, -187097, "Очиститель воздуха Хорнрайт — точка #04", icon03, "Очиститель воздуха &quotХорнрайт&quot — точка #04"],
			[108308, -158837, "Оружейный завод Черная гора", icon04, "Оружейный завод &quotЧерная гора&quot"],
			[-33843, 13173, "Система утилизации Чисто и спокойно", icon04, "Система утилизации &quotЧисто и спокойно&quot"],
			[-51807, 56146, "Место захоронения на горе Эммет", icon04, "Место захоронения на горе Эммет"],
			[-14505, 80945, "Точка Альфа", icon05, "Точка &quotАльфа&quot"],
			[137056, 43038, "Точка Браво", icon05, "Точка &quotБраво&quot"],
			[-118164, 1654, "Точка Чарли", icon05, "Точка &quotЧарли&quot"],
			[-12781, -69223, "Лагерь Макклинток", icon05, "Лагерь Макклинток"],
			[-59043, 99475, "Бивак US-13C", icon05, "Бивак US-13C"],
			[-87098, 116037, "Передовая станция Альфа", icon05, "Передовая станция &quotАльфа&quot"],
			[-169304, 202051, "Передовая станция Дельта", icon05, "Передовая станция &quotДельта&quot"],
			[-154790, 165244, "Исследовательский лагерь Альфа", icon05, "Исследовательский лагерь &quotАльфа&quot"],
			[-55521, 166061, "База огневой поддержки Лейтенант", icon05, "База огневой поддержки &quotЛейтенант&quot"],
			[-60116, 141989, "База огневой поддержки Майор", icon05, "База огневой поддержки &quotМайор&quot"],
			[-172981, 109835, "База огневой поддержки Хэнкок", icon05, "База огневой поддержки &quotХэнкок&quot"],
			[-103587, 109347, "Шип", icon05, "&quotШип&quot"],
			[104169, 43461, "Гора Мононга", icon06, "Гора Мононга"],
			[-8935, -2448, "Горный дозор", icon73, "Горный дозор"],
			[-68315, 23578, "Наблюдательная точка", icon73, "Наблюдательная точка"],
			[-108924, -22556, "Бастион-парк", icon06, "Бастион-парк"],
			[-145410, -12690, "Живописный вид", icon06, "Живописный вид"],
			[-84608, -80141, "Вдовья гора", icon73, "Вдовья гора"],
			[-84858,-45863, "Релейная вышка DP-B5-21", icon07, "Релейная вышка DP-B5-21"],
			[-160560, 78399, "Релейная вышка EL-B1-02", icon07, "Релейная вышка EL-B1-02"],
			[37573, -119286, "Релейная вышка EM-B1-27", icon07, "Релейная вышка EM-B1-27"],
			[-72651, -132480, "Релейная вышка HG-B7-09", icon07, "Релейная вышка HG-B7-09"],
			[34602, -6315, "Релейная вышка HN-B1-12", icon07, "Релейная вышка HN-B1-12"],
			[88145, 105335, "Релейная вышка LW-B1-22", icon07, "Релейная вышка LW-B1-22"],
			[126040, -154116, "Передатчик 1AT-U03", icon07, "Передатчик 1AT-U03"],
			[-38899, 190575, "Радиопередача KMAX", icon07, "Радиопередача KMAX"],
			[89595, 152153, "Вышка в Долли Содс", icon08, "Вышка в Долли Содс"],
			[-55147, -27597, "Вышка в Уайтспринге", icon08, "Вышка в Уайтспринге"],
			[17240, -44382, "Вышка в восточной Канове", icon08, "Вышка в восточной Канове"],
			[-59848, 117252, "Вышка в восточной части гор", icon08, "Вышка в восточной части гор"],
			[130641, 152547, "Вышка в восточной части горного хребта", icon08, "Вышка в восточной части горного хребта"],
			[-35172, -150606, "Вышка в лагере Адамсов", icon08, "Вышка в лагере Адамсов"],
			[99866, -84257, "Вышка в северной Канове", icon08, "Вышка в северной Канове"],
			[145967, 107266, "Вышка в северной части гор", icon08, "Вышка в северной части гор"],
			[17350, 75960, "Вышка в центральной части гор", icon08, "Вышка в центральной части гор"],
			[-123502, 51206, "Вышка в южной части гор", icon08, "Вышка в южной части гор"],
			[47405, -104834, "Вышка во Флэтвудсе", icon08, "Вышка во Флэтвудсе"],
			[-88084, 152576, "Вышка рейнджеров", icon08, "Вышка рейнджеров"],
			[140278, -2846, "Вышка скаутов-пионеров", icon08, "Вышка скаутов-пионеров"],
			[111115, 58020, "Шахта Мононга", icon09, "Шахта &quotМононга&quot"],
			[-46520, 28168, "Шахта Блэкуотер", icon09, "Шахта &quotБлэкуотер&quot"],
			[-64741, 130050, "Шахта Кервуд", icon09, "Шахта &quotКервуд&quot"],
			[-95572, 198970, "Карьер Гнилая плесень", icon09, "Карьер &quotГнилая плесень&quot"],
			[-161792, 200480, "Стеклянная пещера", icon09, "Стеклянная пещера"],
			[-112080, 157732, "Карьер X3", icon09, "Карьер X3"],
			[-149488, 112944, "Тоннель Большой излом — восточная часть", icon09, "Тоннель &quotБольшой излом&quot — восточная часть"],
			[-120808, -44088, "Тоннель Большой излом — западная часть", icon09, "Тоннель &quotБольшой излом&quot — западная часть"],
			[-137752, -97592, "Заброшенная шахта — ствол 2", icon09, "Заброшенная шахта — ствол 2"],
			[-126054, -73909, "Заброшенная шахта — ствол 3", icon09, "Заброшенная шахта — ствол 3"],
			[-113432, -170476, "Заброшенная шахта — ствол 4", icon09, "Заброшенная шахта — ствол 4"],
			[-82517, -126232, "Заброшенная шахта — ствол 5", icon09, "Заброшенная шахта — ствол 5"],
			[-111742, -121610, "Заброшенная шахта — ствол 6", icon09, "Заброшенная шахта — ствол 6"],
			[-102236, -84358, "Горящая шахта", icon09, "Горящая шахта"],
			[-146867, -125068, "Испытательный полигон АМС", icon09, "Испытательный полигон АМС"],
			[-114672, -138273, "Заброшенная шахта Илейн", icon09, "Заброшенная шахта &quotИлейн&quot"],
			[-90804, -109776, "Брошенная шахта Киттери", icon09, "Брошенная шахта &quotКиттери&quot"],
			[-84759, -161281, "Каменоломни Брима", icon09, "Каменоломни Брима"],
			[-82471, -118114, "Отрыжка Бетти", icon09, "&quotОтрыжка Бетти&quot"],
			[-3712, -158848, "Ферма Сильвы", icon10, "Ферма Сильвы"],
			[58503, -97562, "Ферма Виксонов", icon10, "Ферма Виксонов"],
			[120973, -121045, "Ферма Якорь", icon10, "Ферма &quotЯкорь&quot"],
			[177016, -125064, "Ферма Ааронхолтов", icon10, "Ферма Ааронхолтов"],
			[161215, -91855, "Ферма Коблтонов", icon10, "Ферма Коблтонов"],
			[151041, -74552, "Ферма Беккеров", icon10, "Ферма Беккеров"],
			[172901, -42440, "Поместье Вудсов", icon10, "Поместье Вудсов"],
			[152512, -30844, "Ферма Смитов", icon10, "Ферма Смитов"],
			[174230, 8478, "Ферма Грэнинджеров", icon10, "Ферма Грэнинджеров"],
			[-7498, 43306, "Ферма Беквитов", icon10, "Ферма Беквитов"],
			[-71432, 171107, "Ферма Мака", icon10, "Ферма Мака"],
			[-101569, 122641, "Ферма с видом на закат", icon10, "Ферма с видом на закат"],
			[-162532, 153895, "Рассветное поле", icon10, "Рассветное поле"],
			[11699, 183758, "Усадьба Дилейно", icon10, "Усадьба Дилейно"],
			[-46968, -49923, "Хижина на скале", icon11, "Хижина на скале"],
			[-30863, -153315, "Лагерь Адамсов", icon11, "Лагерь Адамсов"],
			[12837, -81063, "Курорт Ущелье Нью-ривер", icon11, "Курорт &quotУщелье Нью-ривер&quot"],
			[79406, -153869, "Павильон Хризантема", icon11, "Павильон &quotХризантема&quot"],
			[53800, -127209, "Хижины у горной реки", icon11, "Хижины у горной реки"],
			[67998, -88356, "Уединенная хижина", icon11, "Уединенная хижина"],
			[113931, -74439, "Хижины Две сосны", icon73, "Хижины &quotДве сосны&quot"],
			[174278, -139934, "Хижина семьи Гроувс", icon11, "Хижина семьи Гроувс"],
			[181509, -12731, "Хижины Детского уголка", icon11, "Хижины &quotДетского уголка&quot"],
			[137867, 3599, "Лагерь скаутов-пионеров", icon11, "Лагерь скаутов-пионеров"],
			[179468, 134617, "Хижина семьи Бэйли", icon11, "Хижина семьи Бэйли"],
			[56634, 55773, "Туристический центр Сенека-Рокс", icon11, "Туристический центр Сенека-Рокс"],
			[46316, 100992, "Осенняя хижина", icon11, "Осенняя хижина"],
			[1426, 138231, "Хижина воскресных братьев", icon11, "Хижина воскресных братьев"],
			[-37820, 46489, "Домики на средней горе", icon11, "Домики на средней горе"],
			[-68951, 55723, "Хижина следователя", icon11, "Хижина следователя"],
			[-179824, 74465, "Ферма Джонсонов", icon74, "Ферма Джонсонов"],
			[-92095, -82630, "Место для засады у опоры", icon11, "Место для засады у опоры"],
			[-42304, -174756, "Льюис и сыновья — Сельскохозяйственные материалы", icon12, "Льюис и сыновья — Сельскохозяйственные материалы"],
			[84144, -109154, "Хижина самогонщика", icon12, "Хижина самогонщика"],
			[165314, -149399, "Лаборатория милой сестры", icon12, "Лаборатория милой сестры"],
			[126137, 160461, "Хижина охотника", icon12, "Хижина охотника"],
			[125109, 169980, "Ферма Саутгемптона", icon12, "Ферма Саутгемптона"],
			[-26927, 162220, "Домик на дереве", icon12, "Домик на дереве"],
			[39449, 115472, "Мясо на вынос Токсичного Ларри", icon12, "Мясо на вынос Токсичного Ларри"],
			[-18744, 59671, "Барбекью-киоск Большого Фреда", icon12, "Барбекью-киоск Большого Фреда"],
			[-100349, 7455, "Пансион на горном склоне", icon12, "Пансион на горном склоне"],
			[-83622, 165778, "Хижина контрабандиста", icon12, "Хижина контрабандиста"],
			[-164478, 122772, "Потерянный дом", icon12, "Потерянный дом"],
			[-89947, -41527, "Необыкновенные пещеры", icon13, "Необыкновенные пещеры"],
			[-138108, 88917, "Шахта Счастливая дыра", icon74, "Шахта &quotСчастливая дыра&quot"],
			[62688, -58605, "Шахта Гоули", icon13, "Шахта &quotГоули&quot"],
			[114129, 114046, "Пещера Хоупвелл", icon13, "Пещера Хоупвелл"],
			[43120, 87360, "Пещера вендиго", icon13, "Пещера вендиго"],
			[7828, 119103, "Укрытие Заточки", icon73, "Укрытие Заточки"],
			[26723, 185034, "Заброшенная свалка", icon13, "Заброшенная свалка"],
			[205548, -92839, "Прицел", icon73, "Прицел"],
			[199612, 46263, "Острие ножа", icon14, "Острие ножа"],
			[50118, 85281, "Лагерь банды в Сенеке", icon73, "Лагерь банды в Сенеке"],
			[41365, 77198, "Илистая дыра", icon14, "Илистая дыра"],
			[24888, 70571, "Северный лагерь Головорезов", icon14, "Северный лагерь Головорезов"],
			[35776, 40147, "Наблюдательный пост Череп", icon73, "Наблюдательный пост &quotЧереп&quot"],
			[25947, 47386, "Хижины в Плезент-Вэлли", icon14, "Хижины в Плезент-Вэлли"],
			[6697, 42828, "Южный лагерь Головорезов", icon73, "Южный лагерь Головорезов"],
			[-73357, -61229, "Кинотеатр кровавой Кейт", icon14, "Кинотеатр кровавой Кейт"],
			[-65499, 74686, "Потрошительский переулок", icon73, "Потрошительский переулок"],
			[-102227, 85048, "Шоу уродов", icon14, "Шоу уродов"],
			[176773, -15394, "Ядовитое высохшее озеро", icon15, "Ядовитое высохшее озеро"],
			[131548, 172319, "Болото на нагорье", icon15, "Болото на нагорье"],
			[141222, 198828, "Мелководье", icon15, "Мелководье"],
			[111085, 158149, "Лагуна заглотов", icon15, "Лагуна заглотов"],
			[38296, 145502, "Большое брюхо", icon15, "Большое брюхо"],
			[-120632, 192808, "Клюквенная поляна", icon15, "Клюквенная поляна"],
			[-156467, 51552, "Озеро Элоизы", icon15, "Озеро Элоизы"],
			[-121221, 35190, "Озеро Спрус-Ноб", icon15, "Озеро Спрус-Ноб"],
			[-129198, 26547, "Каналы Спрус-Ноб", icon15, "Каналы Спрус-Ноб"],
			[-79246, 47134, "Озера-близнецы", icon15, "Озера-близнецы"],
			[-64480, 38767, "Пруд Соломона", icon15, "Пруд Соломона"],
			[131147, -173625, "Остров когтя смерти", icon16, "Остров когтя смерти"],
			[-75948, 161083, "Роща росянок у ручья", icon16, "Роща росянок у ручья"],
			[-119552, 172189, "Скрытая роща росянок", icon16, "Скрытая роща росянок"],
			[-172163, 184257, "Разросшаяся роща росянок", icon16, "Разросшаяся роща росянок"],
			[-172568, 123314, "Скудная роща росянок", icon16, "Скудная роща росянок"],
			[-113384, 41424, "Лагерь Спрус-Ноб", icon16, "Лагерь &quotСпрус-Ноб&quot"],
			[86001, 155697, "&quotДолли Содс&quot — Пустоши", icon16, "&quotДолли Содс&quot — Пустоши"],
			[-3179, -129767, "Сады Оруэллов", icon16, "Сады Оруэллов"],
			[11657, 145498, "Электроподстанция Грозовая гора TM-01", icon17, "Электроподстанция &quotГрозовая гора&quot TM-01"],
			[-120232, 143836, "Электроподстанция Грозовая гора TM-02", icon17, "Электроподстанция &quotГрозовая гора&quot TM-02"],
			[139118, 72331, "Электроподстанция Мононга MZ-01", icon17, "Электроподстанция &quotМононга&quot MZ-01"],
			[-54635, 21025, "Электроподстанция Мононга MZ-02", icon17, "Электроподстанция &quotМононга&quot MZ-02"],
			[-126107, -44230, "Электроподстанция Мононга MZ-03", icon17, "Электроподстанция &quotМононга&quot MZ-03"],
			[20095, -143223, "Электроподстанция Посейдон PX-01", icon17, "Электроподстанция &quotПосейдон&quot PX-01"],
			[-513, -36059, "Электроподстанция Посейдон PX-02", icon17, "Электроподстанция &quotПосейдон&quot PX-02"],
			[137795, 32638, "Электроподстанция Посейдон PX-03", icon17, "Электроподстанция &quotПосейдон&quot PX-03"],
			[98395, 192590, "Электростанция Грозовая гора", icon18, "Электростанция &quotГрозовая гора&quot"],
			[74024, 39088, "Электростанция Мононга", icon18, "Электростанция &quotМононга&quot"],
			[-40971, -132032, "Электростанция Посейдон Энерджи WV-06", icon18, "Электростанция &quotПосейдон Энерджи&quot WV-06"],
			[-123048, -188170, "Бекли", icon19, "Бекли"],
			[-111602, -59969, "Льюисберг", icon19, "Льюисберг"],
			[74855, -176637, "Пойнт-Плезант", icon19, "Пойнт-Плезант"],
			[20755, -105198, "Флэтвудс", icon19, "Флэтвудс"],
			[24458, -60225, "Саттон", icon19, "Саттон"],
			[-17939, -44470, "Саммерсвилл", icon19, "Саммерсвилл"],
			[33151, -36213, "Гельвеция", icon19, "Гельвеция"],
			[149376, -52128, "Графтон", icon19, "Графтон"],
			[167985, -24616, "Кларксберг", icon19, "Кларксберг"],
			[84520, 56136, "Мононга", icon19, "Мононга"],
			[27640, 128446, "Беркли-Спрингс", icon19, "Беркли-Спрингс"],
			[3190, 161322, "Харперс-Ферри", icon19, "Харперс-Ферри"],
			[-90680, 65688, "Хантерсвилл", icon19, "Хантерсвилл"],
			[-38561, -58421, "Нью-Гэд", icon20, "Нью-Гэд"],
			[-133755, -152527, "Уэлч", icon20, "Уэлч"],
			[71334, 136903, "Мосстаун", icon20, "Мосстаун"],
			[45172, 162312, "Деревня домиков на дереве", icon20, "Деревня домиков на дереве"],
			[14194, 191891, "Танагра-таун", icon20, "Танагра-таун"],
			[-52198, -103243, "Чарлстон", icon21, "Чарлстон"],
			[88302,-2080, "Моргантаун", icon21, "Моргантаун"],
			[-138880, 145432, "Ватога", icon21, "Ватога"],
			[53120, 66176, "Сенека-Рокс", icon22, "Сенека-Рокс"],
			[-88648, 80368, "Хребет дьявола", icon22, "Хребет дьявола"],
			[-46210, -104367, "Чарлстон геральд", icon23, "Чарлстон геральд"],
			[-46784, -108174, "Штаб-квартира Хорнрайт индастриал", icon23, "Штаб-квартира &quotХорнрайт индастриал&quot"],
			[-139432, -79989, "Недостроенный особняк", icon23, "Недостроенный особняк"],
			[-152192, -73536, "Поместье Гарраханов", icon23, "Поместье Гарраханов"],
			[-149056, -56896, "Поместье Хорнрайтов", icon23, "Поместье Хорнрайтов"],
			[-60624, 88526, "Центр Вест-Тек Рисерч", icon23, "Центр &quotВест-Тек Рисерч&quot"],
			[-136952, 138432, "Общественный центр Ватоги", icon23, "Общественный центр Ватоги"],
			[-141535, 137471, "Транзитный центр Ватоги", icon23, "Транзитный центр Ватоги"],
			[-145456, 139800, "Жилой комплекс Ватоги", icon23, "Жилой комплекс Ватоги"],
			[-141320, 143840, "Муниципальный центр Ватоги", icon23, "Муниципальный центр Ватоги"],
			[-139096, 148632, "Штаб-квартира АМС", icon23, "Штаб-квартира АМС"],
			[-137312, 152607, "Торговый центр Ватоги", icon23, "Торговый центр Ватоги"],
			[-146584, 153175, "Школа Ватоги", icon23, "Школа Ватоги"],
			[-64897, 200091, "Исследовательский центр РобКо", icon23, "Исследовательский центр &quotРобКо&quot"],
			[-55735, -114894, "Медцентр AVR", icon24, "Медцентр AVR"],
			[-141039, 141012, "Экстренные службы Ватоги", icon24, "Экстренные службы Ватоги"],
			[28681, -101049, "Домик Зеленая страна", icon25, "Домик &quotЗеленая страна&quot"],
			[-68441, -105302, "Пожарная часть Чарлстона", icon25, "Пожарная часть Чарлстона"],
			[-58385, 7426, "Уайтспринг — служебный вход", icon25, "Уайтспринг — служебный вход"],
			[48319, -22062, "Шахтерское оборудование Грега", icon25, "Шахтерское оборудование Грега"],
			[94128, 2135, "Школа Моргантауна", icon25, "Школа Моргантауна"],
			[166270, -17389, "Стрелковый клуб Кларксберга", icon25, "Стрелковый клуб Кларксберга"],
			[-90368, 149722, "Районное отделение рейнджеров", icon25, "Районное отделение рейнджеров"],
			[76623, -6504, "Тату-салон Большая Эл", icon25, "Тату-салон &quotБольшая Эл&quot"],
			[-54542, -47673, "Летняя вилла Хорнрайтов", icon26, "Летняя вилла Хорнрайтов"],
			[-56961,-59783, "Запретная зона", icon73, "Запретная зона"],
			[-61977, -55628, "Дом Торренса", icon26, "Дом Торренса"],
			[-70220, -70715, "Особняк Риверсайд", icon26, "Особняк Риверсайд"],
			[182999, -92174, "Особняк семьи Клэнси", icon74, "Особняк семьи Клэнси"],
			[99599, 26292, "Особняк Инграм", icon74, "Особняк Инграм"],
			[190127, -17688, "Корпоративное жилье Уиллард", icon27, "Корпоративное жилье &quotУиллард&quot"],
			[99391, 91943, "Сброс боеприпасов", icon73, "Сброс боеприпасов"],
			[20259, 90268, "Винокурня Сэнди", icon27, "Винокурня Сэнди"],
			[-168413, -23510, "Строительная фирма Дент и сыновья", icon27, "Строительная фирма &quotДент и сыновья&quot"],
			[-115047, -98042, "Рабочий лагерь Роллинс", icon73, "Рабочий лагерь &quotРоллинс&quot"],
			[-136781, -181956, "Тупик Николсона", icon27, "Тупик Николсона"],
			[22921, -149543, "Хиллфолк хотдогз", icon27, "Хиллфолк хотдогз"],
			[111421, -55612, "Авторемонтная мастерская братьев Уилсонов", icon28, "Авторемонтная мастерская братьев Уилсонов"],
			[89388, 3190, "Уголок братства", icon28, "Уголок братства"],
			[55943, -67277, "Слокам Джо", icon28, "Слокам Джо"],
			[-120430, -189102, "Сэндвичи Сэла", icon28, "Сэндвичи Сэла"],
			[-74719, -113348, "Ржавая кирка", icon78, "&quotРжавая кирка&quot"],
			[-60406, 182221, "Стейкхаус Генерала", icon28, "Стейкхаус Генерала"],
			[27701, 172104, "Мотель Южная красавица", icon28, "Мотель &quotЮжная красавица&quot"],
			[107323, 173540, "Деревянный дом-образец", icon28, "Деревянный дом-образец"],
			[152446, 161105, "Дом страхов Фредди", icon28, "Дом страхов Фредди"],
			[182860, 2645, "Охотничий домик Черный медведь", icon28, "Охотничий домик &quotЧерный медведь&quot"],
			[191449, -167683, "Компания Люмбер, Западная Вирджиния", icon29, "Компания &quotЛюмбер&quot, Западная Вирджиния"],
			[69616, -104499, "Лесопилка Гилмен", icon29, "Лесопилка &quotГилмен&quot"],
			[84461, -15851, "Переработка пищевых продуктов Мама Дольче", icon29, "Переработка пищевых продуктов &quotМама Дольче&quot"],
			[132207, 18474, "Графтон стил", icon29, "Графтон стил"],
			[-61373, -79297, "Плотина Саммерсвилла", icon29, "Плотина Саммерсвилла"],
			[-146882, -142953, "Заброшенная шахта — ствол 1", icon29, "Заброшенная шахта — ствол 1"],
			[-153297, -161901, "Хорнрайт — точка для испытаний #02", icon29, "&quotХорнрайт&quot — точка для испытаний #02"],
			[-149838, -100634, "Хорнрайт — точка для испытаний #03", icon29, "&quotХорнрайт&quot — точка для испытаний #03"],
			[-94510, -163087, "Хорнрайт — точка для испытаний #04", icon29, "&quotХорнрайт&quot — точка для испытаний #04"],
			[69694, 202366, "Качественные медикаменты Брексона", icon29, "Качественные медикаменты Брексона"],
			[-167811, -113544, "Страйкер Роу", icon30, "Страйкер Роу"],
			[44228, -80761, "Лагерь Смотрительницы", icon30, "Лагерь Смотрительницы"],
			[51464, -149650, "Охотничий перевал", icon73, "Охотничий перевал"],
			[92363, 114951, "Лесозаготовочный лагерь Сильви и сыновей", icon30, "Лесозаготовочный лагерь Сильви и сыновей"],
			[-77693, -179636, "Кэмден-парк", icon31, "Кэмден-парк"],
			[-120832, -65792, "Озеро Рейнольдс", icon31, "Озеро Рейнольдс"],
			[142781, -147238, "Ярмарка округа Тайлер", icon31, "Ярмарка округа Тайлер"],
			[193976, -29820, "Аквапарк Уэйви Уиллард", icon31, "Аквапарк &quotУэйви Уиллард&quot"],
			[-131743, -112108, "Заправочная станция Красная ракета", icon32, "Заправочная станция &quotКрасная ракета&quot"],
			[-17717, 163348, "Зона отдыха Большой Би", icon32, "Зона отдыха &quotБольшой Би&quot"],
			[-121599, -132583, "Депо Маунт Блэр", icon33, "Депо &quotМаунт Блэр&quot"],
			[-21412, 13435, "Новое центральное депо Аппалачии", icon33, "Новое центральное депо Аппалачии"],
			[-9693, 22412, "Региональный манифест 98 NAR", icon33, "Региональный манифест 98 NAR"],
			[91603, -30924, "Депо Моргантауна", icon33, "Депо Моргантауна"],
			[-143005, 175687, "Затопленное депо", icon33, "Затопленное депо"],
			[-57828, -91983, "Капитолий Чарлстона", icon34, "Капитолий Чарлстона"],
			[-47773, -116533, "Депо Чарлстона", icon35, "Депо Чарлстона"],
			[-153675, 129113, "Ремонтные мастерские NAR", icon35, "Ремонтные мастерские NAR"],
			[-160896, -73687, "Штаб-квартира Гаррахан майнинг", icon36, "Штаб-квартира &quotГаррахан майнинг&quot"],
			[95313, 102917, "Комплекс Сыны Дейна", icon36, "Комплекс &quotСыны Дейна&quot"],
			[-12605, 196567, "Галерея в долине", icon36, "Галерея в долине"],
			[-39098, 160282, "Кэмп-Венчур", icon36, "Кэмп-Венчур"],
			[-37538, 88243, "Национальная автономная антенна", icon37, "Национальная автономная антенна"],
			[-43120, 112631, "Национальный исследовательский центр радиоастрономии", icon37, "Национальный исследовательский центр радиоастрономии"],
			[-15204, 118972, "Шугар гроув", icon37, "Шугар гроув"],
			[-102053, -55554, "Кладбище Плезент-Хиллс", icon38, "Кладбище Плезент-Хиллс"],
			[-24064, -176697, "Кладбище округа Канова", icon74, "Кладбище округа Канова"],
			[171175, 38981, "Военное кладбище Филипп", icon38, "Военное кладбище Филипп"],
			[-51561, -54753, "Здание Сахарный клен", icon39, "Здание &quotСахарный клен&quot"],
			[-82873, -28867, "Памятник шахтерам", icon40, "Памятник шахтерам"],
			[149671, 31672, "Памятник полковнику Келли", icon40, "Памятник полковнику Келли"],
			[-44187, -70892, "Доки Саммерсвилла", icon41, "Доки Саммерсвилла"],
			[-32301, -187831, "Приключения на реке Огайо", icon75, "Приключения на реке Огайо"],
			[-53492, -162144, "Завод Ядер-колы — Канова", icon42, "Завод &quotЯдер-колы&quot — Канова"],
			[-14415, -124481, "Кафе-мороженое Пятнистая корова", icon43, "Кафе-мороженое &quotПятнистая корова&quot"],
			[152995, -103993, "Мягкое мороженое леди Дженет", icon43, "Мягкое мороженое леди Дженет"],
			[-29819, -131984, "Гигантский чайник", icon44, "Гигантский чайник"],
			[13638, -91369, "Мост через ущелье Нью-ривер — восток", icon45, "Мост через ущелье Нью-ривер — восток"],
			[-10693, -123987, "Мост через ущелье Нью-ривер — запад", icon45, "Мост через ущелье Нью-ривер — запад"],
			[183718, -67099, "Хемлок Хоулс", icon46, "&quotХемлок Хоулс&quot"],
			[-51488, -12672, "Гольф-клуб Уайтспринга", icon46, "Гольф-клуб Уайтспринга"],
			[58039, 10567, "Болтон-Гринс", icon46, "Болтон-Гринс"],
			[193668, 60919, "Форт Прикетта", icon47, "Форт Прикетта"],
			[75399, -75689, "Маяк Лэндвью", icon48, "Маяк &quotЛэндвью&quot"],
			[198624, 26680, "Кратер", icon75, "Кратер"],
			[164802, 57571, "Дворец Извилистого Пути", icon50, "Дворец Извилистого Пути"],
			[133518, 126173, "Тыквенный дом", icon51, "Тыквенный дом"],
			[127398, -29105, "Восточная региональная тюрьма", icon52, "Восточная региональная тюрьма"],
			[-131600, 107048, "Форт Дефайанс", icon52, "Форт Дефайанс"],
			[101313, -19704, "Аэропорт Моргантауна", icon53, "Аэропорт Моргантауна"],
			[31098, -20788, "Остатки самолета Хорайзон", icon53, "Остатки самолета &quotХорайзон&quot"],
			[58410, 147706, "Разбившийся самолет", icon53, "Разбившийся самолет"],
			[88201, -21322, "Портовый паб", icon54, "Портовый паб"],
			[82071, -8020, "Университет Волт-Тек", icon55, "Университет &quotВолт-Тек&quot"],
			[118972, 7850, "Графтонская плотина", icon56, "Графтонская плотина"],
			[80130, 182753, "Плотина Расселины", icon56, "Плотина Расселины"],
			[144048, 98128, "Домик горнолыжного курорта Саннитоп", icon57, "Домик горнолыжного курорта &quotСаннитоп&quot"],
			[131252, 85612, "Горнолыжный курорт Саннитоп", icon57, "Горнолыжный курорт &quotСаннитоп&quot"],
			[15757, 47368, "Горнолыжный курорт Плезент-Вэлли", icon57, "Горнолыжный курорт Плезент-Вэлли"],
			[18367, -949, "Зимние виды спорта Уайт Паудер", icon57, "Зимние виды спорта &quotУайт Паудер&quot"],
			[73912, 79507, "Форт-Атлас", icon80, "Форт-Атлас"],
			[6401, -32915, "Водоочистная станция Тигарт", icon59, "Водоочистная станция &quotТигарт&quot"],
			[-121061, 2637, "R&G – Услуги по обработке", icon59, "R&G – Услуги по обработке"],
			[62784, 176065, "Дайер Кемикал", icon59, "Дайер Кемикал"],
			[-128863, 119940, "Древности Аппалачии", icon60, "Древности Аппалачии"],
			[14204, 39088, "Вершина мира", icon61, "Вершина мира"],
			[43250, 175895, "Церковь в Хейвене", icon62, "Церковь в Хейвене"],
			[-94971, 190422, "Опора V-13", icon63, "Опора V-13"],
			[-128044, 84839, "Лифт монорельса", icon63, "Лифт монорельса"],
			[-52810, 6663, "Курорт Уайтспринг", icon64, "Курорт &quotУайтспринг&quot"],
			[1920, 155171, "Северная часть Нор", icon65, "Северная часть Нор"],
			[-3956, 157951, "Норы", icon65, "Норы"],
			[-146558, -96290, "Убежище 63", icon66, "Убежище 63"],
			[94019, -103762, "Убежище 76", icon67, "Убежище 76"],
			[137186, 145156, "Убежище 94", icon68, "Убежище 94"],
			[-160240, 31361, "Убежище 96", icon69, "Убежище 96"],
			[183736, -59552, "Техобслуживание Хемлок Хоулс", icon70, "Техобслуживание &quotХемлок Хоулс&quot",[["Пища [3]","Вода [3]"],["Кристалл [1]","Золото [1]"],["Кислота [3]",""]]],
			[138173, -157335, "Гоночный трек в округе Тайлер", icon70, "Гоночный трек в округе Тайлер",[["Пища [1]","Вода [3]"],["Удобрение [1]","Хлам [1]"],["Серебро [3]","Алюминий [1]"],["Сталь [1]",""]]],
			[126611, 17764, "Склад Графтон стил", icon70, "Склад &quotГрафтон стил&quot",[["Пища [2]","Вода [2]"],["Свинец [1]","Медь [1]"],["Сталь [4]","Масло [1]"]]],
			[91589, -55634, "Свалка в ущелье", icon70, "Свалка в ущелье",[["Пища [5]","Вода [3]"],["Хлам [1]","Титановая [1]"],["Бетон [1]","Дерево [1]"]]],
			[28355, -138578, "Ферма Солнечные луга", icon70, "Ферма &quotСолнечные луга&quot",[["Пища [10]","Вода [3]"],["Упак. пища [1]","Удобрение [3]"],["Хлам [1]","Алюминий [1]"],["Бетон [1]",""]]],
			[73761, 44675, "Двор электростанции Мононга", icon70, "Двор электростанции &quotМононга&quot",[["Пища [8]","Вода [9]"],["Ядерный блок [1]",""]]],
			[-11953, -168635, "Ферма Биллингсов", icon70, "Ферма Биллингсов",[["Пища [5]","Вода [3]"],["Удобрение [1]","Кристалл [1]"],["Золото [1]","Медь [1]"]]],
			[-41712, -124848, "Двор электростанции Посейдон Энерджи", icon70, "Двор электростанции &quotПосейдон Энерджи&quot",[["Пища [9]","Вода [8]"],["Ядерный блок [1]","Свинец [1]"],["Алюминий [1]","Ядерное [1]"],["Бетон [1]",""]]],
			[-61720, -126835, "Свалка Чарлстона", icon70, "Свалка Чарлстона",[["Пища [6]","Вода [8]"],["Хлам [3]","Алюминий [1]"],["Медь [1]","Сталь [1]"]]],
			[-37757, -88012, "Аэропорт Уэйда", icon70, "Аэропорт Уэйда",[["Пища [5]","Вода [5]"],["Серебро [1]","Медь [1]"],["Масло [3]",""]]],
			[-25872, -61107, "Домики у озера", icon70, "Домики у озера",[["Пища [6]","Вода [6]"],["Серебро [1]","Кристалл [1]"],["Свинец [1]","Дерево [1]"]]],
			[-127912, -190632, "Выставка Шахта Бекли", icon70, "Выставка &quotШахта Бекли&quot",[["Пища [6]","Вода [8]"],["Кристалл [1]","Золото [1]"],["Масло [3]",""]]],
			[-101848, -130864, "Маунт Блэр", icon70, "&quotМаунт Блэр&quot",[["Пища [9]","Вода [8]"],["Руда [1]",""]]],
			[-154826, -509, "Федеральное поле для захоронений HZ-21", icon70, "Федеральное поле для захоронений HZ-21",[["Пища [9]","Вода [4]"],["Кислота [1]","Ядерное [3]"],["Масло [1]",""]]],
			[-102945,37448, "Опора", icon77, "Опора"],
			[-92985, 181757, "Брошенный Богтаун", icon70, "Брошенный Богтаун",[["Пища [7]","Вода [3]"],["Серебро [1]","Золото [1]"],["Кислота [1]","Бетон [3]"],["Масло [1]",""]]],
			[-24214, 187357, "Ферма Дэбни", icon70, "Ферма Дэбни",[["Пища [6]","Вода [8]"],["Удобрение [1]","Хлам [1]"],["Медь [3]","Бетон [1]"],["Дерево [1]",""]]],
			[24309, 122161, "Западный Беркли-Спрингс", icon70, "Западный Беркли-Спрингс",[["Пища [1]","Вода [10]"],["Кристалл [1]","Свинец [1]"],["Алюминий [1]",""]]],
			[76716, 155136, "Лагерь Долли Содс", icon70, "Лагерь &quotДолли Содс&quot",[["Пища [9]","Вода [7]"],["Свинец [1]","Золото [1]"],["Дерево [3]",""]]],
			[94525, 189452, "Двор электростанции Громовая гора", icon70, "Двор электростанции &quotГромовая гора&quot",[["Пища [7]","Вода [9]"],["Ядерный блок [1]","Кристалл [1]"],["Ядерное [1]","Сталь [1]"],["Дерево [1]",""]]],
			[148799, 137392, "Мегастоянка Красная ракета", icon70, "Мегастоянка &quotКрасная ракета&quot",[["Пища [5]","Вода [8]"],["Хлам [1]","Алюминий [3]"],["Ядерное [1]","Сталь [1]"]]],
			[181849, 111171, "Перестроенный завод боеприпасов", icon70, "Перестроенный завод боеприпасов",[["Пища [7]","Вода [8]"],["Хлам [1]","Боеприпасы [1]"],["Серебро [1]","Свинец [1]"],["Алюминий [1]","Масло [1]"]]],
			[19445, -117195, "Центр аграрных исследований Волт-Тек", icon71, "Центр аграрных исследований &quotВолт-Тек&quot"],
			[51382, -42352, "Арктос фарма", icon72, "&quotАрктос фарма&quot"],
			[25824,-55264, "Дом Смотрительницы", icon30, "Дом Смотрительницы"],
			[47700,-81238, "Уэйуорд", icon19, "Уэйуорд"],
			[71024,-47690, "Выход из шахты Гоули", icon13, "Выход из шахты &quotГоули&quot"],
			[-102150,140232, "Багровый прииск", icon73, "Багровый прииск"],
			[-139906,-105586, "Тина", icon73, "&quotТина&quot"],
			[-38130,-34473, "Яма", icon13, "Яма"],
			[199312,-6712, "Дозорный пункт Кратера", icon09, "Дозорный пункт Кратера"],
			[-145841,66048, "Награда", icon73, "Награда"],
			[-41403,-38219, "Хлев", icon73, "Хлев"],
			[-32008,150845, "Дом мотыльков", icon74, "Дом мотыльков"],
			[-36612,199894, "Дар Блейка", icon74, "Дар Блейка"],
			[200808,143425, "Таинственная пещера", icon13, "Таинственная пещера"],
			[186772,145375, "Убежище 79", icon76, "Убежище 79"],
			[-141432,152462, "Подземка Ватоги", icon65, "Подземка Ватоги"],
			[176371,80252, "Святые дары", icon74, "Святые дары"],
			[158383,21934, "Шахта Карлтона", icon13, "Шахта Карлтона"],
			[33912,130069, "Кровавый Фрэнк", icon73, "&quotКровавый Фрэнк&quot"],
			[160207,-83329, "Самодельное Убежище", icon13, "Самодельное Убежище"],
			[202332,-125273, "Убежище 51", icon79, "Убежище 51"],
			[100496, 70720, "Железный свод", icon14, "Железный свод"],
			[2929,183554, "Туннель Харперс-Ферри", icon33, "Туннель Харперс-Ферри"]
		];
		for (n = 0; n < loc.length; n++) {
			let loc_t = '';
			if (loc[n][5]){
				for (let r = 0; r < loc[n][5].length; r++){loc_t = loc_t +'<tr><td>'+loc[n][5][r][0]+'</td><td width="10px"></td><td>'+loc[n][5][r][1]+'</td></tr>'};
				loc_t = loc[n][4] + "<hr><table style='margin: auto; font-size: 9pt; text-align: left; white-space: nowrap; width: max-content;'>"+loc_t+"</table>";
			}
			else {loc_t = loc[n][4];};
			m[n+1] = new L.marker([loc[n][0], loc[n][1]], {s_title: loc[n][2], icon: loc[n][3]}).addTo(allicons).bindPopup("<div class='b_url b_url2' data-clipboard-text='https://f76map.ru#"+[n+1]+"'><input class='b_url_i' type='image' src='css/images/url.png' title='Скопировать ссылку'></div>"+loc_t).bindTooltip(loc_t, {direction: 'top'});
		};
	}
	else {
		map.removeControl( controlSearch );
		allicons.clearLayers();
	}
}
controlSearch.on('search:locationfound', function(event) {
	event.layer.openPopup();
});