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
  Select,
  SelectItem,
} from "@nextui-org/react";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

export default function NavBar() {
  const router = useRouter();
  const {
    isOpen,
    onOpen,
    onClose,
    onOpenChange,
  } = useDisclosure();

  const [logIn, setLogIn] = useState(true);

  const [loggedIn, setLoggedIn] = useState(false);

  const [logInUser, setLogInUser] = useState("");
  const [logInPassword, setLogInPassword] =
    useState("");

  const [usernameError, setUsernameError] =
    useState(false);
  const [passwordError, setPasswordError] =
    useState(false);
  const [errorMessage, setErrorMessage] =
    useState("");

  const [fName, setFirstName] = useState("");
  const [lName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [type, setType] = useState("");

  function storeUserInfo(
    userID: number,
    role: string
  ) {
    const timeStored = dayjs();

    const expiration = timeStored.add(1, "day");

    let userInfo = {
      userID: userID,
      role: role,
      expiration: expiration.toISOString(),
    };

    localStorage.setItem(
      "userData",
      JSON.stringify(userInfo)
    );
  }
  // dayjs().isAfter(
  //   dayjs(userData.expirationTime)
  useEffect(() => {
    const checkUser = () => {
      const userData = JSON.parse(
        localStorage.getItem("userData")
      );
      if (userData) {
        setLoggedIn(true);
      }
    };
    checkUser();
  }, []);

  function logOut() {
    localStorage.removeItem("userData");
    setLoggedIn(false);
    router.push("/");
  }

  async function handleLogIn(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3000/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: logInUser,
            password: logInPassword,
          }),
        }
      );

      if (response.ok) {
        // User Logged In
        setUsernameError(false);
        setPasswordError(false);

        const data = await response.json();
        setLogInUser("");
        setLogInPassword("");

        storeUserInfo(
          data.user.UserID,
          data.user.role
        );
        onClose();
        router.push("/mentorHome");
      } else {
        const data = await response.json();
        setErrorMessage(data.message);
        if (data.location == "password") {
          setPasswordError(true);
        } else if (data.location == "username") {
          setUsernameError(true);
        }
      }
    } catch (e) {
      console.log(e);
    }
  }

  async function handleSignUp(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:3000/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: `${fName} ${lName}`,
            username: username,
            email: email,
            password: password,
            role: type,
          }),
        }
      );
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <Navbar
        shouldHideOnScroll
        maxWidth="full"
        className="dark "
      >
        <NavbarBrand>
          <p className="font-bold ">Dream Team</p>
        </NavbarBrand>
        <NavbarContent
          className="hidden sm:flex gap-4"
          justify="center"
        ></NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            {!loggedIn ? (
              <Button onPress={onOpen}>
                Log In / Sign Up
              </Button>
            ) : (
              <Button onPress={logOut}>
                Log Out
              </Button>
            )}
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
                      <Button
                        className="w-full"
                        onPress={() =>
                          setLogIn(true)
                        }
                      >
                        Log In
                      </Button>
                      <Button
                        className="w-full"
                        onPress={() =>
                          setLogIn(false)
                        }
                      >
                        Sign Up
                      </Button>
                    </div>
                  </ModalHeader>
                  <ModalBody>
                    <div className="space-y-3">
                      <Input
                        label="Username"
                        type="string"
                        value={logInUser}
                        isRequired
                        onValueChange={
                          setLogInUser
                        }
                        onChange={() =>
                          setUsernameError(false)
                        }
                        isInvalid={usernameError}
                        errorMessage={
                          usernameError &&
                          errorMessage
                        }
                      />

                      <Input
                        label="Password"
                        type="password"
                        value={logInPassword}
                        isRequired
                        onValueChange={
                          setLogInPassword
                        }
                        onChange={() =>
                          setPasswordError(false)
                        }
                        isInvalid={passwordError}
                        errorMessage={
                          passwordError &&
                          errorMessage
                        }
                      />
                    </div>
                  </ModalBody>
                  <ModalFooter className=" justify-between">
                    <Button
                      color="danger"
                      variant="light"
                      onPress={onClose}
                      type="reset"
                    >
                      Close
                    </Button>
                    <Button
                      color="primary"
                      type="submit"
                    >
                      Log In
                    </Button>
                  </ModalFooter>
                </form>
              ) : (
                <form onSubmit={handleSignUp}>
                  <ModalHeader className="flex flex-col gap-1 text-black">
                    Sign Up
                  </ModalHeader>
                  <ModalHeader className="flex flex-col gap-1">
                    <div className="flex w-full space-x-2 justify-center">
                      <Button
                        className="w-full"
                        onPress={() =>
                          setLogIn(true)
                        }
                      >
                        Log In
                      </Button>
                      <Button
                        className="w-full"
                        onPress={() =>
                          setLogIn(false)
                        }
                      >
                        Sign Up
                      </Button>
                    </div>
                  </ModalHeader>
                  <ModalBody>
                    <div className="w-full flex flex-row space-x-2">
                      <Input
                        label="First Name"
                        value={fName}
                        onValueChange={
                          setFirstName
                        }
                        isRequired
                      />
                      <Input
                        label="Last Name"
                        value={lName}
                        onValueChange={
                          setLastName
                        }
                        isRequired
                      />
                    </div>
                    <Input
                      label="Username"
                      value={username}
                      onValueChange={setUsername}
                      isRequired
                    />
                    <Input
                      label="Email"
                      value={email}
                      onValueChange={setEmail}
                      isRequired
                    />
                    <Input
                      label="Password"
                      type="password"
                      value={password}
                      onValueChange={setPassword}
                      isRequired
                    />
                    <Input
                      label="Confirm Password"
                      type="password"
                      value={confirmPassword}
                      onValueChange={
                        setConfirmPassword
                      }
                      isRequired
                    />

                    <Select
                      label="Account Type"
                      placeholder=""
                      selectedKeys={type}
                      onSelectionChange={setType}
                      className=" w-full"
                      size="md"
                      color="default"
                      isRequired
                    >
                      <SelectItem
                        key="mentor"
                        value="mentor"
                        className="text-black"
                      >
                        Mentor
                      </SelectItem>
                      <SelectItem
                        key="mentee"
                        value="mentee"
                        className="text-black"
                      >
                        Mentee
                      </SelectItem>
                    </Select>
                  </ModalBody>
                  <ModalFooter className="justify-between">
                    <Button
                      color="danger"
                      variant="light"
                      onPress={onClose}
                      type="reset"
                    >
                      Close
                    </Button>
                    <Button
                      color="primary"
                      type="submit"
                    >
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
