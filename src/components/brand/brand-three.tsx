import React from 'react';
import BrandSlider from './brand-slider';

type BrandThreeProps = {
  brands: { logo: { url: string; alt?: string } }[];
};

export default function BrandThree({ brands }: BrandThreeProps) {
  return (
    <div className="tp-brand-3-area pb-120">
      <div className="container container-1400">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-brand-3-slider-wrapper">
              <BrandSlider brands={brands} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
