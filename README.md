# MERN - Movie Review App

## Description
This is a simple movie review app that allows users to add movies and review them.

### Installation:
Setup the ```node.js``` backend:
1. Create a folder on your computer and name it ```Review-App```.
2. Within the ```Review-App``` folder, create a ```backend``` folder.
3. Within the ```backend``` folder, create an ```app.js``` file.

4. Open the ```Review-App``` folder in your code editor and ```cd``` into the ```backend``` folder and run the following command ```npm init``` in the terminal to initialize the backend and create the ```package.json``` file.

### Setup the ```express``` server web framework for ```node.js```:

1. Run the following command in the terminal to install ```express```:
  ```npm install express```

  * The ```node_modules``` folder will be created and the ```express``` package will be installed.

  ### Create first server:

  1. Open the ```app.js``` file and add the following code and run ```node app.js``` in the terminal to start the server:
  ```javascript
const express = require("express")
const app = express()

app.listen(8000, () => {
    console.log("Server is running on port 8000")
})
  ```
The server is now running on port 8000, and should display ```Cannot Get /```

2. Now mend the following code to the ```app.js``` file and run ```node app.js``` in the terminal to display ```Backend server id running on port 8000.``` in the browser:
```javascript
const express = require("express")
const app = express()

app.get('/', (req, res) => {
  res.send('<h2>Backend server id running on port 8000.</h2>')
})

app.listen(8000, () => {
  console.log("Server is running on port 8000")
})
```