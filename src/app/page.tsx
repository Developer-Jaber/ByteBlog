"use client";
import ContentSpotlight from '@/components/ContentSpotlight';
import CreateShare from '@/components/CreateShare';
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

       {/* ContentSpotlighting */}
       <ContentSpotlight></ContentSpotlight>

       {/* CreateShare section */}
       <CreateShare></CreateShare>
    </div>
  );
}
