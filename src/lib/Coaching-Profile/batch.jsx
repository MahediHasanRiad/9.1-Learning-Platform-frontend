import CardItem from "@/components/feature/Coaching/card";
import React from "react";

function Batch() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="font-semibold text-3xl">Batch</h1>
        <hr />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        <CardItem
          image={"/public/cover-image.jpg"}
          name={"Alfa Batch 23"}
          classes={"Class 10"}
          rating={"3.8"}
        />
        <CardItem
          image={"/public/cover-image.jpg"}
          name={"Alfa Batch 23"}
          classes={"Class 10"}
          rating={"3.8"}
        />
        <CardItem
          image={"/public/cover-image.jpg"}
          name={"Alfa Batch 23"}
          classes={"Class 10"}
          rating={"3.8"}
        />
        <CardItem
          image={"/public/cover-image.jpg"}
          name={"Alfa Batch 23"}
          classes={"Class 10"}
          rating={"3.8"}
        />
      </div>
    </section>
  );
}

export default Batch;
