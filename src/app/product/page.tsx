"use client"

import { Button } from "@/components/ui/button"
import { 
  CheckCircle2, 
  Shield, 
  FileText, 
  Settings,
  ArrowRight
} from "lucide-react"

export default function ProductPage() {
  const features = [
    {
      icon: CheckCircle2,
      title: "One-Click Compliance",
      description: "Automate complex compliance workflows with a single click, reducing manual effort and potential errors."
    },
    {
      icon: FileText,
      title: "Customizable Policies",
      description: "Tailor policies and procedures to your specific industry and organizational needs."
    },
    {
      icon: Shield,
      title: "Comprehensive Protection",
      description: "Robust security measures that adapt to evolving cyber threats and regulatory landscapes."
    },
    {
      icon: Settings,
      title: "Expert Support",
      description: "Dedicated cybersecurity professionals available to guide and support your compliance journey."
    }
  ]

  return (
    <div className="min-h-screen w-full bg-[#0a192f] text-white">
      {/* Hero Section */}
      <div className="text-center pt-24">
        <h1 className="
          text-5xl 
          font-bold 
          mb-6
          bg-clip-text 
          text-transparent 
          bg-gradient-to-r 
          from-cyan-400 
          to-cyan-600
        ">
          Discover the Meta Works Platform
        </h1>
        
        <p className="
          text-xl 
          text-cyan-100/90 
          max-w-2xl 
          mx-auto 
          mb-10
        ">
          Simplify cybersecurity compliance, protect your data, and save time and money with Meta Works.
        </p>

        <Button 
          className="
            bg-cyan-500 
            text-white 
            px-10 
            py-4 
            rounded-full 
            text-lg 
            font-semibold 
            hover:bg-cyan-600 
            transition-colors
            group
            flex 
            items-center 
            gap-2 
            mx-auto
          "
        >
          Request a Trial
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-4 gap-8 mb-16">
        {features.map(({ icon: Icon, title, description }, index) => (
          <div
            key={index}
            className="
              bg-[#112240] 
              rounded-3xl 
              p-6 
              border 
              border-cyan-500/20 
              hover:border-cyan-500/40 
              transition-all
              text-center
            "
          >
            <div className="
              p-3 
              rounded-full 
              bg-cyan-500/20 
              inline-block 
              mb-4
            ">
              <Icon className="w-8 h-8 text-cyan-500" />
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
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="
        bg-gradient-to-r 
        from-cyan-600/20 
        to-cyan-600/20 
        rounded-3xl 
        p-12 
        border 
        border-cyan-500/30
        text-center
      ">
        <h2 className="
          text-4xl 
          font-bold 
          text-cyan-100 
          mb-6
          bg-clip-text 
          text-transparent 
          bg-gradient-to-r 
          from-cyan-400 
          to-cyan-600
        ">
          Ready to Transform Your Cybersecurity?
        </h2>
        <p className="
          text-xl 
          text-cyan-100/80 
          max-w-2xl 
          mx-auto 
          mb-8
        ">
          Take the first step towards comprehensive cybersecurity compliance.
        </p>
        <Button 
          className="
            bg-cyan-500 
            text-white 
            px-10 
            py-4 
            rounded-full 
            text-lg 
            font-semibold 
            hover:bg-cyan-600 
            transition-colors
            group
            flex 
            items-center 
            gap-2 
            mx-auto
          "
        >
          Request a Trial
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  )
}
