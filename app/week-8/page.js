"use client";

import React from 'react';
import { useUserAuth } from "./_utils/auth-context";
import Link from 'next/link';

const LandingPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Shopping List App</h1>
      {user ? (
        <>
          <p className="text-lg font-bold">Signed in as {user.displayName} ({user.email}).</p>
          <button 
            onClick={firebaseSignOut} 
            className="mt-4 p-2 bg-red-500 text-white rounded"
          >
            Sign Out
          </button>
          <Link href="/week-8/shopping-list">
            <button className="mt-4 p-2 bg-blue-500 text-white rounded">Continue to your Shopping List</button>
          </Link>
        </>
      ) : (
        <button 
          onClick={gitHubSignIn} 
          className="p-2 bg-green-500 text-white rounded"
        >
          Sign in with GitHub
        </button>
      )}
    </div>
  );
};

export default LandingPage;
