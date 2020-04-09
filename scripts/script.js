insert_html("./elements/header.html", "header");
insert_html("./elements/footer.html", "footer");

function insert_html(text_from, insert_to) {
	fetch(text_from)
		.then(response => {
			return response.text()
		})
		.then(data => {
			document.querySelector(insert_to).innerHTML = data;
		});
}
