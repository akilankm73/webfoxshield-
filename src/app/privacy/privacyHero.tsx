import React from 'react';
import { Spotlight } from '@/src/components/ui/Spotlight';
import { TextGenerateEffect } from "@/src/components/ui/TextGenerationEffect";
import Link from 'next/link';
import Image from 'next/image';
const Privacy = () => {
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
            WE MAKE PRIVACY EASY.
          </p>

          {/* Privacy Policy Section */}
          <div className="flex justify-center items-center py-20">
            <div className="max-w-4xl w-full rounded-lg border border-[#74698d] shadow-2xl p-8 md:p-12">
              <p className="text-xl mb-6"></p>
              <p className="mb-6">
                WebfoxShield ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our browser extension.
              </p>

              {/* General Information Section */}
              <section className="space-y-8">
                <h2 className="text-3xl font-bold mb-6">A. General Information</h2>
                <p>
                  This section of the Webfoxshield data privacy statement contains information on the scope of validity, the person responsible for data processing (controller), the data protection officer, and data security. It also begins with a list of definitions of important terms used in this data privacy statement.
                </p>

                {/* I. Definition of Main Terms */}
                <section>
                  <h3 className="text-2xl font-semibold mb-2">I. Definition of Main Terms</h3>
                  <ul className="list-disc ml-6 space-y-2">
                    <li><strong>Browser:</strong> A computer program used to display websites (e.g., Chrome, Firefox, Safari).</li>
                    <li><strong>Cookies:</strong> Small text files placed on the user’s computer by the web server through the browser. These cookies may contain an identifier (cookie ID) to recognize the user and other content data such as login status or website information.</li>
                    <li><strong>PDPB (Personal Data Protection Bill):</strong> The Personal Data Protection Bill is a proposed data protection law in India aimed at regulating the processing of personal data and protecting individuals' privacy.</li>
                    <li><strong>Personal Data:</strong> Any information related to an identified or identifiable natural person.</li>
                    <li><strong>Profiling:</strong> Any automated processing of personal data to evaluate certain aspects of a natural person's performance, health, preferences, interests, reliability, behavior, or location.</li>
                    <li><strong>Services:</strong> The offerings of Webfoxshield to which this data privacy statement applies.</li>
                    <li><strong>Tracking:</strong> The collection and evaluation of data regarding visitors' behavior in response to Webfoxshield's services.</li>
                    <li><strong>Tracking Technologies:</strong> Techniques used to track activity through records stored on web servers (log files), or data collected from end devices via pixels, cookies, or other similar tracking technologies.</li>
                    <li><strong>Processing:</strong> Any operation or set of operations performed on personal data, such as collection, organization, storage, modification, retrieval, consultation, use, transmission, restriction, erasure, or destruction.</li>
                    <li><strong>Pixel:</strong> Also known as tracking pixels, web beacons, or web bugs, these are small, invisible graphics embedded in HTML emails or websites.</li>
                  </ul>
                </section>

                {/* II. Scope of Validity */}
                <section>
                  <h3 className="text-2xl font-semibold mb-2">II. Scope of Validity</h3>
                  <p>
                    This data privacy statement applies to the following services:
                  </p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Our online offering Webfoxshield (website), primarily available at <a href="https://www.webfoxshield.in" className="text-blue-500">https://www.webfoxshield.in</a></li>
                    <li>Whenever reference is made to this Privacy Policy from one of our other offers (e.g., websites, subdomains, mobile applications, web services, or links to third-party sites), regardless of the way in which it is accessed or used.</li>
                  </ul>
                  <p>All of these offers are collectively referred to as “services”.</p>
                </section>

                {/* III. Controller */}
                <section>
                  <h3 className="text-2xl font-semibold mb-2">III. Controller</h3>
                  <p>
                    The following party is responsible for the processing of data in relation to the services, i.e., the role of controller which involves determining the purposes and means of processing personal data:
                  </p>
                  <p>
                    <strong>Webfoxshield</strong><br />
                    Thinkinfo Expert Solutions<br />
                    275-1 Kalar Kadu, Thiruvagoundanur, Salem-636005, Tamil Nadu, India<br />
                    Email: <a href="mailto:info@webfoxshield.com" className="text-blue-500">info@webfoxshield.com</a>
                  </p>
                </section>

                {/* IV. Data Protection Officer */}
                <section>
                  <h3 className="text-2xl font-semibold mb-2">IV. Data Protection Officer</h3>
                  <p>
                    The contact details of our data protection officer are provided under III. Controller. Messages should be marked for the attention of the data privacy department or sent to <a href="mailto:privacy@webfoxshield.in" className="text-blue-500">privacy@webfoxshield.in</a>.
                  </p>
                </section>

                {/* V. General Information About Data Processing Operations */}
                <section>
                  <h3 className="text-2xl font-semibold mb-2">V. General Information About Data Processing Operations</h3>
                  <p>
                    The following applies to all the processing operations listed below, unless stated otherwise:
                  </p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li><strong>No Obligation to Provide Personal Data & Consequences of Failure to Provide Such Data:</strong> The provision of personal data is not required by law or contract, and you are under no obligation to provide any data.</li>
                    <li><strong>Consent:</strong> In various cases, you may also grant us your consent for further processing of data.</li>
                    <li><strong>Transfer of Personal Data to Third Countries:</strong> When we send data to third countries, i.e., countries outside of India, the data are transmitted strictly in compliance with the statutory conditions of admissibility.</li>
                    <li><strong>Hosting at External Service Providers:</strong> Our data processing work is carried out with the involvement of hosting service providers.</li>
                    <li><strong>Transmission to Government Authorities:</strong> In principle, we do not transmit any data to government authorities.</li>
                    <li><strong>Period of Storage:</strong> The time specified in the “period of storage” paragraph indicates how long we use the data for the relevant purposes in any given case.</li>
                    <li><strong>Data categories:</strong> The category names listed below are used for specific types of data in the following sections.</li>
                  </ul>
                </section>

                {/* VI. Accessing our services */}
                <section>
                  <h3 className="text-2xl font-semibold mb-2">VI. Accessing our services</h3>
                  <p>
                    The passages below set out how your personal data are processed when you access our services (e.g., loading and viewing the website, opening the mobile app, and navigating within the app).
                  </p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li><strong>Purposes of data processing, legal basis, legitimate interests (where applicable), and period of storage:</strong> Establishing connection; presenting contents of the service; detecting attacks on our site due to unusual activities; fault diagnosis.</li>
                    <li><strong>Recipients of the personal data:</strong> External content providers who provide content which is needed to display the service.</li>
                  </ul>
                </section>
              </section>

              {/* Details of Data Processing Section */}
              <section className="space-y-8 mt-12">
                <h2 className="text-3xl font-bold mb-6">B. Details of Data Processing Within Our Website</h2>
                <p>
                  This section of the Privacy Policy contains detailed information about the processing of personal data in the context of our website. The information is subdivided for greater clarity into certain functions in connection with our services.
                </p>

                {/* I. Newsletter Subscriptions */}
                <section>
                  <h3 className="text-2xl font-semibold mb-2">I. Newsletter Subscriptions</h3>
                  <p>
                    Webfoxshield offers product news and updates as well as educational and informational updates around the topic of cybersecurity and online privacy. Just subscribe to our mailing list, and you’ll receive all the latest information about Webfoxshield.
                  </p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li><strong>Purposes of data processing, legal basis, legitimate interests (where applicable), and period of storage:</strong> Sending updates about Webfoxshield, product news, cybersecurity tips, and exclusive offers.</li>
                  </ul>
                </section>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;


