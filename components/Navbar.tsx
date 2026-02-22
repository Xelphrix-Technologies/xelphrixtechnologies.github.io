"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Code,
  Cloud,
  Server,
  ShieldCheck,
  BarChart3,
  Sparkles,
  Rocket,
  Dumbbell,
  ShoppingCart,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] =
    useState<null | "services" | "products">(null);

  useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 20);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const closeAll = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
  };

  const isHome = pathname === "/";
const shouldBeSolid = !isHome || isScrolled;

  return (
    <nav
  className={`fixed w-full z-50 transition-all duration-300 ${
    shouldBeSolid
      ? "bg-[#25343F]/95 backdrop-blur-xl border-b border-[#BFC9D1]/20 shadow-lg"
      : "bg-transparent"
  }`}
>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link
          href="/"
          onClick={closeAll}
          className="text-xl font-bold tracking-wide text-[#EAEFEF]"
        >
          Xelphrix Technologies<span className="text-[#FF9B51]">.</span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-10 text-sm text-[#EAEFEF] relative">

          <NavLink title="Home" href="/" pathname={pathname} />

          {/* SERVICES */}
          <div
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
            className="relative"
          >
            <button className="flex items-center gap-1 hover:text-[#FF9B51] transition">
              Services
              <motion.span
                animate={{ rotate: activeDropdown === "services" ? 180 : 0 }}
              >
                <ChevronDown size={16} />
              </motion.span>
            </button>

            <AnimatePresence>
              {activeDropdown === "services" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-12 w-[520px] bg-[#2F3A44] border border-[#BFC9D1]/20 rounded-2xl p-8 shadow-2xl"
                >
                  <div className="grid grid-cols-2 gap-6">

  <MegaItem
    icon={<Code />}
    title="Custom Software Engineering"
    desc="Scalable full-stack applications."
    href="/services"
    onClick={closeAll}
  />

  <MegaItem
    icon={<Cloud />}
    title="Cloud Architecture & AWS"
    desc="High-availability cloud systems."
    href="/services"
    onClick={closeAll}
  />

  <MegaItem
    icon={<Server />}
    title="DevOps & Automation"
    desc="CI/CD & infrastructure pipelines."
    href="/services"
    onClick={closeAll}
  />

  <MegaItem
    icon={<ShieldCheck />}
    title="Security & Compliance"
    desc="Secure architecture & IAM control."
    href="/services"
    onClick={closeAll}
  />

  <MegaItem
    icon={<BarChart3 />}
    title="Data & Analytics"
    desc="Dashboards & reporting systems."
    href="/services"
    onClick={closeAll}
  />

  <MegaItem
    icon={<Sparkles />}
    title="Visual Media & Branding"
    desc="UI/UX, motion & digital assets."
    href="/services"
    onClick={closeAll}
  />

</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* PRODUCTS */}
          <div
            onMouseEnter={() => setActiveDropdown("products")}
            onMouseLeave={() => setActiveDropdown(null)}
            className="relative"
          >
            <button className="flex items-center gap-1 hover:text-[#FF9B51] transition">
              Products
              <motion.span
                animate={{ rotate: activeDropdown === "products" ? 180 : 0 }}
              >
                <ChevronDown size={16} />
              </motion.span>
            </button>

            <AnimatePresence>
              {activeDropdown === "products" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-12 w-[520px] bg-[#2F3A44] border border-[#BFC9D1]/20 rounded-2xl p-8 shadow-2xl"
                >
<div className="grid grid-cols-2 gap-6">

  <MegaItem
    icon={<Rocket />}
    title="Xelphrix Outreach Engine"
    desc="Cold outreach automation platform."
    href="/products/xelphrix-outreach-engine"
    onClick={closeAll}
  />

  <MegaItem
    icon={<Dumbbell />}
    title="Xelphrix FitCore"
    desc="Fitness center management system."
    href="/products/xelphrix-fitcore"
    onClick={closeAll}
  />

  <MegaItem
    icon={<ShoppingCart />}
    title="Xelphrix Commerce Suite"
    desc="Scalable e-commerce infrastructure."
    href="/products/xelphrix-commerce-suite"
    onClick={closeAll}
  />

</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink title="About" href="/about" pathname={pathname} />
          <NavLink title="Team" href="/team" pathname={pathname} />
          <NavLink title="Contact" href="/contact" pathname={pathname} />

          <Link
            href="/contact"
            className="bg-[#FF9B51] hover:bg-[#FFF9B5] text-[#25343F] px-5 py-2.5 rounded-xl font-medium transition"
          >
            Book Free Consultation
          </Link>

        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-[#EAEFEF]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-80 h-full bg-[#25343F] border-l border-[#BFC9D1]/20 p-6 md:hidden overflow-y-auto text-[#EAEFEF]"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="font-bold text-lg">Menu</span>
              <button onClick={closeAll}>
                <X />
              </button>
            </div>

            <MobileLink title="Home" href="/" onClick={closeAll} />
            <MobileLink title="Services" href="/services" onClick={closeAll} />
            <MobileLink title="Products" href="/products" onClick={closeAll} />
            <MobileLink title="About" href="/about" onClick={closeAll} />
            <MobileLink title="Team" href="/team" onClick={closeAll} />
            <MobileLink title="Contact" href="/contact" onClick={closeAll} />

          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

/* ---------- COMPONENTS ---------- */

function NavLink({
  title,
  href,
  pathname,
}: {
  title: string;
  href: string;
  pathname: string;
}) {
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`relative transition ${
        isActive ? "text-[#FF9B51]" : "hover:text-[#FF9B51]"
      }`}
    >
      {title}
      {isActive && (
        <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#FF9B51]" />
      )}
    </Link>
  );
}

function MegaItem({
  icon,
  title,
  desc,
  href,
  onClick,
}: any) {
  return (
    <Link href={href} onClick={onClick}>
      <motion.div
        whileHover={{ y: -4 }}
        className="flex gap-4 p-4 rounded-xl hover:bg-[#25343F] transition cursor-pointer"
      >
        <div className="text-[#FF9B51] mt-1">{icon}</div>
        <div>
          <div className="font-medium text-base mb-1 text-[#EAEFEF]">
            {title}
          </div>
          <div className="text-sm text-[#BFC9D1]">
            {desc}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

function MobileLink({
  title,
  href,
  onClick,
}: {
  title: string;
  href: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block py-3 border-b border-[#BFC9D1]/20 hover:text-[#FF9B51] transition"
    >
      {title}
    </Link>
  );
}