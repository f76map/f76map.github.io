let aluminiyicons = L.layerGroup().addTo(map);
function AluminiyOnOff() {
	let chbox;
	chbox=document.getElementById('AluminiyButton');
	if (chbox.checked) {
		let aluminiy = [
			[-92704, -2910],[-87933, -34164],[-62198, -127397],[-45375, -126394],[-73530, -125879],[-83785, -103376],[-116079, -121651],[-169411, -42593],[-156506, -95505],[-159360, -152355],[137488, -156909],[31544, -140672],[-74557, 135245],[-67060, 145513],[-132667, 174101],[-178712, 179717],[-169356, 176621],[170472, 199374],[193835, 150128],[146993, 135288],[152498, 135482],[150542, 142202],[71193, 172117],[51315, 160631],[-127563, 125194],[-80513, 19509],[197259, 124930],[178450, 109260],[142485, 60358],[119431, 130668],[22088, 122296],[30318, 62441]
		];
		for (let i = 0; i < aluminiy.length; i++) {
			new L.Marker([aluminiy[i][0],aluminiy[i][1]], {icon: icon_aluminiy})
				.bindPopup("Месторождение алюминия").bindTooltip("Месторождение алюминия", {direction: 'top'}).addTo(aluminiyicons);
		}
	}
	else {
		aluminiyicons.clearLayers();
	}
}

let betonicons = L.layerGroup().addTo(map);
function BetonOnOff() {
	let chbox;
	chbox=document.getElementById('BetonButton');
	if (chbox.checked) {
		let beton = [
			[-120243, -20949],[-7208, -43494],[-46269, -57050],[-2250, -85039],[-56760, -74947],[-35862, -67383],[-75277, -74885],[-40416, -125694],[-131831, -27704],[132889, -92812],[145223, -78177],[174130, -109508],[5704, -21608],[110357, -35328],[82762, -59685],[90287, -55878],[81684, -50254],[41535, -56381],[42314, -86467],[48698, -72379],[3963, -74594],[61165, -117456],[43415, -111464],[-22863, -144219],[184834, -145471],[161608, -163908],[29318, -137219],[-26435, 187481],[-95107, 184009],[-94130, 184422],[-92824, 186443],[-127504, 193372],[-16923, 156641],[-125573, 141212],[-136863, 169148],[132469, 191761],[184543, 139354],[90818, 169287],[-37696, 120476],[-115364, 63433],[151035, 68041],[83790, 92104],[94320, 40789],[67402, 58469],[3446, 56271]
		];
		for (let i = 0; i < beton.length; i++) {
			new L.Marker([beton[i][0],beton[i][1]], {icon: icon_beton})
				.bindPopup("Гравийный карьер (Бетон)").bindTooltip("Гравийный карьер (Бетон)", {direction: 'top'}).addTo(betonicons);
		}
	}
	else {
		betonicons.clearLayers();
	}
}

let chorniytitanicons = L.layerGroup().addTo(map);
function ChorniyTitanOnOff() {
	let chbox;
	chbox=document.getElementById('ChorniyTitanButton');
	if (chbox.checked) {
		let titan = [
			[-99391, -73043],[-116181, -108327],[-154674, -126053],[162537, -76121],[90434, -58005],[-73160, -140576],[-129753, -169855],[-90733, 136015],[8641, 179010],[104331, 163248],[-99050, 130377]
		];
		for (let i = 0; i < titan.length; i++) {
			new L.Marker([titan[i][0],titan[i][1]], {icon: icon_titan})
				.bindPopup("Месторождение черного титана").bindTooltip("Месторождение черного титана", {direction: 'top'}).addTo(chorniytitanicons);
		}	
	}
	else {
		chorniytitanicons.clearLayers();
	}
}

let hlamicons = L.layerGroup().addTo(map);
function HlamOnOff() {
	let chbox;
	chbox=document.getElementById('HlamButton');
	if (chbox.checked) {
		let hlam = [
			[-83471, -21748],[-62126, -129768],[-62891, -125765],[-58805, -126710],[-144198, -46587],[186423, -9983],[190900, -2582],[172621, -116359],[89525, -52190],[80640, -38730],[135983, -159700],[131152, -133762],[99224, -162196],[95692, -134134],[37786, -149141],[59840, -135568],[25875, -139068],[116444, -167389],[65241, -165783],[-23211, 185922],[-105756, 176346],[-118254, 142912],[-175462, 190402],[158704, 183717],[153505, 138567],[28934, 177458],[47236, 134839],[24198, 151526],[-49849, 112325],[-128574, 68749],[-121261, 98016],[-125915, 56473],[182989, 108917],[169908, 14059],[181126, 15523],[4753, 49986],[-159050, -64597]
		];
		for (let i = 0; i < hlam.length; i++) {
			new L.Marker([hlam[i][0],hlam[i][1]], {icon: icon_hlam})
				.bindPopup("Куча хлама").bindTooltip("Куча хлама", {direction: 'top'}).addTo(hlamicons);
		}
	}
	else {
		hlamicons.clearLayers();
	}
}

let jelezoicons = L.layerGroup().addTo(map);
function JelezoOnOff() {
	let chbox;
	chbox=document.getElementById('JelezoButton');
	if (chbox.checked) {
		let jelezo = [
			[-13695, -25506],[-112368, -32274],[-3879, -61955],[-11434, -57144],[-30902, -51803],[-43098, -48141],[-72604, -52192],[-2834, -74926],[-39373, -96381],[-73666, -89437],[-113109, -66768],[-17739, -130442],[-60970, -127789],[-64250, -110113],[-95706, -116690],[-126022, -111532],[-99870, -110852],[-152058, -27168],[-148228, -15233],[-165793, -30393],[-150635, -89062],[-134215, -86391],[-167955, -91229],[-166372, -102721],[169997, -53626],[132232, -46227],[162017, -46193],[159557, -120510],[120740, -1722],[54511, -25802],[63671, -22104],[34252, -14682],[25713, -26841],[12431, -24545],[77217, -53972],[43624, -46361],[111346, -93260],[97733, -72839],[36208, -94990],[65309, -78478],[60240, -66427],[13731, -67629],[77041, -122343],[5637, -115773],[-15256, -146769],[-53755, -142558],[-107627, -144044],[-36506, -182177],[-44919, -170017],[-146134, -152731],[204305, -142596],[139118, -158647],[153028, -139859],[179253, -164980],[62520, -145811],[38172, -136113],[8288, -150332],[-101397, 178561],[-127737, 156429],[194379, 181874],[195949, 133768],[150767, 140215],[160554, 145492],[90587, 189225],[-64168, 103402],[-120671, 78598],[-13259, 60885],[-76044, 37405],[198765, 103440],[134317, 97822],[112006, 125403],[80497, 113375],[116973, 71252],[92647, 72486],[2694, 91160],[118179, 51980],[51938, 17948],[27380, 26994]
		];
		for (let i = 0; i < jelezo.length; i++) {
			new L.Marker([jelezo[i][0],jelezo[i][1]], {icon: icon_jelezo})
				.bindPopup("Месторождение железа").bindTooltip("Месторождение железа", {direction: 'top'}).addTo(jelezoicons);
		}
	}
	else {
		jelezoicons.clearLayers();
	}
}

let kislotaicons = L.layerGroup().addTo(map);
function KislotaOnOff() {
	let chbox;
	chbox=document.getElementById('KislotaButton');
	if (chbox.checked) {
		let kislota = [
			[180165, -27298],[182890, -60081],[184819, -60848],[184880, -59986],[149876, -37578],[177255, -72232],[205066, -113338],[59753, -49514],[-94573, 187809],[-75002, 153214],[-369, 62904],[-143091, 52219],[-155267, 1961],[110947, 104611],[67579, 116203],[15667, 100795],[72865, 97691],[77370, 46142],[54584, 35392]
		];
		for (let i = 0; i < kislota.length; i++) {
			new L.Marker([kislota[i][0],kislota[i][1]], {icon: icon_kislota})
				.bindPopup("Кислота").bindTooltip("Кислота", {direction: 'top'}).addTo(kislotaicons);
		}
	}
	else {
		kislotaicons.clearLayers();
	}
}

let kristalliicons = L.layerGroup().addTo(map);
function KristalliOnOff() {
	let chbox;
	chbox=document.getElementById('KristalliButton');
	if (chbox.checked) {
		let kristalli = [
			[-26110, -59652],[185070, -58008],[142183, -121605],[-11098, -165311],[-127550, -189121],[94545, 192045],[26443, 122132]
		];
		for (let i = 0; i < kristalli.length; i++) {
			new L.Marker([kristalli[i][0],kristalli[i][1]], {icon: icon_kristalli})
				.bindPopup("Месторождение кристаллов").bindTooltip("Месторождение кристаллов", {direction: 'top'}).addTo(kristalliicons);
		}
	}
	else {
		kristalliicons.clearLayers();
	}
}

let masloicons = L.layerGroup().addTo(map);
function MasloOnOff() {
	let chbox;
	chbox=document.getElementById('MasloButton');
	if (chbox.checked) {
		let maslo= [
			[-24282, -91240],[-42049, -88925],[-37724, -83362],[-153851, -1157],[198380, -42889],[145605, -35140],[206821, -128733],[-1130, -137376],[-125095, -192806],[-128640, -191832],[-124248, -191624],[-54589, 175027],[-95102, 187317],[-156225, 200978],[177588, 193910],[175893, 139668],[145184, 148697],[158001, 153492],[117084, 200421],[78239, 201062],[17765, 195531],[-27957, 70055],[-174109, 129189],[-160415, 43627],[181803, 113110],[125264, 127861],[123177, 70249],[93736, 92419],[127833, 17303],[113851, 31826]
		];
		for (let i = 0; i < maslo.length; i++) {
			new L.Marker([maslo[i][0],maslo[i][1]], {icon: icon_maslo})
				.bindPopup("Утечка нефти (Масло)").bindTooltip("Утечка нефти (Масло)", {direction: 'top'}).addTo(masloicons);
		}
	}
	else {
		masloicons.clearLayers();
	}
}

let medyicons = L.layerGroup().addTo(map);
function MedyOnOff() {
	let chbox;
	chbox=document.getElementById('MedyButton');
	if (chbox.checked) {
		let medy = [
			[-23934, -32365],[-2637, -27456],[-42858, -25079],[-27416, -44001],[-10011, -96971],[-36269, -93488],[-60600, -66400],[-128180, -66991],[-22092, -120770],[-59614, -125444],[-67078, -119734],[-100864, -119668],[197780, -74895],[140166, -104425],[63022, -6975],[30241, -3861],[75164, -63295],[91490, -39872],[50353, -53810],[10939, -53761],[4992, -38714],[99753, -72358],[85548, -72472],[41186, -66723],[563, -97208],[113340, -115073],[34176, -116346],[2548, -104385],[-25198, -157425],[-34618, -140565],[-9115, -166184],[-32796, -172970],[-148759, -133993],[-146245, -169331],[171939, -153636],[16415, -148191],[-23977, 187661],[-24263, 186670],[-25221, 189202],[-60036, 155256],[-72906, 157136],[-129291, 158563],[203992, 197647],[101250, 151160],[7106, 132200],[-55091, 114129],[-18189, 43254],[-59631, 40991],[-88591, 34691],[-164860, 88451],[-168843, 30274],[185948, 126259],[180339, 85571],[161973, 86653],[95139, 125800],[19611, 56521],[125764, 19969],[41516, 13384]
		];
		for (let i = 0; i < medy.length; i++) {
			new L.Marker([medy[i][0],medy[i][1]], {icon: icon_medy})
				.bindPopup("Месторождение меди").bindTooltip("Месторождение меди", {direction: 'top'}).addTo(medyicons);
		}
	}
	else {
		medyicons.clearLayers();
	}
}

let serebroicons = L.layerGroup().addTo(map);
function SerebroOnOff() {
	let chbox;
	chbox=document.getElementById('SerebroButton');
	if (chbox.checked) {
		let serebro = [
			[-22809, -1266],[-28401, -62422],[-108208, -47678],[-27985, -89382],[-132510, -125592],[175948, -2611],[146012, -11123],[-84110, -132770],[138848, -160010],[136968, -153823],[139428, -154535],[-92991, 187700],[-92986, 163161],[-102435, 135872],[54905, 137779],[55809, 156936],[-165342, 9581],[179776, 112303],[169552, 74152],[115185, 88740],[76857, 44214],[43501, 27241]
		];
		for (let i = 0; i < serebro.length; i++) {
			new L.Marker([serebro[i][0],serebro[i][1]], {icon: icon_serebro})
				.bindPopup("Месторождение серебра").bindTooltip("Месторождение серебра", {direction: 'top'}).addTo(serebroicons);
		}
	}
	else {
		serebroicons.clearLayers();
	}
}

let svinecicons = L.layerGroup().addTo(map);
function SvinecOnOff() {
	let chbox;
	chbox=document.getElementById('SvinecButton');
	if (chbox.checked) {
		let svinec = [
			[-28415, -8011],[-25916, -62179],[-103677, -75755],[-43915, -127902],[-109568, -101327],[-136150, -65671],[-77314, 193590],[-148177, 186901],[186751, 163314],[80350, 142322],[76914, 158300],[38264, 154989],[61112, 156736],[-130138, 112095],[-122176, 110985],[-77050, 63937],[-10641, 5283],[-142466, 50612],[-173130, 6591],[179460, 108471],[194440, 88137],[140884, 81560],[188996, 36387],[181554, 18158],[190540, 19400],[44753, 114033],[24120, 121168],[33944, 89760],[100019, 59961],[126208, 15264],[21125, 22283]
		];
		for (let i = 0; i < svinec.length; i++) {
			new L.Marker([svinec[i][0],svinec[i][1]], {icon: icon_svinec})
				.bindPopup("Месторождение свинца").bindTooltip("Месторождение свинца", {direction: 'top'}).addTo(svinecicons);
		}
	}
	else {
		svinecicons.clearLayers();
	}
}

let udobrenieicons = L.layerGroup().addTo(map);
function UdobrenieOnOff() {
	let chbox;
	chbox=document.getElementById('UdobrenieButton');
	if (chbox.checked) {
		let udobrenie = [
			[-155406, -42744],[150052, -35939],[143981, -69348],[124856, -118294],[-27013, -142388],[-12259, -172597],[198261, -162168],[142602, -158688],[88470, -138828],[30144, -140565],[25253, -136099],[31297, -137825],[-25807, 188246],[-26148, 194352],[-53896, 191710],[-36066, 138073],[-112376, 135873],[-37804, 108817],[-10198, 47147],[-158008, 122657],[172837, 3157]
		];
		for (let i = 0; i < udobrenie.length; i++) {
			new L.Marker([udobrenie[i][0],udobrenie[i][1]], {icon: icon_udobrenie})
				.bindPopup("Месторождение фосфатов (Удобрение)").bindTooltip("Месторождение фосфатов (Удобрение)", {direction: 'top'}).addTo(udobrenieicons);
		}
	}
	else {
		udobrenieicons.clearLayers();
	}
}

let ugolyicons = L.layerGroup().addTo(map);
function UgolyOnOff() {
	let chbox;
	chbox=document.getElementById('UgolyButton');
	if (chbox.checked) {
		let ugoly = [
			[-90939, -123647],[-111451, -116808],[-121448, -99246],[-152323, -52285],[-58786, -136426],[-82861, -137703],[-127949, -138649],[-163604, -137600],[-72026, 139873],[42952, 194274],[-68999, 48588],[-85135, 14080],[149935, 53764],[152273, 21063],[59738, 105035],[100860, 71102],[75559, 27540]
		];
		for (let i = 0; i < ugoly.length; i++) {
			new L.Marker([ugoly[i][0],ugoly[i][1]], {icon: icon_ugoly})
				.bindPopup("Месторождение угля").bindTooltip("Месторождение угля", {direction: 'top'}).addTo(ugolyicons);
		}
	}
	else {
		ugolyicons.clearLayers();
	}
}

let yaderniymaterialicons = L.layerGroup().addTo(map);
function YaderniyMaterialOnOff() {
	let chbox;
	chbox=document.getElementById('YaderniyMaterialButton');
	if (chbox.checked) {
		let yaderniymaterial = [
			[-115486, -87839],[-42694, -123128],[-157800, -1473],[-156824, -1592],[-156282, -2230],[-146304, -89409],[-169311, -119320],[-136426, 190871],[-171831, 160691],[148958, 137712],[93279, 187919],[70301, 45680],[13654, 11518]
		];
		for (let i = 0; i < yaderniymaterial.length; i++) {
			new L.Marker([yaderniymaterial[i][0],yaderniymaterial[i][1]], {icon: icon_yaderniymaterial})
				.bindPopup("Месторождение урана (Ядерный материал)").bindTooltip("Месторождение урана (Ядерный материал)", {direction: 'top'}).addTo(yaderniymaterialicons);
		}
	}
	else {
		yaderniymaterialicons.clearLayers();
	}
}

let zolotoicons = L.layerGroup().addTo(map);
function ZolotoOnOff() {
	let chbox;
	chbox=document.getElementById('ZolotoButton');
	if (chbox.checked) {
		let zoloto = [
			[-125148, -52496],[183653, -59285],[108470, -63756],[-11997, -169484],[-126230, -191283],[-70845, 179027],[-94378, 186293],[198728, 167366],[161108, 138097],[76793, 150917],[19614, 121324],[93559, 22143]
		];
		for (let i = 0; i < zoloto.length; i++) {
			new L.Marker([zoloto[i][0],zoloto[i][1]], {icon: icon_zoloto})
				.bindPopup("Месторождение золота").bindTooltip("Месторождение золота", {direction: 'top'}).addTo(zolotoicons);
		}
	}
	else {
		zolotoicons.clearLayers();
	}
}