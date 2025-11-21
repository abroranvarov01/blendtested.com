import Link from 'next/link'
import { Star, Award, Clock, Shield, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CookieBanner } from '@/components/cookie-banner'

const featuredProducts = [
  {
    slug: 'vitamix-5200',
    name: 'Vitamix 5200',
    category: 'Blenders',
    rating: 4.8,
    image: '/vitamix-blender.jpg',
    price: '$449',
    excerpt: 'Professional-grade blending power with unmatched durability and versatility.',
  },
  {
    slug: 'kitchenaid-artisan',
    name: 'KitchenAid Artisan',
    category: 'Stand Mixers',
    rating: 4.7,
    image: '/kitchenaid-stand-mixer.jpg',
    price: '$379',
    excerpt: 'Iconic design meets powerful performance for all your baking needs.',
  },
  {
    slug: 'breville-barista',
    name: 'Breville Barista Express',
    category: 'Coffee Makers',
    rating: 4.6,
    image: '/breville-espresso-machine.jpg',
    price: '$699',
    excerpt: 'Café-quality espresso at home with built-in grinder and precision controls.',
  },
]

const benefits = [
  {
    icon: Award,
    title: 'Expert Testing',
    description: 'Every product undergoes rigorous testing in our dedicated kitchen lab by experienced reviewers.',
  },
  {
    icon: Clock,
    title: 'Real-World Use',
    description: 'We test products over weeks and months to understand long-term performance and durability.',
  },
  {
    icon: Shield,
    title: 'Unbiased Reviews',
    description: 'Our reviews are completely independent and honest, helping you make informed decisions.',
  },
  {
    icon: ArrowRight,
    title: 'Updated Regularly',
    description: 'We continuously update our reviews as new products launch and testing methods improve.',
  },
]

const categories = [
  {
    name: 'Blenders',
    count: '24 Reviews',
    image: '/blender-kitchen-appliance.jpg',
  },
  {
    name: 'Coffee Makers',
    count: '18 Reviews',
    image: '/coffee-maker-machine.jpg',
  },
  {
    name: 'Stand Mixers',
    count: '15 Reviews',
    image: '/stand-mixer-kitchen.jpg',
  },
  {
    name: 'Food Processors',
    count: '12 Reviews',
    image: '/food-processor.png',
  },
]

const testimonials = [
  {
    quote: 'BlendTested helped me find the perfect blender for my smoothie business. Their detailed testing saved me from making an expensive mistake!',
    author: 'Emily Thompson',
    role: 'Small Business Owner',
  },
  {
    quote: 'The most thorough kitchen appliance reviews on the internet. I trust their recommendations completely.',
    author: 'Michael Anderson',
    role: 'Home Chef',
  },
  {
    quote: 'Finally, honest reviews that actually test products instead of just reading specs. This site is a game-changer.',
    author: 'Jessica Williams',
    role: 'Cooking Enthusiast',
  },
]

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col relative">
      <div className="fixed inset-0 z-0">
        <img
          src="/homepage-aesthetic-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/40" />
      </div>
      
      <div className="relative z-10">
        <SiteHeader />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
            <div className="container mx-auto px-4 relative">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-balance mb-6 tracking-tight warm-text">
                  Kitchen Appliances,{' '}
                  <span className="text-primary">Expertly Tested</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-12 leading-relaxed">
                  Comprehensive reviews to help you find the perfect tools for your kitchen
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="text-base h-12 px-8 kitchen-glow rounded-xl">
                    <Link href="/reviews">
                      Explore Reviews
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-base h-12 px-8 float-gentle rounded-xl">
                    <Link href="/about">Our Process</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Products */}
          <section className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight warm-text">Top Rated</h2>
                <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
                  Our highest-rated appliances based on extensive testing
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {featuredProducts.map((product) => (
                  <div key={product.slug} className="cozy-card overflow-hidden">
                    <div className="aspect-square overflow-hidden bg-muted relative">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-xs text-primary font-semibold mb-2 uppercase tracking-wide">{product.category}</div>
                      <h3 className="text-xl font-semibold mb-3">{product.name}</h3>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(product.rating)
                                  ? 'fill-primary text-primary'
                                  : 'text-border'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm font-semibold">{product.rating}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{product.excerpt}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <Button asChild variant="ghost" className="group/btn mint-highlight">
                          <Link href={`/reviews/${product.slug}`}>
                            Read Review
                            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button asChild variant="outline" size="lg" className="h-12 px-8 float-gentle rounded-xl">
                  <Link href="/reviews">View All Reviews</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Why Trust Us */}
          <section className="py-20 md:py-28 bg-white/60 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight warm-text">Why BlendTested?</h2>
                <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
                  Transparent, thorough, and trustworthy reviews
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="text-center">
                    <div className="w-16 h-16 rounded-xl bg-accent/30 flex items-center justify-center mb-6 mx-auto clean-surface">
                      <benefit.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Categories */}
          <section className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight warm-text">Browse by Category</h2>
                <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
                  Find reviews for the appliances you need
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    href={`/reviews?category=${category.name.toLowerCase()}`}
                    className="group relative overflow-hidden rounded-xl aspect-[3/4] kitchen-glow"
                  >
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-serif font-semibold text-white mb-2">{category.name}</h3>
                      <p className="text-sm text-white/90">{category.count}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-20 md:py-28 bg-white/60 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight warm-text">Trusted by Thousands</h2>
                <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
                  Real feedback from our community
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="cozy-card">
                    <div className="p-8">
                      <div className="flex mb-6">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                        ))}
                      </div>
                      <blockquote className="text-base text-foreground/80 leading-relaxed mb-6">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="border-t border-border pt-4">
                        <div className="font-semibold text-foreground">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="bg-primary rounded-2xl overflow-hidden kitchen-glow p-12 md:p-16 text-center">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-6 tracking-tight">
                    Find Your Perfect Appliance
                  </h2>
                  <p className="text-lg md:text-xl text-primary-foreground/90 text-balance max-w-2xl mx-auto mb-10 leading-relaxed">
                    Browse our comprehensive reviews and make informed decisions for your kitchen
                  </p>
                  <Button asChild size="lg" variant="secondary" className="h-12 px-8 text-base rounded-xl clean-surface">
                    <Link href="/reviews">
                      Explore All Reviews
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <SiteFooter />
        <CookieBanner />
      </div>
    </div>
  )
}
