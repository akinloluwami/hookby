import React, { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { signInWithGithub, signOut } from "../utils/supabaseActions";

function Login() {
  return (
    <>
      <Button
        onClick={() => {
          signInWithGithub();
        }}
      >
        Login with GitHub
      </Button>
      <Button color={"red.500"} mx={"10px"} onClick={() => signOut()}>
        Logout
      </Button>
    </>
  );
}

export default Login;
