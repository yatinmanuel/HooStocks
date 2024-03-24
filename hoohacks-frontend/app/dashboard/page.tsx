import NavUser from "@/components/nav-user";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

export default function Dashboard() {
    return (
        <>
            <NavUser />
            <main>
                <div>
                    <h1 className="p-20">Dashboard</h1>


                </div>
                <div className="p-[2rem]">
                <div>
                <Card>
                        <CardHeader>
                            <CardTitle>Score</CardTitle>
                            <CardDescription>calculated based on history and current time</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                 </Card>
                 </div>
                 <div className="pt-[2rem]">
                 <Card >
                        <CardHeader>
                            <CardTitle>Score</CardTitle>
                            <CardDescription>calculated based on history and current time</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                 </Card>
                 </div>

                </div>
            </main>
        </>
    )
}
