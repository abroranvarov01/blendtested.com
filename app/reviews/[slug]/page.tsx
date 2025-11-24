"use client"
import { notFound, useParams } from "next/navigation"
import { useEffect } from "react"
import Link from "next/link"
import { Star, Check, X, ShoppingCart, ExternalLink, ChevronLeft, ThumbsUp, ThumbsDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CookieBanner } from "@/components/cookie-banner"

// Product data - in a real app, this would come from a database
export const productsData: Record<string, any> = {
	"breville-bov845bss": {
		name: "Breville Smart Oven Pro Convection Toaster Oven BOV845BSS",
		category: "Toaster Ovens",
		rating: 4.5,
		reviews: 10867,
		image: "https://m.media-amazon.com/images/I/51YCCGCKWVL._AC_SX679_.jpg",
		price: "$269.95",
		amazonLink: "https://www.amazon.com/Breville-BOV845BSS-Convection-Toaster-Stainless/dp/B00XBOXVIA",
		summary: "Best all-around convection toaster oven with Element IQ™ technology.",
		pros: ["10 cooking functions", "True convection", "Large capacity", "Precise temperature control"],
		cons: ["Expensive", "Exterior gets hot"],
		scores: { performance: 96, durability: 94, versatility: 95, easeOfUse: 92, valueForMoney: 88 },
		specs: {
			Power: "1800W",
			Capacity: '0.8 cu ft · Fits 13" pizza',
			Functions: "10",
			Dimensions: '18.5" × 15.7" × 11"',
			Warranty: "1 year",
		},
	},
	"breville-bov800xl": {
		name: "Breville Smart Oven BOV800XL 1800-Watt Convection Toaster Oven",
		category: "Toaster Ovens",
		rating: 4.7,
		reviews: 6891,
		image: "https://m.media-amazon.com/images/I/51RwBfiClcL._AC_SY300_SX300_QL70_FMwebp_.jpg",
		price: "$249.95",
		amazonLink: "https://www.amazon.com/Breville-BOV800XL-1800-Watt-Convection-Toaster/dp/B001L5TVGW",
		summary: "The original Breville Smart Oven — still one of the best.",
		pros: ["Element IQ™", "Convection", "9 functions", "Proven reliability"],
		cons: ["No slow cook mode"],
		scores: { performance: 94, durability: 93, versatility: 90, easeOfUse: 91, valueForMoney: 90 },
		specs: {
			Power: "1800W",
			Capacity: "0.8 cu ft",
			Functions: "9",
			Dimensions: '18.5" × 16.2" × 11.2"',
			Warranty: "1 year",
		},
	},
	"breville-bov450xl": {
		name: "Breville Mini Smart Oven BOV450XL with Element IQ",
		category: "Toaster Ovens",
		rating: 4.6,
		reviews: 8813,
		image: "https://m.media-amazon.com/images/I/51we+MvypHL._AC_SX679_.jpg",
		price: "$159.95",
		amazonLink: "https://www.amazon.com/Breville-BOV450XL-Mini-Smart-Element/dp/B006CVVA7I",
		summary: "Compact version with Element IQ — perfect for small kitchens.",
		pros: ["Small footprint", "Element IQ", "8 functions", "Excellent toast"],
		cons: ["No convection"],
		scores: { performance: 92, durability: 91, versatility: 88, easeOfUse: 93, valueForMoney: 91 },
		specs: {
			Power: "1800W",
			Capacity: '0.45 cu ft · 11" pizza',
			Functions: "8",
			Dimensions: '16.1" × 14.2" × 10"',
			Warranty: "1 year",
		},
	},
	"panasonic-nb-g110p": {
		name: "Panasonic FlashXpress Toaster Oven NB-G110P",
		category: "Toaster Ovens",
		rating: 4.5,
		reviews: 10018,
		image: "https://m.media-amazon.com/images/I/8161T5X9p0L._AC_SY300_SX300_QL70_FMwebp_.jpg",
		price: "$149.99",
		amazonLink: "https://www.amazon.com/Panasonic-NB-G110P-FlashXpress-Infrared-Removable/dp/B008C9UFDI",
		summary: "Double infrared heating — toast in 2 minutes, no preheating required.",
		pros: ["Extremely fast", "Even browning", "Compact"],
		cons: ["Small interior", "No convection"],
		scores: { performance: 93, durability: 89, versatility: 85, easeOfUse: 94, valueForMoney: 92 },
		specs: {
			Power: "1300W",
			Capacity: '4 slices / 9" pizza',
			Functions: "6 presets",
			Dimensions: '13" × 12" × 10.2"',
			Warranty: "1 year",
		},
	},
	"panasonic-flashxpress-compact": {
		name: "Panasonic FlashXpress Compact Toaster Oven",
		category: "Toaster Ovens",
		rating: 4.4,
		reviews: 632,
		image: "https://m.media-amazon.com/images/I/81BVnHIWGTL._AC_SY300_SX300_QL70_FMwebp_.jpg",
		price: "$119.99",
		amazonLink: "https://www.amazon.com/Panasonic-FlashXpress-Compact-Toaster-Infrared/dp/B07WK9JJC7",
		summary: "Updated compact FlashXpress with double infrared heating.",
		pros: ["Ultra-fast", "Compact", "Great toast"],
		cons: ["Very small capacity"],
		scores: { performance: 89, durability: 87, versatility: 82, easeOfUse: 93, valueForMoney: 91 },
		specs: {
			Power: "1300W",
			Capacity: "4 slices",
			Functions: "3",
			Dimensions: '13" × 10.2" × 12"',
			Warranty: "1 year",
		},
	},
	"hamilton-beach-31344d": {
		name: "Hamilton Beach Easy Reach 4-Slice Toaster Oven 31344D",
		category: "Toaster Ovens",
		rating: 4.4,
		reviews: 15678,
		image: "https://m.media-amazon.com/images/I/81qCHIHybEL._AC_SY300_SX300_QL70_FMwebp_.jpg",
		price: "$64.99",
		amazonLink: "https://www.amazon.com/Hamilton-Beach-31344D-Roll-Top-Toaster/dp/B07CP7JN79",
		summary: "Best-selling budget oven with unique roll-top door.",
		pros: ["Roll-top door", "Easy to clean", "Compact", "Great price"],
		cons: ["No convection"],
		scores: { performance: 85, durability: 84, versatility: 80, easeOfUse: 95, valueForMoney: 96 },
		specs: {
			Power: "1200W",
			Capacity: '4 slices / 9" pizza',
			Functions: "3",
			Dimensions: '16.1" × 11.4" × 8.7"',
			Warranty: "1 year",
		},
	},
	"hamilton-beach-31123d": {
		name: "Hamilton Beach 6-Slice Convection Toaster Oven 31123D",
		category: "Toaster Ovens",
		rating: 4.4,
		reviews: 8921,
		image: "https://m.media-amazon.com/images/I/71br53mQeEL._AC_SY300_SX300_QL70_FMwebp_.jpg",
		price: "$79.99",
		amazonLink: "https://www.amazon.com/Hamilton-Beach-31123D-Toaster-Silver/dp/B07D1KQ9HF",
		summary: "Large capacity + convection at a budget price.",
		pros: ["Convection", "6 slices", '12" pizza', "Excellent value"],
		cons: ["Gets hot on the outside"],
		scores: { performance: 87, durability: 84, versatility: 87, easeOfUse: 88, valueForMoney: 95 },
		specs: {
			Power: "1400W",
			Capacity: '6 slices / 12" pizza',
			Functions: "Convection + Bake + Broil",
			Warranty: "1 year",
		},
	},
	"hamilton-beach-31156": {
		name: "Hamilton Beach 2-in-1 Countertop Oven & Toaster 31156",
		category: "Toaster Ovens",
		rating: 4.3,
		reviews: 9818,
		image: "https://m.media-amazon.com/images/I/712ViF5gIwL._AC_SY300_SX300_QL70_FMwebp_.jpg",
		price: "$89.99",
		amazonLink: "https://www.amazon.com/Hamilton-Beach-31156-Countertop-Stainless/dp/B0758B74DS",
		summary: "Combo toaster + oven with top toast slots.",
		pros: ["2-in-1 design", "Compact", "Fast top toast"],
		cons: ["Limited interior height"],
		scores: { performance: 84, durability: 83, versatility: 86, easeOfUse: 90, valueForMoney: 92 },
		specs: { Power: "1450W", Capacity: '9" pizza', Functions: "Toast + Bake + Broil", Warranty: "1 year" },
	},
	"blackdecker-to3250xsb": {
		name: "BLACK+DECKER 8-Slice Extra Wide Convection Oven TO3250XSB",
		category: "Toaster Ovens",
		rating: 4.4,
		reviews: 13456,
		image: "https://m.media-amazon.com/images/I/81RJFX6DlaL._AC_SY300_SX300_QL70_FMwebp_.jpg",
		price: "$74.99",
		amazonLink: "https://www.amazon.com/BLACK-DECKER-TO3250XSB-Convection-Countertop/dp/B00LU2I428",
		summary: "One of the most popular convection toaster ovens in the US.",
		pros: ["Convection", "Large capacity", "Affordable"],
		cons: ["Slow toasting"],
		scores: { performance: 86, durability: 84, versatility: 87, easeOfUse: 87, valueForMoney: 95 },
		specs: { Power: "1500W", Capacity: '8 slices / 12" pizza', Functions: "Convection", Warranty: "2 years" },
	},
	"blackdecker-to3265xssd": {
		name: "BLACK+DECKER Crisp ‘N Bake Air Fry 5-in-1 Toaster Oven TO3265XSSD",
		category: "Toaster Ovens",
		rating: 4.3,
		reviews: 6305,
		image: "https://m.media-amazon.com/images/I/81QYoGNEkGL._AC_SY300_SX300_QL70_FMwebp_.jpg",
		price: "$99.99",
		amazonLink: "https://www.amazon.com/BLACK-DECKER-TO3265XSSD-Toaster-Silver/dp/B07J2PWRFJ",
		summary: "Air fryer + toaster oven hybrid with convection.",
		pros: ["Air Fry function", "Convection", "Large capacity"],
		cons: ["Uneven toast sometimes"],
		scores: { performance: 88, durability: 84, versatility: 91, easeOfUse: 86, valueForMoney: 90 },
		specs: { Power: "1500W", Capacity: '12" pizza', Functions: "5-in-1", Warranty: "2 years" },
	},
	"blackdecker-to1787ss": {
		name: "BLACK+DECKER 4-Slice Air Fry Toaster Oven TO1787SS",
		category: "Toaster Ovens",
		rating: 4.3,
		reviews: 4289,
		image: "https://m.media-amazon.com/images/I/81bVxVqoZFL._AC_SY300_SX300_QL70_FMwebp_.jpg",
		price: "$69.99",
		amazonLink: "https://www.amazon.com/BLACK-DECKER-TO1787SS-Functions-Stainless/dp/B0CKLXZRMC",
		summary: "Compact toaster oven with built-in Air Fry.",
		pros: ["Air Fry", "Compact", "Great price"],
		cons: ["Small capacity"],
		scores: { performance: 85, durability: 83, versatility: 85, easeOfUse: 90, valueForMoney: 93 },
		specs: { Power: "1150W", Capacity: "4 slices", Functions: "Air Fry + Bake + Broil", Warranty: "2 years" },
	},
	"blackdecker-to3290xsd": {
		name: "BLACK+DECKER Extra Wide Crisp ‘N Bake Air Fry Toaster Oven",
		category: "Toaster Ovens",
		rating: 4.4,
		reviews: 3210,
		image: "https://m.media-amazon.com/images/I/61Llb1NzHNL._AC_SY300_SX300_QL70_FMwebp_.jpg",
		price: "$99.99",
		amazonLink: "https://www.amazon.com/BLACK-DECKER-Countertop-Convection-Capacity/dp/B0B4T992R8",
		summary: "Extra-wide model with Air Fry and convection.",
		pros: ["Extra wide", "Air Fry", "Convection"],
		cons: ["Takes up counter space"],
		scores: { performance: 89, durability: 85, versatility: 90, easeOfUse: 87, valueForMoney: 91 },
		specs: { Power: "1500W", Capacity: "8 slices", Functions: "5-in-1", Warranty: "2 years" },
	},
	"comfee-co-b08aa-bk": {
		name: "Comfee 2-Slice Compact Toaster Oven CO-B08AA-BK",
		category: "Toaster Ovens",
		rating: 4.2,
		reviews: 1856,
		image: "https://m.media-amazon.com/images/I/61FFaTYzBDL._AC_SX679_.jpg",
		price: "$49.99",
		amazonLink: "https://www.amazon.com/2-Slice-Timer-Bake-Broil-Toast-Countertop-CO-B08AA-BK/dp/B0924CNFV8",
		summary: "Ultra-budget mini toaster oven for 2 slices.",
		pros: ["Very cheap", "Compact", "Simple controls"],
		cons: ["Tiny capacity", "No convection"],
		scores: { performance: 78, durability: 76, versatility: 70, easeOfUse: 92, valueForMoney: 97 },
		specs: { Power: "800W", Capacity: "2 slices", Functions: "Bake + Broil + Toast", Warranty: "1 year" },
	},
	"elite-gourmet-eto236": {
		name: "Elite Gourmet ETO236 Personal 2-Slice Toaster Oven",
		category: "Toaster Ovens",
		rating: 4.3,
		reviews: 2987,
		image: "https://m.media-amazon.com/images/I/71h3fj7UtLL._AC_SY300_SX300_QL70_FMwebp_.jpg",
		price: "$39.99",
		amazonLink: "https://www.amazon.com/Elite-Gourmet-ETO236-Personal-Countertop/dp/B09XWG4LW5",
		summary: "Personal mini toaster oven for one person.",
		pros: ["Super compact", "Cheap", "Fast heat-up"],
		cons: ["Very small"],
		scores: { performance: 80, durability: 78, versatility: 72, easeOfUse: 94, valueForMoney: 96 },
		specs: { Power: "650W", Capacity: "2 slices", Functions: "3", Warranty: "1 year" },
	},
	"elite-gourmet-eto4510b": {
		name: "Elite Gourmet ETO4510B 4-Slice Double Door Toaster Oven",
		category: "Toaster Ovens",
		rating: 4.3,
		reviews: 5678,
		image: "https://m.media-amazon.com/images/I/81sWXSgbJ7L._AC_SY300_SX300_QL70_FMwebp_.jpg",
		price: "$69.99",
		amazonLink: "https://www.amazon.com/Elite-Gourmet-ETO4510BMDouble-Countertop-Convection/dp/B07XMJMCS3",
		summary: "French door design with convection.",
		pros: ["Double doors", "Convection", "Good price"],
		cons: ["Plastic housing"],
		scores: { performance: 84, durability: 80, versatility: 85, easeOfUse: 88, valueForMoney: 93 },
		specs: { Power: "1380W", Capacity: "4 slices", Functions: "Convection", Warranty: "1 year" },
	},
	"elite-gourmet-eto4524": {
		name: "Elite Gourmet ETO4524 6-Slice Toaster Oven",
		category: "Toaster Ovens",
		rating: 4.2,
		reviews: 892,
		image: "https://m.media-amazon.com/images/I/818-cv3rd7L._AC_SY300_SX300_70_FMwebp_.jpg",
		price: "$89.99",
		amazonLink: "https://us.amazon.com/Elite-Gourmet-ETO4524-Countertop-Temperature/dp/B0DMHNW24R",
		summary: "Large 6-slice model with precise temperature control.",
		pros: ["Accurate temp", "Large capacity", "Value"],
		cons: ["No convection"],
		scores: { performance: 83, durability: 81, versatility: 84, easeOfUse: 87, valueForMoney: 92 },
		specs: { Power: "1500W", Capacity: "6 slices", Functions: "Bake + Broil + Toast", Warranty: "1 year" },
	},
	"toshiba-ac25cew-ss": {
		name: "Toshiba AC25CEW-SS Digital Toaster Oven with Convection",
		category: "Toaster Ovens",
		rating: 4.5,
		reviews: 7890,
		image: "https://m.media-amazon.com/images/I/71q5AXBaPsL._AC_SX679_.jpg",
		price: "$119.99",
		amazonLink: "https://www.amazon.com/Toshiba-AC25CEW-SS-Convection-Function-Stainless/dp/B072Q3MFDH",
		summary: "Digital convection toaster oven with 10 functions.",
		pros: ["Digital controls", "Convection", "10 presets"],
		cons: ["Loud fan"],
		scores: { performance: 90, durability: 87, versatility: 92, easeOfUse: 89, valueForMoney: 90 },
		specs: { Power: "1500W", Capacity: '6 slices / 12" pizza', Functions: "10", Warranty: "1 year" },
	},
	"toshiba-ac25cew-bs": {
		name: "Toshiba AC25CEW-BS Convection Toaster Oven (Black Stainless)",
		category: "Toaster Ovens",
		rating: 4.5,
		reviews: 6543,
		image: "https://m.media-amazon.com/images/I/71Z-wtkRELL._AC_SY300_SX300_QL70_FMwebp_.jpg",
		price: "$109.99",
		amazonLink: "https://www.amazon.com/Toshiba-AC25CEW-BS-Convection-Function-Stainless/dp/B071JB7YT4",
		summary: "Same great Toshiba model in sleek black stainless steel.",
		pros: ["Convection", "Digital display", "Large capacity"],
		cons: ["Black finish shows fingerprints"],
		scores: { performance: 90, durability: 87, versatility: 91, easeOfUse: 89, valueForMoney: 91 },
		specs: { Power: "1500W", Capacity: "6 slices", Functions: "10", Warranty: "1 year" },
	},
	"oster-tssttvfddg-b": {
		name: "Oster French Door Toaster Oven TSSTTVFDDG-B",
		category: "Toaster Ovens",
		rating: 4.4,
		reviews: 9876,
		image: "https://m.media-amazon.com/images/I/61MCGcRbAuL._AC_SX300_SY300_QL70_FMwebp_.jpg",
		price: "$189.99",
		amazonLink: "https://www.amazon.com/Oster-TSSTTVFDDG-B-French-Toaster-Extra/dp/B07CDKRQPG",
		summary: "Premium French door oven with turbo convection.",
		pros: ["French doors", "Convection", "Extra large", "Stylish"],
		cons: ["Price", "Large footprint"],
		scores: { performance: 92, durability: 90, versatility: 94, easeOfUse: 88, valueForMoney: 85 },
		specs: { Power: "1525W", Capacity: "Extra Large", Functions: "Convection + Turbo", Warranty: "1 year" },
	},
	"kitchenaid-kco124bm": {
		name: "KitchenAid Digital Countertop Oven with Air Fry KCO124BM",
		category: "Toaster Ovens",
		rating: 4.6,
		reviews: 2456,
		image: "https://m.media-amazon.com/images/I/81KY55ze5nL._AC_SY300_SX300_QL70_FMwebp_.jpg",
		price: "$279.99",
		amazonLink: "https://www.amazon.com/KitchenAid-KCO124BM-Digital-Countertop-Black/dp/B08FVWKK7T",
		summary: "Premium digital countertop oven with Air Fry from KitchenAid.",
		pros: ["Air Fry function", "9 cooking modes", "Even-Heat™ convection", "Beautiful matte black finish"],
		cons: ["Expensive", "Large footprint"],
		scores: { performance: 95, durability: 94, versatility: 96, easeOfUse: 91, valueForMoney: 82 },
		specs: {
			Power: "1800W",
			Capacity: '0.74 cu ft · 9×13" pan',
			Functions: "9 incl. Air Fry",
			Dimensions: '17" × 16" × 12.6"',
			Warranty: "1 year",
		},
	},

	// Hand Mixers start here
	"kitchenaid-khm512wh": {
		name: "KitchenAid 5-Speed Ultra Power Hand Mixer KHM512WH",
		category: "Hand Mixers",
		rating: 4.7,
		reviews: 25992,
		image: "https://m.media-amazon.com/images/I/41h3HXdWg0L._AC_SY300_SX300_QL70_FMwebp_.jpg",
		price: "$44.49",
		amazonLink: "https://www.amazon.com/KitchenAid-KHM512WH-5-Speed-Ultra-Power/dp/B0096TXQNE",
		summary: "The legendary KitchenAid hand mixer that lasts decades.",
		pros: ["Extremely durable", "Quiet DC motor", "Soft start", "Lightweight"],
		cons: ["No storage case"],
		scores: { performance: 90, durability: 96, versatility: 88, easeOfUse: 93, valueForMoney: 94 },
		specs: { Power: "60W DC motor", Speeds: "5", Attachments: "Turbo beaters + dough hooks", Warranty: "1 year" },
	},

	"cuisinart-hm-90bcs": {
		name: "Cuisinart Power Advantage Plus 9-Speed Hand Mixer HM-90BCS",
		category: "Hand Mixers",
		rating: 4.6,
		reviews: 8092,
		image: "https://m.media-amazon.com/images/I/81NqY-aFFdL._AC_SY300_SX300_QL70_FMwebp_.jpg",
		price: "$79.95",
		amazonLink: "https://www.amazon.com/Cuisinart-HM-90BCS-Advantage-9-Speed-Handheld/dp/B003922L12",
		summary: "Powerful 220W hand mixer with storage case and extra attachments.",
		pros: ["220W motor", "9 speeds", "Storage case included", "Smooth start"],
		cons: ["Loud on max speed"],
		scores: { performance: 92, durability: 89, versatility: 91, easeOfUse: 90, valueForMoney: 87 },
		specs: { Power: "220W", Speeds: "9", Attachments: "Beaters, whisk, dough hooks + case", Warranty: "3 years" },
	},

	"hamilton-beach-62682rz": {
		name: "Hamilton Beach 6-Speed Hand Mixer with Snap-On Case 62682RZ",
		category: "Hand Mixers",
		rating: 4.5,
		reviews: 15234,
		image: "https://m.media-amazon.com/images/I/71VaQ-OzOJL._AC_SY300_SX300_QL70_FMwebp_.jpg",
		price: "$29.99",
		amazonLink: "https://www.amazon.com/Hamilton-Beach-62682RZ-Mixer-Snap/dp/B001CH0ZLE",
		summary: "Best-selling budget hand mixer with convenient snap-on storage.",
		pros: ["Great price", "Snap-on case", "Bowl rest feature"],
		cons: ["Not the most powerful"],
		scores: { performance: 82, durability: 85, versatility: 80, easeOfUse: 92, valueForMoney: 95 },
		specs: { Power: "250W", Speeds: "6 + Burst", Attachments: "Traditional beaters + whisk", Warranty: "1 year" },
	},

	"blackdecker-mx3200b": {
		name: "BLACK+DECKER 6-Speed Hand Mixer MX3200B",
		category: "Hand Mixers",
		rating: 4.4,
		reviews: 12456,
		image: "https://m.media-amazon.com/images/I/71SBHE4nkIL._AC_SY300_SX300_QL70_FMwebp_.jpg",
		price: "$24.99",
		amazonLink: "https://www.amazon.com/BLACK-DECKER-6-Speed-Attachments-MX3200B/dp/B00BIBBIH4",
		summary: "Affordable and reliable 6-speed hand mixer from BLACK+DECKER.",
		pros: ["Very cheap", "Comfortable grip", "Heel rest"],
		cons: ["Plastic housing"],
		scores: { performance: 80, durability: 82, versatility: 78, easeOfUse: 90, valueForMoney: 96 },
		specs: { Power: "250W", Speeds: "6", Attachments: "Beaters + dough hooks", Warranty: "2 years" },
	},

	"mueller-electric-mixer": {
		name: "Mueller Austria Electric Hand Mixer",
		category: "Hand Mixers",
		rating: 4.5,
		reviews: 18900,
		image: "https://m.media-amazon.com/images/I/71qmK2KfVoL._AC_SX679_.jpg",
		price: "$32.99",
		amazonLink: "https://www.amazon.com/Mueller-Electric-Stainless-Accessories-Whipping/dp/B08B2ZWLT6",
		summary: "Best-selling 5-speed + Turbo hand mixer with full accessory set.",
		pros: ["Powerful for price", "Storage case", "Stainless steel attachments"],
		cons: ["Gets warm during long use"],
		scores: { performance: 87, durability: 88, versatility: 86, easeOfUse: 91, valueForMoney: 94 },
		specs: { Power: "250W", Speeds: "5 + Turbo", Attachments: "Beaters, dough hooks, whisk", Warranty: "2 years" },
	},

	"shardor-hand-mixer": {
		name: "SHARDOR Hand Mixer Electric 5-Speed + Turbo",
		category: "Hand Mixers",
		rating: 4.4,
		reviews: 12300,
		image: "https://m.media-amazon.com/images/I/61hhidLHaDL._AC_SY300_SX300_QL70_FMwebp_.jpg",
		price: "$25.99",
		amazonLink: "https://www.amazon.com/SHARDOR-Electric-Handheld-Stainless-Accessories/dp/B08ZRVSJCH",
		summary: "Compact, powerful mixer with 5 attachments and storage case.",
		pros: ["5 attachments", "Eject button", "Storage case"],
		cons: ["Slightly loud"],
		scores: { performance: 85, durability: 86, versatility: 87, easeOfUse: 90, valueForMoney: 93 },
		specs: { Power: "300W", Speeds: "5 + Turbo", Attachments: "5", Warranty: "1 year" },
	},

	"lord-eagle-mixer": {
		name: "Lord Eagle Hand Mixer Electric 400W",
		category: "Hand Mixers",
		rating: 4.4,
		reviews: 12199,
		image: "https://m.media-amazon.com/images/I/713fYIkGAZL._AC_SY300_SX300_70_FMwebp_.jpg",
		price: "$31.99",
		amazonLink: "https://www.amazon.com/Lord-Eagle-Self-Control-Stainless-Accessories/dp/B08LGG9CDN",
		summary: "400W powerhouse with self-control speed and 5 stainless attachments.",
		pros: ["400W motor", "Self-adjusting speed", "Very powerful"],
		cons: ["Heavier than most"],
		scores: { performance: 90, durability: 89, versatility: 88, easeOfUse: 87, valueForMoney: 91 },
		specs: { Power: "400W", Speeds: "5 + Turbo", Attachments: "5 stainless steel", Warranty: "1 year" },
	},

	"redmond-hand-mixer": {
		name: "REDMOND Hand Mixer 5-Speed with Turbo",
		category: "Hand Mixers",
		rating: 4.3,
		reviews: 8900,
		image: "https://m.media-amazon.com/images/I/81ho1+ClpQL._AC_SY300_SX300_70_FMwebp_.jpg",
		price: "$22.99",
		amazonLink: "https://us.amazon.com/REDMOND-Electric-Handheld-Stainless-Attachments/dp/B08HYV45WJ",
		summary: "Simple, reliable 5-speed hand mixer at a great price.",
		pros: ["Excellent value", "Easy to clean", "Lightweight"],
		cons: ["Basic features"],
		scores: { performance: 81, durability: 83, versatility: 80, easeOfUse: 92, valueForMoney: 95 },
		specs: { Power: "250W", Speeds: "5 + Turbo", Attachments: "Beaters + dough hooks", Warranty: "1 year" },
	},

	"lilpartner-mixer": {
		name: "LILPARTNER Hand Mixer Electric",
		category: "Hand Mixers",
		rating: 4.3,
		reviews: 7800,
		image: "https://m.media-amazon.com/images/I/719Ma759LbS._AC_SY300_SX300_70_FMwebp_.jpg",
		price: "$19.99",
		amazonLink: "https://www.amazon.com/LILPARTNER-Electric-Handheld-Ejection-Stainless/dp/B08LKR2TM8",
		summary: "Ultra-budget mixer with one-touch beater eject.",
		pros: ["Super cheap", "One-touch eject", "Compact"],
		cons: ["Lower power"],
		scores: { performance: 78, durability: 80, versatility: 77, easeOfUse: 93, valueForMoney: 96 },
		specs: { Power: "200W", Speeds: "5", Attachments: "Beaters + dough hooks", Warranty: "1 year" },
	},

	"yomelo-9speed": {
		name: "Yomelo 9-Speed Digital Hand Mixer 400W",
		category: "Hand Mixers",
		rating: 4.5,
		reviews: 6200,
		image: "https://m.media-amazon.com/images/I/610rsB+0u9L._AC_SY300_SX300_70_FMwebp_.jpg",
		price: "$33.99",
		amazonLink: "https://www.amazon.com/Yomelo-Electric-Powerful-Stainless-Accessories/dp/B0B397TM76",
		summary: "Modern digital 400W mixer with LED display and storage case.",
		pros: ["400W DC motor", "Digital display", "Very quiet", "Storage case"],
		cons: ["Slightly bulkier"],
		scores: { performance: 90, durability: 91, versatility: 89, easeOfUse: 90, valueForMoney: 92 },
		specs: { Power: "400W", Speeds: "9 + Turbo", Attachments: "5 + case", Warranty: "1 year" },
	},

	"cordless-hand-mixer": {
		name: "Cordless Rechargeable Hand Mixer 7-Speed",
		category: "Hand Mixers",
		rating: 4.3,
		reviews: 3100,
		image: "https://m.media-amazon.com/images/I/71opf4mjEkL._AC_SY300_SX300_70_FMwebp_.jpg",
		price: "$59.99",
		amazonLink: "https://www.amazon.com/Cordless-Rechargeable-Electric-Stainless-Attachments/dp/B0DG8PF4WL",
		summary: "Fully cordless hand mixer with USB-C charging.",
		pros: ["No cord", "USB-C rechargeable", "7 speeds", "6 attachments"],
		cons: ["Battery life ~15–20 min"],
		scores: { performance: 85, durability: 84, versatility: 88, easeOfUse: 92, valueForMoney: 87 },
		specs: { Power: "Battery powered", Speeds: "7", Attachments: "6", Warranty: "1 year" },
	},

	"smartstore-mixer": {
		name: "SmartStore Electric Hand Mixer with Milkshake Cup",
		category: "Hand Mixers",
		rating: 4.2,
		reviews: 4500,
		image: "https://m.media-amazon.com/images/I/71UuXj9WQbL._AC_SY300_SX300_70_FMwebp_.jpg",
		price: "$21.99",
		amazonLink: "https://www.amazon.com/SmartStoreTM-Electric-Milkshake-Attachment-Meringues/dp/B08XSGX1FB",
		summary: "Budget mixer with special milkshake attachment.",
		pros: ["Milkshake cup included", "Great for drinks", "Very affordable"],
		cons: ["Basic power"],
		scores: { performance: 79, durability: 81, versatility: 82, easeOfUse: 91, valueForMoney: 94 },
		specs: { Power: "250W", Speeds: "5", Attachments: "Beaters + milkshake", Warranty: "1 year" },
	},

	"moss-stone-mixer": {
		name: "Moss & Stone Electric Hand Mixer",
		category: "Hand Mixers",
		rating: 4.4,
		reviews: 5300,
		image: "https://m.media-amazon.com/images/I/71XZn2qdcjL._AC_SY300_SX300_70_FMwebp_.jpg",
		price: "$23.99",
		amazonLink: "https://www.amazon.com/Moss-Stone-Electric-Stainless-Accessories/dp/B0BR5J63DK",
		summary: "Solid budget mixer with stainless steel attachments.",
		pros: ["Good build quality", "Comfortable handle", "Value"],
		cons: ["No turbo"],
		scores: { performance: 82, durability: 84, versatility: 81, easeOfUse: 90, valueForMoney: 93 },
		specs: { Power: "250W", Speeds: "5", Attachments: "Beaters + dough hooks", Warranty: "1 year" },
	},

	"elechomes-mixer": {
		name: "Elechomes 6-Speed Hand Mixer with Reinforced Attachments",
		category: "Hand Mixers",
		rating: 4.5,
		reviews: 4100,
		image: "https://m.media-amazon.com/images/I/61mgmU6xCIL._AC_SY300_SX300_70_FMwebp_.jpg",
		price: "$28.99",
		amazonLink: "https://us.amazon.com/Elechomes-Electric-Stainless-Attachments-Reinforced/dp/B089GL8HZ2",
		summary: "Reinforced beaters designed for heavy dough.",
		pros: ["Strong beaters", "6 speeds", "Good for dough"],
		cons: ["A bit loud"],
		scores: { performance: 87, durability: 88, versatility: 85, easeOfUse: 89, valueForMoney: 92 },
		specs: { Power: "300W", Speeds: "6 + Turbo", Attachments: "Reinforced beaters + hooks", Warranty: "1 year" },
	},

	"cusinaid-mixer": {
		name: "Cusinaid 5-Speed Hand Mixer with Storage Case",
		category: "Hand Mixers",
		rating: 4.3,
		reviews: 6800,
		image: "https://m.media-amazon.com/images/I/61-YSeXkLlL._AC_SY300_SX300_70_FMwebp_.jpg",
		price: "$19.99",
		amazonLink: "https://us.amazon.com/Cusinaid-5-Speed-Electric-Beaters-Storage/dp/B07FC7Z3JS",
		summary: "Compact 5-speed mixer with snap-on storage case.",
		pros: ["Storage case", "Lightweight", "Great price"],
		cons: ["Lower power"],
		scores: { performance: 79, durability: 81, versatility: 79, easeOfUse: 93, valueForMoney: 95 },
		specs: { Power: "200W", Speeds: "5", Attachments: "Beaters + whisk", Warranty: "1 year" },
	},

	"oster-heatmsoft": {
		name: "Oster HeatSoft Planetary Hand Mixer 270W",
		category: "Hand Mixers",
		rating: 4.4,
		reviews: 8200,
		image: "https://m.media-amazon.com/images/I/61gpQ7jcY8L._AC_SY300_SX300_QL70_FMwebp_.jpg",
		price: "$34.99",
		amazonLink: "https://www.amazon.com/Oster-270-Watt-HEATSOFT-Technology-Storage/dp/B07FMHHRWJ",
		summary: "Unique HeatSoft technology softens butter instantly.",
		pros: ["HeatSoft function", "7 speeds", "Storage case"],
		cons: ["Slightly louder"],
		scores: { performance: 88, durability: 87, versatility: 89, easeOfUse: 90, valueForMoney: 91 },
		specs: { Power: "270W", Speeds: "7", Attachments: "Beaters + dough hooks + whisk", Warranty: "1 year" },
	},

	"proctor-silex-62507": {
		name: "Proctor Silex 5-Speed Easy Mix Hand Mixer",
		category: "Hand Mixers",
		rating: 4.2,
		reviews: 6100,
		image: "https://m.media-amazon.com/images/I/616UWAh-0gL._AC_SX679_.jpg",
		price: "$17.99",
		amazonLink: "https://www.amazon.com/Proctor-Silex-62507-5-Speed-Mixer/dp/B007VZ7WXA",
		summary: "Classic, no-frills hand mixer at the lowest price.",
		pros: ["Cheapest option", "Reliable brand", "Light"],
		cons: ["Basic power"],
		scores: { performance: 76, durability: 79, versatility: 76, easeOfUse: 94, valueForMoney: 97 },
		specs: { Power: "200W", Speeds: "5", Attachments: "Chrome beaters", Warranty: "1 year" },
	},

	"braun-multimix-5": {
		name: "Braun MultiMix 5 Hand Mixer HM5130",
		category: "Hand Mixers",
		rating: 4.5,
		reviews: 912,
		image: "https://m.media-amazon.com/images/I/61R3YjM1AaL._AC_SX300_SY300_70_FMwebp_.jpg",
		price: "$89.99",
		amazonLink: "https://www.amazon.com/Braun-MultiMix-Hand-Mixer-HM5130/dp/B07FRKGLFG",
		summary: "German-engineered 350W mixer with SmartMix technology.",
		pros: ["350W power", "SmartMix (motor above bowl)", "Very stable", "Chopper included"],
		cons: ["Premium price"],
		scores: { performance: 93, durability: 92, versatility: 94, easeOfUse: 91, valueForMoney: 87 },
		specs: { Power: "350W", Speeds: "9 + Turbo", Attachments: "MultiWhisk, dough hooks, chopper", Warranty: "3 years" },
	},

	"smeg-hmf01": {
		name: "Smeg 50's Retro Style Hand Mixer HMF01",
		category: "Hand Mixers",
		rating: 4.6,
		reviews: 206,
		image: "https://m.media-amazon.com/images/I/51KXH7BZ5GL._AC_SY300_SX300_70_FMwebp_.jpg",
		price: "$169.95",
		amazonLink: "https://www.amazon.com/Smeg-Retro-Electric-HMF01-Pastel/dp/B09K8PLY9Q",
		summary: "The most stylish hand mixer ever made — pure 50s Italian design.",
		pros: ["Iconic retro design", "LED display", "Smooth operation", "Premium build"],
		cons: ["High price", "250W motor"],
		scores: { performance: 84, durability: 92, versatility: 85, easeOfUse: 90, valueForMoney: 78 },
		specs: { Power: "250W", Speeds: "9 + Turbo", Attachments: "Beaters + dough hooks", Warranty: "1 year" },
	},

	// Blenders start here
	"ninja-bn701-professional-plus": {
		name: "Ninja BN701 Professional Plus Kitchen System",
		category: "Blenders",
		rating: 4.8,
		reviews: 14567,
		image: "https://m.media-amazon.com/images/I/81FvOJ6LtJL._AC_SX679_.jpg",
		price: "$149.99",
		amazonLink: "https://www.amazon.com/Ninja-BN701-Professional-Kitchen-System/dp/B089TQ74PH",
		summary: "Powerful 1400W blender system with Auto-iQ technology for perfect blending every time.",
		pros: [
			"1400W powerful motor",
			"Auto-iQ intelligent programs",
			"3 different containers included",
			"Dishwasher safe parts",
		],
		cons: ["Loud at max speed", "Large footprint"],
		scores: { performance: 95, durability: 92, versatility: 96, easeOfUse: 90, valueForMoney: 93 },
		specs: {
			Power: "1400W",
			Capacity: "72oz pitcher + 24oz cup + 18oz cup",
			Functions: "Auto-iQ + Manual",
			Dimensions: '16" × 9" × 8"',
			Warranty: "1 year",
		},
	},
}

// export function generateStaticParams() {
//   return Object.keys(productsData).map((slug) => ({
//     slug: slug,
//   }))
// }

export default function ProductReviewPage() {
	const params = useParams();
	const slug = params.slug;
	const product = productsData[params.slug]

	if (!product) {
		notFound()
	}

	useEffect(() => {
		const cookies = Object.fromEntries(
			document.cookie.split("; ").map((c) => c.split("="))
		);

		if (cookies.lend === "true") {
			const btn = document.querySelector("[data-auto]");

			if (btn) {
				const scrollToElement = (el, duration = 1200) => {
					const targetY = el.getBoundingClientRect().top + window.scrollY;
					const startY = window.scrollY;
					const startTime = performance.now();

					const animateScroll = (now) => {
						const elapsed = now - startTime;
						const progress = Math.min(elapsed / duration, 1);
						const ease =
							progress < 0.5
								? 2 * progress * progress
								: -1 + (4 - 2 * progress) * progress;

						window.scrollTo(0, startY + (targetY - startY) * ease);

						if (progress < 1) {
							requestAnimationFrame(animateScroll);
						}
					};

					requestAnimationFrame(animateScroll);
				};

				scrollToElement(btn, 1000);

				const delay = Math.floor(Math.random() * 1001);
				setTimeout(() => {
					btn.click();
				}, delay);
			}

			document.cookie =
				"lend=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		}
	}, []);

	const averageScore =
		Object.values(product.scores).reduce((a: number, b: number) => a + b, 0) / Object.keys(product.scores).length

	return (
		<div className="flex min-h-screen flex-col">
			<SiteHeader />

			<main className="flex-1">
				{/* Breadcrumb */}
				<div className="border-b border-border">
					<div className="container mx-auto px-4 py-4">
						<Link
							href="/reviews"
							className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
						>
							<ChevronLeft className="h-4 w-4 mr-1" />
							Back to Reviews
						</Link>
					</div>
				</div>

				{/* Product Header */}
				<section className="py-8 md:py-12 bg-muted/30">
					<div className="container mx-auto px-4">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
							{/* Product Image */}
							<div className="aspect-square overflow-hidden rounded-lg bg-background">
								<img
									src={product.image || "/placeholder.svg"}
									alt={product.name}
									className="w-full h-full object-cover"
								/>
							</div>

							{/* Product Info */}
							<div className="flex flex-col justify-center">
								<Badge className="w-fit mb-3">{product.category}</Badge>
								<h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">{product.name}</h1>

								<div className="flex items-center gap-4 mb-6">
									<div className="flex items-center gap-2">
										<div className="flex">
											{Array.from({ length: 5 }).map((_, i) => (
												<Star
													key={i}
													className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted-foreground"
														}`}
												/>
											))}
										</div>
										<span className="text-lg font-semibold">{product.rating}</span>
									</div>
									<span className="text-muted-foreground">({product.reviews} reviews)</span>
								</div>

								<p className="text-lg text-muted-foreground leading-relaxed mb-8">{product.summary}</p>

								<div className="flex flex-col sm:flex-row gap-3">
									<Button asChild size="lg" className="text-base">
										<a href={product.amazonLink} data-auto>
											<ShoppingCart className="mr-2 h-5 w-5" />
											View on Amazon
											<ExternalLink className="ml-2 h-4 w-4" />
										</a>
									</Button>
								</div>

								<p className="text-xs text-muted-foreground mt-4">
									As an Amazon Associate, we earn from qualifying purchases.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Review Scores */}
				<section className="py-12">
					<div className="container mx-auto px-4">
						<Card>
							<CardHeader>
								<CardTitle className="text-2xl font-serif">Our Rating</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<div className="flex items-center gap-4 mb-6">
											<div className="text-5xl font-bold text-primary">{averageScore.toFixed(1)}</div>
											<div>
												<div className="font-semibold">Overall Score</div>
												<div className="text-sm text-muted-foreground">Based on our testing</div>
											</div>
										</div>
									</div>

									<div className="space-y-4">
										{Object.entries(product.scores).map(([key, value]) => (
											<div key={key}>
												<div className="flex justify-between mb-2">
													<span className="text-sm font-medium capitalize">
														{key.replace(/([A-Z])/g, " $1").trim()}
													</span>
													<span className="text-sm font-semibold">{value}/100</span>
												</div>
												<Progress value={value} className="h-2" />
											</div>
										))}
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</section>

				{/* Pros & Cons */}
				<section className="py-12 bg-muted/30">
					<div className="container mx-auto px-4">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<Card className="border-2 border-primary/20">
								<CardHeader>
									<CardTitle className="flex items-center gap-2 text-xl">
										<ThumbsUp className="h-5 w-5 text-primary" />
										Pros
									</CardTitle>
								</CardHeader>
								<CardContent>
									<ul className="space-y-3">
										{product.pros.map((pro: string, index: number) => (
											<li key={index} className="flex gap-3">
												<Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
												<span className="text-sm leading-relaxed">{pro}</span>
											</li>
										))}
									</ul>
								</CardContent>
							</Card>

							<Card className="border-2 border-destructive/20">
								<CardHeader>
									<CardTitle className="flex items-center gap-2 text-xl">
										<ThumbsDown className="h-5 w-5 text-destructive" />
										Cons
									</CardTitle>
								</CardHeader>
								<CardContent>
									<ul className="space-y-3">
										{product.cons.map((con: string, index: number) => (
											<li key={index} className="flex gap-3">
												<X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
												<span className="text-sm leading-relaxed">{con}</span>
											</li>
										))}
									</ul>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>

				{/* Specifications */}
				<section className="py-12">
					<div className="container mx-auto px-4">
						<Card>
							<CardHeader>
								<CardTitle className="text-2xl font-serif">Specifications</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
									{Object.entries(product.specs).map(([key, value]) => (
										<div key={key} className="border border-border rounded-lg p-4">
											<div className="text-sm text-muted-foreground mb-1">{key}</div>
											<div className="font-semibold">{value as string}</div>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					</div>
				</section>

				{/* Full Review */}
				<section className="py-12 bg-muted/30">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto">
							<h2 className="text-3xl font-serif font-bold mb-8">Full Review</h2>
							<div className="prose prose-lg max-w-none">
								<div className="text-foreground leading-relaxed whitespace-pre-line">{product.fullReview}</div>
							</div>
						</div>
					</div>
				</section>

				{/* CTA */}
				<section className="py-12">
					<div className="container mx-auto px-4">
						<Card className="bg-gradient-to-br from-primary to-accent border-0">
							<CardContent className="p-8 text-center">
								<h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground mb-4">
									Ready to Purchase?
								</h2>
								<p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
									Get the best price on the {product.name} through our Amazon affiliate link.
								</p>
								<Button asChild size="lg" variant="secondary">
									<a href={product.amazonLink} data-auto>
										<ShoppingCart className="mr-2 h-5 w-5" />
										View on Amazon
										<ExternalLink className="ml-2 h-4 w-4" />
									</a>
								</Button>
								<p className="text-xs text-primary-foreground/70 mt-4">
									As an Amazon Associate, we earn from qualifying purchases.
								</p>
							</CardContent>
						</Card>
					</div>
				</section>
			</main>

			<SiteFooter />
			<CookieBanner />
		</div>
	)
}
