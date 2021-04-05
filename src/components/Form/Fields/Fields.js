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