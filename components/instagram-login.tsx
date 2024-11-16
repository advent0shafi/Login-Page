'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"

export function InstagramLogin() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container flex min-h-screen items-center justify-center px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative hidden aspect-square lg:block">
            <div className="absolute inset-0">
              <div className="relative h-full">
                <div className="absolute left-4 top-8 z-10 h-[600px] w-[280px] rotate-[-5deg] overflow-hidden rounded-[2.5rem] border-8 border-black bg-black">
                  <Image
                    alt="Instagram interface"
                    className="h-full w-full object-cover"
                    height="600"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "280/600",
                      objectFit: "cover",
                    }}
                    width="280"
                  />
                </div>
                <div className="absolute right-4 top-16 h-[600px] w-[280px] rotate-[5deg] overflow-hidden rounded-[2.5rem] border-8 border-black bg-black">
                  <Image
                    alt="Instagram story"
                    className="h-full w-full object-cover"
                    height="600"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "280/600",
                      objectFit: "cover",
                    }}
                    width="280"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mx-auto w-full max-w-md space-y-6">
              <div className="space-y-2 text-center">
                <Image src={'/instgram.png'} alt="" width={175} height={51} className="object-contain w-full h-full" />
              </div>
              <div className="space-y-4">
                <form className="space-y-4">
                  <Input
                    className="bg-zinc-900"
                    placeholder="Phone number, username or email address"
                    type="text"
                  />
                  <Input
                    className="bg-zinc-900"
                    placeholder="Password"
                    type="password"
                  />
                  <Button className="w-full bg-blue-500 hover:bg-blue-600" type="submit">
                    Log in
                  </Button>
                </form>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-zinc-800" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-black px-2 text-zinc-400">Or</span>
                  </div>
                </div>
                <Button className="w-full" variant="outline">
                <svg
  aria-label="Log in with Facebook"
  className="x1lliihq x1n2onr6 x173jzuc"
  fill="currentColor"
  height="20"
  role="img"
  viewBox="0 0 16 16"
  width="20"
>
  <title>Log in with Facebook</title>
  <g clipPath="url(#a)">
    <path
      d="M8 0C3.6 0 0 3.6 0 8c0 4 2.9 7.3 6.8 7.9v-5.6h-2V8h2V6.2c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.3V8h2.2l-.4 2.3H9.2v5.6C13.1 15.3 16 12 16 8c0-4.4-3.6-8-8-8Z"
      fill="currentColor"
    />
  </g>
  <defs>
    <clipPath id="a">
      <rect fill="currentColor" height="16" width="16" />
    </clipPath>
  </defs>
</svg>

                  Log in with Facebook
                </Button>
                <div className="text-center text-sm">
                  <Link className="text-blue-500 hover:underline" href="#">
                    Forgotten your password?
                  </Link>
                </div>
              </div>
              <div className="text-center text-sm">
                Don't have an account?{" "}
                <Link className="text-blue-500 hover:underline" href="#">
                  Sign up
                </Link>
              </div>
              <div className="space-y-4">
                <p className="text-center text-sm">Get the app.</p>
                <div className="flex justify-center gap-4">
                  <Link href="#">
                    <Image
                      alt="Download on the App Store"
                      height="40"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "120/40",
                        objectFit: "cover",
                      }}
                      width="120"
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      alt="Get it on Google Play"
                      height="40"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "120/40",
                        objectFit: "cover",
                      }}
                      width="120"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="border-t border-zinc-800 py-6 text-center text-sm text-zinc-400">
        <nav className="mb-4 space-x-4">
          <Link className="hover:underline" href="#">
            Meta
          </Link>
          <Link className="hover:underline" href="#">
            About
          </Link>
          <Link className="hover:underline" href="#">
            Blog
          </Link>
          <Link className="hover:underline" href="#">
            Jobs
          </Link>
          <Link className="hover:underline" href="#">
            Help
          </Link>
          <Link className="hover:underline" href="#">
            API
          </Link>
          <Link className="hover:underline" href="#">
            Privacy
          </Link>
          <Link className="hover:underline" href="#">
            Terms
          </Link>
          <Link className="hover:underline" href="#">
            Locations
          </Link>
          <Link className="hover:underline" href="#">
            Instagram Lite
          </Link>
          <Link className="hover:underline" href="#">
            Threads
          </Link>
          <Link className="hover:underline" href="#">
            Contact uploading and non-users
          </Link>
          <Link className="hover:underline" href="#">
            Meta Verified
          </Link>
        </nav>
        <div className="flex items-center justify-center gap-4">
          <select className="bg-transparent text-sm">
            <option>English (UK)</option>
          </select>
          <span>© 2024 Instagram from Meta</span>
        </div>
      </footer>
    </div>
  )
}