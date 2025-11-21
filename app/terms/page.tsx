import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CookieBanner } from '@/components/cookie-banner'

export default function TermsPage() {
  const lastUpdated = 'November 19, 2025'

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Terms of Service</h1>
              <p className="text-muted-foreground mb-12">Last updated: {lastUpdated}</p>

              <div className="prose prose-lg max-w-none space-y-8">
                <section>
                  <h2 className="text-2xl font-serif font-bold mb-4">Agreement to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing and using BlendTested.com ("the Site"), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold mb-4">Use License</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Permission is granted to temporarily download one copy of the materials (information or software) on BlendTested.com for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or for any public display</li>
                    <li>Attempt to decompile or reverse engineer any software contained on the Site</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                    <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold mb-4">Content and Reviews</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    All product reviews, ratings, and recommendations on this Site represent our honest opinions based on our testing and experience. However:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Reviews are based on our experience and may not reflect your individual experience</li>
                    <li>Product specifications and features may change without notice</li>
                    <li>Prices and availability are subject to change</li>
                    <li>We are not responsible for manufacturer defects or product issues</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold mb-4">Affiliate Disclosure</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    BlendTested.com is a participant in the Amazon Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. We may earn a commission when you make purchases through our affiliate links at no additional cost to you. This does not influence our reviews or recommendations.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold mb-4">Disclaimer</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The materials on BlendTested.com are provided on an 'as is' basis. BlendTested makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Further, BlendTested does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold mb-4">Limitations of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    In no event shall BlendTested or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on BlendTested.com, even if BlendTested or a BlendTested authorized representative has been notified orally or in writing of the possibility of such damage.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold mb-4">Accuracy of Materials</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The materials appearing on BlendTested.com could include technical, typographical, or photographic errors. BlendTested does not warrant that any of the materials on its website are accurate, complete, or current. BlendTested may make changes to the materials contained on its website at any time without notice.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold mb-4">Links</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    BlendTested has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by BlendTested of the site. Use of any such linked website is at the user's own risk.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold mb-4">User Comments and Submissions</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you submit comments, reviews, or other content to our Site, you grant BlendTested a non-exclusive, royalty-free, perpetual, and worldwide license to use, modify, and display such content. You represent that you own or have the necessary rights to any content you submit and that such content does not violate any third-party rights.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold mb-4">Modifications</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    BlendTested may revise these Terms of Service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms of Service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold mb-4">Governing Law</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These terms and conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-serif font-bold mb-4">Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about these Terms of Service, please contact us at:
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
