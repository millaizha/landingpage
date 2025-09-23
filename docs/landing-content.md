# Airtable Landing Page – Content Inventory

This document lists every visible word and image on the assembled landing page (home‑4 base, menu from home‑5, with extra sections from home‑5 and home‑2), plus a JSON payload to drive dynamic content.

## Sections (Human‑Readable)

- Header (home‑5)
  - Logo: `/assets/img/logo/logo.png` (light), `/assets/img/logo/logo-white.png` (dark)
  - Button: `Get In Touch` → `/contact`

- Hero (home‑4)
  - Title lines:
    - `Transform Your Workflow`
  - Subtitle: `Beautiful AI Images for Social Media & Webshops`
  - Button: `Get Your Template` → `/contact`

- Gallery (home‑4)
  - Images:
    - `/assets/img/home-03/gallery/gal-1.jpg`
    - `/assets/img/home-03/gallery/gal-2.jpg`
    - `/assets/img/home-03/gallery/gal-3.jpg`
    - `/assets/img/home-03/gallery/gal-4.jpg`
    - `/assets/img/home-03/gallery/gal-5.jpg`

- About (home‑4 AboutThree)
  - Subtitle: `About The Template`
  - Title: `All-in-one hub for your social media and webshop content.`
  - Paragraphs:
    - `Streamline your content creation process with our AI-powered Airtable template. Generate stunning images for your social media posts and webshop products in seconds.`
    - `Unlimited customization options to perfectly match your brand. Say goodbye to content creation bottlenecks and hello to a world of creative possibilities.`
  - Button: `Learn More` → `/about-us`
  - Image: `/assets/img/home-03/about/ab-shape-img.png`

- Brand slider (home‑4)
  - Images: `/assets/img/home-01/brand/brand-1.png` … `brand-8.png`

- Projects (home‑4 ProjectFour)
  - Item 1: meta `DEC 2024 . Creative`, title `Pellente dapibus`, images `port-1.jpg`, `port-2.jpg`
  - Item 2: meta `NOV 2024 . Creative`, title `Chania tourism`, images `port-3.jpg`, `port-4.jpg`
  - Item 3: meta `OCT 2024 . Creative`, title `Fashion sentence`, images `port-5.jpg`, `port-6.jpg`
  - Item 4: meta `SEP 2024 . Creative`, title `Fashion sentence`, images `port-7.jpg`, `port-8.jpg`

- Fun‑fact (home‑5 CounterOne)
  - Counters:
    - `235+` — `Projects Finished`
    - `12+` — `Years of Experience`
    - `140+` — `Clients Worldwide`
  - Marquee images: `/assets/img/home-05/marque/marque-1.jpg` … `marque-9.jpg`

- Video (home‑4 VideoThree)
  - Source: `https://html.hixstudio.net/videos/liko/liko-3.mp4`

- Instagram (home‑2 InstagramArea)
  - Title: `INSTAGRAM`
  - Handle: `@likoagency`
  - Blurb: `Become a part of our stories! Join the adventure.`
  - Button: `Follow Us` → `#`
  - Main image: `/assets/img/home-02/instagram/insta-1.jpg`
  - Thumbs: `insta-inner-1.jpg` … `insta-inner-7.jpg`

- Contact (home‑4 CTA)
  - Title: `Let’s talk about it`
  - Paragraph: `We will collaborate to find the right answer and bring progress to your business and to the world.`
  - Button: `Get In Touch` → `/contact`
  - Image: `/assets/img/home-03/cta/cta-1.png`

- Footer (home‑4)
  - Component only; no copy changed

---

## JSON Payload

```json
{
  "sections": [
    {
      "id": "header",
      "component": "header-five",
      "logo": {"light": "/assets/img/logo/logo.png", "dark": "/assets/img/logo/logo-white.png"},
      "cta": {"label": "Get In Touch", "href": "/contact"}
    },
    {
      "id": "hero",
      "component": "hero-banner-four",
      "title_lines": ["Transform Your Workflow"],
      "subtitle": "Beautiful AI Images for Social Media & Webshops",
      "cta": {"label": "Get Your Template", "href": "/contact"}
    },
    {
      "id": "gallery",
      "component": "gallery-one",
      "images": [
        "/assets/img/home-03/gallery/gal-1.jpg",
        "/assets/img/home-03/gallery/gal-2.jpg",
        "/assets/img/home-03/gallery/gal-3.jpg",
        "/assets/img/home-03/gallery/gal-4.jpg",
        "/assets/img/home-03/gallery/gal-5.jpg"
      ]
    },
    {
      "id": "about",
      "component": "about-three",
      "subtitle": "About The Template",
      "title": "All-in-one hub for your social media and webshop content.",
      "paragraphs": [
        "Streamline your content creation process with our AI-powered Airtable template. Generate stunning images for your social media posts and webshop products in seconds.",
        "Unlimited customization options to perfectly match your brand. Say goodbye to content creation bottlenecks and hello to a world of creative possibilities."
      ],
      "cta": {"label": "Learn More", "href": "/about-us"},
      "image": "/assets/img/home-03/about/ab-shape-img.png"
    },
    {
      "id": "brand",
      "component": "brand-three",
      "images": [
        "/assets/img/home-01/brand/brand-1.png",
        "/assets/img/home-01/brand/brand-2.png",
        "/assets/img/home-01/brand/brand-3.png",
        "/assets/img/home-01/brand/brand-4.png",
        "/assets/img/home-01/brand/brand-5.png",
        "/assets/img/home-01/brand/brand-6.png",
        "/assets/img/home-01/brand/brand-7.png",
        "/assets/img/home-01/brand/brand-2.png"
      ]
    },
    {
      "id": "projects",
      "component": "project-four",
      "items": [
        {"meta": "DEC 2024 . Creative", "title": "Pellente dapibus", "images": ["/assets/img/home-03/portfolio/port-1.jpg", "/assets/img/home-03/portfolio/port-2.jpg"]},
        {"meta": "NOV 2024 . Creative", "title": "Chania tourism", "images": ["/assets/img/home-03/portfolio/port-3.jpg", "/assets/img/home-03/portfolio/port-4.jpg"]},
        {"meta": "OCT 2024 . Creative", "title": "Fashion sentence", "images": ["/assets/img/home-03/portfolio/port-5.jpg", "/assets/img/home-03/portfolio/port-6.jpg"]},
        {"meta": "SEP 2024 . Creative", "title": "Fashion sentence", "images": ["/assets/img/home-03/portfolio/port-7.jpg", "/assets/img/home-03/portfolio/port-8.jpg"]}
      ]
    },
    {
      "id": "funfact",
      "component": "counter-one",
      "items": [
        {"value": 235, "suffix": "+", "label": "Projects Finished"},
        {"value": 12, "suffix": "+", "label": "Years of Experience"},
        {"value": 140, "suffix": "+", "label": "Clients Worldwide"}
      ],
      "marquee_images": [
        "/assets/img/home-05/marque/marque-1.jpg",
        "/assets/img/home-05/marque/marque-2.jpg",
        "/assets/img/home-05/marque/marque-3.jpg",
        "/assets/img/home-05/marque/marque-4.jpg",
        "/assets/img/home-05/marque/marque-5.jpg",
        "/assets/img/home-05/marque/marque-6.jpg",
        "/assets/img/home-05/marque/marque-7.jpg",
        "/assets/img/home-05/marque/marque-8.jpg",
        "/assets/img/home-05/marque/marque-9.jpg"
      ]
    },
    {
      "id": "video",
      "component": "video-three",
      "src": "https://html.hixstudio.net/videos/liko/liko-3.mp4"
    },
    {
      "id": "instagram",
      "component": "instagram-area",
      "title": "INSTAGRAM",
      "handle": "@likoagency",
      "blurb": "Become a part of our stories! Join the adventure.",
      "cta": {"label": "Follow Us", "href": "#"},
      "images": {
        "main": "/assets/img/home-02/instagram/insta-1.jpg",
        "thumbs": [
          "/assets/img/home-02/instagram/insta-inner-1.jpg",
          "/assets/img/home-02/instagram/insta-inner-2.jpg",
          "/assets/img/home-02/instagram/insta-inner-3.jpg",
          "/assets/img/home-02/instagram/insta-inner-4.jpg",
          "/assets/img/home-02/instagram/insta-inner-5.jpg",
          "/assets/img/home-02/instagram/insta-inner-6.jpg",
          "/assets/img/home-02/instagram/insta-inner-7.jpg"
        ]
      }
    },
    {
      "id": "services",
      "component": "service-four",
      "icon": "/assets/img/home-03/service/sv-icon-1.png",
      "items": [
        {"title": "AI Image Generation", "desc": "Generate stunning, high-quality images for your social media and webshop content with the power of AI. No design skills required.", "category": ["AI-Powered", "Content Creation", "Social Media"]},
        {"title": "All-in-one Hub", "desc": "Manage all your content in one place. From idea to publication, our Airtable template streamlines your entire workflow.", "category": ["Airtable", "Workflow", "Organization"]},
        {"title": "Unlimited Customization", "desc": "Customize the template to your heart's content. Adapt it to your brand, your workflow, and your unique needs. The possibilities are endless.", "category": ["Customizable", "Branding", "No-Code"]}
      ]
    },
    {
      "id": "contact",
      "component": "contact-one",
      "title": "Let’s talk about it",
      "paragraph": "We will collaborate to find the right answer and bring progress to your business and to the world.",
      "cta": {"label": "Get In Touch", "href": "/contact"},
      "image": "/assets/img/home-03/cta/cta-1.png"
    },
    {"id": "footer", "component": "footer-four"}
  ]
}
```

