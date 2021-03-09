const data = fetch('http://jsonplaceholder.typicode.com/todos')
  .then((res) => res.json())
  .then((data) => console.log(data))
