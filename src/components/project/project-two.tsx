"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const project_data = [
  {
    id: 1,
    img: "/assets/img/ai-airtable/ai-image-1.jpg",
    subtitle: "AI-Generated",
    title: "Social Media Post",
  },
  {
    id: 2,
    img: "/assets/img/ai-airtable/ai-image-2.jpg",
    subtitle: "AI-Generated",
    title: "Webshop Product",
  },
  {
    id: 3,
    img: "/assets/img/ai-airtable/ai-image-3.jpg",
    subtitle: "AI-Generated",
    title: "Blog Post Image",
  },
  {
    id: 4,
    img: "/assets/img/ai-airtable/ai-image-4.jpg",
    subtitle: "AI-Generated",
    title: "Email Newsletter",
  },
  {
    id: 5,
    img: "/assets/img/ai-airtable/ai-image-5.jpg",
    subtitle: "AI-Generated",
    title: "Facebook Ad",
  },
  {
    id: 6,
    img: "/assets/img/ai-airtable/ai-image-6.jpg",
    subtitle: "AI-Generated",
    title: "Instagram Story",
  },
  {
    id: 7,
    img: "/assets/img/ai-airtable/ai-image-7.jpg",
    subtitle: "AI-Generated",
    title: "Pinterest Pin",
  },
];

export default function ProjectTwo() {
  return (
    <section className="tp-project-2-area tpproject">
      <div className="panels p-relative fix">
        <div className="panels-container d-flex">
          {project_data.map((item) => (
            <div key={item.id} className="panel">
              <div className="tp-project-2-item  p-relative">
                <div className="tp-project-2-thumb">
                  <Image src={item.img} alt="p-img" width={890} height={700} />
                </div>
                <div className="tp-project-2-content">
                  <span>{item.subtitle}</span>
                  <h4 className="tp-project-2-title-sm">
                    <Link href="/portfolio-details-1">{item.title}</Link>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
