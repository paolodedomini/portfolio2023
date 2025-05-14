const risposte = [
    {
        id: 1,
        risp: "Sì",
        testo: "Sì, ma se usi wordpress poi andrà comunque tutto male"
    },
    {
        id: 2,
        risp: "No",
        testo: "No, in ogni caso Wordpress non è la risposta ai tuoi problemi"
    },
    {
        id: 3,
        risp: "Sì",
        testo: "Sì, ma se usi Magento poi andrà comunque tutto male"
    },
    {
        id: 4,
        risp: "Si",
        testo: "Sì, ma se usi Drupal poi andrà comunque tutto male"
    },
    {
        id: 5,
        risp: "No",
        testo: "No, e poi se hai Wordpress ti bucano il sito"
    },
    {
        id: 6,
        risp: "Sì",
        testo: "Sì, succederà ma non grazie a Woocommerce"
    },
    {
        id: 7,
        risp: "Sì",
        testo: "Sì, succederà ma non grazie a Magento"
    },
    {
        id: 8,
        risp: "No",
        testo: "No, mi dispiace e poi Magento è un incubo"
    },
    {
        id: 9,
        risp: "Sì",
        testo: "Sì, succederà ma ti dimenticherai di aggiornare Wordpress"
    },
    {
        id: 10,
        risp: "Sì",
        testo: "Sì, succederà come è vero che le strade sono piene di gente che ha fatto il corso di Wordpress"
    },
    {
        id: 11,
        risp: "No",
        testo: "No, Mi dispiace ma il demone che ha creato Magento è più forte di te"
    },
    {
        id: 12,
        risp: "No",
        testo: "No, Mi dispiace... hai poi aggiornato i 160 plugin di wordpress?"
    },


]

function getRisposte() {

    const randomNumber = Math.floor(Math.random() * risposte.length);

    return risposte[randomNumber];
}

export default getRisposte;