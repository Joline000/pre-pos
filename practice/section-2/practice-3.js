function count_same_elements(collection) {
  var count_same_new = [{name: 'a', summary: 0},
  {name: 'e', summary: 0},
  {name: 'h', summary: 0},
  {name: 't', summary: 0},
  {name: 'f', summary: 0},
  {name: 'c', summary: 0},
  {name: "g", summary: 0},
  {name: 'b', summary: 0},
  {name: 'd', summary: 0}];
  
  counts(count_same_new,collection);

  return count_same_new;
}

function counts(count_same_new, collection_a) {
    for (var x = 0; x < collection_a.length; x++) {
        var flag = 1;
        
        if (collection_a[x].length != 1) {
            flag = elementNumber(collection_a[x]);
            collection_a[x] = elementChar(collection_a[x]);
        }
        
        summaryAdd(collection_a[x], count_same_new, flag);
    }
    return count_same_new;
}

function summaryAdd(element, collection, flag) {
    for(var x = 0; x < collection.length; x++) {
            if (element == collection[x].name) {
                collection[x].summary += flag;
            }
        }
}

function elementChar(item) {
    var string = [];
    string = item.split("");
    var element_char = string[0];
    return element_char;
}

function elementNumber(item) {
    var string = [];
    var number = '';
    var element_number;
    string = item.split("");
    
    for (var x = 0; x < string.length; x++)
    {
        if(!isNaN(string[x]))
            number += string[x];
    }
    
    element_number = Number(number);
    return element_number;
}
