const tables = {
    "taxi_trips": {
        "table": "taxi_trips",
        "dataset": dataform.projectConfig.vars.TAXI_DATASET,
        "project": dataform.projectConfig.vars.SOURCE_PROJECT,
    },
    "zip_codes": {
        "table": "zip_codes",
        "dataset": dataform.projectConfig.vars.GEO_BOUNDARY_DATASET,
        "project": dataform.projectConfig.vars.SOURCE_PROJECT,
    },
    "crime_2024_with_location_summary": {
        "table": "crime_2024_with_location_summary",
        "dataset": dataform.projectConfig.defaultDataset,
        "project": dataform.projectConfig.vars.defaultProject,
    }   
}


function declare_tables(mapping) {
    Object.keys(mapping).forEach(table => {
        dataform.declare({
            database: mapping[table]["project"],
            schema: mapping[table]["dataset"],
            name: mapping[table]["table"]
        });
    });
}
 
declare_tables(tables)