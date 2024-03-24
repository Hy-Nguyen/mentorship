"use client";

import React from "react";
import "./Login.css";
export default function LoginForm() {
  return (
    <form action="/login" method="post">
      <h2>Login Page</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required></input>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required></input>
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
}
