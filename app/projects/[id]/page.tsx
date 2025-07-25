"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, X, ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PageWrapper } from "@/components/page-wrapper"

// This would typically come from a database or API
const projectsData = [
  {
    id: "tunisiaflicks",
    title: "TunisiaFlicks",
    description:
      "A dedicated streaming and discovery platform for Tunisian cinema, offering users free access to a curated selection of movies with no ads.",
    fullDescription:
      "TunisiaFlicks is a comprehensive platform designed to showcase and preserve Tunisian cinema heritage. The platform provides a user-friendly interface for discovering, watching, and learning about Tunisian films across different genres and eras. With features like user profiles, favorites, and curated collections, TunisiaFlicks aims to make Tunisian cinema more accessible to both local audiences and international viewers interested in North African cinema.",
    image: "/src/projects/tunisiaflicks/thumbnail.png?height=600&width=1200",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Zustand", "Framer Motion", "JWT", "JSDOM"],
    category: "fullstack",
    demoLink: "https://github.com/maghraoui3/tunisiaflicks",
    githubLink: "https://github.com/maghraoui3/tunisiaflicks",
    features: [
      "Modern, interactive UI with dark/light mode",
      "Profile dashboard with favorites and saved movies",
      "Tunisian Movies Section via web scraping with JSDOM",
      "Secure authentication with JWT, cookies, hashed passwords",
      "Optimized with Next.js for server-side rendering and SEO",
      "Interactive components built with ShadCN and Zustand",
      "Scalable data storage using MongoDB",
      "Smooth animations with Framer Motion",
    ],
    challenges: [
      "Implementing efficient web scraping techniques to gather film data while respecting source websites",
      "Building a responsive video player that works across different devices and connection speeds",
      "Creating a secure authentication system to protect user data",
      "Optimizing performance for users with slower internet connections",
    ],
    outcomes: [
      "Positive user feedback for intuitive design and comprehensive movie database",
      "Increased engagement with Tunisian cinema among younger audiences",
      "Platform serves as a valuable resource for film students and researchers",
    ],
    screenshots: [
      {
        title: "Homepage",
        image: "/src/projects/tunisiaflicks/screenshots/homepage.png?height=400&width=800",
        description: "The main landing page showcasing featured films and categories",
      },
      {
        title: "Movie Details",
        image: "/src/projects/tunisiaflicks/screenshots/moviedetails.png?height=400&width=800",
        description: "Detailed view of a selected movie with information and viewing options",
      },
      {
        title: "User Profile",
        image: "/src/projects/tunisiaflicks/screenshots/userprofile.png?height=400&width=800",
        description: "A personalized profile page displaying saved films, user preferences, and activity history",
      },
    ],
    // videoUrl: "/src/projects/tunisiaflicks/demo.mp4",
  },
  {
    id: "lead-insight",
    title: "Lead Insight",
    description:
      "AI-Powered Instagram Lead Management Platform designed to help marketers upload, analyze, score, and manage Instagram leads efficiently using AI and advanced filtering.",
    fullDescription:
      "Lead Insight is a sophisticated lead management system specifically designed for Instagram marketers. The platform leverages artificial intelligence to analyze and score potential leads based on their profile data, engagement metrics, and business relevance. Users can upload batches of Instagram accounts, apply keyword filtering, and generate personalized outreach messages, all within an intuitive dashboard interface.",
    image: "/src/projects/lead-insight/backdrop.png?height=600&width=1200",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "MongoDB",
      "OpenAI API",
      "Groq SDK",
      "Tailwind CSS",
      "Radix UI",
      "Framer Motion",
      "TanStack Table",
    ],
    category: "ai",
    demoLink: null,
    githubLink: null,
    features: [
      "Batch Lead Upload with CSV file processing",
      "AI-Powered Scoring using OpenAI API and Groq SDK",
      "Keyword Filtering with 'Good' and 'Bad' keyword matching logic",
      "Custom AI-generated messaging with editable templates",
      "Interactive Dashboard with comprehensive metrics",
      "Secure Authentication with protected routes and JWT",
      "Responsive UI with mobile-ready layout",
      "Progressive batch scoring with retry/backoff logic",
    ],
    challenges: [
      "Designing an efficient system for processing large batches of leads",
      "Implementing reliable AI scoring algorithms that provide consistent results",
      "Creating an intuitive interface for complex filtering operations",
      "Ensuring data privacy and security throughout the lead management process",
    ],
    outcomes: [
      "Streamlined lead generation workflows for marketing professionals",
      "Improved AI-based lead qualification resulting in more targeted outreach",
      "Better user efficiency with time saved on manual lead screening",
      "Highly positive client feedback on the platform's capabilities",
    ],
    screenshots: [
      {
        title: "Dashboard Overview",
        image: "/src/projects/lead-insight/screenshots/dashboard.png?height=400&width=800",
        description: "Main dashboard showing lead metrics and batch status",
      },
      {
        title: "Lead Scoring Interface",
        image: "/src/projects/lead-insight/screenshots/leads.png?height=400&width=800",
        description: "AI-powered lead scoring and analysis view",
      },
      {
        title: "Message Template Editor",
        image: "/src/projects/lead-insight/screenshots/generated-message.png?height=400&width=800",
        description: "Custom messaging interface with AI-generated templates",
      },
    ],
    // videoUrl: "/src/projects/lead-insight/demo.mp4",
  },
  {
    id: "ipsas-university",
    title: "IPSAS University Platform",
    description:
      "A full-stack web platform for IPSAS University developed during a hackathon, designed to centralize access to university resources and services.",
    fullDescription:
      "The IPSAS University Platform was developed during an intensive hackathon to address the need for a centralized digital hub for university resources. The platform combines modern web technologies with innovative features like blockchain-based certification and AI assistance to create a comprehensive solution for students, faculty, and administrators. Despite the time constraints of the hackathon environment, the project delivered a fully functional platform with a focus on user experience and technical innovation.",
    image: "/src/projects/ipsas-university/backdrop.png?height=600&width=1200",
    tags: ["React.js", "Next.js", "Tailwind CSS", "MongoDB", "Framer Motion", "Ethereum", "AI Chatbot"],
    category: "fullstack",
    demoLink: "https://ipsas.vercel.app",
    githubLink: "https://github.com/maghraoui3/ipsas-hackathon",
    features: [
      "Responsive UI built with React.js and enhanced with Framer Motion",
      "AI-Powered Chatbot for instant academic assistance",
      "Blockchain Integration using Ethereum for secure credential verification",
      "Secure Authentication with role-based access control",
      "Scalable MongoDB backend for efficient data management",
      "Dynamic routing and server-side rendering with Next.js",
      "Optimized performance and SEO capabilities",
    ],
    challenges: [
      "Developing a complete platform within the tight timeframe of a hackathon",
      "Integrating blockchain technology for credential verification",
      "Creating an effective AI chatbot with limited training data",
      "Designing an intuitive interface that works for different user roles",
    ],
    outcomes: [
      "Successfully delivered a functional platform within the hackathon deadline",
      "Demonstrated innovative use of emerging technologies in an educational context",
      "Created a solution that could be further developed for actual implementation",
      "Received positive feedback from hackathon judges and participants",
    ],
    screenshots: [
      {
        title: "Homepage",
        image: "/src/projects/ipsas-university/screenshots/homepage.png?height=400&width=800",
        description: "Main landing page with university information and navigation",
      },
      {
        title: "Admin Dashboard",
        image: "/src/projects/ipsas-university/screenshots/admin-dashboard.png?height=400&width=800",
        description: "An admin dashboard manages university data and operations.",
      },
      {
        title: "Blockchain Certification",
        image: "/src/projects/ipsas-university/screenshots/certificates.png?height=400&width=800",
        description: "Interface for verifying academic credentials using blockchain",
      },
    ],
    // videoUrl: "/src/projects/ipsas-university/demo.mp4",
  },
]

// Screenshot Carousel Component
function ScreenshotCarousel({ screenshots, initialIndex = 0, onClose }: { screenshots: any[], initialIndex?: number, onClose: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 ${isFullscreen ? 'p-0' : ''}`}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className={`relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden max-w-6xl w-full ${isFullscreen ? 'h-full max-w-none rounded-none' : 'max-h-[90vh]'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-4">
            <h3 className="text-lg font-semibold">{screenshots[currentIndex].title}</h3>
            <span className="text-sm text-gray-500">
              {currentIndex + 1} of {screenshots.length}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleFullscreen}
              className="hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <X size={16} />
            </Button>
          </div>
        </div>

        {/* Image Container */}
        <div className={`relative ${isFullscreen ? 'h-[calc(100vh-120px)]' : 'h-[60vh]'} bg-gray-50 dark:bg-gray-800`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={screenshots[currentIndex].image || "/placeholder.svg"}
                alt={screenshots[currentIndex].title}
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          {screenshots.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="sm"
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm"
              >
                <ChevronLeft size={20} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm"
              >
                <ChevronRight size={20} />
              </Button>
            </>
          )}
        </div>

        {/* Description */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-300">{screenshots[currentIndex].description}</p>
        </div>

        {/* Thumbnail Navigation */}
        {screenshots.length > 1 && (
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-2 overflow-x-auto">
              {screenshots.map((screenshot, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative flex-shrink-0 w-16 h-12 rounded-md overflow-hidden border-2 transition-all ${
                    index === currentIndex
                      ? 'border-teal-500 ring-2 ring-teal-500/20'
                      : 'border-gray-300 dark:border-gray-600 hover:border-gray-400'
                  }`}
                >
                  <Image
                    src={screenshot.image || "/placeholder.svg"}
                    alt={screenshot.title}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default function ProjectDetails() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [selectedScreenshot, setSelectedScreenshot] = useState<number | null>(null)
  const [isVideoFullscreen, setIsVideoFullscreen] = useState(false)

  useEffect(() => {
    if (params.id) {
      const foundProject = projectsData.find((p) => p.id === params.id)
      if (foundProject) {
        setProject(foundProject)
      } else {
        // Project not found, redirect to projects page
        router.push("/")
      }
      setLoading(false)
    }
  }, [params.id, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
      </div>
    )
  }

  if (!project) {
    return null
  }

  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-20">
        <Link
          href="/projects"
          className="inline-flex items-center text-teal-500 hover:text-teal-600 transition-colors mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Projects
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="relative h-[40vh] md:h-[50vh] w-full rounded-xl overflow-hidden mb-8">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">{project.title}</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag: string, i: number) => (
                  <Badge key={i} variant="outline" className="bg-teal-500/20 text-white border-teal-500/30">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{project.fullDescription}</p>

              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-2 mb-8">
                {project.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold mb-4">Challenges & Solutions</h2>
              <ul className="space-y-2 mb-8">
                {project.challenges.map((challenge: string, i: number) => (
                  <li key={i} className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-300">{challenge}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold mb-4">Outcomes</h2>
              <ul className="space-y-2 mb-8">
                {project.outcomes.map((outcome: string, i: number) => (
                  <li key={i} className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-300">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="bg-white/5 dark:bg-navy-500/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800 mb-6">
                <h3 className="text-xl font-bold mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Category</h4>
                    <p className="capitalize">{project.category}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Technologies</h4>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {project.tags.slice(0, 6).map((tag: string, i: number) => (
                        <Badge key={i} variant="outline" className="bg-teal-500/10 text-teal-500 border-teal-500/20">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 6 && (
                        <Badge variant="outline" className="bg-gray-500/10 text-gray-500 border-gray-500/20">
                          +{project.tags.length - 6}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-teal-500 text-white hover:bg-teal-600 transition-colors"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        View Live Demo
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 rounded-md border border-teal-500 text-teal-500 hover:bg-teal-500/10 transition-colors"
                      >
                        <Github size={16} className="mr-2" />
                        View Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Video Preview Section */}
              {project.videoUrl && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white/5 dark:bg-navy-500/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">Project Preview</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsVideoFullscreen(true)}
                      className="hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <Maximize2 size={16} className="mr-2" />
                      Fullscreen
                    </Button>
                  </div>
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <video
                      src={project.videoUrl}
                      controls
                      className="w-full h-full object-cover"
                      poster={project.image}
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Screenshots Section - Only show if project has screenshots */}
          {project.screenshots && project.screenshots.length > 0 && (
            <>
              <h2 className="text-2xl font-bold mb-6">Screenshots</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {project.screenshots.map((screenshot: any, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * i }}
                    className="bg-white/5 dark:bg-navy-500/50 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 cursor-pointer group hover:border-teal-500/50 transition-all duration-300"
                    onClick={() => setSelectedScreenshot(i)}
                  >
                    <div className="relative h-60 w-full overflow-hidden">
                      <Image
                        src={screenshot.image || "/placeholder.svg"}
                        alt={screenshot.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileHover={{ opacity: 1, scale: 1 }}
                          className="bg-teal-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <Maximize2 size={20} />
                        </motion.div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold mb-1 group-hover:text-teal-500 transition-colors">{screenshot.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{screenshot.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}

          <div className="flex justify-center">
            <Link
              href="/#projects"
              className="inline-flex items-center px-6 py-3 rounded-md bg-teal-500 text-white hover:bg-teal-600 transition-colors"
            >
              <ArrowLeft size={18} className="mr-2" />
              Back to all projects
            </Link>
          </div>
        </motion.div>

        {/* Screenshot Carousel Modal */}
        <AnimatePresence>
          {selectedScreenshot !== null && (
            <ScreenshotCarousel
              screenshots={project.screenshots}
              initialIndex={selectedScreenshot}
              onClose={() => setSelectedScreenshot(null)}
            />
          )}
        </AnimatePresence>

        {/* Video Fullscreen Modal */}
        <AnimatePresence>
          {isVideoFullscreen && project.videoUrl && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-50 flex items-center justify-center"
              onClick={() => setIsVideoFullscreen(false)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative w-full h-full max-w-7xl max-h-full p-4"
                onClick={(e) => e.stopPropagation()}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsVideoFullscreen(false)}
                  className="absolute top-6 right-6 z-10 bg-black/50 hover:bg-black/70 text-white"
                >
                  <X size={20} />
                </Button>
                <video
                  src={project.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain rounded-lg"
                  poster={project.image}
                >
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageWrapper>
  )
}
