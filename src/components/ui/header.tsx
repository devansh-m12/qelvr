import Link from "next/link";
import { Github } from "lucide-react";
import { Button } from "./button";

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
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <Button asChild>
            <Link href="/signin">Sign In</Link>
          </Button>
        </div>
      </div>
    </header>
  );
} 