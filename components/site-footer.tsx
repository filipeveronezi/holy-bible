import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="sticky top-0 z-10 w-full border-t bg-background">
      <p className="container py-5 text-center text-sm leading-loose">
        Built with{" "}
        <Link
          href="https://nextjs.org"
          className="font-medium underline underline-offset-[5px]"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js
        </Link>
        ,{" "}
        <Link
          href="https://ui.shadcn.com/"
          className="font-medium underline underline-offset-[5px]"
          target="_blank"
          rel="noopener noreferrer"
        >
          shadcn/ui
        </Link>{" "}
        and{" "}
        <Link
          href="https://www.abibliadigital.com.br"
          className="font-medium underline underline-offset-[5px]"
          target="_blank"
          rel="noopener noreferrer"
        >
          ABíbliaDigital
        </Link>
        . Designed by{" "}
        <Link
          href="https://pacy.co"
          className="font-medium underline underline-offset-[5px]"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pacy
        </Link>
        {"."}
      </p>
    </footer>
  )
}
