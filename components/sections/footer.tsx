import GithubIcon from '@/components/icons/github-icon';
import LinkedinIcon from '@/components/icons/linkedin-icon';
import XIcon from '@/components/icons/x-icon';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Testimonials } from './testimonials';

const SOCIAL_LINKS = [
  {
    id: 'twitter-social-link',
    href: 'https://twitter.com/veo',
    icon: XIcon,
  },
  {
    id: 'linkedin-social-link',
    href: 'https://www.linkedin.com/company/veo',
    icon: LinkedinIcon,
  },
  {
    id: 'github-social-link',
    href: 'https://github.com/veo',
    icon: GithubIcon,
  },
];
const LINKS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Services',
    href: '/services',
  },
  {
    label: 'Pricing',
    href: '/pricing',
  },
];

function FooterNavigation() {
  return (
    <nav className="space-y-4 font-medium">
      <h3 className="font-medium">Sitemap</h3>

      <ul className="space-y-2">
        {LINKS.map((link) => (
          <li key={link.label}>
            <Link
              className="text-foreground/75 hover:text-foreground text-sm"
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
function FooterCta() {
  return (
    <div className="space-y-4">
      <div className="flex gap-1 items-center">
        <Logo className="size-6" />
        <span className="font-bold text-xl">veo</span>
      </div>
      <p className="text-xs text-balance max-w-[45ch]">
        Focused strategy led studio that marries brand thinking with product
        design and frontend engineering to build digital experiences people
        remember.
      </p>

      <Button className="" variant={'secondary'}>
        Start your project
      </Button>
    </div>
  );
}

export function FooterSocials() {
  return (
    <div className="space-y-4 ">
      <h3 className="font-medium">Follow us</h3>

      <div className="flex items-center opacity-75 hover:opacity-100 gap-2">
        {SOCIAL_LINKS.map((social) => (
          <div key={social.id}>
            <social.icon className="w-4" />
          </div>
        ))}
      </div>
    </div>
  );
}
export function Footer() {
  return (
    <footer className="relative">
      <Testimonials />

      <div className="py-16 px-8 bg-secondary text-secondary-foreground sticky bottom-0 left-0 w-full h-fit">
        <div className="container mx-auto flex flex-wrap justify-evenly items-start gap-8">
          <FooterCta />

          <FooterSocials />

          <FooterNavigation />
        </div>
      </div>
    </footer>
  );
}
