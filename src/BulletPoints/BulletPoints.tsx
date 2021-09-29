import React from "react";
import { BulletPoint } from "../api/landing";

type BulletPointsProps = { bulletPoints: BulletPoint[] };

const BulletPoints = ({ bulletPoints }: BulletPointsProps) => {
  return (
    <article className="w-4/5 my-20 mx-auto space-y-20 text-custom-grey-light">
      {bulletPoints.length > 0 ? (
        bulletPoints.map(({ title, description }, idx) => (
          <div className="space-y-8" key={idx}>
            <div className="text-5xl">{title}</div>
            <div className="text-2xl">{description}</div>
          </div>
        ))
      ) : (
        <div className="text-5xl"> the page is loading...</div>
      )}
    </article>
  );
};

export default BulletPoints;
