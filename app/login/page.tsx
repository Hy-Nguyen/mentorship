import Image from "next/image";

export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full">
        <Image
          src={`https://images.unsplash.com/photo-1706202599694-631dc17643c9?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
          alt="backdrop"
        />
      </div>
    </main>
  );
}
