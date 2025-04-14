import React from "react";
import GenerateFormInput from "./GenerateFormInput";
import { Button } from "./ui/button";

type SuggestionTexts = {
  label: string;
  description?: string;
};

const suggestionBtnText: SuggestionTexts[] = [
  {
    label: "Job Application",
    description:
      "Develop a job application form that serves as a one-page solution form collecting essential information from applicants.",
  },
  {
    label: "Registration Form",
    description:
      "Create a course registration form for students, allowing them to select courses of interest and submit their preferences and basic detials about student.",
  },
  {
    label: "Feedback Form",
    description:
      "Create a feedback form for clients to gather valuable insights on their experience.",
  },
  {
    label: "Contact Us Form",
    description:
      "Create a contact us form for clients to reach out to the company for inquiries.",
  },
];

const HeroSection = () => {
  return (
    <section>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 blur-3xl opacity-50 -z-10"></div>
        <div className="container mx-auto text-center py-8 relative">
          <h1 className="text-4xl font-bold">
            Build AI-Driven Forms Effortlessly
          </h1>
          <p className="mt-4 text-lg">
            Create custom forms with AI-powered data collection and analysis.
          </p>
        </div>
      </div>
      <GenerateFormInput />

      <div className="grid grid-cols-4 gap-4 mt-8">
        {suggestionBtnText.map((item: SuggestionTexts, index: number) => (
          <Button key={index} className="rounded-full h-10" variant={"outline"}>
            {item.label}
          </Button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
