import React from "react";
import Page from "../signup/page";
import { useRouter } from "next/router";
const steps = [compA, compB, compC];
export default function Page() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const StepsComponent = steps[step];

  const continueHandler = () => {
    if (step === 2) {
      router.push("./login");
      return;
    }

    setStep((prev) => prev + 1);
  };
  return (
    <div>
      <StepsComponent continueHandler={continueHandler} />
    </div>
  );
}
