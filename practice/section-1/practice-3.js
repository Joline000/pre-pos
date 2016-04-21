var collection_new = [];
function collect_same_elements(collection_a, collection_b) {
  for(var i = 0; i < collection_a.length; i++)
  {
      isEqual(collection_a[i], collection_b);
  }
  return collection_new;
}

function isEqual(element, collection_b) {
    for(var j = 0; j < collection_b.length; j++)
      {
          if(element === collection_b[j])
          {
              collection_new.push(element);
          }
      }
}
