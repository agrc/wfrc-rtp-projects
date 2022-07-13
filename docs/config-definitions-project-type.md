## additionalProperties Type

`object` ([Project Type](config-definitions-project-type.md))

# additionalProperties Properties

| Property                      | Type      | Required | Nullable       | Defined by                                                                                                                                                                                            |
| :---------------------------- | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [lines](#lines)               | `string`  | Required | can be null    | [WFRC RTP Projects Application Configuration](config-definitions-project-type-properties-lines-query.md "https://wfrc.org/??/config.schema.json#/definitions/projectType/properties/lines")           |
| [offByDefault](#offbydefault) | `boolean` | Optional | cannot be null | [WFRC RTP Projects Application Configuration](config-definitions-project-type-properties-off-by-default.md "https://wfrc.org/??/config.schema.json#/definitions/projectType/properties/offByDefault") |
| [points](#points)             | `string`  | Required | can be null    | [WFRC RTP Projects Application Configuration](config-definitions-project-type-properties-points-query.md "https://wfrc.org/??/config.schema.json#/definitions/projectType/properties/points")         |
| [useAnd](#useand)             | `boolean` | Optional | cannot be null | [WFRC RTP Projects Application Configuration](config-definitions-project-type-properties-use-and.md "https://wfrc.org/??/config.schema.json#/definitions/projectType/properties/useAnd")              |

## lines

The query that will be applied to the line layers

`lines`

*   is required

*   Type: `string` ([Lines Query](config-definitions-project-type-properties-lines-query.md))

*   can be null

*   defined in: [WFRC RTP Projects Application Configuration](config-definitions-project-type-properties-lines-query.md "https://wfrc.org/??/config.schema.json#/definitions/projectType/properties/lines")

### lines Type

`string` ([Lines Query](config-definitions-project-type-properties-lines-query.md))

## offByDefault

Whether the associated checkbox is off on app load

`offByDefault`

*   is optional

*   Type: `boolean` ([Off By Default](config-definitions-project-type-properties-off-by-default.md))

*   cannot be null

*   defined in: [WFRC RTP Projects Application Configuration](config-definitions-project-type-properties-off-by-default.md "https://wfrc.org/??/config.schema.json#/definitions/projectType/properties/offByDefault")

### offByDefault Type

`boolean` ([Off By Default](config-definitions-project-type-properties-off-by-default.md))

## points

The query that will be applied to the point layers

`points`

*   is required

*   Type: `string` ([Points Query](config-definitions-project-type-properties-points-query.md))

*   can be null

*   defined in: [WFRC RTP Projects Application Configuration](config-definitions-project-type-properties-points-query.md "https://wfrc.org/??/config.schema.json#/definitions/projectType/properties/points")

### points Type

`string` ([Points Query](config-definitions-project-type-properties-points-query.md))

## useAnd

Whether the query should use AND or OR

`useAnd`

*   is optional

*   Type: `boolean` ([Use AND](config-definitions-project-type-properties-use-and.md))

*   cannot be null

*   defined in: [WFRC RTP Projects Application Configuration](config-definitions-project-type-properties-use-and.md "https://wfrc.org/??/config.schema.json#/definitions/projectType/properties/useAnd")

### useAnd Type

`boolean` ([Use AND](config-definitions-project-type-properties-use-and.md))
