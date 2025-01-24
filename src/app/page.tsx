"use client"

import { motion } from 'framer-motion'
import { 
  Network, 
  CloudLightning,
  Shield,
  Lock,
  Globe,
  ArrowRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  const features = [
    {
      icon: Network,
      title: "Comprehensive Security",
      description: "End-to-end protection across your entire digital infrastructure.",
      color: "text-cyan-500"
    },
    {
      icon: CloudLightning,
      title: "Advanced Threat Detection",
      description: "Real-time monitoring and proactive threat intelligence.",
      color: "text-cyan-500"
    },
    {
      icon: Shield,
      title: "Compliance Management",
      description: "Ensure regulatory compliance with our robust frameworks.",
      color: "text-cyan-500"
    }
  ]

  return (
    <div className="min-h-screen w-full bg-[#0a192f] text-white overflow-hidden relative">
      {/* Hero Section */}
      <div className="
        container 
        mx-auto 
        px-6 
        py-24  
        grid 
        md:grid-cols-2 
        gap-16  
        items-center 
        relative 
        z-10
      ">
        {/* Left Column - Hero Text */}
        <div className="space-y-8">  
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              text-5xl 
              md:text-6xl 
              font-bold 
              bg-clip-text 
              text-transparent 
              bg-gradient-to-r 
              from-cyan-400 
              to-cyan-600
              leading-tight
              mb-4  
            "
          >
            Secure Your Business with One-Click Cybersecurity Compliance Solutions
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="
              text-xl 
              text-cyan-100/90 
              max-w-xl
              mb-8  
            "
          >
            Streamline cybersecurity compliance, protect your data, and save time and money with Meta Works.
          </motion.p>

          <div className="flex space-x-6 pt-4">  
            <Button 
              variant="default" 
              className="
                relative
                bg-cyan-500 
                text-white 
                px-10  
                py-4   
                rounded-full 
                text-lg 
                font-semibold 
                shadow-lg 
                shadow-cyan-500/50 
                hover:bg-cyan-600 
                transition-all
                duration-300
                group
                overflow-hidden
                before:absolute
                before:inset-0
                before:bg-cyan-600
                before:opacity-0
                before:transition-opacity
                before:duration-300
                hover:before:opacity-20
              "
            >
              <span className="
                relative 
                z-10 
                flex 
                items-center 
                gap-2
              ">
                Learn More About Our Product
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ArrowRight className="w-5 h-5 transition-transform" />
                </motion.div>
              </span>
            </Button>
            <Button 
              variant="outline" 
              className="
                relative
                border-2
                border-cyan-500 
                text-cyan-300 
                px-10  
                py-4   
                rounded-full 
                text-lg 
                font-semibold 
                transition-all
                duration-300
                group
                overflow-hidden
                bg-transparent
                hover:text-white
                hover:border-cyan-600
              "
            >
              <span className="
                relative 
                z-10 
                flex 
                items-center 
                gap-2
                transition-colors
                duration-300
              ">
                Get Started Today
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ArrowRight className="w-5 h-5 transition-transform" />
                </motion.div>
              </span>
              
              {/* Animated Background Effect */}
              <span 
                className="
                  absolute 
                  inset-0 
                  bg-cyan-500 
                  transform 
                  scale-x-0 
                  group-hover:scale-x-100 
                  origin-left 
                  transition-transform 
                  duration-300 
                  z-0
                "
              />
            </Button>
          </div>
        </div>

        {/* Right Column - Hero Image */}
        <div className="
          relative 
          flex 
          items-center 
          justify-center
          mt-12
        ">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="
              relative
              w-full 
              max-w-[600px] 
              rounded-3xl 
              overflow-hidden 
              shadow-2xl 
              border 
              border-cyan-500/30
              group
            "
          >
            {/* Animated Grid Overlay */}
            <div className="
              absolute 
              inset-0 
              pointer-events-none 
              opacity-30 
              group-hover:opacity-50 
              transition-opacity 
              duration-500
            ">
              <svg 
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern 
                    id="grid" 
                    width="20" 
                    height="20" 
                    patternUnits="userSpaceOnUse"
                  >
                    <path 
                      d="M 20 0 L 0 0 0 20" 
                      fill="none" 
                      stroke="rgba(0,255,255,0.1)" 
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>
                <rect 
                  x="0" 
                  y="0" 
                  width="100%" 
                  height="100%" 
                  fill="url(#grid)"
                />
              </svg>
            </div>

            {/* Image with Hover Effect */}
            <div className="
              relative 
              w-full 
              h-[500px] 
              overflow-hidden 
              transform 
              group-hover:scale-105 
              transition-transform 
              duration-500
            ">
              <Image 
                src="/images/hero-section.png" 
                alt="Cybersecurity Compliance Dashboard"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="
                  object-contain 
                  w-full 
                  h-full 
                  transition-transform 
                  duration-500 
                  group-hover:brightness-110
                "
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="
        container 
        mx-auto 
        px-6 
        py-16 
        grid 
        md:grid-cols-3 
        gap-8
      ">
        {features.map(({ icon: Icon, title, description, color }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="
              bg-[#112240] 
              rounded-3xl 
              p-6 
              border 
              border-cyan-500/20 
              hover:border-cyan-500/40 
              transition-all
            "
          >
            <div className="
              p-3 
              rounded-full 
              bg-cyan-500/20 
              inline-block 
              mb-4
            ">
              <Icon className={`w-8 h-8 ${color}`} />
            </div>
            <h3 className="
              text-xl 
              font-bold 
              text-cyan-100 
              mb-2
            ">
              {title}
            </h3>
            <p className="
              text-cyan-100/80 
              text-sm
            ">
              {description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
