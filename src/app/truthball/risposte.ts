const risposte = [
    {
        id: 1,
        risp: "Sì",
        testo: "Sì, la vita è complicata e con Wordpress è ancora peggio"
    },
    {
        id: 2,
        risp: "No",
        testo: "No, Wordpress non è la risposta ai tuoi problemi"
    },
    {
        id: 3,
        risp: "Sì",
        testo: "Sì, Con Magento è tutto più complicato"
    },
    {
        id: 4,
        risp: "Si",
        testo: "Sì, Drupal fa meno schifo di Wordpress"
    },
    {
        id: 5,
        risp: "No",
        testo: "No, con Wordpress non fai più veloce e non guadagni di più"
    },
    {
        id: 6,
        risp: "Sì",
        testo: "Sì, con Wordpress avrai sempre problemi di sicurezza    "
    },
    {
        id: 7,
        risp: "Sì",
        testo: "Sì, se ti piace essere schiavo degli aggiornamenti usa Wordpress"
    },
    {
        id: 8,
        risp: "No",
        testo: "Se dopo mesi ancora non hai capito, non è colpa tua, è Magento che è un casino "
    },
    {
        id: 9,
        risp: "Sì",
        testo: "Se vuoi una interfaccia orrenda, usa Drupal"
    },


]

function getRisposte() {

    const randomNumber = Math.floor(Math.random() * risposte.length);

    return risposte[randomNumber];
}

export default getRisposte;