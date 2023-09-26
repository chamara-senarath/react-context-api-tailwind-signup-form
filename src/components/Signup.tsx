import SignupForm from "./SignupForm";

function Signup() {
  return (
    <div className="flex bg-primary-red bg-[url('assets/bg-intro-mobile.png')] md:bg-[url('assets/bg-intro-desktop.png')] md:h-screen ">
      <div className="flex flex-col items-center px-8 py-12 space-y-12 md:flex-row md:justify-around md:items-center md:p-0">
        <div className="flex flex-col space-y-4 w-10/12 md:w-1/3">
          <p className="text-white font-bold text-center text-2xl md:text-left md:text-5xl">
            Learn to code by watching others
          </p>
          <p className="text-white text-center text-sm md:text-left md:text-lg">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>

        <div className="flex flex-col space-y-4 md:w-2/5">
          <div className="bg-accent-blue py-4 px-14 text-center rounded-md text-white text-sm shadow-[0px_8px_0px_0px] shadow-neutral-darkBlue/20">
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
