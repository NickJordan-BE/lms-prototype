'use client';

import React from 'react'
import { useEffect } from 'react'
import styles from './page/module.css'
import Index from './components';

const Page = () => {

  useEffect( () => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();

      }
    )()
  }, [])

  return (
    <main className="main">
    <div>
      <Index />
    </div>
    </main>
  )
}

export default Page
