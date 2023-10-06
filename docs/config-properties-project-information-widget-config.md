## projectInformation Type

`object` ([Project Information Widget Config](config-properties-project-information-widget-config.md))

# projectInformation Properties

| Property                                            | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                                               |
| :-------------------------------------------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [commentsTableUrl](#commentstableurl)               | `string`  | Required | cannot be null | [WFRC RTP Projects Application Configuration](config-properties-project-information-widget-config-properties-comments-table-url.md "https://wfrc.org/rtp-2023-adopted-map/config.schema.json#/properties/projectInformation/properties/commentsTableUrl")                |
| [fieldNames](#fieldnames)                           | `object`  | Required | cannot be null | [WFRC RTP Projects Application Configuration](config-properties-project-information-widget-config-properties-field-names.md "https://wfrc.org/rtp-2023-adopted-map/config.schema.json#/properties/projectInformation/properties/fieldNames")                             |
| [showComments](#showcomments)                       | `boolean` | Required | cannot be null | [WFRC RTP Projects Application Configuration](config-properties-project-information-widget-config-properties-show-the-comments-widget.md "https://wfrc.org/rtp-2023-adopted-map/config.schema.json#/properties/projectInformation/properties/showComments")              |
| [newCommentsEnabled](#newcommentsenabled)           | `boolean` | Required | cannot be null | [WFRC RTP Projects Application Configuration](config-properties-project-information-widget-config-properties-new-comments-enabled.md "https://wfrc.org/rtp-2023-adopted-map/config.schema.json#/properties/projectInformation/properties/newCommentsEnabled")            |
| [newCommentsEnabledUntil](#newcommentsenableduntil) | `string`  | Required | cannot be null | [WFRC RTP Projects Application Configuration](config-properties-project-information-widget-config-properties-new-comments-enabled-until.md "https://wfrc.org/rtp-2023-adopted-map/config.schema.json#/properties/projectInformation/properties/newCommentsEnabledUntil") |

## commentsTableUrl

The URL to the feature service endpoint for the comments table

`commentsTableUrl`

*   is required

*   Type: `string` ([Comments Table URL](config-properties-project-information-widget-config-properties-comments-table-url.md))

*   cannot be null

*   defined in: [WFRC RTP Projects Application Configuration](config-properties-project-information-widget-config-properties-comments-table-url.md "https://wfrc.org/rtp-2023-adopted-map/config.schema.json#/properties/projectInformation/properties/commentsTableUrl")

### commentsTableUrl Type

`string` ([Comments Table URL](config-properties-project-information-widget-config-properties-comments-table-url.md))

## fieldNames

An object that contains the field names for the comments table

`fieldNames`

*   is required

*   Type: `object` ([Field Names](config-properties-project-information-widget-config-properties-field-names.md))

*   cannot be null

*   defined in: [WFRC RTP Projects Application Configuration](config-properties-project-information-widget-config-properties-field-names.md "https://wfrc.org/rtp-2023-adopted-map/config.schema.json#/properties/projectInformation/properties/fieldNames")

### fieldNames Type

`object` ([Field Names](config-properties-project-information-widget-config-properties-field-names.md))

## showComments

Controls the visibility of the entire comments widget (existing comments and new comment form).

`showComments`

*   is required

*   Type: `boolean` ([Show the comments widget](config-properties-project-information-widget-config-properties-show-the-comments-widget.md))

*   cannot be null

*   defined in: [WFRC RTP Projects Application Configuration](config-properties-project-information-widget-config-properties-show-the-comments-widget.md "https://wfrc.org/rtp-2023-adopted-map/config.schema.json#/properties/projectInformation/properties/showComments")

### showComments Type

`boolean` ([Show the comments widget](config-properties-project-information-widget-config-properties-show-the-comments-widget.md))

## newCommentsEnabled

Controls the visibility of the new comment form. Existing comments will be shown regardless of this setting.

`newCommentsEnabled`

*   is required

*   Type: `boolean` ([New Comments Enabled](config-properties-project-information-widget-config-properties-new-comments-enabled.md))

*   cannot be null

*   defined in: [WFRC RTP Projects Application Configuration](config-properties-project-information-widget-config-properties-new-comments-enabled.md "https://wfrc.org/rtp-2023-adopted-map/config.schema.json#/properties/projectInformation/properties/newCommentsEnabled")

### newCommentsEnabled Type

`boolean` ([New Comments Enabled](config-properties-project-information-widget-config-properties-new-comments-enabled.md))

## newCommentsEnabledUntil

The date after which the new comment form will hidden. Existing comments will still be shown.

`newCommentsEnabledUntil`

*   is required

*   Type: `string` ([New Comments Enabled Until](config-properties-project-information-widget-config-properties-new-comments-enabled-until.md))

*   cannot be null

*   defined in: [WFRC RTP Projects Application Configuration](config-properties-project-information-widget-config-properties-new-comments-enabled-until.md "https://wfrc.org/rtp-2023-adopted-map/config.schema.json#/properties/projectInformation/properties/newCommentsEnabledUntil")

### newCommentsEnabledUntil Type

`string` ([New Comments Enabled Until](config-properties-project-information-widget-config-properties-new-comments-enabled-until.md))
