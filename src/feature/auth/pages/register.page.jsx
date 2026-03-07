import ErrorMsg from "@/shared/utils/error-msg";
import InputField from "@/shared/utils/input";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { registrationAsyncThunk } from "../redux/register.thunk";
import { toast } from "sonner";

function Register() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      password: "",
      avatar: "",
      coverImage: "",
      role: "",
      bio: ""
    },
  });

  const { loading, error } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const saveData = async (data) => {
    try {
      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("mobile", data.mobile);
      formData.append("avatar", data.avatar);
      formData.append("coverImage", data.coverImage);
      formData.append("role", data.role);
      formData.append("bio", data.bio);

      await dispatch(registrationAsyncThunk(formData)).unwrap()
      navigate('/signin')
      reset()
      toast.success('Successfully Registerd')

    } catch (error) {
      console.error("Registration failed:", error);
      toast.error(error?.message);
    }
  };

  return (
    <section
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/background-register.jpg')" }}
    >
      {/* Registration Form Box */}
      <section className="p-8 w-full max-w-md">
        <div className="text-center my-6">
          <p className="text-3xl font-bold text-text-0 text-center mb-2 form-">
            Sign Un For Free
          </p>
          <p className="text-xs">
            Join us for less then one minite, with no cost
          </p>
        </div>

        <form onSubmit={handleSubmit(saveData)}>
          <section className="space-y-2">
            <div>
              <Controller
                name="name"
                control={control}
                rules={{
                  required: "Name Required !!!",
                }}
                render={({ field }) => (
                  <InputField
                    label="Name *"
                    placeholder="Mahedi Hasan Riad"
                    {...field}
                  />
                )}
              />
              {<ErrorMsg text={errors.name?.message} />}
            </div>
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
                name="mobile"
                rules={{
                  pattern: {
                    value: /^01[3-9]\d{8}$/,
                    message: "Invalid Mobile number !!!",
                  },
                  required: "Mobile Number Required !!!",
                }}
                control={control}
                render={({ field }) => (
                  <InputField
                    label="Mobile *"
                    placeholder="015*********"
                    {...field}
                  />
                )}
              />
              {<ErrorMsg text={errors.mobile?.message} />}
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
            <div>
              <Controller
                name="avatar"
                rules={{
                  required: "Profile Picture Required !!!",
                }}
                control={control}
                render={({ field: { onChange } }) => (
                  <InputField
                    type="file"
                    label="Profile Picture *"
                    onChange={(e) => onChange(e.target.files[0])}
                  />
                )}
              />
              {<ErrorMsg text={errors.avatar?.message} />}
            </div>
            <div>
              <Controller
                name="coverImage"
                control={control}
                render={({ field: { onChange } }) => (
                  <InputField
                    type="file"
                    label="Cover Image"
                    onChange={(e) => onChange(e.target.files[0])}
                  />
                )}
              />
              {<ErrorMsg text={errors.coverImage?.message} />}
            </div>
            <div>
              <Controller
                name="bio"
                control={control}
                render={({ field }) => (
                  <InputField
                    label="Bio "
                    placeholder="what's on your mind 🤔"
                    {...field}
                  />
                )}
              />
              {<ErrorMsg text={errors.bio?.message} />}
            </div>
          </section>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg cursor-pointer transition duration-300"
          >
            {loading ? "Loading..." : " Sign Up"}
          </button>
          {/* Error  */}
          <p>{error && <ErrorMsg text={error} />}</p>
          {/* already have account  */}
          <p className="text-center text-sm my-3">
            Already have an account ?{" "}
            <Link to={"/signin"} className="italic border-b text-primary-0">
              Sign In
            </Link>
          </p>
        </form>
      </section>
    </section>
  );
}

export default Register;
