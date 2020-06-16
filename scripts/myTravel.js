"use strict";

// Initialization of global variables
let putPrice = new Array();
let reducePrice = new Array();
let displayPrice = new Array();

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
        getPrice = price[i].innerHTML
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