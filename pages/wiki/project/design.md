---
title: Design
preamble:
permalink: /wiki/design/
tags: wiki
---

> Our team has [designed a delivery system](/wiki/description/) that carries temperate phages right to the site of infection. Once there, our molecular switch will trigger the phage to burst out of the carrier, infecting the surrounding bacteria. This will increase the effective dose of phages, allowing them to avoid barriers that would otherwise limit their efficiency in phage therapy.

To understand how this system works, we will introduce the P2 phage switch, the source of our inspiration. For our project, we took molecular components of this switch to create our own Switch Plasmid, which will also be explained on this page. Due to safety restrictions, we were not allowed to use phages in the lab, which is why we had to simulate our phage using the Model Plasmid, which would help us to experimentally test our Switch Plasmid. The **Switch Plasmid** will be activated when there is inflammation, so we will also briefly explain our **Sensing System**.

## The P2 Switch

Temperate phages have two life cycles. It is unknown what triggers the phage to change from one to the other, but we know that it is controlled by a molecular switch.

We chose the P2 phage switch because it is a simple system consisting of two promoters and their corresponding genes. On one end, you have the Pe promoter that produces cox protein, causing the phages to become lytic. On the other end, you have the Pc promoter. This promoter produces C protein, which keeps the phage in the lysogenic cycle.

To add to the equation, the C protein represses the Pe promoter, whereas cox protein represses the Pc promoter. (1)

![](https://2019.igem.org/wiki/images/f/f3/T--Stockholm--design-01.png)

### How to control the switch

To take control of the switch we focus on delC P2 phages that lack the C gene, and thus the C protein. These phages are obligatory lytic, since the C protein is in charge of regulating downstream targets that promote lysogeny. (1) Instead, we will express the C protein on a plasmid that will be carried by the vehicle bacteria. When the phage enters our carrier bacteria, the plasmid will express high levels of C protein, causing the phage to immediately enter lysogeny (based on interviews with experts, unpublished research).

![](https://2019.igem.org/wiki/images/4/48/T--Stockholm--design-02.png)

By including the genes of the C protein inside the plasmid, we can control its expression using different promoters, which in turn allows us to control the cycle of the phage. The pathogenic bacteria that our phage targets, do not produce C protein by themselves, as they lack our plasmid carrying C protein. This prevents the phages from going into lysogeny. Instead, they will remain lytic and continue on this cycle until there are no more target bacteria left. We have designed it this way to add a safety feature to our project, as this ensures no resistance against the phage is developed.

![](https://2019.igem.org/wiki/images/6/69/T--Stockholm--design-03.png)

As mentioned before, due to safety reasons we were not able to work with phages in our lab. As a consequence, we cannot count on cell lysis to prove that we induced the lytic cycle with our system. Instead, we use reporter genes that represent lysogenic or lytic expression profiles.

If you would like to learn more about what components are included in our plasmids, keep reading!

### AraC3 - The backbone of our system

AraC is a natural E.coli protein and regulator of the pBad promoter. In the absence of arabinose, it inhibits the expression of pBad, but in the presence of arabinose, it promotes the expression. This is of interest to us, as it makes for easy regulation of pBad and thus our system. We cannot guarantee that the endogenous expression of araC is enough to fully inhibit the high copy number plasmid we use, which is why we decided to add a copy of the araC gene to our system.

All parts were cloned into the B1C3 high-copy plasmid [[https://parts.igem.org/Part:pSB1C3](https://parts.igem.org/Part:pSB1C3)] which includes the araC gene. Parts that did not contain pBad we

## Our Switch Plasmid

Our **Switch Plasmid** is composed of two BioBricks. When the cell is transfected with this plasmid, it expresses C protein constitutively. This will represent our "lysogenic profile", which we can see from a high RFP expression and low or none GFP. Alternatively, we can also detect C expression using anti-Flag antibody, since our C protein has been designed to contain a flag tag.

By adding arabinose we can induce cox expression. We also express tetR, since it is located under the same promoter. TetR strongly inhibits tetO, and in consequence, C production stops. We will be able to detect this change by measuring the increase of GFP and decrease of RFP, which would signal a “lytic profile”. Alternatively, we can also use anti-cMyc antibody, that will bind to the cMyc tag that has been added to the cox protein.

{% image "https://2019.igem.org/wiki/images/6/69/T--Stockholm--design-03.png", "The Switch Plasmid - C protein is constitutively expressed, whereas Cox is ineducable. Once induced, Cox protein will be expressed and C protein will be inhibited, causing the phage to become lytic." %}

For further information on the two BioBricks that made up this plasmid click below:
[C-protein Characterization Construct](/wiki/results/)
[Inducible cox Characterization Construct](/wiki/results/)

## Model Plasmid

Our Model has been designed as a substitute for our phages since we were not allowed to work with them in the lab. In this plasmid, cox is downstream of Pe promoter, where C binds to repress expression. This arrangement simulates the conditions found on the delC P2 phage, as the C protein provided by our Switch Plasmid will have to repress the expression of cox in the phage.

Therefore, the Model Plasmid allows us to study how much C protein is required to repress the expression of cox. Using different concentrations of arabinose, we can create a gradient in the expression of C, and test how this influences the Pe promoter. As an outcome, we could measure the change in expression of YFP, or alternatively, use an anti-cMyc antibody.

{% image "/static/img/wiki/project/design-04.png", "The Model Plasmid - Replicates the presence of only Cox protein in the phage, with C protein being an external ineducable factor. Used to replicate phage behaviour without the need for the actual P2 phage." %}

For further information on the two BioBricks that made up this plasmid click below:
[Inducible C-protein construct](/wiki/results/)
[Phage Genome Simulation Module](/wiki/results/)

## The Sensing System

Our goal was to activate our system and promote the lytic cycle only when the vehicle bacteria have reached the site of infection, to make our treatment specific and efficient. Inspired by natural inflammation-detecting systems in E. coli, we chose to adopt a nitric oxide (NO)-induced transcriptional module to our project's main design. Nitric Oxide is a molecule released by our body as a sign of inflammation, and therefore, it will be found at high concentrations at the site of infection. In this design, we create a composite part that detects nitric oxide (NO-sensing promoter) that we can characterize and use in our Switch Plasmid instead of pBad promoter. Thus, instead of inducing the Switch with arabinose, we can induce it with Nitric Oxide, simulating how our system would work as a treatment.

For a more detailed explaination of how this would work and how we would design it into our system, click below:
[Nitric Oxide as a sign of inflammation](/wiki/results/)

## Final remarks

With our proposed system we can improve the efficiency of the P2 phage. A highly praised characteristic of phages however, is their specificity, meaning that the application of the P2 phage might be limited. However, this also means that any potential bacteriophage has to be characterized first, before it can be edited for use in phage therapy. It has already been proposed that altering the scaffold allows for this change in specific targets. (2) Therefore, we envision the possibility to characterize one phage, such as the P2, extremely well and continue by reprogramming the target of the phage.

Where our system currently uses arabinose for the induction of the switch, we also explored the idea of using a NO-induced system, where the detection of a site of inflammation would trigger the molecular switch of the phage. Although all requirements for such a system could be found in the iGEM distribution kit, we were unable to continue with this idea due to time restraints. This sensing system could however also be further developed towards a pathogen/target-specific induction system and we are aware that many other improvements could yet be devised, making our project the first step in a large scale project.

More about the potential of phage therapy and this project can be found in the [Outlook](/wiki/outlook/). If you want to learn more about the specific protocols we used during this project, continue to the [Notebook](/wiki/notebook/)!

## References

1. Christie GE, Calendar R. Bacteriophage P2. Bacteriophage. 2016;6(1):e1145782.
2. Ando H, Lemire S, Pires DP, Lu TK. Engineering Modular Viral Scaffolds for Targeted Bacterial Population Editing. Cell Syst. 2015;
