# Update a Well Reading

## Description
This request allows you to update a well reading if one already exists for this date and well.

## Request

**Type / Endpoint:** `PUT` `https://api.liftstation.cloud/v1/wells`

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

|property|type|notes|
|--------|----|-----|
|pump|int (in quotes)|Must conform to this regular expression `/^[0-9]{1,9}$/`|
|residual|double (in quotes) or null if there is no residual|Must conform to this regular expression: `/^[0-9]\.[0-9]$/`|
|wellId|int (in quotes)||
|date|date (in quotes)|'YYYY-MM-DD'|

### Status Code `200`
**Description:** The reading was stored in the database.
```json
{
  "success": true,
  "message": "Resource updated successfully"
}
```

### Status Code `400`
**Description:** Invalid request body. Please refer to the message you receive for more details, as these can vary.
```json
{
  "success": true,
  "message": "Your residual is formatted incorrectly"
}
```

### Status Code `404`
**Description:** A reading does not exist for the given date and well. You should send a POST request instead to create
the resource.
```json
{
  "success": false,
  "message": "A reading does not exist for this date and well"
}
```


