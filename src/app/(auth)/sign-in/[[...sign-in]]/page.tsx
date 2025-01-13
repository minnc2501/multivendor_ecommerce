import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className="w-full h-screen grid place-content-center">
      <SignIn />
    </div>
  );
};

export default SignInPage;
