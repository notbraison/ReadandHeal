import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { Link, usePage } from '@inertiajs/react';

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    useSidebar,
} from '@/components/ui/sidebar';
import { dashboard, home } from '@/routes';
import { type NavItem } from '@/types';
import {
    BookOpenText,
    Folder,
    House,
    LayoutGrid,
    PanelLeft,
} from 'lucide-react';
import AppLogo from './app-logo';

const footerNavItems: NavItem[] = [];

export function AppSidebar() {
    const { toggleSidebar, state } = useSidebar();
    const isCollapsed = state === 'collapsed';

    // ✅ Hook is now inside component
    const { auth } = usePage().props as { auth?: { user?: any } };
    const isAuthenticated = Boolean(auth?.user);

    // ✅ Nav items built AFTER hooks
    const mainNavItems: NavItem[] = [
        {
            title: 'Home',
            href: home(),
            icon: House,
        },
        ...(isAuthenticated
            ? [
                  {
                      title: 'Library',
                      href: '/library',
                      icon: Folder,
                  },
                  {
                      title: 'Dashboard',
                      href: dashboard(),
                      icon: LayoutGrid,
                  },
              ]
            : []),
    ];

    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader className="border-b border-sidebar-border/50 p-4">
                <div className="flex flex-col items-center gap-2">
                    <Link
                        href={home()}
                        prefetch
                        className={`flex items-center gap-2 ${
                            isCollapsed ? 'hidden' : ''
                        }`}
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-black dark:bg-slate-900">
                            <AppLogo />
                        </div>
                        {!isCollapsed && (
                            <span className="text-lg font-semibold text-foreground">
                                Read & Heal
                            </span>
                        )}
                    </Link>

                    {isCollapsed ? (
                        <button
                            onClick={toggleSidebar}
                            className="mt-2 rounded-md p-1.5 transition-colors hover:bg-accent"
                        >
                            <PanelLeft className="h-4 w-4" />
                        </button>
                    ) : (
                        <div
                            className={`mt-2 flex w-full items-center ${
                                isAuthenticated
                                    ? 'justify-between'
                                    : 'justify-center'
                            }`}
                        >
                            {isAuthenticated && (
                                <button
                                    onClick={() => {
                                        /* start new read logic */
                                    }}
                                    className="flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium hover:bg-accent"
                                >
                                    <BookOpenText className="h-4 w-4" />
                                    New Read
                                </button>
                            )}

                            <button
                                onClick={toggleSidebar}
                                className="rounded-md p-1.5 transition-colors hover:bg-accent"
                            >
                                <PanelLeft className="h-4 w-4" />
                            </button>
                        </div>
                    )}
                </div>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} className="mt-4" />

                {!isCollapsed && isAuthenticated && (
                    <div className="mt-4 px-4">
                        <h3 className="mb-2 text-xs font-semibold text-muted-foreground uppercase">
                            Reading
                        </h3>
                        <ul className="space-y-1">
                            <li>
                                <Link
                                    href="/read/book-1"
                                    className="text-sm hover:underline"
                                >
                                    Continue Reading Firm 8
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
            </SidebarFooter>
        </Sidebar>
    );
}
