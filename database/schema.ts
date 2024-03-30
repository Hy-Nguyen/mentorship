// Interface for User data
interface User {
  userID: number; // Use number for auto-incrementing ID
  username: string;
  password: string;
  role?: "mentor" | "mentee" | "admin"; // Optional role
  email: string;
}

// Interface for Profile data
interface Profile {
  userID: number;
  name: string;
  bio?: string;
  phone?: string;
  pfpURL?: string;
  resumePathURL?: string;
}

// Interface for Interest data
interface Interest {
  interestID: number;
  interest: string;
}

// Interface for Appointment data (assuming a mentee list approach)
interface Appointment {
  meetingID: number;
  mentorID: number;
  date: Date;
  time: string; // Represent time as a string (adjust if needed)
  meetingLink?: string;
  mentees: number[]; // Array of mentee IDs
}

// Interfaces for junction tables (no separate data needed)

// Type alias for UserInterests relationship
type UserInterest = {
  userID: number;
  interestID: number;
};

// Type alias for Mentorship relationship
type Mentorship = {
  mentorID: number;
  menteeID: number;
};
