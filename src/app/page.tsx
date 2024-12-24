import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      Click <Link href={"/documents/123"}> here</Link>
    </div>
  );
};

export default Home;
