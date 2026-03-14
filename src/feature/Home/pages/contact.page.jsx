import MainLayout from '@/layout/Main-Layout'
import Button from '@/shared/utils/button';
import ErrorMsg from '@/shared/utils/error-msg';
import InputField from '@/shared/utils/input';
import TextareaField from '@/shared/utils/textarea';
import React from 'react'
import { useForm,Controller } from 'react-hook-form';

import img from '../../../../public/images/contact.svg'

function Contact() {

  const {
      control,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm({
      defaultValues: {
        name: "",
        reason: "",
        mobile: "",
        message: ""
      },
    });



  return (
    <MainLayout>
       <section className="grid md:grid-cols-3 items-center justify-center mt-26 gap-6">
        <div className="mx-auto w-2/3">
          <img
            src={img}
            className="bg-background-0 text-secondary-0"
            alt=""
          />
        </div>
        <div className="col-span-2">
          <form onSubmit={handleSubmit()}>
            <section className="md:w-2/4 mx-auto space-y-4">
              <div>
                <Controller
                  name="name"
                  control={control}
                  rules={{
                    required: "Name are required !!!",
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
                  name="reason"
                  rules={{
                    required: "what's your reason to contact ?",
                  }}
                  control={control}
                  render={({ field }) => (
                    <InputField
                      label="Reason *"
                      placeholder="xyz problem"
                      {...field}
                    />
                  )}
                />
                {<ErrorMsg text={errors.reason?.message} />}
              </div>
              <div>
                <Controller
                  name="mobile"
                  rules={{
                    required: "mobile number are required !!!",
                  }}
                  control={control}
                  render={({ field }) => (
                    <InputField
                      label="Mobile *"
                      placeholder="015**********"
                      {...field}
                    />
                  )}
                />
                {<ErrorMsg text={errors.mobile?.message} />}
              </div>
              <div>
                <Controller
                  name="message"
                  rules={{
                    required: "tell the problem",
                  }}
                  control={control}
                  render={({ field }) => (
                    <TextareaField
                      label="Message *"
                      placeholder="tell the problem !!!"
                      {...field}
                    />
                  )}
                />
                {<ErrorMsg text={errors.message?.message} />}
              </div>
              
              {/* submit btn  */}
              <Button text={"Send"} className={"w-full mt-5"} />
            </section>
          </form>
        </div>
      </section>
    </MainLayout>
  )
}

export default Contact
