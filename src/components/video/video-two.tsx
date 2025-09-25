"use client";
import React from "react";
import { Leaf } from "../svg";

export default function VideoTwo({
  url,
  subtitle,
  title,
  description,
}: {
  url: string;
  subtitle: string;
  title: string;
  description: string;
}) {
  return (
    <div className="tp-video-area">
      <div className="container container-1870">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-video-wrap p-relative">
              <video className="play-video" loop muted autoPlay playsInline>
                <source src={url} type="video/mp4" />
              </video>
              <div className="tp-video-content text-center">
                <span className="tp-video-subtitle">
                  <Leaf /> {subtitle}
                </span>
                <h2 className="tp-video-title">{title}</h2>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
