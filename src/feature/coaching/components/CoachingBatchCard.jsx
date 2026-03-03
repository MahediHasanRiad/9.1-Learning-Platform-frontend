import Button from "@/shared/components/button";
import { Link } from "react-router";

function CoachingBatchCard({
  path = "#",
  image,
  name,
  classes,
  subjects,
  start,
  end,
  btnText = "View Batch...",
}) {
  return ( 
    <section className="w-full border rounded-md text-sm">
      <div>
        <img src={image} alt="img" className="w-full object-cover h-1/2" />
      </div>
      <div className="p-6 space-y-2">
        <p>
          <b>Name:</b> {name}
        </p>
        <p>
          <b>Class:</b> {classes}
        </p>
        <p>
          <b>Subject: </b>
          {subjects}
        </p>
        <p>
          <b>Duration:</b> {start} -- {end}
        </p>
        <Link to={`/${path}`} className="">
          <Button text={btnText} className={"w-full mt-2"} />
        </Link>
      </div>
    </section>
  );
}

export default CoachingBatchCard;
