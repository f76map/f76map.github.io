let treasureicons = L.layerGroup().addTo(map);
let all_treasure = [
	['Лесное сокровище #1','tre_forest_map1',66008, -177856],
	['Лесное сокровище #2','tre_forest_map2',-40684, -158059],
	['Лесное сокровище #3','tre_forest_map3',-65181, -135648],
	['Лесное сокровище #4','tre_forest_map4',119820, -119683],
	['Лесное сокровище #5','tre_forest_map5',-49725, -122167],
	['Лесное сокровище #6','tre_forest_map6',48992, -81548],
	['Лесное сокровище #7','tre_forest_map7',-84171, -78384],
	['Лесное сокровище #8','tre_forest_map8',72407, -41079],
	['Лесное сокровище #9','tre_forest_map9',-24995, -41273],
	['Лесное сокровище #10','tre_forest_map10',43075, -25714],
	['Сокровище Шлаковой бездны #1','tre_ash_map1',-143726, -126027],
	['Сокровище Шлаковой бездны #2','tre_ash_map2',-81483, -101486],
	['Сокровище Ядовитой долины #1','tre_toxic_map1',150060, -77637],
	['Сокровище Ядовитой долины #2','tre_toxic_map2',163443, -31294],
	['Сокровище Ядовитой долины #3','tre_toxic_map3',134711, 5849],
	['Сокровище Ядовитой долины #4','tre_toxic_map4',192093, 26592],
	['Сокровище Дикого рубежа #1','tre_savage_map1',-157138, -8329],
	['Сокровище Дикого рубежа #2','tre_savage_map2',-16360, 16156],
	['Сокровище Дикого рубежа #3','tre_savage_map3',27944, 32254],
	['Сокровище Дикого рубежа #4','tre_savage_map4',-62224, 36779],
	['Сокровище Дикого рубежа #5','tre_savage_map5',-47051, 33260],
	['Сокровище Дикого рубежа #6','tre_savage_map6',176659, 56127],
	['Сокровище Дикого рубежа #7','tre_savage_map7',-124896, 61745],
	['Сокровище Дикого рубежа #8','tre_savage_map8',30560, 66572],
	['Сокровище Дикого рубежа #9','tre_savage_map9',42795, 98820],
	['Сокровище Дикого рубежа #10','tre_savage_map10',180168, 150924],
	['Сокровище Клюквенного болота #1','tre_cranberry_map1',-129577, 130433],
	['Сокровище Клюквенного болота #2','tre_cranberry_map2',-88259, 157542],
	['Сокровище Клюквенного болота #3','tre_cranberry_map3',-176662, 175651],
	['Сокровище Клюквенного болота #4','tre_cranberry_map4',-89122, 192578],
	['Сокровище Топи #1','tre_mire_map1',111464, 140590],
	['Сокровище Топи #2','tre_mire_map2',-26589, 142882],
	['Сокровище Топи #3','tre_mire_map3',18416, 160578],
	['Сокровище Топи #4','tre_mire_map4',78368, 175781],
	['Сокровище Топи #5','tre_mire_map5',104687, 181776]
];
function TreasureOnOff() {
	if (document.getElementById('TreasureButton').checked) {
		for (let i = 0; i < all_treasure.length; i++){new L.marker([all_treasure[i][2], all_treasure[i][3]], {icon: icon_treasure}).addTo(treasureicons).bindPopup(all_treasure[i][0]+'<br><a id="single_'+[i+1]+'" href="css/images/treasure/'+all_treasure[i][1]+'.jpg" title="'+all_treasure[i][0]+'"><img src="css/images/treasure/s/'+all_treasure[i][1]+'.jpg" style="width: 300px;" alt=""/></a><br><div style="font-size: 10pt;">(Нажмите на скриншот для увеличения)</div>').bindTooltip(all_treasure[i][0], {direction: 'top'});}
	}
	else {
		treasureicons.clearLayers();
	}
}