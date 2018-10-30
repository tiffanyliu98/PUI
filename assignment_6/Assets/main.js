//SECTION//
/* function details */
// detail comments 

// UPDATE CART //

var name;
var cart;
var totalQty = 0, totalPrice = 0;

$(document).ready(function() {	
	getType();
	updateCart();

	$("#addToCart").click(function() {
		addToCart();
		updateCount();
	})
})

/* Identify pillow type based on selected page */
function getType() {
	if (document.getElementById("headerImg").getAttribute("alt") == "Couch Pillow") {
		name = "couchPillow";
	} else if (document.getElementById("headerImg").getAttribute("alt") == "Bed Pillow") {
		name = "bedPillow";
	} else if (document.getElementById("headerImg").getAttribute("alt") == "Floor Pillow") {
		name = "floorPillow";
	} else if (document.getElementById("headerImg").getAttribute("alt") == "Round Pillow") {
		name = "roundPillow";
	}
}

/* Initialize or udpate cart based on local storage */
function updateCart() {
	var check = JSON.parse(localStorage.getItem("cart"));

	if (check == null) { // If local storage is emtpy, initialize cart
		cart = [];
	} else { // If local storage contains item, update cart to include items
		cart = check;
	}
}

/* Add item to cart */
function addToCart() {
	var quantity = document.getElementById("qty").value;
	var item = {name: document.getElementById("headerImg").getAttribute("alt"), color: color, fill: fill, quantity: parseInt(quantity), price: 24.99, image: document.getElementById("headerImg").getAttribute("src")};

	cart.push(item); // adding to cart
	localStorage.setItem("cart", JSON.stringify(cart));	// storing cart back into local storage
}

/* Update number of items in cart */
function updateCount() {
	var cart = JSON.parse(localStorage.getItem("cart"));
	var totalCount = cart.length;
	document.getElementById("itemCount").innerHTML = stringify(totalCount);
}

// UPDATE PAGE VISUALS BASED ON SELECTION //

function changeToMorningHaze() {
	document.getElementById("headerImg").src = "Assets/Images/"+name+"MorningHaze.jpg";
	document.getElementById("colorChange").innerHTML = "Color: Morning Haze";
	color = "Morning Haze";
}

function changeToRainyDay() {
	document.getElementById("headerImg").src="Assets/Images/"+name+"RainyDay.jpg";
	document.getElementById("colorChange").innerHTML = "Color: Rainy Day";
	color = "Rainy Day";
}

function changeToAfterSchoolSpecial() {
	document.getElementById("headerImg").src="Assets/Images/"+name+"AfterSchoolSpecial.jpg";
	document.getElementById("colorChange").innerHTML = "Color: After School Special";
	color = "After School Special";
}

function changeToCozyDenim() {
	document.getElementById("headerImg").src="Assets/Images/"+name+"CozyDenim.jpg";
	document.getElementById("colorChange").innerHTML = "Color: Cozy Denim";
	color = "Cozy Denim";
}

function changeToDuckDown() {
	document.getElementById("fillChange").innerHTML = "Fill: Duck Down";
	fill = "Duck Down";
}

function changeToPolyBlend() {
	document.getElementById("fillChange").innerHTML = "Fill: Poly Blend";
	fill = "Poly Blend";
}

function changeToMemoryFoam() {
	document.getElementById("fillChange").innerHTML = "Fill: Memory Foam";
	fill = "Memory Foam";
}