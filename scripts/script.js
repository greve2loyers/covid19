insert_html("./elements/header.html", "header");
insert_html("./elements/footer.html", "footer");
let _desc = "ce site relaie l'appel à la grève qui apparaît partout dans le monde depuis le début de la crise sanitaire du covid19, en ajoutant ses propres ressources et en listant le plus possibles les autres appels et ressources proposées ailleurs sur internet";
_desc = "test test"
insert_description(_desc);

function insert_html(text_from, insert_to) {
	fetch(text_from)
		.then(response => {
			return response.text()
		})
		.then(data => {
			document.querySelector(insert_to).innerHTML = data;
		});
}

function insert_description(_desc) {
	document.querySelector('meta[name="description"]').setAttribute("content", _desc);
}

