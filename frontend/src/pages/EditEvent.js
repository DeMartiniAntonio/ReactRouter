import EventForm from "../components/EventForm";
import { useRouteLoaderData, json } from "react-router-dom";

function EditEventPage() {
  const data = useRouteLoaderData('event-detail');

  return <EventForm event={data.event}/>;
}

export default EditEventPage;
