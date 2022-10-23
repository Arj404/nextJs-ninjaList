import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>Homepage</h2>
      <Link href="ninjas">
        <a>See Ninja Listing</a>
      </Link>
    </div>
  );
}
