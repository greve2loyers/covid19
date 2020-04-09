var header = document.getElementById("header");
var content_header = '' +
			'<input type="checkbox" id="sandwich">' +
			'<div id="name" class="horizontal">' +
				'<a class="title" href="https://greve2loyers.github.io/covid19">greve2loyers</a>' +
			'</div>' +
			'<nav id="nav_menu" class="horizontal">' +
				'<div>' +
					'<a class="title menu" href="#">accueil</a>' +
				'</div>' +
				'<div>' +
					'<a class="title menu" href="#">guide</a>' +
					'<div class="submenu">' +
						'<a class="title menu" href="#">auto-organisation</a>' +
						'<a class="title menu" href="#">juridique</a>' +
					'</div>' +
				'</div>' +
				'<div>' +
					'<a class="title menu" href="#">données</a>' +
					'<div class="submenu">' +
						'<a class="title menu" href="#">sociologiques</a>' +
						'<a class="title menu" href="#">historiques</a>' +
						'<a class="title menu" href="#">actuelles</a>' +
					'</div>' +
				'</div>' +
				'<div>' +
					'<a class="title menu" href="#">temoignages</a>' +
				'</div>' +
				'<div><a class="title menu" href="#">ressources</a>' +
					'<div class="submenu">' +
						'<a class="title menu" href="#">exemples de lettres</a>' +
						'<a class="title menu" href="#">tracts</a>' +
						'<a class="title menu" href="#">images</a>' +
						'<a class="title menu" href="#">liens</a>' +
					'</div>' +
				'</div>' +
				'<div>' +
					'<a class="title menu" href="#">f.a.q</a>' +
				'</div>' +
			'</nav>';
header.innerHTML=content_header;
