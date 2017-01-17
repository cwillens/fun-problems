options.push(knapsack(items.slice(0,i).concat(items.slice(i+1)));

  //start with all items, take out one by one. Probably naive solution, trying to figure out other ways to do it
var knapsack = function(items, limit) {
    // TODO: Implement
    var value = 0;
    var weight = 0;
    for (var i = 0; i < items.length; i++) {
        value += items[i].value;
        weight += items[i].weight;
    }
    if (weight <= limit) {
        return value;
    } else {
        var options = [];
        for (var i = 0; i < items.length; i++) {
            options.push(knapsack(items.slice(0,i).concat(items.slice(i+1)), limit));
        }
        return Math.max(...options);
    }
}


// TODO: Write test cases!
var failedTests = 0;
var itemsArray = [{value: 5, weight:4}, {value: 3, weight: 8}, {value:40, weight: 10}, {value:4, weight: 5}]; 
var test1 = knapsack(itemsArray, 9);
if (test1 !== 9) {
    console.log('Expected', test1, 'to be 9');
    failedTests++;
}
var test2 = knapsack(itemsArray, 6);
if (test2 !== 5) {
    console.log('Expected', test2, 'to be 5');
    failedTests++;
}
var test3 = knapsack(itemsArray, 16);
if (test3 !== 45) {
    console.log('Expected', test3, 'to be 45');
    failedTests++;
}
var test4 = knapsack(itemsArray, 10);
if (test4 !== 40) {
    console.log('Expected', test4, 'to be 40');
    failedTests++;
}

var goods = [
           {weight:2, value:5},
           {weight:2, value:4},
           {weight:1, value:1},
           {weight:4, value:10}
           ];
var test5 = knapsack(goods, 4);
if (test5 !== 10) {
    console.log('Expected', test5, 'to be 10');
    failedTests++;
}

//if no goods fit in the bag, should return 0
goods = [
           {weight:2, value:5},
           {weight:2, value:4}
           ];
var test6 = knapsack(goods, 1);
if (test6 !== 0) {
    console.log('Expected', test6, 'to be 0');
    failedTests++;
}

goods = [
           {weight:2, value:4},
           {weight:2, value:4},
           {weight:3, value:6},
           {weight:4, value:9},
           {weight:1, value:1}
           ];
var test7 = knapsack(goods, 5);
if (test7 !== 10) {
    console.log('Expected', test7, 'to be 10');
    failedTests++;
}

goods = [
           {weight:20, value:40},
           {weight:15, value:28},
           {weight:15, value:28}
           ];
var test8 = knapsack(goods, 30);
if (test8 !== 56) {
    console.log('Expected', test6, 'to be 56');
    failedTests++;
}

console.log('Failed', failedTests, 'tests');