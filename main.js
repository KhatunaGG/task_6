//fetch data from this API: https://jsonplaceholder.typicode.com/users parsed it that
// each object have only four props like id, name,
// username and email and write this array into users.json


const fs = require("fs/promises");

async function fetchData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await res.json();
    const data = [];
    result.map((el) => (
        data.push({id: el.id, name: el.name, username: el.username, email: el.email})
    ))

    await fs.writeFile('data.json', JSON.stringify(data))

  } catch (er) {
    console.log(er);
  }
}

fetchData();

// write a random text in file then read this data and count how many words are there

const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, nesciunt!";

async function countWords() {
  try {
    await fs.writeFile("text.txt", text);

    const newText = await fs.readFile("text.txt", "utf-8");
    const textArr = newText.split(" ").length;
    console.log(textArr);
  } catch (er) {
    console.log(er);
  }
}
countWords();

//read users json data then filter them older than 18 years and rewrite this data

const users = [
  { name: "ann", age: 23, mail: "ann@gmail.com" },
  { name: "tom", age: 16, mail: "tom@gmail.com" },
  { name: "bob", age: 14, mail: "bob@gmail.com" },
  { name: "kate", age: 22, mail: "kate@gmail.com" },
  { name: "john", age: 26, mail: "john@gmail.com" },
];


async function rewriteData() {
try {
    await fs.writeFile('users.json', JSON.stringify(users))

    const newUsers = await fs.readFile('users.json', 'utf-8')
    const result = JSON.parse(newUsers).filter(el => el.age > 18)
  
    await fs.writeFile('users2.json', JSON.stringify(result))

}catch (er) {
    console.log(er)
}
}

rewriteData()