export async function bibleApiGet<T>(path: string) {
  const token = process.env.BIBLE_API_TOKEN

  const response = await fetch(
    `https://www.abibliadigital.com.br/api/${path}`,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    }
  )

  const data = await response.json()
  return data as T
}
