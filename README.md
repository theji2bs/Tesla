# P2018-Tesla
HETIC- H3 Clean Design Project 

Thème:
 Tesla

 Description:
 
 A faire 

Numéro d'équipe:
	- #######

Membres de l'équipe et la spécialité de chacun:

	- Louis DEBRAINE (Chef de projet, Développeur);
	- Maxime LEPAICHEUX (Développeur);
	- Elhadad MALIDI (Lead Développeur);
	- Lucas BENQUET (Design, UX/UI, Copy-Writer);
	- Gaetan VERBAERE (Design, UX/UI);
	- Weisun CHEN (Design, UX/UI);
	- Simon GAY (Design, UX/UI);


	Installation du site:

		- Cloner le dépôt git
		- Installer gulp ( en sudo si besoin est) dans le dossier : commande "npm install -g gulp"
		- Installer les dépendances dans le dossier : "npm install"
		- Lancer la commmande "gulp" pour compiler tous les fichiers sass et js
		- Ouvrez dist/index.php avec mamp

	Développement du site:

		- Lancer la tâche "gulp watch" pour compiler en live tout changement dans le sass ou le js
		- Les fichiers style se trouvent dans sass/
		- Les fichiers scripts se trouvent dans js/
	
	Pour le CSS on va utiliser SCSS ( prèsque pareil que le CSS), il faut donc voir comment ca marche pour ceux qui ne connaissent pas. 
	- Le dossier :
	 	- "vendor" contient les bibliothèques externes qu'on va utiliser ( bootstrap , jquery ...).
	 	- "dist" va contenir les fichiers finaux (c'est l'application fonctionnelle et optimisée)
	 	- "dist/css" va contenir les fichiers generé automatiquement => pas toucher ce dossier
	 	- "sass" va contenir toutes nos feuilles de styles en SASS
	 	- "dist/assets" va contenir nos images , videos, sons...

