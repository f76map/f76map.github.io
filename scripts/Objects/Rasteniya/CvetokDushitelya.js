let cvetokdushitelyaicons = L.layerGroup().addTo(map);
function CvetokDushitelyaOnOff() {
	let chbox;
	chbox=document.getElementById('CvetokDushitelyaButton');
	if (chbox.checked) {
		let cvetokdushitelya = [
			[-5419, 201596],
			[-5481, 201452],
			[-5527, 201562],
			[-41409, 198501],
			[-41197, 198294],
			[-41215, 198308],
			[-38033, 201423],
			[-37934, 200779],
			[-38039, 201499],
			[-23095, 175851],
			[-10502, 172832],
			[-10400, 172687],
			[-10431, 172861],
			[-28921, 182182],
			[-6840, 186928],
			[-6931, 186630],
			[-6971, 186649],
			[-16627, 194859],
			[-16206, 193849],
			[-33220, 185183],
			[-32887, 184638],
			[-6977, 134053],
			[-6156, 134146],
			[-6222, 134063],
			[-7232, 135646],
			[-7533, 135542],
			[-7396, 135871],
			[-13681, 156611],
			[-13687, 156710],
			[-13486, 156644],
			[-34556, 144804],
			[-34576, 144810],
			[-46681, 160539],
			[-46693, 160537],
			[165237, 197497],
			[142871, 200656],
			[142937, 200678],
			[160413, 199058],
			[160427, 199007],
			[160477, 199017],
			[142888, 200767],
			[175662, 174293],
			[175676, 174243],
			[175726, 174253],
			[172835, 179017],
			[172849, 178966],
			[172899, 178976],
			[166970, 181518],
			[167020, 181502],
			[167040, 181544],
			[178502, 180798],
			[178516, 180748],
			[178566, 180758],
			[167088, 189956],
			[167102, 189905],
			[167152, 189916],
			[167947, 189247],
			[168027, 189274],
			[172162, 191150],
			[172116, 191140],
			[172102, 191191],
			[184166, 193576],
			[184180, 193526],
			[184230, 193535],
			[138987, 170691],
			[139037, 170808],
			[139094, 170744],
			[146366, 171624],
			[146416, 171741],
			[146473, 171678],
			[150292, 175813],
			[150342, 175930],
			[150399, 175866],
			[157521, 173022],
			[157535, 172972],
			[157585, 172982],
			[136851, 177801],
			[136901, 177918],
			[136958, 177855],
			[141945, 177169],
			[141995, 177286],
			[142052, 177223],
			[145030, 178821],
			[145080, 178939],
			[145137, 178875],
			[159722, 177830],
			[159736, 177780],
			[163702, 178887],
			[163716, 178836],
			[163766, 178846],
			[159786, 177790],
			[137635, 181554],
			[137685, 181671],
			[137742, 181608],
			[159035, 184592],
			[159049, 184541],
			[159099, 184551],
			[134364, 194138],
			[134414, 194255],
			[134471, 194192],
			[143880, 195985],
			[143987, 196039],
			[143930, 196102],
			[156701, 193132],
			[156715, 193082],
			[156765, 193092],
			[135102, 156310],
			[135216, 156286],
			[65750, 201321],
			[56307, 199156],
			[56242, 199156],
			[56360, 199144],
			[63709, 198040],
			[3274, 199356],
			[2808, 198396],
			[2683, 198422],
			[29912, 199684],
			[23568, 202379],
			[26392, 202073],
			[26709, 202646],
			[31123, 202850],
			[30887, 202744],
			[30815, 202550],
			[14762, 207994],
			[27371, 207281],
			[27308, 207359],
			[27250, 207246],
			[125406, 179824],
			[125455, 179941],
			[125513, 179878],
			[129968, 177526],
			[130017, 177643],
			[130075, 177579],
			[126122, 187667],
			[126134, 187520],
			[126206, 187732],
			[126662, 195520],
			[126712, 195637],
			[126769, 195574],
			[65956, 169935],
			[65887, 169931],
			[68399, 173383],
			[68872, 173846],
			[70565, 175398],
			[69793, 174710],
			[72412, 175479],
			[71266, 174914],
			[70029, 173633],
			[73196, 196139],
			[49295, 167812],
			[64781, 167874],
			[63166, 167404],
			[64723, 167842],
			[47048, 169020],
			[55478, 170133],
			[55560, 170075],
			[56142, 170205],
			[63571, 168004],
			[49597, 176718],
			[49606, 176745],
			[54749, 180492],
			[58953, 181492],
			[58522, 181419],
			[18831, 169841],
			[18219, 169748],
			[24604, 168244],
			[7068, 175708],
			[17962, 172078],
			[26438, 175339],
			[805, 179519],
			[1024, 179426],
			[14231, 177726],
			[17554, 178073],
			[19320, 183296],
			[25648, 194184],
			[26219, 193753],
			[26022, 193664],
			[30782, 194225],
			[30904, 194549],
			[30615, 194709],
			[99831, 150112],
			[99832, 150160],
			[99754, 150116],
			[110238, 158156],
			[110285, 158040],
			[110333, 158161],
			[113864, 162159],
			[113902, 162206],
			[113842, 162237],
			[76688, 133116],
			[76791, 133038],
			[76721, 133143],
			[65610, 137566],
			[65626, 137544],
			[65626, 137555],
			[81582, 142011],
			[81611, 141989],
			[81906, 155630],
			[81862, 155622],
			[81827, 155681],
			[35285, 131714],
			[35254, 131699],
			[35275, 131740],
			[41674, 133502],
			[41631, 133458],
			[56354, 133110],
			[56413, 133115],
			[36764, 136709],
			[36297, 136517],
			[58299, 138035],
			[58259, 138048],
			[64222, 137836],
			[64352, 137841],
			[64377, 137850],
			[62979, 136836],
			[62925, 136891],
			[62962, 136860],
			[38841, 140628],
			[38895, 140647],
			[46124, 141433],
			[46094, 141374],
			[55161, 144285],
			[55138, 144182],
			[55268, 144208],
			[63424, 150035],
			[63326, 149989],
			[47552, 152756],
			[47593, 152763],
			[51557, 153593],
			[51725, 153577],
			[63711, 158634],
			[63666, 158669],
			[63201, 158200],
			[63203, 158210],
			[889, 141854],
			[1049, 141951],
			[932, 141771],
			[28557, 152755],
			[28871, 152701],
			[28755, 152820],
			[28714, 152847],
			[28920, 153025],
			[28962, 153069],
			[29236, 153077],
			[29218, 153057],
			[29024, 152848],
			[21177, 159305],
			[20991, 159252],
			[22273, 162512],
			[22234, 162483],
			[42939, 126855],
			[42956, 126875],
			[37717, 130667],
			[37702, 130673],
			[42535, 127660],
			[42554, 127640],
			[46863, 128311],
			[46826, 128320],
			[55815, 128884],
			[55791, 128914],
			[1029, 129060],
			[1009, 128886],
			[1061, 129060]
		];
		for (let i = 0; i < cvetokdushitelya.length; i++) {
			new L.circleMarker([cvetokdushitelya[i][0],cvetokdushitelya[i][1]], {color: "#9ACD32"})
			.bindPopup("Цветок душителя")
			.bindTooltip("Цветок душителя", {direction: 'top'})
			.addTo(cvetokdushitelyaicons);
		}
	}
	else {
		cvetokdushitelyaicons.clearLayers();
	}
}