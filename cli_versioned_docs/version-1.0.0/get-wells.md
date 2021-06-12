# get wells

**Description:** the `get wells` command returns a list of wells, organized by the route that they belong to. This command
is used to retrieve the well's ID.

The response will be formatted in YAML like syntax. If you are on Windows, you will have the best results using the
Windows Terminal app.

## Example

```bash
$ lscloud get wells
```

```yaml
success: true
data: 
  routes: 
    - 
      name:  Downtown Savannah
      wells: 
        - 
          id:   13
          name: Six Pence
        - 
          id:   14
          name: Civic Center
        - 
          id:   15
          name: Mrs. Wilkes
        - 
          id:   16
          name: Fiddler's
    - 
      name:  Southside Savannah
      wells: 
        - 
          id:   17
          name: Georgia Southern
        - 
          id:   18
          name: Hirano's
        - 
          id:   19
          name: Portman's Music
    - 
      name:  Tybee Island
      wells: 
        - 
          id:   20
          name: Bernie's

```