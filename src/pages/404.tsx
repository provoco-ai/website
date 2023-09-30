import Link from "next/link";

import { Button } from "~/components/Button";
import { Logo } from "~/components/Logo";

export default function NotFound() {
  return (
    <div className="relative flex min-h-full justify-center bg-gradient-to-b from-blue-600 to-sky-500 md:px-12 lg:px-0">
      <div className="relative z-10 flex flex-1 flex-col bg-white px-4 py-10 shadow-2xl sm:justify-center md:flex-none md:px-28">
        <main className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
          <div className="flex">
            <Link href="/">
              <Logo className="h-10 w-auto" />
            </Link>
          </div>
          <p className="mt-20 text-sm font-medium text-gray-700">404</p>
          <h1 className="mt-3 text-lg font-semibold text-gray-900">
            Page not found
          </h1>
          <p className="mt-3 text-sm text-gray-700">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <Button href="/" className="mt-10">
            Go home
          </Button>
        </main>
      </div>
    </div>
  );
}
