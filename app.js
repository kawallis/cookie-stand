'use strict';


var arr_results = [];
var hours = ['','6:00am','7:00am','8:00am','9:00am',
  '10:00am','11:00am','12:00am','1:00pm',
  '2:00pm','3:00pm','4:00pm','5:00pm',
  '6:00pm','7:00pm','8:00pm', 'Daily Total'];


// created an array for table id + Stores the table element object
function makeHeader() {
  var table = document.getElementById('table');
  var tr = document.createElement('tr');
  tr.id = 'firstrow';
  table.appendChild(tr);
  for (var c = 0; c < hours.length; c++) {
    var th = document.createElement('th');
    th.textContent = hours[c];
    tr.appendChild(th);
  };
}

makeHeader();

function Store (store_name, min_cust,max_cust,avg_cookies_per_cust){
  this.store_name = store_name;
  this.min_cust = min_cust;
  this.max_cust = max_cust;
  this.avg_cookies_per_cust = avg_cookies_per_cust;
  this.daily_array = [];
  this.total = 0;
}

Store.prototype.cust_per_hour = function () {
  return Math.floor(Math.random() * (this.max_cust - this.min_cust)) + this.min_cust;
};

Store.prototype.hourly_cookie_total = function () {
  return this.cust_per_hour() * this.avg_cookies_per_cust;
};

Store.prototype.render = function () {
  var total = 0;
  var table = document.getElementById('table');
  var tr = document.createElement('tr');
  tr.id = this.store_name;
  table.appendChild(tr);
  var row_id = document.getElementById(this.store_name);
  for (var i = 0; i < hours.length - 1; i++) {
    if (i === 0) {
      var head = document.createElement('th');
      head.textContent = this.store_name;
      row_id.appendChild(head);
    }else {
      var td = document.createElement('td');
      var hour_total = parseInt(this.hourly_cookie_total());
      total += hour_total;
      this.daily_array.push(hour_total);
      td.textContent = hour_total;
      row_id.appendChild(td);
      console.log('made a item');
    }
  };
  console.log(total);
  var td_total = document.createElement('td');
  td_total.textContent = total;
  this.total = total;
  row_id.appendChild(td_total);
  arr_results.push(total);
  console.log(arr_results);
};

var pike = new Store('1st and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattle = new Store('Seattle Center', 11, 38, 3.7);
var capitol = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

//table rows
pike.render();
seaTac.render();
seattle.render();
capitol.render();
alki.render();

var clickBtn = document.getElementById('form');
clickBtn.addEventListener('submit', clickHandler);

function clickHandler (event) {
  event.preventDefault();
  var storeName = event.target.store_name.value;
  var min = parseInt(event.target.min.value);
  var max = parseInt(event.target.max.value);
  var acpc = parseInt(event.target.acpc.value);
  if (storeName === '' || isNaN(min) === true || isNaN(max) === true || isNaN(acpc) === true){
    alert('please fill all fields');
  }else {
    var createdStore = new Store(storeName, min, max, acpc);
    object_arr.push(createdStore);
    clearrow();
    createdStore.render();
    hourlyTotal();
  }
}


var object_arr = [pike,seaTac,seattle,capitol,alki];

function hourlyTotal () {
  var table = document.getElementById('table');
  var last_row = document.createElement('tr');
  last_row.id = 'lastrow';
  table.appendChild(last_row);

  function hour_tots (num) {
    var sum = 0;
    for (var i = 0; i < object_arr.length; i++){
      sum += object_arr[i].daily_array[num];
    }
    return sum;
  };

  for (var i = 0; i < hours.length - 1; i++) {
    if (i === 0){
      var lasthead = document.createElement('th');
      lasthead.textContent = 'Hourly Totals';
      last_row.appendChild(lasthead);
      var data_sum = document.createElement('td');
      data_sum.textContent = hour_tots(i);
      last_row.appendChild(data_sum);
    }else if (i === hours.length - 2) {
      data_sum = document.createElement('td');
      //add new function
      data_sum.textContent = lastTotal();
      last_row.appendChild(data_sum);
    }
    else {
      data_sum = document.createElement('td');
      data_sum.textContent = hour_tots(i);
      last_row.appendChild(data_sum);
    }
  }
}

hourlyTotal();


function clearrow () {
  var lastrow = document.getElementById('lastrow');
  console.log(lastrow);
  lastrow.textContent = '';
}

function lastTotal () {
  var sum = 0;
  for (var i = 0; i < object_arr.length; i++){
    sum += object_arr[i].total;
  }
  return sum;
}