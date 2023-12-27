import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import LangSwitcher from "./LangSwitcher";
import Image from "next/image";

export default function BaseNavbar() {
  const menuItems = ["Home", "Templates", "Contact", "Pricing"];

  return (
    <Navbar
      maxWidth="xl"
      shouldHideOnScroll
      classNames={{
        base: "backdrop-blur-none bg-gradient-to-b from-white to-white/0 text-landingPrimary",
        content: "text-landingPrimary",
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle className="sm:hidden" />
        <NavbarBrand>
          <Image
            src="/static/main_brand.png"
            width={100}
            height={100}
            alt="INVITARY"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="#">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">Templates</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">Contact</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">Pricing</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <LangSwitcher />
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
