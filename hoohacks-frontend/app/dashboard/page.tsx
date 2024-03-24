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
                    <h1 className="pl-9 pt-20 font-bold text-xl">Dashboard</h1>
                </div>
                <div className="pt-[1rem] grid grid-cols-3">
                    <div className="p-3">
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    <div className="grid grid-cols-6 col-start-2 col-end-6">
                                        <p className="font-bold text-xl">Name: </p>
                                        <p className="text-xl text-left">name</p>
                                    </div>
                                </CardTitle>
                            </CardHeader>
                        </Card>
                    </div>
                    <div className="p-3">
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    <div className="grid grid-cols-6 col-start-2 col-end-6">
                                        <p className="font-bold text-xl">Ticker: </p>
                                        <p className="text-xl text-left">xxxx</p>
                                    </div>
                                </CardTitle>
                            </CardHeader>
                        </Card>
                    </div>
                    <div className="p-3">
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    <div className="grid grid-cols-3">
                                        <p className="font-bold text-xl">Current Price: </p>
                                        <p className="text-xl text-left">$0</p>
                                    </div>
                                </CardTitle>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
                <div className="pb-[2rem] grid grid-cols-3 ">
                    <div className="p-3">
                        <Card>
                            <CardHeader>
                                <CardTitle className="grid justify-items-center text-xl font-bold">Letter Score</CardTitle>
                                <CardDescription className="grid justify-items-center text-center" >A letter representation calculated based on history and current performance</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="grid justify-items-center text-7xl font-bold">A</p>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="p-3">
                        <Card >
                            <CardHeader>
                                <CardTitle className="grid justify-items-center text-xl font-bold">Justification</CardTitle>
                                <CardDescription className="grid justify-items-center text-center" >Scoring reasoning</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="p-3">
                        <Card >
                            <CardHeader>
                                <CardTitle className="grid justify-items-center text-xl font-bold">Index Score</CardTitle>
                                <CardDescription className="grid justify-items-center text-center" >A number representation calculated based on history and current performance, out of 100</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="grid justify-items-center text-7xl font-bold">100</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </>
    )
}
