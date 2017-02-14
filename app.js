'use strict';

var result_arr = [];
var hours = ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12am: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ','8pm: ',];

// Makes the parent elements ul
var store_arr = ['first_store','second_store','third_store', 'fourth_store','fifth_store'];
var stores = document.getElementById('stores');
for (var i = 0; i < store_arr.length; i++) {
  var ul = document.createElement('ul');
  ul.setAttribute('id', store_arr[i]);
  stores.appendChild(ul);
};

var first_store = {

  store_name: '1st and Pike',
  min_cust: 23,
  max_cust: 65,
  avg_cookies_per_cust: 6.3,
  cust_per_hour: function () {
    return Math.floor(Math.random() * (this.max_cust - this.min_cust)) + this.min_cust;
  },
  hourly_cookie_total: function () {
    return this.cust_per_hour() * this.avg_cookies_per_cust;
  },
  display: function () {
    var total = 0;
    var name = document.getElementById('first_store');
    name.textContent = this.store_name;
    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      var hour_total = parseInt(this.hourly_cookie_total());
      total += hour_total;
      li.textContent = hours[i] + hour_total + ' cookies';
      name.appendChild(li);
      console.log('made a li');
    };
    console.log(total);
    var li_total = document.createElement('li');
    li_total.textContent = 'Total: ' + total + ' cookies';
    name.appendChild(li_total);
    result_arr.push(total);
    console.log(result_arr);
  }
};

var second_store = {

  store_name: 'SeaTac Airport',
  min_cust: 3,
  max_cust: 24,
  avg_cookies_per_cust: 1.2,
  cust_per_hour: function () {
    return Math.floor(Math.random() * (this.max_cust - this.min_cust)) + this.min_cust;
  },
  hourly_cookie_total: function () {
    return this.cust_per_hour() * this.avg_cookies_per_cust;
  },
  display: function () {
    var total = 0;
    var name = document.getElementById('second_store');
    name.textContent = this.store_name;
    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      var hour_total = parseInt(this.hourly_cookie_total());
      total += hour_total;
      li.textContent = hours[i] + hour_total + ' cookies';
      name.appendChild(li);
      console.log('made a li');
    };
    console.log(total);
    var li_total = document.createElement('li');
    li_total.textContent = 'Total: ' + total + ' cookies';
    name.appendChild(li_total);
    result_arr.push(total);
    console.log(result_arr);
  }
};

var third_store = {

  store_name: 'Seattle Center',
  min_cust: 11,
  max_cust: 38,
  avg_cookies_per_cust: 3.7,
  cust_per_hour: function () {
    return Math.floor(Math.random() * (this.max_cust - this.min_cust)) + this.min_cust;
  },
  hourly_cookie_total: function () {
    return this.cust_per_hour() * this.avg_cookies_per_cust;
  },
  display: function () {
    var total = 0;
    var name = document.getElementById('third_store');
    name.textContent = this.store_name;
    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      var hour_total = parseInt(this.hourly_cookie_total());
      total += hour_total;
      li.textContent = hours[i] + hour_total + ' cookies';
      name.appendChild(li);
      console.log('made a li');
    };
    console.log(total);
    var li_total = document.createElement('li');
    li_total.textContent = 'Total: ' + total + ' cookies';
    name.appendChild(li_total);
    result_arr.push(total);
    console.log(result_arr);
  }
};

var fourth_store = {

  store_name: 'Capitol Hill',
  min_cust: 20,
  max_cust: 38,
  avg_cookies_per_cust: 2.3,
  cust_per_hour: function () {
    return Math.floor(Math.random() * (this.max_cust - this.min_cust)) + this.min_cust;
  },
  hourly_cookie_total: function () {
    return this.cust_per_hour() * this.avg_cookies_per_cust;
  },
  display: function () {
    var total = 0;
    var name = document.getElementById('fourth_store');
    name.textContent = this.store_name;
    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      var hour_total = parseInt(this.hourly_cookie_total());
      total += hour_total;
      li.textContent = hours[i] + hour_total + ' cookies';
      name.appendChild(li);
      console.log('made a li');
    };
    console.log(total);
    var li_total = document.createElement('li');
    li_total.textContent = 'Total: ' + total + ' cookies';
    name.appendChild(li_total);
    result_arr.push(total);
    console.log(result_arr);
  }
};

var fifth_store = {

  store_name: 'Alki',
  min_cust: 2,
  max_cust: 16,
  avg_cookies_per_cust: 4.6,
  cust_per_hour: function () {
    return Math.floor(Math.random() * (this.max_cust - this.min_cust)) + this.min_cust;
  },
  hourly_cookie_total: function () {
    return this.cust_per_hour() * this.avg_cookies_per_cust;
  },
  display: function () {
    var total = 0;
    var name = document.getElementById('fifth_store');
    name.textContent = this.store_name;
    for (var i = 0; i < hours.length; i++) {
      var li = document.createElement('li');
      var hour_total = parseInt(this.hourly_cookie_total());
      total += hour_total;
      li.textContent = hours[i] + hour_total + ' cookies';
      name.appendChild(li);
      console.log('made a li');
    };
    console.log(total);
    var li_total = document.createElement('li');
    li_total.textContent = 'Total: ' + total + ' cookies';
    name.appendChild(li_total);
    result_arr.push(total);
    console.log(result_arr);
  }
};


first_store.display();
second_store.display();
third_store.display();
fourth_store.display();
fifth_store.display();