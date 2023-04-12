## WFRC RTP Projects Application Configuration Type

`object` ([WFRC RTP Projects Application Configuration](config.md))

# WFRC RTP Projects Application Configuration Properties

| Property                                  | Type     | Required | Nullable       | Defined by                                                                                                                                                                    |
| :---------------------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [aboutTitle](#abouttitle)                 | `string` | Required | cannot be null | [WFRC RTP Projects Application Configuration](config-properties-about-title.md "https://wfrc.org/??/config.schema.json#/properties/aboutTitle")                               |
| [appTitle](#apptitle)                     | `string` | Required | cannot be null | [WFRC RTP Projects Application Configuration](config-properties-application-title.md "https://wfrc.org/??/config.schema.json#/properties/appTitle")                           |
| [defaultExtent](#defaultextent)           | `object` | Required | cannot be null | [WFRC RTP Projects Application Configuration](config-properties-default-map-extent.md "https://wfrc.org/??/config.schema.json#/properties/defaultExtent")                     |
| [filter](#filter)                         | `object` | Required | cannot be null | [WFRC RTP Projects Application Configuration](config-properties-filter-widget-configuration.md "https://wfrc.org/??/config.schema.json#/properties/filter")                   |
| [layerSelector](#layerselector)           | `object` | Required | cannot be null | [WFRC RTP Projects Application Configuration](config-properties-layerselector.md "https://wfrc.org/??/config.schema.json#/properties/layerSelector")                          |
| [openOnLoad](#openonload)                 | `object` | Required | cannot be null | [WFRC RTP Projects Application Configuration](config-properties-open-on-load.md "https://wfrc.org/??/config.schema.json#/properties/openOnLoad")                              |
| [outFields](#outfields)                   | `array`  | Required | cannot be null | [WFRC RTP Projects Application Configuration](config-properties-out-fields.md "https://wfrc.org/??/config.schema.json#/properties/outFields")                                 |
| [projectInformation](#projectinformation) | `object` | Required | cannot be null | [WFRC RTP Projects Application Configuration](config-properties-project-information-widget-config.md "https://wfrc.org/??/config.schema.json#/properties/projectInformation") |
| [rtpInfoLink](#rtpinfolink)               | `string` | Required | cannot be null | [WFRC RTP Projects Application Configuration](config-properties-rtp-info-link.md "https://wfrc.org/??/config.schema.json#/properties/rtpInfoLink")                            |
| [sherlock](#sherlock)                     | `object` | Required | cannot be null | [WFRC RTP Projects Application Configuration](config-properties-sherlock-widget-config.md "https://wfrc.org/??/config.schema.json#/properties/sherlock")                      |
| [splashScreen](#splashscreen)             | `object` | Required | cannot be null | [WFRC RTP Projects Application Configuration](config-properties-splash-screen-config.md "https://wfrc.org/??/config.schema.json#/properties/splashScreen")                    |
| [translations](#translations)             | `object` | Required | cannot be null | [WFRC RTP Projects Application Configuration](config-properties-translations.md "https://wfrc.org/??/config.schema.json#/properties/translations")                            |
| [webMapId](#webmapid)                     | `string` | Required | cannot be null | [WFRC RTP Projects Application Configuration](config-properties-web-map-id.md "https://wfrc.org/??/config.schema.json#/properties/webMapId")                                  |

## aboutTitle

The title of the about dialog

`aboutTitle`

*   is required

*   Type: `string` ([About Title](config-properties-about-title.md))

*   cannot be null

*   defined in: [WFRC RTP Projects Application Configuration](config-properties-about-title.md "https://wfrc.org/??/config.schema.json#/properties/aboutTitle")

### aboutTitle Type

`string` ([About Title](config-properties-about-title.md))

## appTitle

The title of the application

`appTitle`

*   is required

*   Type: `string` ([Application Title](config-properties-application-title.md))

*   cannot be null

*   defined in: [WFRC RTP Projects Application Configuration](config-properties-application-title.md "https://wfrc.org/??/config.schema.json#/properties/appTitle")

### appTitle Type

`string` ([Application Title](config-properties-application-title.md))

## defaultExtent

The default extent of the map on load. Also controls the extent for the home button

`defaultExtent`

*   is required

*   Type: `object` ([Default Map Extent](config-properties-default-map-extent.md))

*   cannot be null

*   defined in: [WFRC RTP Projects Application Configuration](config-properties-default-map-extent.md "https://wfrc.org/??/config.schema.json#/properties/defaultExtent")

### defaultExtent Type

`object` ([Default Map Extent](config-properties-default-map-extent.md))

## filter

Configuration options for the filter widget

`filter`

*   is required

*   Type: `object` ([Filter Widget Configuration](config-properties-filter-widget-configuration.md))

*   cannot be null

*   defined in: [WFRC RTP Projects Application Configuration](config-properties-filter-widget-configuration.md "https://wfrc.org/??/config.schema.json#/properties/filter")

### filter Type

`object` ([Filter Widget Configuration](config-properties-filter-widget-configuration.md))

## layerSelector

Configuration options for the base map selector widget

`layerSelector`

*   is required

*   Type: `object` ([Details](config-properties-layerselector.md))

*   cannot be null

*   defined in: [WFRC RTP Projects Application Configuration](config-properties-layerselector.md "https://wfrc.org/??/config.schema.json#/properties/layerSelector")

### layerSelector Type

`object` ([Details](config-properties-layerselector.md))

## openOnLoad

Controls whether specific map widgets default to be open on page load

`openOnLoad`

*   is required

*   Type: `object` ([Open On Load](config-properties-open-on-load.md))

*   cannot be null

*   defined in: [WFRC RTP Projects Application Configuration](config-properties-open-on-load.md "https://wfrc.org/??/config.schema.json#/properties/openOnLoad")

### openOnLoad Type

`object` ([Open On Load](config-properties-open-on-load.md))

## outFields

The fields that will be requested along with the features displayed in the map

`outFields`

*   is required

*   Type: `string[]`

*   cannot be null

*   defined in: [WFRC RTP Projects Application Configuration](config-properties-out-fields.md "https://wfrc.org/??/config.schema.json#/properties/outFields")

### outFields Type

`string[]`

## projectInformation

Configuration options for the project information widget

`projectInformation`

*   is required

*   Type: `object` ([Project Information Widget Config](config-properties-project-information-widget-config.md))

*   cannot be null

*   defined in: [WFRC RTP Projects Application Configuration](config-properties-project-information-widget-config.md "https://wfrc.org/??/config.schema.json#/properties/projectInformation")

### projectInformation Type

`object` ([Project Information Widget Config](config-properties-project-information-widget-config.md))

## rtpInfoLink

The URL to the RTP Info page

`rtpInfoLink`

*   is required

*   Type: `string` ([RTP Info Link](config-properties-rtp-info-link.md))

*   cannot be null

*   defined in: [WFRC RTP Projects Application Configuration](config-properties-rtp-info-link.md "https://wfrc.org/??/config.schema.json#/properties/rtpInfoLink")

### rtpInfoLink Type

`string` ([RTP Info Link](config-properties-rtp-info-link.md))

## sherlock

Configuration options for the map search widget

`sherlock`

*   is required

*   Type: `object` ([Sherlock Widget Config](config-properties-sherlock-widget-config.md))

*   cannot be null

*   defined in: [WFRC RTP Projects Application Configuration](config-properties-sherlock-widget-config.md "https://wfrc.org/??/config.schema.json#/properties/sherlock")

### sherlock Type

`object` ([Sherlock Widget Config](config-properties-sherlock-widget-config.md))

## splashScreen

Configuration options for the splash screen

`splashScreen`

*   is required

*   Type: `object` ([Splash Screen Config](config-properties-splash-screen-config.md))

*   cannot be null

*   defined in: [WFRC RTP Projects Application Configuration](config-properties-splash-screen-config.md "https://wfrc.org/??/config.schema.json#/properties/splashScreen")

### splashScreen Type

`object` ([Splash Screen Config](config-properties-splash-screen-config.md))

## translations

Contains the translated strings used in the app. Falls back to `en` if there is no other translation. Most strings in the other configs can be translated by using this format: `trans:<key>`. For example: `trans:visionMapTitle`.

`translations`

*   is required

*   Type: `object` ([Translations](config-properties-translations.md))

*   cannot be null

*   defined in: [WFRC RTP Projects Application Configuration](config-properties-translations.md "https://wfrc.org/??/config.schema.json#/properties/translations")

### translations Type

`object` ([Translations](config-properties-translations.md))

## webMapId

The AGOL ID of the web map that will be displayed in the app

`webMapId`

*   is required

*   Type: `string` ([Web Map ID](config-properties-web-map-id.md))

*   cannot be null

*   defined in: [WFRC RTP Projects Application Configuration](config-properties-web-map-id.md "https://wfrc.org/??/config.schema.json#/properties/webMapId")

### webMapId Type

`string` ([Web Map ID](config-properties-web-map-id.md))

# WFRC RTP Projects Application Configuration Definitions

## Definitions group projectType

Reference this group by using

```json
{"$ref":"https://wfrc.org/??/config.schema.json#/definitions/projectType"}
```

| Property          | Type     | Required | Nullable    | Defined by                                                                                                                                                                                    |
| :---------------- | :------- | :------- | :---------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [lines](#lines)   | `string` | Required | can be null | [WFRC RTP Projects Application Configuration](config-definitions-project-type-properties-lines-query.md "https://wfrc.org/??/config.schema.json#/definitions/projectType/properties/lines")   |
| [points](#points) | `string` | Required | can be null | [WFRC RTP Projects Application Configuration](config-definitions-project-type-properties-points-query.md "https://wfrc.org/??/config.schema.json#/definitions/projectType/properties/points") |

### lines

The query that will be applied to the line layers

`lines`

*   is required

*   Type: `string` ([Lines Query](config-definitions-project-type-properties-lines-query.md))

*   can be null

*   defined in: [WFRC RTP Projects Application Configuration](config-definitions-project-type-properties-lines-query.md "https://wfrc.org/??/config.schema.json#/definitions/projectType/properties/lines")

#### lines Type

`string` ([Lines Query](config-definitions-project-type-properties-lines-query.md))

### points

The query that will be applied to the point layers

`points`

*   is required

*   Type: `string` ([Points Query](config-definitions-project-type-properties-points-query.md))

*   can be null

*   defined in: [WFRC RTP Projects Application Configuration](config-definitions-project-type-properties-points-query.md "https://wfrc.org/??/config.schema.json#/definitions/projectType/properties/points")

#### points Type

`string` ([Points Query](config-definitions-project-type-properties-points-query.md))

## Definitions group translation

Reference this group by using

```json
{"$ref":"https://wfrc.org/??/config.schema.json#/definitions/translation"}
```

| Property                        | Type     | Required | Nullable       | Defined by                                                                                                                                                                                           |
| :------------------------------ | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [mapTabsDialog](#maptabsdialog) | `object` | Optional | cannot be null | [WFRC RTP Projects Application Configuration](config-definitions-translation-properties-maptabsdialog.md "https://wfrc.org/??/config.schema.json#/definitions/translation/properties/mapTabsDialog") |
| Additional Properties           | Merged   | Optional | cannot be null | [WFRC RTP Projects Application Configuration](config-definitions-translation-additionalproperties.md "https://wfrc.org/??/config.schema.json#/definitions/translation/additionalProperties")         |

### mapTabsDialog



`mapTabsDialog`

*   is optional

*   Type: `object` ([Details](config-definitions-translation-properties-maptabsdialog.md))

*   cannot be null

*   defined in: [WFRC RTP Projects Application Configuration](config-definitions-translation-properties-maptabsdialog.md "https://wfrc.org/??/config.schema.json#/definitions/translation/properties/mapTabsDialog")

#### mapTabsDialog Type

`object` ([Details](config-definitions-translation-properties-maptabsdialog.md))

### Additional Properties

Additional properties are allowed, as long as they follow this schema:



*   is optional

*   Type: merged type ([Details](config-definitions-translation-additionalproperties.md))

*   cannot be null

*   defined in: [WFRC RTP Projects Application Configuration](config-definitions-translation-additionalproperties.md "https://wfrc.org/??/config.schema.json#/definitions/translation/additionalProperties")

#### additionalProperties Type

merged type ([Details](config-definitions-translation-additionalproperties.md))

one (and only one) of

*   [Untitled string in WFRC RTP Projects Application Configuration](config-definitions-translation-additionalproperties-oneof-0.md "check type definition")

*   [Untitled object in WFRC RTP Projects Application Configuration](config-definitions-translation-additionalproperties-oneof-1.md "check type definition")

## Definitions group limitControl

Reference this group by using

```json
{"$ref":"https://wfrc.org/??/config.schema.json#/definitions/limitControl"}
```

| Property          | Type     | Required | Nullable       | Defined by                                                                                                                                                                               |
| :---------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [field](#field)   | `string` | Required | cannot be null | [WFRC RTP Projects Application Configuration](config-definitions-limitcontrol-properties-field.md "https://wfrc.org/??/config.schema.json#/definitions/limitControl/properties/field")   |
| [labels](#labels) | `array`  | Required | cannot be null | [WFRC RTP Projects Application Configuration](config-definitions-limitcontrol-properties-label.md "https://wfrc.org/??/config.schema.json#/definitions/limitControl/properties/labels")  |
| [values](#values) | `array`  | Required | cannot be null | [WFRC RTP Projects Application Configuration](config-definitions-limitcontrol-properties-values.md "https://wfrc.org/??/config.schema.json#/definitions/limitControl/properties/values") |
| [modes](#modes)   | `array`  | Required | cannot be null | [WFRC RTP Projects Application Configuration](config-definitions-limitcontrol-properties-modes.md "https://wfrc.org/??/config.schema.json#/definitions/limitControl/properties/modes")   |

### field



`field`

*   is required

*   Type: `string` ([Field](config-definitions-limitcontrol-properties-field.md))

*   cannot be null

*   defined in: [WFRC RTP Projects Application Configuration](config-definitions-limitcontrol-properties-field.md "https://wfrc.org/??/config.schema.json#/definitions/limitControl/properties/field")

#### field Type

`string` ([Field](config-definitions-limitcontrol-properties-field.md))

### labels



`labels`

*   is required

*   Type: `string[]`

*   cannot be null

*   defined in: [WFRC RTP Projects Application Configuration](config-definitions-limitcontrol-properties-label.md "https://wfrc.org/??/config.schema.json#/definitions/limitControl/properties/labels")

#### labels Type

`string[]`

### values



`values`

*   is required

*   Type: `string[]`

*   cannot be null

*   defined in: [WFRC RTP Projects Application Configuration](config-definitions-limitcontrol-properties-values.md "https://wfrc.org/??/config.schema.json#/definitions/limitControl/properties/values")

#### values Type

`string[]`

### modes

The modes that this control should be enabled for

`modes`

*   is required

*   Type: `string[]`

*   cannot be null

*   defined in: [WFRC RTP Projects Application Configuration](config-definitions-limitcontrol-properties-modes.md "https://wfrc.org/??/config.schema.json#/definitions/limitControl/properties/modes")

#### modes Type

`string[]`
