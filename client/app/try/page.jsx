"use client";
import Navbar from "@/ui/navbar/navbar";
import { useState, useEffect } from "react";
import { redirect } from "next/navigation";

const ChatComponent = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/protected");
        console.log("Response from API:", res);
        if (res.ok) {
          setUser("ok");
        } else {
          console.error("API call failed with status:", res.status);
          setUser(null);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return <>{user ? <Navbar /> : redirect('/')}</>;
};

export default ChatComponent;
