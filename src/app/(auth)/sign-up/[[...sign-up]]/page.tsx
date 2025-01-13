import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div className="w-full h-screen grid place-content-center">
      <SignUp />
    </div>
  );
};

export default SignUpPage;
