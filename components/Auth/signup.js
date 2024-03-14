
'use client'
import { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Component() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({ userType: '', username: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleUserTypeChange = (userType) => {
    setFormData({ ...formData, userType });
  };

  const validateForm = () => {
    const newErrors = {};
    switch (currentStep) {
      case 1:
        if (!formData.userType) {
          newErrors.userType = 'Please select a user type.'; // Adjusted error message
        }
        break;
      case 2:
        if (!formData.username) {
          newErrors.username = 'Username is required.';
        }
        if (!formData.password || formData.password.length < 8) {
          newErrors.password = 'Password must be at least 8 characters long.';
        }
        break;
      default:
        break;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleNext = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (validateForm()) {
      setCurrentStep(currentStep + 1);
      setErrors({}); // Clear errors on successful validation
    }
  };

  const handleSubmit = () => {
    // Handle form submission here
    // For demonstration, let's just log the form data
    console.log(formData);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrors({});
    }, 10000);

    return () => clearTimeout(timer);
  }, [errors]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow mb-10 mt-10">
      {/* Error alert */}
      {Object.keys(errors).length > 0 && (
        <div className="bg-orange-200 border-l-4 border-orange-500 text-orange-700 p-4 mb-4">
          {Object.values(errors).map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}
      <div className="flex items-center mb-8">
        {/* Step indicators (update based on currentStep) */}
        {Array(3).fill(null).map((_, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className={`flex items-center justify-center h-10 w-10 rounded-full ${
              currentStep === index + 1 ? 'bg-black text-white' : 'border-2 border-gray-300 text-gray-500'
            }`}>
              {index + 1}
            </div>
            <div className="text-sm font-semibold text-gray-600">
              {index === 0 && 'User Type'}
              {index === 1 && 'Registration'}
              {index === 2 && 'Confirmation'}
            </div>
            <div className="text-xs text-gray-500">
              {index === 0 && 'Select your role'}
              {index === 1 && 'Fill out your details'}
              {index === 2 && 'Review your selection'}
            </div>
            {index < 2 && <div className="flex-1 border-t-2 border-gray-200 mx-3" />}
          </div>
        ))}
      </div>
      <form>
        {/* Step content based on currentStep */}
        {currentStep === 1 && (
            <>
                      <ul className="grid w-full gap-6 md:grid-cols-2">
                        <li>
                        <input
                            type="radio"
                            id="publisher"
                            name="userType"
                            value="publisher"
                            className="hidden peer"
                            required
                            checked={formData.userType === 'publisher'}
                            onChange={() => handleUserTypeChange('publisher')}
                        />
                        <label
                            htmlFor="publisher"
                            className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-black peer-checked:border-black peer-checked:text-black hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                        >
                            <div className="block">
                            <div className="w-full text-lg font-semibold">Publisher</div>
                            </div>
                            <svg
                            className="w-5 h-5 ms-3 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                            >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                            </svg>
                        </label>
                        </li>
                        <li>
                        <input
                            type="radio"
                            id="advertiser"
                            name="userType"
                            value="advertiser"
                            className="hidden peer"
                            required
                            checked={formData.userType === 'advertiser'}
                            onChange={() => handleUserTypeChange('advertiser')}
                        />
                        <label
                            htmlFor="advertiser"
                            className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-black peer-checked:border-black peer-checked:text-black hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"                        >
                            <div className="block">
                            <div className="w-full text-lg font-semibold">Advertiser</div>
                            </div>
                            <svg
                            className="w-5 h-5 ms-3 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                            >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                            </svg>
                        </label>
                        </li>
                    </ul>
                    <Button className="w-full mt-10" onClick={(e) => handleNext(e)} disabled={currentStep === 3}>
                    {currentStep === 3 ? 'Submit' : 'Next step'}
                    </Button>            
            </>
        )}
        {currentStep === 2 && (
          <>
         
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="username">
              Username
            </label>
            <Input
              id="username"
              placeholder="Username"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
            {errors.username && <p className="text-red-500 text-xs">{errors.username}</p>}
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <Input
              id="password"
              placeholder="Password"
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
          </div>
          <div className="flex justify-between mb-4 mt-10">
            <Button className="flex-1"  onClick={() => setCurrentStep(currentStep - 1)}>Previous Step</Button>
            <div className="w-4"></div> {/* Gap space */}
            <Button className="flex-1" onClick={(e) => handleNext(e)} disabled={currentStep === 3}>
              {currentStep === 3 ? 'Submit' : 'Next step'}
            </Button>
          </div>
        </>
        
        )}
        {currentStep === 3 && (
            <>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultrices mattis urna. Maecenas euismod mauris eget quam semper vestibulum. Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
                    <div className="flex justify-between mb-4 mt-10">
                    <Button className="flex-1" onClick={() => setCurrentStep(currentStep - 1)}>Previous Step</Button>
                    <div className="w-4"></div> {/* Gap space */}
                    <Button className="flex-1" onClick={handleSubmit}>Submit</Button>
                </div>
            </>
         )}

      </form>
    </div>
  );
}