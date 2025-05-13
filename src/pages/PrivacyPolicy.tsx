import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Mail, MapPin, Twitter, Linkedin, Github } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-primary">
      {/* Abstract SVG Background */}
      <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#e3f2fd" fillOpacity="0.7" d="M0,160L60,154.7C120,149,240,139,360,154.7C480,171,600,213,720,229.3C840,245,960,235,1080,218.7C1200,203,1320,181,1380,170.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
        <circle cx="1200" cy="100" r="120" fill="#f59e0b" fillOpacity="0.15" />
        <circle cx="200" cy="500" r="80" fill="#f59e0b" fillOpacity="0.10" />
      </svg>
      <div className="relative z-10 container mx-auto py-16 px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Card className="bg-white/90 shadow-2xl border-0 rounded-3xl overflow-hidden">
          <div className="p-8 md:p-12">
            <Link 
              to="/" 
              className="mb-8 inline-flex items-center gap-2 text-base font-medium text-tertiary hover:text-tertiary/80 transition-colors"
            >
              <ArrowLeft className="size-5" /> Back to Home
            </Link>
            <CardHeader className="text-center space-y-2 px-0 pt-4 pb-8">
              <div className="flex justify-center mb-4">
                <div className="size-16 rounded-full bg-tertiary flex items-center justify-center shadow-lg">
                  <Shield className="size-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl font-extrabold text-gray-900">Privacy Policy for Instaplug</h1>
              <p className="text-gray-600">Last Updated: 12 May 2025</p>
            </CardHeader>
            <CardContent className="px-0">
              <div className="prose max-w-none text-gray-700">
                <p className="mb-6">
                  Thank you for using Instaplug, a mobile application developed by Aeres Technologies Limited. 
                  We are committed to protecting your personal information and your right to privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use Instaplug.
                </p>
                
                <p className="mb-8">
                  If you have any questions or concerns, please contact us at <a href="mailto:info@aerestechnologies.co.ke" className="text-tertiary hover:text-tertiary/80 transition-colors no-underline hover:underline">info@aerestechnologies.co.ke</a>.
                </p>

                <div className="space-y-10">
                  <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      1. Scope of This Policy
                    </h2>
                    <p>This Privacy Policy applies to all users located within Kenya who install, access, or use the Instaplug mobile application.</p>
                    <p>By using the App, you agree to the terms of this Policy and the processing of your personal data as outlined below.</p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      2. Information We Collect
                    </h2>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-medium text-gray-900 mb-2">a) Personal Information (Voluntarily Provided)</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Name (optional)</li>
                          <li>Email address (if you reach out to support)</li>
                          <li>Phone number (used for user session tracking and ad personalization)</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-medium text-gray-900 mb-2">b) Device and App Usage Information (Automatically Collected)</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Device type and model</li>
                          <li>Android version and system settings</li>
                          <li>Network provider</li>
                          <li>Advertising ID (e.g., Google Advertising ID)</li>
                          <li>App session statistics (e.g., time spent, screen activity)</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-medium text-gray-900 mb-2">c) Call Metadata (Non-sensitive)</p>
                        <p>Instaplug displays ads after a call. To enable this, we may collect:</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Time a call ends</li>
                          <li>Duration of the call</li>
                          <li>Call type (incoming or outgoing)</li>
                        </ul>
                        <p className="text-gray-600 italic mt-2">Note: We do not access, record, store, or transmit the actual content of any phone calls or contacts.</p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-medium text-gray-900 mb-2">d) Location Data</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>We may collect approximate location data (e.g., via IP address or network) to serve region-specific ads and deals.</li>
                          <li>We do not track precise GPS location.</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      3. How We Use Your Information
                    </h2>
                    <p>Your data helps us:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Show relevant ads, deals, and offers after phone calls</li>
                      <li>Improve ad targeting by location and app behavior</li>
                      <li>Monitor and improve app performance</li>
                      <li>Detect and fix bugs</li>
                      <li>Respond to user queries or support requests</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      4. Legal Basis for Data Processing
                    </h2>
                    <p>We process your information based on:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li><span className="font-medium">Consent:</span> By installing and using the app</li>
                      <li><span className="font-medium">Legitimate interest:</span> To enhance app functionality and deliver relevant content</li>
                      <li><span className="font-medium">Compliance with laws:</span> As required by applicable Kenyan data protection regulations</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      5. Third-Party Services
                    </h2>
                    <p>Instaplug integrates third-party advertising and analytics providers who may collect data to serve ads and monitor performance. These providers may include:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Ad networks (for displaying offers)</li>
                      <li>Analytics tools (for measuring usage)</li>
                    </ul>
                    <p className="mt-2">These third parties are obligated to handle your data securely and in compliance with data protection standards.</p>
                    <p className="mt-2">We do not sell your personal information to any third party.</p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      6. Data Retention
                    </h2>
                    <p>We retain your data for only as long as necessary:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>To fulfill the purposes described in this policy</li>
                      <li>To meet legal, regulatory, or contractual obligations</li>
                    </ul>
                    <p className="mt-2">Data that is no longer needed is securely deleted or anonymized.</p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      7. Your Rights
                    </h2>
                    <p>As a user, you have the right to:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Access your personal data</li>
                      <li>Request correction or deletion of your data</li>
                      <li>Withdraw your consent for optional data collection</li>
                      <li>Opt out of personalized advertising (via your device settings)</li>
                    </ul>
                    <p className="mt-2">To exercise these rights, email us at <a href="mailto:info@aerestechnologies.co.ke" className="text-tertiary hover:text-tertiary/80 transition-colors no-underline hover:underline">info@aerestechnologies.co.ke</a>.</p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      8. Security Measures
                    </h2>
                    <p>We use technical and organizational safeguards to protect your data, including:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Data encryption during transmission</li>
                      <li>Secure access controls</li>
                      <li>Regular system updates</li>
                    </ul>
                    <p className="mt-2">However, no system is completely immune to security threats, and we urge users to protect their devices.</p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      9. Children's Privacy
                    </h2>
                    <p>Instaplug is not intended for users under the age of 13. We do not knowingly collect personal data from children. If we learn that we have inadvertently collected data from a child, we will promptly delete it.</p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      10. Policy Updates
                    </h2>
                    <p>We may revise this Privacy Policy from time to time. If significant changes are made, we will notify you via the App or other appropriate channels.</p>
                    <p className="mt-2">The latest version of this policy will always be available within the App or on our website.</p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      11. Contact Us
                    </h2>
                    <p>For questions, concerns, or data requests, please contact:</p>
                    <div className="bg-gray-50 p-6 rounded-lg mt-4 flex flex-col sm:flex-row sm:items-center gap-6">
                      <div className="flex-1">
                        <p className="font-medium text-lg">Aeres Technologies Limited</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Mail className="size-4 text-gray-600" />
                          <a href="mailto:info@aerestechnologies.co.ke" className="text-tertiary hover:text-tertiary/80 transition-colors no-underline hover:underline">
                            info@aerestechnologies.co.ke
                          </a>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <MapPin className="size-4 text-gray-600" />
                          <span>Nairobi, Kenya</span>
                        </div>
                      </div>
                      <div>
                        <Button asChild variant="outline">
                          <Link to="/">Return to Home</Link>
                        </Button>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
        <footer className="relative z-10 w-full p-8 mt-12 text-center bg-secondary/80 backdrop-blur-lg shadow-inner rounded-2xl">
          <Separator className="mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center max-w-3xl mx-auto px-4 gap-4">
            <p className="text-gray-600 text-base">
              © 2025 Aeres Technologies Limited. All rights reserved.
            </p>
            <div className="flex items-center gap-6 mb-4 md:mb-0">
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-tertiary transition-colors">
                <Twitter className="size-6" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-tertiary transition-colors">
                <Linkedin className="size-6" />
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-tertiary transition-colors">
                <Github className="size-6" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
