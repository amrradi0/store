import React from 'react';
import { Link } from 'react-router-dom';

const Cookies = () => {
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
              Cookie Policy
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                What Are Cookies
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
                This Cookie Policy explains what cookies are, how we use cookies, how third-parties we may partner with 
                may use cookies on the ShopEase service, your choices regarding cookies, and more.
              </p>
              <p className="text-gray-700 dark:text-gray-300 transition-colors">
                Cookies are small text files that are stored on your computer or mobile device when you visit a website. 
                They are widely used in order to make websites work, or work more efficiently, as well as to provide 
                information to the owners of the site.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                How We Use Cookies
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
                When you use and access the ShopEase service, we may place a number of cookies files in your web browser.
              </p>
              <p className="text-gray-700 dark:text-gray-300 transition-colors">
                We use cookies for the following purposes:
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                Types of Cookies We Use
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4 py-1">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 transition-colors">
                    Essential Cookies
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 transition-colors">
                    These cookies are essential for you to browse the website and use its features, such as accessing 
                    secure areas of the site. Without these cookies, we cannot provide the requested services.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4 py-1">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 transition-colors">
                    Functionality Cookies
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 transition-colors">
                    These cookies allow our website to remember choices you make when you use our website, such as 
                    remembering your language preferences, your login details, and the changes you make to other parts 
                    of our website which you can customize. The purpose of these cookies is to provide you with a more 
                    personal experience and to avoid you having to re-enter your preferences every time you visit.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4 py-1">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 transition-colors">
                    Analytics and Performance Cookies
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 transition-colors">
                    These cookies are used to collect information about traffic to our website and how users use our website. 
                    The information gathered does not identify any individual visitor. It includes the number of visitors 
                    to our website, the pages they visit, and other statistical information. These cookies help us improve 
                    the way our website works and ensure the best user experience.
                  </p>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4 py-1">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 transition-colors">
                    Advertising Cookies
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 transition-colors">
                    These cookies are used to make advertising messages more relevant to you. They perform functions like 
                    preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for 
                    advertisers, and in some cases selecting advertisements that are based on your interests.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                Third-Party Cookies
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
                In some special cases, we also use cookies provided by trusted third parties. The following section 
                details which third-party cookies you might encounter through our website.
              </p>
              <ul className="list-disc pl-8 text-gray-700 dark:text-gray-300 space-y-2 transition-colors">
                <li>
                  <strong>Google Analytics:</strong> This site uses Google Analytics which is one of the most widespread 
                  and trusted analytics solutions on the web for helping us to understand how you use the site and ways 
                  that we can improve your experience.
                </li>
                <li>
                  <strong>Social Media Platforms:</strong> Our website may use social media features, such as Facebook, 
                  Twitter, and Instagram plugins. These features may collect your IP address and which page you're visiting 
                  on our site, and may set a cookie to enable the feature to function properly.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                Your Choices Regarding Cookies
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
                If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit 
                the help pages of your web browser.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
                As an EU citizen, under GDPR, you have certain individual rights. You can learn more about these rights 
                in our Privacy Policy.
              </p>
              <p className="text-gray-700 dark:text-gray-300 transition-colors">
                Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use 
                all of the features we offer, you may have to manually adjust some preferences every time you visit a 
                website, and some of our services may not function properly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                Contact Us
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors">
                If you have any questions about this Cookie Policy, please contact us at:
              </p>
              <p className="text-blue-600 dark:text-blue-400 font-medium transition-colors">
                cookies@shopease.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookies;