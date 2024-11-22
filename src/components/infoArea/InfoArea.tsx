import React from "react";
import InfoVideo from "./InfoVideo";
import InfoImportancia from "./InfoImportancia";
import InfoInfografico from "./InfoInfografico";

export default function InfoArea() {
  return (
    <div className="flex justify-between max-w-7xl ms-auto me-auto mt-6">
      <div className="w-1/2 pe-4">
        <InfoVideo />
        <InfoImportancia />
      </div>
      <div className="w-1/2 ps-4 border-s-2 border-indigo-700">
        <InfoInfografico />
      </div>
    </div>
  );
}
