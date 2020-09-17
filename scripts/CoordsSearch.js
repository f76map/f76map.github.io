let manymarkersicons = L.layerGroup().addTo(map);
function MarkersSet() {
	manymarkersicons.clearLayers();
	let mm = eval("[" + document.getElementById('t01').value + "]");
	for (let i = 0; i < mm.length; i++) {
		if ($("input[name=coords_icon]:checked").val() == 1) {
			new L.circleMarker([mm[i][0],mm[i][1]], {pane: "top", color: "#ffff00"})
			.bindPopup("X: "+mm[i][1]+"<br>Y: "+mm[i][0])
			.bindTooltip("X: "+mm[i][1]+"<br>Y: "+mm[i][0], {direction: 'top'})
			.addTo(manymarkersicons);
		}
		if ($("input[name=coords_icon]:checked").val() == 2) {
			new L.marker([mm[i][0],mm[i][1]])
			.bindPopup("X: "+mm[i][1]+"<br>Y: "+mm[i][0])
			.bindTooltip("X: "+mm[i][1]+"<br>Y: "+mm[i][0], {direction: 'top'})
			.addTo(manymarkersicons);
		}
	}
}
function MarkersDel() {manymarkersicons.clearLayers();}
function coords_box_show() {$('#coords_fullbox').show();}
function coords_box_hide() {$('#coords_fullbox').hide();}