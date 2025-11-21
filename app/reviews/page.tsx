"use client"

import { useState } from "react"
import Link from "next/link"
import { Star, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CookieBanner } from "@/components/cookie-banner"

export const allProducts = [
  // ==================== Toaster Ovens ====================
  {
    slug: "breville-bov845bss",
    name: "Breville Smart Oven Pro Convection Toaster Oven BOV845BSS",
    category: "Toaster Ovens",
    rating: 4.5,
    reviews: 10867,
    image: "https://m.media-amazon.com/images/I/51YCCGCKWVL._AC_SX679_.jpg",
    price: "$269.95",
    excerpt: "Best all-around convection toaster oven with Element IQ™ technology",
    amazonLink: "https://www.amazon.com/Breville-BOV845BSS-Convection-Toaster-Stainless/dp/B00XBOXVIA",
  },
  {
    slug: "breville-bov800xl",
    name: "Breville Smart Oven BOV800XL 1800-Watt Convection Toaster Oven",
    category: "Toaster Ovens",
    rating: 4.7,
    reviews: 6891,
    image: "https://m.media-amazon.com/images/I/51RwBfiClcL._AC_SY300_SX300_QL70_FMwebp_.jpg",
    price: "$249.95",
    excerpt: "The original Breville Smart Oven — still one of the best",
    amazonLink: "https://www.amazon.com/Breville-BOV800XL-1800-Watt-Convection-Toaster/dp/B001L5TVGW",
  },
  {
    slug: "breville-bov450xl",
    name: "Breville Mini Smart Oven BOV450XL with Element IQ",
    category: "Toaster Ovens",
    rating: 4.6,
    reviews: 8813,
    image: "https://m.media-amazon.com/images/I/51we+MvypHL._AC_SX679_.jpg",
    price: "$159.95",
    excerpt: "Compact version with Element IQ — perfect for small kitchens",
    amazonLink: "https://www.amazon.com/Breville-BOV450XL-Mini-Smart-Element/dp/B006CVVA7I",
  },
  {
    slug: "panasonic-nb-g110p",
    name: "Panasonic FlashXpress Toaster Oven NB-G110P",
    category: "Toaster Ovens",
    rating: 4.5,
    reviews: 10018,
    image: "https://m.media-amazon.com/images/I/8161T5X9p0L._AC_SY300_SX300_QL70_FMwebp_.jpg",
    price: "$149.99",
    excerpt: "Double infrared heating — toast in 2 minutes, no preheating",
    amazonLink: "https://www.amazon.com/Panasonic-NB-G110P-FlashXpress-Infrared-Removable/dp/B008C9UFDI",
  },
  {
    slug: "panasonic-flashxpress-compact",
    name: "Panasonic FlashXpress Compact Toaster Oven",
    category: "Toaster Ovens",
    rating: 4.4,
    reviews: 632,
    image: "https://m.media-amazon.com/images/I/81BVnHIWGTL._AC_SY300_SX300_QL70_FMwebp_.jpg",
    price: "$119.99",
    excerpt: "Updated compact FlashXpress with double infrared heating",
    amazonLink: "https://www.amazon.com/Panasonic-FlashXpress-Compact-Toaster-Infrared/dp/B07WK9JJC7",
  },
  {
    slug: "hamilton-beach-31344d",
    name: "Hamilton Beach Easy Reach 4-Slice Toaster Oven 31344D",
    category: "Toaster Ovens",
    rating: 4.4,
    reviews: 15678,
    image: "https://m.media-amazon.com/images/I/81qCHIHybEL._AC_SY300_SX300_QL70_FMwebp_.jpg",
    price: "$64.99",
    excerpt: "Best-selling budget oven with unique roll-top door",
    amazonLink: "https://www.amazon.com/Hamilton-Beach-31344D-Roll-Top-Toaster/dp/B07CP7JN79",
  },
  {
    slug: "hamilton-beach-31123d",
    name: "Hamilton Beach 6-Slice Convection Toaster Oven 31123D",
    category: "Toaster Ovens",
    rating: 4.4,
    reviews: 8921,
    image: "https://m.media-amazon.com/images/I/71br53mQeEL._AC_SY300_SX300_QL70_FMwebp_.jpg",
    price: "$79.99",
    excerpt: "Large capacity + convection at a budget price",
    amazonLink: "https://www.amazon.com/Hamilton-Beach-31123D-Toaster-Silver/dp/B07D1KQ9HF",
  },
  {
    slug: "hamilton-beach-31156",
    name: "Hamilton Beach 2-in-1 Countertop Oven & Toaster 31156",
    category: "Toaster Ovens",
    rating: 4.3,
    reviews: 9818,
    image: "https://m.media-amazon.com/images/I/712ViF5gIwL._AC_SY300_SX300_QL70_FMwebp_.jpg",
    price: "$89.99",
    excerpt: "Combo toaster + oven with top toast slots",
    amazonLink: "https://www.amazon.com/Hamilton-Beach-31156-Countertop-Stainless/dp/B0758B74DS",
  },
  {
    slug: "blackdecker-to3250xsb",
    name: "BLACK+DECKER 8-Slice Extra Wide Convection Oven TO3250XSB",
    category: "Toaster Ovens",
    rating: 4.4,
    reviews: 13456,
    image: "https://m.media-amazon.com/images/I/81RJFX6DlaL._AC_SY300_SX300_QL70_FMwebp_.jpg",
    price: "$74.99",
    excerpt: "One of the most popular convection toaster ovens in the US",
    amazonLink: "https://www.amazon.com/BLACK-DECKER-TO3250XSB-Convection-Countertop/dp/B00LU2I428",
  },
  {
    slug: "blackdecker-to3265xssd",
    name: "BLACK+DECKER Crisp ‘N Bake Air Fry 5-in-1 Toaster Oven TO3265XSSD",
    category: "Toaster Ovens",
    rating: 4.3,
    reviews: 6305,
    image: "https://m.media-amazon.com/images/I/81QYoGNEkGL._AC_SY300_SX300_QL70_FMwebp_.jpg",
    price: "$99.99",
    excerpt: "Air fryer + toaster oven hybrid with convection",
    amazonLink: "https://www.amazon.com/BLACK-DECKER-TO3265XSSD-Toaster-Silver/dp/B07J2PWRFJ",
  },
  {
    slug: "blackdecker-to1787ss",
    name: "BLACK+DECKER 4-Slice Air Fry Toaster Oven TO1787SS",
    category: "Toaster Ovens",
    rating: 4.3,
    reviews: 4289,
    image: "https://m.media-amazon.com/images/I/81bVxVqoZFL._AC_SY300_SX300_QL70_FMwebp_.jpg",
    price: "$69.99",
    excerpt: "Compact toaster oven with built-in Air Fry",
    amazonLink: "https://www.amazon.com/BLACK-DECKER-TO1787SS-Functions-Stainless/dp/B0CKLXZRMC",
  },
  {
    slug: "blackdecker-to3290xsd",
    name: "BLACK+DECKER Extra Wide Crisp ‘N Bake Air Fry Toaster Oven",
    category: "Toaster Ovens",
    rating: 4.4,
    reviews: 3210,
    image: "https://m.media-amazon.com/images/I/61Llb1NzHNL._AC_SY300_SX300_QL70_FMwebp_.jpg",
    price: "$99.99",
    excerpt: "Extra-wide model with Air Fry and convection",
    amazonLink: "https://www.amazon.com/BLACK-DECKER-Countertop-Convection-Capacity/dp/B0B4T992R8",
  },
  {
    slug: "comfee-co-b08aa-bk",
    name: "Comfee 2-Slice Compact Toaster Oven CO-B08AA-BK",
    category: "Toaster Ovens",
    rating: 4.2,
    reviews: 1856,
    image: "https://m.media-amazon.com/images/I/61FFaTYzBDL._AC_SX679_.jpg",
    price: "$49.99",
    excerpt: "Ultra-budget mini toaster oven for 2 slices",
    amazonLink: "https://www.amazon.com/2-Slice-Timer-Bake-Broil-Toast-Countertop-CO-B08AA-BK/dp/B0924CNFV8",
  },
  {
    slug: "elite-gourmet-eto236",
    name: "Elite Gourmet ETO236 Personal 2-Slice Toaster Oven",
    category: "Toaster Ovens",
    rating: 4.3,
    reviews: 2987,
    image: "https://m.media-amazon.com/images/I/71h3fj7UtLL._AC_SY300_SX300_QL70_FMwebp_.jpg",
    price: "$39.99",
    excerpt: "Personal mini toaster oven for one person",
    amazonLink: "https://www.amazon.com/Elite-Gourmet-ETO236-Personal-Countertop/dp/B09XWG4LW5",
  },
  {
    slug: "elite-gourmet-eto4510b",
    name: "Elite Gourmet ETO4510B 4-Slice Double Door Toaster Oven",
    category: "Toaster Ovens",
    rating: 4.3,
    reviews: 5678,
    image: "https://m.media-amazon.com/images/I/81sWXSgbJ7L._AC_SY300_SX300_QL70_FMwebp_.jpg",
    price: "$69.99",
    excerpt: "French door design with convection",
    amazonLink: "https://www.amazon.com/Elite-Gourmet-ETO4510BMDouble-Countertop-Convection/dp/B07XMJMCS3",
  },
  {
    slug: "elite-gourmet-eto4524",
    name: "Elite Gourmet ETO4524 6-Slice Toaster Oven",
    category: "Toaster Ovens",
    rating: 4.2,
    reviews: 892,
    image: "https://m.media-amazon.com/images/I/818-cv3rd7L._AC_SY300_SX300_QL70_FMwebp_.jpg",
    price: "$89.99",
    excerpt: "Large 6-slice model with precise temperature control",
    amazonLink: "https://www.amazon.com/Elite-Gourmet-ETO4524-Countertop-Temperature/dp/B0DMHNW24R",
  },
  {
    slug: "toshiba-ac25cew-ss",
    name: "Toshiba AC25CEW-SS Digital Toaster Oven with Convection",
    category: "Toaster Ovens",
    rating: 4.5,
    reviews: 7890,
    image: "https://m.media-amazon.com/images/I/71q5AXBaPsL._AC_SX679_.jpg",
    price: "$119.99",
    excerpt: "Digital convection toaster oven with 10 functions",
    amazonLink: "https://www.amazon.com/Toshiba-AC25CEW-SS-Convection-Function-Stainless/dp/B072Q3MFDH",
  },
  {
    slug: "toshiba-ac25cew-bs",
    name: "Toshiba AC25CEW-BS Convection Toaster Oven (Black Stainless)",
    category: "Toaster Ovens",
    rating: 4.5,
    reviews: 6543,
    image: "https://m.media-amazon.com/images/I/71Z-wtkRELL._AC_SY300_SX300_QL70_FMwebp_.jpg",
    price: "$109.99",
    excerpt: "Same great Toshiba model in sleek black stainless steel",
    amazonLink: "https://www.amazon.com/Toshiba-AC25CEW-BS-Convection-Function-Stainless/dp/B071JB7YT4",
  },
  {
    slug: "oster-tssttvfddg-b",
    name: "Oster French Door Toaster Oven TSSTTVFDDG-B",
    category: "Toaster Ovens",
    rating: 4.4,
    reviews: 9876,
    image: "https://m.media-amazon.com/images/I/61MCGcRbAuL._AC_SX300_SY300_QL70_FMwebp_.jpg",
    price: "$189.99",
    excerpt: "Premium French door oven with turbo convection",
    amazonLink: "https://www.amazon.com/Oster-TSSTTVFDDG-B-French-Toaster-Extra/dp/B07CDKRQPG",
  },
  {
    slug: "kitchenaid-kco124bm",
    name: "KitchenAid Digital Countertop Oven with Air Fry KCO124BM",
    category: "Toaster Ovens",
    rating: 4.6,
    reviews: 2456,
    image: "https://m.media-amazon.com/images/I/81KY55ze5nL._AC_SY300_SX300_QL70_FMwebp_.jpg",
    price: "$279.99",
    excerpt: "Premium digital countertop oven with Air Fry from KitchenAid",
    amazonLink: "https://www.amazon.com/KitchenAid-KCO124BM-Digital-Countertop-Black/dp/B08FVWKK7T",
  },

  // ==================== Hand Mixers ====================
  {
    slug: "kitchenaid-khm512wh",
    name: "KitchenAid 5-Speed Ultra Power Hand Mixer KHM512WH",
    category: "Hand Mixers",
    rating: 4.7,
    reviews: 25992,
    image: "https://m.media-amazon.com/images/I/41h3HXdWg0L._AC_SY300_SX300_QL70_FMwebp_.jpg",
    price: "$44.49",
    excerpt: "Legendary KitchenAid hand mixer — lasts for decades",
    amazonLink: "https://www.amazon.com/KitchenAid-KHM512WH-5-Speed-Ultra-Power/dp/B0096TXQNE",
  },
  {
    slug: "cuisinart-hm-90bcs",
    name: "Cuisinart Power Advantage Plus 9-Speed Hand Mixer HM-90BCS",
    category: "Hand Mixers",
    rating: 4.6,
    reviews: 8092,
    image: "https://m.media-amazon.com/images/I/81NqY-aFFdL._AC_SY300_SX300_QL70_FMwebp_.jpg",
    price: "$79.95",
    excerpt: "Powerful 220W mixer with storage case and multiple attachments",
    amazonLink: "https://www.amazon.com/Cuisinart-HM-90BCS-Advantage-9-Speed-Handheld/dp/B003922L12",
  },
  {
    slug: "hamilton-beach-62682rz",
    name: "Hamilton Beach 6-Speed Hand Mixer with Snap-On Case 62682RZ",
    category: "Hand Mixers",
    rating: 4.5,
    reviews: 15234,
    image: "https://m.media-amazon.com/images/I/71VaQ-OzOJL._AC_SY300_SX300_QL70_FMwebp_.jpg",
    price: "$29.99",
    excerpt: "Best-selling budget hand mixer with convenient snap-on storage",
    amazonLink: "https://www.amazon.com/Hamilton-Beach-62682RZ-Mixer-Snap/dp/B001CH0ZLE",
  },
  {
    slug: "blackdecker-mx3200b",
    name: "BLACK+DECKER 6-Speed Hand Mixer MX3200B",
    category: "Hand Mixers",
    rating: 4.4,
    reviews: 12456,
    image: "https://m.media-amazon.com/images/I/71SBHE4nkIL._AC_SY300_SX300_QL70_FMwebp_.jpg",
    price: "$24.99",
    excerpt: "Affordable and reliable 6-speed hand mixer from BLACK+DECKER",
    amazonLink: "https://www.amazon.com/BLACK-DECKER-6-Speed-Attachments-MX3200B/dp/B00BIBBIH4",
  },
  {
    slug: "mueller-electric-mixer",
    name: "Mueller Austria Electric Hand Mixer",
    category: "Hand Mixers",
    rating: 4.5,
    reviews: 18900,
    image: "https://m.media-amazon.com/images/I/71qmK2KfVoL._AC_SY300_SX300_70_FMwebp_.jpg",
    price: "$32.99",
    excerpt: "Best-selling 5-speed + Turbo hand mixer with full accessory set",
    amazonLink: "https://www.amazon.com/Mueller-Electric-Stainless-Accessories-Whipping/dp/B08B2ZWLT6",
  },
  {
    slug: "shardor-hand-mixer",
    name: "SHARDOR Hand Mixer Electric 5-Speed + Turbo",
    category: "Hand Mixers",
    rating: 4.4,
    reviews: 12300,
    image: "https://m.media-amazon.com/images/I/61hhidLHaDL._AC_SY300_SX300_70_FMwebp_.jpg",
    price: "$25.99",
    excerpt: "Compact, powerful mixer with 5 attachments and storage case",
    amazonLink: "https://www.amazon.com/SHARDOR-Electric-Handheld-Stainless-Accessories/dp/B08ZRVSJCH",
  },
  {
    slug: "lord-eagle-mixer",
    name: "Lord Eagle Hand Mixer Electric 400W",
    category: "Hand Mixers",
    rating: 4.4,
    reviews: 12199,
    image: "https://m.media-amazon.com/images/I/713fYIkGAZL._AC_SY300_SX300_70_FMwebp_.jpg",
    price: "$31.99",
    excerpt: "400W powerhouse with self-control speed and 5 stainless attachments",
    amazonLink: "https://www.amazon.com/Lord-Eagle-Self-Control-Stainless-Accessories/dp/B08LGG9CDN",
  },
  {
    slug: "redmond-hand-mixer",
    name: "REDMOND Hand Mixer 5-Speed with Turbo",
    category: "Hand Mixers",
    rating: 4.3,
    reviews: 8900,
    image: "https://m.media-amazon.com/images/I/81ho1+ClpQL._AC_SY300_SX300_70_FMwebp_.jpg",
    price: "$22.99",
    excerpt: "Simple, reliable 5-speed hand mixer at a great price",
    amazonLink: "https://us.amazon.com/REDMOND-Electric-Handheld-Stainless-Attachments/dp/B08HYV45WJ",
  },
  {
    slug: "lilpartner-mixer",
    name: "LILPARTNER Hand Mixer Electric",
    category: "Hand Mixers",
    rating: 4.3,
    reviews: 7800,
    image: "https://m.media-amazon.com/images/I/719Ma759LbS._AC_SY300_SX300_70_FMwebp_.jpg",
    price: "$19.99",
    excerpt: "Ultra-budget mixer with one-touch beater eject",
    amazonLink: "https://www.amazon.com/LILPARTNER-Electric-Handheld-Ejection-Stainless/dp/B0CKLXZRMC",
  },
  {
    slug: "yomelo-9speed",
    name: "Yomelo 9-Speed Digital Hand Mixer 400W",
    category: "Hand Mixers",
    rating: 4.5,
    reviews: 6200,
    image: "https://m.media-amazon.com/images/I/610rsB+0u9L._AC_SY300_SX300_70_FMwebp_.jpg",
    price: "$33.99",
    excerpt: "Modern digital 400W mixer with LED display and storage case",
    amazonLink: "https://www.amazon.com/Yomelo-Electric-Powerful-Stainless-Accessories/dp/B0B397TM76",
  },
  {
    slug: "cordless-hand-mixer",
    name: "Cordless Rechargeable Hand Mixer 7-Speed",
    category: "Hand Mixers",
    rating: 4.3,
    reviews: 3100,
    image: "https://m.media-amazon.com/images/I/71opf4mjEkL._AC_SY300_SX300_70_FMwebp_.jpg",
    price: "$59.99",
    excerpt: "Fully cordless hand mixer with USB-C charging",
    amazonLink: "https://www.amazon.com/Cordless-Rechargeable-Electric-Stainless-Attachments/dp/B0DG8PF4WL",
  },
  {
    slug: "smartstore-mixer",
    name: "SmartStore Electric Hand Mixer with Milkshake Cup",
    category: "Hand Mixers",
    rating: 4.2,
    reviews: 4500,
    image: "https://m.media-amazon.com/images/I/71UuXj9WQbL._AC_SY300_SX300_70_FMwebp_.jpg",
    price: "$21.99",
    excerpt: "Budget mixer with special milkshake attachment",
    amazonLink: "https://www.amazon.com/SmartStoreTM-Electric-Milkshake-Attachment-Meringues/dp/B08XSGX1FB",
  },
  {
    slug: "moss-stone-mixer",
    name: "Moss & Stone Electric Hand Mixer",
    category: "Hand Mixers",
    rating: 4.4,
    reviews: 5300,
    image: "https://m.media-amazon.com/images/I/71XZn2qdcjL._AC_SY300_SX300_70_FMwebp_.jpg",
    price: "$23.99",
    excerpt: "Solid budget mixer with stainless steel attachments",
    amazonLink: "https://www.amazon.com/Moss-Stone-Electric-Stainless-Accessories/dp/B0BR5J63DK",
  },
  {
    slug: "elechomes-mixer",
    name: "Elechomes 6-Speed Hand Mixer with Reinforced Attachments",
    category: "Hand Mixers",
    rating: 4.5,
    reviews: 4100,
    image: "https://m.media-amazon.com/images/I/61mgmU6xCIL._AC_SY300_SX300_70_FMwebp_.jpg",
    price: "$28.99",
    excerpt: "Reinforced beaters designed for heavy dough",
    amazonLink: "https://us.amazon.com/Elechomes-Electric-Stainless-Attachments-Reinforced/dp/B089GL8HZ2",
  },
  {
    slug: "cusinaid-mixer",
    name: "Cusinaid 5-Speed Hand Mixer with Storage Case",
    category: "Hand Mixers",
    rating: 4.3,
    reviews: 6800,
    image: "https://m.media-amazon.com/images/I/61-YSeXkLlL._AC_SY300_SX300_70_FMwebp_.jpg",
    price: "$19.99",
    excerpt: "Compact 5-speed mixer with snap-on storage case",
    amazonLink: "https://us.amazon.com/Cusinaid-5-Speed-Electric-Beaters-Storage/dp/B07FC7Z3JS",
  },
  {
    slug: "oster-heatmsoft",
    name: "Oster HeatSoft Planetary Hand Mixer 270W",
    category: "Hand Mixers",
    rating: 4.4,
    reviews: 8200,
    image: "https://m.media-amazon.com/images/I/61gpQ7jcY8L._AC_SY300_SX300_70_FMwebp_.jpg",
    price: "$34.99",
    excerpt: "Unique HeatSoft technology softens butter instantly",
    amazonLink: "https://www.amazon.com/Oster-270-Watt-HEATSOFT-Technology-Storage/dp/B07FMHHRWJ",
  },
  {
    slug: "proctor-silex-62507",
    name: "Proctor Silex 5-Speed Easy Mix Hand Mixer",
    category: "Hand Mixers",
    rating: 4.2,
    reviews: 6100,
    image: "https://m.media-amazon.com/images/I/616UWAh-0gL._AC_SX679_.jpg",
    price: "$17.99",
    excerpt: "Classic, no-frills hand mixer at the lowest price",
    amazonLink: "https://www.amazon.com/Proctor-Silex-62507-5-Speed-Mixer/dp/B007VZ7WXA",
  },
  {
    slug: "braun-multimix-5",
    name: "Braun MultiMix 5 Hand Mixer HM5130",
    category: "Hand Mixers",
    rating: 4.5,
    reviews: 912,
    image: "https://m.media-amazon.com/images/I/61R3YjM1AaL._AC_SX300_SY300_70_FMwebp_.jpg",
    price: "$89.99",
    excerpt: "German-engineered 350W mixer with SmartMix technology",
    amazonLink: "https://www.amazon.com/Braun-MultiMix-Hand-Mixer-HM5130/dp/B07FRKGLFG",
  },
  {
    slug: "smeg-hmf01",
    name: "Smeg 50's Retro Style Hand Mixer HMF01",
    category: "Hand Mixers",
    rating: 4.6,
    reviews: 206,
    image: "https://m.media-amazon.com/images/I/51KXH7BZ5GL._AC_SY300_SX300_QL70_FMwebp_.jpg",
    price: "$169.95",
    excerpt: "The most stylish hand mixer ever made — pure 50s Italian design",
    amazonLink: "https://www.amazon.com/Smeg-Retro-Electric-HMF01-Pastel/dp/B09K8PLY9Q",
  },

  // ==================== Blenders ====================
  {
    slug: "blackdecker-to1787ss",
    name: "BLACK+DECKER 4-Slice Air Fry Toaster Oven TO1787SS",
    category: "Toaster Ovens",
    rating: 4.3,
    reviews: 4289,
    image: "https://m.media-amazon.com/images/I/81bVxVqoZFL._AC_SY300_SX300_QL70_FMwebp_.jpg",
    price: "$69.99",
    excerpt: "Compact toaster oven with built-in Air Fry",
    amazonLink: "https://www.amazon.com/BLACK-DECKER-TO1787SS-Functions-Stainless/dp/B0CKLXZRMC",
  },
]

const categories = [
  "All",
  "Blenders",
  "Stand Mixers",
  "Coffee Makers",
  "Food Processors",
  "Multi-Cookers",
  "Toaster Ovens",
  "Hand Mixers",
]

export default function ReviewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("rating")

  const filteredProducts =
    selectedCategory === "All" ? allProducts : allProducts.filter((product) => product.category === selectedCategory)

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating
    if (sortBy === "price-low") return Number.parseFloat(a.price.slice(1)) - Number.parseFloat(b.price.slice(1))
    if (sortBy === "price-high") return Number.parseFloat(b.price.slice(1)) - Number.parseFloat(a.price.slice(1))
    if (sortBy === "popular") return b.reviews - a.reviews
    return 0
  })

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Page Header */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-balance mb-4">Kitchen Appliance Reviews</h1>
            <p className="text-lg text-muted-foreground text-balance max-w-3xl">
              Expert reviews based on hands-on testing and real-world use. Find the perfect appliance for your kitchen
              with our comprehensive guides.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="sticky top-16 z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
          
        </section>

        {/* Product Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-6">
              <p className="text-sm text-muted-foreground">
                Showing {sortedProducts.length} {sortedProducts.length === 1 ? "product" : "products"}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedProducts.map((product) => (
                <Card key={product.slug} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <Link href={`/reviews/${product.slug}`}>
                    <div className="aspect-square overflow-hidden bg-muted">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                  <CardContent className="p-4">
                    <div className="text-xs text-primary font-medium mb-1">{product.category}</div>
                    <Link href={`/reviews/${product.slug}`}>
                      <h3 className="text-lg font-semibold mb-2 hover:text-primary transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                    </Link>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3.5 w-3.5 ${
                              i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-xs text-muted-foreground">({product.reviews})</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">{product.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <Button asChild size="sm">
                        <Link href={`/reviews/${product.slug}`}>Read Review</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <CookieBanner />
    </div>
  )
}
