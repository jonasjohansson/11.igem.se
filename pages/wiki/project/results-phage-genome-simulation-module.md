---
title: Phage genome simulation module
preamble:
permalink: /wiki/results-phage-genome-simulation-module/
tags: wiki
---

> ![](https://2019.igem.org/wiki/images/6/6e/T--Stockholm--results-phage-genome-01.png) [http://parts.igem.org/Part:BBa_K3024012](http://parts.igem.org/Part:BBa_K3024012)

## Background

A module consisting of the Pe promoter, the downstream cox gene fused with c-Myc-tag, followed by a YFP reporter. It has been used to simulate the delC P2 phage genome and the dynamics between the C-protein and the native cox promoter, Pe. This enabled us to investigate the level of cox expressed by this promoter over time. This brick can be combined with other bricks to test the external influence on cox expression. See Model Plasmid.

A few details about this BioBrick:

-   c-Myc-tag is fused to cox protein to allow for protein pull down in the future.
-   YFP is not fused with cox-protein to prevent impairment of Cox-protein kinetics or function.
-   A degradation tag has been added to YFP to avoid accumulation of the protein.
-   2x RBSs have been added to achieve the highest expression of all the cistrons on the transcript

## Aims

-   Analyze the level of expression of cox from the natural P2 promoter Pe.

## Achievements

-   cox expression was visible in the western blot, the expression was similar for all time points.
-   We were not able to detect YFP in the plate reader.

## Results

In the transcriptional switch of the P2 bacteriophage, the Pe promoter is naturally followed by the cox-gene which is transcribed upon its activation. Additionally, the cox has a positive feedback on its own promoter Pe, increasing its own production. The Pe promoter is slightly more expressive than the Pc promoter. Additionally, the C-protein has a weaker inhibitory effect on the Pe promoter and this tilts the switch toward lysis.

To understand whether we can influence the Pe promoter and turn this relatively strong promoter off, we wanted to understand more about the protein expression from this promoter. We created the BioBrick using the switch sequence reported in the literature on NCBI. The composite part was transformed in top10 bacteria and the protein expression was evaluated. In the context of the phage, there is likely signaling that influences the expression of the promoter. This brick was assessed in bacteria and can only show expression levels *in vitro*.

The growth of TOP10 cells transformed with the phage simulation construct showed no evident toxicity. Growing cells in various arabinose concentrations did not make a difference. The cox protein in our construct was fused to a c-Myc tag. In the western blot, we can see that cox is expressed in all timepoints, cox expression from the Pe promoter seems to be constant.

GFP and YFP have many structural similarities, in the western blot we stained using anti-GFP as we expected the antibody to bind to either of the two proteins (and because the company didn't have anti-YFP). Their weight of each protein are the same. GFP nor YFP were detected in any of the wells. GFP was also not detected in the western blot.

The phage simulation model served the purpose of mimicking a small part of the switch regulatory promoter that we are trying to influence, sufficient to prove whether the system would have worked as a proof of concept.

### Growth curve

{% image "https://2019.igem.org/wiki/images/0/03/T--Stockholm--results-phage-genome-02.jpeg", "Figure 15. Growth curve of the Phage genome simulation module in different Arabinose concentrations (0%, 0.05%, 0.1%, 0.2%, 0.4%) over the course of 10 hours. AraC3, empty vector was used as negative control. Absorbance OD600 was measured in 5 min cycles in a FluOstar plate reader, set to orbital shaking before each cycle." %}

### Fluorescence readout

{% image "https://2019.igem.org/wiki/images/2/22/T--Stockholm--results-phage-genome-03.jpeg", "Figure 16. ClariOstar measurement of GFP(ex:488-14/em:535-30). Cells were grown in a plate-reader for 10 hours, 120 cycles with 5 min intervals, 20 flashes for each cycle. Samples 0%-0.4% are replicates. AraC3 empty vector was used as negative control. Flourescin dye was used as positive control for GFP." %}

### Western blot

{% image "https://2019.igem.org/wiki/images/c/c3/T--Stockholm--results-phage-genome-04.jpeg", "Figure 16. ClariOstar measurement of GFP(ex:488-14/em:535-30). Cells were grown in a plate-reader for 10 hours, 120 cycles with 5 min intervals, 20 flashes for each cycle. Samples 0%-0.4% are replicates. AraC3 empty vector was used as negative control. Flourescin dye was used as positive control for GFP." %}
