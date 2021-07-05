var addedPizza = [];
var pizzaNames = ["Margarita", "Pepperoni", "Hawaiian", "Seafood"];
function add_item(){
    pizzaNames.sort();
    addedPizza.sort()
    console.log(pizzaNames);
    console.log(addedPizza);
    var a = addedPizza.join("<br>");
    pizzaNames.push(document.getElementById("add_item").value);
    addedPizza.push(document.getElementById("add_item").value);
    document.getElementById("display_addedmenu").innerHTML = a;
};
function getmenu(){
    pizzaNames.sort();
    var i = pizzaNames.join("<br>");
    document.getElementById("display_menu").innerHTML = i;
};