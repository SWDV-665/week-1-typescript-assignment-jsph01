class Grocery {
	name: string;
	amount: number;
	cost: number;
	sale: boolean;
	
	constructor(name: string, amount: number, cost: number, sale: boolean) {
		this.name = name;
		this.amount = amount;
		this.cost = cost;
		this.sale = sale;
	}
}

function displayReceipt(cart: Grocery[]) {
	var receipt = "---RECIEPT---<br>";
	var amount = 0;
	for(var i=0; i<cart.length; i++) {
		for(var j=0; j<cart[i].amount; j++) {
			let saleMod = 1;
			if(cart[i].sale) {
				saleMod = 0.75;
			}
			receipt += amount + ".) " + cart[i].name + ".......... $" + (cart[i].cost*saleMod).toFixed(2) + "<br>";
			amount++;
		}
	}
	return receipt;
}

let bread = new Grocery("Wheat Bread", 2, 3.99, false);
let milk = new Grocery("Organic 2% Milk", 1, 5.49, true);
let eggs = new Grocery("Cage-Free Eggs (6pc)", 2, 2.95, true);
let cheese = new Grocery("Blue Cheese", 3, 6.24, false);
let cart = [bread, milk, eggs, cheese];

document.body.innerHTML = displayReceipt(cart);