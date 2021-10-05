import React from "react";
import { BulletPoint } from "../api/landing";

type BulletPointsProps = { bulletPoints: BulletPoint[] };

const BulletPoints = ({ bulletPoints }: BulletPointsProps) => {
  return (
    <article className="w-4/5 my-20 mx-auto space-y-14 text-custom-grey-light">
      {bulletPoints.length > 0 ? (
        bulletPoints.map(({ title, description }, idx) => (
          <div key={idx}>
            <div className="pb-0.5 mb-9 text-5xl leading-bullet-point-title font-semibold">
              {title}
            </div>
            <div className="text-2xl leading-9 font-light">{description}</div>
          </div>
        ))
      ) : (
        <div className="text-5xl"> the page is loading...</div>
      )}
    </article>
  );
};

export default BulletPoints;
