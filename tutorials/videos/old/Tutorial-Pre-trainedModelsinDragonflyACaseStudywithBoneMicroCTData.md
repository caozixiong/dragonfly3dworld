---
language: zh-CN
title: Bone MicroCT Data - a Case Study with Pre-trained Models in Dragonfly
header: Bone MicroCT Data - a Case Study with Pre-trained Models in Dragonfly
intro_text: This case study examines how pre-trained models can be leveraged within the Dragonfly software to enhance bone microCT data segmentation. Presenter Huber demonstrates the practical benefits of transfer learning for improving segmentation tasks.
css_path: /dragonfly3dworld/design.css
js_path: /dragonfly3dworld/interactive.js
video_url: https://www.youtube.com/watch?v=63li5pUElh4
footer:
  author: Dragonfly
  social_link: https://x.com/ai_dragonfly
  social_text: Twitter/X
  copyright_year: "2025"
  copyright_text: copyright
---

---- Tutorial Content Start ----
## Key Benefits of Pre-trained Models

- **Improved Performance**: Pre-trained models consistently achieve higher Dice scores compared to untrained models [00:07:14]
- **Faster Convergence**: These models reach optimal accuracy levels more rapidly during the training process [00:09:41]
- **Reduced Training Time**: Utilizing pre-existing knowledge significantly accelerates training [00:04:32]

## Step-by-Step Implementation Guide

1. **Access the Deep Learning Tool** in Dragonfly's interface [00:15:40]
2. **Create a New Model** by initiating the deep learning model creation process [00:15:49]
3. **Select a Pre-trained Model** from the "Pre-trained by Dragonfly Team" section [00:16:09]
    - Available options include:
        - U-Net with various depths [00:16:09]
        - Sensor3D [00:16:15]
        - ORS 500k (trained on diverse scientific data) [00:05:04]
        - Bone 500k (specialized for grayscale bone images) [00:05:11]
4. **Data Calibration (Optional)**: For multi-source datasets, use the "Calibrate Intensity Scale" tool to normalize intensity values [00:11:09]
5. **Train the Model** using your specific dataset for semantic segmentation [00:04:24]

## Data Calibration Importance

- The "Calibrate Intensity Scale" tool is essential when working with datasets from different sources [00:11:09]
- This approach allows training without requiring dataset normalization, preserving original image data [00:11:44]
- Users can define custom scales (e.g., "Centigrade" scale for bone density) or use universal scales [00:12:53]

## Universal Bone Segmentation Model

- A universal model for unsupervised bone segmentation across different species and voxel sizes is under development [00:16:47]
- This model aims to streamline workflows, allowing users to focus on scientific analysis rather than manual segmentation [00:17:09]
- Data calibration plays a crucial role in ensuring the model's scalability across diverse datasets [00:17:56]

## Technical Details from Discussion

- **Model Selection**: The optimal pre-trained model depends on specific application requirements and dataset characteristics [00:42:47]
- **Patch Size**: Experiments utilized a patch size of 128×128 [00:48:16]
- **Validation Approach**: Consistent validation datasets were maintained across different training set sizes to ensure fair comparisons [00:47:07]
- **Calibration Differences**: The Bone 500k model is calibrated, while the ORS 500k model is not [00:36:30]

## Conclusion

Pre-trained models offer significant advantages for bone microCT data segmentation in Dragonfly. Users are encouraged to experiment with different models and provide feedback to enhance capabilities. The development of a universal bone segmentation model promises to simplify bone analysis workflows across varied research contexts. [00:19:11]

---- Information Source Start ----

Dragonfly YouTube Channel : <a href="https://www.youtube.com/@dragonfly_software" target="_blank">https://www.youtube.com/@dragonfly_software</a>