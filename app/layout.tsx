import "../styles/globals.css";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" className="dark">
    <head />
    <body className="bg-white dark:bg-black text-slate-900 dark:text-white">
      {children}
    </body>
  </html>
);

export default RootLayout;
