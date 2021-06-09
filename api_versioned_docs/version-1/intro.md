# LiftStation.cloud API Documentation

**Base URL:** `https://api.liftstation.cloud/v1/`

## Overview

The LiftStation.cloud API can be used to enter well and lift station readings. This can be used to integrate your
SCADA System.

## Authentication

The API authenticates requests with an API Key and an API Secret. These should be passed as URL params for each 
request you make. 

`https://api.liftstation.cloud/v1/wells?api_key=e42cac9f3f8810e0b17560992f259c11&api_secret=ed7b8cf594881af664f350d380851ace`

## Common Responses

### Status Code `401`

**Description:** The request cannot be authenticated. Please refer to the message for more information.

```json
{
    "success": false,
    "message": "You need to provide 'api_key' and 'api_secret' as URL params."
}
```

```json
{
    "success": false,
    "message": "The API Secret you provided is not valid."
}
```

```json
{
  "success": false,
  "message": "The API Key you provided is not valid"
}
```

