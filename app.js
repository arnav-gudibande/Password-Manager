console.log("Starting Node Password Manager...");
var storage = require("node-persist");
var crypto = require("crypto-js");
storage.initSync();

//fetching the name/psswd/type of account from user
var argv = require("yargs")
  .command("create", "Create a New Account", function (yargs) {
    yargs.options({
      name: {
        demand: true,
        alias: "n",
        description: "Account Name (eg: Twitter, Facebook)",
        type: "string"
      },
      username: {
        demand: true,
        alias: "u",
        description: "Account Username or Email",
        type: "string"
      },
      password: {
        demand: true,
        alias: "p",
        description: "Account password",
        type: "string"
      },
      masterPassword: {
        demand: true,
        alias: "m",
        description: "Master Password for encryption",
        type: "string"
      }
    }).help('help');
  })
  .command("get", "Get an existing account", function (yargs) {
    yargs.options({
      name: {
        demand: true,
        alias: "n",
        description: "Account Name (eg: Twitter, Facebook)",
        type: "string"
      },
      masterPassword: {
        demand: true,
        alias: "m",
        description: "Master Password for encryption",
        type: "string"
      }
    }).help("help");
  })
  .help("help")
  .argv;

var command = argv._[0];

//ecnrypting data
function getAccounts (masterPassword){
  var encryptedAccounts = storage.getItemSync("accounts");
  var accounts = [];
  //decrypts
  if (typeof encryptedAccounts !== "undefined"){
    var bytes = crypto.AES.decrypt(encryptedAccounts, masterPassword);
    var accounts = JSON.parse(bytes.toString(crypto.enc.Utf8));
  }
  //returns the array
  return accounts;
}

function saveAccounts (accounts, masterPassword){
  //encrypt accounts
  var encryptedAccounts = crypto.AES.encrypt(JSON.stringify(accounts), masterPassword);
  storage.setItemSync("accounts", encryptedAccounts.toString());
  return accounts;
}

function createAccount (account, masterPassword) {
  var accounts = getAccounts(masterPassword);

  accounts.push(account);

  saveAccounts(accounts, masterPassword);

  return account;
}


function getAccount (accountName, masterPassword) {
  var accounts = getAccounts(masterPassword);
  var matchedAccount;

  accounts.forEach(function (account) {
    if(account.name === accountName){
      matchedAccount = account;
    }
  });

  return matchedAccount;
}

//if statement to run functions for the entire program
if (command === "create"){
  try{
    var createdAccount = createAccount({
      name: argv.name,
      username: argv.username,
      password: argv.password,
    }, argv.masterPassword);
    console.log("Account Created...");
    console.log(createdAccount);
  } catch (e) {
    console.log("Unable to create account");
  }
  } else if (command === "get"){
  try{
    var fetchedAccount = getAccount(argv.name, argv.masterPassword);
    if (typeof fetchedAccount === "undefined"){
      console.log("Account not Found");
    } else {
      console.log("Account Found!");
      console.log(fetchedAccount);
    }
  } catch (e) {
    console.log("Unable to fetch account");
  }
}
