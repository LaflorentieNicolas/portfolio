import getProjects from "./getProjects";

export default async function getProject(id) {
  const data = await getProjects();
  return data.find((item) => item.id === id);
}
