import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tarun N. Behera | Senior DevOps Engineer",
  description:
    "Tarun N. Behera — Senior DevOps Engineer with 3.8+ years of experience in AWS, Kubernetes, Terraform, CI/CD pipelines, cloud security, and FinOps. AWS Certified Solution Architect, Cisco Cyber Security Certified.",
  keywords: [
    "DevOps Engineer",
    "AWS",
    "Kubernetes",
    "Terraform",
    "CI/CD",
    "Cloud Security",
    "FinOps",
    "Site Reliability",
    "Tarun Behera",
  ],
  authors: [{ name: "Tarun N. Behera" }],
  openGraph: {
    title: "Tarun N. Behera | Senior DevOps Engineer",
    description:
      "Senior DevOps Engineer specialising in AWS, Kubernetes, Terraform, and cloud security.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
