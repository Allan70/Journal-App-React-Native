
import { journal_routes } from "./utils/routes/journal_routes.js"
import { user_routes } from "./utils/routes/user_routes.js"

import express from 'express'
import bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.json());

const port = 5000;

app.listen(port, ()=>{
    console.log(`App listening in http://localhost:${port}`);
});

journal_routes(app)
user_routes(app)