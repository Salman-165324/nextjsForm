import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <Card className="">
        <CardHeader className="text-xl">
          <CardTitle>Sign up</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
        <form className="grid">
            <Label htmlFor="first-name">First Name</Label>
            <Input id="first-name" placeholder="First Name"></Input>

            <Label htmlFor="last-name">Last Name</Label>
            <Input id="last-name" placeholder="Last Name"></Input>

            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" />

            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />

            <Button type="submit" className="w-full">
              Create an account
            </Button>
          </form>
        </CardContent>
        <CardFooter>
        
        </CardFooter>
      </Card>
    </div>
  );
}
