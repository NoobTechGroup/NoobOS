const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const port = 8000;

const schema = buildSchema(`
type Query{
   msg: String,
   pawa: String,
   diceRoll(dices: Int!, sides:Int):[Int]
   
}

`);

const root = {
  msg: () => {
    return "Epale";
  },
  pawa: () => {
    return "Do the imposible see the invisible, raw raw fight the power";
  },
  diceRoll: ({ dices, sides }) => {
    if (!dices || !sides) return [0];
    let answer = [];
    for (i = 0; i < dices; i++) {
      answer = [...answer, 1 + Math.floor(Math.random() * sides)];
    }
    return answer;
  },
};
const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(port);
