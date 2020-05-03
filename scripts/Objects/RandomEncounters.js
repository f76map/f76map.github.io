let reassaulticons = L.layerGroup().addTo(map);
function REAssaultOnOff() {
	let chbox;
	chbox=document.getElementById('REAssaultButton');
	if (chbox.checked) {
		let reassault = [
			[-138166,-142823],[-109581,-113692],[-82879,198795],[-156129,128388],[-79179,160210],[-172169,184118],[19847,-123055],[193631,-144657],[56079,-67999],[77931,-154047],[-12922,-35586],[107480,107064],[-114771,86560],[-160050,-43785],[-106528,68420],[193515,125489],[-101046,-11749],[-155818,-14425],[-28587,17750],[-34473,125051],[-65107,68776],[14626,29607],[107436,173102],[-31328,196400],[69816,202368],[162680,206512],[148868,-68180],[172982,8449]
		];
		
		for (let i = 0; i < reassault.length; i++) {
			new L.Marker([reassault[i][0],reassault[i][1]], {icon: icon_random1})
				.bindPopup("Место случайной встречи (Assault)")
				.bindTooltip("Место случайной встречи (Assault)", {direction: 'top'})
				.addTo(reassaulticons);
		}
	}
	else {
		reassaulticons.clearLayers();
	}
}

let reobjecticons = L.layerGroup().addTo(map);
function REObjectOnOff() {
	let chbox;
	chbox=document.getElementById('REObjectButton');
	if (chbox.checked) {
		let reobject = [
			[-115714,-79135],[-134197,-93685],[-80695,-110114],[-96024,118192],[-116480,120371],[-100904,165742],[-124754,179281],[-173935,124326],[-161803,131167],[-124404,110951],[-177112,157496],[-161691,165833],[-128728,166208],[-78568,190136],[-68262,139565],[-81176,179024],[-140684,122497],[-125102,137167],[48136,-158045],[-32648,-138780],[-49903,-65835],[59881,-81056],[44104,-111983],[-15139,-104184],[146882,-103077],[-37871,-107435],[46016,-67072],[87748,-135758],[153021,-144645],[162205,-163348],[-37413,-178474],[1440,-30821],[195064,86872],[193424,118080],[121664,35129],[125565,55471],[-163984,-33480],[-158640,-24960],[-173583,81034],[-179616,52808],[-172880,92560],[-103733,-34258],[14126,72159],[166283,112173],[-121381,13941],[-50202,35063],[85432,117514],[-2819,115779],[-48688,110040],[-75409,-29764],[17497,150044],[50724,150987],[12346,129900],[-13726,188314],[140208,165201],[74141,180634],[-22628,198815],[38755,173290],[-6145,151243],[-30794,188733],[117345,151026],[77232,193437],[77447,171943],[20453,183028],[197661,-42457],[203056,66888],[171758,559],[188518,-76453],[159376,-26947],[124681,-47108]
		];
		for (let i = 0; i < reobject.length; i++) {
			new L.Marker([reobject[i][0],reobject[i][1]], {icon: icon_random4})
				.bindPopup("Место случайной встречи (Object)")
				.bindTooltip("Место случайной встречи (Object)", {direction: 'top'})
				.addTo(reobjecticons);
		}
	}
	else {
		reobjecticons.clearLayers();
	}
}

let resceneicons = L.layerGroup().addTo(map);
function RESceneOnOff() {
	let chbox;
	chbox=document.getElementById('RESceneButton');
	if (chbox.checked) {
		let rescene = [
			[-129831,-121800],[-142714,-86611],[-84822,-106091],[-105259,-115318],[-110031,-90452],[-108869,-75201],[-135652,-171505],[-94850,-146644],[-108604,186395],[-102025,178448],[-75920,132733],[-74158,152445],[-90735,135255],[-107824,129132],[-58411,155813],[-63399,170675],[-107718,166015],[-166063,110607],[-169255,169803],[-103746,115679],[-116494,148942],[-121562,203845],[-127655,192459],[42453,-99287],[25115,-79077],[42323,-8763],[156918,-142487],[182664,-139270],[71437,-58288],[186994,-152782],[-29978,-40372],[174268,-109989],[94612,-160488],[-67879,-48552],[34352,-48570],[-28069,-142310],[8240,-68968],[121584,-167976],[36138,10878],[185829,161059],[164688,142401],[85436,75917],[130903,66239],[-119767,22562],[-95658,-18687],[-59255,49107],[-169025,-31726],[-125247,-9060],[-176983,-59917],[-169553,72099],[198168,75167],[191920,97468],[-183028,23875],[157191,90832],[-71080,13678],[-97355,27898],[-16837,108156],[-142061,98577],[-122426,55901],[179548,74723],[-96709,108840],[43246,31392],[51199,107128],[9384,96039],[-18268,-5799],[-25780,66799],[182729,177101],[130746,153382],[-12561,132708],[-22472,153672],[-31308,171120],[-54376,191120],[50224,190902],[83848,198237],[120767,191553],[157430,183289],[52114,132483],[16016,144688],[153227,5183],[194704,-5490],[195442,10856],[119328,-67772],[160331,43700],[116857,-6265],[184736,-46952]
		];
		for (var i = 0; i < rescene.length; i++) {
			new L.Marker([rescene[i][0],rescene[i][1]], {icon: icon_random3})
				.bindPopup("Место случайной встречи (Scene)")
				.bindTooltip("Место случайной встречи (Scene)", {direction: 'top'})
				.addTo(resceneicons);
		}
	}
	else {
		resceneicons.clearLayers();
	}
}

let retravelicons = L.layerGroup().addTo(map);
function RETravelOnOff() {
	let chbox;
	chbox=document.getElementById('RETravelButton');
	if (chbox.checked) {
		let retravel = [
			[-147696,-81389],[-123841,-102468],[-120131,-153985],[-139195,-125873],[-134606,175594],[-174728,135375],[-84238,142653],[-93427,127354],[127354,149119],[-101250,149590],[-71597,184685],[-132240,161540],[74123,-26652],[152570,-109711],[2496,-98760],[58204,-130390],[106786,-126721],[-25305,-106254],[-39501,-113657],[108592,-42983],[79746,-51497],[12455,-6932],[-72550,-90324],[61936,-15706],[152294,68563],[127302,121343],[117483,102237],[-105692,-24881],[-146364,-11451],[-85848,5327],[-98072,78112],[-124339,97626],[-51628,47655],[-164729,53625],[-86605,-17018],[58055,44561],[99910,49271],[230,46636],[-25238,82485],[47025,72163],[110627,149442],[19329,164475],[11956,175649],[144142,161726],[133549,190159],[-48383,188312],[-13178,172997],[2712,129728],[-32457,181110],[90433,137577],[189285,49484],[138284,-66884]
		];
		for (let i = 0; i < retravel.length; i++) {
			new L.Marker([retravel[i][0],retravel[i][1]], {icon: icon_random2})
				.bindPopup("Место случайной встречи (Travel)")
				.bindTooltip("Место случайной встречи (Travel)", {direction: 'top'})
				.addTo(retravelicons);
		}
	}
	else {
		retravelicons.clearLayers();
	}
}

let recampicons = L.layerGroup().addTo(map);
function RECampOnOff() {
	let chbox;
	chbox=document.getElementById('RECampButton');
	if (chbox.checked) {
		let recamp = [
			[-71937,-187785],[-71130,-164100],[-131365,-138928],[-91497,117966],[-164476,122390],[-177896,165638],[-111835,176549],[-167562,161737],[196577,-90856],[43875,-91650],[2617,-113982],[44291,6860],[-9679,-26817],[120919,-130682],[4044,-161075],[-45222,-43393],[199085,-112838],[56568,-74893],[99322,-61911],[-67073,-121446],[170933,-173187],[65623,-125533],[86952,-168368],[-55881,-136448],[808,15869],[20348,90636],[-27417,74676],[-24521,-3006],[158271,128935],[64596,77221],[135743,51546],[103004,59219],[-171277,-106589],[-92027,27058],[189589,84580],[71344,21403],[-47453,33458],[-56175,66917],[-81027,102993],[92558,32182],[67739,96137],[-114467,-47285],[-36295,170773],[-26485,143950],[3092,182638],[166109,186369],[14344,196149],[180318,-37877],[152398,-4837],[140189,-18014],[147433,-78444]
		];
		
		for (let i = 0; i < recamp.length; i++) {
			new L.Marker([recamp[i][0],recamp[i][1]], {icon: icon_random5})
				.bindPopup("Место случайной встречи (Camp)")
				.bindTooltip("Место случайной встречи (Camp)", {direction: 'top'})
				.addTo(recampicons);
		}
	}
	else {
		recampicons.clearLayers();
	}
}

let reminingicons = L.layerGroup().addTo(map);
function REMiningOnOff() {
	let chbox;
	chbox=document.getElementById('REMiningButton');
	if (chbox.checked) {
		let remining = [
			[-71790,-145200],[-124429,-55561],[-119651,-106150],[-169197,157889],[-101219,129455],[105208,-62759],[163229,-117548],[202848,167592],[88893,22984],[16981,15481],[160358,-71205]
		];
		
		for (let i = 0; i < remining.length; i++) {
			new L.Marker([remining[i][0],remining[i][1]], {icon: icon_random6})
				.bindPopup("Место случайной встречи (Mining)")
				.bindTooltip("Место случайной встречи (Mining)", {direction: 'top'})
				.addTo(reminingicons);
		}
	}
	else {
		reminingicons.clearLayers();
	}
}