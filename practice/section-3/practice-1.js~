function create_updated_collection(collection_a, object_b) {
  for(var x = 0; x < collection_a.length; x++) {
      countSub(object_b, collection_a[x])
  }
  return collection_a;
}

function countSub(object_b, collection_a) {
    for(var x = 0; x < object_b.value.length; x++) {
          if(object_b.value[x] == collection_a.key) {
              collection_a.count--;
          }
      }
}
