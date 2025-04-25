"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Stack() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const categories = [
    {
      id: "ai",
      title: "AI",
      tools: [
        {
          name: "Le Chat",
          description: "For general assistance, content ideation, and problem-solving.",
          logo: "/placeholder.svg?height=40&width=40",
          link: "#",
        },
        {
          name: "Cursor",
          description: "AI-powered code editor that helps with coding and refactoring.",
          logo: "/placeholder.svg?height=40&width=40",
          link: "#",
        },
        {
          name: "Midjourney",
          description: "AI art generation for creative projects and illustrations.",
          logo: "/placeholder.svg?height=40&width=40",
          link: "#",
        },
      ],
    },
    {
      id: "development",
      title: "Development",
      tools: [
        {
          name: "TypeScript",
          description: "Primary programming language for type-safe JavaScript development.",
          logo: "/placeholder.svg?height=40&width=40",
          link: "https://www.typescriptlang.org/",
        },
        {
          name: "Next.js",
          description: "React framework for production-grade web applications.",
          logo: "/placeholder.svg?height=40&width=40",
          link: "https://nextjs.org/",
        },
        {
          name: "React",
          description: "JavaScript library for building user interfaces.",
          logo: "/placeholder.svg?height=40&width=40",
          link: "https://reactjs.org/",
        },
        {
          name: "Node.js",
          description: "JavaScript runtime for server-side development.",
          logo: "/placeholder.svg?height=40&width=40",
          link: "https://nodejs.org/",
        },
        {
          name: "Tailwind CSS",
          description: "Utility-first CSS framework for rapid UI development.",
          logo: "/placeholder.svg?height=40&width=40",
          link: "https://tailwindcss.com/",
        },
        {
          name: "Prisma",
          description: "Next-generation ORM for Node.js and TypeScript.",
          logo: "/placeholder.svg?height=40&width=40",
          link: "https://www.prisma.io/",
        },
      ],
    },
    {
      id: "design",
      title: "Design",
      tools: [
        {
          name: "Figma",
          description: "Collaborative interface design tool for UI/UX design.",
          logo: "/placeholder.svg?height=40&width=40",
          link: "https://www.figma.com/",
        },
        {
          name: "Framer",
          description: "Interactive design and prototyping tool.",
          logo: "/placeholder.svg?height=40&width=40",
          link: "https://www.framer.com/",
        },
      ],
    },
    {
      id: "productivity",
      title: "Productivity",
      tools: [
        {
          name: "VS Code",
          description: "Powerful code editor with extensive plugin ecosystem.",
          logo: "/placeholder.svg?height=40&width=40",
          link: "https://code.visualstudio.com/",
        },
        {
          name: "Notion",
          description: "All-in-one workspace for notes, tasks, and project management.",
          logo: "/placeholder.svg?height=40&width=40",
          link: "https://www.notion.so/",
        },
      ],
    },
  ]

  return (
    <section id="stack" ref={containerRef} className="py-20 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Stack</h2>
          <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-6">Tools, technology and apps I use every day.</h3>
        </motion.div>

        <div className="space-y-16">
          {categories.map((category, categoryIndex) => (
            <div key={category.id} className="space-y-6">
              <motion.h3
                className="text-xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {category.title}
              </motion.h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * toolIndex + 0.2 * categoryIndex }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <Card className="overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-300 dark:bg-navy-500/50 h-full">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="relative w-10 h-10 flex-shrink-0">
                            <Image
                              src={tool.logo || "/placeholder.svg"}
                              alt={tool.name}
                              width={40}
                              height={40}
                              className="object-contain"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-1">
                              <h4 className="font-medium">{tool.name}</h4>
                              {tool.link && (
                                <a
                                  href={tool.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-teal-500 hover:text-teal-600 transition-colors"
                                >
                                  <ExternalLink size={14} />
                                </a>
                              )}
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{tool.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
