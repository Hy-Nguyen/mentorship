
-- Users Table
INSERT INTO Users (username, password, email, role)
VALUES ('johndoe', 'your_hashed_password', 'johndoe@example.com', 'mentor');
-- Profiles Table
INSERT INTO Profiles (userID, name, bio, email, pfpURL)
VALUES (1, 'John Doe', 'Experienced software developer', 'johndoe@example.com', 'https://example.com/profile-pic.jpg');
-- Replace '1'/userID with actual userID from Users table

-- Interests Table
INSERT INTO Interests (interest)
VALUES ('Software Development'), ('Machine Learning');

-- Appointments Table
INSERT INTO Appointments (mentorID, date, time, meetingLink, mentees)
VALUES (1, '2024-03-26', '10:00:00', 'https://example.com/meeting', '{5, 6}');  -- Mentor 1 has a meeting with mentees 5 and 6


-- JUNCTIONS
-- Users Interests Table
INSERT INTO UserInterests (userID, interestID)
VALUES (1, 1), (1, 2);  -- User 1 interested in interests 1 and 2

-- Mentorship Table
INSERT INTO Mentorship (mentorID, menteeID)
VALUES (1, 2), (3, 4);  -- Mentor 1 mentors mentee 2, Mentor 3 mentors mentee 4
