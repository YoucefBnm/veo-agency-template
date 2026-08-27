'use client';

import { Logo } from '@/components/logo';
import Link from 'next/link';
import { Header } from '../systaliko-ui/header';
import { HTMLMotionProps, motion, Variants } from 'motion/react';
import React from 'react';
import { Button } from '../ui/button';
import {
  AnimatedMenu,
  AnimatedMenuButton,
  AnimatedMenuButtonLabel,
  AnimatedMenuButtonToggleIcon,
  AnimatedMenuItem,
  AnimatedMenuList,
} from '../systaliko-ui/animated-menu';
import { ModeToggle } from '@/components/mode-toggle';
const NAV_LINKS = [
  {
    id: 'link-home',
    label: 'Home',
    href: '/',
  },
  {
    id: 'link-about',
    label: 'About',
    href: '#',
  },
  {
    id: 'link-services',
    label: 'Services',
    href: '#',
  },
  {
    id: 'link-work',
    label: 'Work',
    href: '#',
  },
];

function NavbarLogo() {
  return (
    <Link href="/" className="block p-0.5">
      <Logo className="size-6.5" />
    </Link>
  );
}
function DesktopNavigationItem({
  isHoverd,
  className,
  children,
  ...props
}: HTMLMotionProps<'li'> & { isHoverd: boolean }) {
  return (
    <motion.li
      className="relative px-4 py-1.5 rounded-md text-primary-foreground dark:text-popover-foreground text-sm font-medium "
      {...props}
    >
      {isHoverd && (
        <motion.div
          layoutId="navbar-desktop-navigation"
          className="rounded-[inherit] absolute inset-0 bg-accent"
          transition={{
            type: 'spring',
            stiffness: 120,
            damping: 18,
            mass: 0.8,
          }}
        />
      )}

      <span className="relative z-2 mix-blend-difference">
        {children as React.ReactNode}
      </span>
    </motion.li>
  );
}

function MobileNavigation() {
  return (
    <AnimatedMenu className="block md:hidden">
      <AnimatedMenuButton>
        <AnimatedMenuButtonToggleIcon />
        <AnimatedMenuButtonLabel className="font-semibold" />
      </AnimatedMenuButton>

      <AnimatedMenuList className="bg-popover ring ring-ring/10 shadow-2xs rounded text-popover-foreground flex items-center justify-center">
        <div className="*:transition-blur *:duration-300 [&:hover>*]:blur-[2px] [&>*:hover]:blur-none w-full ">
          {NAV_LINKS.map((item, i) => (
            <AnimatedMenuItem
              className="size-full border-b text-sm font-medium"
              key={item.id}
              order={i}
            >
              <Link
                className="block px-6 py-2"
                href={item.href}
                title={item.label}
              >
                {item.label}
              </Link>
            </AnimatedMenuItem>
          ))}
        </div>
      </AnimatedMenuList>
    </AnimatedMenu>
  );
}
function DesktopNavigation() {
  const [hovredItem, setHoveredItem] =
    React.useState<(typeof NAV_LINKS)[number]['id']>('link-home');

  return (
    <ul
      id="navbar-desktop-navigation"
      className="hidden md:flex items-center gap-0.5 list-none  p-0.5"
    >
      {NAV_LINKS.map((link) => (
        <DesktopNavigationItem
          key={link.id}
          isHoverd={hovredItem === link.id}
          className="hover:bg-foreground/10"
          onMouseEnter={() => setHoveredItem(link.id)}
          onMouseLeave={() => setHoveredItem('link-home')}
        >
          <Link className="block" href={link.href}>
            {link.label}
          </Link>
        </DesktopNavigationItem>
      ))}
    </ul>
  );
}
export function Navbar() {
  return (
    <Header className="fixed top-2 left-0 w-full z-999 flex justify-center items-center">
      <div className="container max-w-3xl h-12 bg-sidebar/80 backdrop-blur mx-4 px-4 rounded-xl ring ring-ring/25 shadow-xs flex items-center gap-4 justify-between">
        <NavbarLogo />

        <nav className="flex items-center gap-2">
          <DesktopNavigation />
          <Button variant="outline" className=" z-999" size="sm">
            Book a meeting
          </Button>
          <MobileNavigation />
          <ModeToggle className="ml-2 size-7" />
        </nav>
      </div>
    </Header>
  );
}
