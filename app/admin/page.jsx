'use client';
import Link from 'next/link';

export default function AdminDashboard() {
    // Extracted directly from the provided LAGENIO B2B Contact Database CSV
    const b2bContacts = [
        { id: 1, company: 'Elgiganten AB', category: 'Retail - Tier 1', email: 'b2b@elgiganten.se', notes: 'Industrial/construction focus', priority: 1 },
        { id: 2, company: 'NetOnNet AB', category: 'Retail - Tier 1', email: 'b2b@netonnet.se', notes: 'Value-oriented; bulk orders', priority: 1 },
        { id: 3, company: 'Kjell & Company', category: 'Retail - Tier 1', email: 'contact@kjell.com', notes: 'Outdoor/utility angle strong', priority: 1 },
        { id: 4, company: 'Webhallen Sverige AB', category: 'Retail - Tier 1', email: 'b2b@walley.se', notes: 'Dedicated B2B unit', priority: 1 },
        { id: 5, company: 'Power AB', category: 'Retail - Tier 1', email: 'business@power.se', notes: 'Margin-hungry; best margins win', priority: 1 },
        { id: 6, company: 'Clas Ohlson AB', category: 'Retail - Tier 2', email: 'contact@clasohlson.se', notes: 'Focus on tools and practical gear', priority: 2 },
        { id: 7, company: 'MilDef Sweden', category: 'Specialized - Military', email: 'sales@mildef.com', notes: 'Rugged military electronics', priority: 2 },
        { id: 8, company: 'Swedish Police (Polisen)', category: 'Government', email: 'public.procurement@polisen.se', notes: 'Field equipment procurement', priority: 3 },
        { id: 9, company: 'Swedish Emergency Mgmt (MSB)', category: 'Government', email: 'procurement@msb.se', notes: 'Civil protection agency', priority: 3 },
    ];

    const sendB2BEmail = (email, company) => {
        const subject = encodeURIComponent(`LAGENIO Rhino 1 Pro Wholesale Partnership - ${company}`);
        const body = encodeURIComponent(`Hello team at ${company},\n\nBased on our market research, we are expanding the distribution of the LAGENIO Rhino 1 Pro in the Nordic region. As a highly durable multi-tool device, it fits your customer profile perfectly.\n\nWe offer an extremely competitive 35% margin retail structure.\n\nBest regards,\nLAGENIO Nordic Distribution`);
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    };

    return (
        <div className="bg-gray-50 text-gray-900 font-sans antialiased flex h-screen overflow-hidden">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-900 text-white flex flex-col hidden md:flex">
                <div className="h-20 flex items-center px-6 border-b border-gray-800">
                    <span className="font-bold text-xl tracking-tighter">LAGENIO <span className="text-yellow-500">ADMIN</span></span>
                </div>
                <nav className="flex-1 px-4 py-6 space-y-2">
                    <a href="#" className="block px-4 py-2 rounded-lg bg-gray-800 text-white font-medium">B2B Contacts (CRM)</a>
                    <a href="#" className="block px-4 py-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition">Client Inquiries (NeonDB)</a>
                    <a href="#" className="block px-4 py-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition">Financial Model</a>
                    <Link href="/" className="block px-4 py-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition mt-8 border border-gray-700">
                        ← Back to Site
                    </Link>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden bg-gray-100">
                <header className="h-20 bg-white shadow-sm flex items-center justify-between px-8 border-b border-gray-200">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Nordic Retailer CRM Database</h1>
                        <p className="text-sm text-gray-500">Target Profit: 100,000 SEK | Required Volume: 339 Units</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-sm font-medium text-gray-500">Target Margin: 35%</span>
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold border border-green-200">Active Campaign</span>
                    </div>
                </header>

                <div className="flex-1 overflow-auto p-8">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Company</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Category</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Contact Email</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Strategic Notes</th>
                                    <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {b2bContacts.map((contact) => (
                                    <tr key={contact.id} className="hover:bg-gray-50 transition">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="font-bold text-gray-900">{contact.company}</div>
                                            <div className="text-xs text-red-500 font-semibold mt-1">Priority {contact.priority}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{contact.category}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">{contact.email}</td>
                                        <td className="px-6 py-4 text-sm text-gray-500 italic">{contact.notes}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button 
                                                onClick={() => sendB2BEmail(contact.email, contact.company)} 
                                                className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-500 hover:text-gray-900 transition font-semibold"
                                            >
                                                Send Pitch
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
}