async function test() {
  console.log("Start");

  await Promise.resolve().then(() => {
    console.log("Microtask 1");
  });

  Promise.resolve()
    .then(() => {
      console.log("Microtask 2");
    })
    .then((res) => {
      console.log("Inside then");
    });

  console.log("End");
}

test();
