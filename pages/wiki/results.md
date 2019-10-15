---
title: Results
preamble:
permalink: /wiki/results/
tags: wiki
---

## C protein characterization construct

{% div 'sub' %} Lysogenic module {% enddiv %}

{% div "group" %}

### Background

-   Strong constitutive promoter (pTet) which can be inhibited by TetR.
-   C protein gene fused with FLAG tag, RFP protein as a reporter
-   pTet is a lot stronger than Pe promoter (promoter of cox) hence it should force the phages in lysogeny.

{% enddiv %}

{% div "group" %}

### Aims

-   Characterization of the expression of C protein from its constitutive promoter pTet.

{% enddiv %}

{% div "group" %}

### Achievements

-   Detection of C protein expression by Western blot.
-   The reporter gene is not expressed.

{% enddiv %}

## Results

On one hand we wanted to understand how the C protein expression varied over time and whether its expression differed between the exponential and stationary growth phase of the bacteria. We also wanted to analyze the strength of the pTet promoter and confirm that C-protein indeed would be expressed constitutively within the cells.

In order to characterize the expression of C protein from the pTet promoter we used two different methods for protein expression analyzes; Western blot and Fluorescence spectometry. Firstly, we transformed top10 bacteria with our construct, this construct was successfully transformed 3rd of October 2019 using the Hi-Fi assembly kit from NEB (New England BioLabs). Then, we analyzed the growth of our bacteria and checked for possible toxicity from overexpressing C-protein. The bacteria were grown for 5 hours at 37°C, with a starting optical density of 0.05 for all samples. Samples for Western blot were collected at three timepoints.

The C-protein of our construct is coupled with a flag-tag which enabled us to stain for the protein in a Western blot. Samples were stained with anti-flag-tag and anti-RFP, anti-GAPDH was used as loading control. The C protein and RFP proteins are in a cis-construct but have separate RBS. In this way we could understand whether the cis-construct was coupled in such a way that the concentration of RFP was comparable to that of C-protein. In which case, we hoped that we would only need to measure fluorescence to understand the relative expression levels.

Secondly, we started measuring the cultures in a platereader and performed fluorescence spectrometry. As a positive control we used the RFP coding device, BBa_J04450 in the pB1C3 backbone isolated from the 2019 kit. Negative control was the empty AraC3 vector transformed in top10 cells. Cells were grown for 12 hours in the plate reader, the cycle interval was set at 5 min with orbital shaking before each cycle. Then we ploted the fluorescence intensity over time.

The C protein characterization construct did not show any significant level of protein expression compared to the controls. The westernblot showed that C-protein was highly expressed as seen in Fig 3 but there was no expression of RFP visible in the westernblot.

{% div "group" %}

### Growth curve

![]()

Fig 1. FluOstar readout. Absorbance OD600 measured at a cycle interval of 5 min, 120 cycles. Blank; media. Samples: top10 cells transformed with BBa_K

{% enddiv %}

{% div "group" %}

#### Fluorescence Readout

![]()

Fig 2. ClariOstar readout measurement.

{% enddiv %}

{% div "group" %}

#### Westernblot

![]()

Fig 3. Western blot showing C-exp at two different time points. Anti-flag, anti RFP

{% enddiv %}

---

[Lysogenic Module](../results-lysogenic-module)

[Lytic Module](../results-lytic-module)

[Switch Plasmid](../results-switch-plasmid)

[Inducible C Protein](../results-inducible-c-protein)

[Phage Genome Simulation Module](../results-phage-genome-simulation-module)

[Model plasmid](../results-model-plasmid)
