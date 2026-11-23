import "./globals.css";
import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";

export const metadata: Metadata = {
  title: "Biswajit Goswami | Full-Stack Engineering & Digital Growth",
  description: "Biswajit Goswami builds full-stack web applications, ecommerce storefronts and the digital campaigns that help them grow.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
