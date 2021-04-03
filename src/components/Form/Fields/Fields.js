import formData from '../../../constants/formData'
import {Field} from 'formik'

export default Fields = () => {
    return (
        <>
            <Field as='select' name="voivodeship" id="voivodeship">
                {formData.voivodeships.map(voivodeship =>
                    <option value={voivodeship}>{voivodeship}</option>
                )}
            </Field>
            <Field as='select' name="education" id="education">
                {formData.education.map(educationLevel =>
                    <option value={educationLevel}>{educationLevel}</option>
                )}
            </Field>
            <Field as='select' name="marital" id="marital">
                {formData.marital.map(maritalStatus =>
                    <option value={maritalStatus}>{maritalStatus}</option>
                )}
            </Field>
            <Field as='select' name="sex" id="sex">
                {formData.sex.map(sexOption =>
                    <option value={sexOption}>{sexOption}</option>
                )}
            </Field>
        </>
    )
}