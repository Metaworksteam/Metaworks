import { Button } from "@/components/ui/button";
import { TeamMember } from "@/components/TeamMember";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-[#0a192f] text-white container mx-auto px-4 py-16">
      <section className="text-center mb-24">
        <h1 className="text-5xl font-bold mb-6 text-cyan-400">Get to Know Meta Works</h1>
        <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
          Empowering businesses with cutting-edge cybersecurity compliance solutions
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-cyan-400">Our Mission</h2>
          <p className="text-cyan-100 mb-6">
            Meta Works exists to simplify and streamline cybersecurity compliance for businesses of all sizes. 
            We believe that robust security shouldn't be complex or overwhelming. Our mission is to provide 
            intuitive, one-click solutions that protect your digital assets while saving time and reducing costs.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-6 text-cyan-400">Our Vision</h2>
          <p className="text-cyan-100 mb-6">
            We envision a future where cybersecurity compliance is accessible, efficient, and seamlessly 
            integrated into every business's operations. Meta Works aims to be the global leader in 
            transforming complex compliance processes into simple, actionable strategies.
          </p>
        </div>
      </div>

      <section className="mb-24">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TeamMember 
            name="Abdulaziz Roomi"
            role="Founder & CEO"
            image="/images/team/ceo.jpg"
            bio="Visionary leader driving cybersecurity innovation and strategic growth."
            linkedIn="https://linkedin.com/in/abdulazizroomi"
          />
          <TeamMember 
            name="Abdullah Abdulaziz Roomi"
            role="Co-founder & COO"
            image="/images/team/coo.jpg"
            bio="Operations and product development expert, ensuring smooth execution and market readiness."
            linkedIn="https://linkedin.com/in/abdullahabdulazizroomi"
          />
          <TeamMember 
            name="Muhammad Abdullah"
            role="Web App Developer"
            image="/images/team/web-developer.jpg"
            bio="Building and optimizing the OneClick platform for seamless user experience."
            linkedIn="https://linkedin.com/in/muhammad"
          />
          <TeamMember 
            name="Ayesha Malik"
            role="Website Developer"
            image="/images/team/website-developer.jpg"
            bio="Developing and maintaining the Meta Works website for accessibility and engagement."
            linkedIn="https://linkedin.com/in/ayesha"
          />
          <TeamMember 
            name="Noor Malik"
            role="Social Media Manager"
            image="/images/team/social-media.jpg"
            bio="Spreading cybersecurity awareness and engaging with the community online."
            linkedIn="https://linkedin.com/in/noor"
          />
          <TeamMember 
            name="Saleh Ali"
            role="Project Manager"
            image="/images/team/project-manager.jpg"
            bio="Ensuring the team stays on track, meeting milestones, and delivering results efficiently."
            linkedIn="https://linkedin.com/in/saleh"
          />
        </div>
      </section>

      <div className="text-center">
        <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600">
          <Link href="/product">Explore Our Product</Link>
        </Button>
      </div>
    </div>
  );
}
