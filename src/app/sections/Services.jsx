import React from 'react';
import Link from 'next/link';

const Services = () => {
    return (
        <section className="py-16 bg-gray-100 text-center">
            <h2 className="text-3xl font-bold mb-8">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {[
                    { title: "Driving License", description: "Assistance with new and renewal driving licenses.", slug: "driving-license" },
                    { title: "NICOP Registration", description: "Help with NICOP applications for overseas Pakistanis.", slug: "nicop-registration" },
                    { title: "HEC Attestation", description: "Guidance for attestation of academic documents from HEC.", slug: "hec-attestation" },
                ].map((service, index) => (
                    <Link key={index} href={`/services/${service.slug}`}>
                        <div className="p-6 bg-white shadow-md rounded-md cursor-pointer hover:shadow-lg transition-shadow duration-300">
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Services;
