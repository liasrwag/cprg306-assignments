import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='h-screen p-6'>
      <h1 className='mb-4'>CPRG 306: Web Development 2 - Assignments</h1>

      <div className='mb-2'>      
      <Link href="/week-2">Week 2 Assignments</Link></div>

      <div className='mb-2'>      
      <Link href="/week-3">Week 3 Assignments</Link></div>

      <div className='mb-2'>      
      <Link href="/week-4">Week 4 Assignments</Link></div>

      <div className='mb-2'>
      <Link href="/week-5">Week 5 Assignments</Link></div>

      <div className='mb-2'>
      <Link href="/week-6">Week 6 Assignments</Link></div>

      <div className='mb-2'>
      <Link href="/week-7">Week 7 Assignments</Link></div>

    </div>
  );
}