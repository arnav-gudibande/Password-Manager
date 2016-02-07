# Node js Password Manager


This node js passowrd manager allows you to store passwords on your machine locally. It uses node persist, yagar and crypto modules for data storage, user input and encryption respectively.

All credentials and passwords are stored securely using a unique encryption format.

### Usage

Navigate into the folder where you have downloaded this file

Then create an account:

```javascript
  node app.js create
```

Then follow the instructions and specify credentials like this:

```javascript
  node app.js create -n name -u exampleusername -p password123 -m master123
```

To retrieve an account:

```javascript
  node app.js get -n name -m master123
