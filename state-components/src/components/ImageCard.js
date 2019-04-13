import React from "react";

const ImageCard = props => {
  const { url, likes, views, favorites, tags } = props;
  return (
    <div className="col-sm-4">
      <div className="card mb-3" style={{ minHeight: "293px" }}>
        <div className="image">
          <img
            src={url}
            className="card-img-top"
            alt="image"
            style={{ width: "100%" }}
          />
        </div>
        <div className="card-body">
          <div className="icons d-flex justify-content-around">
            <div className="likes">
              {likes}
              <i className="fa fa-thumbs-up ml-1" />
            </div>
            <div className="views">
              {views}
              <i class="fa fa-eye ml-1" />
            </div>
            <div className="favorites">
              {favorites}
              <i class="fa fa-star ml-1" />
            </div>
          </div>
          <div className="tags mt-a d-flex">
            <span className="mr-1">Tags:</span>
            <p>{tags}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
