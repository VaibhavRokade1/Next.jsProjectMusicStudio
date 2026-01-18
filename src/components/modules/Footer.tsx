// components/Footer.tsx
"use client";

import Link from "next/link";
import {
  Music,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#101828] text-gray-300 overflow-hidden">
      {/* Optional subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#101828] via-[#101828] to-black/40 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-12 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:gap-16">
          {/* Brand + Description */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Music className="h-9 w-9 text-[#0AB8B6]" />
              <span className="text-2xl font-bold text-white tracking-tight">
                Studio<span className="text-[#0AB8B6]">Vibe</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-xs">
              Where sound becomes art. Professional recording, mixing &
              mastering studio in Chennai.
            </p>

            <div className="flex gap-5">
              <SocialIcon href="#" icon={Instagram} />
              <SocialIcon href="#" icon={Youtube} />
              <SocialIcon href="#" icon={Facebook} />
              <SocialIcon href="#" icon={Twitter} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4 text-gray-400">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/studio">Our Studio</FooterLink>
              <FooterLink href="/artists">Featured Artists</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-4 text-gray-400">
              <FooterLink href="/services/recording">Recording</FooterLink>
              <FooterLink href="/services/mixing">
                Mixing & Mastering
              </FooterLink>
              <FooterLink href="/services/production">
                Music Production
              </FooterLink>
              <FooterLink href="/services/beatmaking">Beat Making</FooterLink>
              <FooterLink href="/services/voiceover">
                Voice-over & ADR
              </FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-5 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#0AB8B6] mt-1 flex-shrink-0" />
                <span>
                  123 Audio Lane, Anna Nagar West
                  <br />
                  Chennai, Tamil Nadu 600040
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#0AB8B6] flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="hover:text-white transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#0AB8B6] flex-shrink-0" />
                <a
                  href="mailto:hello@studiovibe.in"
                  className="hover:text-white transition-colors"
                >
                  hello@studiovibe.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
            <div>© {currentYear} Vaibhav Rokade. All rights reserved.</div>

            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/privacy"
                className="hover:text-shadow-teal-600 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-shadow-teal-600 transition-colors"
              >
                Terms of Use
              </Link>
              <Link
                href="/cookies"
                className="hover:text-shadow-teal-600 transition-colors"
              >
                Cookies
              </Link>
            </div>

            <div className="text-orange-600/70 font-medium">
              Created By Vaibhav Rokade
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

function SocialIcon({ href, icon: Icon }: { href: string; icon: any }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-gray-500 transition-colors duration-300 transform hover:scale-110"
      aria-label="Social media"
    >
      <Icon className="h-6 w-6" />
    </a>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="hover:text-gray-400 transition-colors duration-300"
      >
        {children}
      </Link>
    </li>
  );
}

export default Footer;
