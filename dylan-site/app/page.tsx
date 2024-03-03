import DotParticles from '@/components/animated-components/DotParticals.jsx'
import HomeClient from '@/components/Home/HomeClient';
import NavBar from '@/components/NavBar';
import ToastError from '@/components/ToastError';
import { getHomePage } from '@/hooks/Strapi'
import { Metadata } from "next";
import { NextSeo } from 'next-seo';

export const metadata: Metadata = {
  title: 'dylanborchert.ca',
  description: 'My personal website',
  robots: 'index, follow',
}

export default async function Home() {


  const { data, error } = await getHomePage();

  return (
    <main className=''>
      <DotParticles />
      <ToastError error={error} />
      {data ? <HomeClient content={data as any} /> : <></>}
    </main>
  )
}

export const dynamic = "force-dynamic";
export const revalidate = 600;
