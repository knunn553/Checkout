if (document.readyState == 'loading') {
    // To understand what is going on here, start at let removeCartItemButtons and go down the code until prompted to come up here to the top of the file. 
    // If the page is still loading, we want to add an event listener, addEventListener, very similar to the one below.
    // We are listening for DOMContentLoaded. This event will fire as soon as the page is done loading.
    // Inside, we just want to run a function. We randomly picked a name and called it "ready".
    document.addEventListener('DOMContentLoaded', ready)
    // If the page is still loading it will run the above line. If it's done loading and ready to go, we can just call the ready() function and it will load as expected.
    // After the else() statement, we can call the return() function and insert all the code used for hooking up our buttons
} else {
    ready();
}

function ready() {
    let removeCartItemButtons = document.getElementsByClassName("btn-danger")
    console.log(removeCartItemButtons);
    for (let i = 0; i < removeCartItemButtons.length; i++) {
        let button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    // We have cart-quantity-input in the HTML document that we can use. We'll crate anothe variable with let.
    let quantityInputs = document.getElementsByClassName("cart-quantity-input")
    for (let i = 0, i < quantityInputs.length, i++) {
        let input = quantityInputs[i]
        // Now we add an event listener to know everytime a quantity is changed.
        input.addEventListener('changed', quantityChanged)
        // Now we need to take the quantityChanged and make it into a function as seen below.
    }
}

// In addition to making sure the page is already loaded, we can also clean up our code a little bit by creating a function().
function removeCartItem() {
    // This function will take all the code that is in the event listener above for removing a cart button, adding the 'event' into the removeCartItem function.
    // Inside of the click in the ready() function, we can just put removeCartItem.
    // Now, what we'll do after making everything clearer by putting the removeCartItem function in its own section, we'll add code that allows simultaneos changes of the quantity and grand total.
    // We'll also disable the fact that we can order a negative amount of an item.
    let buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    // Now, with the event, we can code up what we want to do when the quantity is changed.
    // We need to get that quantity element.
    // The first thing we need to do is get the quantity element.
    // We're going to get the input and set event.target since we know the target of our event is going to be the actual input element that we need
    // Then we want to check and see if the value inside of the input is a valid value.
    // First thing we want to check for is if it is actually a number.
    let input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
    // We already initiated the function updateCartTotal(), so we don't have to do anything there other than call it.
}






//let removeCartItemButtons = document.getElementsByClassName("btn-danger")
//// Creating a variable with all the buttons with the class = "btn-danger".
//// Why are we using var and not let?
//// Anyways, we are creatubg a variable removeCartItemButtons just to highlight what this variable is going to be doing.
//// Notice that we are calling a variable at the beginnning of the .js file, which is a good thing.
//console.log(removeCartItemButtons);
//for (let i = 0; i < removeCartItemButtons.length; i++) {
//    let button = removeCartItemButtons[i]
//    // button.addEventListener - this allows us to add an event listener that will tell the program to do something when the user does something, such as click a button
//    // we're going to listen to the click event, and when the user presses the click event, we want to tell it to do something, so we create a function.
//    button.addEventListener('click', function(event) {
//        let buttonClicked = event.target
//        buttonClicked.parentElement.parentElement.remove()
//        // We added an event listener, so we need to add all the functions that are going to happen when that event listener is clicked.
//        updateCartTotal()
//    })
//}

// If we want the screen to react based on what the user did, we have to create a function(). Everything is a function.
// What we want to do is go through every single row in our cart, find the price, multiple that price by the quantity, and add that together for every single row, then we want to display that by reflecting it below in our total section.
// With something like a cart, for example, we have to create the full layout of what the cart could look like. Our JS code allows us to add and remove things from the cart section based on events.
function updateCartTotal() {
    let cartItemContainer = document.getElementsByClassName('cart-items')[0]
    let cartRows = cartItemContainer.getElementsByClassName('cart-row')
    let total = 0
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i]
        let cartPrice = cartRow.getElementsByClassName('cart-price')[0]
        let quantityInput = cartRow.getElementsByClassName('cart-quantity-input')[0]
        // Up until this point, we have pinpointed the element, but not the information inside the element. We will do now with the following code.
        // We can use the .innerText property to get the values inside of the elements.
        let price = parseFloat(cartPrice.innerText.replace("$", ""))   
        let quantity = quantityInput.value
        console.log(price * quantity)
        grandtotal = total + (price * quantity)

        // If we console.log(price), we'll see that the value is $9.99. This is what we want, but we want to remove the dollar sign from the innerText value and convert it into a number that JavaScript can interpret.
        // We need to replace() on the cartPrice.innerText. Replacing the "$" with "" aka nothing. We want nothing there, just the 9.99 so JS can interpret it.
        // After removing the dollar sign, we wnat to convert the string to a number using the parseFloat method.
        // After getting price * quantity value, we need to reflect that in the total row.
        // Bear in mind that we are still in a for loop.
        // Since this is inside of a loop, we need to total all of these together. We can crate a total variable before the loop. We'll make it equal 0, or so that nothing has been added to the cart.
        // The we'll reflect the absolute total price as being the total + (price * quantity).
        
    }
    document.getElementsByClassName("cart-total-price")[0].innerText = "$" + grandtotal
    

    // We only want to get the first element of the cart-items because the getElementsByClassName returns an array of elements and we only want 1.
    // So we'll select the very first item with [0]
    // With the cartItemContainer, we want to getElementsByClassName for the different rows within the container.
    // Then we need to loop over all the cart rows
    // Instead of looping over the removeCartItemButtons, we can just loop over the cart rows
    // We have to be very specific in what we want.
    // We are going to create another variable called cart row then get the price and quantity of that row.
    // Above, you see the [0] - this means we only want the first element in the for loop. We'll get to the subsequent one later
    // We need to make sure the page is completely loading, so we are going to go all the way back up to the top of this JS file and create and if statement to ensure the html and JS content are lined up.
    // We are going to check the readyState of the document (document.readyState) to make sure the page is loading correctly.
}

