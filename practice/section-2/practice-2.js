function count_same_elements(collection) {
  var count_same_new = [{key: 'a', count: 0},
  {key: 'e', count: 0},
  {key: 'h', count: 0},
  {key: 't', count: 0},
  {key: 'f', count: 0},
  {key: 'c', count: 0},
  {key: "g", count: 0},
  {key: 'b', count: 0},
  {key: 'd', count: 0}];
  
	  for(var x = 0; x < count_same_new.length; x++) {
          
          countAdd(count_same_new[x], collection);
	  }
	  return count_same_new;
}

function countAdd(count_new, collection) {
    for(var x = 0; x < collection.length; x++)
    {
         if(count_new.key == collection[x]) {
		      count_new.count++;
		  }
		  else if(count_new.key == collection[x][0] && collection[x].length > 1) {
		      count_new.count = parseInt(count_new.count + collection[x][2]);
		  }
    }
}
