export async function bibleApiGet<T>(path: string) {
  const token = process.env.BIBLE_API_TOKEN

  try {
    const response = await fetch(
      `https://www.abibliadigital.com.br/api/${path}`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    )

    if (response.status !== 200) {
      return null
    }

    const data = await response.json()
    return data as T
  } catch (error) {
    return null
  }
}
