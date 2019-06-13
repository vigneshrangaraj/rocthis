var FORMS = ['CreateICRForm', 'editICRForm'];

var ELEMENTS = [
    {
        "id": "agencyTrackingNumber",
        "name": "agencyTrackingNumber",
        "type": "text",
        "maxlength": "50"
    },
    {
        "id": "title",
        "name": "title",
        "type": "textarea",
        "maxlength": "200"
    },
    {
        "id": "abstractText",
        "name": "abstract",
        "type": "textarea",
        "maxlength": "200"
    },
    {
        "id": "abstractLabel",
        "name": "abstract",
        "type": "textarea",
        "maxlength": "200"
    },
    {
        "id": "titleLabel",
        "name": "title",
        "type": "text",
        "maxlength": "200"
    },
    {
        "id": "typeCollectionLabel",
        "name": "typeCollectionLabel",
        "type": "select"
    },
    {
        "id": "typeCollection",
        "name": "typeCollection",
        "type": "select"
    },
    {
        "id": "requestExpirationDateLabel",
        "ref": "exp_date",
        "ref_id": "otherDateLabel",
        "ref_maxlength": "7",
        "name": "requestExpirationDate",
        "type": "select"
    },
    {
        "id": "isStatisticalMethod",
        "name": "has_stats",
        "type": "radio"
    },
    {
        "id": "isPrivacyImpact",
        "name": "has_pia",
        "type": "radio"
    },
    {
        "id": "isHealthCareFlag",
        "name": "is_aca",
        "type": "radio"
    },
    {
        "id": "isDoddFrankFlag",
        "name": "is_dodd",
        "type": "radio"
    },
    {
        "id": "isStimulusFlag",
        "name": "is_stimulus",
        "type": "radio"
    },
    {
        "id": "input_contactSelectionId",
        "type": "custom",
        "name": "contact"
    },
    {
        "id": "rinLabel",
        "type": "radio",
        "name": "text"
    },
    {
        "id": "rinLabel",
        "name": "rin"
    },
    {
        "id": "stageRuleMaking",
        "type": "radio",
        "options": {
            "1": "stageRuleMakingPR",
            "2": "stageRuleMaking1",
            "3": "stageRuleMaking2",
        }
    },
    {
        "id": "isRelatedGuidanceDocument1",
        "name": "relatedGuidance",
        "type": "checkbox"
    },
    {
        "type": "complex",
        "id": "citations[].type",
        "name": "us_codes",
        "value": "UA",
        "fields": {
            "title": "title",
            "section": "section",
            "freeText": "name"

        }
    },
    {
        "type": "complex",
        "id": "citations[].type",
        "name": "executive_orders",
        "value": "EA",
        "fields": {
            "eoNumber": "nr",
            "freeText": "name"
        }
    },
    {
        "type": "complex",
        "id": "citations[].type",
        "name": "public_laws",
        "value": "PA",
        "fields": {
            "publicLawNumberA": "congress_nr",
            "publicLawNumberB": "sequence_nr",
            "section": "section",
            "freeText": "name"
        }
    },
    {
        "type": "action",
        "action": "save"
    }
];