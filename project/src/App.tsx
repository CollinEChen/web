import React, { useState } from 'react';
import { Menu, X, ChevronDown, Globe, Satellite, Server, Shield, Zap, ArrowRight } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center">
                  <Satellite className="h-8 w-8 text-blue-600" />
                  <span className="ml-2 text-2xl font-bold text-blue-900">QuSat</span>
                </div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <div className="relative group">
                <button 
                  className="flex items-center text-gray-700 hover:text-blue-600"
                  onClick={() => toggleDropdown('about')}
                >
                  About Us <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'about' && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Our Mission</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Executive Team</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Infrastructure</a>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="relative group">
                <button 
                  className="flex items-center text-gray-700 hover:text-blue-600"
                  onClick={() => toggleDropdown('services')}
                >
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'services' && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Broadcasting</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Broadband</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Data Centers</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">AI Solutions</a>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="relative group">
                <button 
                  className="flex items-center text-gray-700 hover:text-blue-600"
                  onClick={() => toggleDropdown('investors')}
                >
                  Investors <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === 'investors' && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Investment Opportunity</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Asset Valuation</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tokenization</a>
                    </div>
                  </div>
                )}
              </div>
              
              <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
            </nav>
            
            <div className="hidden md:flex items-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                Request Info
              </button>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                type="button" 
                className="text-gray-500 hover:text-gray-600"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">About Us</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">Services</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">Investors</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">Contact</a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="px-2">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                  Request Info
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>
        <div 
          className="relative h-[600px] bg-cover bg-center flex items-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')" }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionizing Global Satellite Connectivity
              </h1>
              <p className="text-xl text-white mb-8">
                QuSat Group is at the forefront of next-generation on-demand broadcasting, broadband internet, live streaming, and secure AI-powered data center solutions.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-white text-blue-900 hover:bg-gray-100 px-6 py-3 rounded-md font-medium">
                  Discover Our Solutions
                </button>
                <button className="bg-transparent text-white border border-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-md font-medium">
                  Investor Relations
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Innovative Offerings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leveraging cutting-edge technologies to deliver seamless global connectivity and revolutionary solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Globe className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Spectrum Access</h3>
              <p className="text-gray-600 mb-4">
                Leveraging Zone protected US FCC C-Band and KU-Band spectrum licenses for high-capacity bandwidth.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Satellite className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Land and Sea Connectivity</h3>
              <p className="text-gray-600 mb-4">
                Expanding digital access to unconnected communities through reliable, high-speed broadband.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Server className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Centers & Recovery</h3>
              <p className="text-gray-600 mb-4">
                AI-powered virtual workspaces, storage, and computing power with blockchain-secured cloud storage.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Blockchain & AI Ecosystem</h3>
              <p className="text-gray-600 mb-4">
                Tokenizing assets by harnessing Blockchain & AI for decentralized payment networks and Web3 ecosystems.
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About QuSat Group</h2>
              <p className="text-lg text-gray-600 mb-6">
                QuSat Group (formerly known as World Teleport) is a media technology company with a robust data center and satellite infrastructure. At the forefront of next-generation on-demand broadcasting, broadband internet, live streaming, and secure AI-powered data center solutions.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our mission is to democratize global satellite connectivity by delivering seamless on-demand access to users worldwide, including underserved communities and remote regions.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium">
                  Our Mission
                </button>
                <button className="bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium">
                  Meet Our Team
                </button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                alt="Satellite dish array" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Invest in the Future of Global Satellite Communications</h2>
            <p className="text-xl max-w-3xl mx-auto">
              A unique opportunity in an industry poised for massive transformation and expansion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-800 p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2">$2.75B</div>
              <h3 className="text-xl font-semibold mb-4">Infrastructure Valuation</h3>
              <p className="text-blue-100">
                Anchored by global Zone Protected US FCC C-Band Spectrum License Rights.
              </p>
            </div>
            
            <div className="bg-blue-800 p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2">$458B</div>
              <h3 className="text-xl font-semibold mb-4">Market Size (2025)</h3>
              <p className="text-blue-100">
                The global broadcasting, streaming, and satellite broadband industry with 8.2% CAGR.
              </p>
            </div>
            
            <div className="bg-blue-800 p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2">38:1</div>
              <h3 className="text-xl font-semibold mb-4">Asset Coverage Ratio</h3>
              <p className="text-blue-100">
                QuSat's $50 million funding round offers exceptional asset coverage.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-md font-medium text-lg">
              Download Investor Presentation
            </button>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Revolutionary Technology Integration</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creating new revenue streams and unlocking valuable opportunities through cutting-edge technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex">
              <div className="mr-4">
                <Zap className="h-10 w-10 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Tokenizing Technology and Assets</h3>
                <p className="text-gray-600">
                  Building a Blockchain-AI token-powered platform for on-demand Data Center and Satellite Spectrum access to raise $50 million in capital using tokens.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4">
                <Globe className="h-10 w-10 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Market Penetration</h3>
                <p className="text-gray-600">
                  QuSat's licenses and infrastructure provide an unmatched ability to broadcast and transmit data across the world, including underserved regions.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4">
                <Server className="h-10 w-10 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI & Blockchain Integration</h3>
                <p className="text-gray-600">
                  Pioneering tokenized financial networks, decentralized cloud storage, and next-gen broadcasting powered by AI.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4">
                <Shield className="h-10 w-10 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure, Scalable Infrastructure</h3>
                <p className="text-gray-600">
                  With a fully redundant fiber-optic and satellite network, QuSat ensures seamless, high-speed, and secure data transmission worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-12 md:p-12 text-center md:text-left md:flex items-center">
              <div className="md:w-2/3 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Partner with QuSat Group?</h2>
                <p className="text-xl text-blue-100">
                  Contact our team to learn more about our services, investment opportunities, or partnership possibilities.
                </p>
              </div>
              <div className="md:w-1/3 text-center">
                <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-md font-medium text-lg">
                  Contact Us Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Satellite className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-2xl font-bold">QuSat</span>
              </div>
              <p className="text-gray-400 mb-4">
                Shaping the future of satellite broadcasting, AI-driven financial networks, and global connectivity.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Broadcasting</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Broadband Internet</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Data Centers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">AI Solutions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blockchain Services</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Leadership</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">News</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <address className="not-italic text-gray-400">
                <p>3003 Moffett Ln.</p>
                <p>Missouri City, Texas 77489</p>
                <p className="mt-3">Email: <a href="mailto:contact@qusat.com" className="hover:text-white">contact@qusat.com</a></p>
                <p className="mt-1">Phone: <a href="tel:+18323457512" className="hover:text-white">+1 832-345-7512</a></p>
              </address>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2025 QuSat Group. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;