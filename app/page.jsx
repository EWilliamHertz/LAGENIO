import Link from 'next/link';
import Image from 'next/image';
import DynamicPricing from './components/DynamicPricing';

export default function Home() {
  return (
    <div className="bg-gray-900 text-gray-100 font-sans antialiased min-h-screen scroll-smooth overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800 transition-all">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
              <div className="flex items-center gap-3 cursor-pointer">
                  <div className="w-8 h-8 bg-yellow-500 rounded-sm transform rotate-45 shadow-lg shadow-yellow-500/20"></div>
                  <span className="font-bold text-2xl tracking-tighter text-white">LAGENIO<span className="text-yellow-500">.</span></span>
              </div>
              <div className="hidden md:flex space-x-8 items-center font-medium">
                  <a href="#capabilities" className="text-gray-300 hover:text-yellow-400 transition-colors">Capabilities</a>
                  <a href="#specs" className="text-gray-300 hover:text-yellow-400 transition-colors">Specifications</a>
                  <a href="#retail" className="text-gray-300 hover:text-yellow-400 transition-colors">Retail Packaging</a>
                  
                  {/* New Client Portal Button replacing Admin Panel */}
                  <Link href="/login" className="text-gray-900 bg-yellow-500 border-2 border-yellow-500 px-6 py-2 rounded-lg hover:bg-yellow-400 hover:border-yellow-400 transition-all hover:shadow-lg hover:shadow-yellow-500/20 flex items-center gap-2 font-bold">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path></svg>
                      Client Portal
                  </Link>
              </div>
          </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black -z-10"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16 relative z-10">
              <div className="lg:w-1/2 text-center lg:text-left pt-12 lg:pt-0">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-sm font-bold tracking-wider uppercase mb-8">
                      <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
                      Now Available in the Nordics
                  </div>
                  <h1 className="text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
                      Rhino 1 Pro. <br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">The Ultimate Multi-Tool.</span>
                  </h1>
                  <p className="text-xl text-gray-300 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                      Engineered for industrial applications and the harsh Nordic outdoors. Featuring a massive 12,000mAh battery, enterprise eSIM readiness, and uncompromising IP68/IP69K protection.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <Link href="/login" className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 transition-all text-center shadow-lg shadow-yellow-500/25 hover:-translate-y-1">
                          Log In to Place Order
                      </Link>
                      <a href="#capabilities" className="bg-gray-800 text-white border border-gray-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-700 transition-all text-center hover:-translate-y-1">
                          View Specs
                      </a>
                  </div>
              </div>
              
              {/* Product Image Integration */}
              <div className="lg:w-1/2 w-full flex justify-center relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-yellow-500/20 blur-[100px] rounded-full -z-10"></div>
                  <div className="relative rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl shadow-black/50 transform hover:scale-[1.02] transition-transform duration-500">
                      <Image 
                          src="/IMG_4523.jpeg" 
                          alt="LAGENIO Rhino 1 Pro Front and Back" 
                          width={600} 
                          height={800} 
                          className="object-cover w-full max-w-[500px] h-auto rounded-3xl"
                          priority
                      />
                  </div>
              </div>
          </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-32 bg-black relative border-y border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-20">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Built for the Field</h2>
                  <p className="text-xl text-gray-400 max-w-2xl mx-auto">Fully CE marked, EU DoC certified, and registered for Swedish Kemikalieskatt. Ready for immediate deployment.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-10 rounded-3xl border border-gray-700 hover:border-yellow-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/10 group cursor-default relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-bl-full -z-10 transition-transform group-hover:scale-150 duration-500"></div>
                      <div className="text-yellow-500 text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300 origin-left">🔋</div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">12,000mAh Battery</h3>
                      <p className="text-gray-400 leading-relaxed">Multi-day endurance for long field deployments without grid access. Doubles as a power bank for other essential equipment.</p>
                  </div>
                  
                  <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-10 rounded-3xl border border-gray-700 hover:border-yellow-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/10 group cursor-default relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-bl-full -z-10 transition-transform group-hover:scale-150 duration-500"></div>
                      <div className="text-yellow-500 text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300 origin-left">📡</div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">Enterprise eSIM</h3>
                      <p className="text-gray-400 leading-relaxed">Streamlined IT deployment for fleets. Switch carrier profiles seamlessly without managing physical SIM cards in extreme environments.</p>
                  </div>
                  
                  <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-10 rounded-3xl border border-gray-700 hover:border-yellow-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/10 group cursor-default relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-bl-full -z-10 transition-transform group-hover:scale-150 duration-500"></div>
                      <div className="text-yellow-500 text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300 origin-left">🔊</div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">130dB Speaker</h3>
                      <p className="text-gray-400 leading-relaxed">Cuts through heavy machinery and construction site noise with ease. Essential for safety alerts and clear communication.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* NEW: Detailed Specifications Section */}
      <section id="specs" className="py-32 bg-gray-900 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <span className="text-yellow-500 font-bold tracking-widest uppercase text-sm mb-4 block">Hardware Breakdown</span>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Technical Specifications</h2>
                  <p className="text-xl text-gray-400 max-w-2xl mx-auto">Uncompromising performance parameters mapped directly from Alibaba manufacturing lines to Nordic industrial standards.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Performance & Core */}
                  <div className="bg-black p-8 rounded-3xl border border-gray-800 hover:border-yellow-500/50 transition-colors">
                      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3"><span className="text-yellow-500">⚙️</span> Core & Performance</h3>
                      <ul className="space-y-4 divide-y divide-gray-800">
                          <li className="flex justify-between pt-4"><span className="text-gray-400">Processor</span><span className="text-white font-medium text-right">Octa-Core Industrial Chipset</span></li>
                          <li className="flex justify-between pt-4"><span className="text-gray-400">Memory & Storage</span><span className="text-white font-medium text-right">Up to 12GB RAM / 256GB ROM</span></li>
                          <li className="flex justify-between pt-4"><span className="text-gray-400">Operating System</span><span className="text-white font-medium text-right">Android 16</span></li>
                          <li className="flex justify-between pt-4"><span className="text-gray-400">Connectivity</span><span className="text-white font-medium text-right">4G, Wi-Fi 6, Bluetooth 5.2</span></li>
                          <li className="flex justify-between pt-4"><span className="text-gray-400">SIM Support</span><span className="text-white font-medium text-right">Enterprise eSIM + Dual Nano-SIM</span></li>
                      </ul>
                  </div>

                  {/* Rugged & Physical */}
                  <div className="bg-black p-8 rounded-3xl border border-gray-800 hover:border-yellow-500/50 transition-colors">
                      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3"><span className="text-yellow-500">🛡️</span> Durability & Physical</h3>
                      <ul className="space-y-4 divide-y divide-gray-800">
                          <li className="flex justify-between pt-4"><span className="text-gray-400">Certifications</span><span className="text-white font-medium text-right">IP68 / IP69K / MIL-STD-810H</span></li>
                          <li className="flex justify-between pt-4"><span className="text-gray-400">Battery Capacity</span><span className="text-white font-medium text-right">12,000mAh (Reverse Charge capable)</span></li>
                          <li className="flex justify-between pt-4"><span className="text-gray-400">Audio System</span><span className="text-white font-medium text-right">130dB Industrial Loudspeaker</span></li>
                          <li className="flex justify-between pt-4"><span className="text-gray-400">Weight & Dimensions</span><span className="text-white font-medium text-right">440g (Heavy-duty polycarbonate/TPU)</span></li>
                          <li className="flex justify-between pt-4"><span className="text-gray-400">EU Compliance</span><span className="text-white font-medium text-right">CE Marked, EU DoC, RoHS Validated</span></li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>

      {/* Retail Packaging Section */}
      <section id="retail" className="py-32 bg-black border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center gap-16">
                  <div className="lg:w-1/2 w-full relative">
                      <div className="absolute -inset-4 bg-yellow-500/20 blur-2xl rounded-3xl -z-10"></div>
                      <div className="relative rounded-3xl overflow-hidden border-2 border-gray-700 shadow-2xl">
                          <Image 
                              src="/IMG_4524.jpeg" 
                              alt="LAGENIO Rhino 1 Pro Retail Packaging" 
                              width={800} 
                              height={600} 
                              className="object-cover w-full h-auto hover:scale-105 transition-transform duration-700"
                          />
                      </div>
                  </div>
                  
                  <div className="lg:w-1/2">
                      <span className="text-yellow-500 font-bold tracking-widest uppercase text-sm mb-4 block">B2B Ready</span>
                      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Premium Retail Presentation</h2>
                      <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                          We understand that shelf appeal is critical for Tier 1 electronics retailers. The Rhino 1 Pro arrives in rugged, high-quality packaging designed to stand out in stores like Elgiganten, Kjell & Company, and Power.
                      </p>
                      <ul className="space-y-4 mb-10">
                          <li className="flex items-start">
                              <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-yellow-500 text-black font-bold text-sm mr-3 mt-1">✓</span>
                              <span className="text-gray-300 text-lg">Includes standardized barcodes and SKU labeling</span>
                          </li>
                          <li className="flex items-start">
                              <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-yellow-500 text-black font-bold text-sm mr-3 mt-1">✓</span>
                              <span className="text-gray-300 text-lg">Durable unboxing experience matches the product</span>
                          </li>
                          <li className="flex items-start">
                              <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-yellow-500 text-black font-bold text-sm mr-3 mt-1">✓</span>
                              <span className="text-gray-300 text-lg">Guaranteed 35% margin structure for retail partners</span>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-yellow-500 rounded-sm transform rotate-45"></div>
                  <span className="font-bold text-xl tracking-tighter text-white">LAGENIO<span className="text-yellow-500">.</span></span>
              </div>
              <p className="text-gray-500 text-sm">© 2026 LAGENIO Nordic Import. All rights reserved.</p>
          </div>
      </footer>
    </div>
  );
}