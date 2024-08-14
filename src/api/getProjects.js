async function getProjects() {
  try {
    const response = await fetch("/projects.json");
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export default getProjects;
