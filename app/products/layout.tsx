import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next App",
  description: "next app",
};

export default function Products({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    {children}
    <h1>Products layout</h1>
    </>
  );
}
