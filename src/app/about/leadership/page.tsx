import React from 'react';
import { PageTitleBar } from '@/components/ui/PageTitleBar/PageTitleBar';
import { LeadershipSection } from '@/components/sections/LeadershipSection/LeadershipSection';
import { generatePageMetadata } from '@/config/seo.config';

export const metadata = generatePageMetadata({
  title: 'Leadership',
  description: 'Together, Subhash Goyal, Pratik Goyal, and Aditya Agarwal form a leadership trio that blends experience, creativity, and precision.',
  path: '/about/leadership'
});

export default function LeadershipPage() {
  return (
    <>
      <PageTitleBar title="Leadership" parentLabel="About" parentHref="/about" />
      <LeadershipSection />
    </>
  );
}
