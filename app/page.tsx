import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export default async function IndexPage() {
  const { stargazers_count: stars } = (await fetch(
    "https://api.github.com/repos/filipeveronezi/holy-bible",
    {
      // data will revalidate every 60 seconds
      next: { revalidate: 60 },
    }
  ).then((res) => res.json())) as { stargazers_count: number }

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="mx-auto flex w-full max-w-[980px] flex-col items-center gap-2 text-center">
        <h1
          className="animate-fade-up text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Free and open source <br /> Bible app
        </h1>
        <p
          className="animate-fade-up text-lg text-muted-foreground sm:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          Experience the timeless wisdom of God&apos;s written Word
          <br />
          <span className="hidden md:inline-block">
            with a modern, beautiful, and minimalistic design for an easy-to-use
            experience
          </span>
        </p>
      </div>
      <div
        className="flex animate-fade-up flex-col items-center justify-center gap-4 sm:flex-row"
        style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
      >
        <Link
          href="/books"
          className={buttonVariants({
            variant: "default",
            size: "lg",
            className: "w-full sm:w-auto",
          })}
        >
          Start reading
        </Link>
        <Link
          target="_blank"
          rel="noreferrer noopener"
          href={siteConfig.links.github}
          className={buttonVariants({
            variant: "outline",
            size: "lg",
            className: "w-full sm:w-auto",
          })}
        >
          <span className="flex gap-2">
            <Icons.gitHub className="h-5 w-5" />
            <span>Star on GitHub</span>
            <span className="font-bold">{stars}</span>
          </span>
        </Link>
      </div>
    </section>
  )
}
