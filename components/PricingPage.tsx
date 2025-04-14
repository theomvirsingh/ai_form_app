import { PricingPlan, pricingPlan } from "@/lib/pricingplan";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

const PricingPage = () => {
  return (
    <div>
      <div className="text-center mb-16">
        <h1 className="font-extrabold text-3xl">Plan & Pricing</h1>
        <p className="text-gray-500 mt-1">
          Enhance your productivity with our AI-powered tools. Choose the plan
          that suits you best and start using our services today!
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {pricingPlan.map((plan: PricingPlan, index: number) => (
          <Card
            className={`${
              plan.level === "Enterprise" && "bg-[#1c1c1c] text-white"
            } w-[350px] flex flex-col justify-between`}
            key={index}
          >
            <CardHeader className="flex flex-row gap-2 items-center">
              <CardTitle>{plan.level}</CardTitle>
              {plan.level === "Pro" && <span>🔥</span>}
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-2xl font-bold">{plan.price}</p>
              <ul className="mt-4 space-y">
                {plan.services.map((item: string, index: number) => (
                  <li className="flex items-center" key={index}>
                    <span className="text-green-500 mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                variant={`${
                  plan.level === "Enterprise" ? "default" : "outline"
                }`}
                className={`${
                  plan.level === "Enterprise" &&
                  "text-black bg-white hover:bg-null"
                } w-full`}
              >
                Get Started Now {plan.level}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
