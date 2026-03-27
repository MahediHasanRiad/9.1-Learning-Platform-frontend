import ErrorMsg from "@/shared/utils/error-msg";
import InputField from "@/shared/utils/input";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { loginAsyncThunk } from "../redux/login.thunk";
import { toast } from "sonner";
import img from '../../../../public/images/background-register.jpg'
import type { AppDispatch, RootState } from "@/store/store";
import type { LoginInput } from "../auth-type";

function LogIn() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { loading, error} = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const saveData: SubmitHandler<LoginInput> = async (data) => {
    try {
      await dispatch(loginAsyncThunk(data))
        .unwrap()
        .then(() => {
          navigate("/teachers");
          toast.success("Successfully Login");
          reset;
        });
        // toast.error(error)
    } catch (error: any) {
      toast.error(error);
    }
  };

  return (
    <section
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${img})` }}
    >
      {/* Registration Form Box */}
      <section className="p-8 w-full max-w-md">
        <div className="text-center my-6">
          <p className="text-3xl font-bold text-text-0 text-center mb-2 form-">
            Sign In
          </p>
        </div>

        <form onSubmit={handleSubmit(saveData)}>
          <section className="space-y-2">
            <div>
              <Controller
                name="email"
                control={control}
                rules={{
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid Email Address !!!",
                  },
                  required: "Email Required !!!",
                }}
                render={({ field }) => (
                  <InputField
                    label="Email *"
                    placeholder="riad@gmail.com"
                    {...field}
                  />
                )}
              />
              {<ErrorMsg text={errors.email?.message} />}
            </div>

            <div>
              <Controller
                name="password"
                rules={{
                  required: "Password Required !!!",
                }}
                control={control}
                render={({ field }) => (
                  <InputField
                    label="Password *"
                    placeholder="*************"
                    {...field}
                  />
                )}
              />
              {<ErrorMsg text={errors.password?.message} />}
            </div>
          </section>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg cursor-pointer transition duration-300"
          >
            {loading ? 'Loading...' : 'Sign In'}
          </button>
          {/* already have account  */}
          <p className="text-center text-sm my-3">
            Don't have an account ?{" "}
            <Link to={"/register"} className="italic border-b text-primary-0">
              Registration
            </Link>
          </p>
        </form>
      </section>
    </section>
  );
}

export default LogIn;
