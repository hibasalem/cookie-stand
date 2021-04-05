'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '4pm', '5pm', '6pm', '7pm'];
let seattle = {
    minHourlyCustomers: 23,
    maxHourlyCustomers: 65,
    averageCookiesPerCustomer: 6.3,
    numberOfCustomers: [],
    numberOfCookies: [],
    total: 0,

    getRandomNumberOfCustomers: function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    },

    getNumberOfCustomers: function () {
        for (let i = 0; i < hours.length; i++) {
            this.numberOfCookies.push(Math.ceil(this.getRandomNumberOfCustomers(this.minHourlyCustomers, this.maxHourlyCustomers) * this.averageCookiesPerCustomer));
            this.total += this.numberOfCookies[i];
        };
    },

    showThem: function () {
        let parent = document.getElementById('parentdiv1');
        let h2Element = document.createElement('h2');
        parent.appendChild(h2Element);
        h2Element.textContent = 'Seattle';

        let ulElement = document.createElement('ul');
        parent.appendChild(ulElement);
        ulElement.className = 'ul1'

        for (let i = 0; i < hours.length; i++) {

            let liElement = document.createElement('li');
            parent.appendChild(liElement);
            liElement.textContent = `${hours[i]}: ${this.numberOfCookies[i]} cookies`;
        }
        let liElement = document.createElement('li');
        parent.appendChild(liElement);
        liElement.textContent = `Total: ${this.total} cookies`;
    }

}
seattle.getNumberOfCustomers();
seattle.showThem();

let Tokyo = {
    minHourlyCustomers: 3,
    maxHourlyCustomers: 24,
    averageCookiesPerCustomer: 1.2,
    numberOfCustomers: [],
    numberOfCookies: [],
    total: 0,

    getRandomNumberOfCustomers: function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    },

    getNumberOfCustomers: function () {
        for (let i = 0; i < hours.length; i++) {
            this.numberOfCookies.push(Math.ceil(this.getRandomNumberOfCustomers(this.minHourlyCustomers, this.maxHourlyCustomers) * this.averageCookiesPerCustomer));
            this.total += this.numberOfCookies[i];
        };
    },

    showThem: function () {
        let parent = document.getElementById('parentdiv1');
        let h2Element = document.createElement('h2');
        parent.appendChild(h2Element);
        h2Element.textContent = 'Tokyo';

        let ulElement = document.createElement('ul');
        parent.appendChild(ulElement);
        ulElement.className = 'ul1'

        for (let i = 0; i < hours.length; i++) {

            let liElement = document.createElement('li');
            parent.appendChild(liElement);
            liElement.textContent = `${hours[i]}: ${this.numberOfCookies[i]} cookies`;
        }
        let liElement = document.createElement('li');
        parent.appendChild(liElement);
        liElement.textContent = `Total: ${this.total} cookies`;
    }

}
Tokyo.getNumberOfCustomers();
Tokyo.showThem();

let Dubai = {
    minHourlyCustomers: 11,
    maxHourlyCustomers: 38,
    averageCookiesPerCustomer: 3.7,
    numberOfCustomers: [],
    numberOfCookies: [],
    total: 0,

    getRandomNumberOfCustomers: function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    },

    getNumberOfCustomers: function () {
        for (let i = 0; i < hours.length; i++) {
            this.numberOfCookies.push(Math.ceil(this.getRandomNumberOfCustomers(this.minHourlyCustomers, this.maxHourlyCustomers) * this.averageCookiesPerCustomer));
            this.total += this.numberOfCookies[i];
        };
    },

    showThem: function () {
        let parent = document.getElementById('parentdiv1');
        let h2Element = document.createElement('h2');
        parent.appendChild(h2Element);
        h2Element.textContent = 'Dubai';

        let ulElement = document.createElement('ul');
        parent.appendChild(ulElement);
        ulElement.className = 'ul1'

        for (let i = 0; i < hours.length; i++) {

            let liElement = document.createElement('li');
            parent.appendChild(liElement);
            liElement.textContent = `${hours[i]}: ${this.numberOfCookies[i]} cookies`;
        }
        let liElement = document.createElement('li');
        parent.appendChild(liElement);
        liElement.textContent = `Total: ${this.total} cookies`;
    }

}
Dubai.getNumberOfCustomers();
Dubai.showThem();


let Paris = {
    minHourlyCustomers: 20,
    maxHourlyCustomers: 38,
    averageCookiesPerCustomer: 2.3,
    numberOfCustomers: [],
    numberOfCookies: [],
    total: 0,

    getRandomNumberOfCustomers: function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    },

    getNumberOfCustomers: function () {
        for (let i = 0; i < hours.length; i++) {
            this.numberOfCookies.push(Math.ceil(this.getRandomNumberOfCustomers(this.minHourlyCustomers, this.maxHourlyCustomers) * this.averageCookiesPerCustomer));
            this.total += this.numberOfCookies[i];
        };
    },

    showThem: function () {
        let parent = document.getElementById('parentdiv1');
        let h2Element = document.createElement('h2');
        parent.appendChild(h2Element);
        h2Element.textContent = 'Paris';

        let ulElement = document.createElement('ul');
        parent.appendChild(ulElement);
        ulElement.className = 'ul1'

        for (let i = 0; i < hours.length; i++) {

            let liElement = document.createElement('li');
            parent.appendChild(liElement);
            liElement.textContent = `${hours[i]}: ${this.numberOfCookies[i]} cookies`;
        }
        let liElement = document.createElement('li');
        parent.appendChild(liElement);
        liElement.textContent = `Total: ${this.total} cookies`;
    }

}
Paris.getNumberOfCustomers();
Paris.showThem();


let Lima = {
    minHourlyCustomers: 2,
    maxHourlyCustomers: 16,
    averageCookiesPerCustomer: 4.6,
    numberOfCustomers: [],
    numberOfCookies: [],
    total: 0,

    getRandomNumberOfCustomers: function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    },

    getNumberOfCustomers: function () {
        for (let i = 0; i < hours.length; i++) {
            this.numberOfCookies.push(Math.ceil(this.getRandomNumberOfCustomers(this.minHourlyCustomers, this.maxHourlyCustomers) * this.averageCookiesPerCustomer));
            this.total += this.numberOfCookies[i];
        };
    },

    showThem: function () {
        let parent = document.getElementById('parentdiv1');
        let h2Element = document.createElement('h2');
        parent.appendChild(h2Element);
        h2Element.textContent = 'Lima';

        let ulElement = document.createElement('ul');
        parent.appendChild(ulElement);
        ulElement.className = 'ul1'

        for (let i = 0; i < hours.length; i++) {

            let liElement = document.createElement('li');
            parent.appendChild(liElement);
            liElement.textContent = `${hours[i]}: ${this.numberOfCookies[i]} cookies`;
        }
        let liElement = document.createElement('li');
        parent.appendChild(liElement);
        liElement.textContent = `Total: ${this.total} cookies`;
    }

}
Lima.getNumberOfCustomers();
Lima.showThem();


