# Belly_Button_Challenge
Belly Button Biodiversity

This Challenge is to build an interactive dashboard to explore the **Belly Button Biodiversity** dataset, which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

The dashboard deployed as part of this challenge can be viewed at https://snnandhini.github.io/Belly_Button_Challenge/

The dashboard has a Dropdown Menu, a Demographic Information Panel, a Horizontal Bar Chart, a Bubble Chart and a Gauge Chart.

## Drop Down Menu
-   The dropdown menu lists the Test Subject IDs to choose from.
-   D3.json function is used to fetch the Test Subject IDs (names) from the json file.

![image](https://user-images.githubusercontent.com/111614210/206621479-557f43cf-23b7-455e-9ef1-e0279b5832dd.png)

## Demographic Information Panel
-   This panel displays the selected individual's (Test Subject) demographic data.
-   Each key-value pair of the metadata pulled from the json file is used for populating this info.

![image](https://user-images.githubusercontent.com/111614210/206621519-022dfe63-1db2-42e3-a53d-4025b6cd03d8.png)

## Bar Chart
-   This plotly horizontal bar chart displays the top 10 OTUs found in the selected individual.
-   For this the otu_ids and sample_values are used.
-   The hovertext is based on the otu_labels values.

![image](https://user-images.githubusercontent.com/111614210/206621561-bf43bb1f-3f43-4171-aa84-5e51986abdfa.png)

## Bubble Chart
-   The plotly bubble chart displays all OTUs for the selected individual.
-   otu_ids and sample_values are used as the x and y values respectively.
-   sample_values are used for marker size, otu_ids for marker colours and otu_labels for text values.
![image](https://user-images.githubusercontent.com/111614210/206621603-0ffd353e-901f-417e-b588-1c18ee282849.png)

## Gauge Chart (Bonus)
-   The plotly gauge chart is based on the washing frequency (wfreq) value of the selected individual. 
-   The wfreq values range from 0 through 9.

(Hunt, 2021) (Shokeen, 2017) (codepen, n.d.)

![image](https://user-images.githubusercontent.com/111614210/206621659-96a2d733-1227-4b13-b9a3-701096003c97.png)


The screenshot of the dashboard with all the above components is as follows:

![image](https://user-images.githubusercontent.com/111614210/206615693-3fd0dc8a-6869-4b5e-b563-dca53b36dcec.png)

## Files Uploaded
-   **Landing Page** - index.html
-   **Javascript files** - app.js and bonus.js in the folder static/js/

## References
1)  Hunt, A., 2021. Observablehq. [Online] 
    Available at: https://observablehq.com/@arronhunt/building-a-gauge-meter-with-plotly
    [Accessed 04 12 2022].

2)  Shokeen, M., 2017. code.tutsplus. [Online] 
    Available at: https://code.tutsplus.com/tutorials/create-interactive-charts-using-plotlyjs-pie-and-gauge-charts--cms-29216
    [Accessed 04 12 2022].

3)  codepen, n.d. codepen. [Online] 
    Available at: https://codepen.io/plotly/pen/rxeZME/
    [Accessed 04 12 2022].




