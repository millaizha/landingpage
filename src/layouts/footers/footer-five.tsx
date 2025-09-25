import React from "react";
import { UpArrow } from "@/components/svg";

export default function FooterFive({
  footerSubtitle,
  footerTitle,
  email,
  addressText,
  addressMapLink,
  phone,
  socials,
}: {
  footerSubtitle: string;
  footerTitle: string;
  email: string;
  addressText: string;
  addressMapLink?: string;
  phone: string;
  socials: { label: string; url: string }[];
}) {
  return (
    <footer>
      {/* footer area */}
      <div className="tp-footer-5-area black-bg pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-footer-5-content-wrap">
                <div className="tp-footer-5-title-box">
                  <span className="tp-footer-5-subtitle">
                    {footerSubtitle}
                  </span>
                  <h4 className="tp-footer-5-title tp_reveal_anim-2 footer-big-text">
                    {footerTitle}
                  </h4>
                </div>
                <div className="tp-footer-5-info d-flex align-items-center justify-content-start justify-content-md-end">
                  <a className="tp-footer-5-mail" href={`mailto:${email}`}>
                    {email}
                  </a>
                  <a className="tp-footer-5-link" href="#">
                    <UpArrow clr="#19191A" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* copyright area */}
      <div className="tp-copyright-5-area tp-copyright-5-style-2 black-bg pb-50">
        <div className="container container-1560">
          <div className="row align-items-center">
            {/* Left info */}
            <div className="col-xl-3 col-lg-6 col-md-5 d-none d-xl-block">
              <div className="tp-copyright-5-left-info">
                <span>
                  <a
                    href={addressMapLink || "#"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {addressText}
                  </a>
                </span>
                <span>
                  Phone: <a href={`tel:${phone}`}>{phone}</a>
                </span>
              </div>
            </div>

            {/* Socials */}
            <div className="col-xl-6 col-lg-6 col-md-7">
              <div className="tp-copyright-2-social text-start text-sm-center text-xl-center">
                {socials?.map((s, i) => (
                  <a
                    key={i}
                    className="mb-10"
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="col-xl-3 col-lg-6 col-md-5">
              <div className="tp-copyright-2-left text-center text-md-end">
                <p>©{new Date().getFullYear()} - All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
