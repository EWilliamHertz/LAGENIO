'use client';
import { useState } from 'react';

export default function DynamicPricing() {
    const [quantity, setQuantity] = useState(1);
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');

    // Dynamic pricing logic based on the LAGENIO Financial Calculator
    // Retail MSRP: 2999 SEK. Wholesale (50+): 2249 SEK.
    const calculatePrice = (qty) => {
        if (qty >= 50) return 2249; // B2B Wholesale Tier
        if (qty >= 10) return 2699; // Mid-Tier volume
        return 2999; // Consumer Retail Tier
    };

    const unitPrice = calculatePrice(quantity);
    const totalPrice = unitPrice * quantity;

    const handleInquirySubmit = async (e) => {
        e.preventDefault();
        // In a full implementation, this hits an API route (e.g., /api/inquiry) that inserts into NeonDB
        alert(`Inquiry submitted for ${quantity} units at ${unitPrice} SEK/unit.\nTotal: ${totalPrice} SEK.\nWe will contact ${email} shortly.`);
    };

    return (
        <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 max-w-2xl mx-auto shadow-xl shadow-yellow-500/10">
            <h3 className="text-2xl font-bold text-white mb-6">Volume Pricing Calculator & Registration</h3>
            
            <div className="mb-8">
                <label className="block text-gray-400 mb-2 font-medium">Quantity (1 - 100 units)</label>
                <input 
                    type="range" 
                    min="1" 
                    max="100" 
                    value={quantity} 
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>1 Unit (Retail)</span>
                    <span>50+ Units (B2B Wholesale)</span>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8 bg-gray-900 p-6 rounded-xl border border-gray-700">
                <div>
                    <p className="text-gray-400 text-sm">Units</p>
                    <p className="text-2xl font-bold text-white">{quantity}</p>
                </div>
                <div>
                    <p className="text-gray-400 text-sm">Price Per Unit</p>
                    <p className="text-2xl font-bold text-yellow-500">{unitPrice} SEK</p>
                </div>
                <div className="col-span-2 pt-4 border-t border-gray-800 mt-2">
                    <p className="text-gray-400 text-sm">Total Estimated Order Value</p>
                    <p className="text-4xl font-extrabold text-white">{totalPrice.toLocaleString()} SEK</p>
                    {quantity >= 50 && <span className="text-xs text-green-400 font-bold uppercase mt-1 block">Maximum 35% Margin Unlocked</span>}
                </div>
            </div>

            <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input 
                        type="text" 
                        placeholder="Company Name (Optional)" 
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="bg-gray-900 border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-yellow-500 transition"
                    />
                    <input 
                        type="email" 
                        required 
                        placeholder="Work Email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-gray-900 border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-yellow-500 transition"
                    />
                </div>
                <button type="submit" className="w-full py-4 rounded-lg font-bold bg-yellow-500 text-gray-900 hover:bg-yellow-400 transition shadow-lg">
                    Register Client & Submit Inquiry
                </button>
            </form>
        </div>
    );
}