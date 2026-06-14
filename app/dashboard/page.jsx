'use client';
import Link from 'next/link';
import DynamicPricing from '../components/DynamicPricing';

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-black flex flex-col md:flex-row">
            {/* Sidebar Navigation */}
            <aside className="w-full md:w-72 bg-gray-900 border-r border-gray-800 p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-12">
                    <div className="w-6 h-6 bg-yellow-500 rounded-sm transform rotate-45"></div>
                    <span className="font-bold text-2xl tracking-tighter text-white">LAGENIO<span className="text-yellow-500">.</span></span>
                </div>

                <nav className="flex-1 space-y-3">
                    <a href="#" className="flex items-center gap-3 px-4 py-4 text-gray-900 bg-yellow-500 rounded-xl font-bold transition-colors shadow-lg shadow-yellow-500/20">
                        <span className="text-xl">📦</span> Submit New Order
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-4 text-gray-400 hover:text-white hover:bg-gray-800 rounded-xl font-medium transition-colors">
                        <span className="text-xl">📋</span> Order History
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-4 text-gray-400 hover:text-white hover:bg-gray-800 rounded-xl font-medium transition-colors">
                        <span className="text-xl">⚙️</span> Account Settings
                    </a>
                </nav>

                <div className="mt-auto pt-8 border-t border-gray-800">
                    <Link href="/" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white transition-colors">
                        <span>←</span> Sign Out & Return
                    </Link>
                </div>
            </aside>

            {/* Main Ordering Portal */}
            <main className="flex-1 p-6 md:p-12 overflow-y-auto bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
                <header className="mb-12">
                    <span className="text-yellow-500 font-bold tracking-widest uppercase text-sm mb-2 block">Authorized B2B Portal</span>
                    <h1 className="text-4xl font-bold text-white mb-2">Order Configuration</h1>
                    <p className="text-lg text-gray-400">Instantly adjust your requested volume to lock in wholesale margins up to 35%.</p>
                </header>

                {/* Securely injects the calculator into the private portal */}
                <div className="max-w-4xl">
                    <DynamicPricing />
                </div>
            </main>
        </div>
    );
}