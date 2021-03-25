const fs = require('fs')
const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')

const server = jsonServer.create()
const router = jsonServer.router('./db.json')
let userdb = JSON.parse(fs.readFileSync('./users.json', 'UTF-8'))

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(jsonServer.defaults());
server.use(jsonServer.rewriter({
  "/hero_threats": "/hero_threats?_expand=hero&_expand=threat",
  "/hero_threats/:id": "/hero_threats/:id?_expand=hero&_expand=threat"
}));

const SECRET_KEY = '123456789'

const expiresIn = '1h'

// Create a token from a payload 
function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, {
    expiresIn
  })
}

// Verify the token 
function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ? decode : err)
}

// Check if the user exists in database
function isAuthenticated({
  name,
  password
}) {
  return userdb.users.findIndex(user => user.name === name && user.password === password) !== -1
}

// Register New User
server.post('/register', (req, res) => {
  console.log("register endpoint called; request body:");
  const {
    name,
    password
  } = req.body;

  if (isAuthenticated({
      name,
      password
    }) === true) {
    const status = 401;
    const message = 'name and Password already exist';
    res.status(status).json({
      status,
      message
    });
    return
  }

  fs.readFile("./users.json", (err, data) => {
    if (err) {
      const status = 401
      const message = err
      res.status(status).json({
        status,
        message
      })
      return
    };

    // Get current users data
    var data = JSON.parse(data.toString());

    // Get the id of last user
    var last_item_id = data.users[data.users.length - 1].id;

    //Add new user
    data.users.push({
      id: last_item_id + 1,
      name: name,
      password: password
    }); //add some data
    var writeData = fs.writeFile("./users.json", JSON.stringify(data), (err, result) => { // WRITE
      if (err) {
        const status = 401
        const message = err
        res.status(status).json({
          status,
          message
        })
        return
      }
      userdb = data;
    });

    res.status(200).json({
      id: last_item_id + 1,
      name: name,
    });
  });
})

// Login to one of the users from ./users.json
server.post('/login', (req, res) => {
  console.log("login endpoint called; request body:");
  const {
    name,
    password
  } = req.body;
  if (isAuthenticated({
      name,
      password
    }) === false) {
    const status = 401
    const message = 'Incorrect name or password'
    res.status(status).json({
      status,
      message
    })
    return
  }
  const access_token = createToken({
    name,
    password
  })
  res.status(200).json({
    access_token
  })
})

server.use(/^(?!\/login|\/register).*$/, (req, res, next) => {
  console.log(req.headers.authorization)
  if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
    const status = 401
    const message = 'Error in authorization format'
    res.status(status).json({
      status,
      message
    })
    return
  }
  try {
    let verifyTokenResult;
    verifyTokenResult = verifyToken(req.headers.authorization.split(' ')[1]);

    if (verifyTokenResult instanceof Error) {
      const status = 401
      const message = 'Access token not provided'
      res.status(status).json({
        status,
        message
      })
      return
    }
    next()
  } catch (err) {
    const status = 401
    const message = 'Error access_token is revoked'
    res.status(status).json({
      status,
      message
    })
  }
})

server.use(router)

server.listen(4000, () => {
  console.log('Run Auth API Server')
})