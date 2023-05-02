import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="sticky top-0 z-10 w-full border-t bg-background">
      <div className="container flex h-20 items-center justify-center text-center text-sm">
        <span className="font-medium">
          ⚡ Built with{" "}
          <Link
            href="https://nextjs.org"
            className="underline underline-offset-2 lg:no-underline lg:hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </Link>
          ,{" "}
          <Link
            href="https://ui.shadcn.com/"
            className="underline underline-offset-2 lg:no-underline lg:hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            shadcn/ui
          </Link>{" "}
          and{" "}
          <Link
            href="https://www.abibliadigital.com.br"
            className="underline underline-offset-2 lg:no-underline lg:hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            ABíbliaDigital
          </Link>
        </span>
      </div>
    </footer>
  )
}
