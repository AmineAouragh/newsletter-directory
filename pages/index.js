import Image from "next/image";
import Link from 'next/link' 
import Head from 'next/head'

import { useState } from 'react'

import { TbWritingSign } from "react-icons/tb"
import photo from '../public/20220826_120015-removebg-preview-1.png'

export default function Home() {

  const words = ["underrated", "small", "underdog", "slept-on"]

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Cairo:wght@200..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <title>Newsletter Directory – The #1 Newsletter Directory for Underrated Newsletters</title>
      </Head>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <nav id="topNav" className="w-full flex flex-row items-center justify-between px-8 py-4 border border-b-slate-300">
          <Link href="/" className="flex flex-row items-center w-1/3">
            <TbWritingSign size={28} />
            <span className="ml-2 text-xl font-bold font-Poppins">Newsletter Directory</span>
          </Link>
          <input type="text" placeholder="Search" className="w-1/3 mr-8 hover:border-slate-600 focus:border-slate-600 outline-none border border-slate-300 px-6 py-2 text-lg text-slate-700 font-semibold rounded-full" />
          <ul id="navlist" className="w-1/3 flex flex-row items-center">
            <Link href="/explore" className="font-Poppins font-semibold text-lg mr-8">Discover</Link>
            <Link href="/about" className="font-Poppins font-semibold text-lg mr-8">About</Link>
            <Link href="/blog" className="font-Poppins font-semibold text-lg mr-8">Blog</Link>
            <Link href="/submit" className="font-Poppins font-bold rounded-full text-lg px-8 py-3 bg-black text-white">Submit Newsletter</Link>
          </ul>
        </nav>
        <section id="hero_section" className="w-full">
          <div className="w-2/3 mx-auto py-24 flex flex-col justify-center items-center">
            <TbWritingSign className="mb-12 text-gray-900" size={64} />
            <h1 className="font-Poppins text-center font-bold text-gray-900 text-6xl mb-6">The #1 Newsletter Directory <br /> for <span className="underline underline-offset-8 decoration-wavy">Underrated</span> Newsletters</h1>
            <p className="text-center font-Poppins text-xl mb-8 text-slate-700">You feel like your newsletter deserves to be known by much more people? You&apos;re in the right place.</p>
            <button type="button" className="px-8 py-3 bg-gray-900 rounded-full hover:bg-gray-800 text-white font-Poppins font-bold text-2xl">Submit Your Newsletter</button>
          </div>
        </section>
        <section id="" className="w-full">
          <div className="w-2/3 mx-auto py-20 flex flex-col justify-center items-center">
            <p className="text-slate-800 w-2/3 text-lg text-center font-Inter">
              I&apos;ve been struggling so much to grow <span className="font-bold"><Link href="https://amineaouragh.substack.com/?ref=newsletterdirectory" target="_blank">The Stupid Newsletter</Link></span> so I decided to build this for me and for other small newsletter creators to get their amazing work
            </p>
            <span>Amine Aouragh</span>
          </div>
        </section>
        <section id="how_it_works" className="w-full">
          <div className="flex flex-row">

          </div>
        </section>
      </div>
    </>
  );
}
