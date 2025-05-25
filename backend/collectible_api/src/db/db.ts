
/**
 * @file db.ts
 * @author Brendan Dileo, May 2025
 * Database configuration for the collectible shop locations database.
 */

import Database from 'better-sqlite3';
import path from 'path';

const db = new Database(path.resolve(__dirname, 'locations.db'));

db.exec(`
    CREATE TABLE IF NOT EXISTS locations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        category TEXT NOT NULL,
        latitude REAL NOT NULL,
        longitude REAL NOT NULL,
        website TEXT,
        comments TEXT,
        image_url TEXT
    );
`);

export default db;