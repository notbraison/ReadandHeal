import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Facebook, Instagram, Music, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="border-t bg-background">
            {/* Offset footer to align with main content area when sidebar is present */}
            <div className="mx-auto max-w-7xl px-6 py-8 lg:ml-[var(--sidebar-width)]">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="rh-brand-logo text-lg">Read & Heal</div>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            Reading is a therapy for the mind and medicine for
                            the soul.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="space-y-3">
                        <h4 className="text-sm font-semibold tracking-wide">
                            About
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a href="#" className="hover:text-foreground">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-foreground">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-foreground">
                                    Support
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-sm font-semibold tracking-wide">
                            Resources
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a href="#" className="hover:text-foreground">
                                    Library
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-foreground">
                                    Articles
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-foreground">
                                    Community
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-3">
                        <h4 className="text-sm font-semibold tracking-wide">
                            Contact
                        </h4>
                        <p className="text-sm text-muted-foreground">
                            readandheal@gmail.com
                        </p>
                        <p className="text-sm text-muted-foreground">
                            +254 712 345 678
                        </p>
                    </div>
                </div>

                <Separator className="my-6" />

                <div className="flex flex-col items-center gap-3">
                    {/* Social Media Icons - Centered */}
                    <div className="flex items-center gap-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            aria-label="Twitter"
                        >
                            <Twitter className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            aria-label="Instagram"
                        >
                            <Instagram className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            aria-label="Facebook"
                        >
                            <Facebook className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" aria-label="TikTok">
                            <Music className="h-4 w-4" />
                        </Button>
                    </div>

                    {/* Copyright Text - Centered Below */}
                    <p className="text-center text-xs text-muted-foreground">
                        © {new Date().getFullYear()} Read & Heal. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
