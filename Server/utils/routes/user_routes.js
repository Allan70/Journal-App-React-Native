import { CreateUser, GetAllUsers, SignInUser, verifyToken } from "../schemas/users.js";

export function user_routes(app) {
    
    // Create User Route
    app.post('/create/user', async (req, res) => {
        const { username, email, password } = req.body;
        const result = await CreateUser({ username, email, password });

        res.status(result.status).json({ message: result.message, error: result.error });
    });

    // Get All Users Route
    app.get('/users', async (req, res) => {
        try {
            const users = await GetAllUsers();
            res.status(200).json(users);
        } catch (e) {
            res.status(500).json({ message: "Error fetching users", error: e.message });
        }
    });

    // User Login Route
    app.post('/login/user', async (req, res) => {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ message: "Username and password are required" });
        }

        try {
            const result = await SignInUser({ username, password });

            if (result.auth) {
                res.status(200).json({ auth: true, token: result.token });
            } else {
                res.status(401).json({ message: result.message });
            }
        } catch (e) {
            res.status(500).json({ message: "Error logging in user", error: e.message });
        }
    });

    app.get('/protected', verifyToken, (req, res) => {
        res.status(200).json({ message: "This is a protected route" });
    });
}
