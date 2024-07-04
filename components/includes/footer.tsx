import Image from "next/image";
import { useRouter } from "next/router";

const navigation = {
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg {...props} viewBox="0 0 24 24">
          {/* SVG content */}
        </svg>
      ),
    },
    // Add more social links here
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="mb-8 lg:mb-0 lg:w-1/4">
            <h2 className="text-lg font-semibold text-gray-900">
              Christophe André
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              &copy; 2023 Christophe André. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-16">
            <div className="mb-8 lg:mb-0 lg:w-1/4">
              <h3 className="text-sm font-semibold text-gray-900">
                Site Links
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="/about"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0 lg:w-1/4">
              <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="/privacy-policy"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-of-service"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/4">
              <h3 className="text-sm font-semibold text-gray-900">Contact</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="mailto:info@example.com"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    info@example.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+1234567890"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    +1 (234) 567-890
                  </a>
                </li>
                <li>
                  <a
                    href="/contact-form"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Contact Form
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex space-x-6 lg:space-x-0 lg:space-y-4 lg:flex-col lg:items-center">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-900"
              >
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
