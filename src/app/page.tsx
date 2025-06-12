"use client";
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import React from 'react';

export default function Home() {
  return (
    <div>
       {/* hero/banner section */}
       <Hero></Hero>

       {/* Features section */}
       <Features></Features>
    </div>
  );
}
