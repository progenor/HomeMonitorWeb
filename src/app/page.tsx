import { AuthProvider } from "@/context/AuthContext";
import LogInRegisterBox from "@/components/LogInRegisterBox";
import Image from "next/image";

export default function Home() {
  return (
    <AuthProvider>
      <div className="flex items-center justify-center min-h-screen bg-background">
        <LogInRegisterBox />
      </div>
    </AuthProvider>
  );
}
