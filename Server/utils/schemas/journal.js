import conn from "../../db.js"


export async function CreateJournal({title, body, images, user_id}){
    try{
        await conn.query("INSERT INTO note (title, body, images, user_id) VALUES (?, ?, ?, ?)", 
    [title, body, images, user_id ])

    return "Journal created successfully";
    }catch(e){
        console.error("Create Journal Err ", e.sqlMessage || e.message)
    }
}

export async function GetOneJournal(note_id){
    try{

        const [ response , features ] =  await conn.query("SELECT * FROM note WHERE note_id = ?", note_id)

        console.log(features)
        return response;
    }catch(e){
        console.error("Gei One Journal Err ", e.sqlMessage || e.message)
    }
}

export async function GetAllJournals(){
    try{
        const [ response , features ] =  await conn.query("SELECT * FROM note")

        console.log(features)
        return response; 
    }catch(e){
        console.error("Get All Journal Err ", e.sqlMessage || e.message)
    }
}

export async function UpdateJournalByID({note_id, title, body, images, user_id}){
    try{
        await conn.query("UPDATE note SET (title = ?, body = ?, images = ?, user_id = ?) WHERE note_id = ? ", [note_id, title, body, images, user_id, note_id])

        return "Vehicle updated successfully";
    }catch(e){
        console.error("Update Journal Err ", e.sqlMessage || e.message)
    }
}

export async  function DeleteJournal(note_id){
    try{
        await conn.query("DELETE FROM note WHERE note_id = ? ", [note_id]);

        return "Delete Successful";
    }catch(e){
        console.error("Delete Journal Err ", e.sqlMessage || e.message)
    }
}

