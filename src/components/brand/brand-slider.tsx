"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

type BrandSliderProps = {
  brands: { logo: { url: string; alt?: string } }[];
};

export default function BrandSlider({ brands }: BrandSliderProps) {
  if (!brands || brands.length === 0) return null;

  return (
    <div className="tp-brand-slider-active fix">
      <Marquee speed={100} loop={0} className="brand-wrapper">
        {brands.map((b, i) => (
          <div
            key={i}
            className="tp-brand-item"
            style={{
              height: "auto",
              width: "200px", 
            }}
          >
            {b.logo?.url && (
              <Image
                src={b.logo.url}
                alt={b.logo.alt || `brand-${i}`}
                width={200}
                height={100}
                style={{
                  objectFit: "contain",
                  maxHeight: "50px", 
                  width: "100%",
                  height: "auto",
                }}
              />
            )}
          </div>
        ))}
      </Marquee>
    </div>
  );
}