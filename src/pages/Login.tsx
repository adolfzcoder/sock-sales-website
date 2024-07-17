import Navbar from "../components/Navbar";
import logo from "../assets/logo-rec.png";
import { useEffect } from "react";

import supabase from "../config/supabaseClient";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
interface Inputs {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  // const history = useHistory();
  // const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    // setIsLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    // setIsLoading(false);
    if (error) {
      return alert(error.message);
    }
    console.log("Succesfully signed up");

    // history.push("/tab/home");
    navigate("/");
  };

  useEffect(() => {
    (async () => {
      const { data } = await supabase.auth.getUser();

      console.log("logout... page");

      // if (error) {
      //   return alert(error.message);
      // }

      if (data.user) {
        // history.push("/tab/home");
      }
    })();
  }, []);

  return (
    <>
      <Navbar index={2} />

      <main
        className="h-[90vh] md:h-[94vh] lg:h-[90vh] bg-main bg-cover bg-center bg-no-repeat flex flex-col justify-center font-poppins px-6 lg:px-8"
        id="bg-img"
      >
        <div className="flex justify-center">
          <img src={logo} className="w-40 mb-2 rounded-lg" alt="logo" />
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 shadow-lg rounded-lg pt-2 pb-4 px-4 bg-yellow-400"
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
                  {...register("email", { required: "Email is required" })}
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-1.5 text-black bg-yellow-200 shadow-sm ring-1 ring-inset ring-yellow-600 focus:ring-2 focus:ring-inset focus:ring-yellow-600  sm:text-sm sm:leading-6"
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
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-white hover:text-yellow-600"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-1.5 text-black bg-yellow-200 shadow-sm ring-1 ring-inset ring-yellow-600 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-600 transition-all"
              >
                Login
                {/* {isLoading ? <IonSpinner name="lines-sharp" /> : "Login"} */}
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;
