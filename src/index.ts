// .env config
import { resolve } from "path"

import { config } from "dotenv"

config({ path: resolve(__dirname, "../.env") })

// Libraries
import express, { Application, Request, Response, Router } from "express"
const cors = require('cors');

// Routers
import initProductsRouter from './routes/products.router'

// Initializing Application and Router object to create routes.
const app: Application = express()
const router: Router = express.Router()
const port = process.env.PORT || 3000

// Use cors for making requests from the frontend
app.use(cors())

// Init Routers
initProductsRouter(router)

// Use the router object to create all the routes 
app.use(router)

// Default route
app.get('/', (req: Request, res: Response) => res.send("Hello World"))

app.listen(port, () => {
    console.log(`Server is running: http://localhost:${port}`)
})

export default app;