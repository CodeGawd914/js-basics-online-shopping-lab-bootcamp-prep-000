var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random()*100);
 var  object = {itemName:[item], itemPrice:price}
 cart.push(object)
 return `${item} has been added to your cart.`
}

function viewCart() {
    if (cart.length === 0){
    return 'Your shopping cart is empty.';
    }
    var yourCart = [];
    var sentence = 'In your cart, you have '
  for(var i = 0; i<cart.length;i++){
     yourCart.push(cart[i].itemName + " at $" + cart[i].itemPrice) 
  }if (yourCart.length === 1){
       sentence += yourCart +"."
    }else if (yourCart.length === 2){
      sentence += (yourCart[0] + ", and " + yourCart[1] + ".")
    }else if (yourCart.length > 2){
      var lastPart = yourCart.pop()
      var moreStuff = yourCart.join(", ")
      sentence += (moreStuff +", and "+ lastPart + "." )
    }
    return sentence
  }

function total() {
  var bill = 0;
  for ( var i = 0; i< cart.length; i++){
    bill += cart[i].itemPrice
  }
  return bill
}
function removeFromCart(item) {
  for (var i = 0; i< cart.length; i++){
    if (cart[i].itemName ===item){
      cart.slice(i,1);
      return cart
      }
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
