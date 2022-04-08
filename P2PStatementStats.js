const CENT_NUMBER = 0.01;
// const SMALL_NUMBER = 0.0001;// 1e-4
const VERY_SMALL_NUMBER = 0.000001;// 1e-6
// const TINY_NUMBER = 0.00000001;// 1e-8
const DAYS_PER_YEAR = 365.0;
const MS_PER_MINUTE = 60.0 * 1000.0;
const MS_PER_HOUR = 60.0 * MS_PER_MINUTE;
const MS_PER_DAY = 24.0 * MS_PER_HOUR;
const MS_PER_YEAR = DAYS_PER_YEAR * MS_PER_DAY;
// const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const MONTHS_ABBR = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTHS_NUM = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
/**
 * Code: Country name (using title case)
 * Code: ISO 3166-1 alpha-2
 */
const COUNTRIES_ISO_CODES = {
    AD: "Andorra",
    AE: "United Arab Emirates",
    AF: "Afghanistan",
    AG: "Antigua and Barbuda",
    AI: "Anguilla",
    AL: "Albania",
    AM: "Armenia",
    AO: "Angola",
    AQ: "Antarctica",
    AR: "Argentina",
    AS: "American Samoa",
    AT: "Austria",
    AU: "Australia",
    AW: "Aruba",
    AX: "Åland Islands",
    AZ: "Azerbaijan",
    BA: "Bosnia and Herzegovina",
    BB: "Barbados",
    BD: "Bangladesh",
    BE: "Belgium",
    BF: "Burkina Faso",
    BG: "Bulgaria",
    BH: "Bahrain",
    BI: "Burundi",
    BJ: "Benin",
    BL: "Saint Barthélemy",
    BM: "Bermuda",
    BN: "Brunei Darussalam",
    BO: "Bolivia (Plurinational State of)",
    BQ: "Bonaire, Sint Eustatius and Saba",
    BR: "Brazil",
    BS: "Bahamas",
    BT: "Bhutan",
    BV: "Bouvet Island",
    BW: "Botswana",
    BY: "Belarus",
    BZ: "Belize",
    CA: "Canada",
    CC: "Cocos (Keeling) Islands",
    CD: "Congo, Democratic Republic of the",
    CF: "Central African Republic",
    CG: "Congo",
    CH: "Switzerland",
    CI: "Côte d'Ivoire",
    CK: "Cook Islands",
    CL: "Chile",
    CM: "Cameroon",
    CN: "China",
    CO: "Colombia",
    CR: "Costa Rica",
    CU: "Cuba",
    CV: "Cabo Verde",
    CW: "Curaçao",
    CX: "Christmas Island",
    CY: "Cyprus",
    CZ: "Czechia",
    DE: "Germany",
    DJ: "Djibouti",
    DK: "Denmark",
    DM: "Dominica",
    DO: "Dominican Republic",
    DZ: "Algeria",
    EC: "Ecuador",
    EE: "Estonia",
    EG: "Egypt",
    EH: "Western Sahara",
    ER: "Eritrea",
    ES: "Spain",
    ET: "Ethiopia",
    FI: "Finland",
    FJ: "Fiji",
    FK: "Falkland Islands (Malvinas)",
    FM: "Micronesia (Federated States of)",
    FO: "Faroe Islands",
    FR: "France",
    GA: "Gabon",
    GB: "United Kingdom of Great Britain and Northern Ireland",
    GD: "Grenada",
    GE: "Georgia",
    GF: "French Guiana",
    GG: "Guernsey",
    GH: "Ghana",
    GI: "Gibraltar",
    GL: "Greenland",
    GM: "Gambia",
    GN: "Guinea",
    GP: "Guadeloupe",
    GQ: "Equatorial Guinea",
    GR: "Greece",
    GS: "South Georgia and the South Sandwich Islands",
    GT: "Guatemala",
    GU: "Guam",
    GW: "Guinea-Bissau",
    GY: "Guyana",
    HK: "Hong Kong",
    HM: "Heard Island and McDonald Islands",
    HN: "Honduras",
    HR: "Croatia",
    HT: "Haiti",
    HU: "Hungary",
    ID: "Indonesia",
    IE: "Ireland",
    IL: "Israel",
    IM: "Isle of Man",
    IN: "India",
    IO: "British Indian Ocean Territory",
    IQ: "Iraq",
    IR: "Iran (Islamic Republic of)",
    IS: "Iceland",
    IT: "Italy",
    JE: "Jersey",
    JM: "Jamaica",
    JO: "Jordan",
    JP: "Japan",
    KE: "Kenya",
    KG: "Kyrgyzstan",
    KH: "Cambodia",
    KI: "Kiribati",
    KM: "Comoros",
    KN: "Saint Kitts and Nevis",
    KP: "Korea (Democratic People's Republic of)",
    KR: "Korea, Republic of",
    KW: "Kuwait",
    KY: "Cayman Islands",
    KZ: "Kazakhstan",
    LA: "Lao People's Democratic Republic",
    LB: "Lebanon",
    LC: "Saint Lucia",
    LI: "Liechtenstein",
    LK: "Sri Lanka",
    LR: "Liberia",
    LS: "Lesotho",
    LT: "Lithuania",
    LU: "Luxembourg",
    LV: "Latvia",
    LY: "Libya",
    MA: "Morocco",
    MC: "Monaco",
    MD: "Moldova, Republic of",
    ME: "Montenegro",
    MF: "Saint Martin (French part)",
    MG: "Madagascar",
    MH: "Marshall Islands",
    MK: "North Macedonia",
    ML: "Mali",
    MM: "Myanmar",
    MN: "Mongolia",
    MO: "Macao",
    MP: "Northern Mariana Islands",
    MQ: "Martinique",
    MR: "Mauritania",
    MS: "Montserrat",
    MT: "Malta",
    MU: "Mauritius",
    MV: "Maldives",
    MW: "Malawi",
    MX: "Mexico",
    MY: "Malaysia",
    MZ: "Mozambique",
    NA: "Namibia",
    NC: "New Caledonia",
    NE: "Niger",
    NF: "Norfolk Island",
    NG: "Nigeria",
    NI: "Nicaragua",
    NL: "Netherlands",
    NO: "Norway",
    NP: "Nepal",
    NR: "Nauru",
    NU: "Niue",
    NZ: "New Zealand",
    OM: "Oman",
    PA: "Panama",
    PE: "Peru",
    PF: "French Polynesia",
    PG: "Papua New Guinea",
    PH: "Philippines",
    PK: "Pakistan",
    PL: "Poland",
    PM: "Saint Pierre and Miquelon",
    PN: "Pitcairn",
    PR: "Puerto Rico",
    PS: "Palestine, State of",
    PT: "Portugal",
    PW: "Palau",
    PY: "Paraguay",
    QA: "Qatar",
    RE: "Réunion",
    RO: "Romania",
    RS: "Serbia",
    RU: "Russian Federation",
    RW: "Rwanda",
    SA: "Saudi Arabia",
    SB: "Solomon Islands",
    SC: "Seychelles",
    SD: "Sudan",
    SE: "Sweden",
    SG: "Singapore",
    SH: "Saint Helena, Ascension and Tristan da Cunha",
    SI: "Slovenia",
    SJ: "Svalbard and Jan Mayen",
    SK: "Slovakia",
    SL: "Sierra Leone",
    SM: "San Marino",
    SN: "Senegal",
    SO: "Somalia",
    SR: "Suriname",
    SS: "South Sudan",
    ST: "Sao Tome and Principe",
    SV: "El Salvador",
    SX: "Sint Maarten (Dutch part)",
    SY: "Syrian Arab Republic",
    SZ: "Eswatini",
    TC: "Turks and Caicos Islands",
    TD: "Chad",
    TF: "French Southern Territories",
    TG: "Togo",
    TH: "Thailand",
    TJ: "Tajikistan",
    TK: "Tokelau",
    TL: "Timor-Leste",
    TM: "Turkmenistan",
    TN: "Tunisia",
    TO: "Tonga",
    TR: "Turkey",
    TT: "Trinidad and Tobago",
    TV: "Tuvalu",
    TW: "Taiwan, Province of China",
    TZ: "Tanzania, United Republic of",
    UA: "Ukraine",
    UG: "Uganda",
    UM: "United States Minor Outlying Islands",
    US: "United States of America",
    UY: "Uruguay",
    UZ: "Uzbekistan",
    VA: "Holy See",
    VC: "Saint Vincent and the Grenadines",
    VE: "Venezuela (Bolivarian Republic of)",
    VG: "Virgin Islands (British)",
    VI: "Virgin Islands (U.S.)",
    VN: "Viet Nam",
    VU: "Vanuatu",
    WF: "Wallis and Futuna",
    WS: "Samoa",
    YE: "Yemen",
    YT: "Mayotte",
    ZA: "South Africa",
    ZM: "Zambia",
    ZW: "Zimbabwe",
    XK: "Kosovo",// https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#XK
};
const CURRENCY_EUR = "EUR";
const CURRENCY_USD = "USD";
// const CURRENCY_GBP = "GBP";

/**
 * Contains all the data for P2PS2's logic
 */
const P2PS2 = {
    // unique ID generated from raw statement row
    // allows for multiple statement loading to fill full transactions list
    columns: {
        id: "id",// string | either supplied form statement, or computed from md5 of stringified row
        date: "date",// Date
        value: "value",// number
        type: "type",// one of P2PS2.types
        subType: "subType",// one of P2PS2.subTypes
        currency: "currency",// not currently used
        country: "country",// one of keys from COUNTRIES_ISO_CODES, [UNKNOWN] {platformKey} for unknown, [CRYPTO] {platformKey} for crypto, or undefined if not relevant for transaction
    },

    // possible values for columnType
    types: {
        invalid: "UNK",// special value for removal detection
        deposit: "deposit",// => positive
        withdrawal: "withdrawal",// => negative
        bonus: "bonus",// => positive
        investment: "investment",// => negative
        interest: "interest",// => positive
        fee: "fee",// => negative
        principal: "principal",// => positive
        assimilation: "assimilation",// => positive, negative
    },

    // possible values for columnSubType
    subTypes: {
        na: "N/A",
        // types.interest, types.principal
        buyback: "buyback",
        early: "early",
        // types.interest
        lateFee: "lateFee",
        // types.bonus
        referral: "referral",
        cashback: "cashback",
        loyalty: "loyalty",
    },

    _ESTATEGURU: {
        // column names
        columns: {
            id: "ID",
            sm: "Secondary Market",
            loanCode: "Loan Code",
            paymentDate: "Payment Date",
            confirmDate: "Confirmation Date",
            cfType: "Cash Flow Type",
            cfStatus: "Cash Flow Status",
            projectName: "Project Name",
            amount: "Amount",
            balance: "Balance",
            currency: "Currency",
        },
        // possible values for type
        types: {
            deposit: "Deposit",// positive
            withdrawal: "Withdrawal",// negative
            fee: "Fee",// negative
            indemnity: "Indemnity",// positive | late fees
            interest: "Interest",// positive
            investment: "Investment",// positive or negative (canceled+returned or approved)
            principal: "Principal",// positive
            referral: "Referral",// positive
            secondaryMarket: "Secondary Market",// positive or negative (sell or buy)
            secondaryMarketProfit: "Secondary Market Profit",// positive
        },
        countries: [
            // columns.loanCode starts with these which are country codes in ISO 3166-1 alpha-2 format for relevant rows
            "DE",
            "EE",
            "ES",
            "FI",
            "LT",
            "LV",
            "SE",
            "PT",
        ],
        notice: `Make sure to get the Excel (XLS) version of your statement (Link "Download detailed report" to the right of the "Details" section).`
    },
    _IUVO: {
        // column names
        columns: {
            date: "Date",
            txID: "Transaction ID",
            txType: "Transaction Type",
            loanId: "Loan ID",
            pfName: "Portfolio Name",
            productName: "Product Name",
            turnover: "Turnover",
            balance: "Balance",
        },
        // possible values for type
        /**
            "Bonuses",
            "Deposits",
            "Incoming currency exchange",
            "Late fees received",
            "Outgoing currency exchange",
            "Interest received",
            "Buyback interest received",
            "Early interest repayment",
            "Principal received",
            "Buyback principal received",
            "Early principal repayment",
            "Primary market auto invest investment",
            "Primary market investment",
            "Secondary market purchase – premium/ discount",// double check spaces
            "Secondary market investment",
            "Secondary market sale",
            "Secondary market sale - premium/ discount",
            "Secondary market fees",
            "iuvoUP investment contribution",
            "iuvoUP early withdraw",
            "iuvoUP early withdraw fee",
            "iuvoUP early withdraw - final",
            "iuvoUP interest received",
            "iuvoUP investment",
            "iuvoUP matured investment",
            "Withdrawals",
            "Canceled withdraw request",
            "Rejected withdraw request",
            "Withdraw requests",
         */
        types: {
            bonus: "bonus",// positive
            deposit: "deposit",// positive
            withdrawal: "withdraw",// negative
            lateFee: "late_fee",// positive
            paymentInterest: "payment_interest",// positive
            paymentInterestBuyback: "payment_interest_buyback",// positive
            paymentInterestEarly: "payment_interest_early",// positive
            paymentPrincipal: "payment_principal",// positive
            paymentPrincipalBuyBack: "payment_principal_buyback",// positive
            paymentPrincipalEarly: "payment_principal_early",// positive
            pmAutoInvest: "primary_market_auto_invest",// negative
            pmInvest: "primary_market_invest",// negative | TODO: CONFIRM
            smSale: "secondary_market_sale",// positive
            smDiscount: "secondary_market_sale_discount",// positive
            smSaleFee: "secondary_market_sell_brokerage_fee"// negative
            // TODO: CONFIRM iuvoUP STUFF
        },
        investmentsColumns: {
            country: "Country",
            id: "ID",
            loanType: "Loan Type",
            issueDate: "Issue Date",
            amortMethod: "Amortization Method",
            originator: "Originator",
            currency: "Currency",
            loanAmount: "Loan Amount",
            remainBalance: "Remaining Balance",
            nextPayment: "Next Payment",
            estNextPayment: "Estimated next payment",
            interestRate: "Interest Rate (%)",
            term: "Term",
            paymentReceived: "Payments Received",
            status: "Status",
            guaranteedOfPrincipal: "Guaranteed of Principal (%)",
            myInvestment: "My Investment",
            dateOfPurchase: "Date of Purchase",
            receivedPayments: "Received Payments",
            outstandingPrincipal: "Outstanding principal",
            amountInSM: "Amount in Secondary Market",
            price: "Price",
            discountPremium: "Discount / Premium (%)",
            autoInvestPfName: "Auto Invest Portfolio Name",
        },
        countries: {
            // XXX: matching with "current investments" file
            //      investmentsColumns.country matches these keys for relevant rows
            "Bulgaria": "BG",
            "Romania": "RO",
            "Georgia": "GE",// TODO: confirm
            "Poland": "PL",// TODO: confirm
            "Spain": "ES",// TODO: confirm
            "Latvia": "LV",// TODO: confirm
            "Russian Federation": "RU",
        },
        warning: `Work in progress. We're still missing feedback to ensure full support.`,
        notice: `Remove the first and last three lines (not part of the main table) of the statement with Excel before loading it here (superfluous data making it incompatible with automatic detection).`,
    },
    _KVIKU: {
        // column names
        columns: {
            operation: "Operation",
            amount: "Amount",
            balance: "Balance",
            date: "Date",
        },
        // possible values for type, WARNING: all lowercase for processing
        types: {
            bonusIncome: "bonus income ",// positive | WARNING: trailing space at end
            referral: "sign up bonus ",// positive | WARNING: trailing space at end
            addFunds: "adding funds ",// positive | WARNING: trailing space at end
            withdrawalOrder: "withdrawal order ",// positive | WARNING: trailing space at end
            creatingPortfolio: "creating portfolio ",// positive | WARNING: trailing space at end | NOTE: removed on load
            principalReceived: "loan principal received",// ~= | positive
            interestReceived: "loan interest received",// ~= | positive
            fullyRepaid: "loan fully repaid",// ~= | positive
            buyback: "loan buyback",// ~= | positive
            investment: "loan purchase",// ~= | positive NOTE: converted on load
        },
        countries: [
            // columns.operation ends with these which are country codes in ISO 3166-1 alpha-2 format (lowercase) for relevant rows
            'pl',
            'es',
            'kz',
            'ua',
            'ph',
        ],
        notice: `Beware, the sign-up bonus cannot be withdrawn from the platform, only used to accumulate extra interests.`,
    },
    _LENDERMARKET: {
        // column names
        columns: {
            date: "Date",
            loanId: "Loan ID",
            txDetails: "Transaction details",
            turnover: "Turnover",
            balance: "Balance",
            currency: "Currency",
        },
        // possible values for type
        /**
            "Deposit",
            "Investment",
            "Principal received",
            "Interest received",
            "Delayed interest received",
            "Withdrawal",
            "Campaign rewards and Bonuses",
         */
        types: {
            deposit: "Deposit",// positive
            withdrawal: "Withdrawal",// positive | TODO: CONFIRM
            investment: "Investment",// negative
            principal: "Principal received",// positive
            interest: "Interest received",// positive
            delayedInterest: "Delayed interest received",// positive
            rewardBonus: "Campaign rewards and Bonuses",// positive
        },
        countries: [
            // columns.loanId starts with these which are country codes in ISO 3166-1 alpha-2 format for relevant rows
            "CZ",
            "DK",
            "EE",
            "ES",
            "FI",
            "PL",
            "SE",
        ],
        warning: `Work in progress. We're still missing feedback to ensure full support.`,
    },
    _MINTOS: {
        // column names
        columns: {
            date: "Date",
            txId: "Transaction ID:",
            details: "Details",
            turnover: "Turnover",
            balance: "Balance",
            currency: "Currency",
        },
        // possible values for type, WARNING: all lowercase for processing
        /**
            "Currency conversion - currency purchased",
            "Currency conversion - currency sold",
            "Currency conversion fee",
            "Deposit reversed",
            "Deposits",
            "Inactivity fee",
            "Interest received",
            "Interest received from loan repurchase",
            "Interest received from pending payments",
            "Investment",
            "Late fees correction",
            "Late fees received",
            "Principal received",
            "Principal received from loan repurchase",
            "Principal received from repurchase of small loan parts",
            "Secondary market fee",
            "Secondary market transaction",
            "Secondary market transaction - discount or premium",
            "Service fees",
            "Withdrawal",
            "Withdrawal cancelled",
         */
        types: {
            deposit: "deposits",// positive
            withdrawal: "withdrawal",// positive
            withdrawalCancelled: "withdrawal cancelled",// positive | TODO: CONFIRM
            depositReversed: "deposit reversed",// negative => accounting assimilation?
            investment: "investment in loan",// ~= | negative
            smTransaction: "secondary market transaction",// ~= | positive or negative (sell or buy respectively)
            sMDiscountPremium: "discount/premium for secondary market transaction",// ~= | positive or negative
            sMFee: "secondary market fee",// ~= | negative
            inactivityFee: "inactivity fee",// ~= | negative | TODO: CONFIRM
            serviceFees: "service fees",// ~= | negative | TODO: CONFIRM
            principalReceived: "principal received",// ~= | positive
            interestReceived: "interest received",// ~= | positive
            latePaymentInterestReceived: "late payment interest received",// ~= | positive
            lateFeesReceived: "late fees received",// ~= | positive
            lateFeesCorrection: "late fees correction",// ~= | negative | TODO: CONFIRM
            cashbackBonus: "cashback bonus",// positive
            affiliateBonus: "affiliate partner bonus",// positive
            referralBonus: "refer a friend bonus",// positive
            interestFromPP: "interest received from pending payments",// ~= | positive | usually =, but can have the name of the LO in front
            smallLoanPartsPrincipalReceived: "principal received from repurchase of small loan parts",// positive | always the very last line, no date nor tx ID, fix date to TODAY on load (small amount anyway)
        },
        // possible values for subType, WARNING: all lowercase for processing
        subTypes: {
            repurchased: "repurchased",// ~= | Early | types.principalReceived, types.interestReceived, types.latePaymentInterestReceived
            other: "other",// ~= | Early | types.principalReceived, types.interestReceived, types.latePaymentInterestReceived
            buyback: "buyback",// ~= | Buyback | types.principalReceived, types.interestReceived, types.latePaymentInterestReceived,
        },
        investmentsColumns: {
            country: "Country",
            id: "ID",
            issueDate: "Issue Date",
            loanType: "Loan Type",
            amortMethod: "Amortization Method",
            lendingCompany: "Lending Company",
            mintosRiskScore: "Mintos Risk Score",
            lendingCompanyStatus: "Lending company status",
            inRecovery: "In Recovery",
            loanAmount: "Loan Amount",
            remainPrincipal: "Remaining Principal",
            nextPayment: "Next Payment",
            estNextPayment: "Estimated Next Payment",
            ltv: "LTV",
            interestRate: "Interest Rate",
            remainTerm: "Remaining Term",
            paymentsReceived: "Payments Received",
            status: "Status",
            buybackObligation: "Buyback Obligation",
            scheduleExtension: "Schedule extension",
            myInvestments: "My Investments",
            dateOfInvestment: "Date of Investment",
            receivedPayments: "Received Payments",
            pendingPayments: "Pending Payments",
            outstandingPrincipal: "Outstanding Principal",
            amountInSM: "Amount in Secondary Market",
            price: "Price",
            discountPremium: "Discount/Premium",
            currency: "Currency",
        },
        countries: {
            // XXX: matching with "current investments" file
            //      investmentsColumns.country matches these keys for relevant rows
            //      confirm all naming (taken from select in CI page)
            "Albania": "AL",
            "Armenia": "AM",
            "Belarus": "BY",
            "Botswana": "BW",
            "Bulgaria": "BG",
            "Colombia": "CO",
            "Czech Republic": "CZ",
            "Estonia": "EE",
            "Finland": "FI",
            "Georgia": "GE",
            "Indonesia": "ID",
            "Kazakhstan": "KZ",
            "Kenya": "KE",
            "Kosovo": "XK",
            "Latvia": "LV",
            "Lithuania": "LT",
            "Mexico": "MX",
            "Moldova": "MD",
            "Namibia": "NA",
            "North Macedonia": "MK",
            "Philippines": "PH",
            "Poland": "PL",
            "Romania": "RO",
            "Russian Federation": "RU",
            "South Africa": "SA",
            "Spain": "ES",
            "Turkey": "TR",
            "Uganda": "UG",
            "Ukraine": "UA",
            "United Kingdom": "GB",
            "Uzbekistan": "UZ",
            "Vietnam": "VN",
            "Zambia": "ZM",
        },
        notice: `Large statements (multiple years' worth) are especially slow to load because of the nature of the statement.`,
    },
    _MONCERA: {
        // column names
        columns: {
            date: "Processing Date ",// WARNING trailing space at end
            txID: "Transaction ID ",// WARNING trailing space at end
            lo: "Loan Originator ",// WARNING trailing space at end
            country: "Country ",// WARNING trailing space at end
            type: "Type ",// WARNING trailing space at end
            description: "Description ",// WARNING trailing space at end
            loanNum: "Loan Number ",// WARNING trailing space at end
            value: "Amount ",// WARNING trailing space at end
            currency: "Currency ",// WARNING trailing space at end
        },
        // possible values for type
        /**
            "Investment",
            "Interest",
            "Tax",
            "Fee",
            "Compensation",
            "Referral",
            "Payment",
            "Unknown",
         */
        types: {
            interest: "Interest",// positive
            investment: "Investment",// positive or negative (by subType)
            payment: "Payment",// positive or negative (by subType)
            fee: "Fee",// negative
            tax: "Tax",// negative | TODO: CONFIRM
            referral: "Referral",// positive | TODO: CONFIRM
            compensation: "Compensation",// positive | TODO: CONFIRM
        },
        // possible values for subType
        subTypes: {
            schedule: "Schedule",// positive | types.interest
            buyback: "Buyback",// positive | types.interest, types.investment
            principal: "Principal",// positive | types.investment
            investment: "Investment to loan",// negative | types.investment
            sold: "Sold",// positive | types.investment
            earlySell: "Penalty (for early sold)",// negative | types.fee
            addFunds: "Add funds",// positive | types.payment
            withdrawFunds: "Withdraw funds",// negative | types.payment
        },
        countries: {
            // columns.country matches these keys here for relevant rows
            "Estonia": "EE",
            "Lithuania": "LT",
        },
    },
    _PEERBERRY: {
        // column names
        columns: {
            id: "ID",
            date: "Date",
            loanId: "Loan Id",
            type: "Type",
            amount: "Amount",
            currency: "Currency",
        },
        // possible values for type
        /**
            "Deposit",
            "Withdrawal",
            "Principal repayment",
            "Interest payment",
            "Investment",
            "Referral fee",
         */
        types: {
            buybackInterest: "BUYBACK_INTEREST",// positive
            buybackPrincipal: "BUYBACK_PRINCIPAL",// positive
            deposit: "DEPOSIT",// positive
            investment: "INVESTMENT",// positive NOTE: converted on load
            referralBonus: "REFERRAL_FEE",// positive
            repaymentInterest: "REPAYMENT_INTEREST",// positive
            repaymentPrincipal: "REPAYMENT_PRINCIPAL",// positive
            withdrawal: "WITHDRAWAL",// positive NOTE: converted on load,
        },
        investmentsColumns: {
            loanId: "Loan ID",
            country: "Country",
            originator: "Originator",
            brandName: "Brand name",
            dateOfPurchase: "Date of purchase",
            loanType: "Loan type",
            interestRate: "Interest rate",
            investedAmount: "Invested amount",
            estFinalPaymentDate: "Estimated final payment date",
            estNextPaymentDate: "Estimated next payment date",
            estNextPaymentPrincipal: "Estimated next payment (principal)",
            estNextPaymentInterest: "Estimated next payment (interest)",
            leftTermTillEstPaymentDate: "Left term till estimated payment date",
            ReceivedPayments: "Received payments",
            lastReceivedPaymentDate: "Last received payment date",
            remainPrincipal: "Remaining principal",
            status: "Status",
        },
        countries: {
            // XXX: matching with "current investments" file
            //      investmentsColumns.country matches these keys for relevant rows
            "Poland": "PL",
            "Ukraine": "UA",
            "Kazakhstan": "KZ",// TODO: CONFIRM
            "Moldova": "MD",// TODO: CONFIRM
            "Russian Federation": "RU",
            "Vietnam": "VN",
            "Sri Lanka": "LK",// TODO: CONFIRM
            "Philippines": "PH",// TODO: CONFIRM
            "Romania": "RO",// TODO: CONFIRM
            "Czech Republic": "CZ",// TODO: CONFIRM
            "Lithuania": "LT",// TODO: CONFIRM
        },
    },
    _ROBOCASH: {
        // column names
        columns: {
            txId: "Transaction ID",
            dateTime: "Date and time",
            operationType: "Operation type",// number-based
            operation: "Operation",// number-based
            creditPartId: "Credit part ID",
            senderId: "Sender ID",
            receiverId: "Receiver ID",
            amount: "Amount",
            loCountry: "Loan originator country",
            loName: "Loan originator name",
            // NOTE: other columns are ignored (investor account based)
        },
        // possible values for type
        types: {
            addingFunds: 0,// positive
            withdrawingFunds: 1,// positive | NOTE: converted on load | TODO: CONFIRM
            creatingPortfolio: 2,// positive | NOTE: removed on load | ~= "Creating the portfolio"
            depositingToPortfolio: 3,// positive | NOTE: removed on load | ~= "Depositing to the portfolio"
            withdrawingFromPortfolio: 4,// positive | NOTE: removed on load | ~= "Withdrawing from the portfolio"
            investingToLoan: 5,// positive | NOTE: converted on load | ~= "Investing to the loan"
            principal1: 6,// positive | ~= "Returning the loan"
            principal2: 7,// positive | ~= "Returning the loan"
            maxPortfolio: 10,// positive | NOTE: removed on load | "The maximum size of the portfolios was exceeded"
            disabledPortfolio: 14,// positive | NOTE: removed on load | ~= "Portfolio was disabled"
            interest1: 16,// positive | ~= "Paying interests for loan"
            interest2: 17,// positive | ~= "Paying interests for loan"
            loyaltyInterest1: 35,// positive | ~= "Loyalty interest payout for loan"
            loyaltyInterest2: 37,// positive | ~= "Loyalty interest payout for loan"
            welcomeBonus: 39,// positive | ~= "Welcome bonus paid"
        },
        countries: {
            // columns.loCountry matches these keys for relevant rows
            "Philippines": "PH",
            "Kazakhstan": "KZ",
            "Singapore": "SG",
            "Spain": "ES",
        },
        warning: `Work in progress. We're still missing feedback to ensure full support.`,
        notice: `Make sure you get the "Advanced Statement" version, NOT the "Statement" version.`
    },
    _TWINO: {
        // Example flow of TXs:
        // - subTypes.buyShares(P) > subTypes.schedule(I) > subTypes.extension(P) > subTypes.schedule(I) > subTypes.repayment(P, I)
        // - subTypes.buyShares(P) > subTypes.extension(P, I) > subTypes.repayment(P, I),

        // column names
        columns: {
            procDate: "Processing Date",
            txID: "Transaction ID",
            type: "Type",
            description: "Description",
            loanNumber: "Loan Number",
            amountEUR: "Amount, EUR",
            localAmount: "Amount, local currency",
            localCurrency: "Local currency",
            exchangeRate: "Exchange rate",
        },
        // possible values for type
        /**
            "Principal",
            "Interest",
            "Sale",
            "Commission",
         */
        types: {
            empty: "",// positive
            interest: "INTEREST",// positive
            principal: "PRINCIPAL",// positive or negative
            sale: "SALE",// TODO: CONFIRM
            commission: "COMMISSION",// TODO: CONFIRM
        },
        // possible values for subType
        /**
            "Repayment",
            "Buy shares",
            "Sell shares",
            "Funding",
            "Withdrawal",
            "Extension",
            "Buyback",
            "Schedule",
            "Recovery",
            "Repurchase price",
            "Loss on write off",
            "Write off",
            "Currency fluctuation",
            "Cashback",
            "Referral",
            "Secondary market",
            "Others",
         */
        subTypes: {
            funding: "FUNDING",// positive | types.empty
            withdrawal: "WITHDRAWAL",// negative | types.empty | TODO: CONFIRM
            buyShares: "BUY_SHARES",// positive or negative (sell or buy) | types.interest, types.principal
            schedule: "SCHEDULE",// positive | types.interest | NOTE: mid-course repayment (interest only)?
            buyback: "BUYBACK",// positive | types.interest, types.principal
            extension: "EXTENSION",// positive | types.interest, types.principal | NOTE: repayment during/after extension granted?
            repayment: "REPAYMENT",// positive | types.interest, types.principal | NOTE: final repayment?
            referral: "REFERRAL",// positive | types.interest
            cashback: "CASHBACK",// positive | types.interest | TODO: CONFIRM
            // TODO: CONFIRM RECOVERY STUFF
        },
        countries: {
            // columns.loanNumber starts with these keys for relevant rows
            "09-": "LV",
            "20-": "LV",
            "23-": "PL",
            "17-": "PL",
            "08-": "RU",
            "26-": "VN",
        },
        notice: `Remove the first two lines (not part of the main table) of the statement with Excel before loading it here (superfluous data making it incompatible with automatic detection).`,
    },
    _BLOCKFI: {
        // not yet supported
    },
    _CRYPTOCOM: {
        // column names
        columns: {
            timestamp: "Timestamp (UTC)",
            txDesc: "Transaction Description",
            currency: "Currency",
            amount: "Amount",
            toCurrency: "To Currency",
            toAmount: "To Amount",
            nativeCurrency: "Native Currency",
            nativeAmount: "Native Amount",
            nativeAmountUSD: "Native Amount (in USD)",
            txKind: "Transaction Kind",
        },
        // possible values for type (pos/neg given for columns.nativeAmountUSD)
        types: {
            vibanDeposit: "viban_deposit",// positive
            vibanWithdrawal: "viban_withdrawal",// negative | TODO: CONFIRM
            vibanPurchase: "viban_purchase",// positive | NOTE: removed on load, purchase of columns.toCurrency with columns.currency
            lockupLock: "lockup_lock",// negative | NOTE: converted on load, equivalent to P2P "investment" (at zero interest), staking
            cryptoExchange: "crypto_exchange",// negative | NOTE: removed on load, purchase of columns.toCurrency with columns.currency
            cryptoVibanExchange: "crypto_viban_exchange",// positive | NOTE: removed on load, in crypto csv, selling crypto (columns.currency) for fiat (columns.toCurrency)
            cryptoViban: "crypto_viban",// positive | NOTE: same as above but in fiat csv
            cryptoEarnCreated: "crypto_earn_program_created",// negative | earn term creation, equivalent to p2p "investment"
            cryptoEarnInterest: "crypto_earn_interest_paid",// positive | earn term interest received
            cryptoEarnWithdrawn: "crypto_earn_program_withdrawn",// positive | withdrawal from "flexible" term, equivalent to p2p "principal"
            referral: "referral_gift",// positive
            rewardsDeposit: "rewards_platform_deposit_credited",// positive | mission rewards
            cardTopUp: "card_top_up",// negative | equivalent to fiat withdrawal
            cardCashback: "referral_card_cashback",// positive
        },
        warning: `Work in progress. We're still missing feedback to ensure full support.`,
        notice: `Statement is split in three: fiat, crypto & card. Load only fiat & crypto, order doesn't matter, transactions will be sorted automatically.`,
    },
    _NEXO: {
        // column names
        // old
        // columns: {
        //     tx: "Transaction",
        //     type: "Type",
        //     currency: "Currency",
        //     amount: "Amount",// NOTE: starts with purchased currency (last pair of columnCurrency) when typeExchange
        //     usdEquiv: "USD Equivalent",// use this for calc
        //     details: "Details",
        //     outstandingLoan: "Outstanding Loan",
        //     dateTime: "Date / Time",
        // },
        // Transaction,Type,Input Currency,Input Amount,Output Currency,Output Amount,USD Equivalent,Details,Outstanding Loan,Date / Time
        columns: {
            tx: "Transaction",
            type: "Type",
            currency: "Input Currency",
            amount: "Input Amount",// NOTE: starts with purchased currency (last pair of columnCurrency) when typeExchange
            outputCurrency: "Output Currency",
            outputAmount: "Output Amount",
            usdEquiv: "USD Equivalent",// use this for calc
            details: "Details",
            outstandingLoan: "Outstanding Loan",
            dateTime: "Date / Time",
        },
        // possible values for type
        types: {
            depositToExchange: "DepositToExchange",// positive | NOTE: fiat transfer in
            exchangeDepositedOn: "ExchangeDepositedOn",// positive | NOTE: removed on load, fiat top-up to "placeholder" stablecoin
            exchange: "Exchange",// positive | NOTE: removed on load, purchase of columns.currency (pair sep with "/")
            exchangeCashback: "Exchange Cashback",// positive
            lockingTermDeposit: "LockingTermDeposit",// positive | NOTE: converted on load, equivalent to P2P "investment", transfering from Savings to Term Wallet
            transferIn: "TransferIn",// positive | NOTE: removed on load, whenever transfering from Credit Line to Savings  Wallet
            transferOut: "TransferOut",// positive | NOTE: removed on load, whenever transfering from Savings to Credit Line Wallet
            withdrawalCredit: "WithdrawalCredit",// positive | NOTE: removed on load, whenever purchasing a credit (immediately followed by a types.deposit of same amount)
            deposit: "Deposit",// positive | NOTE: whenever crypto incoming or purchased a credit
            liquidation: "Liquidation",// positive | NOTE: removed on load, whenever paying back a credit (immediately followed by a types.repayment)
            repayment: "Repayment",// positive | NOTE: converted on load, whenever payed back a credit
            interestAdditional: "InterestAdditional",// positive | NOTE: converted on load, whenever payed back a credit (fee)
            administrator: "Administrator",// positive or negative | NOTE: assimilation
            interest: "Interest",// positive,
        },
        warning: `Work in progress. We're still missing feedback to ensure full support.`,
    },
    _YOUHODLER: {
        // not yet supported
        // statement not available?
    },

    // defined manually for linting purposes
    platforms: {
        ESTATEGURU: {
            // array of object with P2PS2.columns as keys (currency is optional)
            transactions: [],
            // object { loanId: { value: remainingPrincipal, country: CC }
            currentInvestments: {},
            balance: 0.0,
            balanceAvail: 0.0,
            balanceDepWid: 0.0,
            fees: 0.0,
            interests: 0.0,
            bonuses: 0.0,
            returns: undefined,
            currency: CURRENCY_EUR,
            // cache of tx IDs for faster lookup, not ordered
            _txIDs: [],
        },
        IUVO: {
            // array of object with P2PS2.columns as keys (currency is optional)
            transactions: [],
            // object { loanId: { value: remainingPrincipal, country: CC }
            currentInvestments: {},
            balance: 0.0,
            balanceAvail: 0.0,
            balanceDepWid: 0.0,
            fees: 0.0,
            interests: 0.0,
            bonuses: 0.0,
            returns: undefined,
            currency: CURRENCY_EUR,
            // cache of tx IDs for faster lookup, not ordered
            _txIDs: [],
        },
        KVIKU: {
            // array of object with P2PS2.columns as keys (currency is optional)
            transactions: [],
            // object { loanId: { value: remainingPrincipal, country: CC }
            currentInvestments: {},
            balance: 0.0,
            balanceAvail: 0.0,
            balanceDepWid: 0.0,
            fees: 0.0,
            interests: 0.0,
            bonuses: 0.0,
            returns: undefined,
            currency: CURRENCY_EUR,
            // cache of tx IDs for faster lookup, not ordered
            _txIDs: [],
        },
        LENDERMARKET: {
            // array of object with P2PS2.columns as keys (currency is optional)
            transactions: [],
            // object { loanId: { value: remainingPrincipal, country: CC }
            currentInvestments: {},
            balance: 0.0,
            balanceAvail: 0.0,
            balanceDepWid: 0.0,
            fees: 0.0,
            interests: 0.0,
            bonuses: 0.0,
            returns: undefined,
            currency: CURRENCY_EUR,
            // cache of tx IDs for faster lookup, not ordered
            _txIDs: [],
        },
        MINTOS: {
            // array of object with P2PS2.columns as keys (currency is optional)
            transactions: [],
            // object { loanId: { value: remainingPrincipal, country: CC }
            currentInvestments: {},
            balance: 0.0,
            balanceAvail: 0.0,
            balanceDepWid: 0.0,
            fees: 0.0,
            interests: 0.0,
            bonuses: 0.0,
            returns: undefined,
            currency: CURRENCY_EUR,
            // cache of tx IDs for faster lookup, not ordered
            _txIDs: [],
        },
        MONCERA: {
            // array of object with P2PS2.columns as keys (currency is optional)
            transactions: [],
            // object { loanId: { value: remainingPrincipal, country: CC }
            currentInvestments: {},
            balance: 0.0,
            balanceAvail: 0.0,
            balanceDepWid: 0.0,
            fees: 0.0,
            interests: 0.0,
            bonuses: 0.0,
            returns: undefined,
            currency: CURRENCY_EUR,
            // cache of tx IDs for faster lookup, not ordered
            _txIDs: [],
        },
        PEERBERRY: {
            // array of object with P2PS2.columns as keys (currency is optional)
            transactions: [],
            // object { loanId: { value: remainingPrincipal, country: CC }
            currentInvestments: {},
            balance: 0.0,
            balanceAvail: 0.0,
            balanceDepWid: 0.0,
            fees: 0.0,
            interests: 0.0,
            bonuses: 0.0,
            returns: undefined,
            currency: CURRENCY_EUR,
            // cache of tx IDs for faster lookup, not ordered
            _txIDs: [],
        },
        ROBOCASH: {
            // array of object with P2PS2.columns as keys (currency is optional)
            transactions: [],
            // object { loanId: { value: remainingPrincipal, country: CC }
            currentInvestments: {},
            balance: 0.0,
            balanceAvail: 0.0,
            balanceDepWid: 0.0,
            fees: 0.0,
            interests: 0.0,
            bonuses: 0.0,
            returns: undefined,
            currency: CURRENCY_EUR,
            // cache of tx IDs for faster lookup, not ordered
            _txIDs: [],
        },
        TWINO: {
            // array of object with P2PS2.columns as keys (currency is optional)
            transactions: [],
            // object { loanId: { value: remainingPrincipal, country: CC }
            currentInvestments: {},
            balance: 0.0,
            balanceAvail: 0.0,
            balanceDepWid: 0.0,
            fees: 0.0,
            interests: 0.0,
            bonuses: 0.0,
            returns: undefined,
            currency: CURRENCY_EUR,
            // cache of tx IDs for faster lookup, not ordered
            _txIDs: [],
        },
        BLOCKFI: {
            // array of object with P2PS2.columns as keys (currency is optional)
            transactions: [],
            // object { loanId: { value: remainingPrincipal, country: CC }
            currentInvestments: {},
            balance: 0.0,
            balanceAvail: 0.0,
            balanceDepWid: 0.0,
            fees: 0.0,
            interests: 0.0,
            bonuses: 0.0,
            returns: undefined,
            currency: CURRENCY_USD,
            // cache of tx IDs for faster lookup, not ordered
            _txIDs: [],
        },
        CRYPTOCOM: {
            // array of object with P2PS2.columns as keys (currency is optional)
            transactions: [],
            // object { loanId: { value: remainingPrincipal, country: CC }
            currentInvestments: {},
            balance: 0.0,
            balanceAvail: 0.0,
            balanceDepWid: 0.0,
            fees: 0.0,
            interests: 0.0,
            bonuses: 0.0,
            returns: undefined,
            currency: CURRENCY_USD,
            // cache of tx IDs for faster lookup, not ordered
            _txIDs: [],
        },
        NEXO: {
            // array of object with P2PS2.columns as keys (currency is optional)
            transactions: [],
            // object { loanId: { value: remainingPrincipal, country: CC }
            currentInvestments: {},
            balance: 0.0,
            balanceAvail: 0.0,
            balanceDepWid: 0.0,
            fees: 0.0,
            interests: 0.0,
            bonuses: 0.0,
            returns: undefined,
            currency: CURRENCY_USD,
            // cache of tx IDs for faster lookup, not ordered
            _txIDs: [],
        },
        YOUHODLER: {
            // array of object with P2PS2.columns as keys (currency is optional)
            transactions: [],
            // object { loanId: { value: remainingPrincipal, country: CC }
            currentInvestments: {},
            balance: 0.0,
            balanceAvail: 0.0,
            balanceDepWid: 0.0,
            fees: 0.0,
            interests: 0.0,
            bonuses: 0.0,
            returns: undefined,
            currency: CURRENCY_EUR,
            // cache of tx IDs for faster lookup, not ordered
            _txIDs: [],
        },
    },

    GLOBAL: {
        balance: 0.0,
        balanceAvail: 0.0,
        balanceDepWid: 0.0,
        fees: 0.0,
        interests: 0.0,
        bonuses: 0.0,
        returns: undefined,
        startDate: undefined,
        endDate: undefined,
    },

    settings: {
        // used mostly for breaking change detection with save mechanism
        version: 0.13,
        // if save version is < to this, then save is no longer compatible
        // P2PS2fn.sanitizeOldSave may be used instead, whenever possible, to avoid full-break
        breakingVersion: 0.10,
        // enable loading of multiple statements for a single plateform
        // in case a platform limits the number of rows available in a statement (like IUVO)
        // this allows to load the entire history by loading multiple statements covering that history-span
        multiload: false,
        // if true, TWRR calc ignores periodic bonuses (referral, one-time events, all except ongoing loyalty bonuses)
        twrrIgnorePeriodicBonuses: false,
        // 1 USD === this
        fxUSDEUR: 0.895,
        blockingProgressTag: document.querySelector("#blocking-progress"),
        toastContainerTag: document.querySelector("#toast-container"),
        toastTemplateTag: document.querySelector("#toast"),
        offcanvasInfoId: "offcanvas-info",
        // colors (mainly for charts)
        colors: {
            fees: 'rgba(225, 50, 50, 0.6)',
            interests: 'rgba(50, 225, 75, 0.6)',
            bonuses: 'rgba(200, 75, 225, 0.6)',
            // from prominent UI element of each website (usually close to brand color)
            platforms: {
                ESTATEGURU: 'rgba(0, 170, 225, 0.6)',
                IUVO: 'rgba(0, 168, 68, 0.6)',
                KVIKU: 'rgba(241, 153, 56, 0.6)',
                LENDERMARKET: 'rgba(247, 210, 124, 0.6)',
                MINTOS: 'rgba(19, 111, 232, 0.6)',
                MONCERA: 'rgba(135, 163, 48, 0.6)',
                PEERBERRY: 'rgba(48, 229, 162, 0.6)',
                ROBOCASH: 'rgba(255, 137, 0, 0.6)',
                TWINO: 'rgba(46, 80, 182, 0.6)',
                NEXO: 'rgba(30, 77, 216, 0.6)',
                YOUHODLER: 'rgba(41, 121, 255, 0.6)',
                CRYPTOCOM: 'rgba(6, 17, 33, 0.6)',
                BLOCKFI: 'rgba(0, 76, 239, 0.6)',
            }
        }
    },

    chart: {
        tag: document.querySelector("#chart"),
        containerTag: document.querySelector("#chart-container"),
        showMonthlyReturnsYearSelectTag: document.querySelector("#chart-show-monthly-returns-year"),
        showGlobalMonthlyReturnsYearSelectTag: document.querySelector("#chart-show-global-monthly-returns-year"),
        instance: undefined,
        data: {
            // platforms with no relevant data are taken out
            activePlatformsColors: [],
            balancesPerPlatform: {},
            sharesPerPlatform: {},
            feesPerPlatform: {},
            interestsPerPlatform: {},
            bonusesPerPlatform: {},
            annTWRRVAFRatePerPlatform: {},
            monthlyAnnTWRRVAFRatePerPlatform: {},
            ciPerCountryPerPlatform: {},
            globalMonthlyAnnTWRRVAFRate: {},
        },
    },

    _platformKeys: [],
    _platformNumProps: ["balance", "balanceAvail", "balanceDepWid", "fees", "interests", "bonuses"],
};

/**
 * Contains all the functions for P2PS2's logic
 */
const P2PS2fn = {
    _debug: {
        /**
         * P2PS2fn._debug.accumCI("IUVO");
         * Check accumulated value for current investment vs platform balance (should be nearly equal).
         * 
         * @param {string} platformKey 
         */
        accumCI(platformKey) {
            let acc = 0;

            for (const key of Object.keys(P2PS2.platforms[platformKey].currentInvestments)) {
                acc += P2PS2.platforms[platformKey].currentInvestments[key].value;
            }

            console.log(P2PS2.platforms[platformKey].currentInvestments);

            const balanceInvested = (P2PS2.platforms[platformKey].balance - P2PS2.platforms[platformKey].balanceAvail);

            console.log(`Expected vs Obtained:`, balanceInvested, acc);
        }
    },
    math: {
        /**
         * Get the difference between two dates in days.
         * 
         * @param {Date} end 
         * @param {Date} start 
         * @returns {number} Number of days
         */
        diffDateDays(end, start) {
            return (end - start) / MS_PER_DAY;
        },

        /**
        * Get the start of the month for the given date.
        * 
        * @param {Date} fromDate 
        * @returns {Date}
        */
        getStartOfMonth(fromDate) {    
            let date = new Date(fromDate);

            date.setDate(1);
            date.setHours(0);
            date.setMinutes(0);
            date.setSeconds(0);   

            return date;     
        },

        /**
        * Get the end of the month for the given date.
        * 
        * @param {Date} fromDate 
        * @returns {Date}
        */
        getEndOfMonth(fromDate) {
            let date = new Date(fromDate);

            // avoid edge cases on the 31st day of some months
            date.setDate(1);
            date.setMonth(date.getMonth() +1);
            date.setDate(0);
            date.setHours(23);
            date.setMinutes(59);
            date.setSeconds(59);

            return date;
        },

        /**
         * Combined getStartOfMonth and getEndOfMonth returned in an object.
         * 
         * @param {Date} fromDate 
         * @returns {Object} { start, end, year[XXXX], month[0-11] }
         */
        getMonthRange(fromDate) {
            return {
                start: P2PS2fn.math.getStartOfMonth(fromDate),
                end: P2PS2fn.math.getEndOfMonth(fromDate),
                year: fromDate.getFullYear(),
                month: fromDate.getMonth()
            };
        },

        /**
         * Round given currency value with 2 digits.
         *   - 1.1225 => 1.12
         *   - 1.118 => 1.12
         * 
         * @param {val} rate In format: x.xxxx
         * @returns {number} rounded currency value in percent
         */
        roundCurrency(val) {
            return Math.round(val * 100.0) / 100.0;
        },

        /**
         * Round given rate to percent with 2 digits.
         *   - 0.1225 => 12.25
         *   - 0.11118 => 11.12
         * 
         * @param {number} rate In format: x.xxxx
         * @returns {number} rounded rate in percent
         */
        roundRate(rate) {
            return Math.round((rate * 100.0) * 100.0) / 100.0;
        },

        /**
         * https://en.wikipedia.org/wiki/Time-weighted_return
         * https://wikimedia.org/api/rest_v1/media/math/render/svg/09ed3e372f9780064c960ac0f5187adc5992dcb7
         * https://www.slideshare.net/social_citadelle/xirr-vs-twrr-55490971
         * The portfolio is valued immediately after each external flow.
         * The value of the portfolio at the end of each sub-period is adjusted for the external flow which takes place immediately before.
         * External flows into the portfolio are considered positive, and flows out of the portfolio are negative.
         * If there is an external flow occurring at the end of the overall period,
         * then the number of sub-periods {n} matches the number of flows.
         * However, if there is no flow at the end of the overall period,
         * then last external flow is zero, and the number of sub-periods {n} is one greater than the number of flows.
         * 
         * @param {Object[]} periods Object:
         * - period.startValue: if i == 0 { initial portfolio value } else { periods[i-1].endValue }
         * - period.endValue: value at end of sub-period {t} immediately after netExternalFlow occurs
         * - period.netExternalFlow: net external flow which occurs just before the end of sub-period {t}
         * @returns {number} The TWRR rate
         */
        twrrValuedAfterFlow(periods) {
            return periods.reduce((acc, cur) => acc * ((cur.endValue - cur.netExternalFlow) / cur.startValue), 1.0) - 1.0;
        },

        /**
         * https://en.wikipedia.org/wiki/Time-weighted_return
         * https://wikimedia.org/api/rest_v1/media/math/render/svg/6ced2398103d1e6df43aae9f22737cf176a2316f
         * The portfolio is valued immediately before each external flow.
         * Each flow should be used to adjust the starting value within each sub-period, instead of the ending value.
         * 
         * @param {Object[]} periods Object:
         * - period.startValue: if i == 0 { initial portfolio value } else { periods[i-1].endValue }
         * - period.endValue: value at end of sub-period {t} immediately before netExternalFlow occurs
         * - period.netExternalFlow: net external flow which occurs at the beginning of sub-period {t+1}
         * @returns {number} TWRR rate
         */
        twrrValuedBeforeFlow(periods) {
            return periods.reduce((acc, cur) => acc * (cur.endValue / (cur.startValue + cur.netExtFlow)), 1.0) - 1.0;
        },

        /**
         * Calculate the annualized TWRR from given TWRR rate and timeframe.
         * 
         * @param {number} twrrRate The actual rate, not the growth factor (i.e. (growth factor - 1), or the result of either twrrValuedAfterFlow or twrrValuedBeforeFlow)
         * @param {Date} startDate 
         * @param {Date} endDate 
         * @returns {number} The TWRR rate, annualized
         */
        annualizedTWRR(twrrRate, startDate, endDate) {
            return (Math.pow((twrrRate + 1.0), (MS_PER_YEAR / (endDate - startDate)))) - 1.0;
        },

    },
    dom: {
        /**
         * Create a Bootstrap tooltip element to insert in the DOM.
         * 
         * @param {string} title 
         * @param {string} content 
         * @returns {HTMLSpanElement}
         */
        createBSTooltipTag(title, content) {
            const tooltipTag = document.createElement("span");
            tooltipTag.title = title;
            tooltipTag.innerHTML = content;
    
            tooltipTag.setAttribute("data-bs-toggle", "tooltip");
    
            return tooltipTag;
        },

        /**
         * Create a simple header/body Bootstrap card.
         * 
         * @param {string} title 
         * @param {string} content 
         * @returns {HTMLDivElement}
         */
        createBSCardTag(title, content) {
            const cardTag = document.createElement('div');
            cardTag.classList.add("card");

            const cardHeaderTag = document.createElement('div');
            cardHeaderTag.classList.add("card-header");

            cardHeaderTag.innerHTML = title;

            const cardBodyTag = document.createElement('div');
            cardBodyTag.classList.add("card-body");

            const contentTag = document.createElement("p");
            contentTag.innerText = content;

            cardBodyTag.appendChild(contentTag);
            cardTag.appendChild(cardHeaderTag);
            cardTag.appendChild(cardBodyTag);

            return cardTag;
        },

        /**
         * Create Bootstrap list tag.
         * 
         * @param {InnerHTML.innerHTML[]} items 
         * @param {boolean?} numbered If true, use <ol> instead of <ul>
         * @param {boolean?} flush If true, add flush class
         * @returns {HTMLOListElement|HTMLUListElement}
         */
        createBSListTag(items, numbered = false, flush = false) {
            const ulTag = document.createElement(numbered ? "ol" : "ul");

            ulTag.classList.add("list-group");

            if (flush) {
                ulTag.classList.add("list-group-flush");
            }

            for (const item of items) {
                const liTag = document.createElement("li");
                
                liTag.classList.add("list-group-item");

                liTag.innerHTML = item;

                ulTag.appendChild(liTag);
            }

            return ulTag;
        },

        /**
         * Bootstrap extension
         * Automatic adding/removing of toast in container with given params.
         * 
         * @param {string} type One of Bootstrap's theme color
         * @param {string} msg 
         * @param {number} delay in ms, before auto-hide (removed from DOM 500ms later)
         */
        showToast(type, msg, delay = 5000) {
            // @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template#avoiding_documentfragment_pitfall
            let newToast = P2PS2.settings.toastTemplateTag.content.firstElementChild.cloneNode(true);
            const newToastBody = newToast.querySelector(".toast-body");
            newToastBody.textContent = msg;

            newToast.classList.add(`bg-${type}`);

            P2PS2.settings.toastContainerTag.appendChild(newToast);

            new bootstrap.Toast(newToast, { animation: true, autohide: true, delay }).show();

            switch(type) {
                case "danger":
                    console.error(msg);
                    break;
                case "warning":
                    console.warn(msg);
                    break;
                default:
                    console.log(msg);
                    break;
            }

            setTimeout(() => {
                newToast.remove();
            }, (delay + 500));
        },

        /**
         * Add a row to the loaded save info list.
         * 
         * @param {number} version Version from loaded save file.
         * @param {string[]?} loadedPlatforms List of loaded platform names or undefined for "incompatible".
         */
        addLoadedSaveInfo(version, loadedPlatforms = undefined) {
            const loadedSaveInfoTag = document.querySelector("#loaded-save-info");
            const rowTag = document.createElement("li");
            
            rowTag.classList.add("list-group-item");

            rowTag.innerText = `Save Version: ${version} | `;

            if (loadedPlatforms) {
                rowTag.innerText += `Available platforms: ${loadedPlatforms.join(", ")}.`;
            }
            else {
                rowTag.innerText += `Incompatible: save version ${P2PS2.settings.breakingVersion} or above required.`;

                rowTag.classList.add("text-danger");
            }

            loadedSaveInfoTag.appendChild(rowTag);
            // "row"
            loadedSaveInfoTag.parentElement.parentElement.classList.remove("d-none");
        },

        /**
         * Update P2PS2.settings.offcanvasInfoId offcanvas with given content.
         * 
         * @param {string} title 
         * @param {HTMLElement} body 
         */
        updateOffcanvasInfo(title, body) {
            const offcanvasTitle = document.querySelector(`#${P2PS2.settings.offcanvasInfoId} .offcanvas-title`);
            const offcanvasBody = document.querySelector(`#${P2PS2.settings.offcanvasInfoId} .offcanvas-body`);

            offcanvasTitle.innerText = title;
            
            while (offcanvasBody.firstChild) {
                offcanvasBody.firstChild.remove();
            }

            offcanvasBody.appendChild(body);
        },

        /**
         * Update P2PS2.settings.offcanvasInfoId offcanvas with given platform's data.
         * 
         * @param {string} platformKey 
         */
        updateOffcanvasInfoWithPlatform(platformKey) {
            const body = document.createElement("div");
            const props = [];
            const platformCurrency = P2PS2.platforms[platformKey].currency;
            // const platformFXMod = (platformCurrency === CURRENCY_USD) ? P2PS2.settings.fxUSDEUR : 1.0;

            props.push(`Balance : ${P2PS2.platforms[platformKey].balance} ${platformCurrency}`);
            props.push(`Available Balance : ${P2PS2.platforms[platformKey].balanceAvail} ${platformCurrency}`);
            props.push(`Balance Deposits/Withdrawals : ${P2PS2.platforms[platformKey].balanceDepWid} ${platformCurrency}`);
            props.push(`Interests : ${P2PS2.platforms[platformKey].interests} ${platformCurrency}`);
            props.push(`Bonuses : ${P2PS2.platforms[platformKey].bonuses} ${platformCurrency}`);
            props.push(`Fees : ${P2PS2.platforms[platformKey].fees} ${platformCurrency}`);
            props.push(`Current Investments : ${Object.keys(P2PS2.platforms[platformKey].currentInvestments).length}`);
            props.push(`Transactions : ${P2PS2.platforms[platformKey].transactions.length}`);

            if (P2PS2.platforms[platformKey].returns) {
                props.push(`TWRR: ${P2PS2fn.math.roundRate(P2PS2.platforms[platformKey].returns.twrrVAFRate)}%`);
                props.push(`Annualized TWRR: ${P2PS2fn.math.roundRate(P2PS2.platforms[platformKey].returns.annTWRRVAFRate)}%`);

                for (const ret of P2PS2.platforms[platformKey].returns.monthly) {
                    props.push(`&bullet; ${ret.year}-${ret.month + 1}: ${P2PS2fn.math.roundRate(ret.twrrVAFRate)}% (ann: ${P2PS2fn.math.roundRate(ret.annTWRRVAFRate)}%)`);
                }
            }

            // not numbered, flush
            const propsList = P2PS2fn.dom.createBSListTag(props, false, true);

            body.appendChild(propsList);

            P2PS2fn.dom.updateOffcanvasInfo(platformKey, body);
        },
    },
    chart: {
        sortLegendLabels(a, b) {
            if (a.text < b.text) {
                return -1;
            }

            if (a.text > b.text) {
                return 1;
            }

            return 0;
        },

        resetRawData() {
            return {
                // platforms with no relevant data are taken out
                activePlatformsColors: [],
                balancesPerPlatform: {},
                sharesPerPlatform: {},
                feesPerPlatform: {},
                interestsPerPlatform: {},
                bonusesPerPlatform: {},
                annTWRRVAFRatePerPlatform: {},
                monthlyAnnTWRRVAFRatePerPlatform: {},
                ciPerCountryPerPlatform: {},
                globalMonthlyAnnTWRRVAFRate: {},
            };
        },

        addData(label, data) {
            if (!P2PS2.chart.instance) {
                P2PS2fn.dom.showToast("danger", "No chart currently displayed.");

                return;
            }
        
            P2PS2.chart.instance.data.labels.push(label);
            
            for (const dataset of P2PS2.chart.instance.data.datasets) {
                dataset.data.push(data);
            }

            P2PS2.chart.instance.update();
        },

        removeData() {
            // remove the label first
            P2PS2.chart.instance.data.labels.pop();
            // P2PS2.chart.instance.data.labels.splice(-1, 1);
        
            for (const dataset of P2PS2.chart.instance.data.datasets) {
                dataset.data.pop();
            }
        
            P2PS2.chart.instance.update();
        },

        addDataset(dataset) {
            P2PS2.chart.instance.data.datasets.push(dataset);
            P2PS2.chart.instance.update();
        },

        removeDataset() {
            P2PS2.chart.instance.data.datasets.pop();
            P2PS2.chart.instance.update();
        },

        setDatasets(datasets) {
            P2PS2.chart.instance.data.datasets = datasets;
            
            P2PS2.chart.instance.update();
        },

        /**
         * Generate an array of colors (CSS rgba(r, g, b, alpha) format) of given length.
         * 
         * @param {number} count 
         * @param {number} alpha 
         * @returns {string[]} RGBA color strings
         */
        getRainbowRGBAColors(count, alpha = 0.6) {
            const colors = [];
            const frequency = 5 / count;

            for (let i = 0; i < count; ++i) {
                const r = Math.floor(Math.sin(frequency * i + 0) * (127) + 128);
                const g = Math.floor(Math.sin(frequency * i + 2) * (127) + 128);
                const b = Math.floor(Math.sin(frequency * i + 4) * (127) + 128);

                colors.push(`rgba(${r}, ${g}, ${b}, ${alpha})`);
            }

            return colors;      
        },

        /**
         * Get red to green color based on params.
         * 
         * @param {number} value 
         * @param {number} min 
         * @param {number} max 
         * @param {number} alpha 
         * @returns {string} HSLA color string (100% sat, 50% lum)
         */
        getPercentHSLAColor(value, min, max, alpha = 0.6) {
            const valuePercent = (value - min) / (max - min);
            const hue = ((1 - valuePercent) * 120).toString(10);

            return `hsl(${hue}, 100%, 50%, ${alpha})`;
        },

        /**
         * Get red to green color based on values.
         * 
         * @param {number[]} values 
         * @returns {string[]} HSLA color strings (100% sat, 50% lum)
         */
        getPercentHSLAColors(values) {
            const min = Math.min(...values);
            const max = Math.max(...values);

            return values.map((val) => P2PS2fn.chart.getPercentHSLAColor(val, min, max));
        },
    },

    /**
     * Executes fn(platformKey) for each P2PS2._platformKeys.
     * 
     * @param {Function} fn 
     */
    forEachPlatformKey(fn) {
        if (fn && (typeof(fn) === "function")) {
            for (const key of P2PS2._platformKeys) {
                fn(key);
            }
        }
    },

    /**
     * Simply re-create an empty object for a platform.
     * 
     * @param {string} currency Default to EUR
     * @returns {Object} empty platform object
     */
    resetPlatformData(currency = CURRENCY_EUR) {
        return {
            // array of object with P2PS2.columns as keys (currency is optional)
            transactions: [],
            // object { loanId: { value: remainingPrincipal, country: CC }
            currentInvestments: {},
            balance: 0.0,
            balanceAvail: 0.0,
            // will be negative if user withdrew everything after accruing net interests > 0
            balanceDepWid: 0.0,
            fees: 0.0,
            interests: 0.0,
            bonuses: 0.0,
            returns: undefined,
            currency,
            // cache of tx IDs for faster lookup, not ordered
            _txIDs: [],
        };
    },

    /**
     * Simply re-create an empty object for P2PS2.GLOBAL.
     * 
     * @returns {Object} empty GLOBAL object
     */
    resetGlobalData() {
        return {
            balance: 0.0,
            balanceAvail: 0.0,
            balanceDepWid: 0.0,
            fees: 0.0,
            interests: 0.0,
            bonuses: 0.0,
            returns: undefined,
            startDate: undefined,
            endDate: undefined,
        };
    },

    /**
     * Strip tiny values and correct rounding if necessary.
     * 
     * @param {string} platformKey One of P2PS2._platformKeys
     */
    sanitizePlatformData(platformKey) {
        for (const valKey of P2PS2._platformNumProps) {
            if (P2PS2.platforms[platformKey][valKey] < VERY_SMALL_NUMBER &&
                    P2PS2.platforms[platformKey][valKey] > -VERY_SMALL_NUMBER) {
                P2PS2.platforms[platformKey][valKey] = 0.0;
            }
            else {
                P2PS2.platforms[platformKey][valKey] = Math.round(P2PS2.platforms[platformKey][valKey] * 1000000.0) / 1000000.0;
            }
        }
    },

    sanitizeOldSave(jsonData) {
        // v0.10 to v0.11 breaks CRYPTOCOM
        if (jsonData.version === 0.10) {
            delete jsonData.platforms.CRYPTOCOM;

            P2PS2fn.dom.showToast(
                "warning",
                `CRYPTOCOM data from this save file (v0.10) cannot be loaded because of breaking changes in v0.11. Please re-add CRYPTOCOM statements manually, and make a new save to replace your old one.`,
                10000
            );
        }
        // v0.10+ to v0.12 breaks IUVO
        else if (jsonData.version === 0.11) {
            delete jsonData.platforms.IUVO;

            P2PS2fn.dom.showToast(
                "warning",
                `IUVO data from this save file (v0.11) cannot be loaded because of breaking changes in v0.12. Please re-add IUVO statements manually, and make a new save to replace your old one.`,
                10000
            );
        }
    },

    /**
     * Update the value for an active investment and deal with add/remove if necessary.
     * WARNING: no checking, platformKey and loanId are assumed to exist.
     * 
     * @param {string} platformKey One of P2PS2._platformKeys
     * @param {string|number} loanId 
     * @param {object} transaction with "value" & "country" keys.
     */
    updateCurrentInvestment(platformKey, loanId, transaction) {
        if (P2PS2.platforms[platformKey].currentInvestments[loanId] !== undefined) {
            P2PS2.platforms[platformKey].currentInvestments[loanId].value += transaction[P2PS2.columns.value];
            // NOTE: in case order of transactions is messed up, country would never get set (investment after principal)
            P2PS2.platforms[platformKey].currentInvestments[loanId].country = transaction[P2PS2.columns.country];
        }
        else {
            P2PS2.platforms[platformKey].currentInvestments[loanId] = {
                value: transaction[P2PS2.columns.value],
                country: transaction[P2PS2.columns.country],
            };
        }

        P2PS2fn.checkRemoveCurrentInvestment(platformKey, loanId);
    },

    checkRemoveCurrentInvestment(platformKey, loanId) {
        const val = P2PS2.platforms[platformKey].currentInvestments[loanId].value;

        // extremely close to zero (assumes loan repaid in full)
        // XXX: mintos has bad rounding?
        if (((val < VERY_SMALL_NUMBER) && (val > -VERY_SMALL_NUMBER)) || (platformKey === "MINTOS" && (val < CENT_NUMBER) && (val > -CENT_NUMBER))) {
            delete P2PS2.platforms[platformKey].currentInvestments[loanId];
        }
    },

    removeStaleCurrentInvestments(platformKey) {
        for (const loanId of Object.keys(P2PS2.platforms[platformKey].currentInvestments)) {
            P2PS2fn.checkRemoveCurrentInvestment(platformKey, loanId);
        }
    },

    /**
     * Read a "statement" Excel file (@see XLSX page for supported types) and return its data as a JSON object.
     * 
     * @param {File} excelFile 
     * @returns {Object} Excel file's first sheet as JSON object.
     */
    async loadStatementToJSON(excelFile) {
        const data = await excelFile.arrayBuffer();
        const workbook = XLSX.read(data, { type: "array", cellDates: true });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const sheetJSON = XLSX.utils.sheet_to_json(worksheet, { defval: "N/A", cellDates: true });

        return sheetJSON;
    },

    /**
     * Ensure loaded statement file is valid for given platform.
     * 
     * @param {JSON} statementJSON 
     * @param {string} _platformKey _${platform} key in P2PS2 that holds columns.
     */
    checkStatementJSON(statementJSON, _platformKey) {
        if (!statementJSON) {
            P2PS2fn.dom.showToast("danger", "Statement file invalid.", 5000);

            return false;
        }

        if (statementJSON.length < 2) {
            P2PS2fn.dom.showToast("danger", "Statement file does not have enough entries to process it.", 5000);

            return false;
        }

        const statementKeys = Object.keys(statementJSON[0]);

        // NOTE: check registered columns against given statement columns, not the other way around
        //       some statements have user-specific columns, just ignore those
        for (const colName of Object.values(P2PS2[_platformKey].columns)) {
            if (!statementKeys.includes(colName)) {
                P2PS2fn.dom.showToast("danger", "Statement file does not match the expected format for this platform. Did you miss a directive on how to prepare the statement for that platform?", 5000);

                return false;
            }
        }

        return true;
    },

    /**
     * Read an "investments" Excel file (@see XLSX page for supported types) and return its data as a JSON object.
     * 
     * @param {File} excelFile 
     * @returns {Object} Excel file's first sheet as JSON object.
     */
    async loadInvestmentsToJSON(excelFile) {
        const data = await excelFile.arrayBuffer();
        const workbook = XLSX.read(data, { type: "array", cellDates: true });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const sheetJSON = XLSX.utils.sheet_to_json(worksheet, { defval: "N/A", cellDates: true });

        return sheetJSON;
    },

    /**
     * Ensure loaded investments file is valid for given platform.
     * 
     * @param {JSON} investmentsJSON 
     * @param {string} _platformKey _${platform} (where platform is one of Object.keys(P2PS2.platforms)) key in P2PS2 that holds columns.
     */
    checkInvestmentsJSON(investmentsJSON, _platformKey) {
        if (!investmentsJSON) {
            P2PS2fn.dom.showToast("danger", "Investments file invalid.", 5000);

            return false;
        }

        const investmentsKeys = Object.keys(investmentsJSON[0]);

        // NOTE: check registered columns against given investments columns, not the other way around
        //       some investments have user-specific columns, just ignore those
        for (const colName of Object.values(P2PS2[_platformKey].investmentsColumns)) {
            if (!investmentsKeys.includes(colName)) {
                P2PS2fn.dom.showToast("danger", "Investments file does not match the expected format for this platform.", 5000);

                return false;
            }
        }

        return true;
    },

    /**
     * Triggers upon loading a of new statement.
     * 
     * @param {string} platformKey One of Object.keys(P2PS2.platforms)
     */
    onStatementLoad(platformKey) {
        console.time(`[${platformKey}] Statement loading`);

        P2PS2.chart.containerTag.classList.add("d-none");
        P2PS2.settings.blockingProgressTag.classList.remove("d-none");
    },

    /**
     * Triggers once a new statement has been loaded.
     * 
     * @param {string} platformKey One of Object.keys(P2PS2.platforms)
     */
    onStatementLoaded(platformKey) {
        P2PS2.platforms[platformKey].transactions.sort((a, b) => a[P2PS2.columns.date] - b[P2PS2.columns.date]);

        P2PS2fn.sanitizePlatformData(platformKey);
    
        P2PS2.settings.blockingProgressTag.classList.add("d-none");
    
        console.timeEnd(`[${platformKey}] Statement loading`);
        document.dispatchEvent(new CustomEvent(
            "platform-loaded",
            { detail: { platform: platformKey, txCount: P2PS2.platforms[platformKey].transactions.length } }
        ));
    },

    /**
     * Create a new period object from the given values.
     * 
     * @param {number} startValue 
     * @param {Date} startDate 
     * @returns {Object} Period object
     */
    makeNewPeriod(startValue, startDate) {
        return {
            startValue,
            endValue: startValue,
            netExternalFlow: 0.0,
            startDate,
            endDate: undefined,
        };
    },

    /**
     * Calculate the periods delimited by external flow for TWRR (between deposit/withdrawal).
     * 
     * @param {Object[]} transactions At least 2 transactions have to be present. Must be from oldest to newest.
     * @param {number?} startValue If given, use this instead of first transaction's value as start value for first period calculation.
     * @returns {Object[]} Array of periods or empty array if not enough transactions to create periods.
     */
    calcPeriods(transactions, startValue = undefined) {
        if (!transactions) {
            console.error("[calcPeriods] No transaction given.");

            return [];
        }

        const transactionsCount = transactions.length;

        // need at least 2 transaction for this to work
        if (transactionsCount < 2) {
            // console.error("[calcPeriods] Not enough transactions given.");

            return [];
        }

        const periods = [];
        const hasStartValue = (startValue !== undefined);
        let period = P2PS2fn.makeNewPeriod(
            hasStartValue ? startValue : transactions[0][P2PS2.columns.value],
            transactions[0][P2PS2.columns.date]
        );

        const lastI = (transactionsCount - 1);

        // detect deposit or withdrawal and split after that point
        for (let i = 1; i < transactionsCount; i++) {
            const transaction = transactions[i];

            switch (transaction[P2PS2.columns.type]) {
                case P2PS2.types.deposit:
                case P2PS2.types.withdrawal:
                    period.endValue += transaction[P2PS2.columns.value];
                    period.endDate = transaction[P2PS2.columns.date];
                    period.netExternalFlow = transaction[P2PS2.columns.value];

                    periods.push(period);

                    // don't reset period if at end so we can detect it at end of loop
                    if (i !== lastI) {
                        period = P2PS2fn.makeNewPeriod(period.endValue, transaction[P2PS2.columns.date]);
                    }
                    break;
                case P2PS2.types.investment:
                case P2PS2.types.principal:
                case P2PS2.types.invalid:
                    // ignored
                    break;
                case P2PS2.types.bonus:
                    if (!P2PS2.settings.twrrIgnorePeriodicBonuses ||
                            (transaction[P2PS2.columns.subType] === P2PS2.subTypes.loyalty)) {
                        period.endValue += transaction[P2PS2.columns.value];
                    }
                    break;
                case P2PS2.types.interest:
                case P2PS2.types.fee:
                case P2PS2.types.assimilation:
                    period.endValue += transaction[P2PS2.columns.value];
                    break;
            }
        }

        // not finishing by an external flow, use last transaction
        if (period.endDate === undefined) {
            // already counted in loop
            // period.endValue += transactions[lastI][P2PS2.columns.value];
            period.endDate = transactions[lastI][P2PS2.columns.date];
            period.netExternalFlow = 0.0;

            periods.push(period);
        }

        return periods;
    },

    /**
     * Wraps calcPeriods within monthly periods to allow calculating TWRR for each month.
     * 
     * @param {Object[]} transactions At least 2 transactions have to be present. Must be from oldest to newest.
     * @returns {Object[]} Periods for each month
     */
    calcMonthPeriods(transactions) {
        if (!transactions) {
            console.error("[calcMonthPeriods] No transaction given.");

            return [];
        }

        const transactionsCount = transactions.length;

        // need at least 2 transaction for this to work
        if (transactionsCount < 2) {
            return [];
        }

        let makeNewMonthPeriod = (range) => ({ ...range, periods: [] });

        let currentRange = P2PS2fn.math.getMonthRange(transactions[0][P2PS2.columns.date]);
        const monthPeriods = [];
        let currentMonthPeriod = makeNewMonthPeriod(currentRange);
        let lastStartI = 0;
        // undefined at first to trigger auto-fill logic in calcPeriods
        let nextStartValue;

        // detect months and calcPeriods for each
        for (let i = 1; i < transactionsCount; i++) {
            const transaction = transactions[i];
            const txDate = transaction[P2PS2.columns.date];

            // this transaction is next month
            if (txDate > currentRange.end) {
                // calc periods before moving on to next month
                // (i - 1) === last tx before month changed, but slice's end is exclusive
                currentMonthPeriod.periods = P2PS2fn.calcPeriods(transactions.slice(lastStartI, i), nextStartValue);
                const [lastPeriod] = currentMonthPeriod.periods.slice(-1);
                nextStartValue = lastPeriod.endValue;

                monthPeriods.push(currentMonthPeriod);

                currentRange = P2PS2fn.math.getMonthRange(txDate);
                currentMonthPeriod = makeNewMonthPeriod(currentRange);
                lastStartI = i;
            }
        }

        // final period
        currentMonthPeriod.periods = P2PS2fn.calcPeriods(transactions.slice(lastStartI), nextStartValue);

        monthPeriods.push(currentMonthPeriod);

        return monthPeriods;
    },

    /**
     * Calculate returns (global and monthly) for a given set of transactions.
     * 
     * @param {Object[]} transactions Requires at least 2.
     * @returns {Object} { twrrVAFRate, annTWRRVAFRate, monthly: [{ year, month, twrrVAFRate, annTWRRVAFRate }] }
     */
    calcReturns(transactions) {
        const periods = P2PS2fn.calcPeriods(transactions);

        if (periods.length > 0) {
            const twrrVAFRate = P2PS2fn.math.twrrValuedAfterFlow(periods);
            const [lastPeriod] = periods.slice(-1);
            const annTWRRVAFRate = P2PS2fn.math.annualizedTWRR(twrrVAFRate, periods[0].startDate, lastPeriod.endDate);

            const monthly = [];
            const monthPeriods = P2PS2fn.calcMonthPeriods(transactions);

            for (const monthPeriod of monthPeriods) {
                const twrrVAFRate = P2PS2fn.math.twrrValuedAfterFlow(monthPeriod.periods);
                const annTWRRVAFRate = P2PS2fn.math.annualizedTWRR(twrrVAFRate, monthPeriod.start, monthPeriod.end);

                monthly.push({ year: monthPeriod.year, month: monthPeriod.month, twrrVAFRate, annTWRRVAFRate });
            }

            return { twrrVAFRate, annTWRRVAFRate, monthly };
        }

        return undefined;
    },

    ESTATEGURU: {
        /**
         * Retrieve country ISO code from row.
         * 
         * @param {object} row Raw statement tx row.
         * @returns {string} One of COUNTRIES_ISO_CODES
         */
        getLoanCountry(row) {
            if (row[P2PS2._ESTATEGURU.columns.loanCode]) {
                for (const country of P2PS2._ESTATEGURU.countries) {
                    if (row[P2PS2._ESTATEGURU.columns.loanCode].startsWith(country)) {
                        return country;
                    }
                }
            }
    
            return undefined;
        },
    },
    IUVO: {

    },
    KVIKU: {
        /**
         * Retrieve country ISO code from row.
         * 
         * @param {object} row Raw statement tx row.
         * @returns {string} One of COUNTRIES_ISO_CODES
         */
        getLoanCountry(row) {
            if (row[P2PS2._KVIKU.columns.operation]) {
                for (const country of P2PS2._KVIKU.countries) {
                    // NOTE: add the extra dash to avoid mismatch with operation text
                    //       that could match because of last word ending in same characters
                    // XXX: always ensure this still works if Kviku adds new Operation "types"
                    if (row[P2PS2._KVIKU.columns.operation].endsWith(`-${country}`)) {
                        return country.toUpperCase();
                    }
                }
            }

            return undefined;
        },

        /**
         * Get the loan ID from row.
         * 
         * @param {string} row Raw statement tx row.
         * @returns {string}
         */
        getLoanId(row) {
            return row[P2PS2._KVIKU.columns.operation].split(" ").slice(-1);
        },
    },
    LENDERMARKET: {
        /**
         * Retrieve country ISO code from row.
         * 
         * @param {object} row Raw statement tx row.
         * @returns {string} One of COUNTRIES_ISO_CODES
         */
        getLoanCountry(row) {
            if (row[P2PS2._LENDERMARKET.columns.loanId]) {
                for (const country of P2PS2._LENDERMARKET.countries) {
                    if (row[P2PS2._LENDERMARKET.columns.loanId].startsWith(country)) {
                        return country;
                    }
                }
            }

            return undefined;
        },
    },
    MINTOS: {
        /**
         * Get the loan ID from row.
         * 
         * @param {string} row Raw statement tx row.
         * @returns {string}
         */
        getLoanId(row) {
            // this will fail is index out of bounds, but that's okay, since it should never be,
            // otherwise lots of detection may need updating because of change on mintos' end.
            return row[P2PS2._MINTOS.columns.details].split(" ", 2)[1];
        },
    },
    MONCERA: {

    },
    PEERBERRY: {

    },
    ROBOCASH: {

    },
    TWINO: {
        /**
         * Retrieve country ISO code from row.
         * 
         * @param {object} row Raw statement tx row.
         * @returns {string} One of COUNTRIES_ISO_CODES
         */
        getLoanCountry(row) {
            if (row[P2PS2._TWINO.columns.loanNumber]) {
                for (const key of Object.keys(P2PS2._TWINO.countries)) {
                    if (row[P2PS2._TWINO.columns.loanNumber].startsWith(key)) {
                        return P2PS2._TWINO.countries[key];
                    }
                }
            }
    
            return undefined;
        },
    },
    BLOCKFI: {

    },
    CRYPTOCOM: {

    },
    NEXO: {

    },
    YOUHODLER: {

    },
};

// P2PS2 inits
// cache platform keys for easy lookup
P2PS2._platformKeys = Object.keys(P2PS2.platforms);

document.querySelector("#fx-usd-eur").valueAsNumber = P2PS2.settings.fxUSDEUR;
// document.querySelector("#fx-gbp-eur").valueAsNumber = P2PS2.settings.fxGBPEUR;
document.querySelector("#settings-version").innerText = P2PS2.settings.version;
document.querySelector("#settings-breaking-version").innerText = P2PS2.settings.breakingVersion;

for (const key of P2PS2._platformKeys) {
    // init tooltips before bootstrap converts them
    const txCounterTag = document.querySelector(`#${key.toLowerCase()}-tx-counter`);

    if (txCounterTag) {
        const notice = P2PS2[`_${key}`].notice;
        const warning = P2PS2[`_${key}`].warning;

        if (notice) {
            const infoTag = P2PS2fn.dom.createBSTooltipTag(notice, "&#8505;");

            txCounterTag.before(infoTag);

            const platformsHelpModalBody = document.querySelector("#platforms-help .modal-body");

            if (platformsHelpModalBody) {
                const hTag = document.createElement('h5');
                hTag.innerText = key;
                const pTag = document.createElement('p');
                pTag.innerText = notice;

                platformsHelpModalBody.appendChild(hTag);
                platformsHelpModalBody.appendChild(pTag);
            }
        }

        if (warning) {
            const warningTag = P2PS2fn.dom.createBSTooltipTag(warning, "&#9888;");

            txCounterTag.before(warningTag);
        }
    }
    else {
        console.error(`Could not find tx-counter tag for:`, key);
    }
}

// bootstrap inits
{
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));

    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}

// chartjs inits
Chart.defaults.responsive = true;
Chart.defaults.aspectRatio = 2;
Chart.defaults.interaction.mode = "nearest";
Chart.defaults.interaction.intersect = true;
Chart.defaults.interaction.axis = "x";


// CustomEvent listeners
document.addEventListener("platform-loaded", async (event) => {
    const txCounter = document.querySelector(`#${event.detail.platform.toLowerCase()}-tx-counter`);

    if (txCounter) {
        txCounter.innerHTML = event.detail.txCount;

        if (event.detail.txCount > 0) {
            txCounter.classList.remove("d-none");

            P2PS2fn.dom.showToast("success", `${event.detail.platform}: New transactions loaded.`);
        }
        else {
            txCounter.classList.add("d-none");
        }
    }
});


{
    const platformInfoTags = document.querySelectorAll(`a.show-platform-info`);
    let platformInfoClick = async (event) => {
        const platformKey = event.currentTarget.getAttribute("data-p2ps2-platform");

        P2PS2fn.dom.updateOffcanvasInfoWithPlatform(platformKey);
    };

    for (const platformInfoTag of platformInfoTags) {
        platformInfoTag.addEventListener("click", platformInfoClick);
    }
}

document.querySelector("#enable-multiload").addEventListener("change", async (event) => {
    P2PS2.settings.multiload = event.target.checked;
});

document.querySelector("#fx-usd-eur").addEventListener("change", async (event) => {
    P2PS2.settings.fxUSDEUR = event.target.valueAsNumber;
});

// document.querySelector("#fx-gbp-eur").addEventListener("change", async (event) => {
//     P2PS2.settings.fxGBPEUR = event.target.valueAsNumber;
// });

document.querySelector("#twrr-ignore-periodic-bonuses").addEventListener("change", async (event) => {
    P2PS2.settings.twrrIgnorePeriodicBonuses = event.target.checked;
});

document.querySelector("#load-save").addEventListener("change", async (event) => {
    P2PS2.settings.blockingProgressTag.classList.remove("d-none");

    const fileReader = new FileReader();

    fileReader.onload = (e) => {
        const content = e.target.result;
        const jsonData = JSON.parse(content, function(key, value) {
            // revive dates to actual Date objects
            if ((key === P2PS2.columns.date) || (key === "startDate") || (key === "endDate")) {
                return new Date(value);
            }

            return value;
        });

        if (jsonData) {
            if (jsonData.version >= P2PS2.settings.breakingVersion) {
                const loadedPlatforms = [];

                P2PS2fn.sanitizeOldSave(jsonData);

                for (const key of Object.keys(jsonData.platforms)) {
                    const platform = jsonData.platforms[key];

                    if (platform.transactions.length > 0) {
                        P2PS2.platforms[key] = platform;

                        // for good measure
                        P2PS2fn.sanitizePlatformData(key);

                        document.dispatchEvent(new CustomEvent(
                            "platform-loaded",
                            { detail: { platform: key, txCount: P2PS2.platforms[key].transactions.length } }
                        ));

                        loadedPlatforms.push(key);
                    }
                }

                P2PS2fn.dom.addLoadedSaveInfo(jsonData.version, loadedPlatforms);
            }
            else {
                P2PS2fn.dom.showToast(
                    "danger",
                    `The version of this save file (${jsonData.version}) is no longer compatible with the current version of this tool. Please create a new save by loading statements again, or load a save that is version ${P2PS2.settings.breakingVersion} or greater.`,
                    10000
                );

                P2PS2fn.dom.addLoadedSaveInfo(jsonData.version);

                return;
            }
        }
        else {
            P2PS2fn.dom.showToast("danger", "This file is not valid.", 3000);
        }
    };

    fileReader.readAsText(event.target.files[0]);

    P2PS2.settings.blockingProgressTag.classList.add("d-none");
});

document.querySelector("#save-button").addEventListener("click", async () => {
    const presentPlatforms = [];

    for (const key of P2PS2._platformKeys) {
        if (P2PS2.platforms[key].transactions.length > 0) {
            presentPlatforms.push(key);
        }
    }

    if (presentPlatforms.length > 0) {
        const f = new Blob(
            [JSON.stringify({ version: P2PS2.settings.version, platforms: P2PS2.platforms })],
            { type: "text/json" }
        );
        const a = document.createElement("a");
        a.href = URL.createObjectURL(f);
        const saveDate = (new Date()).toISOString().replaceAll(":", "").split(".")[0];
        const saveVersion = P2PS2.settings.version.toString().replace(".", "_");
        a.download = `P2PS2-save-v${saveVersion}-${saveDate}.json`;

        a.click();

        P2PS2fn.dom.showToast("success", `Generated save with data for ${presentPlatforms.join(", ")}.`);
    }
    else {
        P2PS2fn.dom.showToast("danger", "No platform data found. Load your statements before creating a save.");

        return;
    }
});

document.querySelector("#process-button").addEventListener("click", async () => {
    P2PS2.GLOBAL = P2PS2fn.resetGlobalData();
    P2PS2.chart.data = P2PS2fn.chart.resetRawData();

    const allTransactions = P2PS2._platformKeys.reduce((acc, key) => {
        if (P2PS2.platforms[key].transactions.length > 0) {
            // XXX: fx problem (fx rate at time of transaction, likely isn't same as now)
            //      only as accurate as a static fx rate can be...
            const platformFXMod = (P2PS2.platforms[key].currency === CURRENCY_USD) ? P2PS2.settings.fxUSDEUR : 1.0;

            for (const tx of P2PS2.platforms[key].transactions) {
                acc.push({ ...tx, value: (tx[P2PS2.columns.value] * platformFXMod) });
            }
        }

        return acc;
    }, []);

    if (allTransactions.length >= 2) {
        allTransactions.sort((a, b) => a[P2PS2.columns.date] - b[P2PS2.columns.date]);

        P2PS2.GLOBAL.returns = P2PS2fn.calcReturns(allTransactions);
        P2PS2.GLOBAL.startDate = allTransactions[0][P2PS2.columns.date];
        const [lastTx] = allTransactions.slice(-1);
        P2PS2.GLOBAL.endDate = lastTx[P2PS2.columns.date];

        // create all keys for all years
        for (let i = P2PS2.GLOBAL.startDate.getFullYear(); i <= P2PS2.GLOBAL.endDate.getFullYear(); i++) {
            P2PS2.chart.data.monthlyAnnTWRRVAFRatePerPlatform[i] = {};
            // NOTE: undefined = if not active platform, don't show data, better than zero
            P2PS2.chart.data.globalMonthlyAnnTWRRVAFRate[i] = MONTHS_NUM.map(() => undefined);
        }

        for (const month of P2PS2.GLOBAL.returns.monthly) {
            // format: { 2020: { IUVO: [m0, m1, m2 ... m11] } }
            P2PS2.chart.data.globalMonthlyAnnTWRRVAFRate[month.year][month.month] = P2PS2fn.math.roundRate(month.annTWRRVAFRate);
        }

        for (const key of P2PS2._platformKeys) {
            const platform = P2PS2.platforms[key];
            const platformFXMod = (platform.currency === CURRENCY_USD) ? P2PS2.settings.fxUSDEUR : 1.0;

            platform.returns = P2PS2fn.calcReturns(platform.transactions);

            // XXX: fx problem with accumulated value (fx rate at time of transaction, likely isn't same as now)
            // convert to EUR if necessary
            let balance = platform.balance * platformFXMod;
            let balanceAvail = platform.balanceAvail * platformFXMod;
            let balanceDepWid = platform.balanceDepWid * platformFXMod;
            let fees = platform.fees * platformFXMod;
            let interests = platform.interests * platformFXMod;
            let bonuses = platform.bonuses * platformFXMod;

            P2PS2.GLOBAL.balance += balance;
            P2PS2.GLOBAL.balanceAvail += balanceAvail;
            P2PS2.GLOBAL.balanceDepWid += balanceDepWid;
            P2PS2.GLOBAL.fees += fees;
            P2PS2.GLOBAL.interests += interests;
            P2PS2.GLOBAL.bonuses += bonuses;

            if ((balance > 0) || (fees > 0) || (interests > 0) || (bonuses > 0)) {
                P2PS2.chart.data.ciPerCountryPerPlatform[key] = {};

                for (const loanId of Object.keys(platform.currentInvestments)) {
                    // WARNING: curInv.value is negative
                    const curInv = platform.currentInvestments[loanId];

                    if (P2PS2.chart.data.ciPerCountryPerPlatform[key] === undefined) {
                        P2PS2.chart.data.ciPerCountryPerPlatform[key] = {};
                    }

                    if (P2PS2.chart.data.ciPerCountryPerPlatform[key][curInv.country] !== undefined) {
                        P2PS2.chart.data.ciPerCountryPerPlatform[key][curInv.country] += (curInv.value * -1.0) * platformFXMod;
                    }
                    else {
                        P2PS2.chart.data.ciPerCountryPerPlatform[key][curInv.country] = (curInv.value * -1.0) * platformFXMod;
                    }
                }

                P2PS2.chart.data.activePlatformsColors.push(P2PS2.settings.colors.platforms[key]);
                P2PS2.chart.data.balancesPerPlatform[key] = balance;
                P2PS2.chart.data.sharesPerPlatform[key] = (balance / P2PS2.GLOBAL.balance);
                P2PS2.chart.data.feesPerPlatform[key] = fees;
                P2PS2.chart.data.interestsPerPlatform[key] = interests;
                P2PS2.chart.data.bonusesPerPlatform[key] = bonuses;
                P2PS2.chart.data.annTWRRVAFRatePerPlatform[key] = P2PS2fn.math.roundRate(platform.returns.annTWRRVAFRate);

                // create all keys for all months for platform
                for (const year of Object.keys(P2PS2.chart.data.monthlyAnnTWRRVAFRatePerPlatform)) {
                    // NOTE: undefined = if not active platform, don't show data, better than zero
                    P2PS2.chart.data.monthlyAnnTWRRVAFRatePerPlatform[year][key] = MONTHS_NUM.map(() => undefined);
                }

                for (const month of platform.returns.monthly) {
                    // format: { 2020: { IUVO: [m0, m1, m2 ... m11] } }
                    P2PS2.chart.data.monthlyAnnTWRRVAFRatePerPlatform[month.year][key][month.month] = P2PS2fn.math.roundRate(month.annTWRRVAFRate);
                }
            }
        }

        P2PS2.chart.containerTag.classList.remove("d-none");

        const firstChartButton = document.querySelector("#show-shares");

        // radio button, click() won't trigger change event if already checked
        if (firstChartButton.checked) {
            firstChartButton.dispatchEvent(new Event("change"));
        }
        else {
            firstChartButton.click();
        }
    }
    else {
        P2PS2.chart.containerTag.classList.add("d-none");
        P2PS2fn.dom.showToast("danger", "[GLOBAL] Not enough transactions to process.", 5000);
    }
});


P2PS2.chart.showMonthlyReturnsYearSelectTag.addEventListener("change", async (event) => {
    const year = event.target.value;
    const newDatasets = Object.keys(P2PS2.chart.data.monthlyAnnTWRRVAFRatePerPlatform[year]).map((key) => ({
        label: key,
        data: P2PS2.chart.data.monthlyAnnTWRRVAFRatePerPlatform[year][key],
        backgroundColor: P2PS2.settings.colors.platforms[key],
        borderColor: P2PS2.settings.colors.platforms[key],
    }));

    P2PS2fn.chart.setDatasets(newDatasets);
});

P2PS2.chart.showGlobalMonthlyReturnsYearSelectTag.addEventListener("change", async (event) => {
    const year = event.target.value;
    const newDatasets = [{
        label: "Global",
        data: P2PS2.chart.data.globalMonthlyAnnTWRRVAFRate[year],
        backgroundColor: P2PS2.settings.colors.bonuses,
        borderColor: P2PS2.settings.colors.bonuses,
    }];

    P2PS2fn.chart.setDatasets(newDatasets);
});

document.querySelector("#show-shares").addEventListener("change", async () => {
    if (P2PS2.chart.instance) {
        P2PS2.chart.instance.destroy();
    }

    P2PS2.chart.showMonthlyReturnsYearSelectTag.classList.add("d-none");
    P2PS2.chart.showGlobalMonthlyReturnsYearSelectTag.classList.add("d-none");

    // doughnut chart with shares for all platforms
    // NOTE: balance is a "current" value, no FX problem
    P2PS2.chart.instance = new Chart(P2PS2.chart.tag, {
        type: "doughnut",
        data: {
            labels: Object.keys(P2PS2.chart.data.balancesPerPlatform),
            datasets: [
                {
                    data: Object.values(P2PS2.chart.data.balancesPerPlatform),
                    backgroundColor: P2PS2.chart.data.activePlatformsColors,
                    borderWidth: 1,
                    borderColor: "rgba(255, 255, 255, 0.8)",
                },
            ]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: "Shares per Platform"
                },
                subtitle: {
                    display: true,
                    text: "Account Balance",
                },
                legend: {
                    position: "chartArea",
                    align: "center",
                },
                tooltip: {
                    callbacks: {
                        label: (tooltipItem) => `${tooltipItem.label}: ${P2PS2fn.math.roundRate(tooltipItem.raw / P2PS2.GLOBAL.balance)}%`,
                        afterLabel: (tooltipItem) => {
                            let afterLabel = `${P2PS2fn.math.roundCurrency(tooltipItem.raw)} ${CURRENCY_EUR}`;

                            if (P2PS2.platforms[tooltipItem.label].currency === CURRENCY_USD) {
                                const valueUSD = P2PS2fn.math.roundCurrency(tooltipItem.raw / P2PS2.settings.fxUSDEUR);
                                afterLabel += ` (actual: ${valueUSD} ${CURRENCY_USD})`;
                            }

                            return afterLabel;
                        },
                    }
                },
            },
            aspectRatio: 2,
        },
    });
});

document.querySelector("#show-results").addEventListener("change", async () => {
    if (P2PS2.chart.instance) {
        P2PS2.chart.instance.destroy();
    }

    P2PS2.chart.showMonthlyReturnsYearSelectTag.classList.add("d-none");
    P2PS2.chart.showGlobalMonthlyReturnsYearSelectTag.classList.add("d-none");

    // stacked bar chart with fees+interests+bonuses since start for all platforms
    // XXX: fees+interests+bonuses are accumulated values, FX is a problem
    P2PS2.chart.instance = new Chart(P2PS2.chart.tag, {
        type: "bar",
        data: {
            datasets: [
                {
                    label: "Fees",
                    data: P2PS2.chart.data.feesPerPlatform,
                    backgroundColor: P2PS2.settings.colors.fees,
                },
                {
                    label: "Interests",
                    data: P2PS2.chart.data.interestsPerPlatform,
                    backgroundColor: P2PS2.settings.colors.interests,
                },
                {
                    label: "Bonuses",
                    data: P2PS2.chart.data.bonusesPerPlatform,
                    backgroundColor: P2PS2.settings.colors.bonuses,
                }
            ]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: "Results per Platform"
                },
                legend: {
                    labels: {
                        sort: P2PS2fn.chart.sortLegendLabels,
                    },
                },
                tooltip: {
                    callbacks: {
                        label: (tooltipItem) => {
                            const valueEUR = P2PS2fn.math.roundCurrency(tooltipItem.parsed.y);
                            let label = `${tooltipItem.dataset.label}: ${valueEUR} ${CURRENCY_EUR}`;

                            return label;
                        },
                        afterLabel: (tooltipItem) => {
                            if (P2PS2.platforms[tooltipItem.label].currency === CURRENCY_USD) {
                                const valueUSD = P2PS2fn.math.roundCurrency(tooltipItem.parsed.y / P2PS2.settings.fxUSDEUR);

                                return `(actual: ${valueUSD} ${CURRENCY_USD})`;
                            }

                            return undefined;
                        },
                    }
                },
            },
            scales: {
                x: {
                    stacked: "single",
                },
                y: {
                    stacked: "single",
                    beginAtZero: true,
                },
            },
        },
    });
});

document.querySelector("#show-returns").addEventListener("change", async () => {
    if (P2PS2.chart.instance) {
        P2PS2.chart.instance.destroy();
    }

    P2PS2.chart.showMonthlyReturnsYearSelectTag.classList.add("d-none");
    P2PS2.chart.showGlobalMonthlyReturnsYearSelectTag.classList.add("d-none");

    // bar chart with annual returns since start for all platforms
    P2PS2.chart.instance = new Chart(P2PS2.chart.tag, {
        type: "bar",
        data: {
            datasets: [
                {
                    data: P2PS2.chart.data.annTWRRVAFRatePerPlatform,
                    backgroundColor: P2PS2.chart.data.activePlatformsColors,
                },
            ]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: "Annualized TWRR per Platform"
                },
                legend: {
                    display: false,
                },
                tooltip: {
                    callbacks: {
                        label: (tooltipItem) => {
                            return `${tooltipItem.formattedValue}%`;
                        },
                    }
                },
            },
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
});

document.querySelector("#show-monthly-returns").addEventListener("change", async () => {
    if (P2PS2.chart.instance) {
        P2PS2.chart.instance.destroy();
    }

    P2PS2.chart.showGlobalMonthlyReturnsYearSelectTag.classList.add("d-none");

    const minYear = P2PS2.GLOBAL.startDate.getFullYear();
    const maxYear = P2PS2.GLOBAL.endDate.getFullYear();
    const selectedYear = minYear;

    // in case re-processing, make sure we start clean
    while (P2PS2.chart.showMonthlyReturnsYearSelectTag.firstChild) {
        P2PS2.chart.showMonthlyReturnsYearSelectTag.firstChild.remove();
    }

    for (let i = minYear; i <= maxYear; i++) {
        const opt = document.createElement("option");
        opt.value = i;
        opt.innerHTML = i;
        opt.checked = (i === selectedYear);

        P2PS2.chart.showMonthlyReturnsYearSelectTag.appendChild(opt);
    }

    P2PS2.chart.showMonthlyReturnsYearSelectTag.classList.remove("d-none");

    // line chart with monthly returns since start for all platforms, with select to switch year
    P2PS2.chart.instance = new Chart(P2PS2.chart.tag, {
        type: "line",
        data: {
            labels: MONTHS_ABBR,
            datasets: Object.keys(P2PS2.chart.data.monthlyAnnTWRRVAFRatePerPlatform[selectedYear]).map((key) => ({
                label: key,
                data: P2PS2.chart.data.monthlyAnnTWRRVAFRatePerPlatform[selectedYear][key],
                backgroundColor: P2PS2.settings.colors.platforms[key],
                borderColor: P2PS2.settings.colors.platforms[key],
            })),
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: "Monthly Annualized TWRR per Platform"
                },
                tooltip: {
                    callbacks: {
                        label: (tooltipItem) => {
                            return `${tooltipItem.dataset.label}: ${tooltipItem.formattedValue}%`;
                        },
                    }
                },
            },
            interaction: {
                mode: "index",
                intersect: false,
            },
            stacked: false,
        },
    });
});

document.querySelector("#show-global-monthly-returns").addEventListener("change", async () => {
    if (P2PS2.chart.instance) {
        P2PS2.chart.instance.destroy();
    }

    P2PS2.chart.showMonthlyReturnsYearSelectTag.classList.add("d-none");

    const minYear = P2PS2.GLOBAL.startDate.getFullYear();
    const maxYear = P2PS2.GLOBAL.endDate.getFullYear();
    const selectedYear = minYear;

    // in case re-processing, make sure we start clean
    while (P2PS2.chart.showGlobalMonthlyReturnsYearSelectTag.firstChild) {
        P2PS2.chart.showGlobalMonthlyReturnsYearSelectTag.firstChild.remove();
    }

    for (let i = minYear; i <= maxYear; i++) {
        const opt = document.createElement("option");
        opt.value = i;
        opt.innerHTML = i;
        opt.checked = (i === selectedYear);

        P2PS2.chart.showGlobalMonthlyReturnsYearSelectTag.appendChild(opt);
    }

    P2PS2.chart.showGlobalMonthlyReturnsYearSelectTag.classList.remove("d-none");

    // line chart with monthly returns since start for all platforms, with select to switch year
    P2PS2.chart.instance = new Chart(P2PS2.chart.tag, {
        type: "line",
        data: {
            labels: MONTHS_ABBR,
            datasets: [{
                label: "Global",
                data: P2PS2.chart.data.globalMonthlyAnnTWRRVAFRate[selectedYear],
                backgroundColor: P2PS2.settings.colors.bonuses,
                borderColor: P2PS2.settings.colors.bonuses,
            }],
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: "Global Monthly Annualized TWRR",
                },
                subtitle: {
                    display: true,
                    text: "WARNING: Precision can be greatly affected by the static FX rate being used for platforms in USD",
                },
                tooltip: {
                    callbacks: {
                        label: (tooltipItem) => {
                            return `${tooltipItem.dataset.label}: ${tooltipItem.formattedValue}%`;
                        },
                    }
                },
            },
            interaction: {
                mode: "index",
                intersect: false,
            },
            stacked: false,
        },
    });
});

document.querySelector("#show-country-exposure").addEventListener("change", async () => {
    if (P2PS2.chart.instance) {
        P2PS2.chart.instance.destroy();
    }

    P2PS2.chart.showMonthlyReturnsYearSelectTag.classList.add("d-none");
    P2PS2.chart.showGlobalMonthlyReturnsYearSelectTag.classList.add("d-none");

    const platformKeys = Object.keys(P2PS2.chart.data.ciPerCountryPerPlatform);
    // legend
    const countries = new Set();

    for (const key of platformKeys) {
        for (const country of Object.keys(P2PS2.chart.data.ciPerCountryPerPlatform[key])) {
            // take out "[CRYPTO] X" and "[UNKNOWN] X"
            if (country.length === 2) {
                countries.add(country);
            }
        }
    }

    // { platform: [] } where array matches order of countries (undefined if no value)
    const values = {};

    for (const key of platformKeys) {
        values[key] = [];

        for (const country of countries) {
            values[key].push(P2PS2.chart.data.ciPerCountryPerPlatform[key][country]);
        }

        // take out platforms that don't have any value
        let keep = false;

        for (const val of values[key]) {
            if (val !== undefined) {
                keep = true;
            }
        }

        if (!keep) {
            delete values[key];
        }
    }

    // radar chart with select for platform to show current investments for each by country
    P2PS2.chart.instance = new Chart(P2PS2.chart.tag, {
        type: "radar",
        data: {
            labels: Array.from(countries),
            datasets: Object.keys(values).map((key) => ({
                label: key,
                data: values[key],
                backgroundColor: P2PS2.settings.colors.platforms[key],
                borderColor: P2PS2.settings.colors.platforms[key],
                fill: false,
            })),
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: "Country Exposure per Platform"
                },
                subtitle: {
                    display: true,
                    text: "Invested or Locked",
                },
                tooltip: {
                    callbacks: {
                        title: (tooltipItems) => {
                            return `${COUNTRIES_ISO_CODES[tooltipItems[0].label]} (${tooltipItems[0].label})`;
                        },
                        label: (tooltipItem) => {
                            return `${tooltipItem.dataset.label}: ${tooltipItem.formattedValue} ${CURRENCY_EUR}`;
                        },
                        afterLabel: (tooltipItem) => {
                            const totalCurrentInvestments = (P2PS2.GLOBAL.balance - P2PS2.GLOBAL.balanceAvail);
                            const percentage = P2PS2fn.math.roundRate(tooltipItem.raw / totalCurrentInvestments);

                            return `${percentage}%`;
                        },
                    }
                },
            },
            interaction: {
                mode: "index",
                axis: "r",
            },
            elements: {
                line: {
                    borderWidth: 0,
                },
                point: {
                    radius: 4,
                    hoverRadius: 5,
                    borderWidth: 2,
                    hitRadius: 2,
                },
            },
            aspectRatio: 2,
        },
    });
});

document.querySelector("#show-global-country-exposure").addEventListener("change", async () => {
    if (P2PS2.chart.instance) {
        P2PS2.chart.instance.destroy();
    }

    P2PS2.chart.showMonthlyReturnsYearSelectTag.classList.add("d-none");
    P2PS2.chart.showGlobalMonthlyReturnsYearSelectTag.classList.add("d-none");

    const dataset = {};

    for (const key of Object.keys(P2PS2.chart.data.ciPerCountryPerPlatform)) {
        for (const country of Object.keys(P2PS2.chart.data.ciPerCountryPerPlatform[key])) {
            if (dataset[country] !== undefined) {
                dataset[country] += P2PS2.chart.data.ciPerCountryPerPlatform[key][country];
            }
            else {
                dataset[country] = P2PS2.chart.data.ciPerCountryPerPlatform[key][country];
            }
        }
    }

    const keys = Object.keys(dataset);

    // doughnut chart with current country exposure for all platforms that support it, no support = {platformKey}
    P2PS2.chart.instance = new Chart(P2PS2.chart.tag, {
        type: "doughnut",
        data: {
            labels: keys.map((key) => {
                if (COUNTRIES_ISO_CODES[key]) {
                    return `${COUNTRIES_ISO_CODES[key]} (${key})`;
                }

                return key;
            }),
            datasets: [
                {
                    data: Object.values(dataset),
                    backgroundColor: P2PS2fn.chart.getRainbowRGBAColors(keys.length),
                    borderWidth: 1,
                    borderColor: "rgba(255, 255, 255, 0.8)",
                },
            ]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: "Global Country Exposure",
                },
                subtitle: {
                    display: true,
                    text: "Invested or Locked",
                },
                legend: {
                    position: "chartArea",
                    align: "center",
                    labels: {
                        sort: P2PS2fn.chart.sortLegendLabels,
                    },
                },
                tooltip: {
                    callbacks: {
                        label: (tooltipItem) => {
                            const totalCurrentInvestments = (P2PS2.GLOBAL.balance - P2PS2.GLOBAL.balanceAvail);
                            const percentage = P2PS2fn.math.roundRate(tooltipItem.raw / totalCurrentInvestments);

                            return `${tooltipItem.label}: ${percentage}%`;
                        },
                        afterLabel: (tooltipItem) => {
                            let afterLabel = `${P2PS2fn.math.roundCurrency(tooltipItem.raw)} ${CURRENCY_EUR}`;

                            if (tooltipItem.label.startsWith("[CRYPTO] ")) {
                                const platformKey = tooltipItem.label.replace("[CRYPTO] ", "");

                                if (P2PS2.platforms[platformKey].currency === CURRENCY_USD) {
                                    const valueUSD = P2PS2fn.math.roundCurrency(tooltipItem.raw / P2PS2.settings.fxUSDEUR);
                                    afterLabel += ` (actual: ${valueUSD} ${CURRENCY_USD})`;
                                }
                            }

                            return afterLabel;
                        },
                    }
                },
            },
            aspectRatio: 2,
        },
    });
});


document.querySelector("#estateguru-statement").addEventListener("change", async (event) => {
    P2PS2fn.onStatementLoad("ESTATEGURU");

    if (!P2PS2.settings.multiload) {
        P2PS2.platforms.ESTATEGURU = P2PS2fn.resetPlatformData();
    }

    const sheetJSON = await P2PS2fn.loadStatementToJSON(event.target.files[0]);

    if (!P2PS2fn.checkStatementJSON(sheetJSON, "_ESTATEGURU")) {
        P2PS2.settings.blockingProgressTag.classList.add("d-none");

        return;
    }

    // NOTE: avoid unnecessary checking of tx IDs if no previous loading took place
    const checkDupTxIDs = P2PS2.settings.multiload && (P2PS2.platforms.ESTATEGURU._txIDs.length > 0);

    // newest is first, we want the opposite
    // NOTE: this helps on date sorting conflicts (order of appearance takes second priority)
    sheetJSON.reverse();

    for (const row of sheetJSON) {
        const transaction = {};
        transaction[P2PS2.columns.value] = row[P2PS2._ESTATEGURU.columns.amount];

        // only supporting EUR for now
        if ((transaction[P2PS2.columns.value] !== 0.0) && (row[P2PS2._ESTATEGURU.columns.currency] === CURRENCY_EUR)) {
            transaction[P2PS2.columns.id] = row[P2PS2._ESTATEGURU.columns.id];

            if (!checkDupTxIDs || !P2PS2.platforms.ESTATEGURU._txIDs.includes(transaction[P2PS2.columns.id])) {
                // incoming format: "13/07/2020 21:29"
                transaction[P2PS2.columns.date] = new Date(
                    row[P2PS2._ESTATEGURU.columns.confirmDate].replace(/(\d{2})\/(\d{2})\/(\d{4})/,'$3-$2-$1')
                );
                transaction[P2PS2.columns.type] = P2PS2.types.invalid;
                transaction[P2PS2.columns.subType] = P2PS2.subTypes.na;
                transaction[P2PS2.columns.country] = P2PS2fn.ESTATEGURU.getLoanCountry(row);

                const rowType = row[P2PS2._ESTATEGURU.columns.cfType];

                switch (rowType) {
                    case P2PS2._ESTATEGURU.types.referral:
                        transaction[P2PS2.columns.type] = P2PS2.types.bonus;
                        transaction[P2PS2.columns.subType] = P2PS2.subTypes.referral;
                        P2PS2.platforms.ESTATEGURU.balance += transaction[P2PS2.columns.value];
                        P2PS2.platforms.ESTATEGURU.bonuses += transaction[P2PS2.columns.value];
                        break;
                    case P2PS2._ESTATEGURU.types.deposit:
                        transaction[P2PS2.columns.type] = P2PS2.types.deposit;
                        P2PS2.platforms.ESTATEGURU.balanceDepWid += transaction[P2PS2.columns.value];
                        P2PS2.platforms.ESTATEGURU.balance += transaction[P2PS2.columns.value];
                        break;
                    case P2PS2._ESTATEGURU.types.withdrawal:
                        transaction[P2PS2.columns.type] = P2PS2.types.withdrawal;
                        P2PS2.platforms.ESTATEGURU.balanceDepWid += transaction[P2PS2.columns.value];
                        P2PS2.platforms.ESTATEGURU.balance += transaction[P2PS2.columns.value];
                        break;
                    case P2PS2._ESTATEGURU.types.indemnity:
                        transaction[P2PS2.columns.type] = P2PS2.types.interest;
                        transaction[P2PS2.columns.subType] = P2PS2.subTypes.lateFee;
                        P2PS2.platforms.ESTATEGURU.balance += transaction[P2PS2.columns.value];
                        P2PS2.platforms.ESTATEGURU.interests += transaction[P2PS2.columns.value];
                        break;
                    case P2PS2._ESTATEGURU.types.interest:
                    case P2PS2._ESTATEGURU.types.secondaryMarketProfit:
                        transaction[P2PS2.columns.type] = P2PS2.types.interest;
                        P2PS2.platforms.ESTATEGURU.balance += transaction[P2PS2.columns.value];
                        P2PS2.platforms.ESTATEGURU.interests += transaction[P2PS2.columns.value];
                        break;
                    case P2PS2._ESTATEGURU.types.principal:
                        transaction[P2PS2.columns.type] = P2PS2.types.principal;

                        P2PS2fn.updateCurrentInvestment(
                            "ESTATEGURU",
                            row[P2PS2._ESTATEGURU.columns.loanCode],
                            transaction
                        );
                        break;
                    case P2PS2._ESTATEGURU.types.investment:
                        if (transaction[P2PS2.columns.value] < 0.0) {
                            transaction[P2PS2.columns.type] = P2PS2.types.investment;

                            P2PS2fn.updateCurrentInvestment(
                                "ESTATEGURU",
                                row[P2PS2._ESTATEGURU.columns.loanCode],
                                transaction
                            );
                        }
                        else {
                            // canceled > returned
                            transaction[P2PS2.columns.type] = P2PS2.types.principal;

                            P2PS2fn.updateCurrentInvestment(
                                "ESTATEGURU",
                                row[P2PS2._ESTATEGURU.columns.loanCode],
                                transaction
                            );
                        }
                        break;
                    case P2PS2._ESTATEGURU.types.secondaryMarket:
                        if (transaction[P2PS2.columns.value] < 0.0) {
                            transaction[P2PS2.columns.type] = P2PS2.types.investment;

                            P2PS2fn.updateCurrentInvestment(
                                "ESTATEGURU",
                                row[P2PS2._ESTATEGURU.columns.loanCode],
                                transaction
                            );
                        }
                        else {
                            // sold
                            transaction[P2PS2.columns.type] = P2PS2.types.principal;

                            P2PS2fn.updateCurrentInvestment(
                                "ESTATEGURU",
                                row[P2PS2._ESTATEGURU.columns.loanCode],
                                transaction
                            );
                        }
                        break;
                    case P2PS2._ESTATEGURU.types.fee:
                        transaction[P2PS2.columns.type] = P2PS2.types.fee;
                        P2PS2.platforms.ESTATEGURU.balance += transaction[P2PS2.columns.value];
                        P2PS2.platforms.ESTATEGURU.fees += transaction[P2PS2.columns.value];
                        break;
                }

                if (transaction[P2PS2.columns.type] !== P2PS2.types.invalid) {
                    P2PS2.platforms.ESTATEGURU.balanceAvail += transaction[P2PS2.columns.value];

                    P2PS2.platforms.ESTATEGURU.transactions.push(transaction);
                    P2PS2.platforms.ESTATEGURU._txIDs.push(transaction[P2PS2.columns.id]);
                }
                // else {
                //     console.warn("Ignored row", i, row);
                // }
            }
        }
    }

    P2PS2fn.onStatementLoaded("ESTATEGURU");
});

document.querySelector("#iuvo-statement").addEventListener("change", async (event) => {
    P2PS2fn.onStatementLoad("IUVO");

    if (!P2PS2.settings.multiload) {
        P2PS2.platforms.IUVO = P2PS2fn.resetPlatformData();
    }

    const sheetJSON = await P2PS2fn.loadStatementToJSON(event.target.files[0]);

    if (!P2PS2fn.checkStatementJSON(sheetJSON, "_IUVO")) {
        P2PS2.settings.blockingProgressTag.classList.add("d-none");

        return;
    }

    // NOTE: avoid unnecessary checking of tx IDs if no previous loading took place
    const checkDupTxIDs = P2PS2.settings.multiload && (P2PS2.platforms.IUVO._txIDs.length > 0);

    for (const row of sheetJSON) {
        const transaction = {};
        transaction[P2PS2.columns.value] = row[P2PS2._IUVO.columns.turnover];

        if (transaction[P2PS2.columns.value] !== 0.0) {
            transaction[P2PS2.columns.id] = row[P2PS2._IUVO.columns.txID];

            if (!checkDupTxIDs || !P2PS2.platforms.IUVO._txIDs.includes(transaction[P2PS2.columns.id])) {
                transaction[P2PS2.columns.date] = new Date(row[P2PS2._IUVO.columns.date]);
                transaction[P2PS2.columns.type] = P2PS2.types.invalid;
                transaction[P2PS2.columns.subType] = P2PS2.subTypes.na;

                const rowType = row[P2PS2._IUVO.columns.txType];

                switch (rowType) {
                    // TODO: transaction[P2PS2.columns.subType] = P2PS2.subTypes.loyalty;
                    case P2PS2._IUVO.types.bonus:
                        transaction[P2PS2.columns.type] = P2PS2.types.bonus;
                        // NOTE: different types of bonuses not identified (referral vs cashback campaigns)
                        P2PS2.platforms.IUVO.balance += transaction[P2PS2.columns.value];
                        P2PS2.platforms.IUVO.bonuses += transaction[P2PS2.columns.value];
                        break;
                    case P2PS2._IUVO.types.deposit:
                        transaction[P2PS2.columns.type] = P2PS2.types.deposit;
                        P2PS2.platforms.IUVO.balanceDepWid += transaction[P2PS2.columns.value];
                        P2PS2.platforms.IUVO.balance += transaction[P2PS2.columns.value];
                        break;
                    case P2PS2._IUVO.types.withdrawal:
                        transaction[P2PS2.columns.type] = P2PS2.types.withdrawal;
                        P2PS2.platforms.IUVO.balanceDepWid += transaction[P2PS2.columns.value];
                        P2PS2.platforms.IUVO.balance += transaction[P2PS2.columns.value];
                        break;
                    case P2PS2._IUVO.types.lateFee:
                        transaction[P2PS2.columns.country] = "[UNKNOWN] IUVO";
                        transaction[P2PS2.columns.type] = P2PS2.types.interest;
                        transaction[P2PS2.columns.subType] = P2PS2.subTypes.lateFee;
                        P2PS2.platforms.IUVO.balance += transaction[P2PS2.columns.value];
                        P2PS2.platforms.IUVO.interests += transaction[P2PS2.columns.value];
                        break;
                    case P2PS2._IUVO.types.paymentInterest:
                        transaction[P2PS2.columns.country] = "[UNKNOWN] IUVO";
                        transaction[P2PS2.columns.type] = P2PS2.types.interest;
                        P2PS2.platforms.IUVO.balance += transaction[P2PS2.columns.value];
                        P2PS2.platforms.IUVO.interests += transaction[P2PS2.columns.value];
                        break;
                    case P2PS2._IUVO.types.paymentInterestBuyback:
                        transaction[P2PS2.columns.country] = "[UNKNOWN] IUVO";
                        transaction[P2PS2.columns.type] = P2PS2.types.interest;
                        transaction[P2PS2.columns.subType] = P2PS2.subTypes.buyback;
                        P2PS2.platforms.IUVO.balance += transaction[P2PS2.columns.value];
                        P2PS2.platforms.IUVO.interests += transaction[P2PS2.columns.value];
                        break;
                    case P2PS2._IUVO.types.paymentInterestEarly:
                        transaction[P2PS2.columns.country] = "[UNKNOWN] IUVO";
                        transaction[P2PS2.columns.type] = P2PS2.types.interest;
                        transaction[P2PS2.columns.subType] = P2PS2.subTypes.early;
                        P2PS2.platforms.IUVO.balance += transaction[P2PS2.columns.value];
                        P2PS2.platforms.IUVO.interests += transaction[P2PS2.columns.value];
                        break;
                    case P2PS2._IUVO.types.paymentPrincipal:
                    case P2PS2._IUVO.types.smSale:
                        transaction[P2PS2.columns.country] = "[UNKNOWN] IUVO";
                        transaction[P2PS2.columns.type] = P2PS2.types.principal;

                        P2PS2fn.updateCurrentInvestment(
                            "IUVO",
                            row[P2PS2._IUVO.columns.loanId],
                            transaction
                        );
                        break;
                    case P2PS2._IUVO.types.paymentPrincipalBuyBack:
                        transaction[P2PS2.columns.country] = "[UNKNOWN] IUVO";
                        transaction[P2PS2.columns.type] = P2PS2.types.principal;
                        transaction[P2PS2.columns.subType] = P2PS2.subTypes.buyback;
                        
                        P2PS2fn.updateCurrentInvestment(
                            "IUVO",
                            row[P2PS2._IUVO.columns.loanId],
                            transaction
                        );
                        break;
                    case P2PS2._IUVO.types.paymentPrincipalEarly:
                        transaction[P2PS2.columns.country] = "[UNKNOWN] IUVO";
                        transaction[P2PS2.columns.type] = P2PS2.types.principal;
                        transaction[P2PS2.columns.subType] = P2PS2.subTypes.early;
                        
                        P2PS2fn.updateCurrentInvestment(
                            "IUVO",
                            row[P2PS2._IUVO.columns.loanId],
                            transaction
                        );
                        break;
                    case P2PS2._IUVO.types.pmAutoInvest:
                    case P2PS2._IUVO.types.pmInvest:
                        transaction[P2PS2.columns.country] = "[UNKNOWN] IUVO";
                        transaction[P2PS2.columns.type] = P2PS2.types.investment;
                        
                        P2PS2fn.updateCurrentInvestment(
                            "IUVO",
                            row[P2PS2._IUVO.columns.loanId],
                            transaction
                        );
                        break;
                    case P2PS2._IUVO.types.smDiscount:
                        transaction[P2PS2.columns.country] = "[UNKNOWN] IUVO";

                        // just in case
                        if (transaction[P2PS2.columns.value] < 0.0) {
                            transaction[P2PS2.columns.type] = P2PS2.types.fee;
                            P2PS2.platforms.IUVO.fees += transaction[P2PS2.columns.value];
                        }
                        else {
                            transaction[P2PS2.columns.type] = P2PS2.types.interest;
                            P2PS2.platforms.IUVO.interests += transaction[P2PS2.columns.value];
                        }

                        P2PS2.platforms.IUVO.balance += transaction[P2PS2.columns.value];
                        break;
                    case P2PS2._IUVO.types.smSaleFee:
                        transaction[P2PS2.columns.country] = "[UNKNOWN] IUVO";
                        transaction[P2PS2.columns.type] = P2PS2.types.fee;
                        P2PS2.platforms.IUVO.balance += transaction[P2PS2.columns.value];
                        P2PS2.platforms.IUVO.fees += transaction[P2PS2.columns.value];
                        break;
                }

                if (transaction[P2PS2.columns.type] !== P2PS2.types.invalid) {
                    P2PS2.platforms.IUVO.balanceAvail += transaction[P2PS2.columns.value];

                    P2PS2.platforms.IUVO.transactions.push(transaction);
                    P2PS2.platforms.IUVO._txIDs.push(transaction[P2PS2.columns.id]);
                }
                // else {
                //     console.warn("Ignored row", i, row);
                // }
            }
        }
    }

    P2PS2fn.onStatementLoaded("IUVO");
});

document.querySelector("#iuvo-investments").addEventListener("change", async (event) => {
    console.time("[IUVO] Invesments loading");

    P2PS2.chart.containerTag.classList.add("d-none");
    P2PS2.settings.blockingProgressTag.classList.remove("d-none");

    const sheetJSON = await P2PS2fn.loadInvestmentsToJSON(event.target.files[0]);

    if (!P2PS2fn.checkInvestmentsJSON(sheetJSON, "_IUVO")) {
        P2PS2.settings.blockingProgressTag.classList.add("d-none");

        return;
    }

    for (const row of sheetJSON) {
        const loanId = row[P2PS2._IUVO.investmentsColumns.id];

        if (P2PS2.platforms.IUVO.currentInvestments[loanId]) {
            // set missing country for current investment
            const country = P2PS2._IUVO.countries[row[P2PS2._IUVO.investmentsColumns.country]];

            if (country) {
                P2PS2.platforms.IUVO.currentInvestments[loanId].country = country;
            }
            else {
                P2PS2fn.dom.showToast(
                    "danger", 
                    `IUVO: Unrecognized country ${row[P2PS2._MINTOS.investmentsColumns.country]}`,
                    2000
                );
            }
        }
        else {
            P2PS2fn.dom.showToast(
                "warning",
                `IUVO: Loan ${loanId} not in account statement.`,
                1000
            );
        }
    }

    P2PS2fn.removeStaleCurrentInvestments("IUVO");

    P2PS2.settings.blockingProgressTag.classList.add("d-none");

    console.timeEnd("[IUVO] Invesments loading");
    P2PS2fn.dom.showToast("success", `IUVO: New investments data loaded.`);
});

document.querySelector("#kviku-statement").addEventListener("change", async (event) => {
    P2PS2fn.onStatementLoad("KVIKU");

    if (!P2PS2.settings.multiload) {
        P2PS2.platforms.KVIKU = P2PS2fn.resetPlatformData();
    }

    const sheetJSON = await P2PS2fn.loadStatementToJSON(event.target.files[0]);

    if (!P2PS2fn.checkStatementJSON(sheetJSON, "_KVIKU")) {
        P2PS2.settings.blockingProgressTag.classList.add("d-none");

        return;
    }
    
    // NOTE: avoid unnecessary checking of tx IDs if no previous loading took place
    const checkDupTxIDs = P2PS2.settings.multiload && (P2PS2.platforms.KVIKU._txIDs.length > 0);

    // newest is first, we want the opposite
    // NOTE: this helps on date sorting conflicts (order of appearance takes second priority)
    sheetJSON.reverse();

    for (const row of sheetJSON) {
        const transaction = {};
        transaction[P2PS2.columns.value] = row[P2PS2._KVIKU.columns.amount];

        if (transaction[P2PS2.columns.value] !== 0.0) {
            transaction[P2PS2.columns.id] = md5(JSON.stringify(row));

            if (!checkDupTxIDs || !P2PS2.platforms.KVIKU._txIDs.includes(transaction[P2PS2.columns.id])) {
                transaction[P2PS2.columns.date] = new Date(row[P2PS2._KVIKU.columns.date]);
                transaction[P2PS2.columns.type] = P2PS2.types.invalid;
                transaction[P2PS2.columns.subType] = P2PS2.subTypes.na;

                const rowType = row[P2PS2._KVIKU.columns.operation].toLowerCase();

                switch (rowType) {
                    case P2PS2._KVIKU.types.bonusIncome:
                        transaction[P2PS2.columns.type] = P2PS2.types.bonus;
                        transaction[P2PS2.columns.subType] = P2PS2.subTypes.loyalty;
                        P2PS2.platforms.KVIKU.balance += transaction[P2PS2.columns.value];
                        P2PS2.platforms.KVIKU.bonuses += transaction[P2PS2.columns.value];
                        break;
                    case P2PS2._KVIKU.types.referral:
                        transaction[P2PS2.columns.type] = P2PS2.types.bonus;
                        transaction[P2PS2.columns.subType] = P2PS2.subTypes.referral;
                        P2PS2.platforms.KVIKU.balance += transaction[P2PS2.columns.value];
                        P2PS2.platforms.KVIKU.bonuses += transaction[P2PS2.columns.value];
                        break;
                    case P2PS2._KVIKU.types.addFunds:
                        transaction[P2PS2.columns.type] = P2PS2.types.deposit;
                        P2PS2.platforms.KVIKU.balanceDepWid += transaction[P2PS2.columns.value];
                        P2PS2.platforms.KVIKU.balance += transaction[P2PS2.columns.value];
                        break;
                    case P2PS2._KVIKU.types.withdrawalOrder:
                        transaction[P2PS2.columns.type] = P2PS2.types.withdrawal;
                        transaction[P2PS2.columns.value] *= -1.0;
                        P2PS2.platforms.KVIKU.balanceDepWid += transaction[P2PS2.columns.value];
                        P2PS2.platforms.KVIKU.balance += transaction[P2PS2.columns.value];
                        break;
                    default:
                        if (rowType.includes(P2PS2._KVIKU.types.principalReceived) ||
                                rowType.includes(P2PS2._KVIKU.types.fullyRepaid)) {
                            transaction[P2PS2.columns.country] = P2PS2fn.KVIKU.getLoanCountry(row);
                            transaction[P2PS2.columns.type] = P2PS2.types.principal;

                            P2PS2fn.updateCurrentInvestment(
                                "KVIKU",
                                P2PS2fn.KVIKU.getLoanId(row),
                                transaction
                            );
                        }
                        else if (rowType.includes(P2PS2._KVIKU.types.buyback)) {
                            transaction[P2PS2.columns.country] = P2PS2fn.KVIKU.getLoanCountry(row);
                            transaction[P2PS2.columns.type] = P2PS2.types.principal;
                            transaction[P2PS2.columns.subType] = P2PS2.subTypes.buyback;

                            P2PS2fn.updateCurrentInvestment(
                                "KVIKU",
                                P2PS2fn.KVIKU.getLoanId(row),
                                transaction
                            );
                        }
                        else if (rowType.includes(P2PS2._KVIKU.types.interestReceived)) {
                            transaction[P2PS2.columns.country] = P2PS2fn.KVIKU.getLoanCountry(row);
                            transaction[P2PS2.columns.type] = P2PS2.types.interest;
                            P2PS2.platforms.KVIKU.balance += transaction[P2PS2.columns.value];
                            P2PS2.platforms.KVIKU.interests += transaction[P2PS2.columns.value];
                        }
                        else if (rowType.includes(P2PS2._KVIKU.types.investment)) {
                            transaction[P2PS2.columns.country] = P2PS2fn.KVIKU.getLoanCountry(row);
                            transaction[P2PS2.columns.type] = P2PS2.types.investment;
                            transaction[P2PS2.columns.value] *= -1.0;

                            P2PS2fn.updateCurrentInvestment(
                                "KVIKU",
                                P2PS2fn.KVIKU.getLoanId(row),
                                transaction
                            );
                        }
                        break;
                }

                if (transaction[P2PS2.columns.type] !== P2PS2.types.invalid) {
                    P2PS2.platforms.KVIKU.balanceAvail += transaction[P2PS2.columns.value];

                    P2PS2.platforms.KVIKU.transactions.push(transaction);
                    P2PS2.platforms.KVIKU._txIDs.push(transaction[P2PS2.columns.id]);
                }
                // else {
                //     console.warn("Ignored row", i, row);
                // }
            }
        }
    }

    P2PS2fn.onStatementLoaded("KVIKU");
});

document.querySelector("#lendermarket-statement").addEventListener("change", async (event) => {
    P2PS2fn.onStatementLoad("LENDERMARKET");

    if (!P2PS2.settings.multiload) {
        P2PS2.platforms.LENDERMARKET = P2PS2fn.resetPlatformData();
    }

    const sheetJSON = await P2PS2fn.loadStatementToJSON(event.target.files[0]);

    if (!P2PS2fn.checkStatementJSON(sheetJSON, "_LENDERMARKET")) {
        P2PS2.settings.blockingProgressTag.classList.add("d-none");

        return;
    }
    
    // NOTE: avoid unnecessary checking of tx IDs if no previous loading took place
    const checkDupTxIDs = P2PS2.settings.multiload && (P2PS2.platforms.LENDERMARKET._txIDs.length > 0);

    for (const row of sheetJSON) {
        const transaction = {};
        transaction[P2PS2.columns.value] = row[P2PS2._LENDERMARKET.columns.turnover];

        // only supporting EUR for now
        if ((transaction[P2PS2.columns.value] !== 0.0) && (row[P2PS2._LENDERMARKET.columns.currency] === CURRENCY_EUR)) {
            transaction[P2PS2.columns.id] = md5(JSON.stringify(row));
            
            if (!checkDupTxIDs || !P2PS2.platforms.LENDERMARKET._txIDs.includes(transaction[P2PS2.columns.id])) {
                // only date, no time data in statements
                transaction[P2PS2.columns.date] = new Date(row[P2PS2._LENDERMARKET.columns.date]);
                transaction[P2PS2.columns.type] = P2PS2.types.invalid;
                transaction[P2PS2.columns.subType] = P2PS2.subTypes.na;
                // transaction[P2PS2.columns.currency] = row[P2PS2._LENDERMARKET.columns.currency];

                const rowType = row[P2PS2._LENDERMARKET.columns.txDetails];

                switch (rowType) {
                    case P2PS2._LENDERMARKET.types.deposit:
                        transaction[P2PS2.columns.type] = P2PS2.types.deposit;
                        P2PS2.platforms.LENDERMARKET.balanceDepWid += transaction[P2PS2.columns.value];
                        P2PS2.platforms.LENDERMARKET.balance += transaction[P2PS2.columns.value];
                        break;
                    case P2PS2._LENDERMARKET.types.withdrawal:
                        transaction[P2PS2.columns.type] = P2PS2.types.withdrawal;
                        P2PS2.platforms.LENDERMARKET.balanceDepWid += transaction[P2PS2.columns.value];
                        P2PS2.platforms.LENDERMARKET.balance += transaction[P2PS2.columns.value];
                        break;
                    case P2PS2._LENDERMARKET.types.investment:
                        transaction[P2PS2.columns.country] = P2PS2fn.LENDERMARKET.getLoanCountry(row);
                        transaction[P2PS2.columns.type] = P2PS2.types.investment;

                        P2PS2fn.updateCurrentInvestment(
                            "LENDERMARKET",
                            row[P2PS2._LENDERMARKET.columns.loanId],
                            transaction
                        );
                        break;
                    case P2PS2._LENDERMARKET.types.principal:
                        transaction[P2PS2.columns.country] = P2PS2fn.LENDERMARKET.getLoanCountry(row);
                        transaction[P2PS2.columns.type] = P2PS2.types.principal;

                        P2PS2fn.updateCurrentInvestment(
                            "LENDERMARKET",
                            row[P2PS2._LENDERMARKET.columns.loanId],
                            transaction
                        );
                        break;
                    case P2PS2._LENDERMARKET.types.interest:
                        transaction[P2PS2.columns.country] = P2PS2fn.LENDERMARKET.getLoanCountry(row);
                        transaction[P2PS2.columns.type] = P2PS2.types.interest;
                        P2PS2.platforms.LENDERMARKET.balance += transaction[P2PS2.columns.value];
                        P2PS2.platforms.LENDERMARKET.interests += transaction[P2PS2.columns.value];
                        break;
                    case P2PS2._LENDERMARKET.types.delayedInterest:
                        transaction[P2PS2.columns.country] = P2PS2fn.LENDERMARKET.getLoanCountry(row);
                        transaction[P2PS2.columns.type] = P2PS2.types.interest;
                        transaction[P2PS2.columns.subType] = P2PS2.subTypes.lateFee;
                        P2PS2.platforms.LENDERMARKET.balance += transaction[P2PS2.columns.value];
                        P2PS2.platforms.LENDERMARKET.interests += transaction[P2PS2.columns.value];
                        break;
                    case P2PS2._LENDERMARKET.types.rewardBonus:
                        transaction[P2PS2.columns.type] = P2PS2.types.bonus;
                        // NOTE: different types of bonuses not identified (referral vs cashback campaigns)
                        P2PS2.platforms.LENDERMARKET.balance += transaction[P2PS2.columns.value];
                        P2PS2.platforms.LENDERMARKET.bonuses += transaction[P2PS2.columns.value];
                        break;
                }

                if (transaction[P2PS2.columns.type] !== P2PS2.types.invalid) {
                    P2PS2.platforms.LENDERMARKET.balanceAvail += transaction[P2PS2.columns.value];

                    P2PS2.platforms.LENDERMARKET.transactions.push(transaction);
                    P2PS2.platforms.LENDERMARKET._txIDs.push(transaction[P2PS2.columns.id]);
                }
                // else {
                //     console.warn("Ignored row", i, row);
                // }
            }
        }
    }

    P2PS2fn.onStatementLoaded("LENDERMARKET");
});

document.querySelector("#mintos-statement").addEventListener("change", async (event) => {
    P2PS2fn.onStatementLoad("MINTOS");

    if (!P2PS2.settings.multiload) {
        P2PS2.platforms.MINTOS = P2PS2fn.resetPlatformData();
    }

    const file = event.target.files[0];
    const sheetJSON = await P2PS2fn.loadStatementToJSON(file);

    if (!P2PS2fn.checkStatementJSON(sheetJSON, "_MINTOS")) {
        P2PS2.settings.blockingProgressTag.classList.add("d-none");

        return;
    }
    
    // NOTE: avoid unnecessary checking of tx IDs if no previous loading took place
    const checkDupTxIDs = P2PS2.settings.multiload && (P2PS2.platforms.MINTOS._txIDs.length > 0);

    for (const row of sheetJSON) {
        const transaction = {};
        transaction[P2PS2.columns.value] = row[P2PS2._MINTOS.columns.turnover];

        // only supporting EUR for now
        if ((transaction[P2PS2.columns.value] !== 0.0) && (row[P2PS2._MINTOS.columns.currency] === CURRENCY_EUR)) {
            transaction[P2PS2.columns.id] = row[P2PS2._MINTOS.columns.txId];
            
            if (!checkDupTxIDs || !P2PS2.platforms.MINTOS._txIDs.includes(transaction[P2PS2.columns.id])) {
                transaction[P2PS2.columns.date] = new Date(row[P2PS2._MINTOS.columns.date]);
                transaction[P2PS2.columns.type] = P2PS2.types.invalid;
                transaction[P2PS2.columns.subType] = P2PS2.subTypes.na;
                // transaction[P2PS2.columns.currency] = row[P2PS2._MINTOS.columns.currency];

                const rowType = row[P2PS2._MINTOS.columns.details].toLowerCase();

                switch (rowType) {
                    case P2PS2._MINTOS.types.deposit:
                        transaction[P2PS2.columns.type] = P2PS2.types.deposit;
                        P2PS2.platforms.MINTOS.balanceDepWid += transaction[P2PS2.columns.value];
                        P2PS2.platforms.MINTOS.balance += transaction[P2PS2.columns.value];
                        break;
                    case P2PS2._MINTOS.types.withdrawal:
                        transaction[P2PS2.columns.type] = P2PS2.types.withdrawal;
                        P2PS2.platforms.MINTOS.balanceDepWid += transaction[P2PS2.columns.value];
                        P2PS2.platforms.MINTOS.balance += transaction[P2PS2.columns.value];
                        break;
                    case P2PS2._MINTOS.types.depositReversed:
                        transaction[P2PS2.columns.type] = P2PS2.types.assimilation;
                        P2PS2.platforms.MINTOS.balance += transaction[P2PS2.columns.value];
                        break;
                    case P2PS2._MINTOS.types.smallLoanPartsPrincipalReceived:
                        transaction[P2PS2.columns.type] = P2PS2.types.assimilation;
                        // NOTE: this row is missing a lot of information
                        //       we only care about the id & date, use md5 & file's last modified, respectively
                        //       assuming the statement was not modified, this should remain accurate (i.e. last modified === created)
                        transaction[P2PS2.columns.date] = new Date(file.lastModified);
                        transaction[P2PS2.columns.id] = md5(JSON.stringify(transaction));
                        P2PS2.platforms.MINTOS.balance += transaction[P2PS2.columns.value];
                        break;
                    case P2PS2._MINTOS.types.cashbackBonus:
                        transaction[P2PS2.columns.type] = P2PS2.types.bonus;
                        transaction[P2PS2.columns.subType] = P2PS2.subTypes.cashback;
                        P2PS2.platforms.MINTOS.balance += transaction[P2PS2.columns.value];
                        P2PS2.platforms.MINTOS.bonuses += transaction[P2PS2.columns.value];
                        break;
                    case P2PS2._MINTOS.types.affiliateBonus:
                    case P2PS2._MINTOS.types.referralBonus:
                        transaction[P2PS2.columns.type] = P2PS2.types.bonus;
                        transaction[P2PS2.columns.subType] = P2PS2.subTypes.referral;
                        P2PS2.platforms.MINTOS.balance += transaction[P2PS2.columns.value];
                        P2PS2.platforms.MINTOS.bonuses += transaction[P2PS2.columns.value];
                        break;
                    default:
                        if (rowType.includes(P2PS2._MINTOS.types.sMDiscountPremium)) {
                            // order for this is important since typeSMInvestment and typeSMDiscountPremium clash,
                            // the latter takes precedence
                            transaction[P2PS2.columns.country] = "[UNKNOWN] MINTOS";

                            if (transaction[P2PS2.columns.value] < 0.0) {
                                transaction[P2PS2.columns.type] = P2PS2.types.fee;
                                P2PS2.platforms.MINTOS.fees += transaction[P2PS2.columns.value];
                            }
                            else {
                                transaction[P2PS2.columns.type] = P2PS2.types.interest;
                                P2PS2.platforms.MINTOS.interests += transaction[P2PS2.columns.value];
                            }

                            P2PS2.platforms.MINTOS.balance += transaction[P2PS2.columns.value];
                        }
                        else if (rowType.includes(P2PS2._MINTOS.types.sMFee)) {
                            transaction[P2PS2.columns.country] = "[UNKNOWN] MINTOS";
                            transaction[P2PS2.columns.type] = P2PS2.types.fee;
                            P2PS2.platforms.MINTOS.balance += transaction[P2PS2.columns.value];
                            P2PS2.platforms.MINTOS.fees += transaction[P2PS2.columns.value];
                        }
                        else if (rowType.includes(P2PS2._MINTOS.types.inactivityFee) ||
                                    rowType.includes(P2PS2._MINTOS.types.serviceFees)) {
                            transaction[P2PS2.columns.type] = P2PS2.types.fee;
                            P2PS2.platforms.MINTOS.balance += transaction[P2PS2.columns.value];
                            P2PS2.platforms.MINTOS.fees += transaction[P2PS2.columns.value];
                        }
                        else if (rowType.includes(P2PS2._MINTOS.types.investment)) {
                            transaction[P2PS2.columns.country] = "[UNKNOWN] MINTOS";
                            transaction[P2PS2.columns.type] = P2PS2.types.investment;

                            P2PS2fn.updateCurrentInvestment(
                                "MINTOS",
                                P2PS2fn.MINTOS.getLoanId(row),
                                transaction
                            );
                        }
                        else if (rowType.includes(P2PS2._MINTOS.types.smTransaction)) {
                            if (transaction[P2PS2.columns.value] < 0.0) {
                                transaction[P2PS2.columns.country] = "[UNKNOWN] MINTOS";
                                transaction[P2PS2.columns.type] = P2PS2.types.investment;

                                P2PS2fn.updateCurrentInvestment(
                                    "MINTOS",
                                    P2PS2fn.MINTOS.getLoanId(row),
                                    transaction
                                );
                            }
                            else {
                                // sold
                                transaction[P2PS2.columns.country] = "[UNKNOWN] MINTOS";
                                transaction[P2PS2.columns.type] = P2PS2.types.principal;

                                P2PS2fn.updateCurrentInvestment(
                                    "MINTOS",
                                    P2PS2fn.MINTOS.getLoanId(row),
                                    transaction
                                );
                            }
                        }
                        else if (rowType.includes(P2PS2._MINTOS.types.principalReceived)) {
                            transaction[P2PS2.columns.country] = "[UNKNOWN] MINTOS";
                            transaction[P2PS2.columns.type] = P2PS2.types.principal;

                            P2PS2fn.updateCurrentInvestment(
                                "MINTOS",
                                P2PS2fn.MINTOS.getLoanId(row),
                                transaction
                            );

                            if (rowType.includes(P2PS2._MINTOS.subTypes.repurchased) ||
                                    rowType.includes(P2PS2._MINTOS.subTypes.other)) {
                                transaction[P2PS2.columns.subType] = P2PS2.subTypes.early;
                            }
                            else if (rowType.includes(P2PS2._MINTOS.subTypes.buyback)) {
                                transaction[P2PS2.columns.subType] = P2PS2.subTypes.buyback;
                            }
                        }
                        else if (rowType.includes(P2PS2._MINTOS.types.latePaymentInterestReceived) ||
                                    rowType.includes(P2PS2._MINTOS.types.lateFeesReceived) ||
                                    rowType.includes(P2PS2._MINTOS.types.interestFromPP)) {
                            // order for this is important since typeInterestReceived and typeLatePaymentInterestReceived clash,
                            // the latter takes precedence
                            transaction[P2PS2.columns.country] = "[UNKNOWN] MINTOS";
                            transaction[P2PS2.columns.type] = P2PS2.types.interest;
                            transaction[P2PS2.columns.subType] = P2PS2.subTypes.lateFee;
                            P2PS2.platforms.MINTOS.balance += transaction[P2PS2.columns.value];
                            P2PS2.platforms.MINTOS.interests += transaction[P2PS2.columns.value];
                        }
                        else if (rowType.includes(P2PS2._MINTOS.types.interestReceived)) {
                            transaction[P2PS2.columns.country] = "[UNKNOWN] MINTOS";
                            transaction[P2PS2.columns.type] = P2PS2.types.interest;
                            P2PS2.platforms.MINTOS.balance += transaction[P2PS2.columns.value];
                            P2PS2.platforms.MINTOS.interests += transaction[P2PS2.columns.value];

                            if (rowType.includes(P2PS2._MINTOS.subTypes.repurchased) ||
                                    rowType.includes(P2PS2._MINTOS.subTypes.other)) {
                                transaction[P2PS2.columns.subType] = P2PS2.subTypes.early;
                            }
                            else if (rowType.includes(P2PS2._MINTOS.subTypes.buyback)) {
                                transaction[P2PS2.columns.subType] = P2PS2.subTypes.buyback;
                            }
                        }
                        break;
                }

                if (transaction[P2PS2.columns.type] !== P2PS2.types.invalid) {
                    P2PS2.platforms.MINTOS.balanceAvail += transaction[P2PS2.columns.value];

                    P2PS2.platforms.MINTOS.transactions.push(transaction);
                    P2PS2.platforms.MINTOS._txIDs.push(transaction[P2PS2.columns.id]);
                }
                // else {
                //     console.warn("Ignored row", i, row);
                // }
            }
        }
    }

    P2PS2fn.onStatementLoaded("MINTOS");
});

document.querySelector("#mintos-investments").addEventListener("change", async (event) => {
    console.time("[MINTOS] Invesments loading");

    P2PS2.chart.containerTag.classList.add("d-none");
    P2PS2.settings.blockingProgressTag.classList.remove("d-none");

    const sheetJSON = await P2PS2fn.loadInvestmentsToJSON(event.target.files[0]);

    if (!P2PS2fn.checkInvestmentsJSON(sheetJSON, "_MINTOS")) {
        P2PS2.settings.blockingProgressTag.classList.add("d-none");

        return;
    }

    for (const row of sheetJSON) {
        const loanId = row[P2PS2._MINTOS.investmentsColumns.id];

        if (P2PS2.platforms.MINTOS.currentInvestments[loanId]) {
            // set missing country for current investment
            const country = P2PS2._MINTOS.countries[row[P2PS2._MINTOS.investmentsColumns.country]];

            if (country) {
                P2PS2.platforms.MINTOS.currentInvestments[loanId].country = country;
            }
            else {
                P2PS2fn.dom.showToast(
                    "danger", 
                    `MINTOS: Unrecognized country ${row[P2PS2._MINTOS.investmentsColumns.country]}`,
                    2000
                );
            }
        }
        else {
            P2PS2fn.dom.showToast(
                "warning",
                `MINTOS: Loan ${loanId} not in account statement.`,
                1000
            );
        }
    }

    P2PS2fn.removeStaleCurrentInvestments("MINTOS");

    // XXX: anything that isn't in current investments should be "recovery",
    //      although amount doesn't exactly match what is displayed on the website?
    // P2PS2.platforms.MINTOS.currentInvestments[loanId].country = "[RECOVERY] MINTOS";

    P2PS2.settings.blockingProgressTag.classList.add("d-none");

    console.timeEnd("[MINTOS] Invesments loading");
    P2PS2fn.dom.showToast("success", `MINTOS: New investments data loaded.`);
});

document.querySelector("#moncera-statement").addEventListener("change", async (event) => {
    P2PS2fn.onStatementLoad("MONCERA");

    if (!P2PS2.settings.multiload) {
        P2PS2.platforms.MONCERA = P2PS2fn.resetPlatformData();
    }

    let sheetJSON = await P2PS2fn.loadStatementToJSON(event.target.files[0]);

    if (!P2PS2fn.checkStatementJSON(sheetJSON, "_MONCERA")) {
        P2PS2.settings.blockingProgressTag.classList.add("d-none");

        return;
    }
    
    // NOTE: avoid unnecessary checking of tx IDs if no previous loading took place
    const checkDupTxIDs = P2PS2.settings.multiload && (P2PS2.platforms.MONCERA._txIDs.length > 0);

    // newest is first, we want the opposite
    // NOTE: this helps on date sorting conflicts (order of appearance takes second priority)
    sheetJSON.reverse();

    for (const row of sheetJSON) {
        const transaction = {};
        transaction[P2PS2.columns.value] = row[P2PS2._MONCERA.columns.value];

        // only supporting EUR for now
        if ((transaction[P2PS2.columns.value] !== 0.0) && (row[P2PS2._MONCERA.columns.currency] === CURRENCY_EUR)) {
            transaction[P2PS2.columns.id] = row[P2PS2._MONCERA.columns.txID];
            
            if (!checkDupTxIDs || !P2PS2.platforms.MONCERA._txIDs.includes(transaction[P2PS2.columns.id])) {
                // only date, no time data in statements
                transaction[P2PS2.columns.date] = new Date(row[P2PS2._MONCERA.columns.date]);
                transaction[P2PS2.columns.type] = P2PS2.types.invalid;
                transaction[P2PS2.columns.subType] = P2PS2.subTypes.na;
                // transaction[P2PS2.columns.currency] = row[P2PS2._MONCERA.columns.currency];
                // anything not matching (key) will result in undefined, which is what we want here (irrelevant rows)
                transaction[P2PS2.columns.country] = P2PS2._MONCERA.countries[row[P2PS2._MONCERA.columns.country]];

                const rowType = row[P2PS2._MONCERA.columns.type];
                const rowSubType = row[P2PS2._MONCERA.columns.description];

                switch (rowType) {
                    case P2PS2._MONCERA.types.interest:
                        transaction[P2PS2.columns.type] = P2PS2.types.interest;
                        P2PS2.platforms.MONCERA.balance += transaction[P2PS2.columns.value];
                        P2PS2.platforms.MONCERA.interests += transaction[P2PS2.columns.value];

                        if (rowSubType === P2PS2._MONCERA.subTypes.buyback) {
                            transaction[P2PS2.columns.subType] = P2PS2.subTypes.buyback;
                        }
                        break;
                    case P2PS2._MONCERA.types.investment:
                        switch (rowSubType) {
                            case P2PS2._MONCERA.subTypes.principal:
                                transaction[P2PS2.columns.type] = P2PS2.types.principal;

                                P2PS2fn.updateCurrentInvestment(
                                    "MONCERA",
                                    row[P2PS2._MONCERA.columns.loanNum],
                                    transaction
                                );
                                break;
                            case P2PS2._MONCERA.subTypes.buyback:
                                transaction[P2PS2.columns.type] = P2PS2.types.principal;
                                transaction[P2PS2.columns.subType] = P2PS2.subTypes.buyback;

                                P2PS2fn.updateCurrentInvestment(
                                    "MONCERA",
                                    row[P2PS2._MONCERA.columns.loanNum],
                                    transaction
                                );
                                break;
                            case P2PS2._MONCERA.subTypes.investment:
                                transaction[P2PS2.columns.type] = P2PS2.types.investment;

                                P2PS2fn.updateCurrentInvestment(
                                    "MONCERA",
                                    row[P2PS2._MONCERA.columns.loanNum],
                                    transaction
                                );
                                break;
                            case P2PS2._MONCERA.subTypes.sold:
                                transaction[P2PS2.columns.type] = P2PS2.types.principal;

                                P2PS2fn.updateCurrentInvestment(
                                    "MONCERA",
                                    row[P2PS2._MONCERA.columns.loanNum],
                                    transaction
                                );
                                break;
                        }
                        break;
                    case P2PS2._MONCERA.types.payment:
                        switch (rowSubType) {
                            case P2PS2._MONCERA.subTypes.addFunds:
                                transaction[P2PS2.columns.type] = P2PS2.types.deposit;
                                P2PS2.platforms.MONCERA.balanceDepWid += transaction[P2PS2.columns.value];
                                P2PS2.platforms.MONCERA.balance += transaction[P2PS2.columns.value];
                                break;
                            case P2PS2._MONCERA.subTypes.withdrawFunds:
                                transaction[P2PS2.columns.type] = P2PS2.types.withdrawal;
                                P2PS2.platforms.MONCERA.balanceDepWid += transaction[P2PS2.columns.value];
                                P2PS2.platforms.MONCERA.balance += transaction[P2PS2.columns.value];
                                break;
                        }
                        break;
                    case P2PS2._MONCERA.types.fee:
                        switch (rowSubType) {
                            case P2PS2._MONCERA.subTypes.earlySell:
                                transaction[P2PS2.columns.type] = P2PS2.types.fee;
                                P2PS2.platforms.MONCERA.balance += transaction[P2PS2.columns.value];
                                P2PS2.platforms.MONCERA.fees += transaction[P2PS2.columns.value];
                                break;
                        }
                        break;
                    case P2PS2._MONCERA.types.tax:
                        transaction[P2PS2.columns.type] = P2PS2.types.fee;
                        P2PS2.platforms.MONCERA.balance += transaction[P2PS2.columns.value];
                        P2PS2.platforms.MONCERA.fees += transaction[P2PS2.columns.value];
                        break;
                    case P2PS2._MONCERA.types.referral:
                        transaction[P2PS2.columns.type] = P2PS2.types.bonus;
                        transaction[P2PS2.columns.subType] = P2PS2.subTypes.referral;
                        P2PS2.platforms.MONCERA.balance += transaction[P2PS2.columns.value];
                        P2PS2.platforms.MONCERA.bonuses += transaction[P2PS2.columns.value];
                        break;
                }

                if (transaction[P2PS2.columns.type] !== P2PS2.types.invalid) {
                    P2PS2.platforms.MONCERA.balanceAvail += transaction[P2PS2.columns.value];

                    P2PS2.platforms.MONCERA.transactions.push(transaction);
                    P2PS2.platforms.MONCERA._txIDs.push(transaction[P2PS2.columns.id]);
                }
                // else {
                //     console.warn("Ignored row", i, row);
                // }
            }
        }
    }

    P2PS2fn.onStatementLoaded("MONCERA");
});

document.querySelector("#peerberry-statement").addEventListener("change", async (event) => {
    P2PS2fn.onStatementLoad("PEERBERRY");

    if (!P2PS2.settings.multiload) {
        P2PS2.platforms.PEERBERRY = P2PS2fn.resetPlatformData();
    }

    const sheetJSON = await P2PS2fn.loadStatementToJSON(event.target.files[0]);

    if (!P2PS2fn.checkStatementJSON(sheetJSON, "_PEERBERRY")) {
        P2PS2.settings.blockingProgressTag.classList.add("d-none");

        return;
    }
    
    // NOTE: avoid unnecessary checking of tx IDs if no previous loading took place
    const checkDupTxIDs = P2PS2.settings.multiload && (P2PS2.platforms.PEERBERRY._txIDs.length > 0);

    // newest is first, we want the opposite
    // NOTE: this helps on date sorting conflicts (order of appearance takes second priority)
    sheetJSON.reverse();

    for (const row of sheetJSON) {
        const transaction = {};
        transaction[P2PS2.columns.value] = row[P2PS2._PEERBERRY.columns.amount];

        // only supporting EUR for now
        if ((transaction[P2PS2.columns.value] !== 0.0) && (row[P2PS2._PEERBERRY.columns.currency] === CURRENCY_EUR)) {
            transaction[P2PS2.columns.id] = row[P2PS2._PEERBERRY.columns.id];
            
            if (!checkDupTxIDs || !P2PS2.platforms.PEERBERRY._txIDs.includes(transaction[P2PS2.columns.id])) {
                // only date, no time data in statements
                transaction[P2PS2.columns.date] = new Date(row[P2PS2._PEERBERRY.columns.date]);
                transaction[P2PS2.columns.type] = P2PS2.types.invalid;
                transaction[P2PS2.columns.subType] = P2PS2.subTypes.na;
                // transaction[P2PS2.columns.currency] = row[P2PS2._PEERBERRY.columns.currency];

                const rowType = row[P2PS2._PEERBERRY.columns.type];

                switch (rowType) {
                    // TODO: transaction[P2PS2.columns.subType] = P2PS2.subTypes.loyalty;
                    case P2PS2._PEERBERRY.types.referralBonus:
                        transaction[P2PS2.columns.type] = P2PS2.types.bonus;
                        transaction[P2PS2.columns.subType] = P2PS2.subTypes.referral;
                        P2PS2.platforms.PEERBERRY.balance += transaction[P2PS2.columns.value];
                        P2PS2.platforms.PEERBERRY.bonuses += transaction[P2PS2.columns.value];
                        break;
                    case P2PS2._PEERBERRY.types.deposit:
                        transaction[P2PS2.columns.type] = P2PS2.types.deposit;
                        P2PS2.platforms.PEERBERRY.balanceDepWid += transaction[P2PS2.columns.value];
                        P2PS2.platforms.PEERBERRY.balance += transaction[P2PS2.columns.value];
                        break;
                    case P2PS2._PEERBERRY.types.withdrawal:
                        transaction[P2PS2.columns.type] = P2PS2.types.withdrawal;
                        transaction[P2PS2.columns.value] *= -1.0;
                        P2PS2.platforms.PEERBERRY.balanceDepWid += transaction[P2PS2.columns.value];
                        P2PS2.platforms.PEERBERRY.balance += transaction[P2PS2.columns.value];
                        break;
                    case P2PS2._PEERBERRY.types.repaymentInterest:
                        transaction[P2PS2.columns.country] = "[UNKNOWN] PEERBERRY";
                        transaction[P2PS2.columns.type] = P2PS2.types.interest;
                        P2PS2.platforms.PEERBERRY.balance += transaction[P2PS2.columns.value];
                        P2PS2.platforms.PEERBERRY.interests += transaction[P2PS2.columns.value];
                        break;
                    case P2PS2._PEERBERRY.types.buybackInterest:
                        transaction[P2PS2.columns.country] = "[UNKNOWN] PEERBERRY";
                        transaction[P2PS2.columns.type] = P2PS2.types.interest;
                        transaction[P2PS2.columns.subType] = P2PS2.subTypes.buyback;
                        P2PS2.platforms.PEERBERRY.balance += transaction[P2PS2.columns.value];
                        P2PS2.platforms.PEERBERRY.interests += transaction[P2PS2.columns.value];
                        break;
                    case P2PS2._PEERBERRY.types.repaymentPrincipal:
                        transaction[P2PS2.columns.country] = "[UNKNOWN] PEERBERRY";
                        transaction[P2PS2.columns.type] = P2PS2.types.principal;

                        P2PS2fn.updateCurrentInvestment(
                            "PEERBERRY",
                            row[P2PS2._PEERBERRY.columns.loanId],
                            transaction
                        );
                        break;
                    case P2PS2._PEERBERRY.types.buybackPrincipal:
                        transaction[P2PS2.columns.country] = "[UNKNOWN] PEERBERRY";
                        transaction[P2PS2.columns.type] = P2PS2.types.principal;
                        transaction[P2PS2.columns.subType] = P2PS2.subTypes.buyback;

                        P2PS2fn.updateCurrentInvestment(
                            "PEERBERRY",
                            row[P2PS2._PEERBERRY.columns.loanId],
                            transaction
                        );
                        break;
                    case P2PS2._PEERBERRY.types.investment:
                        transaction[P2PS2.columns.country] = "[UNKNOWN] PEERBERRY";
                        transaction[P2PS2.columns.type] = P2PS2.types.investment;
                        transaction[P2PS2.columns.value] *= -1.0;

                        P2PS2fn.updateCurrentInvestment(
                            "PEERBERRY",
                            row[P2PS2._PEERBERRY.columns.loanId],
                            transaction
                        );
                        break;
                }

                if (transaction[P2PS2.columns.type] !== P2PS2.types.invalid) {
                    P2PS2.platforms.PEERBERRY.balanceAvail += transaction[P2PS2.columns.value];

                    P2PS2.platforms.PEERBERRY.transactions.push(transaction);
                    P2PS2.platforms.PEERBERRY._txIDs.push(transaction[P2PS2.columns.id]);
                }
                // else {
                //     console.warn("Ignored row", i, row);
                // }
            }
        }
    }

    P2PS2fn.onStatementLoaded("PEERBERRY");
});

document.querySelector("#peerberry-investments").addEventListener("change", async (event) => {
    console.time("[PEERBERRY] Invesments loading");

    P2PS2.chart.containerTag.classList.add("d-none");
    P2PS2.settings.blockingProgressTag.classList.remove("d-none");

    const sheetJSON = await P2PS2fn.loadInvestmentsToJSON(event.target.files[0]);

    if (!P2PS2fn.checkInvestmentsJSON(sheetJSON, "_PEERBERRY")) {
        P2PS2.settings.blockingProgressTag.classList.add("d-none");

        return;
    }

    for (const row of sheetJSON) {
        // NOTE: investments file add "ID-" in front of loan id as given per statement file...
        const loanId = row[P2PS2._PEERBERRY.investmentsColumns.loanId].replace("ID-", "");

        if (P2PS2.platforms.PEERBERRY.currentInvestments[loanId]) {
            // set missing country for current investment
            const country = P2PS2._PEERBERRY.countries[row[P2PS2._PEERBERRY.investmentsColumns.country]];

            if (country) {
                P2PS2.platforms.PEERBERRY.currentInvestments[loanId].country = country;
            }
            else {
                P2PS2fn.dom.showToast(
                    "danger", 
                    `PEERBERRY: Unrecognized country ${row[P2PS2._PEERBERRY.investmentsColumns.country]}`,
                    2000
                );
            }
        }
        else {
            P2PS2fn.dom.showToast(
                "warning",
                `PEERBERRY: Loan ${loanId} not in account statement.`,
                1000
            );
        }
    }

    P2PS2fn.removeStaleCurrentInvestments("PEERBERRY");

    P2PS2.settings.blockingProgressTag.classList.add("d-none");

    console.timeEnd("[PEERBERRY] Invesments loading");
    P2PS2fn.dom.showToast("success", `PEERBERRY: New investments data loaded.`);
});

document.querySelector("#robocash-statement").addEventListener("change", async (event) => {
    P2PS2fn.onStatementLoad("ROBOCASH");

    if (!P2PS2.settings.multiload) {
        P2PS2.platforms.ROBOCASH = P2PS2fn.resetPlatformData();
    }

    const sheetJSON = await P2PS2fn.loadStatementToJSON(event.target.files[0]);

    if (!P2PS2fn.checkStatementJSON(sheetJSON, "_ROBOCASH")) {
        P2PS2.settings.blockingProgressTag.classList.add("d-none");

        return;
    }

    // NOTE: avoid unnecessary checking of tx IDs if no previous loading took place
    const checkDupTxIDs = P2PS2.settings.multiload && (P2PS2.platforms.ROBOCASH._txIDs.length > 0);

    for (const row of sheetJSON) {
        const transaction = {};
        transaction[P2PS2.columns.value] = row[P2PS2._ROBOCASH.columns.amount];

        if (transaction[P2PS2.columns.value] !== 0.0) {
            transaction[P2PS2.columns.id] = row[P2PS2._ROBOCASH.columns.txId];

            if (!checkDupTxIDs || !P2PS2.platforms.ROBOCASH._txIDs.includes(transaction[P2PS2.columns.id])) {
                transaction[P2PS2.columns.date] = new Date(row[P2PS2._ROBOCASH.columns.dateTime]);
                transaction[P2PS2.columns.type] = P2PS2.types.invalid;
                transaction[P2PS2.columns.subType] = P2PS2.subTypes.na;
                // anything not matching (key) will result in undefined, which is what we want here (irrelevant rows)
                transaction[P2PS2.columns.country] = P2PS2._ROBOCASH.countries[row[P2PS2._ROBOCASH.columns.loCountry]];

                const rowType = row[P2PS2._ROBOCASH.columns.operationType];

                switch (rowType) {
                    case P2PS2._ROBOCASH.types.addingFunds:
                        transaction[P2PS2.columns.type] = P2PS2.types.deposit;
                        P2PS2.platforms.ROBOCASH.balanceDepWid += transaction[P2PS2.columns.value];
                        P2PS2.platforms.ROBOCASH.balance += transaction[P2PS2.columns.value];
                        break;
                    case P2PS2._ROBOCASH.types.withdrawingFunds:
                        transaction[P2PS2.columns.type] = P2PS2.types.withdrawal;
                        transaction[P2PS2.columns.value] *= -1.0;
                        P2PS2.platforms.ROBOCASH.balanceDepWid += transaction[P2PS2.columns.value];
                        P2PS2.platforms.ROBOCASH.balance += transaction[P2PS2.columns.value];
                        break;
                    case P2PS2._ROBOCASH.types.investingToLoan:
                        transaction[P2PS2.columns.type] = P2PS2.types.investment;
                        transaction[P2PS2.columns.value] *= -1.0;

                        P2PS2fn.updateCurrentInvestment(
                            "ROBOCASH",
                            row[P2PS2._ROBOCASH.columns.creditPartId],
                            transaction
                        );
                        break;
                    case P2PS2._ROBOCASH.types.principal1:
                    case P2PS2._ROBOCASH.types.principal2:
                        // XXX what's the diff between 1 and 2? buyback?
                        transaction[P2PS2.columns.type] = P2PS2.types.principal;

                        P2PS2fn.updateCurrentInvestment(
                            "ROBOCASH",
                            row[P2PS2._ROBOCASH.columns.creditPartId],
                            transaction
                        );
                        break;
                    case P2PS2._ROBOCASH.types.interest1:
                    case P2PS2._ROBOCASH.types.interest2:
                        // XXX what's the diff between 1 and 2? buyback?
                        transaction[P2PS2.columns.type] = P2PS2.types.interest;
                        P2PS2.platforms.ROBOCASH.balance += transaction[P2PS2.columns.value];
                        P2PS2.platforms.ROBOCASH.interests += transaction[P2PS2.columns.value];
                        break;
                    case P2PS2._ROBOCASH.types.loyaltyInterest1:
                    case P2PS2._ROBOCASH.types.loyaltyInterest2:
                        // XXX what's the diff between 1 and 2? buyback?
                        // NOTE: not counted as a bonus since this is the extra income when balance is above 1k
                        transaction[P2PS2.columns.type] = P2PS2.types.bonus;
                        transaction[P2PS2.columns.subType] = P2PS2.subTypes.loyalty;
                        P2PS2.platforms.ROBOCASH.balance += transaction[P2PS2.columns.value];
                        P2PS2.platforms.ROBOCASH.bonuses += transaction[P2PS2.columns.value];
                        break;
                    case P2PS2._ROBOCASH.types.welcomeBonus:
                        transaction[P2PS2.columns.type] = P2PS2.types.bonus;
                        transaction[P2PS2.columns.subType] = P2PS2.subTypes.referral;
                        P2PS2.platforms.ROBOCASH.balance += transaction[P2PS2.columns.value];
                        P2PS2.platforms.ROBOCASH.bonuses += transaction[P2PS2.columns.value];
                        break;
                }

                if (transaction[P2PS2.columns.type] !== P2PS2.types.invalid) {
                    P2PS2.platforms.ROBOCASH.balanceAvail += transaction[P2PS2.columns.value];

                    P2PS2.platforms.ROBOCASH.transactions.push(transaction);
                    P2PS2.platforms.ROBOCASH._txIDs.push(transaction[P2PS2.columns.id]);
                }
                // else {
                //     console.warn("Ignored row", i, row);
                // }
            }
        }
    }

    P2PS2fn.onStatementLoaded("ROBOCASH");
});

document.querySelector("#twino-statement").addEventListener("change", async (event) => {
    P2PS2fn.onStatementLoad("TWINO");

    if (!P2PS2.settings.multiload) {
        P2PS2.platforms.TWINO = P2PS2fn.resetPlatformData();
    }

    const sheetJSON = await P2PS2fn.loadStatementToJSON(event.target.files[0]);

    if (!P2PS2fn.checkStatementJSON(sheetJSON, "_TWINO")) {
        P2PS2.settings.blockingProgressTag.classList.add("d-none");

        return;
    }
    
    // NOTE: avoid unnecessary checking of tx IDs if no previous loading took place
    const checkDupTxIDs = P2PS2.settings.multiload && (P2PS2.platforms.TWINO._txIDs.length > 0);

    // newest is first, we want the opposite
    // NOTE: this helps on date sorting conflicts (order of appearance takes second priority)
    sheetJSON.reverse();

    for (const row of sheetJSON) {
        const transaction = {};
        // according to FAQ, account value is determined EUR or GBP based on first deposit
        // assuming amountEUR is the EUR equivalent if localCurrency !== EUR
        transaction[P2PS2.columns.value] = row[P2PS2._TWINO.columns.amountEUR];

        if (transaction[P2PS2.columns.value] !== 0.0) {
            transaction[P2PS2.columns.id] = row[P2PS2._TWINO.columns.txID];

            if (!checkDupTxIDs || !P2PS2.platforms.TWINO._txIDs.includes(transaction[P2PS2.columns.id])) {
                transaction[P2PS2.columns.date] = new Date(row[P2PS2._TWINO.columns.procDate]);
                transaction[P2PS2.columns.type] = P2PS2.types.invalid;
                transaction[P2PS2.columns.subType] = P2PS2.subTypes.na;
                // transaction[P2PS2.columns.currency] = row[P2PS2._TWINO.columns.localCurrency];

                const rowType = row[P2PS2._TWINO.columns.description];
                const rowSubType = row[P2PS2._TWINO.columns.type];

                switch (rowType) {
                    case P2PS2._TWINO.types.interest:
                        switch (rowSubType) {
                            case P2PS2._TWINO.subTypes.buyShares:
                                // sale
                                transaction[P2PS2.columns.country] = P2PS2fn.TWINO.getLoanCountry(row);
                                transaction[P2PS2.columns.type] = P2PS2.types.interest;
                                P2PS2.platforms.TWINO.balance += transaction[P2PS2.columns.value];
                                P2PS2.platforms.TWINO.interests += transaction[P2PS2.columns.value];
                                break;
                            case P2PS2._TWINO.subTypes.referral:
                                transaction[P2PS2.columns.type] = P2PS2.types.bonus;
                                transaction[P2PS2.columns.subType] = P2PS2.subTypes.referral;
                                P2PS2.platforms.TWINO.balance += transaction[P2PS2.columns.value];
                                P2PS2.platforms.TWINO.bonuses += transaction[P2PS2.columns.value];
                                break;
                            case P2PS2._TWINO.subTypes.cashback:
                                transaction[P2PS2.columns.type] = P2PS2.types.bonus;
                                transaction[P2PS2.columns.subType] = P2PS2.subTypes.cashback;
                                P2PS2.platforms.TWINO.balance += transaction[P2PS2.columns.value];
                                P2PS2.platforms.TWINO.bonuses += transaction[P2PS2.columns.value];
                                break;
                            case P2PS2._TWINO.subTypes.schedule:
                            case P2PS2._TWINO.subTypes.extension:
                            case P2PS2._TWINO.subTypes.repayment:
                                transaction[P2PS2.columns.country] = P2PS2fn.TWINO.getLoanCountry(row);
                                transaction[P2PS2.columns.type] = P2PS2.types.interest;
                                P2PS2.platforms.TWINO.balance += transaction[P2PS2.columns.value];
                                P2PS2.platforms.TWINO.interests += transaction[P2PS2.columns.value];
                                break;
                            case P2PS2._TWINO.subTypes.buyback:
                                transaction[P2PS2.columns.country] = P2PS2fn.TWINO.getLoanCountry(row);
                                transaction[P2PS2.columns.type] = P2PS2.types.interest;
                                transaction[P2PS2.columns.subType] = P2PS2.subTypes.buyback;
                                P2PS2.platforms.TWINO.balance += transaction[P2PS2.columns.value];
                                P2PS2.platforms.TWINO.interests += transaction[P2PS2.columns.value];
                                break;
                        }
                        break;
                    case P2PS2._TWINO.types.principal:
                        switch (rowSubType) {
                            case P2PS2._TWINO.subTypes.buyShares:
                                transaction[P2PS2.columns.country] = P2PS2fn.TWINO.getLoanCountry(row);

                                if (transaction[P2PS2.columns.value] < 0.0) {
                                    transaction[P2PS2.columns.type] = P2PS2.types.investment;
                                }
                                else {
                                    // sale
                                    transaction[P2PS2.columns.type] = P2PS2.types.principal;
                                }

                                P2PS2fn.updateCurrentInvestment(
                                    "TWINO",
                                    row[P2PS2._TWINO.columns.loanNumber],
                                    transaction
                                );
                                break;
                            case P2PS2._TWINO.subTypes.buyback:
                                transaction[P2PS2.columns.country] = P2PS2fn.TWINO.getLoanCountry(row);
                                transaction[P2PS2.columns.type] = P2PS2.types.principal;
                                transaction[P2PS2.columns.subType] = P2PS2.subTypes.buyback;

                                P2PS2fn.updateCurrentInvestment(
                                    "TWINO",
                                    row[P2PS2._TWINO.columns.loanNumber],
                                    transaction
                                );
                                break;
                            case P2PS2._TWINO.subTypes.extension:
                            case P2PS2._TWINO.subTypes.repayment:
                                transaction[P2PS2.columns.country] = P2PS2fn.TWINO.getLoanCountry(row);
                                transaction[P2PS2.columns.type] = P2PS2.types.principal;

                                P2PS2fn.updateCurrentInvestment(
                                    "TWINO",
                                    row[P2PS2._TWINO.columns.loanNumber],
                                    transaction
                                );
                                break;
                        }
                        break;
                    default:
                        // typeEmpty
                        switch (rowSubType) {
                            case P2PS2._TWINO.subTypes.funding:
                                if (transaction[P2PS2.columns.value] < 0.0) {
                                    // widthdrawal
                                    transaction[P2PS2.columns.type] = P2PS2.types.withdrawal;
                                }
                                else {
                                    transaction[P2PS2.columns.type] = P2PS2.types.deposit;
                                }

                                P2PS2.platforms.TWINO.balanceDepWid += transaction[P2PS2.columns.value];
                                P2PS2.platforms.TWINO.balance += transaction[P2PS2.columns.value];
                                break;
                        }
                        break;
                }

                if (transaction[P2PS2.columns.type] !== P2PS2.types.invalid) {
                    P2PS2.platforms.TWINO.balanceAvail += transaction[P2PS2.columns.value];

                    P2PS2.platforms.TWINO.transactions.push(transaction);
                    P2PS2.platforms.TWINO._txIDs.push(transaction[P2PS2.columns.id]);
                }
                // else {
                //     console.warn("Ignored row", i, row);
                // }
            }
        }
    }

    P2PS2fn.onStatementLoaded("TWINO");
});

// document.querySelector("#blockfi-statement").addEventListener("change", async (event) => {
// });

document.querySelector("#cryptocom-statement").addEventListener("change", async (event) => {
    P2PS2fn.onStatementLoad("CRYPTOCOM");

    if (!P2PS2.settings.multiload) {
        P2PS2.platforms.CRYPTOCOM = P2PS2fn.resetPlatformData(CURRENCY_USD);
    }

    const sheetJSON = await P2PS2fn.loadStatementToJSON(event.target.files[0]);

    if (!P2PS2fn.checkStatementJSON(sheetJSON, "_CRYPTOCOM")) {
        P2PS2.settings.blockingProgressTag.classList.add("d-none");

        return;
    }
    
    // NOTE: avoid unnecessary checking of tx IDs if no previous loading took place
    const checkDupTxIDs = P2PS2.settings.multiload && (P2PS2.platforms.CRYPTOCOM._txIDs.length > 0);

    // newest is first, we want the opposite
    // NOTE: this helps on date sorting conflicts (order of appearance takes second priority)
    sheetJSON.reverse();

    // support account's "native currency" to avoid FX conversions whenever possible
    let valueColumn = P2PS2._CRYPTOCOM.columns.nativeAmountUSD;

    if (sheetJSON[0][P2PS2._CRYPTOCOM.columns.nativeCurrency] === CURRENCY_EUR) {
        valueColumn = P2PS2._CRYPTOCOM.columns.nativeAmount;
        P2PS2.platforms.CRYPTOCOM.currency = CURRENCY_EUR;
    }

    for (const row of sheetJSON) {
        const transaction = {};
        transaction[P2PS2.columns.value] = row[valueColumn];

        if (transaction[P2PS2.columns.value] !== 0.0) {
            transaction[P2PS2.columns.id] = md5(JSON.stringify(row));

            if (!checkDupTxIDs || !P2PS2.platforms.CRYPTOCOM._txIDs.includes(transaction[P2PS2.columns.id])) {
                transaction[P2PS2.columns.date] = new Date(row[P2PS2._CRYPTOCOM.columns.timestamp]);
                transaction[P2PS2.columns.type] = P2PS2.types.invalid;
                transaction[P2PS2.columns.subType] = P2PS2.subTypes.na;

                const rowType = row[P2PS2._CRYPTOCOM.columns.txKind];

                switch (rowType) {
                    case P2PS2._CRYPTOCOM.types.vibanDeposit:
                        transaction[P2PS2.columns.type] = P2PS2.types.deposit;
                        P2PS2.platforms.CRYPTOCOM.balanceDepWid += transaction[P2PS2.columns.value];
                        P2PS2.platforms.CRYPTOCOM.balance += transaction[P2PS2.columns.value];
                        break;
                    // TODO crypto deposit?
                    // TODO CONFIRM
                    case P2PS2._CRYPTOCOM.types.vibanWithdrawal:
                    case P2PS2._CRYPTOCOM.types.cardTopUp:
                        transaction[P2PS2.columns.type] = P2PS2.types.withdrawal;
                        P2PS2.platforms.CRYPTOCOM.balanceDepWid += transaction[P2PS2.columns.value];
                        P2PS2.platforms.CRYPTOCOM.balance += transaction[P2PS2.columns.value];
                        break;
                    // TODO crypto withdrawal?
                    case P2PS2._CRYPTOCOM.types.referral:
                        // referral bonus is always in USD, even if native currency is EUR,
                        // this should be the only case, so accumulation of "errors" from converting at today's FX should remain minimal
                        if (P2PS2.platforms.CRYPTOCOM.currency === CURRENCY_EUR) {
                            transaction[P2PS2.columns.value] *= P2PS2.settings.fxUSDEUR;
                        }

                        transaction[P2PS2.columns.type] = P2PS2.types.bonus;
                        transaction[P2PS2.columns.subType] = P2PS2.subTypes.referral;
                        P2PS2.platforms.CRYPTOCOM.balance += transaction[P2PS2.columns.value];
                        P2PS2.platforms.CRYPTOCOM.bonuses += transaction[P2PS2.columns.value];
                        break;
                    case P2PS2._CRYPTOCOM.types.lockupLock:
                        transaction[P2PS2.columns.country] = "[CRYPTO] CRYPTOCOM";
                        // considered as investment only for the purpose of "not being available"
                        // CRO stake doesn't actually earn anything (used for benefits unlocking / card application)
                        transaction[P2PS2.columns.type] = P2PS2.types.investment;

                        P2PS2fn.updateCurrentInvestment(
                            "CRYPTOCOM",
                            // use txDesc to differentiate from "earn"'s currency "CRO Stake" vs "CRO"
                            row[P2PS2._CRYPTOCOM.columns.txDesc],
                            transaction
                        );
                        break;
                    case P2PS2._CRYPTOCOM.types.cryptoEarnCreated:
                        transaction[P2PS2.columns.country] = "[CRYPTO] CRYPTOCOM";
                        transaction[P2PS2.columns.type] = P2PS2.types.investment;

                        P2PS2fn.updateCurrentInvestment(
                            "CRYPTOCOM",
                            row[P2PS2._CRYPTOCOM.columns.currency],
                            transaction
                        );
                        break;
                    case P2PS2._CRYPTOCOM.types.cryptoEarnWithdrawn:
                        transaction[P2PS2.columns.country] = "[CRYPTO] CRYPTOCOM";
                        transaction[P2PS2.columns.type] = P2PS2.types.principal;

                        P2PS2fn.updateCurrentInvestment(
                            "CRYPTOCOM",
                            row[P2PS2._CRYPTOCOM.columns.currency],
                            transaction
                        );
                        break;
                    case P2PS2._CRYPTOCOM.types.cryptoEarnInterest:
                        transaction[P2PS2.columns.country] = "[CRYPTO] CRYPTOCOM";
                        transaction[P2PS2.columns.type] = P2PS2.types.interest;
                        P2PS2.platforms.CRYPTOCOM.balance += transaction[P2PS2.columns.value];
                        P2PS2.platforms.CRYPTOCOM.interests += transaction[P2PS2.columns.value];
                        break;
                    case P2PS2._CRYPTOCOM.types.rewardsDeposit:
                    case P2PS2._CRYPTOCOM.types.cardCashback:
                        transaction[P2PS2.columns.type] = P2PS2.types.bonus;
                        P2PS2.platforms.CRYPTOCOM.balance += transaction[P2PS2.columns.value];
                        P2PS2.platforms.CRYPTOCOM.bonuses += transaction[P2PS2.columns.value];
                        break;
                }

                if (transaction[P2PS2.columns.type] !== P2PS2.types.invalid) {
                    P2PS2.platforms.CRYPTOCOM.balanceAvail += transaction[P2PS2.columns.value];

                    P2PS2.platforms.CRYPTOCOM.transactions.push(transaction);
                    P2PS2.platforms.CRYPTOCOM._txIDs.push(transaction[P2PS2.columns.id]);
                }
                // else {
                //     console.warn("Ignored row", i, row);
                // }
            }
        }
    }

    P2PS2fn.onStatementLoaded("CRYPTOCOM");
});

document.querySelector("#nexo-statement").addEventListener("change", async (event) => {
    P2PS2fn.onStatementLoad("NEXO");

    if (!P2PS2.settings.multiload) {
        P2PS2.platforms.NEXO = P2PS2fn.resetPlatformData(CURRENCY_USD);
    }

    const sheetJSON = await P2PS2fn.loadStatementToJSON(event.target.files[0]);

    if (!P2PS2fn.checkStatementJSON(sheetJSON, "_NEXO")) {
        P2PS2.settings.blockingProgressTag.classList.add("d-none");

        return;
    }
    
    // NOTE: avoid unnecessary checking of tx IDs if no previous loading took place
    const checkDupTxIDs = P2PS2.settings.multiload && (P2PS2.platforms.NEXO._txIDs.length > 0);

    // newest is first, we want the opposite
    // NOTE: this helps on date sorting conflicts (order of appearance takes second priority)
    sheetJSON.reverse();

    for (const row of sheetJSON) {
        const transaction = {};
        transaction[P2PS2.columns.value] = row[P2PS2._NEXO.columns.usdEquiv];

        if (transaction[P2PS2.columns.value] !== 0.0) {
            transaction[P2PS2.columns.id] = row[P2PS2._NEXO.columns.tx];

            if (!checkDupTxIDs || !P2PS2.platforms.NEXO._txIDs.includes(transaction[P2PS2.columns.id])) {
                transaction[P2PS2.columns.date] = new Date(row[P2PS2._NEXO.columns.dateTime]);
                transaction[P2PS2.columns.type] = P2PS2.types.invalid;
                transaction[P2PS2.columns.subType] = P2PS2.subTypes.na;
                // currency here is trading pairs, not useful

                const rowType = row[P2PS2._NEXO.columns.type];

                switch (rowType) {
                    case P2PS2._NEXO.types.depositToExchange:
                        transaction[P2PS2.columns.type] = P2PS2.types.deposit;
                        P2PS2.platforms.NEXO.balanceDepWid += transaction[P2PS2.columns.value];
                        P2PS2.platforms.NEXO.balance += transaction[P2PS2.columns.value];
                        break;
                    case P2PS2._NEXO.types.deposit:
                        // don't count deposits derived from issued credit lines
                        if (!row[P2PS2._NEXO.columns.details].includes("Credit Granting Top Up")) {
                            transaction[P2PS2.columns.type] = P2PS2.types.deposit;
                            P2PS2.platforms.NEXO.balanceDepWid += transaction[P2PS2.columns.value];
                            P2PS2.platforms.NEXO.balance += transaction[P2PS2.columns.value];
                        }
                        break;
                    // case P2PS2._NEXO.types.withdrawal fiat & crypto?
                    case P2PS2._NEXO.types.exchangeCashback:
                        transaction[P2PS2.columns.type] = P2PS2.types.bonus;
                        transaction[P2PS2.columns.subType] = P2PS2.subTypes.cashback;
                        P2PS2.platforms.NEXO.balance += transaction[P2PS2.columns.value];
                        P2PS2.platforms.NEXO.bonuses += transaction[P2PS2.columns.value];
                        break;
                    case P2PS2._NEXO.types.lockingTermDeposit:
                        transaction[P2PS2.columns.country] = "[CRYPTO] NEXO";
                        transaction[P2PS2.columns.type] = P2PS2.types.investment;
                        transaction[P2PS2.columns.value] *= -1.0;

                        P2PS2fn.updateCurrentInvestment(
                            "NEXO",
                            row[P2PS2._NEXO.columns.currency],
                            transaction
                        );
                        break;
                    case P2PS2._NEXO.types.interestAdditional:
                        transaction[P2PS2.columns.country] = "[CRYPTO] NEXO";
                        transaction[P2PS2.columns.type] = P2PS2.types.fee;
                        transaction[P2PS2.columns.value] *= -1.0;
                        P2PS2.platforms.NEXO.balance += transaction[P2PS2.columns.value];
                        P2PS2.platforms.NEXO.fees += transaction[P2PS2.columns.value];
                        break;
                    case P2PS2._NEXO.types.administrator:
                        transaction[P2PS2.columns.type] = P2PS2.types.assimilation;

                        if (transaction[P2PS2._NEXO.columns.amount] < 0.0) {
                            transaction[P2PS2.columns.value] *= -1.0;
                        }

                        P2PS2.platforms.NEXO.balance += transaction[P2PS2.columns.value];
                        break;
                    case P2PS2._NEXO.types.interest:
                        transaction[P2PS2.columns.country] = "[CRYPTO] NEXO";
                        transaction[P2PS2.columns.type] = P2PS2.types.interest;
                        P2PS2.platforms.NEXO.balance += transaction[P2PS2.columns.value];
                        P2PS2.platforms.NEXO.interests += transaction[P2PS2.columns.value];
                        break;
                }

                if (transaction[P2PS2.columns.type] !== P2PS2.types.invalid) {
                    P2PS2.platforms.NEXO.balanceAvail += transaction[P2PS2.columns.value];

                    P2PS2.platforms.NEXO.transactions.push(transaction);
                    P2PS2.platforms.NEXO._txIDs.push(transaction[P2PS2.columns.id]);
                }
                // else {
                //     console.warn("Ignored row", i, row);
                // }
            }
        }
    }

    P2PS2fn.onStatementLoaded("NEXO");
});

// document.querySelector("#youhodler-statement").addEventListener("change", async (event) => {
// });