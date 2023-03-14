const express = require("express");
const app = express();
const PORT = 3000;

const data = [
  {
    name: "albertic",
    age: 20,
    nation: "croatia",
    id:1
  },
  {
    name: "tom",
    age: 21,
    nation: "polland",
    id:2
  },
  {
    name: "jerry",
    age: 20,
    nation: "croatia",
    id:3
  },
];


app.get("/people", (req, res) => {
  res.send(data);
});

app.get("/people/:id", (req, res) => {

  const findPerson = data.filter((person)=> person.id == req.params.id )

  res.send(findPerson);
  console.log( req.params.id)  
  
});

app.listen(PORT, () => console.log(`listening to port ${PORT}`));
