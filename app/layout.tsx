import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <div className="flex flex-row items-center justify-center w-full min-h-8 bg-secondary">
            <p className="text-secondary-content text-xs p-2 md:p-0 md:text-sm">
              This is currently a beta version of the Synaptic AI. Have a feature you’d love to see? Drop us a note — we’re building SynapticAI with you in mind.
              <a
                className="link link-hover pl-1 underline"
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSci2qBIX5SLq0H3Gut3bpHFROf3pEC-fAIaOAWlsndJxrvhcQ/viewform?usp=dialog"
              >
                Feedback Form
              </a>
            </p>
          </div>

          {children}
          <footer className="footer place-items-center sm:footer-horizontal bg-neutral text-neutral-content p-10">
            <nav>
              <h6 className="footer-title">Reach out to Developer</h6>
              <a
                className="link link-hover"
                href="mailto:Psriraj1902@gmail.com"
                target="_blank"
              >
                Email
              </a>
              <a
                className="link link-hover"
                href="https://www.linkedin.com/in/sriraj-palakurthi-ab86061bb/"
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                className="link link-hover"
                href="https://github.com/Sriraj-dev"
                target="_blank"
              >
                Github
              </a>
            </nav>
          </footer>
        </div>
      </body>
    </html>
  );
}
