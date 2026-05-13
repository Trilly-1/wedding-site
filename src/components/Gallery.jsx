const imgs = Array.from({ length: 39 }, (_, i) => ({
  src: `/img${i + 1}.JPG`,
  alt: `Timothy and Hope — memory ${i + 1}`,
}));

export default function MemoriesGallery() {
  return (
    <section className="w-full py-20 bg-[#f7f1ec] overflow-hidden">

      {/* HEADING */}
      <div className="text-center mb-12 px-6">
        <p className="font-body text-[0.75rem] tracking-[0.35em] uppercase text-gold/80">
          Moments we will always carry
        </p>

        <h2
          className="font-script text-rose-d mt-3 mb-3"
          style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
        >
          Our Memories in Frames
        </h2>

        <p className="font-display italic text-ink-l max-w-xl mx-auto leading-relaxed text-[1.05rem]">
          A collection of quiet smiles, shared laughter, and beautiful days that built our story.
        </p>
      </div>

      {/* TOP ROW */}
      <div className="overflow-hidden w-full">
        <div className="flex w-max animate-row-left gap-4">
          {[...imgs, ...imgs].map((img, i) => (
            <div
              key={i}
              className="w-52 h-40 flex-shrink-0 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="overflow-hidden w-full mt-6">
        <div className="flex w-max animate-row-right gap-4">
          {[...imgs, ...imgs].map((img, i) => (
            <div
              key={i}
              className="w-52 h-40 flex-shrink-0 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ANIMATION */}
      <style>{`
        @keyframes row-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes row-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-row-left {
          animation: row-left 60s linear infinite;
        }

        .animate-row-right {
          animation: row-right 60s linear infinite;
        }
      `}</style>

    </section>
  );
}