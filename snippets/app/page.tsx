import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function Home() {

  const snippets = await prisma.snippet.findMany();

  

  return (
    <div>
      <h1 className="font-bold text-4xl">Home</h1>
      <div className=" flex items-center justify-between ">
        <h1>
          Snippets
        </h1>
        <Link href={"/snippet/new"}><Button >See All</Button></Link>
      </div>
      {
        snippets.map((snippet) => (
          <div key={snippet.id} className="p-4 my-4 border rounded-lg">
            <h2 className="font-semibold text-2xl">{snippet.title}</h2>
            <pre className="bg-gray-100 p-4 rounded mt-2 overflow-x-auto">
              <code>{snippet.code}</code>
            </pre>
          </div>
        ))
          
      }
    </div>
  );
}
