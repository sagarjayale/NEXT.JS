"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function authLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [input, setInput] = useState("");
    const usePath = usePathname();
    // console.log(input)
  return (
    <>
    <input value={input} onChange={(e)=> setInput(e.target.value)}/>
    <h1>group Auth</h1>
    {children}
    
    </>
  );
}
