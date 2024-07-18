import conn from "../../db.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'green_tea_bird';

import bcrypt from 'bcryptjs';
import conn from "../../db.js";

export async function CreateUser({ username, email, password }) {
    try {
        if (!username || !email || !password) {
            return { status: 400, message: "Username, email, and password are required" };
        }

        const hashedPassword = bcrypt.hashSync(password, 8);

        await conn.query(
            'INSERT INTO users (username, email, password) VALUES (?, ?, ?)', 
            [username, email, hashedPassword]
        );
        
        return { status: 201, message: "User created successfully" };
    } catch (e) {
        console.error("Create User Error:", e.sqlMessage || e.message);
        return { status: 500, message: "Error creating user", error: e.sqlMessage || e.message };
    }
}

export async function GetOneUser(user_id) {
    try {
        if (user_id <= 0 || user_id === undefined) {
            return { message: "Invalid user ID" };
        }

        const [results, fields] = await conn.query(
            'SELECT * FROM users WHERE user_id = ?', [user_id]
        );

        if (results.length === 0) {
            return { message: "No records found" };
        }
        return results[0];
    } catch (e) {
        console.error("Get One User Error:", e.sqlMessage || e.message);
    }
}

export async function GetAllUsers() {
    try {
        const [results, fields] = await conn.query(
            'SELECT * FROM users'
        );

        if (results.length === 0) {
            return { message: "No records found" };
        }
        return results;
    } catch (e) {
        console.error("Get All Users Error:", e.sqlMessage || e.message);
    }
}

export async function UpdateUserByID({ user_id, username, email, password }) {
    try {
        if (!user_id || !username || !email || !password) {
            return { message: "User ID, username, email, and password are required" };
        }

        const hashedPassword = bcrypt.hashSync(password, 8);

        await conn.query(
            'UPDATE users SET username = ?, email = ?, password = ? WHERE user_id = ?', [username, email, hashedPassword, user_id]
        );
        return { message: "Updated User successfully" };
    } catch (e) {
        console.error("Update User Error:", e.sqlMessage || e.message);
    }
}

export async function SignInUser({ username, password }) {
    try {
        if (!username || !password) {
            return { message: "Username and password are required" };
        }

        const [results] = await conn.query('SELECT * FROM users WHERE username = ?', [username]);

        if (results.length === 0) {
            return { message: "User not found" };
        }

        const user = results[0];

        const passwordIsValid = bcrypt.compareSync(password, user.password);
        if (!passwordIsValid) {
            return { message: "Invalid password" };
        }

        const token = jwt.sign({ id: user.user_id }, SECRET_KEY, {
            expiresIn: 86400 // 24 hours
        });

        return { auth: true, token: token };
    } catch (e) {
        console.error("Sign In User Error:", e.sqlMessage || e.message);
    }
}

export async function registerUser({ username, email, password }) {
    try {
        if (!username || !email || !password) {
            return { message: "Username, email, and password are required" };
        }

        const hashedPassword = bcrypt.hashSync(password, 8);

        await conn.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword]);

        return { message: "User registered successfully" };
    } catch (e) {
        console.error("Register User Error:", e.sqlMessage || e.message);
    }
}

export async function verifyToken(req, res, next) {
    try {
        const token = req.headers['x-access-token'];

        if (!token) {
            return res.status(403).send('No token provided');
        }

        jwt.verify(token, SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.status(500).send('Failed to authenticate token');
            }

            req.userId = decoded.id;
            next();
        });
    } catch (e) {
        console.error("Verify Token Error:", e.sqlMessage || e.message);
    }
}
