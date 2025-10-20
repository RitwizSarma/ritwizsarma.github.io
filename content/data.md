---
title: "Data Science/Public Goods"
hidemeta: true
description: "Data science portfolio and data public goods by Ritwiz Sarma."
---

I use data science to make sense of how policies, firms, and the environment interact. My work involves building and analysing large text, spatial, and unit-level datasets, employing tools from machine learning, NLP, geospatial analysis and causal inference. Here's some of the things I've done.

---

#### Public Goods

- **CAG website scraper** 

A Python scraper to download audit reports from the Comptroller and Auditor General of India (CAG) website, supporting sector-wise and archived reports with multithreaded downloads and robust error handling. <small>[[GitHub](https://github.com/RitwizSarma/cag-scraper/)]</small>

- **LaTeX templates for Masters' theses at MSE** <small> [[GitHub](https://github.com/RitwizSarma/mse-thesis-templates/)] [[Overleaf official template page](https://www.overleaf.com/latex/templates/madras-school-of-economics-official-thesis-templates/rbxdzxfjnmcr)] </small>

---

#### Projects

+ <b>Deep Learning Pipelines for Judicial Text Classification</b>

I built deep learning and pre-processing pipelines for a unique judicial text classification problem at [XKDR Forum](https://www.xkdr.org/). My work involved figuring out how this would scale and completing a cost comparison to using LLMs for this usecase.

- <b>Building High-Resolution Datasets: Land Values in Odisha </b>

I built a large high-resolution geocoded dataset (over _64,000,000 plots_) of land market values for Odisha, Telangana, Gujarat, Andhra Pradesh and Jharkhand. Land market values are important for studying state land acquisition and are an excellent proxy of regional economic performance. 
<!-- [Take a look](/portfolio/portfolio-1).  -->

- <b>No Bridge Too Far: Unique Geospatial Bridges Database</b>

I built a novel dataset of over 2,200 Indian bridges with _geospatial and temporal markers_ using Google Earth, OpenStreetMaps, and QGIS for a difference-in-differences study assessing the economic impact of bridge-building using night-lights data from the [SHRUG database](https://www.devdatalab.org/shrug) as a proxy for economic growth. 
<!-- Find more [here](/portfolio/portfolio-2). -->

- <b>Tracking the Tradeoff: High-Resolution Remote Sensing Dataset</b>

I used NASA and ESA satellite data to construct a novel high-resolution (village/census town-level) panel dataset of economic and environmental indicators for the states of Uttarakhand and Himachal Pradesh over twenty years. Most of this involved converting raw raster data on night lights, built-up area, and land surface temperature to quantitative data using R and QGIS. This was part of my work on investigating the economy-ecology trade-off; a working draft is [here](/papers/Tradeoff_TIES25.pdf).

- <b>In Progress</b>

I scraped over 10,000,000 Extra-Ordinary issues of the Gazette of India (used for communicating matters of special importance to the government) from different archives and am working on using *Natural Language Processing* to parse this important data source.