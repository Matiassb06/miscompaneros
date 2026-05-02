const { Pool } = require('pg');
const dns = require('dns').promises;
require('dotenv').config();

async function createPool() {
  const url = new URL(process.env.DATABASE_URL);
  const hostname = url.hostname;

  // Resolve hostname to IPv4 explicitly
  let host = hostname;
  try {
    const result = await dns.resolve4(hostname);
    if (result && result.length > 0) host = result[0];
  } catch (_) { /* use hostname as fallback */ }

  const pool = new Pool({
    host,
    port:     Number(url.port) || 5432,
    user:     decodeURIComponent(url.username),
    password: decodeURIComponent(url.password),
    database: url.pathname.replace('/', ''),
    ssl:      { rejectUnauthorized: false },
    connectionTimeoutMillis: 10000,
  });

  return pool;
}

let poolInstance = null;

const handler = {
  get(target, prop) {
    return (...args) => {
      if (poolInstance) return poolInstance[prop](...args);
      return createPool().then(p => { poolInstance = p; return p[prop](...args); });
    };
  }
};

module.exports = new Proxy({}, handler);
