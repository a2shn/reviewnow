import Image from "next/legacy/image";

export function Logo() {
  return (
    <div className={"flex justify-start relative h-16 w-full"}>
      <Image width={70} height={100} src={"/logo.png"} alt={"Reviewnow logo"} />
    </div>
  );
}
