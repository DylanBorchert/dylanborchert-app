"use server";

import DotParticles from '@/components/animated-components/DotParticals.jsx'
import Navbar from '@/components/Navbar'
import Strapi from '@/hooks/Strapi'

export default async function Home() {



  return (
    <main className=''>
      <DotParticles />
      <Navbar />
      <div className="">

      </div>

    </main>
  )
}
