import {
    Card,
    CardTitle,
    CardHeader,
    CardContent,
    CardDescription,
    CardFooter
} from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";
import { BackgroundBeams } from "@/components/ui/background-gradient";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
    return (
        <div className="relative h-screen grid py-52 justify-items-center">
                <Card className="px-6 py-6  relative z-10">
                    <CardHeader>
                        <CardTitle>Login</CardTitle>
                        <CardDescription>Enter your credentials</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Label htmlFor="username">Username Or Email</Label>
                        <Input type="text" id="username" />
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" id="password" />
                        <Separator className="my-4 lg:my-6" />
                        <Button className="w-full">Login</Button>
                        <div className="flex space-x-4 mt-2 lg:mt-4 w-[50%]">
                                <Button className="hover:text-blue-600" variant="link">Sign up</Button>
                                <Separator orientation="vertical" className="my-4 lg:my-6"  />
                                <Button className="hover:text-blue-600" variant="link">Reset password</Button>
                        </div>
                    </CardContent>
                </Card>
            <BackgroundBeams />
        </div>
    )
}
