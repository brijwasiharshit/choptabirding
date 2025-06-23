import React from "react";
import videos from "../data/gallery.json";

const Gallery = () => {
  return (
    <div>
      <div></div>

      <div className="grid  justify-between gap-2  mx-3.5 md:mx-20 md:grid-cols-2 ">
        <h1>Videos</h1>
        {videos.map((video) => (
          <iframe
            key={video.index}
            width="560"
            height="315"
            src={video.src}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen></iframe>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
