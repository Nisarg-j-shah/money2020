var request = require("request")
var globals = require("./globals")

// URL Method
var method = "applyForCredit";

// Build payload
var requestPayload = {
    "apply": {
        "applyRequest": {
            "authCosApplicantData": {
                "lastNameapp": "",
                "firstNameapp": "",
                "middleInitialapp": "",
                "suffixapp": "",
                "ssn1": "",
                "birthDateapp": "",
                "driverLicenseNumberapp": "",
                "driverLicenseStateapp": "",
                "signatureIndicatorapp": "",
                "titleapp": "",
                "occupationCodeapp": "",
                "incomeAnnualapp": "",
                "address": {
                    "address2app": "",
                    "stateapp": "",
                    "address1app": "",
                    "cityapp": "",
                    "zipCodeapp": ""
                },
                "membershipNumberapp": "",
                "ssnOverrideapp": "",
                "driverLicenseExpiryDateapp": ""
            },
            "spouseDetails": {
                "spFirstName": "",
                "spMiddleName": "",
                "spLastName": "",
                "address": {
                    "address2spd": "",
                    "statespd": "",
                    "address1spd": "",
                    "cityspd": "",
                    "zipCodespd": ""
                }
            },
            "merchantData": {
                "clientDepartment": "",
                "iovationRequestType": "application",
                "operator": "ECOM",
                "clientData": "",
                "merchantNumber": "0000000000010032",
                "country": "US",
                "deviceType": "T",
                "originalProductCode": "010",
                "rewardsCode": "",
                "membershipNumber": "",
                "primaryGroup": "000",
                "empAccountCode": "Y",
                "salesPerson": "213006748",
                "clientDataShare": "",
                "sendEmail": "",
                "referalCode": "",
                "register": "REGISTER",
                "clientId": "TJX",
                "referCode": "",
                "comment": "",
                "secondaryGroup": "000"
            },
            "primaryApplicant": {
                "tempPassDays": "",
                "longitude": "",
                "cardIndSEDS": "",
                "promoTrack": "",
                "employerState": "",
                "spCode": "",
                "bankCardNumber": "",
                "signatureIndicator": "",
                "customerLoanTerm": "",
                "passportIssuingCountry": "",
                "swipeEdit": "",
                "address": {
                    "address2": "",
                    "state": "IL",
                    "address1": "21 KING ARTHUR CT",
                    "city": "FANTASY ISLAND",
                    "zipCode": "60750"
                },
                "plateCode": "",
                "ssn": "666010080",
                "permanentResidentCard": "",
                "passportNumber": "",
                "cardIndVISA": "",
                "cardIndAMEX": "",
                "mobileStoreDistance": "",
                "bankCardType": "",
                "employerName": "",
                "redemptionAmount": "",
                "timeAtHome": "",
                "latitude": "",
                "applicationCountry": "",
                "homePhone": "1234567891",
                "requestedlineOfCredit": "",
                "relativeInfo": "",
                "memberNumber": "",
                "employerPhone": "",
                "imageDocID": "",
                "secLastName": "",
                "optOutFlag": "",
                "eBillEnrollment": "",
                "cardIndMC": "",
                "birthDate": "19700605",
                "promoCode": "",
                "incomeAnnual": "12000000",
                "companyPhone": "",
                "maidenName": "",
                "authCosCode": "",
                "insuranceCode": "",
                "onlineLetter": "",
                "billingLastName": "",
                "caCivicNumber": "",
                "previousAddress": {
                    "address2prvad": "",
                    "stateprvad": "",
                    "address1prvad": "",
                    "cityprvad": "",
                    "zipCodeprvad": ""
                },
                "mobileDeviceType": "",
                // Change Last name to "APPROVAL", "DECLINE" or "REFER" to test
                "lastName": "APPROVAL",
                "billinngCycle": "",
                "firstName": "JOE",
                "ipAddress": "",
                "purchaseAmount": "",
                "extensionPhoneNumber": "",
                "driverLicenseState": "",
                "sourceCode": "",
                "mothersBirthDate": "",
                "driverLicenseExpiryDate": "",
                "dlSsoId": "",
                "memberSinceDate": "",
                "email": "t@t.com",
                "reissueDate": "",
                "modelIndicator": "",
                "billingFirstName": "",
                "residenceCode": "",
                "timeAtJob": "",
                "vehicleOwn": "",
                "relativePhone": "",
                "creditLineRqd": "",
                "contractNumber": "",
                "passportBirthCity": "",
                "employerZip": "",
                "cardDeptStrInd": "",
                "blackBoxId": "",
                "title": "",
                "bankAccountCode": "",
                "regionalBusinessCode": "",
                "occupationCode": "",
                "employerAddress": "",
                "driverLicenseNumber": "",
                "applicationType": "",
                "accoutInfo": "",
                "mortgageOrRentPay": "",
                "extensionOverride": "",
                "employerCity": "",
                "middleName": "",
                "suffix": "",
                "ssnOverride": "",
                "currentEmployer": "",
                "relativeCode": "",
                "routingNumber": "",
                "cellPhone": "",
                "frnLangIndicator": "E",
                "checkingAccountNumber": "",
                "memberType": ""
            }
        }
    }
};

// Create credentials & payload options object
var options = globals(method, requestPayload);

// Make Request
request(
    options,
    function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(response.body);
        } else {
            console.log(response.statusCode + '-' + response.statusMessage);
        }
    }
);
