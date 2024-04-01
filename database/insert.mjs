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
  }
}

async function insertUsers(
  username,
  password,
  role
) {
  getPool();
  try {
    const res = await pool.query(
      `INSERT INTO Users (username, password, role) 
      VALUES ($1, $2, $3)`,
      [username, password, role]
    );
    console.log(res);
  } catch (e) {
    console.log(e);
  }
}
await insertProfiles(
  "Miguel",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
  "+1 555 555 5555",
  "Miguel@admin.com",
  "https://images.unsplash.com/photo-1711291817956-30c8fc8f9663?q=80&w=2686&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "@/assets/resumes/Miguel.pdf"
);
closePool();
async function insertProfiles(
  name,
  bio,
  phone,
  email,
  pfpURL,
  resumePathURL
) {
  getPool();
  const userRes = await pool.query(
    `SELECT userID FROM Users WHERE username = $1`,
    [name]
  );

  if (userRes.rowCount > 0) {
    const userID = userRes.rows[0].userid; // Get userID of first matching user

    // Then, use this userID to insert into the Profiles table
    const profileRes = await pool.query(
      `
      INSERT INTO Profiles (userID, name, bio, phone, email, pfpURL, resumePathURL)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
    `,
      [
        userID,
        name,
        bio,
        phone,
        email,
        pfpURL,
        resumePathURL,
      ]
    );

    console.log(profileRes);
  } else {
    console.log(
      "User with the provided name does not exist."
    );
  }
}
async function insertAppointments() {}

async function insertInterests() {
  getPool();
  try {
    const res = await pool.query(
      `INSERT INTO Interests (interest) 
      VALUES ('Social Skills'), ('Academic'), ('Professionalism'), ('Mental Counseling'), ('Personal Development'), ('Family Liaison'),  ('Relationships'), ('Coding'), ('Design'), ('Writing'), ('Reading'), ('Music'), ('Cooking'), ('Gardening'), ('Photography'), ('Gaming')`
    );
    console.log(res);
  } catch (e) {
    console.log(e);
  }
}

async function insertUserInterests() {}
async function insertMentorship() {}

// await insertUsers(
//   "Jerry Wilson",
//   "password73",
//   "mentor"
// );
