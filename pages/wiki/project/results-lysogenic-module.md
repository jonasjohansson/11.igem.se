---
title: C protein characterization construct
preamble: Lysogenic module
permalink: /wiki/results-lysogenic-module/
tags: wiki
---

> [http://parts.igem.org/Part:BBa_K3024004](http://parts.igem.org/Part:BBa_K3024004) ![](/static/img/wiki/project/results-lysogenic-module-01.png)

## Background

This composite part is formed by the constitutive promoter J23119, followed by two tet-Operators, and the gene that encodes for C-protein fused with FLAG-tag (DYKDDDDK epitope). This tag allows us to detect C protein with immunological techniques since there is no antibody against C commercially available. Finally, RFP gene is expressed downstream as a real-time cell reporter. This module is part of the Switch plasmid that would be transformed into the carrier bacteria prior to being infected with the delC P2 strain. When used in our switch the strong C-protein overexpression should force the phages to enter lysogeny.

A few details about this biobrick:

-   Flag-tag is fused to C protein to allow for protein pull-down assays in the future.
-   RFP was not fused with the C-gene to prevent changes in the kinetics or function of C-protein.
-   2x RBSs have been added to achieve the highest expression of all the cistrons on the transcript.
-   A degradation tag has been added to RFP to avoid accumulation of the protein.
-   Strong constitutive promoter (pTet) which can be inhibited by TetR. The promoter used is known to be very strong (ref registry [[http://parts.igem.org/Part:BBa_J23119](http://parts.igem.org/Part:BBa_J23119)]) to drive as much expression of C as possible.

## Aims

-   Characterization of the expression of C-protein from its constitutive promoter pTet.

## Achievements

-   Detection of C-protein expression by western blot.
-   Evident from the fluorescence readout and the western blot experiment, the reporter gene was not expressed.

## Results

On the one hand, we wanted to understand how the C-protein expression varied over time and whether its expression differed between the exponential and stationary growth phase of the bacteria. We also wanted to analyze the strength of the pTet promoter and confirm that C-protein indeed would be expressed constitutively within the cells.

To characterize the expression of C-protein from the pTet promoter, we used two different methods for protein expression analyzes; Western blot and Fluorescence spectrophotometry. First, we transformed TOP10 bacteria with our construct. This construct was successfully transformed using the Hi-Fi assembly kit from New England BioLabs. Then, we analyzed the growth of our bacteria and checked for possible toxicity from overexpressing C-protein. The bacteria were grown for 5 hours at 37°C, with a starting optical density of OD 0.05 for all samples. Samples for western blot were collected at three timepoints; after 180 min, 240 min, and 300 min.

The C-protein of our construct is coupled with a flag-tag, which enabled us to stain for the protein in a western blot. Samples were stained with anti-flag and anti-RFP, anti-GAPDH was used as a loading control. The C-gene and RFP coding sequence are in a cis-construct with each other but have separate RBS sequences which may alter the protein translation. Therefore, we were interested to know whether the concentration of RFP was comparable to that of C-protein. In which case, we hoped that we would only need to measure fluorescence to understand the relative expression levels.

Secondly, we measured bacteria in a plate reader and performed fluorescence spectrometry. As a positive control, we used the RFP coding device, BBa_J04450, in the pB1C3 backbone isolated from the 2019 kit. The negative control was the pB1C3 containing BBa_I0500 transformed in TOP10 cells, hereafter called (AraC3). Cells were grown for 10 hours at 37C in a ClariOstar plate reader; the cycle interval was set at 5 min with orbital shaking before each cycle. Then we plotted the fluorescence intensity over time.

The growth curve shows an arabinose dependent toxicity in these cells. Arabinose should theoretically not influence the expression from the pTet promoter. It is likely that this is an anomaly. The C-protein characterization construct did not express RFP but showed that C-protein was indeed expressed. The western blot showed that C-protein was expressed at similar levels at each time point, as seen in Figure 3. Due to the unspecific binding of the anti-RFP, it was not possible to distinguish RFP protein expression in the western blot. mRFP was not detected in the fluorescence readout even after changing to other chromatic filters. Since RFP was not detected, we considered possible issues regarding the construct, such as issues with the RBS, RFP coding sequence, or possibly the degradation tag.

### Growth curve

![](/static/img/wiki/project/results-lysogenic-module-02.jpeg)

Figure 1. Growth curve of the BBa_K3024004 in different arabinose concentrations (0%,-0.4%) over the course of 10 hours. AraC3, empty vector was used as negative control. Absorbance OD600 was measured in 5 min cycles in a FluOstar plate reader, set to orbital shaking before each cycle.

## Fluorescence Readout

![](/static/img/wiki/project/results-lysogenic-module-03.jpeg)

Figure 2. ClariOstar measurement of mRFP(ex:550-20/em:605-40). Cells were grown in a plate-reader at 37°C for 10 hours, 120 cycles with 5 min intervals, 20 flashes for each cycle. Samples 0%-0.4% are replicates of BBa\_ K3024004. AraC3 empty vector was used as negative control. As a positive control we used the RFP coding device, BBa_J04450 in the pB1C3 backbone.

### Western blot

![](/static/img/wiki/project/results-lysogenic-module-04.jpg)

Figure 3. Western blot of BBa_K3024004. Transfected TOP10 cells were grown in LB-media for 5 hours at 37°C. Samples were collected at 1. 180 min, 2. 240 min and 3. 300 min. L= ladder -C= negative control. +C x= positive control for RFP only. Anti-GAPDH was used as a loading control.
