import React from "react";
import { split } from "../utils/arrays";

const renderGrid = (elements: React.ReactNode[]) =>
  split(4, elements).map(renderRow);

const renderRow = (elements: React.ReactNode[], i: number) => (
  <div key={i} className="row">
    {elements.map(renderElement)}
  </div>
);

const renderElement = (element: React.ReactNode, i: number) => (
  <div key={i} className="col-1-of-4 grid__element">
    {element}
  </div>
);

const FourColGrid: React.FC<FourColGridProps> = ({
  header,
  loading,
  children
}) => {
  return (
    <div className="grid">
      {header && !loading ? <h1>{header}</h1> : null}
      <div className="grid__content">{renderGrid(children)}</div>
    </div>
  );
};

export default FourColGrid;
