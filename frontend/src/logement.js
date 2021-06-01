const logements = [
    {
        id: 1,
        name: "Chambre Double Supérieure",
        prix: 745,
        superficie: 28,
        type: "chambre",
        nombreDePersonne: 2,
        nombreDeLits: 1,
        litDouble: true,
        options: {
            jardin: true,
            ville:  false,
            climatisation: true,
            wifi: true,
            miniBar: true,
            television: true,
            balcone: true,
            parking: true
        },
        disponibilite: 12,
        optionNourriture : {
            petitDejeuner: true,
            Dejeuner: false,
            dinner:true
        },
        img1: '../assets/ChambreDoubleSuperieure/1.jpg',
        img2: '../assets/ChambreDoubleSuperieure/2.jpg',
        img3: '../assets/ChambreDoubleSuperieure/3.jpg',
    },
    {
        id: 2,
        name: "Chambre Exécutive",
        prix: 1051,
        superficie: 30,
        type: "chambre",
        nombreDePersonne: 1,
        nombreDeLits: 1,
        litDouble: true,
        options: {
            jardin: true,
            ville:  false,
            climatisation: true,
            wifi: true,
            miniBar: true,
            television: true,
            balcone: true,
            parking: true
        },
        disponibilite: 5,
        optionNourriture : {
            petitDejeuner: true,
            Dejeuner: false,
            dinner:true
        },
        img1: '../assets/ChambreExecutive/1.jpg',
        img2: '../assets/ChambreExecutive/2.jpg',
        img3: '../assets/ChambreExecutive/3.jpg',
    },
    {
        id: 3,
        name: "Suite Junior",
        prix: 1255,
        superficie: 37,
        type: "suite",
        nombreDePersonne: 2,
        nombreDeLits: 1,
        litDouble: true,
        options: {
            jardin: true,
            ville:  false,
            climatisation: true,
            wifi: true,
            miniBar: true,
            television: true,
            balcone: true,
            parking: true
        },
        disponibilite: 2,
        optionNourriture : {
            petitDejeuner: true,
            Dejeuner: false,
            dinner:true
        },
        img1: '../assets/SuiteJunior/1.jpg',
        img2: '../assets/SuiteJunior/2.jpg',
        img3: '../assets/SuiteJunior/3.jpg',
    },
    {
        id: 4,
        name: "Suite Deluxe",
        prix: 2159,
        superficie: 43,
        type: "suite",
        nombreDePersonne: 2,
        nombreDeLits: 1,
        litDouble: true,
        options: {
            jardin: true,
            ville:  false,
            climatisation: true,
            wifi: true,
            miniBar: true,
            television: true,
            balcone: true,
            parking: true
        },
        disponibilite: 2,
        optionNourriture : {
            petitDejeuner: true,
            Dejeuner: false,
            dinner:true
        },
        img1: '../assets/SuiteDeluxe/1.jpg',
        img2: '../assets/SuiteDeluxe/2.jpg',
        img3: '../assets/SuiteDeluxe/3.jpg',
    },
    {
        id: 5,
        name: "Chambre Double",
        prix: 453,
        superficie: 20,
        type: "chambre",
        nombreDePersonne: 2,
        nombreDeLits: 1,
        litDouble: true,
        options: {
            jardin: false,
            ville:  false,
            climatisation: true,
            wifi: true,
            miniBar: false,
            television: true,
            balcone: false,
            parking: false
        },
        disponibilite: 5,
        optionNourriture : {
            petitDejeuner: true,
            Dejeuner: false,
            dinner:false
        },
        img1: '../assets/ChambreDouble/1.jpg',
        img2: '../assets/ChambreDouble/2.jpg',
        img3: '../assets/ChambreDouble/3.jpg',
    },
    {
        id: 6,
        name: "Chambre Lits Jumeaux",
        prix: 473,
        superficie: 14,
        type: "chambre",
        nombreDePersonne: 2,
        nombreDeLits: 2,
        litDouble: false,
        options: {
            jardin: false,
            ville:  true,
            climatisation: true,
            wifi: true,
            miniBar: false,
            television: true,
            balcone: false,
            parking: false
        },
        disponibilite: 5,
        optionNourriture : {
            petitDejeuner: true,
            Dejeuner: false,
            dinner:false
        },
        img1: '../assets/ChambreLitsJumeaux/1.jpg',
        img2: '../assets/ChambreLitsJumeaux/2.jpg',
        img3: '../assets/ChambreLitsJumeaux/3.jpg',
    },
    {
        id: 7,
        name: "Chambre Simple avec Douche",
        prix: 300,
        superficie: 20,
        type: "chambre",
        nombreDePersonne: 1,
        nombreDeLits: 1,
        litDouble: false,
        options: {
            jardin: false,
            ville:  true,
            climatisation: true,
            wifi: true,
            miniBar: false,
            television: true,
            balcone: false,
            parking: false
        },
        disponibilite: 5,
        optionNourriture : {
            petitDejeuner: true,
            Dejeuner: false,
            dinner:false
        },
        img1: '../assets/ChambreSimpleAvecDouche/1.jpg',
        img2: '../assets/ChambreSimpleAvecDouche/2.jpg',
        img3: '../assets/ChambreSimpleAvecDouche/3.jpg',
    }
]
export default logements

/* [
    {
        name: "Chambre Double Supérieure",
        prix: 745,
        superficie: 28,
        type: "chambre",
        nombreDePersonne: 2,
        nombreDeLits: 1,
        litDouble: true,
        options: {
            jardin: true,
            ville:  false,
            climatisation: true,
            wifi: true,
            miniBar: true,
            television: true,
            balcone: true,
            parking: true
        },
        disponibilite: 12,
        optionNourriture : {
            petitDejeuner: true,
            Dejeuner: false,
            dinner:true
        },
        img1: '../assets/ChambreDoubleSuperieure/1.jpg',
        img2: '../assets/ChambreDoubleSuperieure/2.jpg',
        img3: '../assets/ChambreDoubleSuperieure/3.jpg',
    },
    {
        name: "Chambre Exécutive",
        prix: 1051,
        superficie: 30,
        type: "chambre",
        nombreDePersonne: 1,
        nombreDeLits: 1,
        litDouble: true,
        options: {
            jardin: true,
            ville:  false,
            climatisation: true,
            wifi: true,
            miniBar: true,
            television: true,
            balcone: true,
            parking: true
        },
        disponibilite: 5,
        optionNourriture : {
            petitDejeuner: true,
            Dejeuner: false,
            dinner:true
        },
        img1: '../assets/ChambreExecutive/1.jpg',
        img2: '../assets/ChambreExecutive/2.jpg',
        img3: '../assets/ChambreExecutive/3.jpg',
    },
    {
        name: "Suite Junior",
        prix: 1255,
        superficie: 37,
        type: "suite",
        nombreDePersonne: 2,
        nombreDeLits: 1,
        litDouble: true,
        options: {
            jardin: true,
            ville:  false,
            climatisation: true,
            wifi: true,
            miniBar: true,
            television: true,
            balcone: true,
            parking: true
        },
        disponibilite: 2,
        optionNourriture : {
            petitDejeuner: true,
            Dejeuner: false,
            dinner:true
        },
        img1: '../assets/SuiteJunior/1.jpg',
        img2: '../assets/SuiteJunior/2.jpg',
        img3: '../assets/SuiteJunior/3.jpg',
    },
    {
        name: "Suite Deluxe",
        prix: 2159,
        superficie: 43,
        type: "suite",
        nombreDePersonne: 2,
        nombreDeLits: 1,
        litDouble: true,
        options: {
            jardin: true,
            ville:  false,
            climatisation: true,
            wifi: true,
            miniBar: true,
            television: true,
            balcone: true,
            parking: true
        },
        disponibilite: 2,
        optionNourriture : {
            petitDejeuner: true,
            Dejeuner: false,
            dinner:true
        },
        img1: '../assets/SuiteDeluxe/1.jpg',
        img2: '../assets/SuiteDeluxe/2.jpg',
        img3: '../assets/SuiteDeluxe/3.jpg',
    },
    {
        name: "Chambre Double",
        prix: 453,
        superficie: 20,
        type: "chambre",
        nombreDePersonne: 2,
        nombreDeLits: 1,
        litDouble: true,
        options: {
            jardin: false,
            ville:  false,
            climatisation: true,
            wifi: true,
            miniBar: false,
            television: true,
            balcone: false,
            parking: false
        },
        disponibilite: 5,
        optionNourriture : {
            petitDejeuner: true,
            Dejeuner: false,
            dinner:false
        },
        img1: '../assets/ChambreDouble/1.jpg',
        img2: '../assets/ChambreDouble/2.jpg',
        img3: '../assets/ChambreDouble/3.jpg',
    },
    {
        name: "Chambre Lits Jumeaux",
        prix: 473,
        superficie: 14,
        type: "chambre",
        nombreDePersonne: 2,
        nombreDeLits: 2,
        litDouble: false,
        options: {
            jardin: false,
            ville:  true,
            climatisation: true,
            wifi: true,
            miniBar: false,
            television: true,
            balcone: false,
            parking: false
        },
        disponibilite: 5,
        optionNourriture : {
            petitDejeuner: true,
            Dejeuner: false,
            dinner:false
        },
        img1: '../assets/ChambreLitsJumeaux/1.jpg',
        img2: '../assets/ChambreLitsJumeaux/2.jpg',
        img3: '../assets/ChambreLitsJumeaux/3.jpg',
    },
    {
        name: "Chambre Simple avec Douche",
        prix: 300,
        superficie: 20,
        type: "chambre",
        nombreDePersonne: 1,
        nombreDeLits: 1,
        litDouble: false,
        options: {
            jardin: false,
            ville:  true,
            climatisation: true,
            wifi: true,
            miniBar: false,
            television: true,
            balcone: false,
            parking: false
        },
        disponibilite: 5,
        optionNourriture : {
            petitDejeuner: true,
            Dejeuner: false,
            dinner:false
        },
        img1: '../assets/ChambreSimpleAvecDouche/1.jpg',
        img2: '../assets/ChambreSimpleAvecDouche/2.jpg',
        img3: '../assets/ChambreSimpleAvecDouche/3.jpg',
    }
] */













































/* 
const logements = [
    {

        name: "Chambre Double Supérieure",
        prix: 745,
        superficie: 28,
        type: "chambre",
        nombreDePersonne: 2,
        nombreDeLits: 1,
        litDouble: true,
        options: {
            jardin: true,
            ville:  false,
            climatisation: true,
            wifi: true,
            miniBar: true,
            television: true,
            balcone: true,
        },
        disponibilite: 12,
        optionNourriture : {
            petitDejeuner: true,
            Dejeuner: false,
            dinner:true
        }
    },
    {

        name: "Chambre Exécutive",
        prix: 1051,
        superficie: 30,
        type: "chambre",
        nombreDePersonne: 1,
        nombreDeLits: 1,
        litDouble: true,
        options: {
            jardin: true,
            ville:  false,
            climatisation: true,
            wifi: true,
            miniBar: true,
            television: true,
            balcone: true,
        },
        disponibilite: 5,
        optionNourriture : {
            petitDejeuner: true,
            Dejeuner: false,
            dinner:true
        }
    },
    {

        name: "Suite Junior",
        prix: 1255,
        superficie: 37,
        type: "suite",
        nombreDePersonne: 2,
        nombreDeLits: 1,
        litDouble: true,
        options: {
            jardin: true,
            ville:  false,
            climatisation: true,
            wifi: true,
            miniBar: true,
            television: true,
            balcone: true,
        },
        disponibilite: 2,
        optionNourriture : {
            petitDejeuner: true,
            Dejeuner: false,
            dinner:true
        }
    },
    {

        name: "Suite Deluxe",
        prix: 2159,
        superficie: 43,
        type: "suite",
        nombreDePersonne: 2,
        nombreDeLits: 1,
        litDouble: true,
        options: {
            jardin: true,
            ville:  false,
            climatisation: true,
            wifi: true,
            miniBar: true,
            television: true,
            balcone: true,
        },
        disponibilite: 2,
        optionNourriture : {
            petitDejeuner: true,
            Dejeuner: false,
            dinner:true
        }
    },
    {

        name: "Chambre Double",
        prix: 453,
        superficie: 20,
        type: "chambre",
        nombreDePersonne: 2,
        nombreDeLits: 1,
        litDouble: true,
        options: {
            jardin: false,
            ville:  false,
            climatisation: true,
            wifi: true,
            miniBar: false,
            television: true,
            balcone: false,
        },
        disponibilite: 5,
        optionNourriture : {
            petitDejeuner: true,
            Dejeuner: false,
            dinner:false
        }
    },
    {

        name: "Chambre Lits Jumeaux",
        prix: 473,
        superficie: 14,
        type: "chambre",
        nombreDePersonne: 2,
        nombreDeLits: 2,
        litDouble: false,
        options: {
            jardin: false,
            ville:  true,
            climatisation: true,
            wifi: true,
            miniBar: false,
            television: true,
            balcone: false,
        },
        disponibilite: 5,
        optionNourriture : {
            petitDejeuner: true,
            Dejeuner: false,
            dinner:false
        }
    },
    {

        name: "Chambre Simple avec Douche",
        prix: 300,
        superficie: 20,
        type: "chambre",
        nombreDePersonne: 1,
        nombreDeLits: 1,
        litDouble: false,
        options: {
            jardin: false,
            ville:  true,
            climatisation: true,
            wifi: true,
            miniBar: false,
            television: true,
            balcone: false,
        },
        disponibilite: 5,
        optionNourriture : {
            petitDejeuner: true,
            Dejeuner: false,
            dinner:false
        }
    }
]
 */