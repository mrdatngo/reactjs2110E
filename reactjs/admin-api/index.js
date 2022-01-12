const jsonServer = require('json-server')
const jwt = require("jsonwebtoken")
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const cors = require('cors');
const middlewares = jsonServer.defaults({ noCors: true })

// allow other domain(port) to access
server.use(
    cors({
        origin: true,
        credentials: true,
        preflightContinue: false,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    })
);
server.options('*', cors());

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
    res.jsonp(req.query)
})

server.post('/signin', (req, res) => {
    let { email, password } = req.body
    console.log(req.body)
    // let users = [{
    //     email: "admin@gmail.com",
    //     password: "123456"
    // }]
    if (email == "admin@gmail.com" && password == "123456") {
        let token = jwt.sign({
            email,
        }, 'secret', { expiresIn: '1h' });
        res.jsonp({
            success: true,
            token,
            email
        })
        return
    }
    res.status(400).jsonp({
        success: false,
        message: "Email or password is incorrect!"
    })
})

// server.use((req, res, next) => {
//     if (req.method === 'POST') {
//         req.body.createdAt = Date.now()
//     }
//     // Continue to JSON Server router
//     next()
// })

// Use default router
server.use(router)
server.listen(8000, () => {
    console.log('JSON Server is running')
})