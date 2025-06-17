import type { AstroInstance } from 'astro';
import { MessageCircleMore } from 'lucide-astro';

export interface SocialLink {
	name: string;
	url: string;
	icon: AstroInstance;
}

export default {
	title: 'Y-Art',
	favicon: 'favicon.ico',
	owner: 'Y-Art',
	profileImage: 'Y-ART.webp',
	socialLinks: [
		{
			name: 'WhatsApp',
			url: 'https://github.com/rockem/astro-photography-portfolio',
			icon: MessageCircleMore,
		} as SocialLink,
		// {
		// 	name: 'Instagram',
		// 	url: 'https://www.instagram.com',
		// 	icon: Instagram,
		// } as SocialLink,
	],
};
