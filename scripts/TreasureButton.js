	var treasureicons = L.layerGroup().addTo(map);
	function TreasureOnOff() {
	var chbox;
	chbox=document.getElementById('TreasureButton');
	if (chbox.checked) {
	icons = new L.marker([66008, -177856], {icon: icon_treasure}).addTo(treasureicons).bindPopup("Лесное сокровище #1").bindTooltip("Лесное сокровище #1", {direction: 'top'});
	icons = new L.marker([-40684, -158059], {icon: icon_treasure}).addTo(treasureicons).bindPopup("Лесное сокровище #2").bindTooltip("Лесное сокровище #2", {direction: 'top'});
	icons = new L.marker([-65181, -135648], {icon: icon_treasure}).addTo(treasureicons).bindPopup("Лесное сокровище #3").bindTooltip("Лесное сокровище #3", {direction: 'top'});
	icons = new L.marker([-143726, -126027], {icon: icon_treasure}).addTo(treasureicons).bindPopup("Сокровище Шлаковой бездны #1").bindTooltip("Сокровище Шлаковой бездны #1", {direction: 'top'});
	icons = new L.marker([119820, -119683], {icon: icon_treasure}).addTo(treasureicons).bindPopup("Лесное сокровище #4").bindTooltip("Лесное сокровище #4", {direction: 'top'});
	icons = new L.marker([-49725, -122167], {icon: icon_treasure}).addTo(treasureicons).bindPopup("Лесное сокровище #5").bindTooltip("Лесное сокровище #5", {direction: 'top'});
	icons = new L.marker([-81483, -101486], {icon: icon_treasure}).addTo(treasureicons).bindPopup("Сокровище Шлаковой бездны #7").bindTooltip("Сокровище Шлаковой бездны #7", {direction: 'top'});
	icons = new L.marker([48992, -81548], {icon: icon_treasure}).addTo(treasureicons).bindPopup("Лесное сокровище #6").bindTooltip("Лесное сокровище #6", {direction: 'top'});
	icons = new L.marker([-84171, -78384], {icon: icon_treasure}).addTo(treasureicons).bindPopup("Лесное сокровище #7").bindTooltip("Лесное сокровище #7", {direction: 'top'});
	icons = new L.marker([150060, -77637], {icon: icon_treasure}).addTo(treasureicons).bindPopup("Сокровище Ядовитой долины #1").bindTooltip("Сокровище Ядовитой долины #1", {direction: 'top'});
	icons = new L.marker([72407, -41079], {icon: icon_treasure}).addTo(treasureicons).bindPopup("Лесное сокровище #8").bindTooltip("Лесное сокровище #8", {direction: 'top'});
	icons = new L.marker([-24995, -41273], {icon: icon_treasure}).addTo(treasureicons).bindPopup("Лесное сокровище #9").bindTooltip("Лесное сокровище #9", {direction: 'top'});
	icons = new L.marker([163443, -31294], {icon: icon_treasure}).addTo(treasureicons).bindPopup("Сокровище Ядовитой долины #2").bindTooltip("Сокровище Ядовитой долины #2", {direction: 'top'});
	icons = new L.marker([43075, -25714], {icon: icon_treasure}).addTo(treasureicons).bindPopup("Лесное сокровище #10").bindTooltip("Лесное сокровище #10", {direction: 'top'});
	icons = new L.marker([-157138, -8329], {icon: icon_treasure}).addTo(treasureicons).bindPopup("Сокровище Дикого рубежа #1").bindTooltip("Сокровище Дикого рубежа #1", {direction: 'top'});
	icons = new L.marker([134711, 5849], {icon: icon_treasure}).addTo(treasureicons).bindPopup("Сокровище Ядовитой долины #3").bindTooltip("Сокровище Ядовитой долины #3", {direction: 'top'});
	icons = new L.marker([-16360, 16156], {icon: icon_treasure}).addTo(treasureicons).bindPopup("Сокровище Дикого рубежа #2").bindTooltip("Сокровище Дикого рубежа #2", {direction: 'top'});
	icons = new L.marker([192093, 26592], {icon: icon_treasure}).addTo(treasureicons).bindPopup("Сокровище Ядовитой долины #4").bindTooltip("Сокровище Ядовитой долины #4", {direction: 'top'});
	icons = new L.marker([27944, 32254], {icon: icon_treasure}).addTo(treasureicons).bindPopup("Сокровище Дикого рубежа #3").bindTooltip("Сокровище Дикого рубежа #3", {direction: 'top'});
	icons = new L.marker([-62224, 36779], {icon: icon_treasure}).addTo(treasureicons).bindPopup("Сокровище Дикого рубежа #4").bindTooltip("Сокровище Дикого рубежа #4", {direction: 'top'});
	icons = new L.marker([-47051, 33260], {icon: icon_treasure}).addTo(treasureicons).bindPopup("Сокровище Дикого рубежа #5").bindTooltip("Сокровище Дикого рубежа #5", {direction: 'top'});
	icons = new L.marker([176659, 56127], {icon: icon_treasure}).addTo(treasureicons).bindPopup("Сокровище Дикого рубежа #6").bindTooltip("Сокровище Дикого рубежа #6", {direction: 'top'});
	icons = new L.marker([-124896, 61745], {icon: icon_treasure}).addTo(treasureicons).bindPopup("Сокровище Дикого рубежа #7").bindTooltip("Сокровище Дикого рубежа #7", {direction: 'top'});
	icons = new L.marker([30560, 66572], {icon: icon_treasure}).addTo(treasureicons).bindPopup("Сокровище Дикого рубежа #8").bindTooltip("Сокровище Дикого рубежа #8", {direction: 'top'});
	icons = new L.marker([42795, 98820], {icon: icon_treasure}).addTo(treasureicons).bindPopup("Сокровище Дикого рубежа #9").bindTooltip("Сокровище Дикого рубежа #9", {direction: 'top'});
	icons = new L.marker([-129577, 130433], {icon: icon_treasure}).addTo(treasureicons).bindPopup("Сокровище Клюквенного болота #1").bindTooltip("Сокровище Клюквенного болота #1", {direction: 'top'});
	icons = new L.marker([111464, 140590], {icon: icon_treasure}).addTo(treasureicons).bindPopup("Сокровище Топи #1").bindTooltip("Сокровище Топи #1", {direction: 'top'});
	icons = new L.marker([-26589, 142882], {icon: icon_treasure}).addTo(treasureicons).bindPopup("Сокровище Топи #2").bindTooltip("Сокровище Топи #2", {direction: 'top'});
	icons = new L.marker([180168, 150924], {icon: icon_treasure}).addTo(treasureicons).bindPopup("Сокровище Дикого рубежа #10").bindTooltip("Сокровище Дикого рубежа #10", {direction: 'top'});
	icons = new L.marker([-88259, 157542], {icon: icon_treasure}).addTo(treasureicons).bindPopup("Сокровище Клюквенного болота #2").bindTooltip("Сокровище Клюквенного болота #2", {direction: 'top'});
	icons = new L.marker([18416, 160578], {icon: icon_treasure}).addTo(treasureicons).bindPopup("Сокровище Топи #3").bindTooltip("Сокровище Топи #3", {direction: 'top'});
	icons = new L.marker([78368, 175781], {icon: icon_treasure}).addTo(treasureicons).bindPopup("Сокровище Топи #4").bindTooltip("Сокровище Топи #4", {direction: 'top'});
	icons = new L.marker([-176662, 175651], {icon: icon_treasure}).addTo(treasureicons).bindPopup("Сокровище Клюквенного болота #3").bindTooltip("Сокровище Клюквенного болота #3", {direction: 'top'});
	icons = new L.marker([104687, 181776], {icon: icon_treasure}).addTo(treasureicons).bindPopup("Сокровище Топи #5").bindTooltip("Сокровище Топи #5", {direction: 'top'});
	icons = new L.marker([-89122, 192578], {icon: icon_treasure}).addTo(treasureicons).bindPopup("Сокровище Клюквенного болота #4").bindTooltip("Сокровище Клюквенного болота #4", {direction: 'top'});
	}
	else {
		treasureicons.clearLayers();
	}
}