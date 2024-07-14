import conn  from "../../db.js";

export async function CreateUser({ username, email, password }) {
    try {
        if (username === undefined || email === undefined || password === undefined) return;
        await conn.query(
            'INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password]
        );
        return ({message : "Number plate created successfully"});
    } catch (e) {
        console.error("Create Number Plate Error:", e.sqlMessage || e.message);
    }
}

export async function GetOneUser(user_id) {
    try {
        if (user_id <= 0 || user_id === undefined) return;

        const [results, fields] = await conn.query(
            'SELECT * FROM users WHERE user_id = ?', [user_id]
        );
        
        if(!fields) return ({message : "No records found"});
        return (results);
    } catch (e) {
        console.error("Get One User Error:", e.sqlMessage || e.message);
    }
}

export async function GetAllUsers() {
    try {
        const [results, fields] = await conn.query(
            'SELECT * FROM users'
        );

        if(!fields) return ({message : "No records found"});
        return (results);
    } catch (e) {
        console.error("Get All Users Error:", e.sqlMessage || e.message);
    }
}

export async function UpdateUserByID({ username, email, password }) {
    try {
        await conn.query('UPDATE users SET username = ?, email = ?, password = ? WHERE user_id = ?', [username, email, password]);
        return ("Updated User successfully");
    } catch (e) {
        console.error("Update User Error:", e.sqlMessage || e.message);
    }
}
