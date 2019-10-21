---
title: Inducible C protein construct
preamble:
permalink: /wiki/results-inducible-c-protein/
tags: wiki
---

> ![](https://2019.igem.org/wiki/images/2/26/T--Stockholm--results-inducible-c-protein-01.png) [http://parts.igem.org/Part:BBa_K3024009](http://parts.igem.org/Part:BBa_K3024009)

## Background

This part contains the C protein gene downstream of an inducible promoter pBad. This gives us the ability to increase its expression by administrating the monosaccharide arabinose in the growth medium. Due to very limited literature on the dynamics of C-protein inhibition on Pe, the promoter of the cox-gene, we designed this part to test the concentration-dependent effect of C on the native regulatory region of the P2 switch.

A few details about this BioBrick:

-   Flag-tag is fused to C-protein to allow for protein pull-down assays in the future.
-   RFP is not fused to prevent changes to the kinetics or function of C-protein.
-   A degradation tag has been added to RFP to avoid accumulation of the protein.
-   2x RBSs have been added to achieve the highest expression of all the cistrons on the transcript

## Aims

-   Characterize the C-protein expression levels upon various concentrations of arabinose induction.

## Achievements

-   Staining for C-protein showed an increase in C-protein expression during the stationary phase.
-   Red fluorescence was not detected, neither with or without arabinose induction.
-   Unspecific binding of our antibody prevented detection by westernblot.

## Results

Similarly to the C-protein characterization construct (BBa_K3024004), we created a composite part where C-protein can be regulated with the arabinose inducible promoter pBad. There is very little written in the literature about the expression of C-protein from its native promoter Pc. We knew that the pTet promoter is strong, but we did not know if perhaps a high level of C-protein would be toxic or not. Were it that the pTet promoter was either too weak or too strong, we could asses the appropriate C-protein levels by combining this part with the Phage genome simulation module (BBa_K3024012) in the so-called Model Plasmid. (shown in the next section)

The growth of the Inducible C-protein construct does not show an arabinose dependent toxicity, although at very high concentrations >0.4% may confer certain cell toxicity. At stationary phase, samples were collected for western blot and stained with anti-RFP and anti-FLAG, anti-GAPDH was used as a loading control. The staining with anti-RFP and anti-GAPDH produced a lot of unspecific binding making it hard to distinguish individual bands. The anti-flag staining was successful and showed that without induction, C-protein expression is moderate. When we induce with 0.4% arabinose we see a distinct increase in the C-protein expression as was expected. It seems that 0.1% arabinose was not enough to overexpress C-protein. Although the western blot showed that 0.4% arabinose could induce C-protein expression from our construct, arabinose induction did not increase the RFP fluorescence as seen in Figure 13. Again, our construct is not able to induce the reporter. Considering these results, moving on to test this BioBrick in the Model plasmid, we should expect regulation of the Pe promoter at levels of induction above 0.4%.

### Growth curve

{% image "https://2019.igem.org/wiki/images/5/5c/T--Stockholm--results-inducible-c-protein-02.jpeg", "**Figure 12.** Growth curve of the Inducible C-protein Construct in different Arabinose concentrations (0%, 0.05%, 0.1%, 0.2%, 0.4%) over the course of 10 hours. AraC3, empty vector was used as negative control. Absorbance OD600 was measured in 5 min cycles in a FluOstar plate reader, set to orbital shaking before each cycle." %}

### Fluorescence readout

{% image "https://2019.igem.org/wiki/images/7/7e/T--Stockholm--results-inducible-c-protein-03.jpeg", "**Figure 13.** ClariOstar measurement of mRFP(ex:550-20/em:605-40). Cells were grown in a plate-reader for 10 hours, 120 cycles with 5 min intervals, 20 flashes for each cycle. Arabinose concentration(0%-0.4%) used for induction. AraC3 empty vector was used as negative control. As a positive control we used TOP10 cells transformed with the RFP coding device, BBa_J04450 in the pB1C3 backbone." %}

### Western blot

{% image "https://2019.igem.org/wiki/images/0/04/T--Stockholm--results-inducible-c-protein-04.jpeg", "**Figure 14.** Western blot of BBa_K3024009. Transfected TOP10 cells were grown in LB-media with different concentrations of arabinose from starting OD 0.05 for 5 hours at 37°C. Samples were collected at stationary phase after 300 min.  L= ladder -C= negative control. +C= positive control for RFP only. Anti-GAPDH was used as a loading control." %}
