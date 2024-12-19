import { useState } from 'react';
import Button from "@/components/atoms/Button";

const MultiStepForm = ({ steps, onSubmit, bg_form = "bg-white", bg_title_form = "bg-white", text_title_form_color = "text-white" }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const currentTitle = steps[currentStep].type.title || "Formulir Pendaftaran";

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <div className={`shadow-lg rounded-lg max-w-4xl mx-auto mt-10 mb-10 ${bg_form}`}>
      <div className={`text-center p-6 border-b-4 border-[#1b557a] ${bg_title_form}`}>
        <h1 className={`${text_title_form_color} text-3xl font-bold`}>{currentTitle}</h1>
      </div>

      <div className="p-8">
        <div>{steps[currentStep]}</div>

        <div className="flex justify-end mt-6">
          {currentStep > 0 && (
            <Button onClick={prevStep} color="bg-gray-400 mr-4">
              Sebelumnya
            </Button>
          )}
          {currentStep < steps.length - 1 && (
            <Button onClick={nextStep} color="bg-green-600">
              Selanjutnya
            </Button>
          )}
          {currentStep === steps.length - 1 && (
            <Button onClick={handleSubmit} color="bg-blue-600">
              Kirim
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;