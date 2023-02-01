import { RefObject, useEffect, useState } from "react";

const useElementOnScreen = ({
  ref,
  rootMargin,
}: {
  ref: RefObject<Element>;
  rootMargin: string;
}) => {
  const [isIntersecting, setIsIntersecting] = useState(true);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const current = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (count === 0) {
          setIsIntersecting(entry.isIntersecting);
          setCount(1);
        }
      },
      { rootMargin },
    );
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [count, ref, rootMargin]);
  return isIntersecting;
};

export default useElementOnScreen;
