import Link from "next/link";
import { Heart, MapPin, Phone, Mail, Globe } from "lucide-react";
import { siteConfig, navItems } from "@/data/constants";

const socialLinks = [
  { href: siteConfig.social.facebook, label: "Facebook" },
  { href: siteConfig.social.twitter, label: "Twitter" },
  { href: siteConfig.social.linkedin, label: "LinkedIn" },
  { href: siteConfig.social.instagram, label: "Instagram" },
  { href: siteConfig.social.youtube, label: "YouTube" },
].filter((social) => social.href);

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-warm rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">MIS Ethiopia</span>
                <span className="text-xs text-gray-400">Multi Integrated Support</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {siteConfig.description}
            </p>
            {socialLinks.length > 0 ? (
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-warm transition-colors"
                    aria-label={social.label}
                  >
                    <span className="text-sm font-medium">{social.label.charAt(0)}</span>
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navItems.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-warm transition-colors text-sm"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/reports" className="text-gray-400 hover:text-warm transition-colors text-sm">
                  Annual Reports
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-400 hover:text-warm transition-colors text-sm">
                  News & Updates
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-gray-400 hover:text-warm transition-colors text-sm">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-gray-400 hover:text-warm transition-colors text-sm">
                  Ways to Give
                </Link>
              </li>
              <li>
                <Link href="/sponsorship" className="text-gray-400 hover:text-warm transition-colors text-sm">
                  Child Sponsorship
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-warm flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  {siteConfig.address.street}<br />
                  {siteConfig.address.city}, {siteConfig.address.country}<br />
                  {siteConfig.address.postalCode}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-warm flex-shrink-0" />
                <div className="flex flex-col text-sm">
                  <a href={`tel:${siteConfig.phone}`} className="text-gray-400 hover:text-warm transition-colors">
                    {siteConfig.phone}
                  </a>
                  {siteConfig.phoneSecondary ? (
                    <a href={`tel:${siteConfig.phoneSecondary}`} className="text-gray-400 hover:text-warm transition-colors">
                      {siteConfig.phoneSecondary}
                    </a>
                  ) : null}
                  {siteConfig.phoneTertiary ? (
                    <a href={`tel:${siteConfig.phoneTertiary}`} className="text-gray-400 hover:text-warm transition-colors">
                      {siteConfig.phoneTertiary}
                    </a>
                  ) : null}
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-warm flex-shrink-0" />
                <div className="flex flex-col text-sm">
                  <a href={`mailto:${siteConfig.email}`} className="text-gray-400 hover:text-warm transition-colors">
                    {siteConfig.email}
                  </a>
                  {siteConfig.emailSecondary ? (
                    <a href={`mailto:${siteConfig.emailSecondary}`} className="text-gray-400 hover:text-warm transition-colors">
                      {siteConfig.emailSecondary}
                    </a>
                  ) : null}
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-warm flex-shrink-0" />
                <a href={siteConfig.url} className="text-gray-400 hover:text-warm transition-colors text-sm">
                  {siteConfig.url}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-gray-400 hover:text-warm transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-warm transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
