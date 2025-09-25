import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FirstBracket, FirstBracketTwo, RightArrow, SvgBg } from "../svg";
import icon from "@/assets/img/home-03/service/sv-icon-1.png";

export default function ServiceFour({
  sectionTitle,
  sectionSubtitle,
  services,
}: {
  sectionTitle: string;
  sectionSubtitle: string;
  services: {
    title: string;
    desc: string;
    link?: any;
    category?: { name: string }[];
  }[];
}) {
  return (
    <div className="tp-service-3-area pt-130 pb-130">
      <div className="container">
        {/* Section header */}
        <div className="row">
          <div className="col-xl-9">
            <div className="tp-service-3-title-box mb-60 p-relative">
              {/* Keep static icon */}
              <div className="tp-service-3-icon">
                <Image src={icon} alt="icon" />
              </div>

              {/* Subtitle with animation */}
              <span className="tp-section-subtitle-2 tp_fade_bottom">
                <span>
                  <FirstBracket />
                </span>
                <span className="tp-subtitle-text tp_text_invert">
                  {sectionSubtitle}
                </span>
                <span>
                  <FirstBracketTwo />
                </span>
              </span>

              {/* Title with animation */}
              <h4 className="tp-section-title-90 tp_text_invert tp_fade_bottom">
                {sectionTitle}
              </h4>
            </div>
          </div>
        </div>

        {/* Services list */}
        {services?.map((item, i) => (
          <div key={i} className="tp-service-3-wrap tp_fade_bottom">
            <div className="row align-items-start">
              <div className="col-xl-3 col-lg-3">
                <div className="tp-service-3-title-box">
                  <h4 className="tp-service-3-title">
                    <Link href={item.link?.url || "#"}>{item.title}</Link>
                  </h4>
                </div>
              </div>

              <div className="col-xl-7 col-lg-7">
                <div className="tp-service-3-content">
                  <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                  <div className="tp-service-3-category">
                    {item.category?.map((c, j) => (
                      <span key={j}>{c.name}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-xl-2 col-lg-2">
                <div className="tp-service-3-btn-box text-start text-md-end">
                  <Link
                    className="tp-btn-zikzak-sm p-relative"
                    href={item.link?.url || "#"}
                  >
                    <span className="zikzak-content">
                      See <br /> Details
                      <RightArrow clr="currentColor" />
                    </span>
                    <span>
                      <SvgBg />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
