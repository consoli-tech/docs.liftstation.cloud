# push well reading

**Description:** the `push well reading` command allows you to enter a well reading

## Example
```bash
$ lscloud push well reading --id=20 --pump=3943854
```

|Parameter|Required|Description|
|---------|--------|-----------|
|id|yes|The well ID|
|pump|yes|The pump reading, must conform to this regular expression `/^[0-9]{1,9}$/`|
|date|no|Date of the reading. If omitted the CLI uses the system's date|
|residual|no|The chlorine residual, must conform to this regular expression `/^[0-9]\.[0-9]$/`|
|force|no|Set this to true if you want to override an existing reading for the given well and date. Default value is false.|