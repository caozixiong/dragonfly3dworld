---
language: zh-CN
title: "Dragonfly Daily 16: Denoising with Deep Learning in Dragonfly (2020)"
header: "Dragonfly Daily 16: Denoising with Deep Learning in Dragonfly (2020)"
intro_text: This tutorial is part of a broader series (lessons 15-19) focused on deep learning applications for imaging scientists. Lesson 16 specifically addresses how to use deep learning for denoising images within the Dragonfly 4.1 software environment.
css_path: /dragonfly3dworld/design.css
js_path: /dragonfly3dworld/interactive.js
video_url: https://www.youtube.com/watch?v=aOk1Cs_Q8i4
footer:
  author: Dragonfly
  social_link: https://x.com/ai_dragonfly
  social_text: Twitter/X
  copyright_year: "2025"
  copyright_text: copyright
---

---- Tutorial Content Start ----
**System Requirements:**

- Dragonfly 4.1
- CUDA-capable NVIDIA graphics card
- Hardware used in the demonstration:
    - Laptop: Windows 10, 16GB RAM, 6GB video memory
    - Workstation: Windows 10, 32-core CPU, 64GB RAM, high-performance GeForce card

## Core Concepts of Deep Learning Denoising [00:02:55]

The fundamental principle of denoising with deep learning involves training a neural network to transform noisy images into low-noise images. The process requires establishing pairs of images for training the model.

### Three Approaches to Denoising Models:

1. **High-noise to Low-noise Pairing** [00:03:22]
    - Input: High-noise image
    - Output: Low-noise image
    - The most straightforward approach
2. **Autoencoder Method** [00:04:31]
    - Input: High-noise image
    - Output: High-noise image (same as input)
    - The network architecture forces noise reduction despite identical input/output
3. **Noise-to-noise Training** [00:04:49]
    - Input: Noisy image
    - Output: Another noisy image of the same sample
    - The model learns to extract consistent signals among variable noise

### Obtaining Low-noise Images [00:05:23]

- **Empirical method**: Longer exposure time during acquisition
- **Synthetic method**: Applying denoising filters to noisy images

**Note**: Trained models can be shared or uploaded to the Infinite Toolbox for others to use [00:06:16]

## Practical Demonstration in Dragonfly 4.1 [00:06:49]

### Dataset Introduction

- HeLa cells dataset acquired on a Zeiss Gemini 7 [00:06:55]
- Original data is notably noisy
- A pre-processed, low-noise version created with image filters is also used [00:08:13]

### Setting Up the Workspace

1. Loading both noisy and denoised datasets
2. Viewing images side-by-side using synchronized scenes [00:08:46]
3. Extracting specific slices from both datasets to create training pairs [00:10:11]

## Creating and Training a Denoising Model [00:13:03]

### Model Setup

1. Access the Deep Learning Tool in Dragonfly
2. Create a new model using U-Net architecture for regression (denoising) [00:14:15]
3. Configure the model to process paired noisy and denoised image slices [00:15:53]

### Training Parameters [00:17:08]

- Patch size adjustment
- Epochs setting
- Loss function selection
- Validation data allocation [00:17:26]

### Results Evaluation

- Preview the trained model's performance on a slice outside the training data [00:20:13]
- Visual comparison between original and denoised images

## Alternative Approach: Autoencoder Demonstration [00:21:05]

1. Creating an autoencoder model
2. Training using high-noise images as both input and output
3. Understanding how the architecture enables denoising despite identical input/output [00:23:10]
4. Comparing autoencoder results with the original noisy image [00:26:52]

## Key Q&A Topics [00:27:43]

### Technical Questions:

- Filters used for creating the low-noise reference image [00:28:59]
- Availability of literature on Dragonfly algorithms [00:29:37]
- Risks of over-interpreting data with denoising [00:30:12]
- Importance of geometric alignment in paired images [00:32:40]
- Comparison of validation and training error [00:33:43]

### Advanced Topics:

- Inputting a starting seed for randomization [00:35:39]
- Access to Python source code of deep learning models [00:36:12]
- Meaning of estimated memory ratio [00:36:43]
- Viewing the training history of the CNN [00:36:50]
- Tutorial for editing model architecture [00:38:21]

### Practical Applications:

- Comparing trained images to filtered images [00:39:05]
- Using data augmentation in high-high example [00:42:30]
- Tracking which slices were used for training [00:42:52]
- Comparing deep learning denoising to conventional filters [00:43:35]
- Using Intel Open Image Denoise [00:43:45]
- Handling image artifacts like beam hardening [00:46:21]
- Numerical comparison of denoised image with ground truth [00:47:22]

## Conclusion

The tutorial demonstrates how Dragonfly 4.1's deep learning capabilities can be effectively used to denoise microscopy images, with different approaches offering flexibility based on available data and specific needs. The trained models can significantly improve image quality while preserving important structural details.

Next lesson topic: Image segmentation using deep learning techniques.

---

**Video Details:**

- Title: Dragonfly Daily 16 Denoising with Deep Learning in Dragonfly (2020)
- Channel: Dragonfly
- Length: 49 minutes, 30 seconds
- Published: April 21, 2020


---- Information Source Start ----

Dragonfly YouTube Channel : <a href="https://www.youtube.com/@dragonfly_software" target="_blank">https://www.youtube.com/@dragonfly_software</a>