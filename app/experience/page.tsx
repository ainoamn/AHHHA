import ExperienceList from "./experience-list";
import { getExperienceContent } from "../../lib/site-settings";

export const dynamic = "force-dynamic";

export default async function ExperiencePage() {
  const experience = await getExperienceContent();
  return <ExperienceList experience={experience} />;
}
