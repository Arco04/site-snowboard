document.addEventListener("DOMContentLoaded", () => {
    const addToCartButtons = document.querySelectorAll(".product button");
    
    addToCartButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const productName = e.target.closest(".product").querySelector("h3").innerText;
            console.log(`Aggiunto al carrello: ${productName}`);
            // Puoi aggiungere ulteriori logiche per la gestione del carrello qui.
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Impedisce il normale invio del form

        // Validazione dei campi
        var email = document.getElementById("email").value;
        var name = document.getElementById("name").value;
        var phone = document.getElementById("phone").value;

        if (!validateEmail(email)) {
            alert("Inserisci un'email valida.");
            return;
        }

        if (name.trim() === "") {
            alert("Inserisci il tuo nome.");
            return;
        }

        if (!validatePhone(phone)) {
            alert("Inserisci un numero di telefono valido.");
            return;
        }

        // Invio del form se i campi sono validi
        form.submit();
    });

    // Funzione di validazione per l'email
    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    // Funzione di validazione per il numero di telefono
    function validatePhone(phone) {
        var re = /^\d{10}$/; // Formato: 10 cifre senza spazi o altri caratteri
        return re.test(phone);
    }
});