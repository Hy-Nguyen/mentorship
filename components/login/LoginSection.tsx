"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Button,
  Link,
} from "@nextui-org/react";

import { useState } from "react";

export default function LoginSection() {
  const [signUp, setSignUp] = useState(false);

  function signUpHandler(e: React.FormEvent) {
    e.preventDefault();
  }
  function logInHandler(e: React.FormEvent) {
    e.preventDefault();
  }
  return (
    <div className="w-full h-1/2 ">
      {!signUp ? (
        <form onSubmit={logInHandler}>
          <Card className="py-10 w-full h-full">
            <CardHeader className="flex justify-center">
              Welcome Back
            </CardHeader>
            <CardBody className="flex justify-center">
              <div className="space-y-3">
                <Input label="Email" />
                <Input
                  label="Password"
                  type="password"
                />
                <div className="text-small flex flex-row justify-center">
                  <p>{`Don't have an account?`}</p>
                  <Link
                    onClick={() => {
                      setSignUp(!signUp);
                    }}
                    className="text-small pl-2"
                  >
                    Register Here!
                  </Link>
                </div>
              </div>
            </CardBody>
            <CardFooter className="flex justify-center">
              <Button type="submit">Login</Button>
            </CardFooter>
          </Card>
        </form>
      ) : (
        <form onSubmit={signUpHandler}>
          <Card className="">
            <CardHeader className="flex justify-center">
              Register
            </CardHeader>
            <CardBody>
              <div className="space-y-3">
                <Input label="Email" />
                <Input
                  label="Password"
                  type="password"
                />
                <div className="text-small flex flex-row justify-center">
                  <p>{`Have an account?`}</p>
                  <Link
                    onClick={() => {
                      setSignUp(!signUp);
                    }}
                    className="text-small pl-2"
                  >
                    Log In Here!
                  </Link>
                </div>
              </div>
            </CardBody>
            <CardFooter className="flex justify-center">
              <Button type="submit">
                Sign Up
              </Button>
            </CardFooter>
          </Card>
        </form>
      )}
    </div>
  );
}
