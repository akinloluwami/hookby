import React, { useState, useEffect } from "react";

function profile() {
  const [jwt, setJwt] = useState("");

  useEffect(() => {
    const token: string = window.location.search.split("=")[1];
    if (token) {
      setJwt(token);
      //   window.history.replaceState({}, document.title, "/profile");
      console.log(jwt);
    }
  }, [jwt]);

  return <div>profile</div>;
}

export default profile;
