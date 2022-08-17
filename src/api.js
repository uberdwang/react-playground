export async function fetchData() {
  return fetch("pokemon.json").then((resp) => resp.json());
}
