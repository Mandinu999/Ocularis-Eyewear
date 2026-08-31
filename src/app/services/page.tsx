import React from "react";
import { Eye, Ruler, Wrench, ShieldCheck } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Comprehensive Eye Exams",
      description: "Our certified optometrists provide thorough eye examinations using state-of-the-art technology to ensure your vision and eye health are in perfect condition.",
      icon: <Eye className="w-8 h-8 mb-4 text-zinc-700" />
    },
    {
      title: "Precision Fitting",
      description: "Get the perfect fit with our advanced facial scanning and manual measurement techniques. We ensure your frames sit perfectly and comfortably.",
      icon: <Ruler className="w-8 h-8 mb-4 text-zinc-700" />
    },
    {
      title: "Repairs & Adjustments",
      description: "Bring in your Ocularis frames anytime for free adjustments, deep cleaning, or minor repairs to keep them looking and feeling like new.",
      icon: <Wrench className="w-8 h-8 mb-4 text-zinc-700" />
    },
    {
      title: "Lens Protection Plan",
      description: "Opt in for our extended protection plan that covers accidental scratches, breaks, and prescription changes within the first year.",
      icon: <ShieldCheck className="w-8 h-8 mb-4 text-zinc-700" />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Our Services</h1>
        <p className="text-lg text-zinc-500">
          Beyond premium eyewear, we offer a range of professional services to ensure you get the best vision care and product experience possible.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
            {service.icon}
            <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
            <p className="text-zinc-500 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
