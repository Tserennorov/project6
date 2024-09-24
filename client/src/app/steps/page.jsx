"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Top } from "@/components/stepscomponent";
import { Balance, Currency, Finish } from "@/components/stepscomponent";
import { Loading } from "@/components/Loading";

const steps = [Balance, Currency, Finish];

const Page = () => {
  const { push } = useRouter();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const StepsComponent = steps[step];

  const continueHandler = () => {
    if (step === 2) {
      push("/dashboard");
      return;
    }
    setStep((prev) => prev + 1);
  };

  const handleChange = (e) => {};

  // useEffect(() => {
  //   setLoading(true);

  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <div
      className="flex flex-col gap-[141px] items-center justify-center mt-20
    "
    >
      <Top step={step} />
      <StepsComponent
        continueHandler={continueHandler}
        handleChange={handleChange}
      />
    </div>
  );
};

export default Page;
