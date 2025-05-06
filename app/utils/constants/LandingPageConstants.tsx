import {
  Brain,
  Chrome,
  FileSearch,
  FileText,
  Grid3x3,
  ListTodo,
  Mic,
  Search,
  Smartphone,
  UploadCloud,
} from "lucide-react";

export const benefits = [
  {
    title: "Live Interaction with Your Memory",
    description:
      "SynapticAI automatically captures and remembers the key points from everything you read or watch, so you always have a personal knowledge base ready when you need it.",
    index: 0,
  },
  {
    title: "Stay Effortlessly Organized",
    index: 1,
    description:
      "No more messy notes or scattered bookmarks. SynapticAI neatly organizes your notes, tasks, and ideas in one smart system.",
  },
  {
    title: "Actionable Learning Loops",
    index: 2,
    description:
      "Go beyond passive reading — turn learnings into tasks, reminders, or flashcards, helping you actively engage and retain knowledge",
  },
  {
    title: "Personalized Experience That Adapts to You",
    index: 3,
    description:
      "SynapticAI learns your preferences over time and tailors suggestions and summaries to your unique learning style.",
  },
  {
    title: "Save Hours with Instant Summaries",
    index: 4,
    description:
      "Get bite-sized summaries of articles, papers, and videos—so you focus only on what matters, without wasting time.",
  },
  {
    title: "Seamless Multi-Device Access",
    index: 5,
    description:
      "Your notes, highlights, and summaries sync across devices, so you can access them anytime — on desktop or mobile.",
  },

];

export const features = [
  {
    icon: <Chrome className="h-6 w-6" />,
    title: "Chrome Extension",
    description:
      "Seamlessly bring SynapticAI into your browser. Summarize, save, and interact with your AI Assistant—all without leaving the page.",
    bg: "bg-white",
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Smart Note-Taking",
    description:
      "Seamlessly capture and organize insights from any webpage or video you explore — keeping your knowledge always at your fingertips.",
    bg: "bg-foreground",
  },
  {
    icon: <Search className="h-6 w-6" />,
    title: "AI-Powered Memory Search",
    description:
      "Ask anything, and SynapticAI instantly finds answers from your notes or web—like having a personal research assistant.",
    bg: "bg-white",
  },
  {
    icon: <Mic className="h-6 w-6" />,
    title: "Voice Interaction",
    description:
      "Talk to SynapticAI hands-free. Use voice commands to query, search, or take notes as you browse.",
    bg: "bg-white",
  },

  {
    icon: <ListTodo className="h-6 w-6" />,
    title: "Task Management",
    description:
      "Stay organized with AI-generated tasks, reminders, and deadlines—designed to keep you on track and productive.",
    bg: "bg-white",
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Smart Summaries",
    description:
      "Get lightning-fast summaries of articles and YouTube videos, helping you learn more in less time.",
    bg: "bg-white",
  },
];

export const upcomingFeatures = [
  {
    title: "Advanced Note Querying",
    description:
      "Ask complex questions about your notes and get intelligent, contextual answers from your personal knowledge base.",
    icon: <FileSearch className="h-6 w-6" />,
    bg: "bg-white",
  },
  {
    title: "Voice Interaction",
    description:
      "Go hands-free: interact with SynapticAI using voice commands while browsing websites, watching videos, or reviewing your notes.",
    icon: <Mic className="h-6 w-6" />,
    bg: "bg-white",
  },
  {
    title: "Rich Text Editor Dashboard",
    description:
      "Manage, edit, and organize all your notes in one beautiful, feature-rich dashboard — with full control over formatting and structure.",
    icon: <FileText className="h-6 w-6" />,
    bg: "bg-white",
  },
  {
    title: "Advanced Task Board",
    description:
      "Stay on top of your work with a Kanban-style task board — easily customize statuses, categories, and priorities to match your workflow.",
    icon: <Grid3x3 className="h-6 w-6" />,
    bg: "bg-white",
  },
  {
    title: "Multi-Device Access",
    description:
      "Seamlessly access your notes and summaries across all your devices — whether you’re on desktop, tablet, or mobile.",
    icon: <Smartphone className="h-6 w-6" />,
    bg: "bg-white",
  },
  {
    title: "Handwritten Notes & PDF Upload",
    description:
      "Upload photos of your handwritten notes or PDFs to effortlessly convert them into searchable, structured memory inside SynapticAI.",
    icon: <UploadCloud className="h-6 w-6" />,
    bg: "bg-white",
  },
];

export const howItWorksSteps = [
  {
    number: 1,
    title: "Install & Browse",
    description:
      "Install our Chrome extension and browse the web as you normally would.",
  },
  {
    number: 2,
    title: "Interact & Capture",
    description:
      "Use voice or text to ask SynapticAI to summarize pages, take notes, create tasks, or even answer your questions — all while you browse or watch.",
  },
  {
    number: 3,
    title: "Access & Recall",
    description:
    "Effortlessly chat with your saved notes, get reminders for tasks, and query your knowledge base — anytime, anywhere."
  },
];
