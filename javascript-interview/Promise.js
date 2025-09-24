function fetchData() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1").then((r) =>
    r.json()
  );
}

// Using async/await
async function getTodo() {
  const data = await fetchData();
  console.log(data.title);
}
getTodo();
