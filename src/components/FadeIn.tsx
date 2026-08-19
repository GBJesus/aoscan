// src/components/FadeIn.tsx
import { useEffect, useRef, useState, PropsWithChildren } from "react";

type Props = PropsWithChildren<{ delay?: number }>;

export default function FadeIn({ children, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(entry.target); // anima só uma vez
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform
                  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                  motion-reduce:transition-none motion-reduce:transform-none`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
