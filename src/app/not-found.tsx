import Link from "next/link";
import { FiAlertCircle, FiHome } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-6 px-4">
      <div className="p-4 rounded-full bg-teal-50 text-teal-600">
        <FiAlertCircle className="w-12 h-12" />
      </div>
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-stone-900">404 — Page Not Found</h1>
        <p className="text-stone-600 text-sm max-w-md">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
      </div>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 hover:bg-teal-600 text-white rounded-full text-sm font-semibold transition-all"
      >
        <FiHome className="w-4 h-4" />
        <span>Return to Home</span>
      </Link>
    </div>
  );
}
