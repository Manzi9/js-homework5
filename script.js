/************
 * N.B. The ghosts are SVGs, so it's 'fill', not 'color' you need to change
 *************/

// GET BY ID
const ghost1el = document.getElementById("first_ghost");
ghost1el.style.fill = "red";

// GET BY CLASSNAME
const wave2el = document.getElementsByClassName("second_wave");
wave2el.style.fill = "blue";

// GET AREA, DRILL DOWN using GET BY TAG NAME
const area51 = document.querySelector("area-51 ghost"); //Ghosts only had a class not a name?
area51.style.fill = "green";

// querySelector nth-child

// from the last child, select the div immediately above the ghost and make its border '5px dashed'

// querySelectorAll
const area50 = document.querySelectorAll("area-50 ghost");
area50.style.fill = "red";
