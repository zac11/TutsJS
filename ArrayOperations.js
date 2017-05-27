var Chance = require('chance');
var chance = new Chance();
 var new_arr=[];

var get_weekday_limt = chance.integer({min:1,max:7});

console.log(get_weekday_limt);

for(i=1;i<=get_weekday_limt;i++){
   new_arr.push(chance.weekday());
}
console.log(new_arr);

let unique_arr = [...new Set(new_arr)];

console.log("Need to set time for "+ unique_arr);