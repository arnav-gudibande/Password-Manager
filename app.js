console.log("starting password manager...");
var storage = require("node-persist");
storage.initSync();

function createAccount (account) {
  var accounts = storage.getItemSync("accounts");
  if(typeof accounts === "undefined") {
    accounts = [];
  }
  accounts.push(account);
  storage.setItemSync("accounts", accounts);
  return account;
}


function getAccount (accountName) {
  var accounts = storage.getItemSync("accounts");
  var matchedAccount;
  accounts.forEach(function (account) {
    if(account.name === accountName){
      matchedAccount = account;
    }
  });
  return matchedAccount;
}

//createAccount({
//  name: "Gmail",
//  username: "arnav.gudibande@gmail.com",
//  password: "1234"
//})

var gmailAccount = getAccount("Gmail");
console.log(gmailAccount);
