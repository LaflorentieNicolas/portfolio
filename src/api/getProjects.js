async function getProjects() {
  try {
    const response = await fetch("/data/projects.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Failed to fetch projects:", err);
    throw err;
  }
}

export default getProjects;
