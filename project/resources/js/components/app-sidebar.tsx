import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    useSidebar,
} from '@/components/ui/sidebar';
import { dashboard, home } from '@/routes';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { Folder, House, LayoutGrid, PanelLeft } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Home',
        href: home(),
        icon: House,
    },
    {
        title: 'Library',
        href: '',
        icon: Folder,
    },
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
];

const footerNavItems: NavItem[] = [];

export function AppSidebar() {
    const { toggleSidebar, state } = useSidebar();
    const isCollapsed = state === 'collapsed';

    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader className="border-b border-sidebar-border/50 p-4">
                <div className="flex items-center justify-between gap-2">
                    <Link
                        href={home()}
                        prefetch
                        className="flex flex-1 items-center gap-2"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-black dark:bg-slate-900">
                            <AppLogo />
                        </div>
                        <div className="flex flex-col overflow-hidden">
                            <span
                                className={`truncate text-lg font-semibold whitespace-nowrap ${
                                    isCollapsed
                                        ? 'text-[#f4c762] dark:text-[#d9aa35]'
                                        : 'text-foreground'
                                }`}
                            >
                                Read & Heal
                            </span>
                        </div>
                    </Link>
                    <button
                        onClick={toggleSidebar}
                        className="ml-auto rounded-md p-1.5 transition-colors hover:bg-accent"
                    >
                        <PanelLeft className="h-4 w-4" />
                    </button>
                </div>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
            </SidebarFooter>
        </Sidebar>
    );
}
