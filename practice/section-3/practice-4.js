function create_updated_collection(collection_a, object_b) {
  var collection_c = [
      {key: "a", count: 0},
      {key: "e", count: 0},
      {key: "h", count: 0},
      {key: "t", count: 0},
      {key: "f", count: 0},
      {key: "c", count: 0},
      {key: "g", count: 0},
      {key: "b", count: 0},
      {key: "d", count: 0}];
      
   for(var x = 0; x < collection_c.length; x++) {
       for(var y = 0; y < collection_a.length; y++) {
           if(collection_c[x].key == collection_a[y]) {
               collection_c[x].count++;
           }
           else if(collection_c[x].key == collection_a[y][0] && collection_a[y].length > 1) {
		      collection_c[x].count = parseInt(collection_c[x].count + collection_a[y][2]);
		  }
       }
   }
   
   for(var x = 0; x < collection_c.length; x++) {
      for(var y = 0; y < object_b.value.length; y++) {
          if(object_b.value[y] == collection_c[x].key) {
              collection_c[x].count -= Math.floor(collection_c[x].count / 3);
          } 
      }
  }
  return collection_c;
}
