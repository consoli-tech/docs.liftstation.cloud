# Get Wells

## Description
This request will retrieve a list of the wells of your organization. It is used so that
you can get the well IDs, which you will need to enter a reading. Wells are grouped by the route that they belong to.

## Request

**Type / Endpoint:** `GET` `https://api.liftstation.cloud/v1/wells`

## Response

### Status Code: `200`
**Description:** Request was successful.

```json
{
    "success": true,
    "data": {
        "routes": [
            {
                "name": "Downtown Savannah",
                "wells": [
                    {
                        "id": 13,
                        "name": "Six Pence"
                    },
                    {
                        "id": 14,
                        "name": "Civic Center"
                    },
                    {
                        "id": 15,
                        "name": "Mrs. Wilkes"
                    },
                    {
                        "id": 16,
                        "name": "Fiddler's"
                    }
                ]
            },
            {
                "name": "Southside Savannah",
                "wells": [
                    {
                        "id": 17,
                        "name": "Georgia Southern"
                    },
                    {
                        "id": 18,
                        "name": "Hirano's"
                    },
                    {
                        "id": 19,
                        "name": "Portman's Music"
                    }
                ]
            },
            {
                "name": "Tybee Island",
                "wells": [
                    {
                        "id": 20,
                        "name": "Bernie's"
                    }
                ]
            }
        ]
    }
}
```