// API CALL 

const originalLink = window.location.href

const apiLink = originalLink.replace('meshid.app/verifications', 'meshid.app/api/verifications')

fetch(apiLink)
  .then(response => response.json())
  .then(jsonData =>
  {
    //Entity

    data.name = jsonData.record.personData.MID_LP_Name
    data.type = jsonData.record.personData.MID_LP_Type
    data.countryLp = jsonData.record.personData.MID_LP_Country_Of_Registration
    data.dateLp = jsonData.record.personData.MID_LP_Date_Of_Registration
    data.regNumber = jsonData.record.personData.MID_LP_Number
    data.taxLp = jsonData.record.personData.MID_LP_Tax_Number
    data.regulated = jsonData.record.personData.MID_LP_Regulated
    data.regulator = jsonData.record.personData.MID_LP_Regulator
    data.tradeName = jsonData.record.personData.MID_LP_Trade_Name
    data.addressLp = jsonData.record.personData.MID_LP_Address
    data.cityLp = jsonData.record.personData.MID_LP_Address_City
    data.addressCountryLp = jsonData.record.personData.MID_LP_Address_Country
    data.postCodeLp = jsonData.record.personData.MID_LP_Postalcode


    //Natural Person

    data.first = jsonData.record.personData.MID_NP_First
    data.middle = jsonData.record.personData.MID_NP_Middle
    data.last = jsonData.record.personData.MID_NP_Last
    data.dob = jsonData.record.personData.MID_NP_DOB
    data.countryBirth = jsonData.record.personData.MID_NP_Country_Of_Birth
    data.nationality = jsonData.record.personData.MID_NP_Nationality
    data.countryResidence = jsonData.record.personData.MID_NP_Country_Of_Residence
    data.dualNationality = jsonData.record.personData.MID_NP_Dual_Nationality
    data.email = jsonData.record.personData.MID_NP_Email
    data.formerFirst = jsonData.record.personData.MID_NP_Former_First
    data.formerLast = jsonData.record.personData.MID_NP_Former_Last
    data.gender = jsonData.record.personData.MID_NP_Gender
    data.occupation = jsonData.record.personData.MID_NP_Occupation
    data.taxNp = jsonData.record.personData.MID_NP_Tax_ID_Number
    data.address = jsonData.record.personData.MID_NP_Address
    data.city = jsonData.record.personData.MID_NP_Address_City
    data.addressCountry = jsonData.record.personData.MID_NP_Address_Country
    data.postCode = jsonData.record.personData.MID_NP_Postalcode
  } )
  .catch(error => console.error(error));





