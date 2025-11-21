import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CookieBanner } from '@/components/cookie-banner'

export default function PrivacyPage() {
  const lastUpdated = 'November 19, 2025'

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Privacy Policy</h1>
              <p className="text-muted-foreground mb-12">Last updated: {lastUpdated}</p>

              <div className="prose prose-lg max-w-none space-y-8">
                <section>
                  <h2 className="text-2xl font-serif font-bold mb-4">Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    BlendTested ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website blendtested.com.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold mb-4">Information We Collect</h2>
                  <h3 className="text-xl font-semibold mb-3">Information You Provide</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We may collect information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                    <li>Contact us through our contact form</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Leave comments or reviews</li>
                    <li>Participate in surveys or promotions</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    This information may include your name, email address, and any other information you choose to provide.
                  </p>

                  <h3 className="text-xl font-semibold mb-3 mt-6">Automatically Collected Information</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    When you visit our website, we automatically collect certain information about your device, including:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Device type and operating system</li>
                    <li>Referring website</li>
                    <li>Pages visited and time spent on pages</li>
                    <li>Links clicked</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold mb-4">How We Use Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Send you newsletters and marketing communications (with your consent)</li>
                    <li>Improve and optimize our website</li>
                    <li>Analyze site usage and trends</li>
                    <li>Detect and prevent fraud or abuse</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold mb-4">Cookies and Tracking Technologies</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are small data files stored on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device until deleted or expired).
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold mb-4">Third-Party Services</h2>
                  <h3 className="text-xl font-semibold mb-3">Amazon Associates Program</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    BlendTested is a participant in the Amazon Associates Program. When you click on Amazon links and make purchases, Amazon may collect information about your visit. Please refer to Amazon's Privacy Policy for details on how they handle your information.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">Analytics Services</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We use analytics services to help us understand how visitors use our website. These services may collect information about your use of our site and other websites. This information is used to improve our website and provide better content.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold mb-4">Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold mb-4">Your Rights</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Depending on your location, you may have certain rights regarding your personal information, including:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>The right to access your personal information</li>
                    <li>The right to correct inaccurate information</li>
                    <li>The right to delete your personal information</li>
                    <li>The right to object to or restrict processing</li>
                    <li>The right to data portability</li>
                    <li>The right to withdraw consent</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold mb-4">Children's Privacy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold mb-4">Changes to This Privacy Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold mb-4">Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have questions or concerns about this Privacy Policy, please contact us at:
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    <strong className="text-foreground">Email:</strong> hello@blendtested.com
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <CookieBanner />
    </div>
  )
}
