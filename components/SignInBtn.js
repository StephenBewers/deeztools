import React from "react";
import { Button } from "react-bootstrap";

const SignInBtn = () => {
  return (
    <>
      <p>You need to sign in with your Deezer account to use this tool.</p>
      <Button
        variant="primary"
        href="#"
        onClick={() => Popup("/signin", "Deezer Sign In")}
        className="mt-3"
      >
        Sign in with Deezer
      </Button>
    </>
  );
};

export default SignInBtn;
