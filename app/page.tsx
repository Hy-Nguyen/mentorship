import Image from "next/image";

export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full flex flex-row">
        <div className="w-1/2">
          {/* <Image
            src={`https://images.unsplash.com/photo-1709213222043-88c7d63274dd?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
            alt="backdrop"
            fill
            sizes="50vw"
            style={{
              objectFit: "contain", // cover, contain, none
            }}
          /> */}
        </div>
        <div className="w-1/4 h-full bg-purple-400">
          hi
        </div>
      </div>
    </main>
  );
}
