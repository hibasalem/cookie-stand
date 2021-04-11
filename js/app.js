'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function getRanNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
/// table part1 
let parent = document.getElementById('parentdiv1');
let table = document.createElement('table');
parentdiv1.appendChild(table)

function headingRow() {
    let header = document.createElement('tr');
    table.appendChild(header);
    let thElement = document.createElement('th');
    header.appendChild(thElement);
    thElement.textContent = '   ';
    for (let i = 0; i < hours.length; i++) {
        let thElement = document.createElement('th');
        header.appendChild(thElement);
        thElement.textContent = hours[i];
    };

    let th2Element = document.createElement('th');
    header.appendChild(th2Element);
    th2Element.textContent = "Daily Location Total";
};
headingRow();

/// costractor function  

let stores = [];

function Store(name, minHourlyCustomers, maxHourlyCustomers, averageCookiesPerCustomer) {
    this.name = name;
    this.minHourlyCustomers = minHourlyCustomers;
    this.maxHourlyCustomers = maxHourlyCustomers;
    this.averageCookiesPerCustomer = averageCookiesPerCustomer;
    this.numberOfCookies = [];
    this.total = 0;
    stores.push(this);

    this.getRanNumber();
    this.render();

}

Store.prototype.getRanNumber = function () {
    for (let i = 0; i < hours.length; i++) {
        this.numberOfCookies.push(Math.ceil(getRanNumber(this.minHourlyCustomers, this.maxHourlyCustomers) * this.averageCookiesPerCustomer));
        this.total += this.numberOfCookies[i];
    };
}

//render prototype 
Store.prototype.render = function () {

    let storeRow = document.createElement('tr');
    table.appendChild(storeRow);
    let tdElement = document.createElement('td');
    storeRow.appendChild(tdElement);
    tdElement.textContent = this.name;
    for (let i = 0; i < hours.length; i++) {
        let tdElement = document.createElement('td');
        storeRow.appendChild(tdElement);
        tdElement.textContent = `${this.numberOfCookies[i]} cookie`
    }
    let td2Element = document.createElement('td');
    storeRow.appendChild(td2Element);
    td2Element.textContent = `${this.total} `;
}

//creating the objects
let seattle = new Store('seattle', 23, 65, 6.3);
let tokyo = new Store('tokyo', 3, 24, 1.2);
let dubai = new Store('dubai', 11, 38, 3.7);
let Paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('lima', 2, 16, 4.6);
console.log(seattle, tokyo, dubai, Paris, lima);

///  total 
let totalarray = [];
let grandtotal = 0;

function total() {
    for (let i = 0; i < hours.length; i++) {
        let hourlyTotal = 0
        for (let j = 0; j < stores.length; j++) {
            hourlyTotal += stores[j].numberOfCookies[i];
        };
        totalarray.push(hourlyTotal);
        grandtotal += totalarray[i];
    };
    console.log(totalarray, grandtotal);
    return (grandtotal, totalarray);
};
total();
console.log(totalarray);
console.log(grandtotal);



/// table part2

function footerRaw() {
    let footerRow = document.createElement('tr');
    table.appendChild(footerRow);
    let thElementFooter = document.createElement('th');
    footerRow.appendChild(thElementFooter);
    thElementFooter.textContent = 'total';

    for (let i = 0; i < hours.length; i++) {
        let thElementFooter = document.createElement('th');
        footerRow.appendChild(thElementFooter);
        thElementFooter.textContent = `${totalarray[i]}`
    }
    let thElementFooter2 = document.createElement('th');
    footerRow.appendChild(thElementFooter2);
    thElementFooter2.textContent = ` ${grandtotal} cookie`;
};
footerRaw();


//  the form 

let storeForm = document.getElementById('form');

form.addEventListener('submit', submitter);

function submitter(event) {


    event.preventDefault();

    let name2 = event.target.name.value;
    let minHourlyCustomers2 = event.target.minHourlyCustomers.value;
    let maxHourlyCustomers2 = event.target.maxHourlyCustomers.value;
    let averageCookiesPerCustomer2 = event.target.averageCookiesPerCustomer.value;

    console.log(name2, minHourlyCustomers2, maxHourlyCustomers2, averageCookiesPerCustomer2);
    table.deleteRow(stores.length + 1);


    let additonalStore = new Store(name2, minHourlyCustomers2, maxHourlyCustomers2, averageCookiesPerCustomer2);

    console.log(additonalStore);
    console.log(name2, minHourlyCustomers2, maxHourlyCustomers2, averageCookiesPerCustomer2);
    console.log(stores);

    totalarray = [];
    grandtotal = 0;
    total();
    footerRaw();

}
console.log(stores);



// try for the strech goal Lab09 not workking yet , only works for one input 


/*let storeForm = document.getElementById('form');

form.addEventListener('submit', submitter);

function submitter(event) {

    event.preventDefault();

    let newStoreName = event.target.name.value;
    let newStoreMinHourlyCustomers = event.target.minHourlyCustomers.value;
    let newStoreMaxHourlyCustomers = event.target.maxHourlyCustomers.value;
    let newStoreAverageCookiesPerCustomer = event.target.averageCookiesPerCustomer.value;

    let added = "not added";


    for (let i = 0; i < stores.length; i++) {

        if (newStoreName.toLowerCase() === stores[i].name) {
            table.deleteRow(stores.length + 1);
            table.deleteRow(i + 1);
            let additonalStore = new Store(newStoreName, newStoreMinHourlyCustomers, newStoreMaxHourlyCustomers, newStoreAverageCookiesPerCustomer);
            console.log("updade", additonalStore);
            added = "added";
            totalarray = [];
            grandtotal = 0;
            total();
            footerRaw();
            console.log("first if runned");
        }
    }

    if (added = "not added") {
        table.deleteRow(stores.length + 1);
        let additonalStore = new Store(newStoreName, newStoreMinHourlyCustomers, newStoreMaxHourlyCustomers, newStoreAverageCookiesPerCustomer);
        console.log("new", additonalStore);
        totalarray = [];
        grandtotal = 0;
        total()
        footerRaw()
        console.log("sec if runned");
    }
}
*/






