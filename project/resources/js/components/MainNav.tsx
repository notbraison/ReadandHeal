import * as React from 'react';
// We'll assume you use the Link component from 'react-router-dom'
// or an Inertia-specific Link component, instead of 'next/link'.
import { Link } from '@inertiajs/react';

import { BookOpen, Heart, Menu, Phone } from 'lucide-react';

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'; // Adjust paths based on your actual structure

import { Button } from '@/components/ui/button'; // Assuming you use the Button component
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'; // For mobile menu

// --- Helper Components ---

// Reusable component for the dropdown list items
const ListItem = React.forwardRef<
    React.ElementRef<'a'>,
    React.ComponentPropsWithoutRef<'a'> & { title: string }
>(({ className, title, children, href, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    to={href || '#'} // Use 'to' for react-router-dom
                    className="block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    {...props}
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

// Your 9 therapy categories/services (for the Services dropdown)
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

// --- Main Component ---

interface MainNavProps {
    isLoggedIn: boolean;
    // You would pass the actual logout function here
    onLogout?: () => void;
}

export function MainNav({ isLoggedIn, onLogout }: MainNavProps) {
    // Note: Assuming useIsMobile() hook is available for responsiveness.
    // If not, use standard Tailwind responsive classes.

    return (
        // Wrapper for the entire Navbar structure
        <div className="border-b bg-white">
            <div className="container flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-6">
                {/* 1. Brand/Logo */}
                <div className="flex items-center space-x-4">
                    <Link
                        to="/"
                        className="text-xl font-bold tracking-tight text-[#5C946E]"
                    >
                        <Heart className="mr-1 inline-block h-6 w-6" />
                        Read & Heal
                    </Link>
                </div>

                {/* 2. Desktop Navigation (Hidden on small screens) */}
                <NavigationMenu className="hidden lg:flex">
                    <NavigationMenuList>
                        {/* Static Link: Library */}
                        <NavigationMenuItem>
                            <Link to="/library" legacyBehavior passHref>
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                >
                                    <BookOpen className="mr-2 h-4 w-4" />
                                    Library
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>

                        {/* Dropdown: Services (Therapy Categories) */}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>
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
                            <Link to="/about" legacyBehavior passHref>
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                >
                                    About Us
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>

                        {/* Static Link: Contact */}
                        <NavigationMenuItem>
                            <Link to="/contact" legacyBehavior passHref>
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                >
                                    <Phone className="mr-2 h-4 w-4" />
                                    Contact
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* 3. Auth/User Buttons (Desktop) */}
                <div className="hidden items-center space-x-2 lg:flex">
                    {isLoggedIn ? (
                        <>
                            <Button variant="ghost" asChild>
                                <Link to="/dashboard">Dashboard</Link>
                            </Button>
                            <Button
                                onClick={onLogout}
                                variant="outline"
                                className="border-[#5C946E] text-[#5C946E] hover:bg-red-50 hover:text-red-600"
                            >
                                Logout
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button variant="ghost" asChild>
                                <Link to="/login">Log In</Link>
                            </Button>
                            <Button
                                asChild
                                className="bg-[#5C946E] hover:bg-[#4A7A59]"
                            >
                                <Link to="/register">Join Read & Heal</Link>
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
                        <nav className="flex flex-col space-y-4 pt-6">
                            {/* Mobile Links */}
                            <Link to="/" className="text-lg font-semibold">
                                Home
                            </Link>
                            <Link
                                to="/library"
                                className="text-lg font-semibold"
                            >
                                Library
                            </Link>
                            <Link
                                to="/services"
                                className="text-lg font-semibold"
                            >
                                Services
                            </Link>
                            <Link to="/about" className="text-lg font-semibold">
                                About Us
                            </Link>
                            <Link
                                to="/contact"
                                className="text-lg font-semibold"
                            >
                                Contact
                            </Link>

                            {/* Mobile Auth Buttons */}
                            <div className="mt-6 flex flex-col space-y-2">
                                {isLoggedIn ? (
                                    <>
                                        <Button variant="ghost" asChild>
                                            <Link to="/dashboard">
                                                Dashboard
                                            </Link>
                                        </Button>
                                        <Button
                                            onClick={onLogout}
                                            variant="outline"
                                        >
                                            Logout
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        <Button asChild variant="secondary">
                                            <Link to="/login">Log In</Link>
                                        </Button>
                                        <Button
                                            asChild
                                            className="bg-[#5C946E] hover:bg-[#4A7A59]"
                                        >
                                            <Link to="/register">Join</Link>
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
