export const lockboxItemSchema = {
    //"$schema": "http://json-schema.org/draft-04/schema#",
    "title": "LockboxItem",
    "description": "A single entry in the lockbox store",
    "type": "object",
    "properties": {
        "id": {
            "description": "The unique identifier",
            "type": "integer"
        },

        "title": {
            "description": "Could be a website name, and app name, or things like MyPassportInfo",
            "type": "string"
        },

        "site": {
            "description": "Format TBD: is it <scheme>://<host>, just <host>, or <host>/<path>, etc.",
            "type": "string"
        },

        "username": { "type": "string" },
        "password": { "type": "string" },
        "strength": { "type": "number" }, /* perhaps calculated on-demand? */
        "note": { "type": "string" },

        "dateCreated": { "type": "date-time" },
        "dateModified": { "type": "date-time" },
        "dateLastUsed": { "type": "date-time" },
        "timesUsed:": {
            "description": "Count the times accessed",
            "type": "number"
        },

        "history": {
            "description": "Ordered list of LockboxItem object ids, newest to oldest.",
            "type": "array"
        },

        "isCurrentItem": {
            /* Replace this indicator with a separate list of current items -just using this for demo'ing. */
            "description": "Indicates the current item, thus the tip of the history.",
            "type": "boolean"
        }
    },

    "required": ["username", "password", "isCurrentItem"]
};

export default lockboxItemSchema;
