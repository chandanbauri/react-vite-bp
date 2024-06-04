import useLazyLoadImage from "../../utilities/hooks/lazy-load-images";

function LazyImage({ src, alt, className = "" }) {
  const [isVisible, imgRef] = useLazyLoadImage();

  return (
    <div className={className}>
      {isVisible ? (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        <div ref={imgRef} style={{ height: "100%", background: "#f0f0f0" }}>
          Loading...
        </div>
      )}
    </div>
  );
}

export default LazyImage;
