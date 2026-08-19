import GithubIcon from '@/components/icons/github-icon';
import LinkedinIcon from '@/components/icons/linkedin-icon';
import XIcon from '@/components/icons/x-icon';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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
      <h3>Sitemap</h3>

      <ul className="space-y-2">
        {LINKS.map((link) => (
          <li key={link.label}>
            <Link
              className="text-background/75 hover:text-background text-sm"
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
      <div className="flex gap-2 items-center">
        <Logo className="size-6" />
        <span className="font-bold text-2xl">veo</span>
      </div>
      <p className="text-muted text-sm text-balance max-w-[45ch]">
        Focused strategy led studio that marries brand thinking with product
        design and frontend engineering to build digital experiences people
        remember.
      </p>

      <Button className="brutal-shadow [--shadow-color:#222]">
        Start your project
      </Button>
    </div>
  );
}

export function FooterSocials() {
  return (
    <div className="space-y-4 ">
      <h3>Follow us</h3>

      <div className="flex gap-2">
        <p className="text-primary/75 hover:text-primary font-semibold text-sm uppercase tracking-wide">
          Linkedin
        </p>

        <p className="text-primary/75 hover:text-primary font-semibold text-sm uppercase tracking-wide">
          X
        </p>
        <p className="text-primary/75 hover:text-primary font-semibold text-sm uppercase tracking-wide">
          Github
        </p>
      </div>
    </div>
  );
}
export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-8">
      <div className="container mx-auto flex flex-wrap justify-between gap-8">
        <FooterCta />
        <FooterNavigation />
        <FooterSocials />
      </div>
    </footer>
  );
}
