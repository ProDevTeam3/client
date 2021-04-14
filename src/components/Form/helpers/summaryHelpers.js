const name_converts = {
    "first_name": "Imię",
    "surname": "Nazwisko",
    "date_of_birth": "Data urodzenia",
    "marital_status": "Stan cywilny",
    "sex": "Płeć",
    "education": "Wykształcenie",
    "home_address": "Adres zamieszkania",
    "street": "Ulica",
    "city": "Miasto",
    "postal_code": "Kod pocztowy",
    "district": "Powiat",
    "commune": "Gmina",
    "country": "Kraj",
    "voivodeship": "Województwo",
    "registered_address": "Adres zameldowania",
    "company": "Zatrudnienie",
    "name": "Nazwa firmy",
    "NIP": "NIP",
    "industry": "Branża",
    "contract": "Umowa",
    "type": "Typ umowy",
    "income": "Dochód",
    "currency": "Waluta",
    "middle_name": "Drugie imię",
    "PESEL": "PESEL",
    "family": "Rodzina",
    "type": "Pokrewieństwo",
    "accomodation": "Zakwaterowanie",
    "with_parents": "Mieszkasz z rodzicami?",
    "num_of_residents": "Liczba domowników",
    "house_type": "Typ zakwaterowania",
    "additional_info": "Dodatkowe informacje",
    "internet_access": "Dostęp do internetu",
    "family_income": "Łączny dochód rodziny",
    "num_of_cars_in_family": "Liczba pojazdów w rodzinie",
    "disability": "Niepełnosprawność"
}
const change_name = (name) => {
    const arr = objectToArray(name_converts)
    const result = arr.filter(elem => elem[0] === name)
    return result[0][1]
}

export const objectToArray = (obj) => Object.keys(obj).map((key) => [key, obj[key]]);
export const elementCheck = (category, value) => {
  if(typeof(value) === 'string'){
    return(<div className="SummaryElem">{change_name(category)} --- {value}</div>)
  }
  if(Array.isArray(value)){
    return(
      <div className="SummaryObjectBox">
        <h1 className="SummaryCategory">{change_name(category)}</h1>
        {value.map(el => elementCheck("", el))}
      </div>
    )
  }
  if(typeof(value) === 'object'){
    console.log(value, typeof(value))
    return(
      <div className="SummaryObjectBox">
        <h1 className="SummaryCategory">{change_name(category)}</h1>
        {objectToArray(value).map(el => elementCheck(el[0], el[1]))}
      </div>
    )
  }
  else{
    return(<div></div>)
  }
};
