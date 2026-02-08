"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white dark:glass-nav shadow-md py-3"
          : "bg-transparent dark:glass-nav py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-xl font-bold text-gold dark:gold-gradient-text"
          >
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <NavLink href="#hero" label="Home" />
            <NavLink href="#about" label="About" />
            <NavLink href="#experience" label="Experience" />
            <NavLink href="#education" label="Education" />
            <NavLink href="#skills" label="Skills" />
            <NavLink href="#projects" label="Projects" />
            <NavLink href="#contact" label="Contact" />
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 dark:text-gold-light focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:glass-nav shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <MobileNavLink href="#hero" label="Home" onClick={closeMenu} />
            <MobileNavLink href="#about" label="About" onClick={closeMenu} />
            <MobileNavLink
              href="#experience"
              label="Experience"
              onClick={closeMenu}
            />
            <MobileNavLink
              href="#education"
              label="Education"
              onClick={closeMenu}
            />
            <MobileNavLink href="#skills" label="Skills" onClick={closeMenu} />
            <MobileNavLink
              href="#projects"
              label="Projects"
              onClick={closeMenu}
            />
            <MobileNavLink
              href="#contact"
              label="Contact"
              onClick={closeMenu}
            />
            <div className="py-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({
  href,
  label,
}: {
  readonly href: string;
  readonly label: string;
}) {
  return (
    <Link
      href={href}
      className="text-gray-700 dark:text-gold-light hover:text-gold dark:hover:text-gold-light transition-colors"
    >
      {label}
    </Link>
  );
}

function MobileNavLink({
  href,
  label,
  onClick,
}: {
  readonly href: string;
  readonly label: string;
  readonly onClick: () => void;
}) {
  return (
    <Link
      href={href}
      className="text-gray-700 dark:text-gold-light hover:text-gold dark:hover:text-gold-light font-medium py-2 transition-colors"
      onClick={onClick}
    >
      {label}
    </Link>
  );
}
