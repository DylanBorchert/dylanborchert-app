"use server";
import DotParticles from '@/components/animated-components/DotParticals.jsx'
import HomeClient from '@/components/Home/HomeClient';
import NavBar from '@/components/NavBar';
import { getHomePage } from '@/hooks/Strapi'
import { revalidatePath } from 'next/cache'


export default async function Home() {

  const { data, error } = await getHomePage();

  return (
    <main className=''>
      <DotParticles />
      {data ? <HomeClient content={data as any} /> : <></>}
    </main>
  )
}
