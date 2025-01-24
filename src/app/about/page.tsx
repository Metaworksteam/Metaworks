import { Button } from "@/components/ui/button"
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

      <div className="grid md:grid-cols-2 gap-12 items-center">
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

      <div className="text-center mt-16">
        <Button asChild size="lg" className="bg-primary-teal hover:bg-accent-blue">
          <Link href="/product">Explore Our Product</Link>
        </Button>
      </div>
    </div>
  )
}
