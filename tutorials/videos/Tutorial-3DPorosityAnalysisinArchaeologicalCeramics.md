---
language: zh-CN
title: 3D Porosity Micro-CT Analysis in Archaeological Ceramics
header: 3D Porosity Micro-CT Analysis in Archaeological Ceramics
intro_text: This tutorial outlines the process of using micro-CT scanning and Dragonfly software to analyze pore systems in archaeological ceramics, providing insights into ancient firing techniques and vessel functionality.
css_path: /dragonfly3dworld/design.css
js_path: /dragonfly3dworld/interactive.js
video_url: https://www.youtube.com/watch?v=GjY4phlGGhs
footer:
  author: Dragonfly
  social_link: https://x.com/ai_dragonfly
  social_text: Twitter/X
  copyright_year: "2025"
  copyright_text: copyright
---

---- Tutorial Content Start ----
## 1. Data Acquisition [00:03:53]

- Micro-CT scanning creates detailed 3D images of ceramic shards
- This non-destructive technique reveals isolated pores that indicate firing temperatures and techniques

## 2. Sample Preparation [00:04:49]

- Small fragments from ceramic vessels are selected for scanning
- Samples can be preserved for additional analyses (thin section analysis, etc.)

## 3. Image Segmentation [00:05:27]

- Dragonfly's segmentation wizard facilitates pore identification
- Approximately three slices are needed to train an effective segmentation model
- Image calibration tools allow model reuse for similar specimens [00:05:44]

## 4. Scanning Parameters [00:06:01]

- Recommended field of view: 5×5 millimeters (provides 10-micron spatial resolution)
- This scale optimizes detection of small pores while representing larger structures
- 2-5 replicates per shard are analyzed to account for material heterogeneity [00:06:22]

## 5. Pore System Analysis [00:06:34]

- Analysis focuses on pore networks to determine firing temperatures and vessel functions
- Key parameters examined include:
    - Pore volume percentage
    - Surface accessibility
    - Pore shape characteristics
    - Connectivity patterns [00:09:46]

## 6. Firing Temperature Determination [00:07:24]

- Total porosity volume percentage correlates with firing temperature [00:09:55]
- Ratio of surface-accessible to interior-only pores strongly indicates firing temperature [00:10:23]
- Pore shape metrics (sphericity and elongation) provide additional temperature indicators [00:12:28]

## 7. Connectivity Analysis [00:13:05]

- Dragonfly visualizes segmented pore systems as graph models
- Spheres represent individual pores while lines show connections
- This approach quantifies pore network connectivity

## 8. Thermal Conductivity Calculation [00:14:58]

- Porous microstructure analysis (Puma) program within Dragonfly calculates thermal properties
- Measurements based on thermal conductivity of individual components (quartz, feldspars, air)
- Temperature fields are simulated to determine steady-state temperature and thermal conductivity

## Conclusion

Three-dimensional image analysis with Dragonfly software provides a robust methodology for examining pore systems in archaeological ceramics, offering valuable insights into ancient production techniques and functional vessel properties.
---- Information Source Start ----

Dragonfly YouTube Channel : <a href="https://www.youtube.com/@dragonfly_software" target="_blank">https://www.youtube.com/@dragonfly_software</a>