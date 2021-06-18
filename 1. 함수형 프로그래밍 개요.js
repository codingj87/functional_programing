

// 순수함수
function add(a, b) {
  return a + b;
}


console.log(add(10, 5));
console.log(add(10, 5));
console.log(add(10, 5));
console.log(add(10, 5));


let c = 10;
// 순수함수 x 외부값에 영향을 받는다
function add2(a, b) {
  return a + b + c;
}

console.log(add2(10, 5))
c = 20;
console.log(add2(10, 5))

// 순수함수 x 외부 값에 영향을 준다
let d = 10;
function add3(a, b) {
  d = b;
  return a + b;
}

console.log(d);
console.log(add3(10, 5));
console.log(d);


// 외부 객체에 영향을 준다
function add4(obj, b) {
  return obj.var += b;
}

const obj1 = { var: 1}
console.log(obj1);
console.log(add4(obj1, 10));
console.log(obj1);



// 순수함수로...  새로운 객체를 만들어서 return 
function add5(obj, b) {
  return { var: obj.var + b };
}

const obj2 = { var: 1 };
console.log(obj2);
console.log(add5(obj2, 10))
console.log(obj2);




// 일급함수
function add_maker(a) {
  return function(b) {
    return a + b;
  }
}

const add10 = add_maker(10);
console.log( add10(20) );

// add_maker 는 일급함수 
// function(b) {...} 는 클로저 이면서 순수함수
// add_maker 가 function(b) 를 return 해서 add10 변수에 담았을 때 return 할 때 함수는 종료된다
// 하지만 add10 = function(b) 이 실행되는 시점에 이미 종료된 함수에 있던 변수 a 를 참조할 수 있다. = 클로저

// function(b) 는 순수함수
// a 값을 참조만 할 뿐 변경하거나 하지 않는다.
// function(b) 는 어느 시점에 호출을 하던, 동일한 인자에 동일한 결과를 return 한다.


function f4(f1, f2, f3) {
  return f3(f1() + f2());
}


console.log(f4(
  function() { return 1; },
  function() { return 2; },
  function(a) { return a * a; }
));


