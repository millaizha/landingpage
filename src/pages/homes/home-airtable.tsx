"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";

// Layouts
import Wrapper from "@/layouts/wrapper";
import HeaderFive from "@/layouts/headers/header-five";
import FooterFive from "@/layouts/footers/footer-five";

// Components (now props-based)
import HeroBannerFour from "@/components/hero-banner/hero-banner-four";
import GalleryOne from "@/components/gallery/gallery-one";
import AboutThree from "@/components/about/about-three";
import BrandThree from "@/components/brand/brand-three";
import ProjectFour from "@/components/project/project-four";
import CounterOne from "@/components/counter/counter-one";
import VideoTwo from "@/components/video/video-two";
import ServiceFour from "@/components/service/service-four";
import ContactOne from "@/components/contact/contact-one";

// Animations
import { textInvert } from "@/utils/text-invert";
import { fadeAnimation, revelAnimationOne } from "@/utils/title-animation";
import { projectThreeAnimation } from "@/utils/project-anim";
import { ctaAnimation } from "@/utils/cta-anim";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

export default function HomeAirtableMain({ page }: { page: any }) {
  useScrollSmooth();

  useEffect(() => {
    document.body.classList.add("tp-smooth-scroll");
    return () => {
      document.body.classList.remove("tp-smooth-scroll");
    };
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {
      fadeAnimation();
      revelAnimationOne();
      projectThreeAnimation();
      ctaAnimation();
      textInvert();
    }, 100);
    return () => clearTimeout(timer);
  });

  const data = page.data;

  return (
    <Wrapper>
      <HeaderFive />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* Hero Section */}
            <HeroBannerFour
              titleLines={data.hero_title.map((t: any) => t.line)}
              subtitle={data.hero_subtitle}
              ctaText={data.hero_cta_text}
              ctaLink={data.hero_cta_link?.url || "/"}
            />

            {/* Gallery */}
            <GalleryOne images={data.gallery_images} />

            {/* About */}
            <AboutThree
              heading={data.about_heading}
              content={data.about_content}
            />

            {/* Brand slider */}
            <BrandThree brands={data.brands} />

            {/* Projects */}
            <ProjectFour projects={data.projects} />

            {/* Counters */}
            <CounterOne
              counters={data.counters?.map((c: any) => ({
                value: c.value,
                label: c.label,
              })) || []}
              marqueeImages={data.marquee_images?.map((img: any) => ({
                url: img.image?.url,
                alt: img.image?.alt,
              })) || []}
            />


            {/* Video */}
            <VideoTwo
              url={data.video_url}
              subtitle={data.video_subtitle}
              title={data.video_title}
              description={data.video_description}
            />

            {/* Services */}
            <ServiceFour
              sectionTitle={data.services_section_title}
              sectionSubtitle={data.services_section_subtitle}
              services={data.services}
            />

            {/* CTA */}
            <ContactOne
              description={data.cta_description}
              buttonLink={data.cta_button_link}
            />
          </main>

          {/* Footer */}
          <FooterFive
            footerSubtitle={data.footer_subtitle}
            footerTitle={data.footer_title}
            email={data.footer_email}
            addressText={data.footer_address_text}
            addressMapLink={data.footer_address_mapLink}
            phone={data.footer_phone}
            socials={data.footer_social_links}
          />
        </div>
      </div>
    </Wrapper>
  );
}
