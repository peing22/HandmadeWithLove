"use strict"

/* Bildvidning för specifika kreationer */

// Definierar bilden som ska visas när sidan laddats in
let slideIndex = 1;

// Anropar funktion och skickar med parametern slideIndex
showSlides(slideIndex);

// Funktion för vilken bild som ska visas
function showSlides(n) {
    let i;

    // Lagrar element med klassnamn "mySlides" som en array i en variabel
    let slides = document.getElementsByClassName("mySlides");

    // Loopar genom arrayen för att dölja alla bilder
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Visar aktuell bild
    slides[slideIndex - 1].style.display = "block";

    // Lagrar element med klassnamn "demo" som en array i en variabel
    let dots = document.getElementsByClassName("demo");

    // Loopar genom arrayen för att ta bort klassen "active" på alla bildminiatyrer
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Tillskriver aktuell bildminiatyr klassen "active"
    dots[slideIndex - 1].className += " active";
}

// Funktion som anropas vid klick på bildminiatyr
function currentSlide(n) {

    // Anropar funktion och skickar med parametern slideIndex
    showSlides(slideIndex = n);
}