"use client";

import React from "react";

export default function LoginForm() {
  return (
    <form action="/login" method="post" className="login-form">
      <h2 className="form-title font-bold">Login Page</h2>
      <div className="form-group">
        <label htmlFor="username" className="form-label">
          Username:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="form-input"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password" className="form-label">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="form-input"
          required
        />
      </div>
      <div className="form-actions">
        <button type="submit" className="submit-button">
          Login
        </button>
      </div>
    </form>
  );
}
