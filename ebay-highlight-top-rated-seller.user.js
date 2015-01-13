// ==UserScript==
// @name         eBay.com - highlight 'top-rated seller' items
// @namespace    http://www.ebay.com/
// @version      0.1
// @description  Highlights 'top-rated seller' items on eBay.com
// @author       matushonek
// @grant        none
// ==/UserScript==

els = document.getElementsByClassName("etrsb");
elsWide = document.getElementsByClassName("etrsWpr");

for (i=0; i<els.length; i++) {
    els[i].parentNode.parentNode.style.background="#ffa";   
}

for (i=0; i<elsWide.length; i++) {
    elsWide[i].parentNode.parentNode.parentNode.style.background="#ffa";
}
