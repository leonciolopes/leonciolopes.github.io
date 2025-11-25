import React from "react";

export default function ImageWithCaption({ src, alt = "", caption = "", className = "", onClick, loading = "lazy" }) {
  return (
    <figure className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        className="w-full h-full object-cover cursor-pointer block"
        onClick={onClick}
      />

      {caption && (
        <figcaption className="absolute left-0 right-0 bottom-0 bg-black/50 px-3 py-2 text-sm text-white text-center backdrop-blur-sm">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
