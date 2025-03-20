---
language: zh-CN
title: Dragonfly Daily 39 Cylinder Coordinate Transform in Dragonfly (2020)
header: Dragonfly Daily 39 Cylinder Coordinate Transform in Dragonfly (2020)
intro_text: This tutorial demonstrates how to transform cylindrical data into rectangular coordinates in Dragonfly 2020.1, described as a "soup can unwrapper" approach. Using a dry sand pack dataset, the host shows how to:Apply the transformation using a custom menu item from the Infinite ToolboxPerform analysis at multiple radii using the Macro PlayerGenerate and visualize 2D images representing different radiiStitch these images into a 3D representationThe functionality is implemented in Python (with plans for C++ conversion) and is available through the Infinite Toolbox. Future improvements may include interactive radius adjustment and additional customization options. The video includes code explanation, installation guidance, and answers to viewer questions about SEM processing and related techniques.
css_path: /dragonfly3dworld/design.css
js_path: /dragonfly3dworld/interactive.js
video_url: https://www.youtube.com/watch?v=sfHY9cLCqKc
footer:
  author: Dragonfly
  social_link: https://x.com/ai_dragonfly
  social_text: Twitter/X
  copyright_year: "2025"
  copyright_text: copyright
---

---- Tutorial Content Start ----
# Cylinder Coordinate Transforms in Dragonfly: A Tutorial Guide

## Introduction [00:00 - 01:15]

The host begins by introducing himself and the topic: cylinder coordinate transforms using Dragonfly 2020.1 Release Candidate 2. Viewers are encouraged to subscribe to the Dragonfly Daily YouTube playlist. For this demonstration, the host uses a dry sand pack dataset from the Digital Rocks Portal, expressing gratitude to the scientific community for sharing such valuable data.

## Understanding Cylinder Perspective [02:13 - 02:50]

The tutorial focuses on examining data from a cylindrical perspective, which the host describes as a "soup can unwrapper" approach. This involves transforming data from a cylindrical coordinate system to a rectangular one, allowing for different analytical perspectives.

## Implementation Process [02:56 - 03:46]

To implement this transformation, you need:

- An image dataset
- A cylinder for reference

The host demonstrates using a custom menu item extension from the Infinite Toolbox. The process involves:

1. Selecting an image and a cylinder
2. Right-clicking to execute the "soup can wrapper" macro

The host notes that while the current macro is written in Python (with source code available), there are plans to port it to C++ for significant performance improvements.

## Multiple Radius Analysis [05:05 - 08:30]

The tutorial progresses to more advanced analysis by showing how to:

1. Run the analysis for a cylinder at increasing radii [05:05]
2. Use a macro built with Macro Builder to call the menu item multiple times, changing the radius each iteration [05:17]
3. Use the Macro Player to select the "soup can wrapper over radius range" macro [05:59]
4. Input parameters when prompted: starting radius, higher radius, and step size [06:20]

This process generates multiple 2D images in the workspace, each representing different radii [07:25]. These can be visualized by creating a box around them and scrolling through the slices [07:43]. For further analysis, the 2D images can be stitched together to create a 3D image representing data across different radii [08:30].

## Behind the Scenes: Code Examination [09:23 - 13:30]

The host explains the code used for the macro, which includes:

- Identifying selected channels and cylinders
- Prompting for radii and step size
- Running a loop to extract the cylinder at different radii

Both the macro and menu item are available in the Infinite Toolbox [10:41], and the host demonstrates how to find and install them [11:04]. The Python source code for the menu item is displayed, showing the geometry and sampling calculations [12:51].

As a demonstration of capability, the host shows a pre-computed unwrapped cylinder for the entire sand pack dataset, covering a radius range of 1 to 4 millimeters [13:30].

## Q&A and Future Developments [14:26 - 22:20]

The host addresses questions about:

- SEM processing
- Macro compatibility
- Future webinar topics

Potential future improvements to the tool include:

- A live connected view for interactive radius adjustment [16:32]
- Options for different horizontal extents and cylinder rotation

The host outlines plans for future webinars covering:

- Application topics
- Programming extensions
- Image processing for scientific imaging [19:06]

In response to a question, the host explains Hough transforms and their use in detecting features like lines and circles [20:27].

The tutorial concludes with the host thanking viewers and encouraging them to explore the Infinite Toolbox and subscribe to the YouTube channel for future content [22:20].

---- Information Source Start ----

Dragonfly YouTube Channel : <a href="https://www.youtube.com/@dragonfly_software" target="_blank">https://www.youtube.com/@dragonfly_software</a>