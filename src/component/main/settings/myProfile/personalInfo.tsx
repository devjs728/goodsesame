import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { editProfile } from "../../../../store/user/action";
import { validateEmail } from "../../../../utils/validate";
import PinkButton2 from "../../../widgets/buttons/pinkButton2";
import NormalInput from "../../../widgets/inputs/normalInput";

const PersonalInfo: React.FC<{
  initFirstName: string;
  initLastName: string;
  initEmail: string;
  initBirthdate: string;
}> = ({ initFirstName, initLastName, initEmail, initBirthdate }) => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState<string>(initFirstName);
  const [lastName, setLastName] = useState<string>(initLastName);
  const [email, setEmail] = useState<string>(initEmail);
  const [emailError, setEmailError] = useState<string>("");
  const [birthdate, setBirthdate] = useState<string>(initBirthdate);
  const [isLoading, setLoading] = useState<boolean>(false);

  const onSubmit = async () => {
    let validate = true;
    if (!email) {
      setEmailError("Veuillez saisir un e-mail");
      validate = false;
    } else if (!validateEmail(email)) {
      setEmailError("Le champ email doit être un email valide");
      validate = false;
    }

    if (!validate) {
      return;
    }

    try {
      setLoading(true);
      await dispatch(
        editProfile({
          firstname: firstName,
          lastname: lastName,
          email,
          birthdate: birthdate.replaceAll("-", "/"),
        })
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="block sm:grid grid-flow-col grid-cols-2 gap-4">
        <NormalInput
          label="Nom"
          type="text"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <NormalInput
          label="Nom de famille"
          type="text"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </div>
      <div className="mt-5">
        <NormalInput
          label="Email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          error={emailError}
        />
      </div>
      <div className="mt-5">
        <NormalInput
          label="Anniversaire"
          type="date"
          value={birthdate}
          onChange={(e) => {
            setBirthdate(e.target.value);
          }}
        />
      </div>
      <div className="mt-8">
        <PinkButton2 onClick={onSubmit} isLoading={isLoading}>
          Sauvegarder
        </PinkButton2>
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    initFirstName: state?.user?.firstname ?? "",
    initLastName: state?.user?.lastname ?? "",
    initEmail: state?.user?.email ?? "",
    initBirthdate: state?.user?.birthdate ?? "",
  };
};

export default connect(mapStateToProps)(PersonalInfo);
