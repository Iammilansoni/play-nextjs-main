"use client";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

const Hero = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(imageRef.current, {
      y: 100, // Adjust how much you want the image to move
      scale: 1.3, // Increased scale for more pronounced effect
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 70%", // When the image enters 80% of the viewport
        end: "bottom 30%", // End animation when the image reaches 20% from the bottom
        scrub: true, // Smooth scrolling
        markers: false, // Remove scroll markers for cleaner look
        onUpdate: (self) => {
          // Customizing movement based on scroll progress
          gsap.to(imageRef.current, {
            y: self.progress * 200, // Move the image up/down as you scroll
            scale: 1.1 + self.progress * 0.3, // Increased scaling effect
          });
        },
      },
    });
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4">
            <div
              className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center"
              data-wow-delay=".2s"
            >
              
     
       <h1
        className="mb-6 text-3xl font-bold leading-snug sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]"
        style={{
          background: "linear-gradient(90deg,rgb(247, 10, 97),rgb(65, 6, 38))",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        The future of mining compliance is here. Talk to us.
      </h1>
              <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
              
              </p>
              <ul className="mb-4 flex flex-wrap items-center justify-center gap-5">
                <li>
                    <Link
                    href="/chatting"
                    className="inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-2"
                    >
                    Start Chatting
                    </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/Iammilansoni/MiningNiti"
                    target="_blank"
                    className="flex items-center gap-4 rounded-md bg-white/[0.12] px-6 py-[14px] text-base font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-dark"
                  >
                    <svg
                      className="fill-current"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_2005_10818)">
                        <path d="..." />
                      </g>
                      <defs>
                        <clipPath id="clip0_2005_10818">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    Star on Github
                  </Link>
                </li>
              </ul>
              <div className="mt-8 -translate-y-5">
                <Image
                  ref={imageRef}
                  src="/images/hero/hero-image.png"
                  alt="hero"
                  className="mx-auto max-w-full rounded-t-xl rounded-tr-xl"
                  width={1000} // Increased width
                  height={450} // Increased height
                />
              </div>

              
              </div>
            </div>
          </div>
        </div>
      
    </section>
  );
};

export default Hero;
