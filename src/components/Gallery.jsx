import { useEffect, useState } from "react";

const imgs = Array.from({ length: 15 }, (_, i) => ({
  src: `/img${i + 1}.JPG`,
  alt: `Timothy and Hope — photo ${i + 1}`,
}));

export default function GallerySlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % imgs.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // get 3 visible images
  const visible = [
    imgs[index % imgs.length],
    imgs[(index + 1) % imgs.length],
    imgs[(index + 2) % imgs.length],
  ];

  return (
    <div className="overflow-hidden w-full">
      {/* sliding track */}
      <div className="flex gap-4 transition-transform duration-700 ease-in-out">
        {visible.map((img, i) => (
          <div
            key={i}
            className="w-1/3 aspect-square overflow-hidden rounded-xl shadow-lg flex-shrink-0"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
}