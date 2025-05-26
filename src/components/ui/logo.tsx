import Image from "next/legacy/image";

export function Logo() {
  return (
    <div className={"relative h-16 w-full"}>
      <Image
        layout="fill"
        objectFit={"contain"}
        src={"/logo.png"}
        alt={"Reviewnow logo"}
      />
    </div>
  );
}
