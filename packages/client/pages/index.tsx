import i18next from "i18next";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const { pathname } = router;
    if (pathname === "/") {
      router.push("/" + i18next.language.substring(0, 2));
    }
  });

  return null;
}
