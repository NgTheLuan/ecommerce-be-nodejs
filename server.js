const app = require("./app");

const PORT = 3001;

const server = app.listen(PORT, () => {
  console.log(`ecommerce start with port : ${PORT}`);
});

//When press Control + C
process.on("SIGINT", () => {
  server.close(() => console.log(` Exit Server Express!`));
});
