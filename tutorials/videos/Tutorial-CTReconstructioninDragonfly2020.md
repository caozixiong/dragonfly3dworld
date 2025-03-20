---
language: zh-CN
title: "Dragonfly Daily 36: CT Reconstruction in Dragonfly 2020.1"
header: "Dragonfly Daily 36: CT Reconstruction in Dragonfly 2020.1"
intro_text: This comprehensive tutorial will walk you through the process of performing CT reconstruction using Dragonfly 2020.1. By following these instructions, you'll learn how to transform raw projection data into beautiful 3D visualizations.
css_path: /dragonfly3dworld/design.css
js_path: /dragonfly3dworld/interactive.js
video_url: https://www.youtube.com/watch?v=1UjP4Ox79Ew
footer:
  author: Dragonfly
  social_link: https://x.com/ai_dragonfly
  social_text: Twitter/X
  copyright_year: "2025"
  copyright_text: copyright
---

---- Tutorial Content Start ----
## Prerequisites

- Dragonfly 2020.1 software
- CT projection data (TIFF or HDF5 format)

## Detailed Workflow

### 1. Loading Your Projection Data

- Launch Dragonfly 2020.1
- Navigate to the **File** menu and select **Import Data**
- Browse to the folder containing your projection files
- Select your projection data files
- Click **Open** to import

### 2. Accessing the CT Reconstruction Tools

- Go to the **Workflows** menu
- Select **CT Reconstruction (Beta)**
- A dedicated reconstruction dialog will appear

### 3. Setting Up Your Input

- From the **Input Image** dropdown, select your imported projection dataset

### 4. Selecting the Appropriate Reconstruction Engine

- Choose the engine type that matches your CT setup:
    - **RTK** for cone beam reconstruction
    - **Parallel Beam Reconstruction** for parallel ray reconstruction

### 5. Configuring Geometry Parameters

- Enter the specific parameters for your CT setup:
    - Source to detector distance
    - Source to ISO center distance
    - Initial rotation angle
    - Angular step size
    - Source offset measurements
    - Detector angle

### 6. Importing System Parameters (Optional)

- If available, import parameter files from your CT system (e.g., Nikon)
- Click the **Import Parameters** button to load these settings

### 7. Choosing Your Reconstruction Algorithm

- For cone beam: FDK algorithm is automatically selected
- For parallel beam: Choose between Gridrec or ART algorithms

### 8. Fine-tuning Algorithm Settings

- Configure processing options:
    - GPU acceleration (Compute on GPU)
    - Number of iterations for iterative methods
    - Forward projected models

### 9. Applying Enhancement Filters (Optional)

- Select filters to improve reconstruction quality:
    - Shepp-Logan filter
    - Hann filter
    - Hamming filter

### 10. Pre-processing Your Data (Optional)

- Apply corrections to enhance projection quality:
    - Flat field correction
    - Median filtering

### 11. Previewing Your Results

- Generate a preview reconstruction to check settings
- Make adjustments as needed before full processing

### 12. Finalizing Your Reconstruction

- Choose one of two options:
    - **Reconstruct and Load**: Process and immediately visualize in Dragonfly (requires sufficient RAM)
    - **Reconstruct and Save**: Process and save directly to disk (better for large datasets)

## Conclusion

By following this workflow in Dragonfly 2020.1, you can transform your CT projection data into detailed 3D reconstructions ready for visualization and analysis.

---- Information Source Start ----

Dragonfly YouTube Channel : <a href="https://www.youtube.com/@dragonfly_software" target="_blank">https://www.youtube.com/@dragonfly_software</a>