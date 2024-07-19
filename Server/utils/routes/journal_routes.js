import { CreateJournal, GetOneJournal, GetAllJournals, UpdateJournalByID, DeleteJournal } from "../schemas/journal.js";

export function journal_routes(app) {

    // Create a new journal
    app.post('/create/journal/', async (req, res) => {
        const body = req.body;
        const result = await CreateJournal({
            title: body.title,
            body: body.body,
            images: body.images,
            user_id: body.user_id
        });

        if (result.status === 201) {
            res.status(201).json(result);
        } else {
            res.status(result.status).json(result);
        }
    });

    // Get all journals
    app.get('/journals/', async (req, res) => {
        const result = await GetAllJournals();
        res.status(result.status).json(result);
    });

    // Get one journal by id
    app.get('/journal/:note_id', async (req, res) => {
        const result = await GetOneJournal(req.params.note_id);
        res.status(result.status).json(result);
    });

    // Update a journal by id
    app.put('/journal/:note_id', async (req, res) => {
        const body = req.body;
        const result = await UpdateJournalByID({
            note_id: req.params.note_id,
            title: body.title,
            body: body.body,
            images: body.images,
            user_id: body.user_id
        });

        res.status(result.status).json(result);
    });

    // Delete a journal by id
    app.delete('/journal/:note_id', async (req, res) => {
        const result = await DeleteJournal(req.params.note_id);
        res.status(result.status).json(result);
    });
}
