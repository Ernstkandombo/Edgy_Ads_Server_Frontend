import React from 'react';
import Link from "next/link"
import Signup from "@/components/Auth/signup";


export default function componentName() {
  return (
   <main>
     <div className="space-y-2 text-center mt-10">
        <h1 className="text-3xl font-bold">Create an account</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Already have an account?<span></span>
          <Link className="underline" href="/">
            Sign in
          </Link>
        </p>
      </div>

      <Signup />
   </main>
  );
}
