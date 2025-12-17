import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />
            <AppLayout>
                <div className="flex h-full flex-1 flex-col items-center justify-center rounded-xl p-4">
                    <div className="max-w-2xl text-center">
                        <h1 className="text-4xl font-bold text-[#1b1b18] dark:text-white">
                            Your New Homepage
                        </h1>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                            Start building your amazing application here.
                        </p>
                    </div>
                </div>
            </AppLayout>
        </>
    );
}
