import React, { useState } from "react";

const faqs = [
  {
    question: "How many videos will I get?",
    answer:
      "That depends on the scope and turnaround time we agree upon. I offer flexible plans based on your content volume.",
  },
  {
    question: "Are you available full-time?",
    answer:
      "I’m currently taking on select clients for dedicated collaborations. Let’s discuss what works best for both of us.",
  },
  {
    question: "Can you turn my long-form videos into shorts?",
    answer:
      "Absolutely! Repurposing long-form content into scroll-stopping shorts is one of my specialties.",
  },
  {
    question: "What if it’s not the right fit?",
    answer:
      "No stress—I believe in clarity and communication. If things don’t align, we can pause or pivot with no hard feelings.",
  },
  {
    question: "What if I need more than one editor?",
    answer:
      "I work solo, but I have trusted peers I can recommend if your project scales.",
  },
  {
    question: "Can you help with other creative tasks too?",
    answer:
      "While my focus is editing, I do dabble in scripting, motion graphics, and basic thumbnails. Let’s talk!",
  },
  {
    question: "Do you offer trials or sample edits?",
    answer:
      "Yes! I offer a one-time paid test edit so you can see my style in action before committing.",
  },
  {
    question: "Can I cancel if I don’t like the results?",
    answer:
      "You’re not locked in—I keep it transparent and flexible. No long-term contracts, just great content.",
  },
];

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 ">
      <div className=" mx-auto bg-[#C9C1B4] rounded-2xl p-6 md:p-12 flex flex-col gap-10 text-[#1C1C1A] shadow-md">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start gap-24">
          <h2 className="text-4xl md:text-6xl font-extrabold max-w-md">
            Have<br />questions?
          </h2>
          <div className="flex-1 flex flex-col gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-[#d3cdc1] pb-4">
                <button
                  onClick={() => toggle(index)}
                  className="flex justify-between items-start w-full text-left"
                >
                  <p className="text-xl md:text-2xl font-bold max-w-lg">
                    {faq.question}
                  </p>
                  <span className="text-3xl ml-4">{openIndex === index ? "−" : "+"}</span>
                </button>
                {openIndex === index && (
                  <p className="mt-2 text-base text-[#1C1C1A]/90">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="flex items-center gap-3 text-sm  px-4 py-3 rounded-xl ">
          <span className="text-4xl h-20 w-20 rounded-full   flex justify-center items-center bg-[#FFEDE1]">👩🏻‍🦰</span>
          <p className="font-semibold">
            Have more questions?<br />
            <a href="#call" className="underline underline-offset-4">Book a free discovery call.</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
