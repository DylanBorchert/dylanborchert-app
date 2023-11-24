"use server";
import DotParticles from '@/components/animated-components/DotParticals.jsx'
import HomeClient from '@/components/Home/HomeClient';
import NavBar from '@/components/NavBar';
import Strapi from '@/hooks/Strapi'

export default async function Home() {

  const { data, error } = await Strapi.getHomePage();

  return (
    <main className=''>
      <DotParticles />
      {data ? <HomeClient error={error} content={data as any} /> : <></>}
    </main>
  )
}
