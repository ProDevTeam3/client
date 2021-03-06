import { Badge, Divider, Tag, Checkbox } from "@chakra-ui/react";
import lodash from "lodash";

const name_converts = {
  first_name: "Imię",
  surname: "Nazwisko",
  date_of_birth: "Data urodzenia",
  marital_status: "Stan cywilny",
  sex: "Płeć",
  education: "Wykształcenie",
  home_address: "Adres zamieszkania",
  street: "Ulica",
  city: "Miasto",
  postal_code: "Kod pocztowy",
  district: "Powiat",
  commune: "Gmina",
  country: "Kraj",
  voivodeship: "Województwo",
  registered_address: "Adres zameldowania",
  company: "Zatrudnienie",
  name: "Nazwa firmy",
  NIP: "NIP",
  industry: "Branża",
  contract: "Umowa",
  type: "Typ",
  income: "Dochód",
  currency: "Waluta",
  middle_name: "Drugie imię",
  PESEL: "PESEL",
  family: "Rodzina",
  accomodation: "Zakwaterowanie",
  with_parents: "Mieszkasz z rodzicami?",
  num_of_residents: "Liczba domowników",
  house_type: "Typ zakwaterowania",
  additional_info: "Dodatkowe informacje",
  internet_access: "Dostęp do internetu",
  family_income: "Łączny dochód rodziny",
  num_of_cars_in_family: "Liczba pojazdów w rodzinie",
  disability: "Niepełnosprawność",
  nationality: "Narodowość",
};
const change_name = (name) => {
  const arr = objectToArray(name_converts);
  const result = arr.filter((elem) => elem[0] === name);
  return result?.[0]?.[1] ?? "";
};

export const objectToArray = (obj) =>
  Object.keys(lodash.omit(obj, ["_id"])).map((key) => [key, obj[key]]);

const convertBoolean = (value) => {
  if (value === "true" || value === "false") {
    return (
      <Checkbox
        style={{ marginLeft: 4 }}
        isReadOnly
        defaultIsChecked={value === "true" ? true : false}
      />
    );
  }
  return value;
};

export const elementCheck = (category, value) => {
  if (typeof value === "string") {
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Badge>{change_name(category)}</Badge>: {convertBoolean(value)}
      </div>
    );
  }
  const name = change_name(category);
  const renderFunc = Array.isArray(value)
    ? () => value.map((element) => elementCheck("", element))
    : typeof value === "object"
    ? () => objectToArray(value).map((el) => elementCheck(el[0], el[1]))
    : () => <div></div>;
  return (
    <div>
      {name && (
        <>
          <Divider />
          <Tag variant="solid" colorScheme="teal">
            {name}
          </Tag>
        </>
      )}
      {renderFunc()}
    </div>
  );
};
