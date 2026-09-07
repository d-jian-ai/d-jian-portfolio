"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/providers/language-provider";

export function LocalizedProjectEntry({ href }: { href: string }) {
  const { locale, dictionary } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const destination = `${href}?lang=${locale}`;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Let the language provider restore the saved choice before leaving React.
    if (mounted) window.location.replace(destination);
  }, [destination, mounted]);

  return (
    <div className="section-frame">
      <a className="back-action" href={destination}>
        {dictionary.work.open}
      </a>
    </div>
  );
}
