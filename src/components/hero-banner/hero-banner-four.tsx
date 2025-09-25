'use client';
import React from "react";
import { ArrowBg, RightArrowTwo } from "../svg";
import Link from "next/link";

type HeroBannerProps = {
  titleLines: string[]; // multiple lines for title
  subtitle: string;
  ctaText: string;
  ctaLink: string;
};

export default function HeroBannerFour({
  titleLines,
  subtitle,
  ctaText,
  ctaLink,
}: HeroBannerProps) {
  return (
    <div className="tp-hero-3-area tp-hero-3-ptb fix">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-hero-3-content-box text-center p-relative">
              <div className="tp-hero-3-circle-shape">
                <span></span>
              </div>

              {/* Title with multiple lines */}
              <h4 className="tp-hero-3-title tp_reveal_anim">
                {titleLines.map((line, i) => (
                  <span key={i} className="tp-reveal-line">
                    {line}
                  </span>
                ))}
              </h4>

              {/* Subtitle */}
              {subtitle && (
                <span className="tp-hero-3-category tp_reveal_anim">
                  {subtitle}
                </span>
              )}

              {/* CTA Button */}
              {ctaText && ctaLink && (
                <Link className="tp-btn-black-2" href={ctaLink}>
                  {ctaText}{" "}
                  <span className="p-relative">
                    <RightArrowTwo />
                    <ArrowBg />
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
