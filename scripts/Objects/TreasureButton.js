	var treasureicons = L.layerGroup().addTo(map);
	function TreasureOnOff() {
	var chbox;
	chbox=document.getElementById('TreasureButton');
	if (chbox.checked) {
	icons = new L.marker([66008, -177856], {icon: icon_treasure}).addTo(treasureicons).bindPopup('Лесное сокровище #1<br><a id="single_1" href="css/images/treasure/tre_forest_map1.jpg" title="Лесное сокровище #1"><img src="css/images/treasure/s/tre_forest_map1.jpg" style="width: 300px;" alt=""/></a><br><div style="font-size: 10pt;">(Нажмите на скриншот для увеличения)</div>').bindTooltip("Лесное сокровище #1", {direction: 'top'});
	icons = new L.marker([-40684, -158059], {icon: icon_treasure}).addTo(treasureicons).bindPopup('Лесное сокровище #2<br><a id="single_2" href="css/images/treasure/tre_forest_map2.jpg" title="Лесное сокровище #2"><img src="css/images/treasure/s/tre_forest_map2.jpg" style="width: 300px;" alt=""/></a><br><div style="font-size: 10pt;">(Нажмите на скриншот для увеличения)</div>').bindTooltip("Лесное сокровище #2", {direction: 'top'});
	icons = new L.marker([-65181, -135648], {icon: icon_treasure}).addTo(treasureicons).bindPopup('Лесное сокровище #3<br><a id="single_3" href="css/images/treasure/tre_forest_map3.jpg" title="Лесное сокровище #3"><img src="css/images/treasure/s/tre_forest_map3.jpg" style="width: 300px;" alt=""/></a><br><div style="font-size: 10pt;">(Нажмите на скриншот для увеличения)</div>').bindTooltip("Лесное сокровище #3", {direction: 'top'});
	icons = new L.marker([119820, -119683], {icon: icon_treasure}).addTo(treasureicons).bindPopup('Лесное сокровище #4<br><a id="single_4" href="css/images/treasure/tre_forest_map4.jpg" title="Лесное сокровище #4"><img src="css/images/treasure/s/tre_forest_map4.jpg" style="width: 300px;" alt=""/></a><br><div style="font-size: 10pt;">(Нажмите на скриншот для увеличения)</div>').bindTooltip("Лесное сокровище #4", {direction: 'top'});
	icons = new L.marker([-49725, -122167], {icon: icon_treasure}).addTo(treasureicons).bindPopup('Лесное сокровище #5<br><a id="single_5" href="css/images/treasure/tre_forest_map5.jpg" title="Лесное сокровище #5"><img src="css/images/treasure/s/tre_forest_map5.jpg" style="width: 300px;" alt=""/></a><br><div style="font-size: 10pt;">(Нажмите на скриншот для увеличения)</div>').bindTooltip("Лесное сокровище #5", {direction: 'top'});
	icons = new L.marker([48992, -81548], {icon: icon_treasure}).addTo(treasureicons).bindPopup('Лесное сокровище #6<br><a id="single_6" href="css/images/treasure/tre_forest_map6.jpg" title="Лесное сокровище #6"><img src="css/images/treasure/s/tre_forest_map6.jpg" style="width: 300px;" alt=""/></a><br><div style="font-size: 10pt;">(Нажмите на скриншот для увеличения)</div>').bindTooltip("Лесное сокровище #6", {direction: 'top'});
	icons = new L.marker([-84171, -78384], {icon: icon_treasure}).addTo(treasureicons).bindPopup('Лесное сокровище #7<br><a id="single_7" href="css/images/treasure/tre_forest_map7.jpg" title="Лесное сокровище #7"><img src="css/images/treasure/s/tre_forest_map7.jpg" style="width: 300px;" alt=""/></a><br><div style="font-size: 10pt;">(Нажмите на скриншот для увеличения)</div>').bindTooltip("Лесное сокровище #7", {direction: 'top'});
	icons = new L.marker([72407, -41079], {icon: icon_treasure}).addTo(treasureicons).bindPopup('Лесное сокровище #8<br><a id="single_8" href="css/images/treasure/tre_forest_map8.jpg" title="Лесное сокровище #8"><img src="css/images/treasure/s/tre_forest_map8.jpg" style="width: 300px;" alt=""/></a><br><div style="font-size: 10pt;">(Нажмите на скриншот для увеличения)</div>').bindTooltip("Лесное сокровище #8", {direction: 'top'});
	icons = new L.marker([-24995, -41273], {icon: icon_treasure}).addTo(treasureicons).bindPopup('Лесное сокровище #9<br><a id="single_9" href="css/images/treasure/tre_forest_map9.jpg" title="Лесное сокровище #9"><img src="css/images/treasure/s/tre_forest_map9.jpg" style="width: 300px;" alt=""/></a><br><div style="font-size: 10pt;">(Нажмите на скриншот для увеличения)</div>').bindTooltip("Лесное сокровище #9", {direction: 'top'});
	icons = new L.marker([43075, -25714], {icon: icon_treasure}).addTo(treasureicons).bindPopup('Лесное сокровище #10<br><a id="single_10" href="css/images/treasure/tre_forest_map10.jpg" title="Лесное сокровище #10"><img src="css/images/treasure/s/tre_forest_map10.jpg" style="width: 300px;" alt=""/></a><br><div style="font-size: 10pt;">(Нажмите на скриншот для увеличения)</div>').bindTooltip("Лесное сокровище #10", {direction: 'top'});
	icons = new L.marker([-143726, -126027], {icon: icon_treasure}).addTo(treasureicons).bindPopup('Сокровище Шлаковой бездны #1<br><a id="single_11" href="css/images/treasure/tre_ash_map1.jpg" title="Сокровище Шлаковой бездны #1"><img src="css/images/treasure/s/tre_ash_map1.jpg" style="width: 300px;" alt=""/></a><br><div style="font-size: 10pt;">(Нажмите на скриншот для увеличения)</div>').bindTooltip("Сокровище Шлаковой бездны #1", {direction: 'top'});
	icons = new L.marker([-81483, -101486], {icon: icon_treasure}).addTo(treasureicons).bindPopup('Сокровище Шлаковой бездны #2<br><a id="single_12" href="css/images/treasure/tre_ash_map2.jpg" title="Сокровище Шлаковой бездны #2"><img src="css/images/treasure/s/tre_ash_map2.jpg" style="width: 300px;" alt=""/></a><br><div style="font-size: 10pt;">(Нажмите на скриншот для увеличения)</div>').bindTooltip("Сокровище Шлаковой бездны #2", {direction: 'top'});
	icons = new L.marker([150060, -77637], {icon: icon_treasure}).addTo(treasureicons).bindPopup('Сокровище Ядовитой долины #1<br><a id="single_13" href="css/images/treasure/tre_toxic_map1.jpg" title="Сокровище Ядовитой долины #1"><img src="css/images/treasure/s/tre_toxic_map1.jpg" style="width: 300px;" alt=""/></a><br><div style="font-size: 10pt;">(Нажмите на скриншот для увеличения)</div>').bindTooltip("Сокровище Ядовитой долины #1", {direction: 'top'});
	icons = new L.marker([163443, -31294], {icon: icon_treasure}).addTo(treasureicons).bindPopup('Сокровище Ядовитой долины #2<br><a id="single_14" href="css/images/treasure/tre_toxic_map2.jpg" title="Сокровище Ядовитой долины #2"><img src="css/images/treasure/s/tre_toxic_map2.jpg" style="width: 300px;" alt=""/></a><br><div style="font-size: 10pt;">(Нажмите на скриншот для увеличения)</div>').bindTooltip("Сокровище Ядовитой долины #2", {direction: 'top'});
	icons = new L.marker([134711, 5849], {icon: icon_treasure}).addTo(treasureicons).bindPopup('Сокровище Ядовитой долины #3<br><a id="single_15" href="css/images/treasure/tre_toxic_map3.jpg" title="Сокровище Ядовитой долины #3"><img src="css/images/treasure/s/tre_toxic_map3.jpg" style="width: 300px;" alt=""/></a><br><div style="font-size: 10pt;">(Нажмите на скриншот для увеличения)</div>').bindTooltip("Сокровище Ядовитой долины #3", {direction: 'top'});
	icons = new L.marker([192093, 26592], {icon: icon_treasure}).addTo(treasureicons).bindPopup('Сокровище Ядовитой долины #4<br><a id="single_16" href="css/images/treasure/tre_toxic_map4.jpg" title="Сокровище Ядовитой долины #4"><img src="css/images/treasure/s/tre_toxic_map4.jpg" style="width: 300px;" alt=""/></a><br><div style="font-size: 10pt;">(Нажмите на скриншот для увеличения)</div>').bindTooltip("Сокровище Ядовитой долины #4", {direction: 'top'});
	icons = new L.marker([-157138, -8329], {icon: icon_treasure}).addTo(treasureicons).bindPopup('Сокровище Дикого рубежа #1<br><a id="single_17" href="css/images/treasure/tre_savage_map1.jpg" title="Сокровище Дикого рубежа #1"><img src="css/images/treasure/s/tre_savage_map1.jpg" style="width: 300px;" alt=""/></a><br><div style="font-size: 10pt;">(Нажмите на скриншот для увеличения)</div>').bindTooltip("Сокровище Дикого рубежа #1", {direction: 'top'});
	icons = new L.marker([-16360, 16156], {icon: icon_treasure}).addTo(treasureicons).bindPopup('Сокровище Дикого рубежа #2<br><a id="single_18" href="css/images/treasure/tre_savage_map2.jpg" title="Сокровище Дикого рубежа #2"><img src="css/images/treasure/s/tre_savage_map2.jpg" style="width: 300px;" alt=""/></a><br><div style="font-size: 10pt;">(Нажмите на скриншот для увеличения)</div>').bindTooltip("Сокровище Дикого рубежа #2", {direction: 'top'});
	icons = new L.marker([27944, 32254], {icon: icon_treasure}).addTo(treasureicons).bindPopup('Сокровище Дикого рубежа #3<br><a id="single_19" href="css/images/treasure/tre_savage_map3.jpg" title="Сокровище Дикого рубежа #3"><img src="css/images/treasure/s/tre_savage_map3.jpg" style="width: 300px;" alt=""/></a><br><div style="font-size: 10pt;">(Нажмите на скриншот для увеличения)</div>').bindTooltip("Сокровище Дикого рубежа #3", {direction: 'top'});
	icons = new L.marker([-62224, 36779], {icon: icon_treasure}).addTo(treasureicons).bindPopup('Сокровище Дикого рубежа #4<br><a id="single_20" href="css/images/treasure/tre_savage_map4.jpg" title="Сокровище Дикого рубежа #4"><img src="css/images/treasure/s/tre_savage_map4.jpg" style="width: 300px;" alt=""/></a><br><div style="font-size: 10pt;">(Нажмите на скриншот для увеличения)</div>').bindTooltip("Сокровище Дикого рубежа #4", {direction: 'top'});
	icons = new L.marker([-47051, 33260], {icon: icon_treasure}).addTo(treasureicons).bindPopup('Сокровище Дикого рубежа #5<br><a id="single_21" href="css/images/treasure/tre_savage_map5.jpg" title="Сокровище Дикого рубежа #5"><img src="css/images/treasure/s/tre_savage_map5.jpg" style="width: 300px;" alt=""/></a><br><div style="font-size: 10pt;">(Нажмите на скриншот для увеличения)</div>').bindTooltip("Сокровище Дикого рубежа #5", {direction: 'top'});
	icons = new L.marker([176659, 56127], {icon: icon_treasure}).addTo(treasureicons).bindPopup('Сокровище Дикого рубежа #6<br><a id="single_22" href="css/images/treasure/tre_savage_map6.jpg" title="Сокровище Дикого рубежа #6"><img src="css/images/treasure/s/tre_savage_map6.jpg" style="width: 300px;" alt=""/></a><br><div style="font-size: 10pt;">(Нажмите на скриншот для увеличения)</div>').bindTooltip("Сокровище Дикого рубежа #6", {direction: 'top'});
	icons = new L.marker([-124896, 61745], {icon: icon_treasure}).addTo(treasureicons).bindPopup('Сокровище Дикого рубежа #7<br><a id="single_23" href="css/images/treasure/tre_savage_map7.jpg" title="Сокровище Дикого рубежа #7"><img src="css/images/treasure/s/tre_savage_map7.jpg" style="width: 300px;" alt=""/></a><br><div style="font-size: 10pt;">(Нажмите на скриншот для увеличения)</div>').bindTooltip("Сокровище Дикого рубежа #7", {direction: 'top'});
	icons = new L.marker([30560, 66572], {icon: icon_treasure}).addTo(treasureicons).bindPopup('Сокровище Дикого рубежа #8<br><a id="single_24" href="css/images/treasure/tre_savage_map8.jpg" title="Сокровище Дикого рубежа #8"><img src="css/images/treasure/s/tre_savage_map8.jpg" style="width: 300px;" alt=""/></a><br><div style="font-size: 10pt;">(Нажмите на скриншот для увеличения)</div>').bindTooltip("Сокровище Дикого рубежа #8", {direction: 'top'});
	icons = new L.marker([42795, 98820], {icon: icon_treasure}).addTo(treasureicons).bindPopup('Сокровище Дикого рубежа #9<br><a id="single_25" href="css/images/treasure/tre_savage_map9.jpg" title="Сокровище Дикого рубежа #9"><img src="css/images/treasure/s/tre_savage_map9.jpg" style="width: 300px;" alt=""/></a><br><div style="font-size: 10pt;">(Нажмите на скриншот для увеличения)</div>').bindTooltip("Сокровище Дикого рубежа #9", {direction: 'top'});
	icons = new L.marker([180168, 150924], {icon: icon_treasure}).addTo(treasureicons).bindPopup('Сокровище Дикого рубежа #10<br><a id="single_26" href="css/images/treasure/tre_savage_map10.jpg" title="Сокровище Дикого рубежа #10"><img src="css/images/treasure/s/tre_savage_map10.jpg" style="width: 300px;" alt=""/></a><br><div style="font-size: 10pt;">(Нажмите на скриншот для увеличения)</div>').bindTooltip("Сокровище Дикого рубежа #10", {direction: 'top'});
	icons = new L.marker([-129577, 130433], {icon: icon_treasure}).addTo(treasureicons).bindPopup('Сокровище Клюквенного болота #1<br><a id="single_27" href="css/images/treasure/tre_cranberry_map1.jpg" title="Сокровище Клюквенного болота #1"><img src="css/images/treasure/s/tre_cranberry_map1.jpg" style="width: 300px;" alt=""/></a><br><div style="font-size: 10pt;">(Нажмите на скриншот для увеличения)</div>').bindTooltip("Сокровище Клюквенного болота #1", {direction: 'top'});
	icons = new L.marker([-88259, 157542], {icon: icon_treasure}).addTo(treasureicons).bindPopup('Сокровище Клюквенного болота #2<br><a id="single_28" href="css/images/treasure/tre_cranberry_map2.jpg" title="Сокровище Клюквенного болота #2"><img src="css/images/treasure/s/tre_cranberry_map2.jpg" style="width: 300px;" alt=""/></a><br><div style="font-size: 10pt;">(Нажмите на скриншот для увеличения)</div>').bindTooltip("Сокровище Клюквенного болота #2", {direction: 'top'});
	icons = new L.marker([-176662, 175651], {icon: icon_treasure}).addTo(treasureicons).bindPopup('Сокровище Клюквенного болота #3<br><a id="single_29" href="css/images/treasure/tre_cranberry_map3.jpg" title="Сокровище Клюквенного болота #3"><img src="css/images/treasure/s/tre_cranberry_map3.jpg" style="width: 300px;" alt=""/></a><br><div style="font-size: 10pt;">(Нажмите на скриншот для увеличения)</div>').bindTooltip("Сокровище Клюквенного болота #3", {direction: 'top'});
	icons = new L.marker([-89122, 192578], {icon: icon_treasure}).addTo(treasureicons).bindPopup('Сокровище Клюквенного болота #4<br><a id="single_30" href="css/images/treasure/tre_cranberry_map4.jpg" title="Сокровище Клюквенного болота #4"><img src="css/images/treasure/s/tre_cranberry_map4.jpg" style="width: 300px;" alt=""/></a><br><div style="font-size: 10pt;">(Нажмите на скриншот для увеличения)</div>').bindTooltip("Сокровище Клюквенного болота #4", {direction: 'top'});
	icons = new L.marker([111464, 140590], {icon: icon_treasure}).addTo(treasureicons).bindPopup('Сокровище Топи #1<br><a id="single_31" href="css/images/treasure/tre_mire_map1.jpg" title="Сокровище Топи #1"><img src="css/images/treasure/s/tre_mire_map1.jpg" style="width: 300px;" alt=""/></a><br><div style="font-size: 10pt;">(Нажмите на скриншот для увеличения)</div>').bindTooltip("Сокровище Топи #1", {direction: 'top'});
	icons = new L.marker([-26589, 142882], {icon: icon_treasure}).addTo(treasureicons).bindPopup('Сокровище Топи #2<br><a id="single_32" href="css/images/treasure/tre_mire_map2.jpg" title="Сокровище Топи #2"><img src="css/images/treasure/s/tre_mire_map2.jpg" style="width: 300px;" alt=""/></a><br><div style="font-size: 10pt;">(Нажмите на скриншот для увеличения)</div>').bindTooltip("Сокровище Топи #2", {direction: 'top'});
	icons = new L.marker([18416, 160578], {icon: icon_treasure}).addTo(treasureicons).bindPopup('Сокровище Топи #3<br><a id="single_33" href="css/images/treasure/tre_mire_map3.jpg" title="Сокровище Топи #3"><img src="css/images/treasure/s/tre_mire_map3.jpg" style="width: 300px;" alt=""/></a><br><div style="font-size: 10pt;">(Нажмите на скриншот для увеличения)</div>').bindTooltip("Сокровище Топи #3", {direction: 'top'});
	icons = new L.marker([78368, 175781], {icon: icon_treasure}).addTo(treasureicons).bindPopup('Сокровище Топи #4<br><a id="single_34" href="css/images/treasure/tre_mire_map4.jpg" title="Сокровище Топи #4"><img src="css/images/treasure/s/tre_mire_map4.jpg" style="width: 300px;" alt=""/></a><br><div style="font-size: 10pt;">(Нажмите на скриншот для увеличения)</div>').bindTooltip("Сокровище Топи #4", {direction: 'top'});
	icons = new L.marker([104687, 181776], {icon: icon_treasure}).addTo(treasureicons).bindPopup('Сокровище Топи #5<br><a id="single_35" href="css/images/treasure/tre_mire_map5.jpg" title="Сокровище Топи #5"><img src="css/images/treasure/s/tre_mire_map5.jpg" style="width: 300px;" alt=""/></a><br><div style="font-size: 10pt;">(Нажмите на скриншот для увеличения)</div>').bindTooltip("Сокровище Топи #5", {direction: 'top'});
	}
	else {
		treasureicons.clearLayers();
	}
}

