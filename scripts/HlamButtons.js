function HlamButtons() {
	var btn, inp, sp, mot;
	for (i=1; i < 693; i++) {
		btn=document.createElement("LABEL");
		btn.classList.add('switch','switch2');
		inp = document.createElement("INPUT");
		inp.type = "checkbox";
		inp.id = "Hlam"+i+"Button";
		inp.setAttribute("onchange","Hlam"+i+"OnOff()");
		inp.autocomplete = "off";
		btn.appendChild(inp);
		sp = document.createElement("SPAN");
		sp.classList.add('slider');
		btn.appendChild(sp);
		mot = document.getElementById("box_h_b");
		mot.appendChild(btn);
	}
};
