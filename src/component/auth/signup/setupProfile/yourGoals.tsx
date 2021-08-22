import React from 'react';
import Slider from '../../../setupProfile/slider';
import PinkButton from '../../../widgets/buttons/pinkButton';
import CheckButton from '../../../widgets/inputs/checkButton';
import Title2 from '../../../widgets/texts/title2';

const YourGoals: React.FC<{ onChange: () => void }> = ({ onChange }) => {
  const handleNext = () => {
    onChange();
  };

  return (
    <>
      <Title2>Tes objectifs?</Title2>
      <div className="mt-8">
        <Slider
          label="Me régaler"
          imageName="fock_knife"
          levels={['Moyen0', 'Assez important', 'Moyen2']}
        />
      </div>
      <div className="mt-8">
        <Slider
          label="Réduire mon empreinte carbone"
          imageName="fock_knife"
          levels={['Peu important', 'Assez important', 'Moyen2']}
        />
      </div>
      <div className="mt-8">
        <Slider
          label="Optimiser ma santé et mon bien-être"
          imageName="heart"
          levels={['Peu important', 'Assez important', 'Très important']}
        />
      </div>
      <div className="mt-8">
        <Slider
          label="Améliorer le bien-être animal"
          imageName="rabbit"
          levels={['Peu important', 'Assez important', 'Très important']}
        />
      </div>
      <div className="mt-6">
        <CheckButton
          label={
            <>
              En cliquant sur le bouton, vous acceptez la
              <br />
              <span className="text-pink-1">politique de confidentialité.</span>
            </>
          }
        />
      </div>
      <div className="mt-7">
        <PinkButton onClick={handleNext}>Continuer</PinkButton>
      </div>
    </>
  );
};

export default YourGoals;
