import conn from "../../db.js"

export async function CreateJournal({ title, body, images, user_id }) {
    try {
        await conn.query("INSERT INTO note (title, body, images, user_id) VALUES (?, ?, ?, ?)", 
            [title, body, images, user_id]);
        return { status: 201, message: "Journal created successfully" };
    } catch (e) {
        console.error("Create Journal Error:", e.sqlMessage || e.message);
        return { status: 500, message: "Error creating journal", error: e.sqlMessage || e.message };
    }
}

export async function GetOneJournal(note_id) {
    try {
        const [response] = await conn.query("SELECT * FROM note WHERE note_id = ?", [note_id]);
        if (response.length === 0) {
            return { status: 404, message: "Journal not found" };
        }
        return { status: 200, journal: response[0] };
    } catch (e) {
        console.error("Get One Journal Error:", e.sqlMessage || e.message);
        return { status: 500, message: "Error retrieving journal", error: e.sqlMessage || e.message };
    }
}

export async function GetAllJournals() {
    try {
        const [response] = await conn.query("SELECT * FROM note");
        return { status: 200, journals: response };
    } catch (e) {
        console.error("Get All Journals Error:", e.sqlMessage || e.message);
        return { status: 500, message: "Error retrieving journals", error: e.sqlMessage || e.message };
    }
}

export async function UpdateJournalByID({ note_id, title, body, images, user_id }) {
    try {
        await conn.query("UPDATE note SET title = ?, body = ?, images = ?, user_id = ? WHERE note_id = ?", 
            [title, body, images, user_id, note_id]);
        return { status: 200, message: "Journal updated successfully" };
    } catch (e) {
        console.error("Update Journal Error:", e.sqlMessage || e.message);
        return { status: 500, message: "Error updating journal", error: e.sqlMessage || e.message };
    }
}

export async function DeleteJournal(note_id) {
    try {
        await conn.query("DELETE FROM note WHERE note_id = ?", [note_id]);
        return { status: 200, message: "Journal deleted successfully" };
    } catch (e) {
        console.error("Delete Journal Error:", e.sqlMessage || e.message);
        return { status: 500, message: "Error deleting journal", error: e.sqlMessage || e.message };
    }
}
