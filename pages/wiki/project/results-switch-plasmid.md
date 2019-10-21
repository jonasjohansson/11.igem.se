---
title: Switch Plasmid
preamble:
permalink: /wiki/results-switch-plasmid/
tags: wiki
---

![](https://2019.igem.org/wiki/images/9/95/T--Stockholm--results-switch-plasmid-00.png)

## Background

-   This plasmid was designed to be a functional system were one stimulus would trigger a switch in the expression from predominantly C-protein to the activation of cox protein expression.
-   The construct is a combination of two composite parts: [BBa_K3024004](http://parts.igem.org/Part:BBa_K3024004) and [BBa_K3024011](http://parts.igem.org/Part:BBa_K3024011).

## Aims

-   To characterize the relative expression of C-protein and cox with and without pBad induction as well as during different levels of induction.

## Achievements

-   We successfully combined two composite parts in the Switch Plasmid using hifi DNA assembly.
-   Characterization shows an increase in cox upon arabinose induction and a decrease in C-protein expression. When there is no induction there is a high level of C-protein expression.

## Results

It is expected that in the absence of arabinose, the expression of C-protein is high, and there is a signature RFP signal. When arabinose is added, we expect an increase in the cox protein expression and a clear shift to GFP signaling. The inducible pBad promoter would help us to assess at what level of induction we have appropriate negative C-protein regulation. We evaluated this effect by measuring the level of both reporters RFP and GFP by using a multi-chromatic filter in the ClariOstar fluorescent plate-reader.

Top10 cells were transformed with the Switch Plasmid and diluted to OD 0.05 in a 96-well plate. Cells were grown for 10 hours at 37℃ where one machine was set to measure absorbance at OD600, and the other measured the fluorescence. The growth seems to be rescued by the combined expression from the lytic and the lysogenic module (Fig.7). The multi-chromatic setting measured both mRFP(ex:550-20/em:605-40) and GFP(ex:488-14/em:535-30) at 5 min intervals. Fluorescein was used as a positive control for GFP. Here we plot them separately to investigate how the expression changes over time.

It became clear that over the course of 6 hours, no fluorescence was detected. The intensity did not differ significantly from the negative controls (Fig.8). We decided to investigate protein expression by staining for the C and cox protein in a western blot (Fig.9). The anti-RFP antibody showed a lot of unspecific staining, and it was difficult to distinguish RFP. On the other hand, it was clear that without induction (0% arabinose) there is a high RFP signaling and low amounts of GFP. Upon induction we can see from the anti-c-Myc staining that cox expression increases. Although our reporter genes are not functioning, it seems that there is functional regulation of our two proteins of interest, C and cox.

We discovered that the RBS sequence taken from the registry was faulty in our construct. We also suspected that there might be a very low expression of the reporters, and therefore, we wanted to investigate this issue using flow cytometry.

We ordered a new construct with improved RBS sequences and performed a western blot and flow cytometry. In Figure 10, we can see the most recent western blot displaying a distinct increase in cox expression compared to the non-induced sample. We can also see that the non-induced Switch Plasmid exhibits a much higher expression of C-protein compared to the induced. Oddly, this is not in accordance with that seen for the C-protein characterization construct (b1, Figure 10). In addition, there is a thin band showing that cox is expressed during non-permissive conditions; this is due to leakiness from the pBad promoter.

TOP10 bacteria transformed with the improved Geneart construct (Thermo Fisher) were grown overnight, diluted to OD 0.5, and grown under permissive and non-permissive conditions (0.2% arabinose for 4.5 hours at 37°C Cells were analyzed by flow cytometry (Figure 11). In the upper panel, we see that the controls do not show a shift in the expression of GFP nor RFP. On the other hand, the induction of the Switch Plasmid shows a distinct shift in the expression of RFP (Figure 11D). The shift in GFP expression upon induction is less clear, and the population seems smaller than the non-induced sample.

Ideally, we would replace the pBad promoter with a promoter that would trigger at the presence of the pathogen, such as the pNorV promoter, that can sense nitric oxide.

### Growth curve

{% image "/static/img/wiki/project/results-switch-plasmid-01.jpeg", "Figure 7. In this figure, we can observe the growth curve of the Switch Plasmid at 37°C in different Arabinose concentrations (0%, 0.05%, 0.1%, 0.2%, 0.4%) over the course of 10 hours. AraC3 was used as negative control and contains TOP10 cells transformed with the empty backbone. Absorbance was measured every 5 min. The results were normalized over two replicates." %}

### Fluorescence readout

{% image "/static/img/wiki/project/results-switch-plasmid-02.png", "Figure 8. In this figure we can compare the fluorescence of the Switch Plasmid over time. ClariOstar measurement of mRFP(ex:550-20/em:605-40) and GFP(ex:488-14/em:535-30). Cells were grown in a plate-reader for 10 hours, 120 cycles with 5 min intervals, 20 flashes for each cycle. The multi-chromatic setting allowed us to measure GFP and RFP from the same wells at each interval. Arabinose concentrations (0%, 0.05%, 0.1%, 0.2%, 0.4%). AraC3 empty vector was used as negative control. As a positive control for RFP we used the RFP coding device, BBa_J04450 in the pB1C3 backbone. As a positive control for GFP fluorescein dye was used." %}

### Western blot

{% image "/static/img/wiki/project/results-switch-plasmid-03.png", "Figure 9. TOP10 bacteria transformed with Switch Plasmid were grown for 5 hours at 37°C in LB-media under permissive and non-permissive conditions. Samples were collected in stationary phase at time 300 min. L= ladder -C= negative control +C=positive control for RFP only. Anti-GAPDH was used as a loading control." %}

{% image "/static/img/wiki/project/results-switch-plasmid-04.png", "Figure 10. The following samples have corrected RBS sequences. Samples were grown in permissive and non-permissive conditions for 5 hours, samples were collected at stationary phase. b1= C-protein Characterization Construct, b2= Inducible Cox Characterization Construct, SP2= Switch Plasmid 2 contains both b1 and b2. L= ladder, C-= Negative control, +/- = 0.2% / 0% arabinose. Anti-GAPDH was used as a loading control" %}

### Flow cytometry

![](https://2019.igem.org/wiki/images/d/dd/T--Stockholm--results-switch-plasmid-05.png)

{% image "/static/img/wiki/project/results-switch-plasmid-06.png", "Figure 11. Images showing the gating of sample populations. Flow cytometry, Upper panel: FL1=GFP-filter, Lower panel: FL2=RFP-filter, Green: The induced samples, Red: Non-induced samples, Upper panel: the control samples (empty AraC3 vector), Lower panel: Switch Plasmid. Samples were induced with 0.2% arabinose for 4.5 hours prior to analyses." %}
