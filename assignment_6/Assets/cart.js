//SECTION//
/* function details */
// detail comments 

var cart
var totalQty = 0, totalPrice = 0;

$(document).ready(function() {
	cart = JSON.parse(localStorage.getItem("cart")) || []; // if nothing in local storage, set cart to empty array
	displayCart();

	$("button#removeItem").click(function() {
		var index = $(this).parent().parent().find("img").attr("id"); // get index of remove item selected
		if (cart.length == 1) { // if only one element left, set cart to empty array because can not splice with single element and clear local storage
			cart = []; 
			localStorage.clear();
		}
		else { // remove an item from cart array, stringify cart and update to local storage
			cart.splice(index, 1);
			localStorage.setItem("cart", JSON.stringify(cart));
		}
		$(this).parent().parent().remove(); // identify and remove parent element based on item button selected
		updateCheckOut();
	})
	showCheckOut();
})

/* Update page visually with new item */
function displayCart() {
	var i;
	for (i = 0; i < cart.length; i++) {
		var image = cart[i]["image"];
		var name = cart[i]["name"];
		var color = cart[i]["color"];
		var price = cart[i]["price"];
		var fill = cart[i]["fill"];
		var qty = cart[i]["quantity"];
		var total = cart[i]["quantity"] * price;

		totalQty += qty;
		totalPrice += total;

		var newRow = "<tr><td>" + "<img id = \"" + i + "\" src=" + image + " width=\"100\"></td><td>" + name + "<br><b>Color:</b> " + color + ", <b>Fill: </b>" + fill + "</td><td>" + price + "</td><td>" + qty + "</td><td>" + total + "</td>" + "<td><button id = \"removeItem\">Remove</button></td></tr>";
		$("#shoppingCartTable").append(newRow);
	}
	console.log(totalQty);
	console.log(totalPrice);
}

/* Update checkout information based on items in cart */
function updateCheckOut() {
	totalQty = 0;
	totalPrice = 0;
	for (i = 0; i < cart.length; i++) {
		var qty = cart[i]["quantity"];
		var total = cart[i]["quantity"] * price;

		totalQty += qty;
		totalPrice += total.toFixed(2);
	}
	$("#checkout").html("<td></td><td></td><td></td><td>"+ totalQty + "</td><td>" + totalPrice + "</td><td><button>Check Out</button></td>");;
}

/* Show checkout information visually based on updated checkout information */
function showCheckOut() {
	var lastRow = "<tr id = \"checkout\"><td>Discount Code: </td><td><input type=\"text\" name=\"discount\"></td><td>Cart Total: </td><td>"+ totalQty + "</td><td>" + totalPrice + "</td><td><button>Check Out</button></td></tr></table>";
	$("#shoppingCartTable").append(lastRow);
}