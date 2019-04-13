import React from "react";
import ImageCard from "./ImageCard";

const ImageList = props => {
  const images = props.images.map(image => {
    return (
      <ImageCard
        url={image.largeImageURL}
        likes={image.likes}
        views={image.views}
        favorites={image.favorites}
        tags={image.tags}
      />
    );
  });
  return <div className="row p-2">{images}</div>;
};

export default ImageList;
