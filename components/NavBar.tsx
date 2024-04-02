"use client";

import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Input,
  Radio,
  RadioGroup,
} from "@nextui-org/react";

import { useState } from "react";

export default function NavBar() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [logIn, setLogIn] = useState(true);

  const [logInUser, setLogInUser] = useState("");
  const [logInPassword, setLogInPassword] = useState("");

  const [fName, setFirstName] = useState("");
  const [lName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function checkPassword() {
    // Check if the password is at least 8 characters long
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return false;
    }

    // Check if the password includes a mix of upper and lowercase letters, numbers, and symbols
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!hasUpperCase || !hasLowerCase || !hasNumbers || !hasSpecialChars) {
      alert(
        "Password must include a mix of uppercase letters, lowercase letters, numbers, and symbols."
      );
      return false;
    }

    // Check if the password and confirmPassword match
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }

    // If all checks pass
    alert("Password is set correctly.");
    return true;
  }

  async function handleLogIn(e: React.FormEvent) {
    e.preventDefault();
    alert(`${logInUser}, ${logInPassword}`);
    await fetch("/api/login");
  }

  return (
    <>
      <Navbar shouldHideOnScroll maxWidth="full" className="dark ">
        <NavbarBrand>
          <p className="font-bold ">Dream Team</p>
        </NavbarBrand>
        <NavbarContent
          className="hidden sm:flex gap-4"
          justify="center"
        ></NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button onPress={onOpen}>Log In / Sign Up</Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className=""
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              {logIn ? (
                <form onSubmit={handleLogIn}>
                  <ModalHeader className="flex flex-col gap-1 text-black">
                    Log In
                  </ModalHeader>
                  <ModalHeader className="flex flex-col gap-1">
                    <div className="flex w-full space-x-2 justify-center">
                      <Button className="w-full" onPress={() => setLogIn(true)}>
                        Log In
                      </Button>
                      <Button
                        className="w-full"
                        onPress={() => setLogIn(false)}
                      >
                        Sign Up
                      </Button>
                    </div>
                  </ModalHeader>
                  <ModalBody>
                    <div className="space-y-3">
                      <Input
                        label="Email"
                        type="email"
                        value={logInUser}
                        onValueChange={setLogInUser}
                      />
                      <Input
                        label="Password"
                        type="password"
                        value={logInPassword}
                        onValueChange={setLogInPassword}
                      />
                    </div>
                  </ModalBody>
                  <ModalFooter className=" justify-between">
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button
                      color="primary"
                      // onPress={onClose}
                      type="submit"
                    >
                      Log In
                    </Button>
                  </ModalFooter>
                </form>
              ) : (
                <form>
                  <ModalHeader className="flex flex-col gap-1 text-black">
                    Sign Up
                  </ModalHeader>
                  <ModalHeader className="flex flex-col gap-1">
                    <div className="flex w-full space-x-2 justify-center">
                      <Button className="w-full" onPress={() => setLogIn(true)}>
                        Log In
                      </Button>
                      <Button
                        className="w-full"
                        onPress={() => setLogIn(false)}
                      >
                        Sign Up
                      </Button>
                    </div>
                  </ModalHeader>
                  <ModalBody>
                    <Input label="First Name" />
                    <Input label="Last Name" />
                    <Input label="Email" />
                    <Input label="Password" type="password" />
                    <Input label="Confirm Password" type="password" />
                    <RadioGroup
                      label="Mentor or Mentee"
                      orientation="horizontal"
                      className=""
                    >
                      <div className="flex w-full space-x-10 justify-center">
                        <Radio value="Mentor">Mentor</Radio>
                        <Radio value="Mentee">Mentee</Radio>
                      </div>
                    </RadioGroup>
                  </ModalBody>
                  <ModalFooter className="justify-between">
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" onPress={onClose}>
                      Sign Up
                    </Button>
                  </ModalFooter>
                </form>
              )}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
