## additionalProperties Type

`object` ([Project Type](config-definitions-project-type.md))

# additionalProperties Properties

| Property            | Type     | Required | Nullable       | Defined by                                                                                                                                                                                    |
| :------------------ | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [lines](#lines)     | `string` | Required | can be null    | [WFRC RTP Projects Application Configuration](config-definitions-project-type-properties-lines-query.md "https://wfrc.org/??/config.schema.json#/definitions/projectType/properties/lines")   |
| [points](#points)   | `string` | Required | can be null    | [WFRC RTP Projects Application Configuration](config-definitions-project-type-properties-points-query.md "https://wfrc.org/??/config.schema.json#/definitions/projectType/properties/points") |
| [helpTxt](#helptxt) | `string` | Optional | cannot be null | [WFRC RTP Projects Application Configuration](config-definitions-project-type-properties-help-text.md "https://wfrc.org/??/config.schema.json#/definitions/projectType/properties/helpTxt")   |

## lines

The query that will be applied to the line layers

`lines`

*   is required

*   Type: `string` ([Lines Query](config-definitions-project-type-properties-lines-query.md))

*   can be null

*   defined in: [WFRC RTP Projects Application Configuration](config-definitions-project-type-properties-lines-query.md "https://wfrc.org/??/config.schema.json#/definitions/projectType/properties/lines")

### lines Type

`string` ([Lines Query](config-definitions-project-type-properties-lines-query.md))

## points

The query that will be applied to the point layers

`points`

*   is required

*   Type: `string` ([Points Query](config-definitions-project-type-properties-points-query.md))

*   can be null

*   defined in: [WFRC RTP Projects Application Configuration](config-definitions-project-type-properties-points-query.md "https://wfrc.org/??/config.schema.json#/definitions/projectType/properties/points")

### points Type

`string` ([Points Query](config-definitions-project-type-properties-points-query.md))

## helpTxt

Optionally show a '?' popup with help text

`helpTxt`

*   is optional

*   Type: `string` ([Help Text](config-definitions-project-type-properties-help-text.md))

*   cannot be null

*   defined in: [WFRC RTP Projects Application Configuration](config-definitions-project-type-properties-help-text.md "https://wfrc.org/??/config.schema.json#/definitions/projectType/properties/helpTxt")

### helpTxt Type

`string` ([Help Text](config-definitions-project-type-properties-help-text.md))
