import React from "react";
import Image from "next/image";
import Link from "next/link";
import cta from '@/assets/img/home-03/cta/cta-1.png';
import { ProjectShape, RightArrow } from "../svg";

export default function ContactOne({
  description,
  buttonLink,
}: {
  description: string;
  buttonLink?: any;
}) {
  return (
    <div className="tp-cta-area black-bg pt-120 pb-120 z-index fix">
      <div className="container">
        <div className="col-xl-12">
          <div className="tp-cta-title-box p-relative">
            <h4 className="tp-cta-title cta-text">
              Let’s talk
              <span>about it</span>
            </h4>
            <p className="tp_fade_bottom">
              {description}
            </p>
            <div className="tp-cta-icon">
              <Image src={cta} alt="cta-img" />
            </div>
            <div className="tp-cta-btn-box">
              <Link className="tp-btn-zikzak p-relative" href={buttonLink || "/contact"}>
                <span className="zikzak-content">
                  Get <br /> In Touch
                  <RightArrow clr="#19191A" />
                </span>
                <ProjectShape />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}