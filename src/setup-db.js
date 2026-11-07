import pg from 'pg';
import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const { Client } = pg;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const setupDatabase = async () => {
    const client = new Client({
        connectionString: process.env.DB_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });

    const setupSql = await readFile(path.join(__dirname, 'setup.sql'), 'utf8');
    await client.connect();
    await client.query(setupSql);
    await client.end();
    console.log('Database setup complete.');
};

setupDatabase();
