import SignupForm from "./SignupForm";

function Signup() {
  return (
    <div className="flex justify-center items-center h-screen bg-[url('assets/bg-intro-desktop.png')] bg-primary-red px-48">
      <div className="flex justify-between items-center">
        <div className="flex flex-col space-y-4 w-1/2">
          <p className="text-white text-6xl font-bold">Learn to code by watching others</p>
          <p className="text-white">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="bg-accent-blue py-4 text-center rounded-md text-white text-sm drop-shadow-xl">
            <span className="font-bold">Try it free 7 days</span> then $20/mo.
            thereafter
          </div>
          <SignupForm />
        </div>
      </div>
    </div>
  );
}

export default Signup;
