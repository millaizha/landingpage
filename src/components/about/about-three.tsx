import React from "react";
import Image from "next/image";
import Link from "next/link";
import shape from '@/assets/img/home-03/about/ab-shape-img.png';
import { ArrowBg, RightArrowTwo, FirstBracket, FirstBracketTwo } from "../svg";

export default function AboutThree({
  heading,
  content,
}: {
  heading: string;
  content: any; 
}) {
  return (
    <div className="tp-about-3-area pt-120 pb-110">
      <div className="container">
        <div className="row">
          <div className="col-xl-11">
            <div className="tp-about-3-title-box">
              <span className="tp-section-subtitle-2 tp_fade_bottom">
                <FirstBracket />
                <span className="tp-subtitle-text tp_text_invert">About</span>
                <FirstBracketTwo />
              </span>
              <h4 className="tp-section-title-90 tp_text_invert tp_fade_bottom">
                {heading}
              </h4>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          
            <div className="col-xl-6 col-lg-6 col-md-4">
              <div className="tp-about-3-shape text-lg-end">
                <Image src={shape} alt="shape" style={{ height: "auto" }} />
              </div>
            </div>
          <div className="col-xl-6 col-lg-6 col-md-8">
            <div className="tp-about-3-content">
              {content?.[0]?.text && (
                <p className="mb-30 tp_fade_bottom">{content[0].text}</p>
              )}
              <Link className="tp-btn-black-2 tp_fade_bottom" href="/about-us">
                Learn More
                <span className="p-relative">
                  <RightArrowTwo />
                  <ArrowBg />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
