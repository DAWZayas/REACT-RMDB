import React from "react";

const LoadMoreBtn: React.FC<{ text: string; handleLoadMore: () => void }> = ({
  text,
  handleLoadMore
}) => (
  <div>
    <div className="row"></div>
    <div className="row">
      <div className="col-4-of-4">
        <div className="loadmorebtn" onClick={handleLoadMore}>
          <p>{text}</p>
        </div>
      </div>
    </div>
  </div>
);

export default LoadMoreBtn;
