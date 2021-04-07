import {
  voivodeships,
  education,
  marital,
  sex,
} from "../../../constants/formData";
import { Select } from "@chakra-ui/react";

const Fields = () => {
  return (
    <>
      <Select name="voivodeship" id="voivodeship" placeholder="Województwo">
        {voivodeships.map((voivodeship) => (
          <option value={voivodeship}>{voivodeship}</option>
        ))}
      </Select>
      <Select name="education" id="education" placeholder="Wykształcenie">
        {education.map((educationLevel) => (
          <option value={educationLevel}>{educationLevel}</option>
        ))}
      </Select>
      <Select name="marital" id="marital" placeholder="Stan cywilny">
        {marital.map((maritalStatus) => (
          <option value={maritalStatus}>{maritalStatus}</option>
        ))}
      </Select>
      <Select name="sex" id="sex" placeholder="Płeć">
        {sex.map((sexOption) => (
          <option value={sexOption}>{sexOption}</option>
        ))}
      </Select>
    </>
  );
};

export default Fields;
