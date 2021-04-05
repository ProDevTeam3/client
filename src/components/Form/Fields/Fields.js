<<<<<<< HEAD
import formData from '../../../constants/formData'
import {Select} from "@chakra-ui/react"

export default Fields = () => {
    return (
        <>
            <Select name="voivodeship" id="voivodeship" placeholder="Województwo">
                {formData.voivodeships.map(voivodeship =>
                    <option value={voivodeship}>{voivodeship}</option>
                )}
            </Select>
            <Select name="education" id="education" placeholder="Wykształcenie">
                {formData.education.map(educationLevel =>
                    <option value={educationLevel}>{educationLevel}</option>
                )}
            </Select>
            <Select name="marital" id="marital" placeholder="Stan cywilny">
                {formData.marital.map(maritalStatus =>
                    <option value={maritalStatus}>{maritalStatus}</option>
                )}
            </Select>
            <Select name="sex" id="sex" placeholder="Płeć">
                {formData.sex.map(sexOption =>
                    <option value={sexOption}>{sexOption}</option>
                )}
            </Select>
        </>
    )
}
=======
import formData from "../../../constants/formData";
import { Field } from "formik";

export default Fields = () => {
  return (
    <>
      <Field as="select" name="voivodeship" id="voivodeship">
        {formData.voivodeships.map((voivodeship) => (
          <option value={voivodeship}>{voivodeship}</option>
        ))}
      </Field>
      <Field as="select" name="education" id="education">
        {formData.education.map((educationLevel) => (
          <option value={educationLevel}>{educationLevel}</option>
        ))}
      </Field>
      <Field as="select" name="marital" id="marital">
        {formData.marital.map((maritalStatus) => (
          <option value={maritalStatus}>{maritalStatus}</option>
        ))}
      </Field>
      <Field as="select" name="sex" id="sex">
        {formData.sex.map((sexOption) => (
          <option value={sexOption}>{sexOption}</option>
        ))}
      </Field>
    </>
  );
};
>>>>>>> d4d93b2554b684d09e4542f5bb5f3ab724c85802
