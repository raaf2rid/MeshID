// API CALL 

const originalLink = window.location.href

const apiLink = originalLink.replace('meshid.app/verifications', 'meshid.app/api/verifications')

fetch(apiLink)
  .then(response => response.json())
  .then(jsonData =>
  {
    //Entity

    row.name = jsonData.record.personData.MID_LP_Name
    row.type = jsonData.record.personData.MID_LP_Type
    row.countryLp = jsonData.record.personData.MID_LP_Country_Of_Registration
    row.dateLp = jsonData.record.personData.MID_LP_Date_Of_Registration
    row.regNumber = jsonData.record.personData.MID_LP_Number
    row.taxLp = jsonData.record.personData.MID_LP_Tax_Number
    row.regulated = jsonData.record.personData.MID_LP_Regulated
    row.regulator = jsonData.record.personData.MID_LP_Regulator
    row.tradeName = jsonData.record.personData.MID_LP_Trade_Name
    row.addressLp = jsonData.record.personData.MID_LP_Address
    row.cityLp = jsonData.record.personData.MID_LP_Address_City
    row.addressCountryLp = jsonData.record.personData.MID_LP_Address_Country
    row.postCodeLp = jsonData.record.personData.MID_LP_Postalcode


    //Natural Person

    row.first = jsonData.record.personData.MID_NP_First
    row.middle = jsonData.record.personData.MID_NP_Middle
    row.last = jsonData.record.personData.MID_NP_Last
    row.dob = jsonData.record.personData.MID_NP_DOB
    row.countryBirth = jsonData.record.personData.MID_NP_Country_Of_Birth
    row.nationality = jsonData.record.personData.MID_NP_Nationality
    row.countryResidence = jsonData.record.personData.MID_NP_Country_Of_Residence
    row.dualNationality = jsonData.record.personData.MID_NP_Dual_Nationality
    row.email = jsonData.record.personData.MID_NP_Email
    row.formerFirst = jsonData.record.personData.MID_NP_Former_First
    row.formerLast = jsonData.record.personData.MID_NP_Former_Last
    row.gender = jsonData.record.personData.MID_NP_Gender
    row.occupation = jsonData.record.personData.MID_NP_Occupation
    row.taxNp = jsonData.record.personData.MID_NP_Tax_ID_Number
    row.address = jsonData.record.personData.MID_NP_Address
    row.city = jsonData.record.personData.MID_NP_Address_City
    row.addressCountry = jsonData.record.personData.MID_NP_Address_Country
    row.postCode = jsonData.record.personData.MID_NP_Postalcode
  } )
  .catch(error => console.error(error));





