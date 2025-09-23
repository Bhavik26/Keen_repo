"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ActiveLink = ({ children, activeClassName, className, ...props }) => {
  const pathname = usePathname();
  const newClassName =
    pathname === props.href
      ? `${className || ""} ${activeClassName}`.trim()
      : className;

  return (
    <Link {...props} className={newClassName}>
      {children}
    </Link>
  );
};

export default ActiveLink;