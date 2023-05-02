import Image from "next/image"
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
      <div
        className="relative mx-auto mt-10 flex w-max animate-fade-up items-center justify-center"
        style={{ animationDelay: "0.40s", animationFillMode: "forwards" }}
      >
        <div className="relative h-[16rem] w-[16rem] xl:h-[25rem] xl:w-[25rem]">
          <Image
            className="object-contain"
            src="/3d-book.png"
            alt="3D book illustration"
            fill
            sizes="100%"
          ></Image>
        </div>
        <div className="absolute inset-x-0 top-0 mx-auto flex w-full flex-col items-center gap-3 text-center text-xs font-bold italic">
          <span className="ml-[2rem] w-max max-w-[20rem] rounded-full border border-muted/70 bg-muted/40 px-10 py-3 backdrop-blur-sm lg:ml-[20rem]">
            &quot;Your Word is a light for my feet,
            <br />
            ever shining on my way.&quot;
          </span>
          <span className="mr-[2rem] w-max max-w-[20rem] rounded-full border border-muted/70 bg-muted/40 px-10 py-3 backdrop-blur-sm lg:mr-[18rem]">
            &quot;Make them holy by the true Word:
            <br />
            your Word is the true Word.&quot;
          </span>
          <span className="ml-[2rem] w-max max-w-[20rem] rounded-full border border-muted/70 bg-muted/40 px-10 py-3 backdrop-blur-sm lg:ml-[15rem]">
            &quot;All Scripture is given by
            <br />
            inspiration of God...&quot;
          </span>
          <span className="mr-[2rem] w-max max-w-[20rem] rounded-full border border-muted/70 bg-muted/40 px-10 py-3 backdrop-blur-sm lg:mr-[16rem]">
            &quot;The Word of God is living
            <br />
            and full of power...&quot;
          </span>
        </div>
        <svg
          className="absolute top-0 -z-10 h-full w-full opacity-70 blur-3xl"
          width="486"
          height="473"
          viewBox="0 0 486 473"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_24_2)">
            <path
              d="M257.984 378.901C196.845 368.614 210.198 248.989 215.889 222.539C211.433 210.483 206.549 188.246 204.512 150.779C198.832 46.3105 387.297 154.444 408.484 205.977C420.999 240.983 323.424 389.911 257.984 378.901Z"
              fill="#DC25A9"
            />
            <path
              d="M362.673 148.146C395.573 205.775 319.418 194.271 306.343 199.145C310.74 168.344 304.114 122.898 226.835 193.425C149.557 263.952 99.0131 137.227 125.496 88.2048C144.674 56.357 329.773 90.5166 362.673 148.146Z"
              fill="#C81E27"
            />
            <path
              d="M119.879 224.51C174.044 186.173 238.776 263.879 244.896 276.42C213.813 275.032 125.212 245.141 202.905 315.21C280.599 385.279 193.558 410.623 142.197 389.023C108.639 373.026 65.7148 262.848 119.879 224.51Z"
              fill="#14307D"
            />
            <path
              d="M111.376 296.019C50.8001 268.925 84.7145 173.645 92.3911 161.991C107.025 189.45 126.416 280.924 147.158 178.378C167.9 75.8318 234.034 137.838 241.598 193.04C244.919 230.067 171.952 323.114 111.376 296.019Z"
              fill="#D7452F"
            />
            <path
              d="M184.564 196.049C238.728 157.712 303.46 235.417 309.581 247.958C278.498 246.571 189.896 216.679 267.59 286.749C345.284 356.818 258.243 382.162 206.882 360.561C173.323 344.565 130.399 234.386 184.564 196.049Z"
              fill="#1B1B1B"
            />
            <path
              d="M184.564 196.049C238.728 157.712 303.46 235.417 309.581 247.958C278.498 246.571 189.896 216.679 267.59 286.749C345.284 356.818 258.243 382.162 206.882 360.561C173.323 344.565 130.399 234.386 184.564 196.049Z"
              fill="#571EC8"
            />
            <path
              d="M90.875 172.145C119.03 111.996 148.959 112.803 160.404 120.725C132.793 134.84 102.978 168.775 204.611 191.59C306.245 214.405 221.493 233.071 166.413 239.553C129.503 242.146 62.7199 232.294 90.875 172.145Z"
              fill="#DC6725"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_24_2"
              x="0"
              y="0"
              width="485.578"
              height="472.504"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="38"
                result="effect1_foregroundBlur_24_2"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </section>
  )
}
