"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { 
  Home,
  Layers,
  Shield,
  Languages 
} from "lucide-react"
import { usePathname } from "next/navigation"
import React from 'react';

export function Header() {
  const pathname = usePathname();

  const NAV_ITEMS = [
    { 
      label: "Home",
      href: "/",
      icon: Home,
      description: "Return to homepage"
    },
    { 
      label: "Product",
      href: "/product",
      icon: Layers,
      description: "Platform features and benefits"
    },
    { 
      label: "Services",
      href: "/services",
      icon: Shield,
      description: "Comprehensive cybersecurity solutions"
    }
    { 
      label: "About Us",
      href: "/about-us",
      icon: Shield,
      description: "Learn more about us"
    },  // New item (Ayesha)
    { 
      label: "Standards",
      href: "/standards",
      icon: Shield,
      description: "Industry standards and certifications" 
    }, // New item (Ayesha)
    {
      label: "Contact Us",
      href: "/contact-us",
      icon: Shield,
      description: "Get in touch with us" 
    }  // New item (Ayesha)
  ];

  const [currentLanguage, setCurrentLanguage] = React.useState('en');

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    setCurrentLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 
        bg-[#112240]/90 backdrop-blur-xl 
        border-b border-cyan-500/10 
        shadow-lg"
    >
      <div className="container max-w-screen-2xl mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <div>
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo-meta-removebg-preview.png" 
              alt="Meta Works Logo" 
              width={50} 
              height={50} 
              className="transition-all duration-300"
            />
            <span className="ml-2 text-2xl font-bold text-white">
              Meta Works
            </span>
          </Link>
        </div>

         {/* Navigation */}
        <nav className="flex items-center space-x-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-300",
                pathname === item.href 
                  ? "bg-cyan-500/20 text-cyan-300" 
                  : "hover:bg-cyan-500/10 text-white/80"
              )}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>
        
        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Language Switcher */}
          <Button 
            variant="outline" 
            size="icon"
            onClick={toggleLanguage}
            className="hover:bg-cyan-500/10 border-cyan-500/30"
          >
            <Languages className="w-5 h-5 text-white" />
          </Button>

          {/* Request Demo */}
          <Button 
            className="
              bg-cyan-500 
              text-white 
              hover:bg-cyan-600 
              transition-colors
            "
          >
            Request a Demo
          </Button>
        </div>
      </div>
    </motion.header>
  )
}
