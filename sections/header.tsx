import { Logo } from "@/components/logo";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { PlayIcon } from "lucide-react";
import Link from "next/link";

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
    }
]

export function Header() {
    return (
        <header
        // className="supports-[backdrop-blur]:bg-background/90 sticky top-0 flex justify-center z-50 w-full border-b border-border bg-background/50 backdrop-blur-lg"
        className="flex justify-center z-50 w-full border-b border-border bg-background/50"

      >
        <div className="container flex h-16 justify-between items-center gap-4">
          <Link className="flex-grow-[1] inline-flex items-center gap-1" href="/">
            <div className="size-6">
                <Logo className="size-full" />
                </div>
            <span className="inline-block text-lg font-bold">Veo</span>
          </Link>

          <ul className="flex flex-grow-[1] justify-center items-center gap-4">
            {
                LINKS.map((link) => (
                    <li key={link.label}>
                        <Link className="text-foreground/50 hover:text-foreground font-medium" href={link.href}>
                           {link.label}
                        </Link>
                    </li>
                ))
            }
            </ul>
            <div className="flex gap-4 items-center">
            <Button variant={'outline'}>
                Book a meeting <PlayIcon />
            </Button>

            <ModeToggle />
          </div>
          </div>
      </header>
    )
}