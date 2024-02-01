"use client";
import React, { ReactNode } from "react";
import "@/styles/tailwind.css";

import "../styles/index.css";
import "../styles/font.css";

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>Shivangdave123's Application82</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-next-app"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
export default RootLayout;
