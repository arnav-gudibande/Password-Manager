var argv = require("yargs")
  .command("hello", "Greets the user", funtion (yargs) {
    yargs.options({
      name: {
        demand: true,
        alias: "n",
        description: "Your first name goes here",
        type: "String"
      },
      lastname: {
        demand: true;
        alais: "l",
        description: "last name goes here",
        type: "String"
      }
    });
  })
  .command("get", "getting the account", function (yargs){

  })
  .help("help")
  .argv;
var command = argv._[0];


console.log(argv);

if (command === "hello" && typeof argv.name != "undefined" && typeof argv.lastname != "undefined") {
  console.log("Hello " + argv.name + " " + argv.lastname + "!");
} else if (command === "hello" && typeof argv.name != "undefined") {
  console.log("Hello "+ argv.name+"!");
} else if (command === "hello"){
  console.log('Hello world');
}
