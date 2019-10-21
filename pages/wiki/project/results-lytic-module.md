---
title: Inducible Cox characterization construct
preamble: Lysogenic module
permalink: /wiki/results-lytic-module/
tags: wiki
---

> ![](https://2019.igem.org/wiki/images/1/1d/T--Stockholm--results-lytic-module-01.png) [http://parts.igem.org/Part:BBa_K3024011](http://parts.igem.org/Part:BBa_K3024011)

## Background

This is a composite, tricistronic part that co-expresses TetR, Cox and GFP under the control of pBad promoter. Cox gene is fused with c-Myc tag for immunological detection (similarly to C protein, no commercial antibody for cox is available). TetR is an inhibitor acting on Tet-operator regions (tetO). Cox is a transcription factor known to activate downstream genes that cause the lytic cycle, thus this module was designed to experimentally induce the switch from lysogeny to lytic cycle.

A few details about this BioBrick:

-   c-Myc-tag is fused to cox-protein to allow for protein pull-down assays in the future.
-   GFP was not fused to the cox-protein to prevent changes in the function or kinetics of cox.
-   A degradation tag has been added to GFP to avoid accumulation of the protein.
-   3x RBSs have been added to achieve the highest expression of all the cistrons on the transcript
-   pBad pormoter, inducible with addition of arabinose (mimics an external stimulus)

## Aims

-   Here we aim to assess the expression of cox through western blot and fluorometry at different levels of pBad induction.

## Achievements

-   We successfully cloned the composite part in pB1C3 vector using NEB HiFi DNA assembly kit
-   We did not achieve to see GFP signal nor detect c-Myc in WB upon arabinose induction.

## Results

Here we wanted to put cox under the control of an inducible promoter to experimentally regulate the induction of cox and the degree of its expression. This was of importance as cox is the other main regulator of the P2 transcriptional switch. For our system to work, the expression analysis needed to be well defined to determine at what concentration cox expression would be saturated. Therefore, cox was fused with a c-Myc tag that enabled us to stain for the protein in a western blot. Additionally, cox was coupled with the reporter gene GFP. We wanted to create a profile to assess the protein expression of both cox and GFP at different arabinose concentrations. Furthermore, we wanted to validate if cox and GFP were expressed from our construct to the same degree. Cells containing this construct were grown in permissive and non-permissive conditions, and samples were collected at the stationary phase and analyzed by western blot.

Although there is no way to measure TetR expression from the construct directly, we included it in this BioBrick as it would have to activate at the same stimuli as the Cox gene. For the final system (Switch Plasmid) to work, we needed TetR to be included in the composite part, which is why it was tested on this BioBrick.

The western blot experiment of the Inducible cox characterization construct showed that cox is not expressed from the BioBrick as c-Myc could not be detected. In a second western blot experiment, we saw a weak expression of cox in non-permissive conditions. Upon induction, with 0.2% arabinose, the expression was abolished. The Fluorescence readout did not show any detectable level of GFP expression. The growth of this construct shows that there is certain toxicity, the reason of which we remain unaware. The cells barely grew in comparison to the control with the empty vector.

### Growth curve

{% image "https://2019.igem.org/wiki/images/b/b3/T--Stockholm--results-lytic-module-02.jpeg", "Figure 4. Growth curve of the BBa_K3024011 in different arabinose concentrations (0%,-0.4%) over the course of 10 hours. AraC3, empty vector was used as negative control. Absorbance OD600 was measured in 5 min cycles in a FluOstar plate reader, set to orbital shaking before each cycle." %}

### Fluorescence readout

{% image "https://2019.igem.org/wiki/images/3/31/T--Stockholm--results-lytic-module-03.jpeg", "Figure 5. ClariOstar measurement of GFP(ex:488-14/em:535-30). Cells were grown in a plate-reader under permissive and non-permissive conditions (0%-0.4% arabinose) for 10 hours, 120 cycles with 5 min intervals, 20 flashes for each cycle. AraC3 empty vector was used as negative control. Flourescin dye was used as positive control for GFP." %}

### Western blot

{% image "https://2019.igem.org/wiki/images/d/d0/T--Stockholm--results-lytic-module-04.png", "Figure 6. TOP10 bacteria transformed with BBa_K3024011 were grown for 5 hours at 37°C in LB-media under permissive and non-permissive conditions. Samples were collected in stationary phase at time 300 min. L= ladder -C= negative control +C=positive control for GFP only. Anti-GAPDH was used as a loading control. To the right, we compared BBa_K3024011 and Switch Plasmid expression." %}
