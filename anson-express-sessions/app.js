import express from 'express'
import session from 'express-session'

const store = new session.MemoryStore(); // Session module has a class MemoryStore 
const port = 4242
const app = express()

const users = [
    { email: "anurag@gmail.com", password: "password" }
]

app.use(express.json())
app.use((req, res, next) => {
    console.log("\n", store, "\n")
    console.log()
    console.log(`${req.method} - ${req.url}`)
    next()
})

// Session middleware
app.use(session({
    secret: 'meaningoflifeis42',
    cookie: { maxAge: 1000 * 365 * 24 * 60 * 60 * 1000 }, // 1000 years (in milliseconds)
    saveUninitialized: false, // True: new session id for every request (put false if you have login system)
    resave: false, // https://github.com/expressjs/session#options // read this for details (date accessed: 26 Nov 2024)
    store: store
}))

// app.get('/', (req, res, next) => {
//     res.send("Handling request")
// })

app.post('/login', (req, res) => {

    console.log(req.sessionID)
    // console.log("req.body\n", req.body)

    const { email, password } = req.body;
    // console.log(email, password)
    if (email && password) {
        // email and password exist
        if (req.session.authenticated) {
            // User has already logged in
            res.json(req.session)
        } else {
            // User has not logged in
            // Checking password 
            if (email === users[0].email && password === users[0].password) {
                // Passwords matched
                req.session.authenticated = true;
                req.session.user = { email, password } // never send password to the user in production
                res.json(req.session);
                // res.send(req.session)
            } else {
                // Passwords don't match 
                res.status(403).json({ msg: 'Email or passwords don\'t match' });
            }
        }
    } else {
        // res.status(403).json({ msg: 'Bad Credentials' });
        res.status(403).json({ msg: 'Email and password fields not present in request' });
    }
    // res.sendStatus(200); // response already handled
    // res.send("Hello")
})


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})