import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex flex-col md:flex-row md:items-center p-3 max-w-3xl mx-auto gap-5">
        <div className="flex-1">
          <Link
            to="/"
            className="font-bold dark:text-light text-4xl"
          >
            <span className="px-2 py-1 bg-gradient-to-br from-mainColor via-secColor to-tertColor rounded-lg text-light uppercase">
              Accolade&apos;s Blog
            </span>
          </Link>
          <p className="text-sm mt-5">Input your login details. You can also signup with Google.</p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput type="text" placeholder="name@company.com" id="email" />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput type="password" placeholder="Password" id="password" />
            </div>
            <Button gradientDuoTone="purpleToPink">Sign up</Button>
            <div className="flex gap-2 text-sm mt-5">
              <span>Have an account? </span>
              <Link to="/signin" className="text-blue-500">Sign in</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
