import Link from "next/link";

export default function StandardPage() {
  return (
    <div className="bg-[#0a192f] min-h-screen text-white px-6 md:px-16 py-12">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-cyan-400">Compliance Standards</h1>
        <p className="mt-4 text-lg text-cyan-100 max-w-3xl mx-auto">
          At Meta Works, we help businesses achieve compliance with globally recognized cybersecurity and regulatory standards. 
          Our solutions align your organization with best practices, ensuring security, regulatory adherence, and business continuity.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-cyan-400 mb-6">Our Compliance Standards</h2>
        
        {/* National and Regulatory Compliance */}
        <h3 className="text-2xl font-semibold text-cyan-300 mb-4">1. National and Regulatory Compliance</h3>

        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold text-cyan-200">🔹 NCA ECC (Essential Cybersecurity Controls)</h4>
            <p className="text-cyan-100 mt-2">
              The National Cybersecurity Authority (NCA) mandates the Essential Cybersecurity Controls (ECC) to strengthen cybersecurity 
              resilience across organizations in Saudi Arabia. Meta Works ensures compliance by helping businesses implement risk 
              management, incident response, and security governance controls.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-cyan-200">🔹 SAMA Cybersecurity Framework</h4>
            <p className="text-cyan-100 mt-2">
              The Saudi Arabian Monetary Authority (SAMA) Cybersecurity Framework is designed for financial institutions to manage 
              cybersecurity risks effectively. We assist banks, fintech companies, and financial organizations in aligning with SAMA’s 
              stringent security requirements.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-cyan-200">🔹 SOGI Regulations</h4>
            <p className="text-cyan-100 mt-2">
              The Saudi Organization for Global Information (SOGI) sets cybersecurity and data protection standards. Meta Works provides 
              businesses with compliance solutions tailored to SOGI regulations, ensuring data security and risk mitigation.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-cyan-200">🔹 SADAYA (Saudi Data & AI Authority)</h4>
            <p className="text-cyan-100 mt-2">
              SADAYA focuses on data governance and AI ethics in Saudi Arabia. We help organizations comply with AI security regulations, 
              ensuring ethical AI practices, data privacy, and responsible machine learning implementations.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-cyan-200">🔹 PDPL (Personal Data Protection Law)</h4>
            <p className="text-cyan-100 mt-2">
              Saudi Arabia’s PDPL establishes strict guidelines for handling personal data, ensuring data privacy rights and security. 
              We assist businesses in implementing PDPL-compliant policies for secure data storage, processing, and user consent management.
            </p>
          </div>
        </div>
      </section>

      {/* International Cybersecurity Standards */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-cyan-300 mb-4">2. International Cybersecurity Standards</h3>

        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold text-cyan-200">🔹 ISO 27001 (Information Security Management System - ISMS)</h4>
            <p className="text-cyan-100 mt-2">
              A globally recognized standard for establishing, implementing, maintaining, and continually improving an information 
              security management system (ISMS).
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-cyan-200">🔹 NIST (National Institute of Standards and Technology)</h4>
            <p className="text-cyan-100 mt-2">
              A U.S.-based framework providing best practices for cybersecurity risk management and resilience.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-cyan-200">🔹 COBIT (Control Objectives for Information and Related Technologies)</h4>
            <p className="text-cyan-100 mt-2">
              A framework for IT governance and management, aligning IT strategy with business objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Why Compliance Matters */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-cyan-400 mb-6">Why Compliance Matters?</h2>

        <ul className="list-disc list-inside space-y-3 text-cyan-100">
          <li><strong className="text-cyan-300">✅ Security Posture</strong> – Strengthens defenses against cyber threats.</li>
          <li><strong className="text-cyan-300">✅ Regulatory Adherence</strong> – Ensures legal and regulatory obligations are met.</li>
          <li><strong className="text-cyan-300">✅ Business Trust</strong> – Builds customer and stakeholder confidence.</li>
          <li><strong className="text-cyan-300">✅ Operational Resilience</strong> – Reduces risks and improves incident response.</li>
        </ul>

        <p className="mt-4 text-cyan-100">
          At Meta Works, we streamline the compliance journey with expert guidance, assessments, and solutions tailored to your industry.
        </p>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-12">
        <Link href="/contact">
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-md transition-all">
            Get Started
          </button>
        </Link>
      </section>
    </div>
  );
}

