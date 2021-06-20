function urlhash() {
	if(window.location.hash) {
		let h_list = [
			['#treasure','Treasure'],
			['#magazine','Magazine'],
			['#bobblehead','Bobblehead'],
			['#capstash','CapStash'],
			['#fusioncore','FusionCore'],
			['#powerarmor','PowerArmor'],
			
			['#workbench1','Wb1'],
			['#workbench2','Wb2'],
			['#workbench3','Wb3'],
			['#workbench4','Wb4'],
			['#workbench5','Wb5'],
			
			['#assault','REAssault'],
			['#object','REObject'],
			['#scene','REScene'],
			['#travel','RETravel'],
			['#camp','RECamp'],
			['#mining','REMining'],
			
			['#strangemobs','StrangeMobs'],
			['#animals1_1','Animals1_1'],
			['#animals1_2','Animals1_2'],
			['#animals1_3','Animals1_3'],
			['#animals1_4','Animals1_4'],
			['#animals1_5','Animals1_5'],
			['#animals1_6','Animals1_6'],
			['#animals1_7','Animals1_7'],
			['#animals1_8','Animals1_8'],
			['#animals1_9','Animals1_9'],
			['#animals1_10','Animals1_10'],
			['#animals2_1','Animals2_1'],
			['#animals2_2','Animals2_2'],
			['#animals2_3','Animals2_3'],
			['#animals2_4','Animals2_4'],
			['#animals2_5','Animals2_5'],
			['#animals2_6','Animals2_6'],
			['#animals2_7','Animals2_7'],
			['#animals2_8','Animals2_8'],
			['#animals2_9','Animals2_9'],
			['#animals2_10','Animals2_10'],
			['#animals2_11','Animals2_11'],
			
			['#medy','Medy'],
			['#hlam','Hlam'],
			['#ugoly','Ugoly'],
			['#beton','Beton'],
			['#maslo','Maslo'],
			['#zoloto','Zoloto'],
			['#jelezo','Jelezo'],
			['#svinec','Svinec'],
			['#serebro','Serebro'],
			['#kislota','Kislota'],
			['#udobrenie','Udobrenie'],
			['#aluminiy','Aluminiy'],
			['#kristalli','Kristalli'],
			['#chorniytitan','ChorniyTitan'],
			['#yaderniymaterial','YaderniyMaterial'],
			
			['#vein1','Vein1'],
			['#vein2','Vein2'],
			['#vein3','Vein3'],
			['#vein4','Vein4'],
			['#vein5','Vein5'],
			['#vein6','Vein6'],
			['#vein7','Vein7'],
			['#vein8','Vein8'],
			['#vein9','Vein9'],
			['#vein10','Vein10'],
			['#vein11','Vein11'],
			
			['#grib','Grib'],
			['#arbuz','Arbuz'],
			['#astra','Astra'],
			['#toshka','Toshka'],
			['#tyikva','Tyikva'],
			['#tyikva2','Tyikva2'],
			['#klukva','Klukva'],
			['#morkovy','Morkovy'],
			['#ejevika','Ejevika'],
			['#kukuruza','Kukuruza'],
			['#lihocvet','Lihocvet'],
			['#ilofasoly','Ilofasoly'],
			['#krovolist','Krovolist'],
			['#mozgogrib','Mozgogrib'],
			['#mutafrukt','Mutafrukt'],
			['#peplocvet','Peplocvet'],
			['#smolyanika','Smolyanika'],
			['#hvostolom','Hvostolom'],
			['#britvozlak','Britvozlak'],
			['#gryaznocvet','Gryaznocvet'],
			['#rododendron','Rododendron'],
			['#chertopoloh','Chertopoloh'],
			['#nochnoypolzun','NochnoyPolzun'],
			['#nutryanoygrib','NutryanoyGrib'],
			['#ognenniygrib','OgnenniyGrib'],
			['#yaycomolerota','YaycoMolerota'],
			['#pepelynayaroza','PepelynayaRoza'],
			['#yagodahlopushka','YagodaHlopushka'],
			['#korenyjenyshenya','KorenyJenyshenya'],
			['#svetgrib','SvetGrib'],
			['#cvetokdushitelya','CvetokDushitelya'],
			['#svetsmola','SvetSmola'],
			['#zarajklukva','ZarajKlukva'],
			['#paporotnik','Paporotnik'],
			['#kizil','Kizil'],
			['#cvetoktoshki','CvetokToshki'],
			['#cvetoktyikvyi','CvetokTyikvyi'],
			['#cvetokarbuza','CvetokArbuza'],
			['#cvetokmorkovi','CvetokMorkovi'],
			['#hischnolist','Hischnolist'],
			
			['#portadiner','PortADiner']
		];
		for (let i=0; i < h_list.length; i++) {
			if(window.location.hash == h_list[i][0]) {window[h_list[i][1]+'Button'].checked = 1; window[h_list[i][1]+'OnOff']();}
			if(window.location.hash == h_list[i][0]+'_0') {allicons.clearLayers();LocationsButton.checked = 0; map.removeControl( controlSearch ); map.removeControl(map.zoomControl); document.getElementById('sidebar').style.display = 'none'; donat0.style.display = 'none'; window[h_list[i][1]+'Button'].checked = 1; window[h_list[i][1]+'OnOff']();}
		}
		for (let i=1; i <= 386; i++) {if(window.location.hash == '#'+[i]) {m[i].openPopup(); map.flyTo(m[i].getLatLng(), -7);}}
		for (let i=1; i <= 609; i++) {
			if(window.location.hash == '#hlam_'+[i]) {window['Hlam'+[i]+'Button'].checked = 1;window['Hlam'+[i]+'OnOff']();}
			if(window.location.hash == '#hlam_'+[i]+'_0') {allicons.clearLayers();LocationsButton.checked = 0; map.removeControl( controlSearch ); map.removeControl(map.zoomControl); document.getElementById('sidebar').style.display = 'none'; donat0.style.display = 'none'; window['Hlam'+[i]+'Button'].checked = 1;window['Hlam'+[i]+'OnOff']();}
		}
		
		let hash = window.location.hash.substr(1);
		if (/y=[0-9\-]*&x=[0-9\-]*/.test(hash) == true) {
			let hash_coords = hash.split('&').reduce(function (hash_coords, item) {
				let parts = item.split('=');
				hash_coords[parts[0]] = parts[1];
				return hash_coords;
			}, {});
			if (hash_coords.y<=290000 && hash_coords.y>=-290000 && hash_coords.x<=290000 && hash_coords.x>=-290000) {
				createMarker([hash_coords.y, hash_coords.x],[1]);
				map.flyTo([hash_coords.y, hash_coords.x], -7);
			}
		}
		
		history.pushState("", document.title, window.location.pathname + window.location.search);
	}
}