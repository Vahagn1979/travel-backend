import session from "express-session";
import pgSession from "connect-pg-simple";
import pkg from "pg";

const {Pool} = pkg;

const ONE_DAY = 1000 * 60 * 60 * 24;
const isProduction = process.env.NODE_ENV === "production";

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
})

export default function sessionMiddleware() {
    return session({
        store: new (pgSession(session)) ({
            pool,
            tableName: "User_session",
            // createTableIfMissing: true,
            pruneSessionInterval: 60 * 60,
        }),
        secret: process.env.SECRET_KEY,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: ONE_DAY,
            httpOnly: true,
            sameSite: "lax",
            secure: isProduction,
        },
    });
};