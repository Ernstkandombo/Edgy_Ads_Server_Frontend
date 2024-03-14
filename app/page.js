/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link"
import Signin from "@/components/Auth/signin";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
       <header className="py-10.5 lg:py-12 grid place-items-center">
        <div className="space-y-2 text-center">
          
          <div className="space-y-1">
            <h1 className="text-3xl font-bold">Welcome to Edgy Ads Server</h1>
            <p className="text-gray-500 dark:text-gray-400">Sign in to your account</p>
          </div>
        </div>
      </header>
        <Signin />
      <div className="space-y-2 text-center mb-10"> 
          <p className="text-gray-500 dark:text-gray-400">
            Dont have an account? <span></span>
            <Link className="underline" href="/auth/signup">
              Sign up
            </Link>
          </p>
        </div>
        <footer className="border-t py-4 grid place-items-center">
        <nav className="flex items-center justify-center space-x-4 text-sm">
          <Link className="underline" href="#">
            Terms of Service
          </Link>
          <Link className="underline" href="#">
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </main>
  );
}

