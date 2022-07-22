import type { NextPage } from "next";
import { Text, Button, Avatar } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Router from "next/router";
import { supabase } from "../utils/supabaseClient";
import { signInWithGithub, signOut } from "../utils/supabaseActions";

const Home: NextPage = () => {
  const [user, setUser] = useState<any>();

  useEffect(() => {
    const user = supabase.auth.user();
    setUser(user);
    console.log(user);
  }, []);
  return (
    <>
      <>
        {user ? (
          <>
            <Text> Welcome {user.user_metadata.name}</Text>
            <Avatar src={user.user_metadata.avatar_url} />
            <Button
              onClick={() => {
                signOut();
                window.location.reload();
              }}
            >
              signOut
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={() => {
                signInWithGithub();
              }}
            >
              Login with GitHub
            </Button>
          </>
        )}
      </>
    </>
  );
};

export default Home;
