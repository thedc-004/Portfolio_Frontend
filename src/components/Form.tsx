import { IoCall } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import DataSentConfirm from "./DataSentConfirmed";
import NetworkErrorComp from "./NetworkErrorComp";

function Form() {
  const [dataSent, setDataSent] = useState(false);
  const [networkError, setNetworkError] = useState(false);
  const url = "http://localhost:4000";

  interface dataSchema {
    username: string;
    email: string;
    subject: string;
    detail: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<dataSchema>();

  const [data, setData] = useState<dataSchema>({
    username: "",
    email: "",
    subject: "",
    detail: "",
  });

  const onSubmit: SubmitHandler<dataSchema> = async (inputData) => {
    setData(inputData);
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(res);
      if (!res.ok) {
        throw new Error("Network response was not ok. Please try again.");
      }
      setDataSent(true);
    } catch (error) {
      console.log(error);
      setNetworkError(true);
    }
  };

  return (
    <div className="flex flex-col font-bold">
      <h1 className="text-3xl">Let's connect.</h1>
      <div>
        <div className="my-5">
          <p className="flex items-center justify-start sm:text-xl text-md font-normal mb-3">
            <IoCall className="me-3" /> +91 7069619944
          </p>
          <p className="flex items-center justify-start sm:text-xl text-md  font-normal w-max">
            <SiGmail className="me-3" /> dipanshuchoksi@gmail.com
          </p>
        </div>
        {dataSent && !networkError ? (
          <DataSentConfirm />
        ) : networkError ? (
          <NetworkErrorComp />
        ) : null}
        { }
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-8">
            <input
              type="text"
              id="userName"
              placeholder="Name:"
              className="px-5 text-black  py-3 font-2xl outline-none border-none rounded-lg sm:w-48 w-full"
              {...register("username", {
                required: "This field is required to be filled.",
              })}
            />

            <p
              className={
                errors.username ? "mt-2 bg-red-500 w-fit p-1 rounded-md" : ""
              }
            >
              {errors.username?.message}
            </p>
          </div>
          <div className="mb-8">
            <input
              type="email"
              id="email"
              placeholder="Email: "
              className="px-5  text-black py-3 font-2xl outline-none border-none  rounded-lg sm:w-48 w-full"
              {...register("email", {
                required: "This field is required to be filled.",
              })}
            />
            <p
              className={
                errors.email ? "mt-2 bg-red-500 w-fit p-1 rounded-md" : ""
              }
            >
              {errors.email?.message}
            </p>
          </div>
          <div className="mb-8">
            <textarea
              id="subject"
              placeholder="Subject"
              className="px-5  py-3 font-2xl outline-none border-none text-black sm:w-6/12 w-full rounded-xl"
              {...register("subject", {
                required: "This field is required to be filled.",
              })}
            ></textarea>
            <p
              className={
                errors.subject ? "mt-2 bg-red-500 w-fit p-1 rounded-md" : ""
              }
            >
              {errors.subject?.message}
            </p>
          </div>
          <div className="mb-8">
            <textarea
              id="detail"
              placeholder="Detail:"
              className="px-5  py-3 font-2xl outline-none border-none text-black sm:w-6/12 w-full h-48 rounded-xl"
              {...register("detail", {
                required: "This field is required to be filled.",
              })}
            ></textarea>
            <p
              className={
                errors.detail ? "mt-2 bg-red-500 w-fit p-1 rounded-md" : ""
              }
            >
              {errors.detail?.message}
            </p>
          </div>
          <button
            type="submit"
            className="bg-white text-black px-3 py-2 rounded-md"
          >
            Send Me!
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
