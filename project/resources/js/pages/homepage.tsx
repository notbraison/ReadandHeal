import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';``
import CDescription from '@/components/CDescription';
import Services from '@/components/Services';
import { Relationships } from '@/components/Services';
import { Teensadolescent } from '@/components/Services';
import { Marriage } from '@/components/Services';
import { Businness } from '@/components/Services';
import { Education } from '@/components/Services';
import { TechnologyandEducation } from '@/components/Services';
import { Parenting } from '@/components/Services';
export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />
            <AppLayout>
                <div className="flex h-full flex-1 flex-col items-center justify-center rounded-xl p-4">
                    <div className="max-w-2xl text-center">
                    <div>
                <CDescription/>
               
                <Services/>
                <Relationships/>
                <Teensadolescent/>
                <Marriage/>
                <Businness/>
                <Education/>
                <TechnologyandEducation/>
                <Parenting/>
             </div>
                    </div>

            </div>
            
            </AppLayout>
        </>
    );
}
