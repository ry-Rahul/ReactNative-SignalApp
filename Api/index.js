import express from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';
import dbConnection from './config/DbConnection.js';
import { login, register } from './controller/Auth.js';
import { getAllUser, sendRequest } from './controller/user.js';



const app = express();  
const PORT = 4000; 

// Middleware
app.use(cors());
app.use(cors({origin: true, credentials: true}));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

// Database connection
dbConnection();


app.post("/register",register);
app.post("/login",login);

app.get('/users/:userId',getAllUser)
app.post('/sendrequest',sendRequest)

app.get("/", (req, res) => {
  res.send("Hello from Homepage");
} );
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
