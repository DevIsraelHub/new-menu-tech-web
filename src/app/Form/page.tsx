"use client";
import React, { useState, useEffect } from "react";
import SignUp from "@/components/Signup";
import LogIn from "@/components/LogIn";

export default function Form() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  return (
    <main className="w-full bg-white mx-auto overflow-hidden">

      {showSignUp ? (
        <SignUp onToggle={() => setShowSignUp(false)} />
      ) : (
        <LogIn onToggle={() => setShowSignUp(true)} />
      )}
    </main>
  );
}
