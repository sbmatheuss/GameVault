import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema"

const urlDatabase = process.env.DATABASE_URL

if (!urlDatabase) throw new Error("urlDatabase não disponivel")

const poolConnection = mysql.createPool({
    uri: urlDatabase,
    ssl: { rejectUnauthorized: false }
});

export const db = drizzle(poolConnection, { schema: schema, mode: 'default' });