import { supabase } from "./supabaseClient";

async function signInWithGithub() {
  const { user, session, error } = await supabase.auth.signIn({
    provider: "github",
  });
}

async function signOut() {
  const { error } = await supabase.auth.signOut();
}

export { signInWithGithub, signOut };
