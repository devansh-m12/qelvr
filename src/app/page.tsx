"use client"

import dynamic from 'next/dynamic'
 
const ComingSoon = dynamic(() => import('@/components/home/coming-soon'), { ssr: false })

export default function Home() {
  return (
    <ComingSoon />
  );
}
