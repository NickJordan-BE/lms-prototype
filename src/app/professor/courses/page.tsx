import styles from './Courses.module.css';

export default function Courses() {
    const placeholders = Array.from({ length: 9 });

    return (
        <div className="min-h-screen px-8 py-4 bg-white text-black">
        {/* Top Navigation */}
        <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-medium">Bella</span>
            <div className="flex items-center gap-4">
            <span className="text-sm font-medium">Courses</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A4 4 0 0112 15h0a4 4 0 016.879 2.804M15 11a3 3 0 10-6 0 3 3 0 006 0z" />
            </svg>
            </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 mb-6 text-lg">
            <span className="font-semibold underline underline-offset-4">Courses</span>
            <span className="text-gray-600">Coming Soon</span>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {placeholders.map((_, i) => (
            <div
                key={i}
                className="aspect-video bg-gray-200 rounded-lg animate-pulse"
            />
            ))}
        </div>
        </div>
    );
};