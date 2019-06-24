/* DONT MODIFY ANY OF THIS CODE!!!*/
window.getAvailableProducts = function () {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function getRandomItem(availableProductNames) {
        return availableProductNames[getRandomInt(0, availableProductNames.length - 1)];
    }
    function getRandomProductname() {
        const preWords = ['Used', 'Fantastic', '"Used"', 'Broken', 'Beautiful', 'Wet', 'Green', 'Sloppy', 'Dirty'];
        const productNames = ['Carrot', 'Drone', 'Giftcard', 'Puppy', 'Car', 'Shirt', 'Milk', 'Chalk', 'Fish fingers', 'Socks', 'Chocolate', 'Toothbrush', 'Computer', 'Nokia', 'Cologne'];
        let chosenProductName = getRandomItem(productNames);
        const shouldHavePreWord = getRandomInt(0, 10) > 6;
        if (shouldHavePreWord) {
            const preWord = preWords[getRandomInt(0, preWords.length - 1)];
            chosenProductName = `${preWord} ${chosenProductName}`;
        }
        return chosenProductName;
    }
    /* DONT MODIFY ANY OF THIS CODE!!!*/
    function getRandomCountries() {
        const availableCountries = ['Denmark', 'Sweden', 'Norway', 'Germany', 'Iceland', 'England'];
        const numberOfCountries = getRandomInt(1, availableCountries.length);
        const randomCountries = [];
        while (randomCountries.length < numberOfCountries) {
            const randomIndex = getRandomInt(0, availableCountries.length - 1);
            const randomCountry = availableCountries[randomIndex];
            if (!randomCountries.includes(randomCountry)) {
                randomCountries.push(randomCountry);
            }
        }
        return randomCountries;
    }
    const numberOfAvailableProducts = getRandomInt(0, 30);
    const availableProducts = Array.apply(null, Array(numberOfAvailableProducts))
        .map(() => {
            const name = getRandomProductname();
            return {
                id: `${name}${getRandomInt(0, 100000)}`,
                name,
                price: getRandomInt(0, 10000),
                rating: getRandomInt(1, 10),
                shipsTo: getRandomCountries(),
            };
        });
    return availableProducts;
}
window.sendPricesToServer = function (prices, callback) {
    console.log(`Sending these prices: ${prices} to an analytics server`);
    setTimeout(() => {
        callback(`These prices were received ${prices}`);
    }, 3000)
}
let refreshPage = false;
let myArray = getAvailableProducts();
console.log(typeof (myArray));
console.log(myArray.length);
randomArrayNumber = [];
String.random = function (length) {
    let radom13chars = function () {
        return Math.random().toString(16).substring(2, 15)
    }
    let loops = Math.ceil(length / 13)
    return new Array(loops).fill(radom13chars).reduce((string, func) => {
        return string + func()
    }, '').substring(0, length)
}
let sectionPart = document.getElementsByClassName('products');
let ulPart = document.querySelector('ul');
for (i = 0; i < myArray.length; i++) {
    let liList = document.createElement('li');
    liList.setAttribute('id', myArray[i].id);
    let divList1 = document.createElement('div');
    divList1.setAttribute('class', 'name');
    let textDiv1 = document.createTextNode(myArray[i].name);
    divList1.appendChild(textDiv1);
    let divList2 = document.createElement('div');
    divList2.setAttribute('class', 'price');
    let textDiv2 = document.createTextNode(myArray[i].price);
    divList2.appendChild(textDiv2);
    let divList3 = document.createElement('div');
    divList3.setAttribute('class', 'rating');
    let textDiv3 = document.createTextNode(myArray[i].rating);
    divList3.appendChild(textDiv3);
    let divList4 = document.createElement('div');
    divList4.setAttribute('class', 'ships-to');
    let textDiv4 = document.createTextNode(myArray[i].shipsTo);
    divList4.appendChild(textDiv4);
    let buttList = document.createElement('button');
    let textButt = document.createTextNode('Add to cart');
    buttList.appendChild(textButt);
    let a = String.random(7)
    randomArrayNumber.push(a);
    buttList.setAttribute('id', randomArrayNumber[i]);
    liList.appendChild(divList1);
    liList.appendChild(divList2);
    liList.appendChild(divList3);
    liList.appendChild(divList4);
    liList.appendChild(buttList);
    ulPart.appendChild(liList);
}
let priceArray = [];
for (i = 0; i < myArray.length; i++) {
    let itemPrice = myArray[i].price;
    priceArray.push(itemPrice);
}
sendPricesToServer(priceArray, () => {
    console.log('this is response from the server');
})
let selectedCountry = document.querySelector(".filters").querySelector(".country").querySelector('select');
selectedCountry.addEventListener("change", () => {
    selectCountry = selectedCountry.value
    let filterCountry = false
    for (i = 0; i < myArray.length; i++) {
        //console.log(i); 
        filterCountry = false;
        let insideCountryArray = myArray[i].shipsTo;
        for (j = 0; j < insideCountryArray.length; j++) {
            if ((insideCountryArray[j]).toLowerCase() === selectCountry.toLowerCase()) {
                console.log(insideCountryArray[j].toLowerCase());
                console.log(selectCountry.toLowerCase());
                filterCountry = true;
            }
        }
        if (filterCountry === false) {
            try {
                console.log("row of = " + i + " must be deleted")
                item = document.getElementById(myArray[i].id);
                item.parentNode.removeChild(item);
            }
            catch (err) {
            }
        }
    }
})
let selectProduct = document.querySelector('.table-view-control').querySelector(".search").querySelector('input');
selectProduct.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
        // console.log(selectProduct.value)
        let filterProduct = false
        for (i = 0; i < myArray.length; i++) {
            //console.log(i); 
            filterProduct = false;
            let insideProductArray = myArray[i].name;
            // console.log(insideProductArray);
            if (insideProductArray.toLowerCase() === (selectProduct.value).toLowerCase()) {
                console.log(insideProductArray);
                filterProduct = true;
            }
            if (filterProduct === false) {
                try {
                    console.log("row of = " + i + " must be deleted")
                    item = document.getElementById(myArray[i].id);
                    item.parentNode.removeChild(item);
                }
                catch (err) {
                }
            }
        }
    }
});
purePriceArray = [];
sortPriceArray = [];
totalSortArray = [];
sortByNameArray = [];
for (i = 0; i < myArray.length; i++) {
    purePriceArray.push(myArray[i].price);
    sortPriceArray.push(myArray[i].price);
    sortByNameArray.push(myArray[i].name);
}
let finalArray = []
randomArrayNumber.forEach(function (item, index) {
    var item = document.getElementById(item);
    item.onclick = () => {
        console.log("this is new id" + index);
        finalArray.push(index);
    };
})
var rangeInput = document.getElementById("start");
rangeInput.addEventListener('mouseup', function() {
    if (this.value ==="0"){
        console.log("cheap")
        sortPriceArray.sort(function (a, b) { return a - b });
        for (i = 0; i < sortPriceArray.length; i++) {
            let a = sortPriceArray[i];
            for (j = 0; j < myArray.length; j++) {
                if (myArray[j].price === a) {
                    //   console.log("this is j index" + j);
                    totalSortArray[i] = myArray[j];
                }
            }
        }
        removeList();
        reDesignPage();
    }else if(this.value ==="11"){
        console.log("expensive");
        sortPriceArray.sort(function (a, b) { return b - a });
        for (i = 0; i < sortPriceArray.length; i++) {
            let a = sortPriceArray[i];
            for (j = 0; j < myArray.length; j++) {
                if (myArray[j].price === a) {
                    //   console.log("this is j index" + j);
                    totalSortArray[i] = myArray[j];
                }
            }
        }
        removeList();
        reDesignPage();
    }    
});
finalPriceArray = [];
let addToCard = document.createElement("button");
addToCard.style.position = "absolute"
addToCard.style.left = "1200px";
addToCard.style.top = "200px";
addToCard.style.width = "180px";
addToCard.style.height = "100px";
addToCard.style.backgroundColor = 'Tan';
addToCard.style.fontSize = "18px";  
addToCard.setAttribute("id", "idAddToCard");
let textButton = document.createTextNode("Add to List");
addToCard.appendChild(textButton);
document.body.appendChild(addToCard);
document.getElementById("idAddToCard").onclick = function () {
    //let selectionPart = document.getElementsByClassName('total');
    let selectedProduct = document.querySelector('.cart').querySelector('.total');
    for (i = 0; i < finalArray.length; i++) {
        let selectIndex = finalArray[i];
        if (refreshPage === false) {
              a = myArray[selectIndex].price;
        } else if (refreshPage === true) {
              a = totalSortArray[selectIndex].price
        }
        finalPriceArray.push(a);
if(refreshPage ===false){
      b = myArray[selectIndex].name;
}else if(refreshPage ===true){
      b = totalSortArray[selectIndex].name;
}
        console.log(a);
        console.log(b);
        let selectList = document.createElement('li');
        let printText = document.createTextNode(a + '----' + b)
        selectList.appendChild(printText);
        selectedProduct.appendChild(selectList);
    }
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let finalPriceNumber = finalPriceArray.reduce(reducer);
    console.log(finalPriceArray.reduce(reducer));
    let finalStep = document.createElement('p');
    let finalText = document.createTextNode("Total Price =" + finalPriceNumber)
    finalStep.appendChild(finalText);
    selectedProduct.appendChild(finalStep);
    finalArray = []
}
let sortByPrice = document.querySelector('.table-view-control').querySelector('.sort').querySelector('select');
sortByPrice.addEventListener("change", () => {
    console.log("you change something");
    //console.log(sortByPrice.value);
    if (sortByPrice.value === 'cheap') {
        sortPriceArray.sort(function (a, b) { return a - b });
        for (i = 0; i < sortPriceArray.length; i++) {
            let a = sortPriceArray[i];
            for (j = 0; j < myArray.length; j++) {
                if (myArray[j].price === a) {
                    //   console.log("this is j index" + j);
                    totalSortArray[i] = myArray[j];
                }
            }
        }
        removeList();
        reDesignPage();
    }
    if (sortByPrice.value === 'expensive') {
        sortPriceArray.sort(function (a, b) { return b - a });
        for (i = 0; i < sortPriceArray.length; i++) {
            let a = sortPriceArray[i];
            for (j = 0; j < myArray.length; j++) {
                if (myArray[j].price === a) {
                    console.log("this is j index" + j);
                    totalSortArray[i] = myArray[j];
                }
            }
        }
        removeList();
        reDesignPage();
    }
    ///////////////////////////////////////////////
    if (sortByPrice.value === 'name') {
        //sortByNameArray.sort(function (a, b) { return a - b });
        sortByNameArray.sort();
        for (i = 0; i < sortByNameArray.length; i++) {
            let a = sortByNameArray[i];
            for (j = 0; j < myArray.length; j++) {
                if (myArray[j].name === a) {
                    console.log("this is j index" + j);
                    totalSortArray[i] = myArray[j];
                }
            }
        }
        removeList();
        reDesignPage();
    }
})
function reDesignPage() {
    refreshPage = true;
   randomArrayNumber = [];
    sectionPart = document.getElementsByClassName('products');
    ulPart = document.querySelector('ul');
    for (i = 0; i < totalSortArray.length; i++) {
        let liList = document.createElement('li');
        liList.setAttribute('id', totalSortArray[i].id);
        let divList1 = document.createElement('div');
        divList1.setAttribute('class', 'name');
        let textDiv1 = document.createTextNode(totalSortArray[i].name);
        divList1.appendChild(textDiv1);
        let divList2 = document.createElement('div');
        divList2.setAttribute('class', 'price');
        let textDiv2 = document.createTextNode(totalSortArray[i].price);
        divList2.appendChild(textDiv2);
        let divList3 = document.createElement('div');
        divList3.setAttribute('class', 'rating');
        let textDiv3 = document.createTextNode(totalSortArray[i].rating);
        divList3.appendChild(textDiv3);
        let divList4 = document.createElement('div');
        divList4.setAttribute('class', 'ships-to');
        let textDiv4 = document.createTextNode(totalSortArray[i].shipsTo);
        divList4.appendChild(textDiv4);
        let buttList = document.createElement('button');
        let textButt = document.createTextNode('Add to cart');
        buttList.appendChild(textButt);
        let a = String.random(7)
        randomArrayNumber.push(a);
        buttList.setAttribute('id', randomArrayNumber[i]);
        liList.appendChild(divList1);
        liList.appendChild(divList2);
        liList.appendChild(divList3);
        liList.appendChild(divList4);
        liList.appendChild(buttList);
        ulPart.appendChild(liList);
    }
    randomArrayNumber.forEach(function (item, index) {
        var item = document.getElementById(item);
        item.onclick = () => {
            console.log("this is new id" + index);
            finalArray.push(index);
        };
    })
}
function removeList() {
    let kio = document.querySelector('ul')
    let k = 0;
    do {
        console.log(kio.childNodes.length);
        var removeUl = kio.childNodes[k];
        if (typeof removeUl === "undefined") {
            k = 0;
            var removeUl = kio.childNodes[k];
        }
        kio.removeChild(removeUl);
        k = k + 1;
        var list = document.querySelector('ul').hasChildNodes();
    }
    while (list === true);
}


let isDown = false;
let moveSelectedProduct = document.querySelector('.cart')
moveSelectedProduct.addEventListener('mousedown',function(event){
    isDown = true;
    offset = [
        moveSelectedProduct.offsetLeft -event.clientX,
        moveSelectedProduct.offsetTop - event.clientY]
    },true);
    moveSelectedProduct.addEventListener('mousemove',function(event){
        if(isDown ===true){
            moveSelectedProduct.style.left = event.clientX +offset[0] +'px';
            moveSelectedProduct.style.top = event.clientY + offset[1]+'px';
        }
    },true)
    moveSelectedProduct.addEventListener('mouseup',function(event){
        isDown = false;
    },true);