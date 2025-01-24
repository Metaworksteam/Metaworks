import Link from "next/link"
import Image from "next/image"
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Send, 
  Mail, 
  MapPin,
  Info,
  Target
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Footer() {
  const socialLinks = [
    { 
      icon: Twitter, 
      href: "https://twitter.com/metaworks", 
      color: "hover:text-cyan-500" 
    },
    { 
      icon: Linkedin, 
      href: "https://linkedin.com/company/metaworks", 
      color: "hover:text-cyan-500" 
    },
    { 
      icon: Github, 
      href: "https://github.com/metaworks", 
      color: "hover:text-cyan-500" 
    }
  ]

  const aboutLinks = [
    { label: "Our Mission", href: "/about#mission", icon: Target },
    { label: "Company Story", href: "/about#story", icon: Info },
    { label: "Team", href: "/about#team", icon: Info }
  ]

  const contactLinks = [
    { 
      label: "+1 (555) 123-4567", 
      href: "tel:+15551234567", 
      icon: Send 
    },
    { 
      label: "info@metaworks.com", 
      href: "mailto:info@metaworks.com", 
      icon: Mail 
    },
    { 
      label: "Silicon Valley, CA", 
      href: "/contact", 
      icon: MapPin 
    }
  ]

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Product", href: "/product" },
    { label: "Contact", href: "/contact" }
  ]

  return (
    <footer className="
      bg-[#112240] 
      text-white 
      py-16 
      border-t 
      border-cyan-500/20
    ">
      <div className="
        container 
        mx-auto 
        grid 
        md:grid-cols-4 
        gap-12 
        px-6
      ">
        {/* Company Info */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center space-x-3">
            <Image 
              src="/logo-meta-removebg-preview.png" 
              alt="Meta Works Logo" 
              width={50} 
              height={50} 
            />
            <span className="
              text-2xl 
              font-bold 
              bg-clip-text 
              text-transparent 
              bg-gradient-to-r 
              from-cyan-400 
              to-cyan-600
            ">
              Meta Works
            </span>
          </Link>
          
          <p className="
            text-cyan-100/80 
            text-sm 
            max-w-xs
          ">
            Comprehensive cybersecurity compliance solutions that protect and empower your business.
          </p>
          
          <div className="flex space-x-4">
            {socialLinks.map(({ icon: Icon, href, color }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`
                  text-cyan-300 
                  ${color} 
                  transition-colors 
                  duration-300
                `}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* About Links */}
        <div>
          <h4 className="
            text-xl 
            font-semibold 
            mb-6 
            text-cyan-300
          ">
            About Us
          </h4>
          <div className="space-y-4">
            {aboutLinks.map(({ label, href, icon: Icon }, index) => (
              <Link 
                key={index}
                href={href}
                className="
                  flex 
                  items-center 
                  space-x-3 
                  text-sm 
                  text-cyan-100/80 
                  hover:text-cyan-300 
                  transition-colors 
                  duration-300
                "
              >
                <Icon className="w-4 h-4 text-cyan-500" />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Links */}
        <div>
          <h4 className="
            text-xl 
            font-semibold 
            mb-6 
            text-cyan-300
          ">
            Contact
          </h4>
          <div className="space-y-4">
            {contactLinks.map(({ label, href, icon: Icon }, index) => (
              <Link 
                key={index}
                href={href}
                className="
                  flex 
                  items-center 
                  space-x-3 
                  text-sm 
                  text-cyan-100/80 
                  hover:text-cyan-300 
                  transition-colors 
                  duration-300
                "
              >
                <Icon className="w-4 h-4 text-cyan-500" />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="
            text-xl 
            font-semibold 
            mb-6 
            text-cyan-300
          ">
            Quick Links
          </h4>
          <div className="grid grid-cols-2 gap-4">
            {quickLinks.map(({ label, href }, index) => (
              <Link 
                key={index}
                href={href}
                className="
                  text-sm 
                  text-cyan-100/80 
                  hover:text-cyan-300 
                  transition-colors 
                  duration-300
                "
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="
        container 
        mx-auto 
        mt-12 
        pt-6 
        border-t 
        border-cyan-500/20 
        text-center
      ">
        <p className="
          text-sm 
          text-cyan-100/60
        ">
          2024 Meta Works. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
