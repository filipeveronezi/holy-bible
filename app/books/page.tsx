import Link from "next/link"
import { bibleBooks } from "@/content/bibleBooks"

import { buttonVariants } from "@/components/ui/button"

export const metadata = {
  title: "Books",
}

export default function BooksPage() {
  return (
    <section className="container my-10 h-full w-full space-y-10">
      <div className="space-y-5">
        <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Old testament
        </h1>
        <div className="mx-auto grid w-full grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6">
          {bibleBooks.oldTestament.map((book) => (
            <Link
              key={book.slug}
              href={`/books/${book.slug}/1`}
              className={buttonVariants({
                variant: "secondary",
                size: "default",
              })}
            >
              {book.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="space-y-5">
        <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          New testament
        </h1>
        <div className="mx-auto grid w-full grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6">
          {bibleBooks.newTestament.map((book) => (
            <Link
              key={book.slug}
              href={`/books/${book.slug}/1`}
              className={buttonVariants({
                variant: "secondary",
                size: "default",
              })}
            >
              {book.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
