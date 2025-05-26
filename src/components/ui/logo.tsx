import Image from "next/image";

export function Logo() {
  return (
    <div className={"relative h-16 w-full"}>
      <Image
        fill
        objectFit={"contain"}
        src={"/logo.png"}
        alt={"Reviewnow logo"}
      />
    </div>
  );
}
