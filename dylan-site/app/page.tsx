"use server";
import DotParticles from '@/components/animated-components/DotParticals.jsx'
import HomeClient from '@/components/Home/HomeClient';
import NavBar from '@/components/NavBar';
import Strapi from '@/hooks/Strapi'

export default async function Home() {

  const { data, error } = await Strapi.getHomePage();

  if (error) {
    console.error(error);
  }

  return (
    <main className=''>
      <DotParticles />
      {data ? <HomeClient content={data as any} /> : <></>}
    </main>
  )
}
