# Node js Password Manager


This node js password manager allows you to store passwords on your machine locally. It uses node persist, yagar and crypto modules for data storage, user input and encryption.

All credentials and passwords are stored securely using a unique encryption format.

### Usage

Navigate into the folder where you have downloaded this file.

Then view the instrucutions on creating an account:

```javascript
  node app.js create
```

Then create an account by specifying credentials:

```javascript
  node app.js create -n name -u exampleusername -p password123 -m master123
```

To retrieve a previously created account:

```javascript
  node app.js get -n name -m master123
