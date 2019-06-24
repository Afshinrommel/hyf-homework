let randomArrayId = [];
let totalPrice = 0;
let valuesCurrency = [];
let coefficient = 1;
let addProduct = document.createElement('button');
addProduct.setAttribute('id', 'addProductId')
let addProductText = document.createTextNode('addProduct');
addProduct.appendChild(addProductText);
document.body.appendChild(addProduct);
let removeProduct = document.createElement('button');
removeProduct.setAttribute('id', 'removeProduct')
let removeProductText = document.createTextNode('removeProduct');
removeProduct.appendChild(removeProductText);
document.body.appendChild(removeProduct);
let getPrice = document.createElement('button');
getPrice.setAttribute('id', 'getPrice')
let getPriceText = document.createTextNode('getPrice');
getPrice.appendChild(getPriceText);
document.body.appendChild(getPrice);
document.getElementById('getPrice').addEventListener('click', getTotalPrice);
let select = document.createElement('select');
select.setAttribute('id', 'selectedCurrency')
let option = document.createElement('option');
let unitCurrency = ["AED", "AFN", "ANG", "BYN", "BRL", "CAD",
    "CDF", "CLF", "CLP", "COP", "DKK", "DOP", "EUR", "JEP", "JPY", "JMD", "KGS", "GIP",
    "HNL", "ILS", "IMP", "LKR", "MKD", "MWK", "NOK", "SOS", "SZL", "TJS", "TND", "TRY", "UAH", "USD",
    "ZAR", "ZMK", "ZWL"]
optionText = document.createTextNode("select currency");
option.appendChild(optionText);
select.appendChild(option);
for (i = 0; i < unitCurrency.length; i++) {
    let optionCurrency = document.createElement("option");
    optionCurrency.text = unitCurrency[i];
    select.appendChild(optionCurrency);
}
let selectValue = document.createElement('select');
selectValue.setAttribute('id', 'selectedValue');
let optionValue = document.createElement('option');
optionValue.text = 'value';
selectValue.appendChild(optionValue);
document.body.appendChild(select);
document.body.appendChild(selectValue);
let urlCurrency = 'http://data.fixer.io/api/latest?access_key=your_key';
let promiseCurrency = new Promise(function (resolve, reject) {
    fetch(urlCurrency)
        .then(function (response) {
            if (response.status === 200) {
                console.log(response.statusText);
                response.json().then(
                    function (objCurrency) { resolve(objCurrency) }
                )
            }
            else {
                let reason = new Error("can not receive data")
                reject(reason)
            }
        })
})
function jsonDataReceive(objCurrency) {
    console.log(typeof (objCurrency));
    let messageGetCurrency = JSON.stringify(objCurrency);
    return Promise.resolve(messageGetCurrency);
}
function showCurrency() {
    promiseCurrency
        .then(jsonDataReceive)
        .then(function (messageGetCurrency) {
            setTimeout(() => {
                console.log(messageGetCurrency);
                let convertJson = JSON.parse(messageGetCurrency)
                for (i = 0; i < unitCurrency.length; i++) {
                    let optionValue = document.createElement("option");
                    console.log(unitCurrency[i])
                    let textHelp = unitCurrency[i]
                    optionValue.text = convertJson.rates[unitCurrency[i]];
                    valuesCurrency[i] = convertJson.rates[unitCurrency[i]];
                    selectValue.appendChild(optionValue);
                }
                document.body.appendChild(selectValue);
            }, 8000)
        }
        )
        .catch(error => console.log(error.reason));
}
showCurrency();
document.getElementById('selectedCurrency').addEventListener('change', addItem, false);
function addItem() {
    let seCurrency = document.getElementById("selectedCurrency").value;
    let seValue = unitCurrency.indexOf(seCurrency)
    document.getElementById('selectedValue').value = valuesCurrency[seValue]
    let baseValueIndex = unitCurrency.indexOf('EUR');
    coefficient = Number(valuesCurrency[seValue]) / Number(valuesCurrency[baseValueIndex])
    console.log(coefficient);
    getTotalPrice();
}
document.getElementById('selectedValue').addEventListener('change', changeNumber, false);
function changeNumber() {
    let seValue = document.getElementById("selectedValue").value;
    seValue = Number(seValue);
    let seCurrency = valuesCurrency.indexOf(seValue)
    document.getElementById('selectedCurrency').value = unitCurrency[seCurrency]
}
let welcomeTitle = document.createElement('h2')
welcomeTitle.id = 'welcomeTitle';
let mainTitleText = document.createTextNode('Welcome To our Shop')
welcomeTitle.appendChild(mainTitleText);
document.body.appendChild(welcomeTitle);
let titleMenu = document.createElement('h2')
titleMenu.id = 'titleMenu';
let titleMenuText = document.createTextNode('Product' + ".................." + "Price")
titleMenu.appendChild(titleMenuText);
document.body.appendChild(titleMenu);
let productTable = document.createElement('ul');
productTable.id = 'productTable'
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
class ShoppingCart {
    constructor(products) {
        this.products = products;
    }
    addProduct(products) {
        productsArrayList.push(products);
    }
    renderProducts() {
        renderProducts();
    }
    getTotal() {
        getTotalPrice();
    }
    getUser() {
        let url = "https://jsonplaceholder.typicode.com/users/1"
        // Promise
        let newPromise = new Promise(function (resolve, reject) {
            fetch(url).
                then(function (response) {
                    if (response.status === 200) {
                        console.log(response.statusText)
                        response.json().then
                            (
                                function (objUser) { resolve(objUser) }
                            )
                    }
                    else {
                        const reason = new Error('Can not get Data');
                        reject(reason);
                    }
                }
                )
        }
        )
        let showJson = function (objUser) {
            console.log(typeof (objUser));
            let messageGetObjUser = JSON.stringify(objUser);
            return Promise.resolve(messageGetObjUser);
        };
        let testPromise = function () {
            newPromise
                .then(showJson)
                .then(function (messageGetObjUser) { setTimeout(() => { console.log(messageGetObjUser) }, 8000) })
                .catch(error => console.log(error.reason)); // fat arrow
        };
        testPromise();
    }

    delProduct() {
        assignIdToList();
    }
    removeList() {
        removeList();
    }
}
let productsArrayList = []
document.getElementById('addProductId').addEventListener('click', () => {
    let productName = prompt('input name of product');

    let productPrice;

    do {
        productPrice = prompt('input price of product');
    } while (isNaN(productPrice) === true)

    productName = new Product(productName, productPrice);
    console.log(productName.name);
    console.log(productName.price);
    let addProductToCard = new ShoppingCart(productName);
    addProductToCard.addProduct(productName)
    addProductToCard.getTotal();
    addProductToCard.getUser();
    addProductToCard.removeList();
    addProductToCard.renderProducts();
    addProductToCard.delProduct();
}
);
String.random = function (length) {
    let radom13chars = function () {
        return Math.random().toString(16).substring(2, 15)
    }
    let loops = Math.ceil(length / 13)
    return new Array(loops).fill(radom13chars).reduce((string, func) => {
        return string + func()
    }, '').substring(0, length)
}
function removeList() {
    randomArrayId = [];
    let ulList = document.querySelector('ul')
    let k = 0;
    try {
        do {
            console.log(ulList.childNodes.length);
            var removeUl = ulList.childNodes[k];
            if (typeof removeUl === "undefined") {
                k = 0;
                var removeUl = ulList.childNodes[k];
            }
            ulList.removeChild(removeUl);
            k = k + 1;
            var list = document.querySelector('ul').hasChildNodes();
        }
        while (list === true);
    }
    catch (err) {
        console.log(err.message);
    }
}
function renderProducts() {
    for (i = 0; i < productsArrayList.length; i++) {
        let productList = document.createElement('li');
        let randomId = String.random(7)
        randomArrayId.push(randomId);
        productList.setAttribute('id', randomArrayId[i]);
        let text = document.createTextNode(productsArrayList[i].name + "..........................." + Number(productsArrayList[i].price) * coefficient);
        productList.appendChild(text);
        productTable.appendChild(productList);
    }
    document.body.appendChild(productTable);
}
function getTotalPrice() {
    try {
        var TotalPriceList = document.querySelector('h3');
        TotalPriceList.parentNode.removeChild(TotalPriceList);
    }
    catch (err) {
        console.log(err)
    }
    let totalPrice = 0;
    for (i = 0; i < productsArrayList.length; i++) {


        totalPrice = Number(productsArrayList[i].price) + totalPrice;
    }
    totalPrice = coefficient * totalPrice;
    let tabList = document.createElement('h3')
    tabList.id = 'tabList';
    let tabListText = document.createTextNode('Final Price' + "........" + totalPrice)
    tabList.appendChild(tabListText);
    document.body.appendChild(tabList);

    for (i = 0; i < randomArrayId.length; i++) {
        document.getElementById(randomArrayId[i]).textContent = (productsArrayList[i].name + "..........................." + Number(productsArrayList[i].price) * coefficient);
    }
}
function assignIdToList() {
    randomArrayId.forEach(function (item, index) {
        var item = document.getElementById(item);
        item.onclick = () => {
            productsArrayList.splice(index, 1);
        }
    })
}
document.getElementById('removeProduct').addEventListener('click', () => {
    removeList();
    renderProducts();
    assignIdToList();
    getTotalPrice();
})
