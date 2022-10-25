import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  const [calledPush, setCalledPush] = useState(false);
  useEffect(() => {
    if (calledPush) return;
    else {
      setCalledPush(true);
      setTimeout(() => {
        router.push("/");
      }, 3000);
    }
  }, []);
  return (
    <div className="not-found">
      <h1>Oooops...</h1>
      <h2>That page cannot be found</h2>
      <p>
        Go back to the
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
