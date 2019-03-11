var Grocery = /** @class */ (function () {
    function Grocery(name, amount, cost, sale) {
        this.name = name;
        this.amount = amount;
        this.cost = cost;
        this.sale = sale;
    }
    return Grocery;
}());
function displayReceipt(cart) {
    var receipt = "---RECIEPT---<br>";
    var amount = 0;
    for (var i = 0; i < cart.length; i++) {
        for (var j = 0; j < cart[i].amount; j++) {
            var saleMod = 1;
            if (cart[i].sale) {
                saleMod = 0.75;
            }
            receipt += amount + ".) " + cart[i].name + ".......... $" + (cart[i].cost * saleMod).toFixed(2) + "<br>";
            amount++;
        }
    }
    return receipt;
}
var bread = new Grocery("Wheat Bread", 2, 3.99, false);
var milk = new Grocery("Organic 2% Milk", 1, 5.49, true);
var eggs = new Grocery("Cage-Free Eggs (6pc)", 2, 2.95, true);
var cheese = new Grocery("Blue Cheese", 3, 6.24, false);
var cart = [bread, milk, eggs, cheese];
document.body.innerHTML = displayReceipt(cart);
