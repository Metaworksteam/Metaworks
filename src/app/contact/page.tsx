import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin 
} from "lucide-react"

export default function ContactPage() {
  const socialLinks = [
    { 
      icon: Facebook, 
      url: "https://facebook.com/metaworks", 
      name: "Facebook" 
    },
    { 
      icon: Twitter, 
      url: "https://twitter.com/metaworks", 
      name: "Twitter" 
    },
    { 
      icon: Linkedin, 
      url: "https://linkedin.com/company/metaworks", 
      name: "LinkedIn" 
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 text-primary-navy dark:text-white">
          We're Here to Help
        </h1>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          Have questions about cybersecurity compliance? Reach out to our expert team.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-semibold mb-8 text-primary-navy">
            Contact Information
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-center">
              <Mail className="mr-4 text-primary-teal" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-text-secondary">info@metaworks.com</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Phone className="mr-4 text-primary-teal" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-text-secondary">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <MapPin className="mr-4 text-primary-teal" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-text-secondary">
                  123 Cybersecurity Lane, 
                  Tech Hub Building, 
                  Silicon Valley, CA 94000
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6 text-primary-navy">
              Connect with Us
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary-teal"
                >
                  <social.icon className="w-8 h-8" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-8 text-primary-navy">
            Request a Consultation
          </h2>
          
          <form className="space-y-6">
            <Input 
              type="text" 
              placeholder="Name" 
              className="w-full" 
            />
            <Input 
              type="email" 
              placeholder="Email" 
              className="w-full" 
            />
            <Input 
              type="tel" 
              placeholder="Phone Number" 
              className="w-full" 
            />
            <Input 
              type="text" 
              placeholder="Organization" 
              className="w-full" 
            />
            <Textarea 
              placeholder="Describe Your Compliance Needs" 
              className="w-full h-32" 
            />
            
            <Button 
              type="submit" 
              className="w-full bg-primary-teal hover:bg-accent-blue"
            >
              Submit Your Request
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
