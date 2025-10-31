import React from "react";
import SignupForm from "../components/signup-form.jsx";

const SignUpPage = () => {
  return (
    <div>
      <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
        <div className="w-full max-w-sm">
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
