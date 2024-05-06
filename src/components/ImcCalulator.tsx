"use client";
import { useState } from "react";
import { Meteors } from "./ui/meteors";
import { Input } from "./ui/input";
import LabelInputContainer from "./LabelInputContainer";
import { Label } from "./ui/label";
type Maybe<T> = T | undefined | null;

export default function IMCCalculator() {
  const [heigth, setHeigth] = useState<Maybe<number>>();
  const [weight, setWeight] = useState<Maybe<number>>();
  const [imc, setIMC] = useState<Maybe<number>>();

  const computedIMC = () => {
    const imc = heigth && weight ? weight / Math.pow(heigth, 2) : undefined;
    setIMC(imc);
  };

  return (
    <div>
      <div className="">
        <div className=" w-full relative max-w-xs">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>

            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
              IMC Calculator
            </h1>

            <p className="font-normal text-base text-slate-500 mb-4 relative z-50"></p>
            <LabelInputContainer>
              <Label htmlFor="heigth">heigth</Label>
              <Input
                id="heigth"
                placeholder="heigth"
                value={heigth ?? ""}
                type="text"
                onChange={(e) =>
                  setHeigth(
                    e.target.value ? Number.parseInt(e.target.value) : undefined
                  )
                }
              ></Input>
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="weight">weight</Label>
              <Input
                id="weight"
                placeholder="weight"
                value={weight ?? ""}
                type="text"
                onChange={(e) =>
                  setWeight(
                    e.target.value ? Number.parseInt(e.target.value) : undefined
                  )
                }
              ></Input>
            </LabelInputContainer>

            <button
              className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300 mt-6"
              onClick={() => computedIMC()}
            >
              Calculate
            </button>
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
              {imc}
            </p>

            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
