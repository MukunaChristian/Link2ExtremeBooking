import { useActionData } from "@remix-run/react";
import { useState } from "react";
import type { ActionArgs, LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, Link, useActionData, useSearchParams } from "@remix-run/react";
import { useEffect, useRef } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalidCredentials] = useState(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    setIsVisible((prevVisibility: boolean) => !prevVisibility);
  };
  

  return (
    <div className="login-container">
      <div className="form-container">
        {invalidCredentials && (
          <p className="error-message">Invalid Password or Email</p>
        )}
        <h1 className="title">Login</h1>
        <form method="post" className="login-form">
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="input-field"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              className="input-field"
              type={isVisible ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="button" onClick={toggleVisibility}>
            {isVisible ? "Hide" : "Show"} Password
          </button>
          <div className="forgot-password">Forget password</div>
          <button className="login-button" type="submit">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
