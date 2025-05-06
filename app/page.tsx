import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { ArrowRight, Brain, Chrome } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import TypingAnimation from "./components/dashboard/TypingAnimation";
import AnimatedButton from "./components/dashboard/AnimatedButton";
import { FeatureCard } from "./components/dashboard/FeatureCard";
import { BenefitCard } from "./components/dashboard/BenefitCard";
import {
  benefits,
  features,
  howItWorksSteps,
  upcomingFeatures,
} from "./utils/constants/LandingPageConstants";
import { HowItWorksCard } from "./components/dashboard/HowItWorksCard";

export const metadata: Metadata = {
  title: "Synaptic AI",
  description: "Your Personal AI Assistant",
};

export default async function Home() {
  const chrome_extension_url =
    process.env.NEXT_PUBLIC_CHROME_EXTENSION_URL || "";

  return (
    <ClerkProvider>
      <div className="flex flex-col items-center w-full min-h-screen">
        {/* Navigation */}
        <header id="header" className="w-full">
          <div className="flex flex-row h-16 items-center justify-around">
            <div className="flex items-center gap-2 ">
              <Brain className="h-6 w-6 text-purple-600" />
              <span className="text-xl font-bold">SynapticAI</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="#features"
                className="text-sm font-medium hover:underline"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm font-medium hover:underline"
              >
                How It Works
              </Link>
              <Link
                href="#benefits"
                className="text-sm font-medium hover:underline"
              >
                Benefits
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="btn btn-outline">Login</button>
                </SignInButton>
              </SignedOut>
              <a href={chrome_extension_url} target="_blank">
                <button className="btn btn-soft btn-primary">
                  Get Extension
                </button>
              </a>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        </header>

        <main className="flex-1 w-full items-center">
          {/* Hero Section */}
          <section className="py-28 md:py-48 min-h-screen">
            <div className="px-4 md:px-6">
              <div className="flex flex-col items-center text-center space-y-4 md:space-y-6">
                <div className="inline-block rounded-lg bg-primary-content px-3 py-1 text-sm text-primary">
                  Introducing SynapticAI
                </div>
                <h1 className="text-3xl md:text-5xl font-bold tracking-tighter max-w-3xl text-foreground">
                  {/* <TypingHeading fullText="Your AI-Powered Second Brain for the Web" /> */}
                  Transform your Throughts Into Intelligence
                </h1>
                <p className="text-gray-500 md:text-xl max-w-[42rem]">
                  SynapticAI helps you capture, organize, and recall everything
                  you learn online. Never lose valuable information again.
                  <span className="pl-1 w-10">
                    <TypingAnimation
                      fullText="#ForgetForgetting"
                      typingSpeed={50}
                    ></TypingAnimation>
                  </span>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 min-[400px]:gap-6">
                  <AnimatedButton
                    href={chrome_extension_url}
                    target="_blank"
                    className="btn btn-soft btn-primary"
                  >
                    <Chrome className="h-5 w-5" />
                    Install Chrome Extension
                  </AnimatedButton>
                  <SignedOut>
                    <SignUpButton mode="modal">
                      <button className="btn btn-outline">Sign Up</button>
                    </SignUpButton>
                  </SignedOut>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-16 md:py-24 md:px-25">
            <div className="px-4 md:px-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <h2 className="text-2xl md:text-4xl font-bold tracking-tighter text-foreground">
                  Powerful Features
                </h2>
                <p className="text-gray-500 md:text-lg max-w-[42rem]">
                  SynapticAI comes packed with everything you need to enhance
                  your online learning experience.
                </p>
              </div>
              {/* Mobile Features Grid */}
              <div className="grid grid-cols-1 gap-8 mt-12 md:hidden">
                {features.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    {...feature}
                    index={index}
                    isMobile={true}
                  />
                ))}
              </div>

              {/* Large screens Features Grid*/}
              <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 hidden md:grid">
                {features.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    {...feature}
                    index={index}
                    isMobile={false}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
            <div className="px-4 md:px-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <h2
                  className="text-2xl md:text-4xl font-bold tracking-tighter"
                  style={{ color: "#0a0a0a" }}
                >
                  How SynapticAI Works
                </h2>
                <p className="text-gray-500 md:text-lg max-w-[42rem]">
                  A simple process to enhance your online learning experience.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {howItWorksSteps.map((x, index) => (
                  <HowItWorksCard key={x.number} {...x} index={index} />
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section id="benefits" className="py-16 md:py-24 w-full md:px-25">
            <div className="px-4 md:px-6">
              <div className="flex flex-col w-full items-center text-center space-y-4">
                <h2 className="text-2xl md:text-4xl font-bold tracking-tighter text-foreground">
                  Why Choose SynapticAI
                </h2>
                <p className="text-gray-500 md:text-lg max-w-[42rem]">
                  SynapticAI transforms how you learn and retain information
                  online.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 w-full">
                  {benefits.map((benefit, index) => (
                    <BenefitCard key={index} {...benefit} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Coming Soon Section */}
          <section className="py-16 md:py-24 md:px-25">
            <div className="px-4 md:px-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-800">
                  Coming Soon
                </div>
                <h2 className="text-2xl md:text-4xl font-bold tracking-tighter">
                  Exciting Features in Development
                </h2>
                <p className="text-gray-500 md:text-lg max-w-[42rem]">
                  We're constantly improving SynapticAI. Here's what's coming
                  next:
                </p>
                {/* Mobiles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left md:hidden">
                  {upcomingFeatures.map((feature, index) => (
                    <FeatureCard
                      key={index}
                      {...feature}
                      index={index}
                      isMobile={true}
                    />
                  ))}
                </div>
                {/* Desktops Grid */}
                <div className="grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left hidden md:grid">
                  {upcomingFeatures.map((feature, index) => (
                    <FeatureCard
                      key={index}
                      {...feature}
                      index={index}
                      isMobile={false}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 md:py-24">
            <div className="px-4 md:px-6">
              <div className="flex flex-col items-center text-center space-y-4 md:space-y-6">
                <h2 className="text-2xl md:text-4xl font-bold tracking-tighter">
                  Ready to Enhance Your Learning Experience?
                </h2>
                <p className="text-gray-500 md:text-lg max-w-[42rem]">
                  Join the SynapticAI community today
                </p>
                <div className="flex flex-col sm:flex-row gap-4 min-[400px]:gap-6">
                  <AnimatedButton
                    href="#header"
                    target=""
                    className="btn btn-soft btn-primary"
                  >
                    Get Started Now
                    <ArrowRight className="h-5 w-5" />
                  </AnimatedButton>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="py-6 md:py-0 w-full">
          <div className="flex flex-row w-full items-center justify-around h-16">
            <div className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-medium">SynapticAI © 2025</span>
            </div>
            <nav className="flex items-center gap-4 md:gap-6">
              <Link
                href="/privacypolicy"
                className="text-xs md:text-sm text-gray-500 hover:underline"
              >
                Privacy
              </Link>
              <Link
                href=""
                className="text-xs md:text-sm text-gray-500 hover:underline"
              >
                Terms
              </Link>
              <Link
                href=""
                className="text-xs md:text-sm text-gray-500 hover:underline"
              >
                Contact
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </ClerkProvider>
  );
}
