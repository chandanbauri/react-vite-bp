import react from "react";

const useLazyLoadImage = () => {
  const [isVisible, setIsVisible] = react.useState(false);
  const imgRef = react.useRef(null);

  react.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [imgRef]);

  return [isVisible, imgRef];
};

export default useLazyLoadImage;
