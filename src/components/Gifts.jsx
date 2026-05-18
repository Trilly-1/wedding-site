import { useInView } from "react-intersection-observer";
import { Flower } from "lucide-react";

export default function Gifts() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      id="gifts"
      className="py-24 relative overflow-hidden"
      style={{ background: "#FDFAF4" }}
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* PURPLE CLOSING CONTAINER ONLY */}
        <div
          ref={ref}
          className={`transition-all duration-1000 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div
            className="relative rounded-3xl p-10 md:p-14 text-center overflow-hidden"
            style={{
              background: "linear-gradient(145deg,#2B1A2A,#4A2235)",
            }}
          >
            {/* glow background */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center,rgba(160,82,106,0.2),transparent 65%)",
              }}
            />

            {/* content */}
            <div className="relative z-10">
              <Flower size={40} className="text-gold mx-auto mb-4" />

              <h3
                className="font-script mb-4"
                style={{
                  fontSize: "clamp(2rem,4vw,3rem)",
                  color: "#E8C880",
                }}
              >
                Most of all…
              </h3>

              <p
                className="font-display italic max-w-lg mx-auto leading-[1.9] mb-8 text-[1.04rem]"
                style={{ color: "rgba(253,250,244,0.72)" }}
              >
                Your presence at our wedding is the greatest gift of all. We
                can't wait to see your smiling faces as we begin this beautiful
                chapter. Thank you for being part of our story.
              </p>

              {/* NAME STACK (FIXED LAYOUT) */}
              <div className="flex items-center justify-center gap-3 font-script text-[1.8rem]">

                {/* TIMOTHY (slightly up) */}
                <span
                  style={{
                    color: "#FDFAF4",
                    transform: "translateY(-6px)",
                    display: "inline-block",
                  }}
                >
                  Timothy
                </span>

                {/* RING */}
                <span
                  className="font-display italic text-[1.3rem]"
                  style={{
                    color: "#C9A05A",
                    transform: "translateY(0px)",
                    display: "inline-block",
                  }}
                >
                  &amp;
                </span>

                {/* HOPE (slightly down) */}
                <span
                  style={{
                    color: "#FDFAF4",
                    transform: "translateY(6px)",
                    display: "inline-block",
                  }}
                >
                  Hope
                </span>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}