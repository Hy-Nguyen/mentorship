import {
  sql,
  createPool,
} from "@vercel/postgres";

import dotenv from "dotenv";
dotenv.config({ path: ".env.development.local" });

async function createTable() {
  const pool = createPool({
    connectionString: process.env.POSTGRES_URL,
  });
  try {
    //     const res = await sql`
    //     CREATE TABLE Appointments (
    //         meetingID SERIAL PRIMARY KEY, -- Use SERIAL for auto-incrementing ID
    //         mentorID INT NOT NULL REFERENCES Users(userID) ON DELETE CASCADE, -- Cascade deletion on mentor
    //         date DATE NOT NULL,
    //         time TIME(0) NOT NULL,  -- Specify precision for time
    //         meetingLink VARCHAR(255),
    //         mentees TEXT,  -- Comma-separated list of mentee IDs (consider using an array data type if supported by your ORM)
    //         CONSTRAINT appointment_mentor_fk FOREIGN KEY (mentorID) REFERENCES Users(userID) ON DELETE CASCADE -- Explicit foreign key constraint
    //       );
    // `;
    //     console.log(res);
  } catch (e) {
    console.log(e);
  } finally {
    pool.end();
  }
}
createTable();

// -- Users table

// CREATE TABLE Users (
//   userID SERIAL PRIMARY KEY, -- Use SERIAL for auto-incrementing ID
//   username VARCHAR(255) UNIQUE NOT NULL,
//   password VARCHAR(255) NOT NULL,  -- Don't specify length for flexibility
//   role ENUM('mentor', 'mentee', 'admin') DEFAULT NULL, -- Optional role, default NULL
//   CHECK (username <> ''),  -- Ensure username is not empty
//   CONSTRAINT password_check CHECK (password IS NOT NULL) -- Ensure password is not NULL
// );

// -- Profiles table
// CREATE TABLE Profiles (
//   userID INT PRIMARY KEY REFERENCES Users(userID) ON DELETE CASCADE, -- Cascade deletion on user
//   name VARCHAR(255) NOT NULL,
//   bio TEXT,
//   phone VARCHAR(255),
//   email VARCHAR(255) UNIQUE NOT NULL, -- Ensure unique email
//   pfpURL VARCHAR(255),
//   resumePathURL VARCHAR(255),
//   CONSTRAINT email_check CHECK (email <> '') -- Ensure email is not empty
// );

// -- Interests table
// CREATE TABLE Interests (
//   interestID SERIAL PRIMARY KEY, -- Use SERIAL for auto-incrementing ID
//   interest VARCHAR(255) NOT NULL,
//   CONSTRAINT interest_check CHECK (interest <> '') -- Ensure interest is not empty
// );

// -- UserInterests junction table (many-to-many)
CREATE TABLE UserInterests (
  userID INT REFERENCES Users(userID) ON DELETE CASCADE,
  interestID INT REFERENCES Interests(interestID) ON DELETE CASCADE,
  CONSTRAINT user_interest_pk PRIMARY KEY (userID, interestID)
);

// -- Mentorship junction table (many-to-many)
// CREATE TABLE Mentorship (
//   mentorID INT REFERENCES Users(userID) ON DELETE CASCADE,  //Cascade deletion on user
//   menteeID INT REFERENCES Users(userID) ON DELETE CASCADE,  //Cascade deletion on user
//   CONSTRAINT mentor_mentee_pk PRIMARY KEY (mentorID, menteeID)  //Composite primary key for uniqueness
// );

// -- Appointments table
CREATE TABLE Appointments (
    meetingID SERIAL PRIMARY KEY, -- Use SERIAL for auto-incrementing ID
    mentorID INT NOT NULL REFERENCES Users(userID) ON DELETE CASCADE, -- Cascade deletion on mentor
    date DATE NOT NULL,
    time TIME(0) NOT NULL,  -- Specify precision for time
    meetingLink VARCHAR(255),
    mentees TEXT,  -- Comma-separated list of mentee IDs (consider using an array data type if supported by your ORM)
    CONSTRAINT appointment_mentor_fk FOREIGN KEY (mentorID) REFERENCES Users(userID) ON DELETE CASCADE -- Explicit foreign key constraint
  );
