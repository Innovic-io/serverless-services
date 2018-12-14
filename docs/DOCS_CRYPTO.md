#Cryptocurrency

### **URL**:  https://localhost:3000/**cryptocurrency**

**No Parameters**

Returns a JSON object with the currency codes as keys. "15m" is the 15 minutes delayed market price, "last" is the most recent market price, "symbol" is the currency symbol.

Response:

```
{
  "USD" : {"15m" : 478.68, "last" : 478.68, "buy" : 478.55, "sell" : 478.68,  "symbol" : "$"},
  "JPY" : {"15m" : 51033.99, "last" : 51033.99, "buy" : 51020.13, "sell" : 51033.99,  "symbol" : "¥"},
  "CNY" : {"15m" : 2937.05, "last" : 2937.05, "buy" : 2936.25, "sell" : 2937.05,  "symbol" : "¥"},
  "SGD" : {"15m" : 605.39, "last" : 605.39, "buy" : 605.22, "sell" : 605.39,  "symbol" : "$"},
  "HKD" : {"15m" : 3709.91, "last" : 3709.91, "buy" : 3708.9, "sell" : 3709.91,  "symbol" : "$"},
  "CAD" : {"15m" : 526.72, "last" : 526.72, "buy" : 526.58, "sell" : 526.72,  "symbol" : "$"},
  "NZD" : {"15m" : 582.26, "last" : 582.26, "buy" : 582.1, "sell" : 582.26,  "symbol" : "$"},
  "AUD" : {"15m" : 524.61, "last" : 524.61, "buy" : 524.46, "sell" : 524.61,  "symbol" : "$"},
  "CLP" : {"15m" : 283014.81, "last" : 283014.81, "buy" : 282937.95, "sell" : 283014.81,  "symbol" : "$"},
  "GBP" : {"15m" : 297.4, "last" : 297.4, "buy" : 297.32, "sell" : 297.4,  "symbol" : "£"},
  "DKK" : {"15m" : 2756.84, "last" : 2756.84, "buy" : 2756.09, "sell" : 2756.84,  "symbol" : "kr"},
  "SEK" : {"15m" : 3403.41, "last" : 3403.41, "buy" : 3402.49, "sell" : 3403.41,  "symbol" : "kr"},
  "ISK" : {"15m" : 56797.78, "last" : 56797.78, "buy" : 56782.35, "sell" : 56797.78,  "symbol" : "kr"},
  "CHF" : {"15m" : 447.19, "last" : 447.19, "buy" : 447.07, "sell" : 447.19,  "symbol" : "CHF"},
  "BRL" : {"15m" : 1093.06, "last" : 1093.06, "buy" : 1092.77, "sell" : 1093.06,  "symbol" : "R$"},
  "EUR" : {"15m" : 370.13, "last" : 370.13, "buy" : 370.03, "sell" : 370.13,  "symbol" : "€"},
  "RUB" : {"15m" : 17806.28, "last" : 17806.28, "buy" : 17801.44, "sell" : 17806.28,  "symbol" : "RUB"},
  "PLN" : {"15m" : 1557.38, "last" : 1557.38, "buy" : 1556.96, "sell" : 1557.38,  "symbol" : "zł"},
  "THB" : {"15m" : 15398.04, "last" : 15398.04, "buy" : 15393.86, "sell" : 15398.04,  "symbol" : "฿"},
  "KRW" : {"15m" : 494436.55, "last" : 494436.55, "buy" : 494302.27, "sell" : 494436.55,  "symbol" : "₩"},
  "TWD" : {"15m" : 14340.68, "last" : 14340.68, "buy" : 14336.79, "sell" : 14340.68,  "symbol" : "NT$"}

}
```

### **URL**:  https://localhost:3000/**cryptocurrency/?currency=USD&value=500**

Convert x value in the provided currency to btc.



**Parameters**

* currency - A currency code. See list above.
* value - Value to convert.

Returns the value in BTC.

Response:

```
10
```
See more info [here](https://www.blockchain.com/api/exchange_rates_api).
