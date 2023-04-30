import Link from "next/link"
import { bibleBooks } from "@/content/bibleBooks"

import { buttonVariants } from "@/components/ui/button"

export default function BooksPage() {
  return (
    <section className="mx-auto w-full max-w-screen-xl space-y-10 px-6 py-20">
      <div className="space-y-5">
        <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Old testament
        </h1>
        <div className="mx-auto grid w-full grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6">
          {bibleBooks.oldTestament.map((book) => (
            <Link
              href={`/books/${book.slug}`}
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
              href={`/books/${book.slug}`}
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
