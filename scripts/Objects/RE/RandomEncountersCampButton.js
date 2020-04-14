let recampicons = L.layerGroup().addTo(map);
function RECampOnOff() {
	let chbox;
	chbox=document.getElementById('RECampButton');
	if (chbox.checked) {
		let recamp = [
			[-71937,-187785],
			[-71130,-164100],
			[-131365,-138928],
			[-91497,117966],
			[-164476,122390],
			[-177896,165638],
			[-111835,176549],
			[-167562,161737],
			[196577,-90856],
			[43875,-91650],
			[2617,-113982],
			[44291,6860],
			[-9679,-26817],
			[120919,-130682],
			[4044,-161075],
			[-45222,-43393],
			[199085,-112838],
			[56568,-74893],
			[99322,-61911],
			[-67073,-121446],
			[170933,-173187],
			[65623,-125533],
			[86952,-168368],
			[-55881,-136448],
			[808,15869],
			[20348,90636],
			[-27417,74676],
			[-24521,-3006],
			[158271,128935],
			[64596,77221],
			[135743,51546],
			[103004,59219],
			[-171277,-106589],
			[-92027,27058],
			[189589,84580],
			[71344,21403],
			[-47453,33458],
			[-56175,66917],
			[-81027,102993],
			[92558,32182],
			[67739,96137],
			[-114467,-47285],
			[-36295,170773],
			[-26485,143950],
			[3092,182638],
			[166109,186369],
			[14344,196149],
			[180318,-37877],
			[152398,-4837],
			[140189,-18014],
			[147433,-78444]
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