import { SignIn } from "@clerk/nextjs";

export default function Page() {
    console.log("SignIn")
  return (
    <div className="py-4 flex items-center justify-center">
      <SignIn />
    </div>
  );
}
