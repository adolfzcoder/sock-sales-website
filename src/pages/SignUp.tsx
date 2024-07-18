import supabase from "../config/supabaseClient";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import logo from "../assets/logo-rec.jpg";

interface Inputs {
  email: any;
  password: any;
}

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: {},
  } = useForm<Inputs>();

  //const [isLoading, setIsLoading] = useState<any>(false);
  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    const { email, password } = formData;
    try {
      // setIsLoading(true);
      const { error } = await supabase.from("user").insert({
        email: email,
        password: password,
      });
      const { error: signUpError } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (signUpError) {
        return console.log(signUpError);
      }

      console.log("Succesfully signed yp");
      navigate("/login");
      // if (data) {
      //   console.log("succesfully added new user", data);
      //   setIsLoading(false);
      //   navigate("/dashboard");
      // }
      // if (error) {
      //   setIsLoading(false);
      // }
    } catch (error) {
      //setIsLoading(false);
    }
  };
  return (
    <>
      <Navbar index={3} />

      <main
        className="h-[90vh] md:h-[94vh] lg:h-[90vh] bg-main bg-cover bg-center bg-no-repeat flex flex-col justify-center font-poppins px-6 lg:px-8"
        id="bg-img"
      >
        <div className="flex justify-center">
          <img src={logo} className="w-40 mb-2 rounded-lg" alt="logo" />
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6 shadow-lg rounded-lg pt-2 pb-4 px-4 bg-[#FFE500]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm md:text-base lg:text-lg font-medium leading-6 text-black"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  {...register("email", {
                    required: true,
                  })}
                  className="block w-full rounded-md border-0 px-3.5 py-1.5 bg-yellow-200 text-black shadow-sm ring-1 ring-inset ring-yellow-600 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm md:text-base lg:text-lg font-medium leading-6 text-black"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  {...register("password", {
                    required: true,
                  })}
                  className="block w-full rounded-md border-0 px-3.5 py-1.5 bg-yellow-200 text-black shadow-sm ring-1 ring-inset ring-yellow-600 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-600 transition-all"
              >
                Sign Up
              </button>
            </div>

            {/* Display error message if there's an error */}
          </form>
        </div>
      </main>
    </>
  );
};

export default SignUp;
