import { Button } from "@/components/ui/button"
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion"
import { 
  FileCheck2, 
  ShieldCheck, 
  ClipboardList 
} from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: FileCheck2,
      title: "Compliance Framework Implementation",
      description: "Comprehensive guidance in implementing industry-standard compliance frameworks tailored to your business needs.",
      details: [
        "Gap analysis and current state assessment",
        "Customized framework design",
        "Step-by-step implementation support"
      ]
    },
    {
      icon: ClipboardList,
      title: "Policy and Procedure Development",
      description: "Develop robust, clear, and actionable cybersecurity policies that align with your organizational goals.",
      details: [
        "Comprehensive policy documentation",
        "Regular updates to match evolving threats",
        "Alignment with industry best practices"
      ]
    },
    {
      icon: ShieldCheck,
      title: "Risk Assessment Services",
      description: "In-depth risk evaluation and mitigation strategies to protect your digital infrastructure.",
      details: [
        "Comprehensive security vulnerability assessments",
        "Threat modeling and risk prioritization",
        "Actionable remediation recommendations"
      ]
    }
  ]

  const faqs = [
    {
      question: "How long does a typical compliance implementation take?",
      answer: "The duration varies based on your organization's size and complexity, but typically ranges from 3-6 months."
    },
    {
      question: "Do you support multiple compliance standards?",
      answer: "Yes, we support various standards including NIST, ISO 27001, GDPR, HIPAA, and more."
    },
    {
      question: "Can you help businesses of all sizes?",
      answer: "Absolutely! Our solutions are scalable and can be customized for startups, SMBs, and enterprise-level organizations."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 text-primary-navy dark:text-white">
          Our Expertise
        </h1>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          Comprehensive cybersecurity services designed to protect and empower your business
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
            <service.icon className="w-12 h-12 text-primary-teal mb-4" />
            <h2 className="text-2xl font-semibold mb-4 text-primary-navy">{service.title}</h2>
            <p className="text-text-secondary mb-4">{service.description}</p>
            <ul className="list-disc list-inside text-text-secondary">
              {service.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-12 text-primary-navy">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-primary-navy hover:text-primary-teal">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-text-secondary">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="text-center">
        <Button size="lg" className="bg-primary-teal hover:bg-accent-blue">
          Contact Us to Learn More
        </Button>
      </section>
    </div>
  )
}
