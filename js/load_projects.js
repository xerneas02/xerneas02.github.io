const projects = [

// #################### FRENCH ####################

    {
        "date": "2024-02-01",
        "title": "Rocket League Bot",
        "description": "Projet de deuxième année à l'ISIMA, devlopper un agent en machine learning capable de jouer à Rocket League.",
        "image": "./assets/images/RocketBot.jpg",
        "link": "./rocketLeague.html",
        "language": "fr"
    },
    {
        "date": "2022-02-01",
        "title": "Carte Pokemon RA",
        "description": "Projet permettant de créer facilement des cartes Pokémon en réalité augmentée.",
        "image": "./assets/images/projet1.jpg",
        "link": "./PokemonAR.html",
        "language": "fr"
    },
    {
        "date": "2022-05-01",
        "title": "Pizzle Bubble",
        "description": "Projet de Prepa'ISIMA 2. Un jeu basé sur le principe du jeu Puzzle bubble.",
        "image": "./assets/images/projet5.png",
        "link": "./pizzleBubble.html",
        "language": "fr"
    },
    {
        "date": "2021-04-01",
        "title": "Bot Instagram",
        "description": "Création d'un compte instagram qui poste quotidiennement des photos 360° depuis google street view.",
        "image": "./assets/images/projet3.jpg",
        "link": "./botInstagram.html",
        "language": "fr"
    },
    {
        "date": "2021-09-01",
        "title": "Site pour une journée d'intégration",
        "description": "Création d'un site pour la journée d'intégration des Prép’ISIMA 2021-2023.",
        "image": "./assets/images/projet2.jpg",
        "link": "./integration.html",
        "language": "fr"
    },
    {
        "date": "2023-06-01",
        "title": "Travelling Spaceman",
        "description": "Projet de première année à l'ISIMA avec pour objectif de développer une intelligence artificielle apprenante pour un jeu.",
        "image": "./assets/images/projet6.jpg",
        "link": "./travellingSpaceman.html",
        "language": "fr"
    },
    {
        "date": "2022-01-01",
        "title": "Minecraft like",
        "description": "Minecraft like en Processing.",
        "image": "./assets/images/projet4.png",
        "link": "./minecraft.html",
        "language": "fr"
    },
    /*{
        "date": "2023-07-01",
        "title": "Minecraft mod Ornithorynque",
        "description": "Mod minecraft ajoutant des ornithorynque.",
        "image": "./assets/images/projet7.png",
        "link": "./minecraftMod.html",
        "language": "fr"
    },*/
    {
        "date": "2022-07-01",
        "title": "Minecraft map War Industrie",
        "description": "Une map minecraft multijoueur faite en commande blocs.",
        "image": "./assets/images/projet8.png",
        "link": "./minecraftMap.html",
        "language": "fr"
    },
    {
        "date": "2024-07-12",
        "title": "Chatbot pour l'UiT en Norvège",
        "description": "Stage pour développer un chatbot pour un programme d'études à l'UiT en Norvège.",
        "image": "./assets/images/chatbot.png",
        "link": "./chatBot.html",
        "language": "fr"
    },

// #################### ENGLISH ####################

    {
        "date": "2024-02-01",
        "title": "Rocket League Bot",
        "description": "Second-year project at ISIMA, developing a machine learning agent capable of playing Rocket League.",
        "image": "../assets/images/RocketBot.jpg",
        "link": "./rocketLeague.html",
        "language": "en"
    },
    {
        "date": "2022-02-01",
        "title": "Pokemon Card AR",
        "description": "A project allowing easy creation of Pokemon cards in augmented reality.",
        "image": "../assets/images/projet1.jpg",
        "link": "./PokemonAR.html",
        "language": "en"
    },
    {
        "date": "2022-05-01",
        "title": "Pizzle Bubble",
        "description": "Prepa'ISIMA 2 project. A game based on the principle of Puzzle Bubble.",
        "image": "../assets/images/projet5.png",
        "link": "./pizzleBubble.html",
        "language": "en"
    },
    {
        "date": "2021-04-01",
        "title": "Instagram Bot",
        "description": "Creating an Instagram account that posts daily 360° photos from Google Street View.",
        "image": "../assets/images/projet3.jpg",
        "link": "./botInstagram.html",
        "language": "en"
    },
    {
        "date": "2021-09-01",
        "title": "Site for an Integration Day",
        "description": "Creating a website for the integration day of Prép’ISIMA 2021-2023.",
        "image": "../assets/images/projet2.jpg",
        "link": "./integration.html",
        "language": "en"
    },
    {
        "date": "2023-06-01",
        "title": "Travelling Spaceman",
        "description": "First-year project at ISIMA with the aim of developing a learning artificial intelligence for a game.",
        "image": "../assets/images/projet6.jpg",
        "link": "./travellingSpaceman.html",
        "language": "en"
    },
    {
        "date": "2022-01-01",
        "title": "Minecraft like",
        "description": "Minecraft-like project in Processing.",
        "image": "../assets/images/projet4.png",
        "link": "./minecraft.html",
        "language": "en"
    },
    /*{
        "date": "2023-07-01",
        "title": "Minecraft mod Platypus",
        "description": "Minecraft mod adding Platypus.",
        "image": "../assets/images/projet7.png",
        "link": "./minecraftMod.html",
        "language": "en"
    },*/
    {
        "date": "2022-07-01",
        "title": "Minecraft map War Industry",
        "description": "A multiplayer Minecraft map made with command blocks.",
        "image": "../assets/images/projet8.png",
        "link": "./minecraftMap.html",
        "language": "en"
    },
    {
        "date": "2024-07-12",
        "title": "Chatbot for UiT in Norway",
        "description": "Internship to develop a chatbot for a study program at UiT in Norway.",
        "image": "../assets/images/chatbot.png",
        "link": "./chatBot.html",
        "language": "en"
    }
]




document.addEventListener("DOMContentLoaded", function(event) {
    const language = window.location.pathname.includes('/english/') ? 'en' : 'fr';
    const filteredProjects = projects.filter(project => project.language === language)
                                     .sort((a, b) => new Date(b.date) - new Date(a.date));

    const projectsContainer = document.getElementById('projects-container');
    let carouselItems = '';
    let activeClass = 'active';

    for (let i = 0; i < filteredProjects.length; i += 3) {
        let itemContent = '<div class="item ' + activeClass + '"><div class="row">';
        activeClass = ''; // Only the first item should be active

        filteredProjects.slice(i, i + 3).forEach(project => {
            itemContent += `
                <div class="col-sm-4">
                    <a href="${project.link}" class="black-image-project-hover">
                        <img src="${project.image}" alt="Image" class="img-responsive">
                    </a>
                    <div class="card-container">
                        <h4>${new Date(project.date).toLocaleDateString()}</h4>
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <a href="${project.link}" class="btn btn-default">Voir</a>
                    </div>
                </div>`;
        });

        itemContent += '</div></div>';
        carouselItems += itemContent;
    }

    projectsContainer.innerHTML = `
        <div id="myCarousel" class="carousel slide projects-carousel">
            <div class="carousel-inner">
                ${carouselItems}
            </div>
            <a class="left carousel-control" href="#myCarousel" data-slide="prev">‹</a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next">›</a>
        </div>`;
});