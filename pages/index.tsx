import type { NextPage } from "next";
import { Text, Button, Avatar } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Router from "next/router";
import { supabase } from "../utils/supabaseClient";
import { signInWithGithub, signOut } from "../utils/supabaseActions";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";

const Home: NextPage = () => {
  const [user, setUser] = useState<any>();

  useEffect(() => {
    const user = supabase.auth.user();
    setUser(user);
    console.log(user);
  }, []);
  return (
    <>
      <Hero />
    </>
  );
};

export default Home;
