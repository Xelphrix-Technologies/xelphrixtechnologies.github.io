import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-4 gap-16 mb-16">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Xelphrix Technologies
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Engineering scalable digital products, cloud infrastructure,
              and intelligent automation systems for modern enterprises.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <a href="#products" className="hover:text-red-600 transition">
                  Products
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-600 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-red-600 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-slate-900 font-semibold mb-4">
              Core Capabilities
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>SaaS Development</li>
              <li>Cloud Migration</li>
              <li>DevOps Automation</li>
              <li>Enterprise Software</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-slate-900 font-semibold mb-4">
              Contact
            </h4>

            <div className="space-y-4 text-sm text-slate-600">
              <div className="flex items-center gap-3">
                <Mail size={16} />
                info@xelphrixtechnologies.com
              </div>

              <div className="flex items-center gap-3">
                <Phone size={16} />
                +1 304-524-5248
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1" />
                India
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} Xelphrix Technologies. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-red-600 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-red-600 transition">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}