"use client";
import { useState } from "react";
type Maybe<T> = T | undefined | null;

export default function IMCCalculator() {
  const [heigth, setHeigth] = useState<Maybe<number>>();
  const [weight, setWeight] = useState<Maybe<number>>();

  const imc = heigth && weight ? weight / Math.pow(heigth, 2) : undefined;

  return (
    <div>
      HEIGHT
      <input
        value={heigth ?? ""}
        type="text"
        onChange={(e) =>
          setHeigth(
            e.target.value ? Number.parseInt(e.target.value) : undefined
          )
        }
      ></input>
      WEIGHT
      <input
        value={weight ?? ""}
        type="text"
        onChange={(e) =>
          setWeight(
            e.target.value ? Number.parseInt(e.target.value) : undefined
          )
        }
      ></input>
      <div>
        <label>{imc}</label>
      </div>
    </div>
  );
}
