const fetch = require('node-fetch');

const numArray = [];
for (let i = 1; i < 31; i++) {
  numArray.push(i);
}

const loadDataWithPromiseAll = async () => {
  const start = new Date();
  const promises = numArray.map(num =>
    fetch(`https://jsonplaceholder.typicode.com/todos/${num}`)
  );

  const results = await Promise.all(promises);
  // const dataPromises = results.map(result => result.json());
  // const data = await Promise.all(dataPromises);

  const end = new Date();
  console.log(`Promise all took: ${end - start} milliseconds.`);
};

const loadData = async () => {
  const start = new Date();

  for (const num of numArray) {
    await fetch(`https://jsonplaceholder.typicode.com/todos/${num}`);
  }

  const end = new Date();
  console.log(`Regular loading took: ${end - start} milliseconds.`);
};

loadData();
loadDataWithPromiseAll();
