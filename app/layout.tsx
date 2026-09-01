import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "AkaTiz — Official", description: "AkaTiz — Rap artist from Mashhad / Khorasan" };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
