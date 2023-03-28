var main_btn_image = document.getElementById('main_btn_image');

main_btn_image.addEventListener('click', function(e) {
	var figure = document.createElement('figure');
	var image = document.createElement('img');

	image.src = e.target.src;

	figure.appendChild(image);

	// Ouvre une nouvelle modale
	openModal(figure);
})


function openModal(content) {
	// Variables
	var randomId = generateRandomId();
	var body = document.getElementsByTagName('body')[0];

	var modale = document.createElement('div'); // La fenêtre global
	var close_btn = document.createElement('button'); // Fermeture de la modale

	var modale_content = document.createElement('div'); // La partie visible (en blanc) qui contient header & main
	var modale_header = document.createElement('header'); // Le bouton de fermeture est intégré ici
	var modale_main = document.createElement('main'); // Le contenu envoyé dans la fonction est ici


	modale.id = 'modale_' + randomId;
	modale.classList.add('modale');

	modale_content.classList.add('main');

	modale_header.appendChild(close_btn)

	modale_content.appendChild(modale_header);
	modale_main.appendChild(content);
	modale_content.appendChild(modale_main);

	modale.appendChild(modale_content);

	close_btn.id = 'close_' + randomId;


	body.appendChild(modale); // Intègre dans le body la modale

	close_btn.classList.add('fa-solid', 'fa-xmark', 'close_btn');
	close_btn.addEventListener('click', function() {
		closeModal(randomId);
	});

	/*
		Voici le schéma que ça a une fois créé :

		<div id="modale_{id}" class="modale">
			<header>
				<button id="close_{id}" class="fa-solid fa-xmark close_btn"></button>
			</header>

			<main>
				{{content}}
			</main>
		</div>
	*/
}

function closeModal(id) {
	document.getElementById('modale_' + id).remove();
}


function generateRandomId() {
	var min = 10000, max = 80000;

	return Math.floor(Math.random() * (max - min)) + min;
}