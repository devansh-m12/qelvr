import Link from "next/link";
import { Github, Star } from "lucide-react";
import { Button } from "./button";
import { useEffect, useState } from "react";

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
  return (
    <header className="fixed top-0 w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50">
      <div className="flex h-16 items-center justify-between px-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-bold text-xl">
            Qelvr
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-neutral-500 hover:text-black dark:hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-neutral-500 hover:text-black dark:hover:text-white transition-colors">
              Pricing
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
          <Button asChild>
            <Link href="/signin">Sign In</Link>
          </Button>
        </div>
      </div>
    </header>
  );
} 