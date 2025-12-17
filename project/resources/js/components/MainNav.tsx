import { Link, router, usePage } from '@inertiajs/react';
import * as React from 'react';

import { Menu } from 'lucide-react';

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

// --- Helper Components ---

const ListItem = React.forwardRef<
    HTMLAnchorElement,
    React.ComponentPropsWithoutRef<'a'> & { title: string }
>(({ className, title, children, href }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    href={href || '#'}
                    ref={ref}
                    className={`block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
                >
                    <div className="text-sm leading-none font-medium">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = 'ListItem';

// --- Read & Heal Specific Data ---

const therapeuticCategories: {
    title: string;
    href: string;
    description: string;
}[] = [
    {
        title: 'Relationships',
        href: '/services/relationships',
        description: 'Healing broken bonds and building healthier connections.',
    },
    {
        title: 'Teens & Adolescence',
        href: '/services/teens',
        description:
            'Guided reading for navigating identity and growth challenges.',
    },
    {
        title: 'Parenting Support',
        href: '/services/parenting',
        description: 'Tools for empathetic communication and family harmony.',
    },
    {
        title: 'Grief & Loss',
        href: '/services/grief',
        description: 'A gentle path through mourning and acceptance.',
    },
    {
        title: 'Anxiety & Stress',
        href: '/services/anxiety',
        description: 'Mindfulness and grounding techniques through literature.',
    },
    {
        title: 'Self-Esteem',
        href: '/services/self-esteem',
        description: 'Books to build core confidence and self-worth.',
    },
    // Add remaining 3 categories as needed...
];

// --- Routes / Types ---
import { dashboard, login, logout, register } from '@/routes';
import { type SharedData } from '@/types';

// --- Main Component ---

export function MainNav() {
    const { auth } = usePage<SharedData>().props;
    const isLoggedIn = Boolean(auth?.user);

    const handleLogout = () => {
        router.post(logout());
    };

    return (
        // Wrapper for the entire Navbar structure
        <div className="bg-background border-b border-border shadow-sm">
            <div className="container flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-6">
                {/* 1. Brand/Logo (Left) */}
                <div className="flex items-center space-x-4">
                    <Link href={dashboard()} className="rh-brand-logo">
                        Read & Heal
                    </Link>
                </div>

                {/* 2. Desktop Navigation (Centered Links) */}
                <div className="hidden flex-1 justify-center lg:flex">
                    <NavigationMenu>
                        {/* NavigationMenuList is the flex container for the links, automatically aligning them horizontally */}
                        <NavigationMenuList className="flex items-center gap-1">
                            {/* Static Link: Library */}
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    asChild
                                    className={`${navigationMenuTriggerStyle()} min-w-[100px] justify-center text-[#f4c762] hover:bg-[#1e293b] hover:text-[#f4c762]`}
                                >
                                    <Link href="/library">booksh</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            {/* Dropdown: Services (Therapy Categories) */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="min-w-[100px] justify-center text-[#f4c762] hover:bg-[#1e293b] hover:text-[#f4c762]">
                                    Services
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                        {therapeuticCategories.map((item) => (
                                            <ListItem
                                                key={item.title}
                                                title={item.title}
                                                href={item.href}
                                            >
                                                {item.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* Static Link: About Us */}
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    asChild
                                    className={`${navigationMenuTriggerStyle()} min-w-[100px] justify-center text-[#f4c762] hover:bg-[#1e293b] hover:text-[#f4c762]`}
                                >
                                    <Link href="/about">About Us</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            {/* Static Link: Contact */}
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    asChild
                                    className={`${navigationMenuTriggerStyle()} min-w-[100px] justify-center text-[#f4c762] hover:bg-[#1e293b] hover:text-[#f4c762]`}
                                >
                                    <Link href="/contact">Contact</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* 3. Auth/User Buttons (Right) */}
                <div className="hidden items-center space-x-2 lg:flex">
                    {isLoggedIn ? (
                        <Button
                            onClick={handleLogout}
                            variant="outline"
                            className="border-[#f4c762] text-[#f4c762] hover:bg-red-50 hover:text-red-600"
                        >
                            Logout
                        </Button>
                    ) : (
                        <>
                            <Button
                                variant="outline"
                                asChild
                                className="text-primary border-primary hover:bg-primary/10"
                            >
                                <Link href={login()}>Log In</Link>
                            </Button>
                            <Button
                                asChild
                                className="bg-[#f4c762] hover:bg-[#d9aa35]"
                            >
                                <Link href={register()}>Join Read & Heal</Link>
                            </Button>
                        </>
                    )}
                </div>

                {/* 4. Mobile Navigation (Hidden on large screens) */}
                <Sheet>
                    <SheetTrigger asChild className="lg:hidden">
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent
                        side="right"
                        className="w-[300px] sm:w-[400px]"
                    >
                        <nav className="flex flex-col space-y-4 pt-6 text-[#f4c762]">
                            <Link
                                href={dashboard()}
                                className="text-lg font-semibold"
                            >
                                Home
                            </Link>
                            <Link
                                href="/library"
                                className="text-lg font-semibold"
                            >
                                Library
                            </Link>
                            <Link
                                href="/services"
                                className="text-lg font-semibold"
                            >
                                Services
                            </Link>
                            <Link
                                href="/about"
                                className="text-lg font-semibold"
                            >
                                About Us
                            </Link>
                            <Link
                                href="/contact"
                                className="text-lg font-semibold"
                            >
                                Contact
                            </Link>

                            <div className="mt-6 flex flex-col space-y-2">
                                {isLoggedIn ? (
                                    <Button
                                        onClick={handleLogout}
                                        variant="outline"
                                    >
                                        Logout
                                    </Button>
                                ) : (
                                    <>
                                        <Button asChild variant="secondary">
                                            <Link href={login()}>Log In</Link>
                                        </Button>
                                        <Button
                                            asChild
                                            className="bg-[#f4c762] hover:bg-[#d9aa35]"
                                        >
                                            <Link href={register()}>Join</Link>
                                        </Button>
                                    </>
                                )}
                            </div>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
}
