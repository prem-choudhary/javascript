function greet() {
  console.log("Good Morning!");
}
greet();

for (var i = 0; i < 100; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 100); // 100ms delay between each
}
