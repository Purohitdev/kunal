import Marquee from "react-fast-marquee";

const testimonials = [
  {
    name: "Riya Sharma",
    role: "Content Creator",
    text: "Working with Kunal was a game-changer. The process was seamless, and the final edit? Absolute fire!",
    avatar: "https://i.imgur.com/TkIrScD.png",
    views: "15M+",
    followers: "80K+",
    bg: "#D6DF3F30",
  },
  {
    name: "Aman Verma",
    role: "YouTube Vlogger",
    text: "Finally found someone who gets the vibe. Clean edits, sharp delivery, and top-notch creativity.",
    avatar: "https://i.imgur.com/TkIrScD.png",
    views: "10M+",
    followers: "40K+",
    bg: "#EAC8F930",
  },
  {
    name: "Sneha Kapoor",
    role: "Shorts Producer",
    text: "Super responsive team and fantastic results. Viralcuts gave my content the edge it needed.",
    avatar: "https://i.imgur.com/TkIrScD.png",
    views: "7M+",
    followers: "30K+",
    bg: "#E9C0E630",
  },
  {
    name: "Vikrant Joshi",
    role: "Instagram Coach",
    text: "Their storytelling and snappy editing helped me boost my brand. Worth every penny!",
    avatar: "https://i.imgur.com/TkIrScD.png",
    views: "22M+",
    followers: "120K+",
    bg: "#BDB4F430",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#ffede1] text-black px-6 md:px-16 py-10 ">
      <h1 className="text-3xl md:text-7xl font-extrabold mb-20 max-w-6xl mx-auto text-center leading-tight">
        what they’re saying
      </h1>

      <Marquee gradient={false} speed={35} pauseOnHover={true}>
        {testimonials.map((item, index) => (
          <div
            key={index}
            style={{ backgroundColor: item.bg }}
            className="rounded-2xl px-6 py-8 mx-4 w-[320px] md:w-[360px] flex-shrink-0 space-y-4 shadow-sm"
          >
            {/* Header */}
            <div className="flex items-center space-x-4">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-800">{item.role}</p>
              </div>
            </div>

            {/* Quote */}
            <p className="text-[15px] text-black leading-relaxed">
              “{item.text}”
            </p>

            {/* Stats */}
            <div className="flex justify-between text-sm pt-2 border-t border-black/10">
              <div className="pt-3">
                <div className="font-bold">{item.views}</div>
                <div className="text-xs">Views</div>
              </div>
              <div className="pt-3">
                <div className="font-bold">{item.followers}</div>
                <div className="text-xs">Followers</div>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Testimonials;
