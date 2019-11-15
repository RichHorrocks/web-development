import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

// Set up the DB.
const adapter = new FileSync('db.json');
const db = low(adapter);
db.defaults({ twitter: [], instagram: [] }).write();

export default db;
