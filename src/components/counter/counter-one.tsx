"use client";
import React from "react";
import Image from "next/image";
import CounterItem from "./counter-item";

type CounterOneProps = {
  counters: { value: number; label: string }[];
  marqueeImages: { url: string; alt?: string }[];
};

export default function CounterOne({ counters, marqueeImages }: CounterOneProps) {
  return (
    <div className="slide-funfact-height slide-funfact p-relative d-flex align-items-center justify-content-center">
      {/* Background marquee images */}
      <div className="img-marq slide-funfact-overlay">
        <div className="middle-shadow">
          <span></span>
        </div>

        {/* Left side */}
        <div className="slide-img-left">
          <div className="box">
            {marqueeImages?.map((img, i) =>
              img.url ? (
                <Image
                  key={`left1-${i}`}
                  src={img.url}
                  alt={img.alt || "marquee-img"}
                  width={200}
                  height={200}
                  style={{ height: "auto" }}
                />
              ) : null
            )}
          </div>
          <div className="box">
            {marqueeImages?.map((img, i) =>
              img.url ? (
                <Image
                  key={`left2-${i}`}
                  src={img.url}
                  alt={img.alt || "marquee-img"}
                  width={200}
                  height={200}
                  style={{ height: "auto" }}
                />
              ) : null
            )}
          </div>
        </div>

        {/* Right side */}
        <div className="slide-img-right">
          <div className="box">
            {marqueeImages?.map((img, i) =>
              img.url ? (
                <Image
                  key={`right1-${i}`}
                  src={img.url}
                  alt={img.alt || "marquee-img"}
                  width={200}
                  height={200}
                  style={{ height: "auto" }}
                />
              ) : null
            )}
          </div>
          <div className="box">
            {marqueeImages?.map((img, i) =>
              img.url ? (
                <Image
                  key={`right2-${i}`}
                  src={img.url}
                  alt={img.alt || "marquee-img"}
                  width={200}
                  height={200}
                  style={{ height: "auto" }}
                />
              ) : null
            )}
          </div>
        </div>
      </div>

      {/* Counters */}
      <div className="slide-funfact-wrap">
        <div>
          <div className="container">
            <div className="row">
              {counters?.map((c, i) => (
                <div key={i} className="col-xl-4 col-lg-4 col-md-4 mb-30">
                  <div className="slide-funfact-item text-center">
                    <h4>
                      <CounterItem min={0} max={c.value} />+
                    </h4>
                    <span>{c.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}