'use strict';


var arr_results = [];
var hours = ['','6:00am','7:00am','8:00am','9:00am',
  '10:00am','11:00am','12:00am','1:00pm',
  '2:00pm','3:00pm','4:00pm','5:00pm',
  '6:00pm','7:00pm','8:00pm', 'Daily Total'];


// created an array for table id + Stores the table element object
var table_arr = ['first','second','third','fourth','fifth', 'sixth','seventh'];
var table = document.getElementById('table');
//creates all the table parents
for (var i = 0; i < table_arr.length; i++) {
  var tr = document.createElement('tr');
  tr.setAttribute('id', table_arr[i]);
  table.appendChild(tr);
};

var first_row = document.getElementById('first');
for (var c = 0; c < hours.length; c++) {
  var th = document.createElement('th');
  th.textContent = hours[c];
  first_row.appendChild(th);
};

function Store (store_name, min_cust,max_cust,avg_cookies_per_cust,id_tag, table_tag){
  this.store_name = store_name;
  this.min_cust = min_cust;
  this.max_cust = max_cust;
  this.avg_cookies_per_cust = avg_cookies_per_cust;
  this.id_tag = id_tag;
  this.table_tag = table_tag;
  this.daily_array = [];
}

Store.prototype.cust_per_hour = function () {
  return Math.floor(Math.random() * (this.max_cust - this.min_cust)) + this.min_cust;
};

Store.prototype.hourly_cookie_total = function () {
  return this.cust_per_hour() * this.avg_cookies_per_cust;
};

Store.prototype.render = function () {
  var total = 0;
  var tag = document.getElementById(this.table_tag);
  for (var i = 0; i < hours.length - 1; i++) {
    if (i === 0) {
      var head = document.createElement('th');
      head.textContent = this.store_name;
      tag.appendChild(head);
    }else {
      var td = document.createElement('td');
      var hour_total = parseInt(this.hourly_cookie_total());
      total += hour_total;
      this.daily_array.push(hour_total);
      td.textContent = hour_total;
      tag.appendChild(td);
      console.log('made a item');
    }
  };
  console.log(total);
  var td_total = document.createElement('td');
  td_total.textContent = total;
  tag.appendChild(td_total);
  arr_results.push(total);
  console.log(arr_results);
};

var pike = new Store('1st and Pike', 23, 65, 6.3,'first_store','second');
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2, 'second_store','third');
var seattle = new Store('Seattle Center', 11, 38, 3.7, 'third_store', 'fourth');
var capitol = new Store('Capitol Hill', 20, 38, 2.3, 'fourth_store', 'fifth');
var alki = new Store('Alki', 2, 16, 4.6, 'fifth_store', 'sixth');

//table rows
pike.render();
seaTac.render();
seattle.render();
capitol.render();
alki.render();

var object_arr = [pike,seaTac,seattle,capitol,alki];
var last_row = document.getElementById('seventh');

function hour_tots (num) {
  var sum = 0;
  for (var i = 0; i < object_arr.length; i++){
    sum += object_arr[i].daily_array[num];
  }
  return sum;
};

for (i = 0; i < hours.length - 2; i++) {
  if (i === 0){
    var lasthead = document.createElement('th');
    lasthead.textContent = 'Hourly Totals';
    last_row.appendChild(lasthead);
    var data_sum = document.createElement('td');
    data_sum.textContent = hour_tots(i);
    last_row.appendChild(data_sum);
  }else {
    data_sum = document.createElement('td');
    data_sum.textContent = hour_tots(i);
    last_row.appendChild(data_sum);
  }
}
