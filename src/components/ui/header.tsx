import Link from "next/link";
import { Github, Star } from "lucide-react";
import { Button } from "./button";
import { useEffect, useState } from "react";
import Image from "next/image";

function GitHubStarsBadge() {
  const [stars, setStars] = useState<number | null>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://api.github.com/repos/devansh-m12/qelvr')
      .then(res => res.json())
      .then(data => {
        if (data.stargazers_count !== undefined) {
          setStars(data.stargazers_count);
        }
      })
      .catch(() => {
        setStars(0);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="absolute -top-2 -right-2 flex items-center gap-0.5 text-xs font-medium bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 rounded-full px-1.5 py-0.5 transition-colors">
      <Star className="h-3 w-3" />
      <span>{isLoading ? "..." : (stars || 0).toLocaleString()}</span>
    </div>
  );
}

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
    <header className={`fixed top-0 w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50 transition-all duration-200 ${
      isScrolled ? 'shadow-sm' : ''
    }`}>
      <div className="flex h-16 items-center justify-between px-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <Link 
            href="/" 
            className="font-bold text-xl transition-transform hover:scale-105 duration-200"
          >
            <Image src="/icon.svg" alt="Qelvr" width={160} height={160} priority />
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link 
              href="#features" 
              className="text-neutral-500 hover:text-black dark:hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-current after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              Features
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
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
          <div className="flex items-center gap-2">
            <Button className="hidden sm:inline-flex border border-neutral-200 dark:border-neutral-800" asChild>
              <Link href="/signin">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
} 