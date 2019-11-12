import FileSync from 'lowdb/adapters/FileSync';
import low from 'lowdb';

//Set up the DB
const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({ twitter: [], instagram: [], })
  .write();

export default db;