import { Award, Users, Target, Zap } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CookieBanner } from '@/components/cookie-banner'

const values = [
  {
    icon: Award,
    title: 'Expert Testing',
    description: 'Every product is rigorously tested in real-world conditions by experienced reviewers who know what matters.',
  },
  {
    icon: Users,
    title: 'User-Focused',
    description: 'We focus on what matters to home cooks - performance, durability, ease of use, and value for money.',
  },
  {
    icon: Target,
    title: 'Unbiased Reviews',
    description: 'Our reviews are independent and honest. We purchase products ourselves and never accept payment for positive reviews.',
  },
  {
    icon: Zap,
    title: 'Continuously Updated',
    description: 'We update our reviews as new products launch and re-test winners to ensure our recommendations stay current.',
  },
]

const testingProcess = [
  {
    title: 'Research & Selection',
    description: 'We identify the most popular and promising products in each category through market research and user feedback.',
  },
  {
    title: 'Purchase & Unboxing',
    description: 'We purchase all products at retail price to ensure we receive the same product and experience as our readers.',
  },
  {
    title: 'Initial Testing',
    description: 'Products undergo standardized tests designed to measure performance across key metrics specific to their category.',
  },
  {
    title: 'Real-World Use',
    description: 'We use products in daily life for weeks or months to understand long-term performance, durability, and practical issues.',
  },
  {
    title: 'Comparative Analysis',
    description: 'We compare results against competing products to determine relative strengths, weaknesses, and value propositions.',
  },
  {
    title: 'Review & Updates',
    description: 'We write comprehensive reviews and continuously update them based on long-term testing and new product releases.',
  },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-balance mb-6">
                About BlendTested
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-balance leading-relaxed">
                We're on a mission to help home cooks find the perfect kitchen appliances through rigorous testing and honest reviews.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-center">Our Story</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  BlendTested was founded in 2020 by a team of home cooking enthusiasts who were frustrated by the lack of reliable, in-depth reviews for kitchen appliances. We noticed that most reviews online were either superficial unboxing videos or biased promotional content.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We knew there had to be a better way. So we set out to create a resource that home cooks could trust - one that combined rigorous testing, real-world use, and honest analysis. We started with blenders (hence the name!) and quickly expanded to cover all categories of small kitchen appliances.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, BlendTested is trusted by over 100,000 home cooks who rely on our reviews to make informed purchasing decisions. We're proud to have helped our readers save money by avoiding poor products and find the perfect appliances for their needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <Card key={value.title}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How We Test */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-center">How We Test</h2>
              <p className="text-lg text-muted-foreground text-center mb-12 text-balance">
                Our testing process is designed to evaluate products thoroughly and fairly.
              </p>

              <div className="space-y-6">
                {testingProcess.map((step, index) => (
                  <Card key={step.title}>
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Transparency */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-center">Our Commitment to Transparency</h2>
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="prose max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      <strong className="text-foreground">Amazon Affiliate Disclosure:</strong> BlendTested is a participant in the Amazon Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon. When you purchase products through our links, we earn a small commission at no additional cost to you.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      <strong className="text-foreground">Editorial Independence:</strong> Our reviews and recommendations are completely independent. We purchase all products at retail price with our own funds. Affiliate commissions never influence our testing methodology, scores, or recommendations.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">No Paid Reviews:</strong> We never accept payment from manufacturers for reviews. Our only revenue comes from affiliate commissions when readers purchase products we recommend, ensuring our incentives align with providing honest, helpful reviews.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <CookieBanner />
    </div>
  )
}
