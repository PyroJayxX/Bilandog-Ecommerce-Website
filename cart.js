let classicQty = document.getElementById("classic-qty") // Id 1
let cheesyQty = document.getElementById("cheesy-qty") // Id 2
let chiliQty = document.getElementById("chili-qty") // Id 3
let jumboQty = document.getElementById("jumbo-qty") // Id 4
let hawaiianQty = document.getElementById("hawaiian-qty") // Id 5
let truffleQty = document.getElementById("truffle-qty") // Id 6

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;

let totalCost = 0;
let minimum = 0;
function incrementItem(id, price) {
    switch (id) {
        case 1:
            count1 += 1;
            classicQty.textContent = count1;
            break
        case 2:
            count2 += 1;
            cheesyQty.textContent = count2;
            break
        case 3:
            count3 += 1;
            chiliQty.textContent = count3;
            break
        case 4:
            count4 += 1;
            jumboQty.textContent = count4;
            break
        case 5:
            count5 += 1;
            hawaiianQty.textContent = count5;
            break
        case 6:
            count6 += 1;
            truffleQty.textContent = count6;
            break
    }
    totalCost += price;
}

function decrementItem(id, price) {
    switch (id) {
        case 1:
            if (count1 === 0) return
            count1 -= 1;
            classicQty.textContent = count1;
            break
        case 2:
            if (count2 === 0) return
            count2 -= 1;
            cheesyQty.textContent = count2;
            break
        case 3:
            if (count3 === 0) return
            count3 -= 1;
            chiliQty.textContent = count3;
            break
        case 4:
            if (count4 === 0) return
            count4 -= 1;
            jumboQty.textContent = count4;
            break
        case 5:
            if (count5 === 0) return
            count5 -= 1;
            hawaiianQty.textContent = count5;
            break
        case 6:
            if (count6 === 0) return
            count6 -= 1;
            truffleQty.textContent = count6;
            break
    }
    totalCost -= price;
} 

function submitBtn() {
    alert("Your order is on the way. " + "Your total bill is: " + totalCost);
    alert("Thank you for your purchase!");
}
