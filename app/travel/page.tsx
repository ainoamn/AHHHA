import TravelList from "./travel-list";
import { listPublicTravelCountries } from "../../lib/travel-data";

export const dynamic = "force-dynamic";

export default async function TravelPage() {
  const countries = await listPublicTravelCountries();
  return <TravelList countries={countries} />;
}
