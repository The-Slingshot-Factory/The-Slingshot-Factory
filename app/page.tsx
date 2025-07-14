import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "The Slingshot Factory",
    "alternateName": "Slingshot Factory",
    "url": "https://theslingshotfactory.com",
    "logo": "https://theslingshotfactory.com/logo.png",
    "description": "We build software systems that act as a digital catapult, boosting your personal or business efficiency and helping you achieve more with less effort.",
    "foundingDate": "2024",
    "industry": "Software Development",
    "legalName": "The Slingshot Factory, LLC",
    "serviceArea": {
      "@type": "GeoRadius",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "39.8283",
        "longitude": "-98.5795"
      },
      "geoRadius": "global"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Software Development",
            "description": "Building tailored software solutions for businesses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Automation",
            "description": "Automating business processes to increase efficiency"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Transformation",
            "description": "Helping businesses transition to digital solutions"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.linkedin.com/company/the-slingshot-factory",
      "https://x.com/slingshotfactor"
    ]
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:100px_100px]"></div>

      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]"></div>

      {/* Navigation */}
      <nav className="relative z-50 w-full">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 text-lg font-medium tracking-wide relative group">
              <Image
                src="/logo.png"
                alt="The Slingshot Factory Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="relative z-10">The Slingshot Factory</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            </Link>
            <div className="hidden md:flex items-center space-x-12">
              <Link
                href="#contact"
                className="text-gray-400 hover:text-white transition-all duration-300 text-sm tracking-wide relative group"
              >
                <span className="relative z-10">Contact</span>
                <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-6xl mx-auto">
            {/* Decorative lines */}
            <div className="flex items-center justify-center mb-8">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
              <div className="mx-4 w-2 h-2 bg-purple-500/50 rounded-full animate-pulse"></div>
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-12 leading-tight tracking-wider text-gray-300 relative group">
              <span className="relative z-10 bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                THE SLINGSHOT
                <br />
                FACTORY
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-3xl"></div>
            </h1>

            <div className="relative mb-16">
              <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-4xl mx-auto relative z-10">
                We build software systems that act as a digital catapult, boosting your personal or business efficiency and
                helping you achieve more with less effort.
              </p>
              {/* Subtle glow behind text */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent blur-2xl"></div>
            </div>

            {/* Enhanced CTA Button */}
            <div className="relative inline-block group">
              <Link
                href="#contact">
                <Button
                  size="lg"
                  className="relative bg-transparent border border-gray-600 text-gray-300 hover:text-white px-12 py-4 text-lg tracking-wide transition-all duration-300 group-hover:border-purple-400/50 group-hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] overflow-hidden"
                >
                  <span className="relative z-10">START YOUR NEXT PROJECT</span>
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/20 to-purple-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  {/* Border glow */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                </Button>
              </Link>
              {/* Outer glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl scale-110"></div>
            </div>

            {/* Decorative elements */}
            <div className="flex items-center justify-center mt-16 space-x-8">
              <div className="w-1 h-1 bg-purple-500/50 rounded-full animate-pulse"></div>
              <div
                className="w-1 h-1 bg-blue-500/50 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="w-1 h-1 bg-purple-500/50 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-32 px-6">
        <div className="container mx-auto">
          <ContactForm />
        </div>
      </section>

      {/* Enhanced curved glowing element at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-96 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <div className="w-[800px] h-[400px] rounded-full bg-gradient-to-t from-purple-900/40 via-blue-900/30 to-transparent blur-3xl animate-pulse"></div>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/3">
          <div className="w-[600px] h-[300px] rounded-full bg-gradient-to-t from-purple-600/30 via-blue-600/20 to-transparent blur-2xl"></div>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4">
          <div className="w-[400px] h-[200px] rounded-full bg-gradient-to-t from-purple-400/40 via-blue-400/30 to-transparent blur-xl"></div>
        </div>
        {/* Additional subtle ring effect */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <div className="w-[900px] h-[450px] rounded-full border border-purple-500/10 animate-pulse"></div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-8"></div>
            <p className="text-gray-500 font-light tracking-wide">© 2024 The Slingshot Factory, LLC</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
