const questionsVariees = [
  {
    question: "1. Quel plat traditionnel toulousain est fait à base de viande de canard, de saucisse de Toulouse et de haricots blancs ?",
    choices: ["Cassoulet", "Ratatouille", "Bouillabaisse", "Canard à l'hélium"],
    correctAnswer: "Cassoulet",
    fact: "Le cassoulet est un plat emblématique de la région de Toulouse, connu pour être un plat réconfortant et copieux.",
    imgQ: "./images/Quiz/pCassoulet.jpg"
  },
  {
    question: "2. Quel célèbre peintre impressionniste français a réalisé des tableaux de Toulouse, notamment du Pont Neuf ?",
    choices: ["Vincent van Gogh", "Claude Monet", "Paul Cézanne", "Vincent Lagaf"],
    correctAnswer: "Claude Monet",
    fact: "Claude Monet a peint plusieurs toiles du Pont Neuf à Toulouse pendant son séjour dans la ville en 1875.",
    imgQ: "./images/Quiz/pPeintre1.jpg"
  },
  {
    question: "3. Quel grand événement aéronautique se tient tous les deux ans à Toulouse, mettant en avant l'industrie aérospatiale ?",
    choices: ["Le Salon de l'Auto de Toulouse", "Le Festival du Film de Toulouse", "Le Salon du Bourget", "L'Aeroscopia"],
    correctAnswer: "L'Aeroscopia",
    fact: "L'Aeroscopia est un musée aéronautique à Toulouse qui accueille également le Salon de l'Aéronautique et de l'Espace tous les deux ans.",
    imgQ: "./images/Quiz/pAvion1.jpg"
  },
  {
    question: "4. Quelle pièce de théâtre comique écrite par Molière se déroule en partie à Toulouse et met en scène un personnage avare ?",
    choices: ["Le Misanthrope", "Les Fourberies de Scapin", "L'Avare", "Tartuffe"],
    correctAnswer: "L'Avare",
    fact: "L'Avare est une comédie de Molière dont l'intrigue se déroule en partie à Toulouse, ville où résident les personnages principaux.",
    imgQ: "./images/Quiz/pMoliere.jpg"
  },
  {
    question: "5. Quel est le nom du célèbre festival musical qui se déroule chaque été dans la ville de Toulouse et attire des artistes internationaux ?",
    choices: ["Coachella", "Toulouse Music Festival", "Rio Loco", "Toulouse Rock Fest"],
    correctAnswer: "Rio Loco",
    fact: "Rio Loco est un festival de musique du monde qui se tient sur les berges de la Garonne à Toulouse et met en avant la diversité musicale.",
    imgQ: "./images/Quiz/pMusic.jpg"
  },
  {
    question: "6. Quel monument emblématique de Toulouse est surnommé 'Le Bazacle' et est un ancien moulin à eau sur la Garonne ?",
    choices: ["La Basilique Saint-Sernin", "Le Capitole", "La Wild Code School", "La Halle aux Grains"],
    correctAnswer: "La Basilique Saint-Sernin",
    fact: "La Basilique Saint-Sernin est le plus grand édifice roman en Europe et est souvent surnommée 'Le Bazacle' en référence à son histoire.",
    imgQ: "./images/Quiz/pMoulin.jpg"
  },
  {
    question: "7. Quelle équipe de rugby toulousaine est l'une des plus titrées en France et en Europe ?",
    choices: ["Toulouse Football Club", "Toulouse Pétanque Club", "Stade Toulousain", "Toulouse Racing Club"],
    correctAnswer: "Stade Toulousain",
    fact: "Le Stade Toulousain est un club de rugby à XV basé à Toulouse, et il est l'un des clubs les plus prestigieux et titrés en Europe.",
    imgQ: "./images/Quiz/pRugby.jpg"
  },
  {
    question: "8. Quelle rue de Toulouse est célèbre pour ses boutiques de joaillerie et de luxe, en faisant une destination de shopping prisée ?",
    choices: ["Rue des Boutiques", "Rue de la Bourse", "Rue Saint-Rome", "Rue Alsace-Lorraine"],
    correctAnswer: "Rue Saint-Rome",
    fact: "La Rue Saint-Rome est connue pour ses nombreuses boutiques de mode et de luxe, en particulier pour la joaillerie et les marques de luxe.",
    imgQ: "./images/Quiz/pBijoux.jpg"
  },
  {
    question: "9. Quel célèbre événement a lieu chaque année en avril à Toulouse et met en avant la culture japonaise, y compris la cuisine, la musique et l'art ?",
    choices: ["Toulouse International Film Festival", "Toulouse Game Show", "Japan Expo Toulouse", "Toulouse Comics Show"],
    correctAnswer: "Japan Expo Toulouse",
    fact: "Japan Expo Toulouse est un événement qui célèbre la culture japonaise à travers diverses activités, dont des stands de nourriture japonaise, des concerts, et des expositions d'art.",
    imgQ: "./images/Quiz/pJapon.jpg"
  },
  {
    question: "10. Quel est le nom du canal qui relie Toulouse à la mer Méditerranée et qui est célèbre pour ses écluses et son itinéraire pittoresque ?",
    choices: ["Canal de l'Ourcq", "Canal Plus", "Canal du Midi", "Canal de Garonne"],
    correctAnswer: "Canal du Midi",
    fact: "Le Canal du Midi est un site classé au patrimoine mondial de l'UNESCO et offre un magnifique itinéraire navigable à travers la région Occitanie.",
    imgQ: "./images/Quiz/pCanal.jpg"
  },
  {
    question: "11. Quelle équipe de football toulousaine a évolué en Ligue 1 et a souvent été surnommée 'Le Téfécé' ?",
    choices: ["Toulouse Futur Club", "Toulouse Football Club", "Stade Toulousain", "Toulouse Racing Club"],
    correctAnswer: "Toulouse Football Club",
    fact: "Le Toulouse Football Club, souvent surnommé 'Le Téfécé', est un club de football professionnel basé à Toulouse.",
    imgQ: "./images/Quiz/pFoot.jpg"
  },
  {
    question: "12. Quel célèbre écrivain français, auteur de 'Voyage au bout de la nuit', est né à Toulouse en 1894 ?",
    choices: ["Victor Hugo", "Marcel Proust", "Louis-Ferdinand Céline", "André Gide"],
    correctAnswer: "Louis-Ferdinand Céline",
    fact: "Louis-Ferdinand Céline, l'auteur de 'Voyage au bout de la nuit', est né à Toulouse en 1894 et a marqué la littérature française du 20e siècle.",
    imgQ: "./images/Quiz/pEcrivain.jpg"
  },
  {
    question: "13. Quelle fête traditionnelle toulousaine se déroule chaque année en septembre et met en avant la gastronomie locale ?",
    choices: ["La Fête des Chocolatines", "Le Festival International de Jazz", "La Fête de la Science", "La Fête de la Saucisse"],
    correctAnswer: "La Fête de la Saucisse",
    fact: "La Fête de la Saucisse est une célébration de la gastronomie locale à Toulouse, mettant en avant la fameuse saucisse de Toulouse.",
    imgQ: "./images/Quiz/pSaucisse.jpg"
  },
  {
    question: "14. Quel est le nom de cette viénoiserie ?",
    choices: ["Une chocolatine", "Une chocolatine", "Une chocolatine", "Une chocolatine"],
    correctAnswer: "Une chocolatine",
    fact: "Une chocolatine",
    imgQ: "./images/Quiz/Photo3.jpg"
  },
  {
    question: "15. Quelle célèbre compagnie aéronautique européenne a son siège social à Toulouse et est connue pour la fabrication d'avions civils ?",
    choices: ["Air France", "Boeing", "Airbus", "Ferrari"],
    correctAnswer: "Airbus",
    fact: "Airbus, l'un des principaux fabricants d'avions civils au monde, a son siège social à Toulouse, ce qui en fait un centre majeur de l'industrie aérospatiale.",
    imgQ: "./images/Quiz/pAvion2.jpg"
  },
  {
    question: "16. Quel célèbre écrivain français du 19e siècle a écrit le roman 'Les Trois Mousquetaires', dont une partie se déroule à Toulouse ?",
    choices: ["Victor Hugo", "Gustave Flaubert", "Alexandre Dumas", "Émile Zola"],
    correctAnswer: "Alexandre Dumas",
    fact: "Alexandre Dumas, l'auteur des 'Trois Mousquetaires', a inclus des scènes situées à Toulouse dans son roman, faisant de la ville un lieu de l'intrigue.",
    imgQ: "./images/Quiz/pMousquetaire.jpg"
  },
  {
    question: "17. Quel événement sportif annuel à Toulouse attire des passionnés de cyclisme du monde entier et propose un parcours montagneux ?",
    choices: ["Tour de France", "Tour du Monde", "Tour d'Espagne", "Paris-Roubaix"],
    correctAnswer: "Tour de France",
    fact: "Le Tour de France, l'une des courses cyclistes les plus prestigieuses au monde, passe régulièrement par Toulouse et offre des étapes montagneuses spectaculaires.",
    imgQ: "./images/Quiz/pVelo.jpg"
  },
  {
    question: "18. Quel célèbre compositeur français du 18e siècle, connu pour ses opéras et sa musique symphonique, est né à Toulouse ?",
    choices: ["Hector Berlioz", "Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "Antonio Vivaldi"],
    correctAnswer: "Hector Berlioz",
    fact: "Hector Berlioz, compositeur romantique de renom, est né à La Côte-Saint-André près de Toulouse et a laissé une empreinte durable sur la musique classique.",
    imgQ: "./images/Quiz/pOpera.jpg"
  },
  {
    question: "19. Quelle rivière traverse la ville de Toulouse avant de se jeter dans la Méditerranée ?",
    choices: ["La Méditerranée", "La Seine", "La Garonne", "Le Danube"],
    correctAnswer: "La Garonne",
    fact: "La Garonne est une importante rivière qui traverse Toulouse et se jette dans la mer Méditerranée, influençant la géographie de la région.",
    imgQ: "./images/Quiz/pRiviere.jpg"
  },
  {
    question: "20. Quel célèbre écrivain français, considéré comme le fondateur du roman de science-fiction, est né à Toulouse en 1828 ?",
    choices: ["Jules Verne", "H.G. Wells", "Isaac Asimov", "Philip K. Dick"],
    correctAnswer: "Jules Verne",
    fact: "Jules Verne, l'auteur de 'Vingt Mille Lieues sous les mers' et 'Le Tour du monde en quatre-vingts jours', est né à Toulouse et est une figure majeure de la littérature d'aventure.",
    imgQ: "./images/Quiz/pRoman.jpg"
  },
  {
    question: "21. Quel célèbre peintre français, connu pour ses œuvres impressionnistes, a passé du temps à Toulouse et a peint des scènes de la ville ?",
    choices: ["Auguste Renoir", "Édouard Manet", "Camille Pissarro", "Berthe Morisot"],
    correctAnswer: "Auguste Renoir",
    fact: "Auguste Renoir, célèbre peintre impressionniste, a visité Toulouse et a réalisé plusieurs peintures de la ville, capturant la vie urbaine et les paysages.",
    imgQ: "./images/Quiz/pPeinture.jpg"
  },
  {
    question: "22. Quelle université prestigieuse de Toulouse a été fondée en 1229 et est l'une des plus anciennes universités d'Europe ?",
    choices: ["Université de Toulouse-Jean Jaurès", "Université de Toulouse-Le Mirail", "Université de Toulouse-Capitole", "Université de Toulouse-Paul Sabatier"],
    correctAnswer: "Université de Toulouse-Capitole",
    fact: "L'Université de Toulouse-Capitole, fondée en 1229, est l'une des plus anciennes universités d'Europe et est réputée pour ses études de droit et d'économie.",
    imgQ: "./images/Quiz/pDiplome.jpg"
  },
  {
    question: "23. Quelle célèbre actrice française, connue pour ses rôles dans des films comme 'Amélie Poulain', est originaire de Toulouse ?",
    choices: ["Marion Cotillard", "Audrey Tautou", "Juliette Binoche", "Catherine Deneuve"],
    correctAnswer: "Audrey Tautou",
    fact: "Audrey Tautou, originaire de Toulouse, est une actrice talentueuse qui a joué dans de nombreux films français acclamés, dont 'Le Fabuleux Destin d'Amélie Poulain'.",
    imgQ: "./images/Quiz/pFilme.jpg"
  },
  {
    question: "24. Quel célèbre explorateur français du 16e siècle est né à Toulouse et est connu pour avoir exploré le Mississippi aux États-Unis ?",
    choices: ["Ferdinand Magellan", "Jacques Cartier", "Samuel de Champlain", "René-Robert Cavelier de La Salle"],
    correctAnswer: "René-Robert Cavelier de La Salle",
    fact: "René-Robert Cavelier de La Salle, originaire de Toulouse, est un explorateur français célèbre pour avoir exploré le Mississippi et revendiqué la Louisiane pour la France.",
    imgQ: "./images/Quiz/pBateau.jpg"
  },
  {
    question: "25. Quelle ancienne place publique au cœur de Toulouse est entourée de bâtiments historiques et est un lieu animé pour les marchés et les festivals ?",
    choices: ["Place de la Bourse", "Place Saint-Georges", "Place du Capitole", "Place de la Trinité"],
    correctAnswer: "Place du Capitole",
    fact: "La Place du Capitole est l'une des places les plus emblématiques de Toulouse, abritant l'hôtel de ville et servant de lieu central pour de nombreuses manifestations culturelles et festivités.",
    imgQ: "./images/Quiz/quiz1desktop.jfif"
  }
];
export default questionsVariees;

