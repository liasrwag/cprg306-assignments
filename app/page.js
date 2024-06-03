import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="/week-2">Week 2 Assignments</Link>
      <Link href="/week-3/page">Week 3 Assignments</Link>
      <Link href="/week-4/functions">Week 4 Assignments</Link>

    </div>
  );
}