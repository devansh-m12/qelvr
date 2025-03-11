import Link from "next/link";
import { Github, Star } from "lucide-react";
import { Button } from "./button";
import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * GitHubStarsBadge Component
 * Displays the number of GitHub stars for the repository in a floating badge
 * Fetches star count from GitHub API and handles loading/error states
 */
function GitHubStarsBadge() {
  // Track star count and loading state
  const [stars, setStars] = useState<number | null>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // Fetch star count from GitHub API
    fetch('https://api.github.com/repos/devansh-m12/qelvr')
      .then(res => res.json())
      .then(data => {
        if (data.stargazers_count !== undefined) {
          setStars(data.stargazers_count);
        }
      })
      .catch(() => {
        // Reset stars to 0 on error
        setStars(0);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="absolute -top-2 -right-2 flex items-center gap-0.5 text-xs font-medium bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 rounded-full px-1.5 py-0.5 transition-colors">
      <Star className="h-3 w-3" />
      <span>{isLoading ? "..." : (stars || 0).toLocaleString()}</span>
    </div>
  );
}

/**
 * Header Component
 * Main navigation header for the application
 * Features:
 * - Fixed positioning with backdrop blur
 * - Responsive design with mobile considerations
 * - Dark mode support
 * - GitHub integration
 */
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Fixed header with blur effect and dark mode support
    <header className={`fixed top-0 w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50 transition-all duration-200 ${
      isScrolled ? 'shadow-sm' : ''
    }`}>
      <div className="flex h-16 items-center justify-between px-4 max-w-7xl mx-auto">
        {/* Left section: Logo and Navigation */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link 
            href="/" 
            className="font-bold text-xl transition-transform hover:scale-105 duration-200"
          >
            <Image src="/icon.svg" alt="Qelvr" width={160} height={160} priority />
          </Link>
          {/* Navigation Links - Hidden on mobile */}
          <nav className="hidden md:flex gap-6">
            <Link 
              href="#features" 
              className="text-neutral-500 hover:text-black dark:hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-current after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              Features
            </Link>
          </nav>
        </div>

        {/* Right section: GitHub and Sign In */}
        <div className="flex items-center gap-4">
          {/* GitHub Link with Stars Badge */}
          <div className="flex items-center">
            <a
              href="https://github.com/devansh-m12/qelvr"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-2"
            >
              <div className="text-neutral-500 group-hover:text-black dark:group-hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </div>
              <GitHubStarsBadge />
            </a>
          </div>
          {/* Sign In Button */}
          <Button asChild>
            <Link href="/handler/sign-in">Sign In</Link>
          </Button>
        </div>
      </div>
    </header>
  );
} 