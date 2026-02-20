import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Link } from "react-router";

function CardItem({
  path = '#',
  featured = "new",
  image,
  name,
  subjects,
  availableTime,
  rating,
  btnText = "View Profile...",
}) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={image}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="default">{featured}</Badge>
        </CardAction>
        <CardDescription>
          <b>Name:</b> {name}
        </CardDescription>
        <CardDescription>
          <b>Subject:</b> {subjects}
        </CardDescription>
        <CardDescription>
          <b>Available-Time:</b> {availableTime}
        </CardDescription>
        <br />
        <CardDescription>
          <b>Rating:</b> {rating}
        </CardDescription>
      </CardHeader>
      <Link to={`/${path}`}>
        <CardFooter>
          <Button className="w-full bg-secondary-0">{btnText}</Button>
        </CardFooter>
      </Link>
    </Card>
  );
}

export default CardItem;
