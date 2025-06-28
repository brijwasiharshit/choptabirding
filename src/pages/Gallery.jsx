import React from "react";
import videos from "../data/gallery.json";

const Gallery = () => {
  const Images = [
    {
      url: "https://res.cloudinary.com/dofvmdnc7/image/upload/v1750999309/1636534261421-01_k3x7bs.jpg",
      title: " birds",
    },
    {
      url: "https://res.cloudinary.com/djrjt69jl/image/upload/v1750675241/DSC_3443_qijfmt.jpg",
      title: " ",
    },
    {
      url: "https://res.cloudinary.com/djrjt69jl/image/upload/v1750675287/DSC_0202_uvmhcr.jpg",
      title: " ",
    },
    {
      url: "https://res.cloudinary.com/djrjt69jl/image/upload/v1750675439/1636534261421-01_w4jopb.jpg",
      title: " ",
    },
    {
      url: "https://res.cloudinary.com/djrjt69jl/image/upload/v1750675505/DSC_2402-DeNoiseAI-standard_c2ipe2.jpg",
      title: "",
    },
    {
      url: "https://res.cloudinary.com/dofvmdnc7/image/upload/v1750999298/DSC_4382-SharpenAI-Focus_q2kj1y.jpg",
      title: "",
    },
    {
      url: "https://res.cloudinary.com/dofvmdnc7/image/upload/v1750999266/DSC_5183_kntj6i.jpg",
      title: "",
    },
    {
      url: "https://res.cloudinary.com/dofvmdnc7/image/upload/v1750999261/DSC_9773-DeNoiseAI-severe-noise_rofh8i.jpg",
      title: "",
    },
    {
      url: "https://res.cloudinary.com/dofvmdnc7/image/upload/v1751004105/DSC_4224-DeNoiseAI-low-light-SharpenAI-Focus_p6ukqb.jpg",
      title: "",
    },
    {
      url: "https://res.cloudinary.com/dofvmdnc7/image/upload/v1750999261/1674473691481_1_-DeNoiseAI-standard_1_eda65q.jpg",
      title: "",
    },
  ];
  return (
    <div className="container my-30 ">
      <div className=" grid lg:grid-cols-3 gap-10 mx-5  lg:mx-25">
        {Images.map((image, index) => (
          <div key={index} className="relative rounded-3xl  shadow-xl h-64">
            <img
              src={image.url}
              alt=""
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        ))}
      </div>

      {/* <div className="grid  justify-between gap-2  mx-3.5 md:mx-20 md:grid-cols-2 ">
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
      </div> */}
    </div>
  );
};

export default Gallery;
