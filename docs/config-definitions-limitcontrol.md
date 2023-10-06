## limitROW Type

`object` ([Limit to \[no\] ROW Needed config](config-definitions-limitcontrol.md))

# limitROW Properties

| Property          | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                 |
| :---------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [field](#field)   | `string` | Required | cannot be null | [WFRC RTP Projects Application Configuration](config-definitions-limitcontrol-properties-field.md "https://wfrc.org/rtp-2023-adopted-map/config.schema.json#/definitions/limitControl/properties/field")   |
| [labels](#labels) | `array`  | Required | cannot be null | [WFRC RTP Projects Application Configuration](config-definitions-limitcontrol-properties-label.md "https://wfrc.org/rtp-2023-adopted-map/config.schema.json#/definitions/limitControl/properties/labels")  |
| [values](#values) | `array`  | Required | cannot be null | [WFRC RTP Projects Application Configuration](config-definitions-limitcontrol-properties-values.md "https://wfrc.org/rtp-2023-adopted-map/config.schema.json#/definitions/limitControl/properties/values") |
| [modes](#modes)   | `array`  | Required | cannot be null | [WFRC RTP Projects Application Configuration](config-definitions-limitcontrol-properties-modes.md "https://wfrc.org/rtp-2023-adopted-map/config.schema.json#/definitions/limitControl/properties/modes")   |

## field



`field`

*   is required

*   Type: `string` ([Field](config-definitions-limitcontrol-properties-field.md))

*   cannot be null

*   defined in: [WFRC RTP Projects Application Configuration](config-definitions-limitcontrol-properties-field.md "https://wfrc.org/rtp-2023-adopted-map/config.schema.json#/definitions/limitControl/properties/field")

### field Type

`string` ([Field](config-definitions-limitcontrol-properties-field.md))

## labels



`labels`

*   is required

*   Type: `string[]`

*   cannot be null

*   defined in: [WFRC RTP Projects Application Configuration](config-definitions-limitcontrol-properties-label.md "https://wfrc.org/rtp-2023-adopted-map/config.schema.json#/definitions/limitControl/properties/labels")

### labels Type

`string[]`

## values



`values`

*   is required

*   Type: `string[]`

*   cannot be null

*   defined in: [WFRC RTP Projects Application Configuration](config-definitions-limitcontrol-properties-values.md "https://wfrc.org/rtp-2023-adopted-map/config.schema.json#/definitions/limitControl/properties/values")

### values Type

`string[]`

## modes

The modes that this control should be enabled for

`modes`

*   is required

*   Type: `string[]`

*   cannot be null

*   defined in: [WFRC RTP Projects Application Configuration](config-definitions-limitcontrol-properties-modes.md "https://wfrc.org/rtp-2023-adopted-map/config.schema.json#/definitions/limitControl/properties/modes")

### modes Type

`string[]`
