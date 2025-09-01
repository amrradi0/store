import React from 'react';
import { Link } from 'react-router-dom';

const Privacy = () => {
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
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                Introduction
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
                Welcome to ShopEase. We are committed to protecting your personal information and your right to privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
                our website and use our services.
              </p>
              <p className="text-gray-700 dark:text-gray-300 transition-colors">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
                please do not access the site.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                Information We Collect
              </h2>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 transition-colors">
                Personal Information You Disclose to Us
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
                We collect personal information that you voluntarily provide to us when you register on the site, 
                express an interest in obtaining information about us or our products and services, when you participate 
                in activities on the site, or otherwise when you contact us.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
                The personal information we collect may include:
              </p>
              <ul className="list-disc pl-8 text-gray-700 dark:text-gray-300 mb-4 space-y-2 transition-colors">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Mailing address</li>
                <li>Payment information</li>
                <li>Order history</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 transition-colors">
                Information Automatically Collected
              </h3>
              <p className="text-gray-700 dark:text-gray-300 transition-colors">
                We automatically collect certain information when you visit, use, or navigate the site. This information 
                does not reveal your specific identity but may include device and usage information, such as your IP 
                address, browser and device characteristics, operating system, language preferences, referring URLs, 
                device name, country, location, information about how and when you use our site, and other technical information.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                How We Use Your Information
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
                We use personal information collected via our site for a variety of business purposes described below:
              </p>
              <ul className="list-disc pl-8 text-gray-700 dark:text-gray-300 space-y-2 transition-colors">
                <li>To facilitate account creation and logon process</li>
                <li>To process transactions and send related information</li>
                <li>To send administrative information</li>
                <li>To fulfill and manage your orders</li>
                <li>To respond to user inquiries and offer support</li>
                <li>To protect our services</li>
                <li>To enforce our terms, conditions, and policies</li>
                <li>To respond to legal requests and prevent harm</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                Information Sharing
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
                We may process or share your data that we hold based on the following legal basis:
              </p>
              <ul className="list-disc pl-8 text-gray-700 dark:text-gray-300 space-y-2 transition-colors">
                <li><strong>Consent:</strong> We may process your data if you have given us specific consent</li>
                <li><strong>Legitimate Interests:</strong> We may process your data when it is reasonably necessary to achieve our legitimate business interests</li>
                <li><strong>Performance of a Contract:</strong> Where we have entered into a contract with you</li>
                <li><strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                Data Security
              </h2>
              <p className="text-gray-700 dark:text-gray-300 transition-colors">
                We use administrative, technical, and physical security measures to help protect your personal information. 
                While we have taken reasonable steps to secure the personal information you provide to us, please be aware 
                that despite our efforts, no security measures are perfect or impenetrable.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                Your Privacy Rights
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
                You have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-8 text-gray-700 dark:text-gray-300 space-y-2 transition-colors">
                <li><strong>Access:</strong> You have the right to request copies of your personal data</li>
                <li><strong>Rectification:</strong> You have the right to request that we correct any information you believe is inaccurate</li>
                <li><strong>Erasure:</strong> You have the right to request that we erase your personal data</li>
                <li><strong>Restrict Processing:</strong> You have the right to request that we restrict the processing of your personal data</li>
                <li><strong>Object to Processing:</strong> You have the right to object to our processing of your personal data</li>
                <li><strong>Data Portability:</strong> You have the right to request that we transfer the data that we have collected to another organization</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                Contact Us
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
                If you have questions or comments about this policy, you may email us at:
              </p>
              <p className="text-blue-600 dark:text-blue-400 font-medium transition-colors">
                privacy@shopease.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;