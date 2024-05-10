import dynamic from "next/dynamic";
// import Image from "next/image";

export default function Details() {
  const ContentCompoennt = dynamic(() => import("../content/page"));
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ContentCompoennt />
    </main>
  );
}
