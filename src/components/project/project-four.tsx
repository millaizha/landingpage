import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectShape, RightArrow } from "../svg";

// Props from Prismic
type Project = {
  title: string;
  meta: string;
  image1?: { url: string; alt?: string };
  image2?: { url: string; alt?: string };
  link?: { url: string };
};

type ProjectFourProps = {
  projects: Project[];
  style_2?: boolean;
};

export default function ProjectFour({ projects, style_2 = false }: ProjectFourProps) {
  return (
    <div className={`tp-project-3-area ${style_2 ? "pt-60 pw-project-style" : "pt-130 black-bg"} pb-130`}>
      <div className="container container-1720">
        {!style_2 && (
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="tp-project-3-title-box p-relative mb-150">
                <h4 className="tp-section-title-200 tp_reveal_anim">
                  Latest <span>Projects</span>
                </h4>
                <div className="tp-project-3-btn-box">
                  <Link className="tp-btn-zikzak p-relative" href="/portfolio-wrapper">
                    <span className="zikzak-content">
                      See <br /> All Project
                      <RightArrow clr="#19191A" />
                    </span>
                    <ProjectShape />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="row">
          <div className="col-xl-12">
            {projects?.map((item, i) => (
              <div key={i} className="tp-project-3-wrap pb-120">
                <div className="row">
                  {/* Left Image */}
                  {item.image1?.url && (
                    <div className="col-xl-4 col-lg-4 col-md-6">
                      <div className="tp-project-3-thumb pro-img-1">
                        <Image
                          src={item.image1.url}
                          alt={item.image1.alt || "project image"}
                          width={600}
                          height={400}
                          style={{ height: "auto", width: "100%" }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="col-xl-4 col-lg-4 col-md-12 order-1 order-lg-0">
                    <div className="tp-project-3-content text-center">
                      <span className="tp-project-3-meta">{item.meta}</span>
                      <h4 className="tp-project-3-title-sm">
                        <Link href={item.link?.url || "#"}>{item.title}</Link>
                      </h4>
                      {item.link?.url && (
                        <Link className="tp-btn-project-sm" href={item.link.url}>
                          See Project
                        </Link>
                      )}
                    </div>
                    <div className="tp-project-3-border color-1 text-center">
                      <span></span>
                    </div>
                  </div>

                  {/* Right Image */}
                  {item.image2?.url && (
                    <div className="col-xl-4 col-lg-4 col-md-6 order-0 order-lg-0">
                      <div className="tp-project-3-thumb pro-img-2">
                        <Image
                          src={item.image2.url}
                          alt={item.image2.alt || "project image"}
                          width={600}
                          height={400}
                          style={{ height: "auto", width: "100%" }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
