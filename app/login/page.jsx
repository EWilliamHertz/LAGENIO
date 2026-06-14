'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Redirects to the new client dashboard upon successful form submission
        router.push('/dashboard');
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black">
            <div className="max-w-md w-full bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-2xl shadow-yellow-500/10">
                <div className="flex justify-center mb-8">
                    <Link href="/" className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                        <div className="w-8 h-8 bg-yellow-500 rounded-sm transform rotate-45 shadow-lg shadow-yellow-500/20"></div>
                        <span className="font-bold text-2xl tracking-tighter text-white">LAGENIO<span className="text-yellow-500">.</span></span>
                    </Link>
                </div>

                <h2 className="text-3xl font-bold text-white mb-2 text-center">
                    {isLogin ? 'Welcome Back' : 'Apply for Access'}
                </h2>
                <p className="text-gray-400 text-center mb-8">
                    {isLogin ? 'Access your B2B dashboard to place bulk orders.' : 'Register to unlock up to 35% wholesale margins.'}
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {!isLogin && (
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Company Name</label>
                            <input type="text" required className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors" placeholder="e.g. Elgiganten AB" />
                        </div>
                    )}
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Work Email</label>
                        <input type="email" required className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors" placeholder="purchasing@company.se" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Password</label>
                        <input type="password" required className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors" placeholder="••••••••" />
                    </div>

                    <button type="submit" className="w-full bg-yellow-500 text-black font-bold py-4 rounded-xl hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/20 mt-4 text-lg">
                        {isLogin ? 'Access Dashboard' : 'Register Account'}
                    </button>
                </form>

                <div className="mt-8 text-center pt-6 border-t border-gray-800">
                    <button onClick={() => setIsLogin(!isLogin)} className="text-yellow-500 hover:text-yellow-400 text-sm font-medium transition-colors">
                        {isLogin ? "Don't have an account? Apply for B2B Access" : "Already registered? Sign in here"}
                    </button>
                </div>
            </div>
        </div>
    );
}