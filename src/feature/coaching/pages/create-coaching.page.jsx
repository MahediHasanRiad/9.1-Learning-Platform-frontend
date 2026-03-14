import MainLayout from "@/layout/Main-Layout";
import Button from "@/shared/utils/button";
import ErrorMsg from "@/shared/utils/error-msg";
import InputField from "@/shared/utils/input";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { createCoachingAsyncThunk } from "../redux/createCoaching.thunk";

import img from '../../../../public/images/coaching.svg'

function CreateCoaching() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      CcName: "",
      address: "",
    },
  });


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const saveData = async (data) => {
    try {
      // unwrap => convert in promise for proper working pending/fullfill/reject
      await dispatch(createCoachingAsyncThunk({
        CcName: data.CcName,
        address: data.address
      })).unwrap();

      toast.success("Success");
      navigate("/");
      reset();
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <MainLayout>
      <section className="grid md:grid-cols-2 items-center justify-center mt-6 gap-6">
        <div className="mx-auto w-2/3">
          <img
            src={img}
            className="bg-background-0 text-secondary-0"
            alt=""
          />
        </div>
        <div className="">
          <form onSubmit={handleSubmit(saveData)}>
            <section className="md:w-2/4 mx-auto space-y-4">
              <div>
                <Controller
                  name="CcName"
                  control={control}
                  rules={{
                    required: "Coaching name are required !!!",
                  }}
                  render={({ field }) => (
                    <InputField
                      label="Coaching Center Name *"
                      placeholder="RST institute"
                      {...field}
                    />
                  )}
                />
                {<ErrorMsg text={errors.CcName?.message} />}
              </div>
              <div>
                <Controller
                  name="address"
                  rules={{
                    required: "Coaching address are required !!!",
                  }}
                  control={control}
                  render={({ field }) => (
                    <InputField
                      label="Address *"
                      placeholder="Mirpur 12, Avanue road 56/B"
                      {...field}
                    />
                  )}
                />
                {<ErrorMsg text={errors.address?.message} />}
              </div>
              {/* submit btn  */}
              <Button text={"Create"} className={"w-full mt-5"} />
            </section>
          </form>
        </div>
      </section>
    </MainLayout>
  );
}

export default CreateCoaching;
