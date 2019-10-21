---
title: Results
preamble:
permalink: /wiki/results/
tags: wiki
---

To translate our idea into results, we characterized every BioBrick as listed in [Basic & Composite](https://www.notion.so/ad4a787e-b1c6-4c63-823c-96f13cb4a04a) and described in [Design](https://www.notion.so/f4c539ce-3452-45f2-80bb-8dc169a7f65f). All of the bricks were transformed into TOP10 cells and tested for the following parameters:

-   Growth curve/Toxicity of the constructs
-   Fluorescent fingerprint using spectrophotometry and flow cytometry
-   Protein expression using western blot

Here, you can find the most important findings for each BioBrick, and we urge you to follow the links found after each section for in-depth analysis.

![](https://2019.igem.org/wiki/images/e/e3/T--Stockholm--results-01.jpeg)

## The Switch Plasmid

The first part of our project revolves around creating the [**Switch Plasmid**](/wiki/results-switch-plasmid/), a simulation of our inducible switch to force the P2 phage into the lysogenic cycle. For this to happen, we constructed two modules, the lysogenic [**C-protein Characterization Construct** (Lysogenic module)](/wiki/results-lysogenic-module/) and the lytic [**Inducible cox characterization construct** (Lytic module)](/wiki/results-lytic-module/). As we tested the lysogenic module, we saw no RFP expression through spectrophotometric analysis. Yet with western blot, we detected a constitutive C-protein expression, which confirmed that the bricks work as expected. As the lytic module was characterized, we saw arabinose-dependent toxicity which was not present in the control. Furthermore, no expression of neither GFP nor the cox-protein was found. When combined in the Switch Plasmid, we concluded from the western blot that there is a distinct expression of C-protein in non-induced samples and upon induction an increase in the cox expression, confirming that the switch works!

## The Model Plasmid

The second part of our project was the creation of a [**Model Plasmid**](/wiki/results-model-plasmid/) to simulate the P2 genome and its reaction to the induction of the switch. We combined two modules; the [**Inducible C-protein construct**](/wiki/results-inducible-c-protein/) and the [**Phage genome simulation module**](/wiki/results-phage-genome-simulation-module/). The first module enabled careful control of the C-protein expression. western blot results showed that overexpression of C-protein was achieved at levels of induction above 0.4% arabinose. In line with our expectations, C-protein increased upon arabinose induction. Then, we created the second module that would mimic the phage switch genome. We showed that cox-protein is expressed on a stable level. However, we experienced issues in the detection of fluorescence.

## Discussion

When we discovered that fluorescence spectrophotometry could not detect fluorescence from our reporters, we began to investigate… We analyzed the sequences of our construct and saw that everything had been inserted, although, the RBS sequences were 4bp too short.

![](https://2019.igem.org/wiki/images/3/36/T--Stockholm--results-02.jpg)

### A new hope

We ordered a new **Switch Plasmid** construct containing the correct RBS sequences; furthermore, we ordered primers to correct for the RBS sequences for [BBa_K3024004](http://parts.igem.org/Part:BBa_K3024004) and [BBa_K3024011](http://parts.igem.org/Part:BBa_K3024011), two of our composite parts. With the new constructs, we again did not see an apparent increase in the fluorescence signaling. Considering that we still couldn't detect the fluorescence, we discussed whether some single cells might be expressing low levels of fluorescence. Johan Rockberg, our PI, helped us set up a flow cytometry experiment to measure the fluorescence from single cells within a population. For the **Switch Plasmid**, we noticed that upon arabinose induction, it expressed higher levels of RFP, which correlated with the results seen from the western blot results. Because we did not detect a significant shift in expression of RFP/GFP upon induction, we assume that the missing base pairs in the RBS were not the issue.

Maximillian Karlander, a Ph.D. student, recommended transforming our constructs in a different bacterial strain that is a more efficient expression strain. We transformed the **Switch Plasmid** in BL21 E.coli and analyzed the level of fluorescence in the ClariOstar plate reader using the previous protocol. There was no evident difference in neither expression nor growth of the two strains.

Another theory was that the degradation tag fused to the reporter genes caused a quick targeting and degradation of newly formed RFP/GFP, which would prevent detection. Interestingly, the maturation time for RFP is quite slow, meaning that although the protein is transcribed, it takes time before it emits a fluorescent signal.

### Planning ahead

To further investigate, we would perform RT-qPCR to assess whether there are detectable levels of the RFP/GFP mRNA transcripts. We aim to understand if the problem of expression originates from the translation or transcription. Ultimately, if there was a problem with the transcription, the cis- or tris-construct design should be considered as a non-functional concept!

On continuing the project, we would make all parts of the construct functional and further evaluate the protein expression using other characterization methods. We would also work on the integration of the envisioned sensing system with the **Switch Plasmid**. We would test the induction of bacteria in different pH concentrations similar to the gastric and intestinal fluids. Last but not least, we would aim to test the system with the P2 knockout phage.
