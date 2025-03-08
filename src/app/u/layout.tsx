'use client'

import { UserButton } from "@stackframe/stack";
import { useUser } from "@stackframe/stack";

export default function Layout({ children }: { children: React.ReactNode }) {
    const user = useUser({ or: 'redirect' });
  return <>
  <div>
      {children}
  </div>
  </>
}
