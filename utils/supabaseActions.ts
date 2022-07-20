import { supabaseClient } from "./supabaseClient";

async function signInWithGithub() {
  const { user, session, error } = await supabaseClient.auth.signIn({
    provider: "github",
  });
}

async function signOut() {
  const { error } = await supabaseClient.auth.signOut();
}

export { signInWithGithub, signOut };
