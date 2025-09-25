import React, { CSSProperties } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// decorative shapes (static)
import shape_1 from "@/assets/img/home-03/gallery/gal-shape-1.png";
import shape_d_1 from "@/assets/img/home-03/gallery/gal-shape-dark-1.png";
import shape_2 from "@/assets/img/home-03/gallery/gal-shape-2.png";
import shape_d_2 from "@/assets/img/home-03/gallery/gal-shape-dark-2.png";

const imgStyle: CSSProperties = { height: "auto" };

export default function GalleryOne({ images }: { images: any[] }) {
  return (
    <div className="tp-gallery-area fix p-relative">
      {/* shapes on background */}
      <div className="tp-gallery-shape-1">
        <Image className="img-1" src={shape_1} alt="shape" style={imgStyle} />
        <Image className="img-2" src={shape_d_1} alt="shape" style={imgStyle} />
      </div>
      <div className="tp-gallery-shape-2">
        <Image className="img-1" src={shape_2} alt="shape" style={imgStyle} />
        <Image className="img-2" src={shape_d_2} alt="shape" style={imgStyle} />
      </div>

      {/* gallery items */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-gallery-slider-wrap">
              <div className="swiper-container tp-gallery-slider-active">
                <Marquee className="tp-gallery-titming" speed={100} direction="left">
                  {images?.map((item, i) => (
                    <div key={i} className="tp-gallery-item mr-30">
                      {item.image?.url && (
                        <Image
                          src={item.image.url}
                          alt={item.image.alt || ""}
                          width={400}
                          height={300}
                          style={{ height: "auto" }}
                        />
                      )}
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}