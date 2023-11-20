console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//Create a global variable named basket and set it to an empty array.
const basket = [];

//Create a function called addItem. It should:

//take an input parameter for a string item
//add the new item to the global array basket.
//return true indicating the item was added

function addItem(item) {
    console.log('in addItem');
    let addItem = basket.push(item);
    if (basket.length >0 );
        return true;
}

console.log('test addItem - output should be true:', addItem('fruit'));
console.log(basket);

//add more items to the basket to test if they're being added to array
addItem('vegetables');
addItem('chicken');
console.log('test basket array after adding chicken and vegetables',basket);

//Create a function called listItems. It should:
//loop over the items in the basket array
//console.log each individual item on a new line

function listItems(basket){
    console.log('in listItem');
    for(i of basket);
    console.log(basket);
} 
console.log('test listItems:', listItems);




//Create a function called empty. It should:
//reset the basket to an empty array

function empty() {
    console.log('in empty');
    for(let i = 0; i < basket.length+4; i++) {
        console.log('items are removed', basket.pop());
    };
 
}













// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
