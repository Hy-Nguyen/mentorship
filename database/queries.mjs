import { createPool } from "@vercel/postgres";

import dotenv from "dotenv";
dotenv.config({ path: ".env.development.local" });

let pool;

function setupPool() {
  pool = createPool({
    connectionString: process.env.POSTGRES_URL,
  });
}

function getPool() {
  if (!pool) {
    setupPool();
  }
  return pool;
}

function closePool() {
  if (pool) {
    pool.end();
    pool = null;
  }
}
export async function getUsers() {
  const thisPool = getPool();
  try {
    const res = await thisPool.query(
      `SELECT * FROM users`
    );
    console.log(res.rows);
    return res.rows;
  } catch (e) {
    console.log(e);
  }
}
export async function getProfiles() {
  const thisPool = getPool();
  try {
    const res = await thisPool.query(
      `SELECT * FROM Profiles`
    );
    console.log(res.rows);
    return res.rows;
  } catch (e) {
    console.log(e);
  }
}
export async function getInterests() {
  const thisPool = getPool();
  try {
    const res = await thisPool.query(
      `SELECT * FROM interests`
    );
    console.log(res.rows);
    return res.rows;
  } catch (e) {
    console.log(e);
  }
}
export async function getUsersInterest() {
  const thisPool = getPool();
  try {
    const res = await thisPool.query(
      `SELECT * FROM userinterests`
    );
    console.log(res.rows);
    return res.rows;
  } catch (e) {
    console.log(e);
  }
}
export async function getMentorship() {
  const thisPool = getPool();
  try {
    const res = await thisPool.query(
      `SELECT * FROM mentorship`
    );
    console.log(res.rows);
    return res.rows;
  } catch (e) {
    console.log(e);
  }
}
export async function getAppointment() {
  const thisPool = getPool();
  try {
    const res = await thisPool.query(
      `SELECT * FROM appointments`
    );
    console.log(res.rows);
    return res.rows;
  } catch (e) {
    console.log(e);
  }
}
getUsers();
