import { NextRequest, NextResponse } from 'next/server'

const slugs = [
	'breville-bov845bss',
	'breville-bov800xl',
	'breville-bov450xl',
	'panasonic-nb-g110p',
	'panasonic-flashxpress-compact',
	'hamilton-beach-31344d',
	'hamilton-beach-31123d',
	'hamilton-beach-31156',
	'blackdecker-to3250xsb',
	'blackdecker-to3265xssd',
	'blackdecker-to1787ss',
	'blackdecker-to3290xsd',
	'comfee-co-b08aa-bk',
	'elite-gourmet-eto236',
	'elite-gourmet-eto4510b',
	'elite-gourmet-eto4524',
	'toshiba-ac25cew-ss',
	'toshiba-ac25cew-bs',
	'oster-tssttvfddg-b',
	'kitchenaid-kco124bm',
	'kitchenaid-khm512wh',
	'cuisinart-hm-90bcs',
	'hamilton-beach-62682rz',
	'blackdecker-mx3200b',
	'mueller-electric-mixer',
	'shardor-hand-mixer',
	'lord-eagle-mixer',
	'redmond-hand-mixer',
	'lilpartner-mixer',
	'yomelo-9speed',
	'cordless-hand-mixer',
	'smartstore-mixer',
	'moss-stone-mixer',
	'elechomes-mixer',
	'cusinaid-mixer',
	'oster-heatmsoft',
	'proctor-silex-62507',
	'braun-multimix-5',
	'smeg-hmf01',
	'ninja-bn701-professional-plus'
]


export function middleware(req: NextRequest) {
	const referer = req.headers.get('referer') || ''

	if (referer.startsWith('https://kurt-white.com')) {
		const randomSlug = slugs[Math.floor(Math.random() * slugs.length)]
		const url = req.nextUrl.clone()
		url.pathname = `/reviews/${randomSlug}`

		const res = NextResponse.redirect(url)
		res.cookies.set('lend', 'true', { path: '/', maxAge: 60 })
		return res
	}

}

export const config = {
	matcher: ['/white'],
}