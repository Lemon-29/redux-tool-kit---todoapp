import Link from "next/link";
import React from "react";
import Container from "./Container";

const Header = () => {
  return (
    <div className="w-full h-20 bg-gray-950 text-white">
      <Container className="flex items-center justify-between h-20">
        <Link
          href={"/"}
          className="text-xl font-semibold text-gray-300 hover:text-white duration-200"
        >
          <p>
          <span className="font-bold text-2xl text-green-500">L</span>o
          <span className="font-bold text-2xl text-green-500">G</span>o
          </p>
        </Link>
        <ul className="flex items-center gap-x-7">
          <Link href={"/alltodo"}>
            <li>All Todo</li>
          </Link>
          <li>Login</li>
          <li>Contact</li>
          <li>Settings</li>
        </ul>
      </Container>
    </div>
  );
};

export default Header;
