import React, { useState } from 'react';
import { ChevronLeftIcon } from '@heroicons/react/solid';
import Auth from '../component/auth';
import EmailPassword from '../component/auth/signup/emailPassword';
import Allergies from '../component/auth/signup/setupProfile/allerge';
import KitchenMe from '../component/auth/signup/setupProfile/kitchenMe';
import Preferences from '../component/auth/signup/setupProfile/preferences';
import Welcome from '../component/auth/signup/setupProfile/welcome';
import YourGoals from '../component/auth/signup/setupProfile/yourGoals';
import Progress from '../component/setupProfile/progress';
import GrayButton from '../component/widgets/buttons/grayButton';

export default function SignUp() {
  const [step, setStep] = useState<number>(1);

  const [emailAddress, setEmail] = useState<string>('');
  const [pw, setPassword] = useState<string>('');
  const [adultsNum, setAdults] = useState<number>(0);
  const [childNum, setChild] = useState<number>(0);

  const handleBack = () => {
    if (step > -1) {
      setStep(step - 1);
    }
  };

  return (
    <Auth>
      {step === -1 ? (
        <EmailPassword
          initEmail={emailAddress}
          initPassword={pw}
          onChange={(email, password) => {
            setEmail(email);
            setPassword(password);
            setStep(0);
          }}
        />
      ) : (
        <>
          <GrayButton onClick={handleBack}>
            <ChevronLeftIcon className="w-6 h-6 mr-1" />
            En arrière
          </GrayButton>
          <div className="mt-8">
            <Progress step={step} countOfStep={5} />
          </div>
          <div className="my-6">
            {step === 0 && (
              <Welcome
                initAdulst={adultsNum}
                initChild={childNum}
                onChange={(adults, child) => {
                  setAdults(adults);
                  setChild(child);
                  setStep(step + 1);
                }}
              />
            )}
            {step === 1 && (
              <Allergies
                onChange={() => {
                  setStep(step + 1);
                }}
              />
            )}
            {step === 2 && (
              <Preferences
                onChange={() => {
                  setStep(step + 1);
                }}
              />
            )}
            {step === 3 && (
              <KitchenMe
                onChange={() => {
                  setStep(step + 1);
                }}
              />
            )}
            {step === 4 && <YourGoals onChange={() => {}} />}
          </div>
        </>
      )}
    </Auth>
  );
}
