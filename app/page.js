import { UserButton, SignedIn } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <header className="w-full bg-white shadow-sm sticky top-0 z-20">
        <nav className="flex items-center justify-between max-w-screen-xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 cursor-pointer select-none">
            <span className="inline-block bg-violet-100 p-2 rounded-full">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="16" fill="#6366F1"/>
                <ellipse cx="11.5" cy="16" rx="2.5" ry="3" fill="white"/>
                <ellipse cx="20.5" cy="16" rx="2.5" ry="3" fill="white"/>
                <ellipse cx="11.5" cy="16" rx="1" ry="1.2" fill="#6366F1"/>
                <ellipse cx="20.5" cy="16" rx="1" ry="1.2" fill="#6366F1"/>
              </svg>
            </span>
            <span className="text-xl font-bold text-violet-700 tracking-tight">HrXAi</span>
          </div>
          <ul className="hidden md:flex gap-8 text-base font-medium text-gray-700">
            <li><a href="/dashboard" className="hover:text-violet-600 transition">Dashboard</a></li>
            <li><a href="#" className="hover:text-violet-600 transition">Questions</a></li>
            <li><a href="#" className="hover:text-violet-600 transition">Upgrade</a></li>
            <li><a href="#" className="hover:text-violet-600 transition">How its works?</a></li>
          </ul>
          <div className="flex items-center gap-2">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </nav>
      </header>
      {/* Main Section */}
      <section className="flex-1 flex items-center justify-center">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:py-24 lg:py-32 w-full flex flex-col items-center justify-center">
          {/* New Release Badge */}
          <div className="flex justify-center mb-8 w-full">
            <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-xl border border-gray-200 text-lg font-medium text-gray-700 shadow-lg transition-all duration-300 hover:shadow-violet-400/40 hover:border-violet-400 hover:ring-2 hover:ring-violet-200" style={{ boxShadow: '0 4px 24px 0 rgba(124,58,237,0.15)' }}>
              <span className="inline-block bg-violet-100 p-2 rounded-full mr-2">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="16" fill="#6366F1"/>
                  <ellipse cx="11.5" cy="16" rx="2.5" ry="3" fill="white"/>
                  <ellipse cx="20.5" cy="16" rx="2.5" ry="3" fill="white"/>
                  <ellipse cx="11.5" cy="16" rx="1" ry="1.2" fill="#6366F1"/>
                  <ellipse cx="20.5" cy="16" rx="1" ry="1.2" fill="#6366F1"/>
                </svg>
              </span>
              <span>New Release</span>
              <span className="mx-2">|</span>
              <a href="#" className="text-violet-600 hover:underline">See what's new →</a>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-center">
            Your Personal <span className="text-violet-600">AI Interview Coach</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 mb-10 max-w-2xl mx-auto text-center">
            Double your chances of landing that job offer with our AI-powered interview prep.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
            <a href="/dashboard" className="inline-block rounded bg-violet-600 px-8 py-3 text-lg font-semibold text-white shadow hover:bg-violet-700 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-violet-300 transition-all duration-200">Get Started</a>
            <a href="#" className="inline-block rounded border border-gray-300 bg-white px-8 py-3 text-lg font-semibold text-violet-600 hover:bg-violet-50 hover:border-violet-400 hover:text-violet-700 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-violet-200 transition-all duration-200">Learn More</a>
          </div>
        </div>
      </section>
    </div>
  );
}
