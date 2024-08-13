import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col min-h-dvh p-6">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted relative">
          <div className="absolute inset-0 rounded">
            <Image
              src="/about1.jpg"
              priority
              width={0}
              height={0}
              sizes="100vw"
              alt="about image"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-85"></div>
          </div>
          <div className="relative z-10 container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
                About Our Blog
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground text-white font-medium md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Welcome to our blog, where we share our passion for writing,
                storytelling, and exploring the world around us. Join us on our
                journey as we delve into a wide range of topics and uncover the
                extraordinary in the ordinary.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Our Mission
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Inspiring Readers, One Story at a Time
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our mission is to create a space where readers can discover
                captivating stories, thought-provoking ideas, and a deeper
                understanding of the world around them. We believe in the power
                of storytelling to inspire, educate, and connect people.
              </p>
            </div>
            <Image
              src="/about2.jpg"
              width="550"
              height="310"
              alt="Mission"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center w-full"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <Image
              src="/about3.jpg"
              width="550"
              height="310"
              alt="Team"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Our Team
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Passionate Storytellers
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our team is composed of talented writers, editors, and content
                creators who are passionate about sharing captivating stories
                and insightful perspectives. We come from diverse backgrounds
                and bring a wealth of experience to the table, united by our
                love for the written word.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Key Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Explore Our Content
              </h2>
              <div className="grid gap-6">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Diverse Topics</h3>
                  <p className="text-muted-foreground">
                    Our blog covers a wide range of topics, from travel and
                    lifestyle to technology and personal development.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Engaging Storytelling</h3>
                  <p className="text-muted-foreground">
                    We believe in the power of storytelling to captivate and
                    inspire our readers.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Insightful Analysis</h3>
                  <p className="text-muted-foreground">
                    Our team provides in-depth analysis and unique perspectives
                    on the topics we cover.
                  </p>
                </div>
              </div>
            </div>
            <Image
              src="/about4.jpg"
              width="550"
              height="310"
              alt="Features"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
          </div>
        </section>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-muted-foreground">
            &copy; 2019 SnippetPal. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              href="#"
              className="text-xs hover:underline underline-offset-4"
              prefetch={false}
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-xs hover:underline underline-offset-4"
              prefetch={false}
            >
              Privacy
            </Link>
          </nav>
        </footer>
      </div>
    </div>
  );
}
