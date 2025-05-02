import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagnetButton from "../Button";

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const formBlockRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (formBlockRef.current) {
        gsap.from(formBlockRef.current, {
          opacity: 0,
          y: 100,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formBlockRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
            markers: false, // set to true for debugging
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="px-6 md:px-8 py-20 text-[#2c2c2c]">
      <div
        ref={formBlockRef}
        className="mx-auto bg-[#D6DF3F] grid md:grid-cols-2 gap-16 rounded-3xl p-10 md:p-16"
      >
        {/* Left Content */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            Hire high-performing <br />
            overseas{" "}
            <span className="bg-[#e0c4eb] px-3 py-1 rounded-md font-bold inline-block">
              video editors
            </span>{" "}
            <br />
            and save up to 70%
          </h1>
        </div>

        {/* Right Form */}
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { label: "First Name *", placeholder: "Jane", type: "text" },
              { label: "Last Name *", placeholder: "Smith", type: "text" },
              { label: "Work Email *", placeholder: "name@example.com", type: "email" },
              {
                label: "Type of Video Editing *",
                type: "select",
                options: [
                  "Please select...",
                  "Social Media Content",
                  "YouTube Videos",
                  "Performance Marketing Ads",
                  "Reels/Shorts",
                  "Corporate/Business Videos",
                  "Wedding & Event Films",
                  "Animated Explainers",
                  "Documentaries",
                ],
              },
            ].map((field, i) => (
              <div key={i}>
                <label className="label-style">{field.label}</label>
                {field.type === "select" ? (
                  <select className="w-full px-4 py-3 border-b border-[#2c2c2c] focus:outline-none focus:ring-2 focus:ring-[#D6DF3F] focus:border-transparent transition">
                    {field.options?.map((option, j) => (
                      <option
                        key={j}
                        value={option.toLowerCase().replace(/\s+/g, "-")}
                      >
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 border-b border-[#2c2c2c] focus:outline-none focus:ring-2 focus:ring-[#D6DF3F] focus:border-transparent transition"
                  />
                )}
              </div>
            ))}
          </div>

          <div>
            <MagnetButton>Hire Me</MagnetButton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
