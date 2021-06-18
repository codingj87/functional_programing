function _filter(list, predicate) {
  const new_list = [];
  _each(list, function() {
    if (predicate(list[i])) {
      new_list.push(list[i]);
    };
  })
  return new_list;
}


function _map(list, mapper) {
  const new_list = [];
  _each(list, function(val) {
    new_list.push(mapper(val))
  });
  return new_list;
}

function _each(list, iter) {
  for (let i = 0; i < list.length; i++) {
    iter(list[i]);
  }
  return list;
}



