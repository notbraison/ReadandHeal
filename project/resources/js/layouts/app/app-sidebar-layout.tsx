import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { AppSidebar } from '@/components/app-sidebar';
import { AppSidebarHeader } from '@/components/app-sidebar-header';
import Footer from '@/components/footer';
import { Navbar } from '@/components/Navbar';
import { type BreadcrumbItem } from '@/types';
import { type PropsWithChildren } from 'react';

export default function AppSidebarLayout({
    children,
    breadcrumbs = [],
}: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    return (
        <AppShell variant="sidebar">
            <AppSidebar />

            <AppContent
                variant="sidebar"
                className="flex min-h-screen flex-col overflow-x-hidden pt-16 transition-all duration-300"
            >
                <Navbar />
                <AppSidebarHeader breadcrumbs={breadcrumbs} />

                {/* Page content */}
                <main className="flex-1">{children}</main>

                {/* Footer */}
                <Footer />
            </AppContent>
        </AppShell>
    );
}
