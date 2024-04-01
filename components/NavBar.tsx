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
  const { isOpen, onOpen, onOpenChange } =
    useDisclosure();

  const [logIn, setLogIn] = useState(true);

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
            <Button onPress={onOpen}>
              Log In / Sign Up
            </Button>
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
                <form>
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
                      <Input label="Email" />
                      <Input
                        label="Password"
                        type="password"
                      />
                    </div>
                  </ModalBody>
                  <ModalFooter className=" justify-between">
                    <Button
                      color="danger"
                      variant="light"
                      onPress={onClose}
                    >
                      Close
                    </Button>
                    <Button
                      color="primary"
                      onPress={onClose}
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
                    <Input label="First Name" />
                    <Input label="Last Name" />
                    <Input label="Email" />
                    <Input
                      label="Password"
                      type="password"
                    />
                    <Input
                      label="Confirm Password"
                      type="password"
                    />
                    <RadioGroup
                      label="Mentor or Mentee"
                      orientation="horizontal"
                      className=""
                    >
                      <div className="flex w-full space-x-10 justify-center">
                        <Radio value="Mentor">
                          Mentor
                        </Radio>
                        <Radio value="Mentee">
                          Mentee
                        </Radio>
                      </div>
                    </RadioGroup>
                  </ModalBody>
                  <ModalFooter className="justify-between">
                    <Button
                      color="danger"
                      variant="light"
                      onPress={onClose}
                    >
                      Close
                    </Button>
                    <Button
                      color="primary"
                      onPress={onClose}
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
