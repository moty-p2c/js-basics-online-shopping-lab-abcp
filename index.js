var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let price = Math.random()*100
 price = Math.floor(price)
 let itemObj =new Object( {[item]:price})
 cart.push(itemObj);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  if (cart.length==1){
    let yourCart="In your cart, you have "
    let key = Object.keys(cart[0])[0]
    let value = Object.values(cart[0])[0]
    yourCart+= `${key} at $${value}`
    return yourCart
  }
 else if (cart.length>1){
   let yourCart="In your cart, you have "
   for (var i=0; i<cart.length; i++){
    let key = Object.keys(cart[i])[0]
    let value = Object.values(cart[i])[0]
    yourCart+= key+" at " + value + " ,"
   }
   console.log(yourCart)
 }
 else{
   console.log("Your shopping cart is empty.")
 }
}

function total() {
  let total = 0;
  for (var i=0; i<cart.length; i++){
    let price = parseInt(Object.values(cart[i]))
    total+= price;
  }
  return total
}

function removeFromCart(item) {
  let originLength = cart.length;
  for (var i=0; i< cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
      cart.splice(i,1);
      return cart
    }
  } if (originLength==cart.length){
    console.log("That item is not in your cart.") 
  }  
}

function placeOrder(cardNumber) {
  if (cardNumber===undefined){
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else{
    let totalPrice = total();
    console.log(`Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`)
    cart=[];
  }
}
