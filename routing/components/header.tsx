import Link from "next/link";

function NavebarPage() {
  return (
    <div>
      <nav className="container flex items-center justify-between mx-auto h-14">
        <Link href="/">
          <h1 className="text-2xl font-bold">abcd</h1>
        </Link>
        <div className="flex gap-10">
          <Link href="/performance" className="text-lg font-medium">
            Performance
          </Link>
          <Link href="/reliability" className="text-lg font-medium">
            Reliability
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavebarPage;
