import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Scroll Spy ONLY on homepage
  useEffect(() => {
    if (location.pathname !== "/") return;

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () =>
      sections.forEach((section) => observer.unobserve(section));
  }, [location.pathname]);

  // Shadow on scroll (same as yours)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const linkClass = (path) =>
    `hover:text-red-600 transition ${
      location.pathname === path ? "text-red-600" : "text-slate-700"
    }`;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-md border-b border-slate-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link to="/" className="text-xl font-semibold text-slate-900">
          Xelphrix <span className="text-red-600">Technologies</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
          <Link to="/" className={linkClass("/")}>
            Home
          </Link>

          <Link to="/products" className={linkClass("/products")}>
            Products
          </Link>

          <Link to="/services" className={linkClass("/services")}>
            Services
          </Link>

          <Link to="/about" className={linkClass("/about")}>
            About Us
          </Link>

          {/* CTA */}
          <Link
            to="/contact"
            className="ml-4 px-5 py-2 bg-red-600 text-white rounded-lg shadow 
            hover:bg-red-700 hover:scale-[1.05] transition duration-300"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-900"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <div className="flex flex-col gap-6 px-6 py-6 text-sm font-medium text-slate-700">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About Us</Link>

            <Link
              to="/contact"
              className="px-5 py-3 bg-red-600 text-white rounded-lg text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}