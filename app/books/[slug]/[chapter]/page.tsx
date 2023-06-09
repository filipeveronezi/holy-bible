import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  bibleBookAbbrevBySlug,
  bibleBookNameBySlug,
} from "@/content/bibleBooks"
import { bibleApiGet } from "@/services/fetchBibleApi"

import { buttonVariants } from "@/components/ui/button"

type Props = {
  params: { slug: string }
}

export function generateMetadata({ params }: Props): Metadata {
  const { slug } = params
  return {
    title: bibleBookNameBySlug[slug],
  }
}

interface Verse {
  number: number
  text: string
}

interface Book {
  chapters: number
}

export default async function Page({ params }) {
  const { slug, chapter } = params as { slug: string; chapter: string }

  const chapterContent = await bibleApiGet<{
    verses: Verse[]
  }>(`verses/bbe/${bibleBookAbbrevBySlug[slug]}/${chapter}}`)

  if (!chapterContent) {
    return notFound()
  }

  const bookContent = await bibleApiGet<Book>(
    `books/${bibleBookAbbrevBySlug[slug]}`
  )

  if (!bookContent) {
    return notFound()
  }

  return (
    <section className="relative mx-auto mb-20 mt-5 w-full max-w-screen-xl gap-2 space-y-10 pl-20 pr-6 lg:px-0">
      <div className="fixed left-0 top-16 z-20 flex h-[calc(100vh-4rem)] w-[4rem] flex-col items-center gap-5 overflow-y-auto border-r bg-background py-5">
        {[...Array(bookContent.chapters)].map((_, index) => (
          <Link
            key={index}
            href={`/books/${slug}/${index + 1}`}
            className={buttonVariants({
              variant: index + 1 === Number(chapter) ? "default" : "outline",
              size: "sm",
              className: "py-4",
            })}
          >
            {(index + 1).toString().padStart(2, "0")}
          </Link>
        ))}
      </div>
      <div className="mx-auto space-y-5 lg:max-w-screen-md">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{`${bibleBookNameBySlug[slug]}, Chapter ${chapter}`}</h1>
        <div className="space-y-2">
          {chapterContent.verses.map((verse) => (
            <div key={verse.number} className="space-x-2">
              <span className="text-xs font-bold text-foreground">
                {verse.number}
              </span>
              <p
                dangerouslySetInnerHTML={{ __html: verse.text }}
                className="inline lg:text-lg"
                key={verse.number}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
