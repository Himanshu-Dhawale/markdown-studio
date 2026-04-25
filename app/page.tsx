"use client"
import Image from "next/image";
import { useState } from "react";
import Markdown from 'react-markdown'

export default function Home() {
  const[query, setQuery] = useState("")
  return (  
    <div className="flex prose lg:prose-xl dark:prose-invert">
      <textarea name="something" id="" className="w-[700px] h-screen border-2 border-black" onChange={(e) => setQuery(e.target.value)}></textarea>
      <Markdown >{query}</Markdown>
    </div>
  );
}
