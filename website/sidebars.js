module.exports = {
    docsSidebar: [
        {
            type: 'doc',
            label: 'Introduction',
            id: 'intro'
        },
        'quickstart',
        'new_in_v2',
        {
            type: 'category',
            label: "Collections",
            collapsed: false,
            items: [
                "collections/collections",
                "collections/callbacks",
                "collections/permissions",
                "collections/exporting_data",
                "collections/text_search",
            ]
        },
        {
            type: "category",
            label: "Properties",
            collapsed: false,
            items: [
                "properties/properties_intro",
                {
                    type: "category",
                    label: "Fields",
                    items: [
                        "properties/fields/text_fields",
                        "properties/fields/selects",
                        "properties/fields/file_upload",
                        "properties/fields/references",
                        "properties/fields/switch",
                        "properties/fields/date_time",
                        "properties/fields/repeat",
                        "properties/fields/block",
                    ]
                },
                {
                    type: "category",
                    label: "Config",
                    items: [
                        "properties/config/properties_common",
                        "properties/config/string",
                        "properties/config/number",
                        "properties/config/boolean",
                        "properties/config/reference",
                        "properties/config/date",
                        "properties/config/array",
                        "properties/config/map",
                        "properties/config/geopoint"
                    ]
                },
                "properties/conditional_fields",
                "properties/custom_fields",
                "properties/custom_previews",
                "properties/custom_schema_views",
            ]
        },
        {
            type: "category",
            label: "Navigation",
            collapsed: false,
            items: [
                "navigation/navigation",
                "navigation/custom_top_level_views",
            ]
        },
        "firebase_setup",
        'deployment',
        {
            type: 'category',
            label: 'Provided hooks',
            items: [
                'hooks/use_auth_controller',
                'hooks/use_side_entity_controller',
                'hooks/use_snackbar_controller',
                'hooks/use_reference_dialog',
                'hooks/use_firecms_context',
                'hooks/use_data_source',
                'hooks/use_storage_source',
            ]
        },
        {
            type: 'category',
            label: 'Recipes',
            collapsed: false,
            items: [
                // 'recipes/recipes_index',
                'recipes/building_a_blog',
            ]
        },
        'custom_cms_app',
        'migrating_from_v1',
        'changelog'
    ],

    apiSidebar: [{
        type: 'autogenerated',
        dirName: 'api'
    }]
}

