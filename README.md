# Currency Format

Get format (ISO_4217) of currency.

Use Code, Symbol and formal Name of currency to get format:
```javascript
import CurrencyFormat from 'currency-format.js'

const currencySymbol = '€'
const currencyCode = 'EUR'
const currencyName = 'Euro'

Console.assert(CurrencyFormat(currencySymbol) === CurrencyFormat(currencyCode))
Console.assert(CurrencyFormat(currencySymbol) === CurrencyFormat(currencyName))
Console.log(CurrencyFormat(currencySymbol))
```

### Properties:
* symbol
* code
* name
* name_plural
* symbol_native
* decimal_digits
* symbol_left
* rounding
* integer_separatod
* decimal_separator
* space_amount_symbol

### List of currencies supported:
US Dollar, Canadian Dollar, Euro, United Arab Emirates Dirham, Afghan Afghani, Albanian Lek, Armenian Dram, Argentine Peso, Australian Dollar, Azerbaijani Manat, Bosnia-Herzegovina Convertible Mark, Bangladeshi Taka, Bulgarian Lev, Bahraini Dinar, Burundian Franc, Brunei Dollar, Bolivian Boliviano, Brazilian Real, Botswanan Pula, Belarusian Ruble, Belize Dollar, Congolese Franc, Swiss Franc, Chilean Peso, Chinese Yuan, Colombian Peso, Costa Rican Colón, Cape Verdean Escudo, Czech Republic Koruna, Djiboutian Franc, Danish Krone, Dominican Peso, Algerian Dinar, Estonian Kroon, Egyptian Pound, Eritrean Nakfa, Ethiopian Birr, British Pound Sterling, Georgian Lari, Ghanaian Cedi, Guinean Franc, Guatemalan Quetzal, Hong Kong Dollar, Honduran Lempira, Croatian Kuna, Hungarian Forint, Indonesian Rupiah, Israeli New Sheqel, Indian Rupee, Iraqi Dinar, Iranian Rial, Icelandic Króna, Jamaican Dollar, Jordanian Dinar, Japanese Yen, Kenyan Shilling, Cambodian Riel, Comorian Franc, South Korean Won, Kuwaiti Dinar, Kazakhstani Tenge, Lebanese Pound, Sri Lankan Rupee, Lithuanian Litas, Latvian Lats, Libyan Dinar, Moroccan Dirham, Moldovan Leu, Malagasy Ariary, Macedonian Denar, Myanma Kyat, Macanese Pataca, Mauritian Rupee, Mexican Peso, Malaysian Ringgit, Mozambican Metical, Namibian Dollar, Nigerian Naira, Nicaraguan Córdoba, Norwegian Krone, Nepalese Rupee, New Zealand Dollar, Omani Rial, Panamanian Balboa, Peruvian Nuevo Sol, Philippine Peso, Pakistani Rupee, Polish Zloty, Paraguayan Guarani, Qatari Rial, Romanian Leu, Serbian Dinar, Russian Ruble, Rwandan Franc, Saudi Riyal, Sudanese Pound, Swedish Krona, Singapore Dollar, Somali Shilling, Syrian Pound, Thai Baht, Tunisian Dinar, Tongan Paʻanga, Turkish Lira, Trinidad and Tobago Dollar, New Taiwan Dollar, Tanzanian Shilling, Ukrainian Hryvnia, Ugandan Shilling, Uruguayan Peso, Uzbekistan Som, Venezuelan Bolívar, Vietnamese Dong, CFA Franc BEAC, CFA Franc BCEAO, Yemeni Rial, South African Rand, Zambian Kwacha

## License

currency-format is licensed under the [MIT License](LICENSE).