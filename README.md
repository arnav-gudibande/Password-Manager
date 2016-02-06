# password-manager-node-js


Store passwords on your machine locally

Uses node persist, yagar and crypto modules

Passwords are stored securely using the AES encryption format

### Usage

Navigate into the folder where you have downloaded this file

```javascript
  node app.js create
```

Then follow the instructions and create an account like this:

```javascript
  node app.js create -n name -u exampleusername -p password123 -m master123
```

To retrieve an account:

```javascript
  node app.js get -n name -m master123
