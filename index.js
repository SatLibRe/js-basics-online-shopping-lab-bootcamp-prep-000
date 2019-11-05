var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(name){
  let newObj = {
    itemName: `${name}`, 
    itemPrice: Math.floor(Math.random()*100)
  } 
  cart.push(newObj);
  return(`${newObj.itemName} has been added to your cart.`)
}

function viewCart(){
  let newCart = [];
  if( cart.length === 0){
    return(`Your shopping cart is empty.`)
  }
  else if( cart.length === 1){
    return(`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`)
  }
  else if( cart.length === 2){
    return(`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`)
  }
  else {
    for(let i = 0; i < cart.length - 1; i++){
    newCart.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)  
    }
  }
  return(`In your cart, you have ${newCart.join(', ')}, and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`)
}

function total() {
 let total = 0;
  for(var i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }
  return total;
}



