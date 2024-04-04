import logo from './logo.svg';
import './App.css';
import Login from './page/login';
import login_icon from './asset/login-icon.png'
import TextInput from './component/textinput';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
    {/* Colored line for small devices */}
    <div className="bg-[#f2d184] h-14 block md:hidden "><h1 className='logo !my-3'>dribbble</h1></div>
    {/* Main content */}
    <div className="flex flex-1">
      {/* Left div */}
      <div className="w-2/5 bg-[#f2d184] hidden md:block p-4">
        {/* Content for the left side */}
        <h1 className='logo'>dribbble</h1>
        <h1 className='dis'>Discover the workd's top <br/> Designers & Creative</h1>
        <img
          alt="Art by Peter Tarka"
          className="mt-12"
          height="450"
          src={login_icon}
          style={{
            aspectRatio: "600/500",
            objectFit: "cover"
          }}
          width="500"
        />
        <p className='text-[#886418] ml-16 mt-12'>Art by <span className='underline underline-offset-auto'>Peter Tarka</span></p>
      </div>
      {/* Right div */}
      <div className="w-full md:w-3/5 bg-white p-4 md:p-12">
        {/* Content for the right side */}
        <div className='w-full flex flex-col'>
          <div className='text-right w-full'><p>Already a member? <a href='#'>Sign In</a></p></div>
          <div className='md:w-3/5 m-4 mx-8 md:m-auto md:mt-16 flex flex-col gap-8'>
            <span className='text-2xl font-bold'>Sign up to Dribbble</span>
            <div className='error-message text-red-600 hidden'>
              * Username has already been taken
            </div>
            <div className='flex md:flex-row flex-col gap-4'>
              <div className='flex-1'><TextInput txtValue={"Name"}/></div>
              <div className='flex-1'><TextInput txtValue={"Username"}/></div>
            </div>
            <div className='flex-1'><TextInput txtValue={"Email"}/></div>
            <div className='flex-1'><TextInput txtValue={"Password"}/></div>
            <div className='flex gap-2'><input type='checkbox' className='size-3 w-8 h-8'/><p>Creating an accout means you're okay with our <a href='#'>Terms of Service, Privacy Policy,</a> and our default <a href='#'>Notification Settings.</a></p></div>
            <button className='md:w-1/2 w-full bg-[#ea4b8b] text-white p-2 mt-2 rounded-md'>Create Account</button>
            <div><p>This site is protected by reCAPTCHA and Google <br/> <a>Privacy Policy</a> and <a>Terms of Service</a> apply.</p></div>
            </div>

        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
