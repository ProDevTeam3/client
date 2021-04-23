import { omit } from "lodash";

export const prepareToEdit = (data) => {
  const { contract } = data;

  const company = contract.reduce((acc, contractObject) => {
    return [
      ...acc,
      {
        ...contractObject.company,
        contract: [{ ...omit(contractObject, ["company"]) }],
      },
    ];
  }, []);

  const handleDate = (date) => date.split("T")[0];

  data.date_of_birth = handleDate(data.date_of_birth);
  data.family = data.family.map((familyMember) => ({
    ...familyMember,
    date_of_birth: handleDate(familyMember.date_of_birth),
    first_name: familyMember.name,
  }));

  data.accomodation.with_parents = data.accomodation.with_parents.toString();
  data.additional_info.internet_access = data.additional_info.internet_access.toString();

  return { ...omit(data, ["contract"]), company };
};
