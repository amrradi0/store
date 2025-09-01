import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 transition-colors">
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors mb-6"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
            
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                Agreement to Terms
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf 
                of an entity ("you") and ShopEase ("we," "us," or "our"), concerning your access to and use of our website 
                and services.
              </p>
              <p className="text-gray-700 dark:text-gray-300 transition-colors">
                You agree that by accessing the site, you have read, understood, and agreed to be bound by all of these Terms 
                of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from 
                using the site and you must discontinue use immediately.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                Intellectual Property Rights
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
                Unless otherwise indicated, the site is our proprietary property and all source code, databases, functionality, 
                software, website designs, audio, video, text, photographs, and graphics on the site and the trademarks, 
                service marks, and logos contained therein are owned or controlled by us or licensed to us.
              </p>
              <p className="text-gray-700 dark:text-gray-300 transition-colors">
                The site and its content are provided on an "as is" and "as available" basis for your personal, non-commercial 
                use only. Except as expressly provided in these Terms of Service, no part of the site and no content may be 
                copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, 
                transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                User Representations
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
                By using the site, you represent and warrant that:
              </p>
              <ul className="list-disc pl-8 text-gray-700 dark:text-gray-300 space-y-2 transition-colors">
                <li>You have the legal capacity and you agree to comply with these Terms of Service</li>
                <li>You are not under the age of 18</li>
                <li>You will not access the site through automated or non-human means</li>
                <li>You will not use the site for any illegal or unauthorized purpose</li>
                <li>Your use of the site will not violate any applicable law or regulation</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-4 transition-colors">
                If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to 
                suspend or terminate your account and refuse any and all current or future use of the site.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                Products
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
                All products are subject to availability. We reserve the right to discontinue any products at any time for 
                any reason. Prices for all products are subject to change.
              </p>
              <p className="text-gray-700 dark:text-gray-300 transition-colors">
                We have made every effort to display as accurately as possible the colors, features, specifications, and 
                details of the products available on the site. However, we do not guarantee that the colors, features, 
                specifications, or details of any product will be accurate, complete, reliable, current, or free of errors.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                Purchases and Payment
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
                We accept the following forms of payment:
              </p>
              <ul className="list-disc pl-8 text-gray-700 dark:text-gray-300 mb-4 space-y-2 transition-colors">
                <li>Visa</li>
                <li>Mastercard</li>
                <li>American Express</li>
                <li>PayPal</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 transition-colors">
                You agree to provide current, complete, and accurate purchase and account information for all purchases. 
                You agree to promptly update account and payment information, including email address, payment method, 
                and payment card expiration date.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                Return Policy
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
                Please review our Return Policy posted on the site prior to making any purchases. The Return Policy is 
                incorporated into these Terms of Service.
              </p>
              <p className="text-gray-700 dark:text-gray-300 transition-colors">
                We reserve the right, in our sole discretion, to refuse returns or exchanges for any reason, or to refuse 
                to accept any product return.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                Termination
              </h2>
              <p className="text-gray-700 dark:text-gray-300 transition-colors">
                These Terms of Service shall remain in full force and effect while you use the site. Without limiting any 
                other provision of these Terms of Service, we reserve the right to, in our sole discretion and without 
                notice or liability, deny access to and use of the site to any person for any reason or for no reason.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                Contact Us
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
                In order to resolve a complaint regarding the site or to receive further information regarding use of the site, 
                please contact us at:
              </p>
              <p className="text-blue-600 dark:text-blue-400 font-medium transition-colors">
                terms@shopease.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;