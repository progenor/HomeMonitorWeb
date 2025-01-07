import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LogIn from "./LogIn";
import Register from "./Register";

export default function LogInRegisterBox() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="register">Register</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        {/*  LOG IN Component*/}
        <LogIn />
      </TabsContent>
      <TabsContent value="register">
        {/* REGISTER Component */}
        <Register />
      </TabsContent>
    </Tabs>
  );
}
