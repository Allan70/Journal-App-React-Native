import { CreateUser, GetAllUsers } from "../schemas/users.js";

export function user_routes(app){

    app.post('/create/user/', (req, res)=>{
        const body = req.body;
        if(
               body.username === undefined 
            || body.email === undefined 
            || body.password === undefined
        ){
            res.sendStatus(201);
            return;
        } 
            

        CreateUser({
            username : body.username, 
            email : body.email, 
            password : body.password
        });

        res.sendStatus(200); 
    });

    app.get('/users/', async (req, res)=>{ 
        const users = await GetAllUsers(); 
        
        res.json(users); 
    });

}