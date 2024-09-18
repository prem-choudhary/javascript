// // var c = 200;
// let a = 300;

// if (true) {
//   let a = 10;
//   const b = 20;
//   //   var c = 30;
//   //   console.log("inner " + a);
// }

// // for (let i = 0; i < array.length; i++) {
// //   const element = array[i];
// // }

// // console.log(a);
// // console.log(b);
// // console.log(c);

// const first = " SuperHero";
// // console.log(first);

// /* ++++++++++ globla scope +++++++++ */

// var user = "kalu madari";
// function cartoon() {
//   console.log(user); /* ass*/
// }
// cartoon();
// console.log(user); /* ass */

// /* +++++++++++ finction scope +++++++++ */
// var age = 22;
// function testfunction() {
//   var localvar = "My Super Hero is Chota bhim";
//   age = 21;
//   console.log(localvar); /* ass */
//   console.log(age);
// }
// testfunction();
// // console.log(localvar); /* not work */

// /* ++++++++++++ Block Scope ++++++++++ */

// if (true) {
//   var blockScopevar = " This blockScope is work";
//   const scopevar = "it will be work ";
//   console.log(blockScopevar);
//   console.log(scopevar);
// }

// // console.log(blockScopevar) /* it will not work */
// // console.log(scopevar) /* also not work */

// var globalVar = "I am global";

// function outerFunction() {
//   var outerVar = "I am outer";

//   function innerFunction() {
//     var innerVar = "I am inner";
//     console.log(innerVar); // Accessible
//     console.log(outerVar); // lexical scope
//     console.log(globalVar); //  global scope
//   }

//   innerFunction();
// }

// outerFunction();

// const name = "prem";

// function username() {
//   const name = "ram";
//   const lastname = "chaudhary";
//   console.log(name);
//   console.log(lastname);
// }
// username();
// // console.log(name);

// /* block scope */ 3;

// if (1 === 1) {
//   var cool = true;
// }
// // console.log(cool);

// let hope;
// if (1 === 1) {
//   hope = true;
// }
// // console.log(hope);

// /* ++++++++++++++ */

// function isCool(name) {
//   let cool;
//   if (1 === 1) {
//     cool = true;
//   }
//   console.log(cool);
//   return cool;
// }
// isCool();

// for (var i = 0; i < 10; i++) {
//   console.info(i);
// }

// const loop = "prem";
// console.table(loop);

// /*  +++++++++ +  ++++++++++++ ++++++++++++ +  ++++++++++++*/

// const dog = "snickers";
// function logDog(dog) {
//   //   console.log(dog);
// }
// function go() {
//   const dog = "sunny";
//   logDog("Rufus");
// }
// go();

// function outer() {
//   let outerlet = "Rawan";
//   console.log("Who is", outerlet);

//   function inner() {
//     let second = "2";
//     console.log("inner", outerlet);
//   }
//   function Hello() {
//     console.log("this is a two number ", outerlet);
//   }
//   inner();
//   Hello();
// }
// outer();

// function sayHi(name) {
//   function yell() {
//     console.log(name.toUpperCase());
//   }
//   yell();
// }
//   yell()

function outer() {
    const outerVar = "Hey I am the outer Var";
     function inner() {
      const innerVar = "hey I am an inner var";
      console.log(innerVar);
      console.log(outerVar);
    }
    inner()
  }
  outer()

  