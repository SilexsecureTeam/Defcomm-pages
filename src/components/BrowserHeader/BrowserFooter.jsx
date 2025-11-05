import React from "react";
import logo from "../../assets/logo-icon.png";

const BrowserFooter = () => {
  return (
    <footer className="w-full bg-[#3D3D3D] text-white border-t border-[#3a5101]">
      {/* Newsletter Section */}
      <div className="border-b border-[#3a5101]">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold mb-2">
                <span>Stay Secure,</span><br />
                <span className="text-[#89AF20]">Stay Informed</span>
              </h3>
              <p className="text-sm text-[#cfd9c1]">Get The Latest Security Insights, Product Updates, And Best Practices Delivered To Your Inbox.</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 md:flex-initial px-4 py-2 bg-transparent border border-[#89AF20] rounded text-white placeholder-[#8a9c70] text-sm"
              />
              <button className="bg-[#89AF20] text-black px-6 py-2 rounded font-semibold hover:bg-[#7a9518] transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Description */}
          <div>
            <p className="text-xs text-[#cfd9c1] leading-relaxed">
              Military-Grade Security For The Digital Age. Protecting Your Most Sensitive Information With Enterprise-Level Encryption And Zero-Knowledge Architecture.
            </p>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 className="font-bold text-[#89AF20] mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-[#cfd9c1] hover:text-[#89AF20] transition">Secure Messaging</a></li>
              <li><a href="#" className="text-[#cfd9c1] hover:text-[#89AF20] transition">File Encryption</a></li>
              <li><a href="#" className="text-[#cfd9c1] hover:text-[#89AF20] transition">Video Conferencing</a></li>
              <li><a href="#" className="text-[#cfd9c1] hover:text-[#89AF20] transition underline">Enterprise Suite</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-bold text-[#89AF20] mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-[#cfd9c1] hover:text-[#89AF20] transition">About Us</a></li>
              <li><a href="#" className="text-[#cfd9c1] hover:text-[#89AF20] transition">Careers</a></li>
              <li><a href="#" className="text-[#cfd9c1] hover:text-[#89AF20] transition">Security Blog</a></li>
              <li><a href="#" className="text-[#cfd9c1] hover:text-[#89AF20] transition">Contact</a></li>
            </ul>
          </div>

          {/* Column 4: Empty or Additional Links */}
          <div />
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-[#3a5101] pt-6 text-center text-xs text-[#8a9c70]">
          <p>&copy; 2025 Defcomm. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default BrowserFooter;
