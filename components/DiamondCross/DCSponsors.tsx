import React from "react";

const DCSponsors = () => {
  const sponsors = [1, 2, 3, 4, 5, 6];
  return (
    <div className="grid grid-cols-6 gap-6 mx-24 my-12">
      {sponsors.map((i) => (
        <div key={i} className="h-12 bg-gray-200"></div>
      ))}
    </div>
  );
};

export default DCSponsors;
