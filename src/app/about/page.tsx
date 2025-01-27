import { Button } from "@/components/ui/button"
import { TeamMember } from "@/components/TeamMember"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center mb-24">
        <h1 className="text-5xl font-bold mb-6 text-primary-navy dark:text-white">
          Get to Know Meta Works
        </h1>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          Empowering businesses with cutting-edge cybersecurity compliance solutions
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-primary-navy">
            Our Mission
          </h2>
          <p className="text-text-secondary mb-6">
            Meta Works exists to simplify and streamline cybersecurity compliance for businesses of all sizes. 
            We believe that robust security shouldn't be complex or overwhelming. Our mission is to provide 
            intuitive, one-click solutions that protect your digital assets while saving time and reducing costs.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-6 text-primary-navy">
            Our Vision
          </h2>
          <p className="text-text-secondary mb-6">
            We envision a future where cybersecurity compliance is accessible, efficient, and seamlessly 
            integrated into every business's operations. Meta Works aims to be the global leader in 
            transforming complex compliance processes into simple, actionable strategies.
          </p>
        </div>
      </div>

      <section className="mb-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-navy">
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TeamMember 
            name="John Smith"
            role="CEO & Founder"
            image="/images/team/ceo.jpg"
            bio="With over 15 years of experience in cybersecurity, John leads Meta Works with a vision to revolutionize compliance automation."
            linkedIn="https://linkedin.com/in/johnsmith"
          />
          <TeamMember 
            name="Sarah Johnson"
            role="CTO"
            image="/images/team/cto.jpg"
            bio="A tech innovator with expertise in AI and security architecture, Sarah drives our technical strategy and product development."
            linkedIn="https://linkedin.com/in/sarahjohnson"
          />
          <TeamMember 
            name="Michael Chen"
            role="Head of Security"
            image="/images/team/security-head.jpg"
            bio="Leading our security operations, Michael ensures our solutions meet the highest standards of cybersecurity excellence."
            linkedIn="https://linkedin.com/in/michaelchen"
          />
        </div>
      </section>

      <div className="text-center">
        <Button asChild size="lg" className="bg-primary-teal hover:bg-accent-blue">
          <Link href="/product">Explore Our Product</Link>
        </Button>
      </div>
    </div>
  )
}