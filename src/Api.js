const apiAddress = "https://skypro-music-api.skyeng.tech";

export async function getTracksAll() {
  const response = await fetch(`${apiAddress}/catalog/track/all/`, {
    method: "GET",
  });
  if (response.status !== 200)
    throw new Error("Не удалось загрузить плейлист, попробуйте позже");

  const data = await response.json();

  return data;
}
