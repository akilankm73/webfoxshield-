import React from 'react';
import { Spotlight } from '@/src/components/ui/Spotlight';
import { TextGenerateEffect } from "@/src/components/ui/TextGenerationEffect";
import Link from 'next/link';
import Image from 'next/image';
const TermsConditions = () => {
  return (
    <div className="pb-20 pt-36 relative">
      {/* Spotlight Background */}
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-20 left-full h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Grid Background */}
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      {/* Logo */}
      <a href="/" className="fixed top-0 right-15 left-3 h-40 z-[900]">
      <Image
    src="/webfoxshield.png" // Ensure this file is in the public directory
    alt="Logo"
    className="fixed top-0 left-3 z-[900] transition-all duration-300"
    width={150} // Set appropriate width
    height={80} // Set appropriate height
/>
</a>

      {/* Main Content */}
      <div className="flex justify-center relative my-20 z-10 -translate-y-40">
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <TextGenerateEffect className="text-center text-[40px] md:text-3xl lg:text-5xl" words="WEBFOXSHIELD" />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
           TERMS & CONDITIONS
          </p>

          {/* Privacy Policy Section */}
          <div className="flex justify-center items-center py-20">
            <div className="max-w-4xl w-full rounded-lg border border-[#74698d] shadow-2xl p-8 md:p-12">
              <p className="text-2xl mb-6">1.Introduction</p>
              <p className="mb-6">
              Welcome to WebFoxShield (the "Site"). By accessing and using our Site (webfoxshield.in), you agree to these Terms and Conditions ("Terms"). If you do not agree, please discontinue use of the Site and services immediately.
              </p>
               
              {/* General Information Section */}
              <section className="space-y-8">
                <h2 className="text-2xl font-bold mb-6">2. Services Provided</h2>
                <p>
                WebFoxShield, developed by Thinkinfo Expert Solutions, is a browser extension aimed at enhancing online security. It features data inspection, phishing detection, data leakage monitoring, and malware analysis. Use of the extension constitutes acceptance of these Terms.
                </p>

                {/* I. Definition of Main Terms */}
                <section>
                  <h3 className="text-2xl font-semibold mb-2">3.User Responsibilities</h3>
                  <ul className="list-disc ml-6 space-y-2">
                    <li><strong>You agree to:</strong>•	Use WebFoxShield for lawful purposes.</li>
                    <li> Avoid submitting harmful or malicious content.</li>
                    <li>Refrain from unauthorized system access.</li>
                    <li>Avoid transmitting illegal or rights-violating sensitive data.</li>
                   
                  </ul>
                </section>

                {/* II. Scope of Validity */}
                <section>
                  <h3 className="text-2xl font-semibold mb-2">4.License</h3>
                  <p>
                  We grant you a non-exclusive, non-transferable, revocable license for personal or business use. Modification, redistribution, or reverse engineering of WebFoxShield is strictly prohibited
                  </p>
                
                </section>

                {/* III. Controller */}
                <section>
                  <h3 className="text-2xl font-semibold mb-2">5. Privacy and Data Security</h3>
                  <p>
                  WebFoxShield is designed to protect sensitive information, but no system is entirely secure. By using the extension, you acknowledge the associated risks of online activities.
                  </p>
                </section>

                {/* IV. Data Protection Officer */}
                <section>
                  <h3 className="text-2xl font-semibold mb-2">6.Phishing and Malware Detection</h3>
                  <p>
                  While WebFoxShield’s algorithms are updated regularly, 100% detection of threats cannot be guaranteed. We are not liable for damages resulting from undetected threats.
                  </p>
                </section>

                {/* V. General Information About Data Processing Operations */}
                <section>
                  <h3 className="text-2xl font-semibold mb-2">7. Limitations of Liability</h3>
                  <p>
                  WebFoxShield, its developers, and affiliates disclaim liability for damages or losses, including financial or data breaches, incurred while using the extension.
                  </p>
                  
                </section>

                {/* VI. Accessing our services */}
                <section>
                  <h3 className="text-2xl font-semibold mb-2">8. Third-Party Links</h3>
                  <p>
                  Our Site may link to third-party services. We are not responsible for their content, practices, or any resulting issues.
                  </p>
                </section>
              </section>

              {/* Details of Data Processing Section */}
              <section className="space-y-8 mt-12">
                <h2 className="text-2xl font-bold mb-6">9. Modification of Services</h2>
                <p>
                We may update or discontinue WebFoxShield features at any time without prior notice. Continued use signifies acceptance of updated Terms.
                </p>

                {/* I. Newsletter Subscriptions */}
                <section>
                  <h3 className="text-2xl font-semibold mb-2">10. Termination</h3>
                  <p>
                  Access to WebFoxShield may be suspended or terminated for Terms violations or actions compromising security.
                  </p>
                </section>
                {/* 11.GOVERNING LAW */}
                <section>
                  <h3 className="text-2xl font-semibold mb-2">11. Governing Law</h3>
                  <p>
                  These Terms shall be governed by and construed in accordance with the laws of India, and any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in India.
                  </p>
                </section>
                {/* 12.CONTACT INFORMATION */}
                <section>
                  <h3 className="text-2xl font-semibold mb-2">12. Contact Information</h3>
                  <p>
                  For inquiries, please contact us at info@thinkinfoexpertsolutions.com.
                  </p>
                </section>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;