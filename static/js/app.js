// Get the url for sample data
const sampleData = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// function to populate the dropdown menu with the sample names
function populateDropDown() {

    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset");

    
    d3.json(sampleData).then((data) => {

        // Fetch the names of the samples from json data to populate in the dropdown menu
        var sampleNames = data.names;
    
        //  Loop over each name to populate the dropdown
        sampleNames.forEach((name) => {
            var option = dropdownMenu.append("option");
            option.text(name);
        });

        // Assign the value of the dropdown menu option to a variable
        var displayID = dropdownMenu.property("value");
        console.log("displayID:", displayID);

        // Call the function to update demographic info and charts
        updateInfo(displayID);
    });    
}


// Function to update demographic info and create charts
function updateInfo(subjectID) {

    // Use D3 to select the demographic info panel
    var demographicInfo = d3.select("#sample-metadata");

    // Clear the demographic info panel
    demographicInfo.html("");

    d3.json(sampleData).then((data) => {

        // Fetch the metadata of the samples from json data
        var metaData = data.metadata.filter(sample => sample.id == subjectID)[0];
        console.log("metaData:", metaData);

        // Populate Demographic Info by looping over the key value pair
        Object.entries(metaData).forEach(([key, value]) => {
            demographicInfo.append("h6").text(`${key}: ${value}`);
        });

        // Fetch the samples values from json data - used in the bar abd bubble charts
        var samplesData = data.samples.filter(sample => sample.id == subjectID)[0];

        // Call the function to create bar and bubble charts
        createCharts(subjectID, samplesData);

        // Fetch the washing frequency data from metadata - used in gauge chart
        var wfreq = metaData.wfreq;

        // Call the function to create gauge chart - in bonus.js file
        gaugeChart(subjectID, wfreq);
    });
}


// Function to create bar and bubble charts
function createCharts(subjectID, samplesInfo) {

    console.log("samplesInfo:", samplesInfo);
    console.log("subjectID:", subjectID);

    // Assign the values as required
    var otuIDs = samplesInfo.otu_ids;
    var otuLabels = samplesInfo.otu_labels;
    var sampleValues = samplesInfo.sample_values;

    ///////////////
    // Bar Chart //
    ///////////////

    // Get and format the top 10 OTU IDs and data as required. Sort the values in descending order for the horizontal bar chart
    var topOtuIDs = otuIDs.slice(0,10).reverse().map(otuID => "OTU " + otuID);
    var topOtuLabels = otuLabels.slice(0,10).reverse();
    var topsampleValues = sampleValues.slice(0,10).reverse();

    // Create a trace for the bar chart
    let traceBar = {
        x: topsampleValues,
        y: topOtuIDs,
        text: topOtuLabels,
        type: "bar",
        orientation: "h"
    }

    // Assign the trace to a data array
    let dataBar = [traceBar];

    // Create the layout for bar chart
    let layoutBar = {
        title: `<b>Top 10 Bacteria Species<br> in Test Subject ${subjectID}</b>`,
        xaxis: {title: `Sample Values`},
    //    yaxis: {title: `OTU IDs`}
    }

    // Render the plot to the div tag with id "bar"
    Plotly.newPlot("bar", dataBar, layoutBar);

    //////////////////
    // Bubble Chart //
    //////////////////

    // Create a trace for the bubble chart
    let traceBubble = {
        x: otuIDs,
        y: sampleValues,
        text: otuLabels,
        mode: "markers",
        marker: {
            size: sampleValues,
            color: otuIDs,
            colorscale: "Earth"
        }
    }

    // Assign the trace to a data array
    let dataBubble = [traceBubble];

    // Create the layout for bubble chart
    let layoutBubble = {
        title: `<b>All Bacteria Species in Test Subject ${subjectID}</b>`,
        xaxis: {title: `Operational Taxonomic Unit (OTU) ID`},
        yaxis: {title: `Sample Values`}
    }

    // Render the plot to the div tag with id "bubble"
    Plotly.newPlot("bubble", dataBubble, layoutBubble);
    
}

// Call this function if the dropdown menu option is changed
function optionChanged(newID) {
    console.log("newID:", newID)
    updateInfo(newID);
}

populateDropDown();