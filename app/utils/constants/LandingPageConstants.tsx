import { Brain, Chrome, FileSearch, FileText, Grid3x3, ListTodo, Mic, Search } from "lucide-react";


export const benefits = [
    {
      title: "Never Forget What You Learn",
      description:
        "SynapticAI automatically captures the key points from everything you read or watch, so you always have a personal knowledge base ready when you need it.",
      index: 0,
    },
    {
      title: "Save Hours with Instant Summaries",
      index: 1,
      description:
        "Get bite-sized summaries of articles, papers, and videos—so you focus only on what matters, without wasting time.",
    },
    {
      title: "Stay Effortlessly Organized",
      index: 2,
      description:
        "No more messy notes or scattered bookmarks. SynapticAI neatly organizes your notes, tasks, and ideas in one smart system.",
    },
    {
      title: "Personalized Experience That Adapts to You",
      index: 3,
      description:
        "SynapticAI learns your preferences over time and tailors suggestions and summaries to your unique learning style.",
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
      icon: <Search className="h-6 w-6" />,
      title: "AI-Powered Memory Search",
      description:
        "Ask anything, and SynapticAI instantly finds answers from your notes—like having a personal research assistant.",
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
      icon: <FileText className="h-6 w-6" />,
      title: "Smart Note-Taking",
      description:
        "Effortlessly capture and organize your thoughts, insights, and highlights while browsing the web or watching videos.",
      bg: "bg-foreground",
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
      bg: "bg-white"
    },
    {
      title: "Voice Interaction",
      description:
        "Go hands-free: interact with SynapticAI using voice commands while browsing websites, watching videos, or reviewing your notes.",
      icon: <Mic className="h-6 w-6" />,
      bg: "bg-white"
    },
    {
      title: "Rich Text Editor Dashboard",
      description:
        "Manage, edit, and organize all your notes in one beautiful, feature-rich dashboard — with full control over formatting and structure.",
      icon: <FileText className="h-6 w-6" />,
      bg: "bg-white"
    },
    {
      title: "Advanced Task Board",
      description:
        "Stay on top of your work with a Kanban-style task board — easily customize statuses, categories, and priorities to match your workflow.",
      icon: <Grid3x3 className="h-6 w-6" />,
      bg: "bg-white"
    },
  ];
  