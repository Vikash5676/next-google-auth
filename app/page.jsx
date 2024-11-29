import UserProvider from "@/components/ContextProvider/ContextProvider";
import HomePage from "@/components/HomePage/HomePage";

export default function Home() {
  return (
    <div className="w-full h-screen ">
      <UserProvider>
        <HomePage />
      </UserProvider>
    </div>
  );
}
