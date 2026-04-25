"use client"
import Image from "next/image";
import { useState } from "react";
import Markdown from 'react-markdown'
  
export default function Home() {
  const[query, setQuery] = useState("");
  const [copyStatus, setCopyStatus] = useState("Copy");
  const handleCopy = async () => {
    try {
      // Direct call to write text to clipboard
      await navigator.clipboard.writeText(query);
      setCopyStatus("Copied!");
      
      // Reset status after 2 seconds
      setTimeout(() => setCopyStatus("Copy"), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
      setCopyStatus("Error");
    }
  };
  return (  
    <div className="flex prose lg:prose-xl dark:prose-invert">
      <button onClick={handleCopy}>{copyStatus}</button>
      <textarea name="something" id="" className="w-[700px] h-screen border-2 border-black" onChange={(e) => setQuery(e.target.value)}></textarea>
      <Markdown >{query}</Markdown>
    </div>
  );
}
