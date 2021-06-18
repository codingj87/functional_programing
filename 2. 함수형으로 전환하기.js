

const users = [
  { id: 1, name: 'AB', age: 36 },
  { id: 2, name: 'CD', age: 20 },
  { id: 3, name: 'EF', age: 40 },
  { id: 4, name: 'GH', age: 49 },
  { id: 5, name: 'IJ', age: 19 },
  { id: 6, name: 'KL', age: 29 },
  { id: 7, name: 'MN', age: 39 },
  { id: 8, name: 'OP', age: 33 },
]

// 1. 명령형 코드
  // 1. 30세 이상인 users를 거른다.
  var temp_users = [];
  for (var i = 0; i < users.length; i++) {
    if (users[i].age >= 30) {
      temp_users.push(users[i]);
    }
  }
  console.log(temp_users);
  
    // 2. 30세 이상인 users의 names를 수집한다.
  var names = [];
  for (var i = 0; i < temp_users.length; i++) {
    names.push(temp_users[i].name);
  }
  console.log(names);
  
    // 3. 30세 미만인 users를 거른다.
  var temp_users = [];
  for (var i = 0; i < users.length; i++) {
    if (users[i].age < 30) {
      temp_users.push(users[i]);
    }
  }
  console.log(temp_users);
  
    // 4. 30세 미만인 users의 ages를 수집한다.
  var ages = [];
  for (var i = 0; i < temp_users.length; i++) {
    ages.push(temp_users[i].age);
  }
  console.log(ages);



// 와.... 배열 내장 함수 filter 가 순수 함수로 만든거구나...


// 30세 이상 
const users30 = _filter(users, function(user) { return user.age > 30});
console.log(users30)
const users30_filter = users.filter(user => user.age > 30);

// 30세 미만
const usersNot30 = _filter(users, function(user) { return user.age < 30});
console.log(usersNot30)
const usersNot30_filter = users.filter(user => user.age < 30);


const users30name = _map(users30, function(user) {return user.name});
console.log(users30name)

const usersNot30Age = _map(usersNot30, function(user) {return user.age});
console.log(usersNot30Age);


const arrayUsers30Name = users.filter(user => user.age > 30).map(user => user.name);
console.log(arrayUsers30Name);


// array 같아 보여도 array like 이다 
console.log(document.querySelectorAll('*'));

// console.log(document.querySelectorAll('*').map(function(node) {
//   return node.nodeName;
// }));

console.log(_map(document.querySelectorAll('*'), function(node) {
  return node.nodeName;
}));



//3 curry 
// 함수의 평가를 뒤로 밀어서 원할 때 평가하도록 하는 기법

function _curry(fn) {
  return function(a, b) {
    return arguments.length === 2
            ? fn(a, b) 
            : function(b) {
                return fn(a, b);
              }
  }
}

const add = _curry(function(a, b) {
  return a + b;
});

const add10 = add(10);
const add10_5 = add10(5);
console.log(add10_5);

const add2 = add(3, 4);
console.log(add2);