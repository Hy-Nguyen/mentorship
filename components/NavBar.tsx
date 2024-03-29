"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Input,
} from "@nextui-org/react";

import { useState } from "react";
import { SearchIcon } from "./SeachIcon";

export default function NavBar() {
  let nav = [
    "",
    "About",
    "Services",
    "Contact",
    "Login",
  ];
  const [activeItem, setActiveItem] = useState();

  return (
    <>
      <Navbar
        shouldHideOnScroll
        maxWidth="full"
        className="dark shadow-slate-300 shadow-lg"
      >
        <NavbarBrand>
          <p className="font-bold ">Dream Team</p>
        </NavbarBrand>
        <NavbarContent
          className="hidden sm:flex gap-4"
          justify="center"
        ></NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="#"
              variant="flat"
            >
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
}
