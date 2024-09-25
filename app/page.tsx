import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="px-10 flex justify-center items-center flex-col space-y-7">
      <h1 className="text-3xl font-bold text-center">Welcome to Prayer App</h1>
      <p className="text-lg w-[70%] text-center">
        Prayer App is a simple tool to help you pray together with your loved
        ones. Just select a church and provide a prayer, and we'll do the rest.
      </p>
      <div className=" max-w-96 space-y-6 pb-10">
        <Card>
          <CardHeader>
            <h2 className="text-xl font-bold">Create a prayer</h2>
          </CardHeader>
          <CardContent>
            <p>
              Start by selecting a church from the dropdown menu and providing a
              prayer. We'll do the rest.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/request-prayer"> Continue</Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <h2 className="text-xl font-bold">See all prayers</h2>
          </CardHeader>
          <CardContent>
            <p>
              See all the prayers that have been requested for approval.
              Approve, decline, or follow up as needed.
            </p>
            <p>You need to be a church admin to access this page</p>
          </CardContent>
          <CardFooter>
            <Link href="/all-prayers"> Continue</Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <h2 className="text-xl font-bold">Prayers to pray together</h2>
          </CardHeader>
          <CardContent>
            <p>
              Here are the prayers we can prayer together as a church family
            </p>
            <p>You need to be a church admin to access this page</p>
          </CardContent>
          <CardFooter>
            <Link href="/prayers-to-pray"> continue</Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <h2 className="text-xl font-bold">Prayers to pray together</h2>
          </CardHeader>
          <CardContent>
            <p>
              If you are new to the platform as a church you can create an
              account in just 3 minutes and then you can start accepting prayers
              as a church
            </p>
            <p>You need to be a church admin to access this page</p>
          </CardContent>
          <CardFooter>
            <Link href="/register-church"> continue</Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
