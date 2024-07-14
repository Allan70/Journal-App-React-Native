import { CreateJournal, GetAllJournals } from "../schemas/journal.js";

export function journal_routes(app){
    
    app.post('/create/journal/', async (req, res)=>{
        const body = req.body;
        CreateJournal({
            title: body.title,
            body: body.body,
            images: body.images,
            user_id : body.user_id
        });

        res.sendStatus(200); 
    });

    app.get('/journals/', async (req, res)=>{
        const allJournals =  await GetAllJournals()
        res.json(allJournals)
    });
}
