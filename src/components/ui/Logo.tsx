import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center" aria-label="Design By Dial home">
      <Image
        src="/images/logo/logo-full.png"
        alt="Design by Dial"
        width={940}
        height={218}
        className="h-9 w-auto"
        priority
      />
    </Link>
  );
}
