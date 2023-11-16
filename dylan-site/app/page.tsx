"use server";

import DotParticles from '@/components/animated-components/DotParticals.jsx'
import Navbar from '@/components/NavBar'
import Strapi from '@/hooks/Strapi'

export default async function Home() {

  const { data, error } = await Strapi.getHomePage();

  console.log(data)


  return (
    <main className=''>
      <DotParticles />
      <Navbar />
      <div className="">

      </div>

    </main>
  )
}
