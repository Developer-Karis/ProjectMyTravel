"use strict";

// Initialization of global variables
let putPrice = new Array();         // Create an Array to put all prices
let reducePrice = new Array();      // Create an Array to put the reduce prices
let displayPrice = new Array();     // Create an Array to display the new price for each destination

/**
 * Change all prices for destinations with a special promotion.
 */
function newPrice() {
    let price = document.getElementsByClassName("price");
    let newPrice = document.getElementsByClassName("newPrice");
    let getPrice = 0;
    let reducePriceAll = 0;
    let displayNewPrice = 0;
    const soldPrice = 0.25;
    for (let i = 0; i < price.length; i++) {
        // Set styles for element price
        price[i].style.color = "red";
        price[i].style.textDecoration = "line-through";
        // Get all prices
        getPrice = price[i].innerHTML;
        // Push all price in Array putPrice
        putPrice.push(getPrice);
    }

    for (let i = 0; i < putPrice.length; i++) {
        reducePriceAll = putPrice[i] * soldPrice;
        reducePrice.push(reducePriceAll);
        displayNewPrice = (putPrice[i] - reducePrice[i]).toFixed(2);
        displayPrice.push(displayNewPrice);
        newPrice[i].innerHTML = " " + displayPrice[i] + " €";
    }
}

/**
 * Add a timer 24 hours for each destinations
 */
function timer() {

}

/**
 * Show rating by visitors about destinations
 */
function ratingVisitors() {
    // Rating All Destinations
    let rating = document.getElementsByClassName("rating");
    let showScore = document.getElementsByClassName("score");
    for (let i = 0; i < rating.length; i++) {
        showScore[i].innerHTML = rating[i].querySelectorAll(".fa.fa-star.checked").length + "/" + rating[i].querySelectorAll(".fa.fa-star").length;
    }
}

/**
 * Show interface to sign in 
 */
function buttonSignIn() {
    var modal = document.getElementById('id01');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

/**
 * Show interface to sign up
 */
function buttonSignUp() {

}