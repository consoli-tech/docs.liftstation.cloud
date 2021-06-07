# Add a Well Reading

## Description
This request allows you to enter a reading for a well

## Request

**Type / Endpoint:** `POST` `https://api.liftstation.cloud/v1/wells`

### Request Body
The request body is a JSON Object.

```json
{
    "pump": "5834450",
    "residual": "1.2",
    "wellId": "14",
    "date": "2021-06-07"
}
```

#### Properties
**Note:** Please send all numbers as strings (in quotes)
- pump - `string (int)` Must conform to this regular expression `/^[0-9]{1,9}$/`
- residual `string (double) or null` Must conform to this regular expression `/^[0-9]\.[0-9]$/`
- wellId - `string (int)`
- date - `date` `YYYY-MM-DD`
