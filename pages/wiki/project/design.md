---
title: Design
preamble:
permalink: /wiki/design/
tags: wiki
---

## Abstract

iGEM Stockholm 2019 aimed to use of temperate phages for phage therapy, by taking control over their genetic switch. More specifically, the idea is to keep the phages lysogenic (inactive) whilst they are being transported, only to turn lytic (active) once the site of infection is reached.

To achieve this, we have designed a system in which one element of the P2 bacteriophage switch is lacking in the phage itself, but is present on a plasmid in the carrier bacteria. This will keep the phage in its dormant cycle whilst the plasmid is expressed. Once the carrier bacteria reaches the site of infection, the plasmid expression will be supressed, forcing the phage to switch its cycles and stard synthesizing new phage particles. Upon infection of a new host, the support-plasmid would not be present, thus preventing the phage from getting back into its inactive cycle, instead maintaining its kill potential until the targeted bacteria is no longer present.

As we were unable to test our idea in phages, a model plasmid was created instead, containing all elements required to test our system.

## Developing Esther

### The switch

As described before, phages have either one or two different life cycles. It is unknown exactly what determines if the phages remains lytic or lysogenize upon infection. However, the actual transition between the two cycles is governed by a molecular switch. This switch differs from one phage to another, signifying the difficulty of characterizing phages. To simplify things, we will only focus on the phage used by our team: the bacteriophage P2.

The P2 cycle regulation is controlled by a simple system of two promoters and their corresponding genes. On one side, you have the Pe promoter that produces cox protein. This causes the phages to become lytic. On the other side of the switch you have the Pc promoter. This promoter produces C protein which puts the phages into a lysogenic cycle. Furthermore, these genes are mutually exclusive and C protein represses the Pe promoter, whereas cox protein represses the Pc promoter. (1)

Since the balance between establishing of lysogeny or directly killing the host is so unstable and hard to predict, how can we avoid lysis of our carrier bacteria until they reach the site of infection? The answer is the core idea of this project: We use phages that do not produce C protein. As this protein is lacking, the phages are obligatory lytic, since C protein regulates downstream targets that control lysogeny (1). However, if the phages enter a cell that expresses C protein on high levels (by having its gene expressed on a plasmid vector), we can asume the phages enter lysogeny (based on interviews with experts, unpublished research). Then, if we manipulate the levels of C and cox (decreasing the first and increasing the latter) the phage may at some point induce the lytic cycle again, killing the hosting cell and infecting its targets in the environment. The (pathogenic) targets of our phage do not produce C protein by themselves, thus preventing the phages from going into lysogeny. Instead, they will remain lytic and continue the lytic cycle until there are no more target bacteria left.

Due to safety restrictions we were not allowed to use phages in the lab, which is why we had to simulate our model. To achieve this, we created biobricks containing the basic parts of the life cycle “Switch” of P2 that would allow us to manipulate it externally. We decided to create two plasmids containing composite parts. First, an artificial form of the switch that gave us the ability to manipulate the expression of the two regulatory proteins (C and cox) as a proof of concept. Secondly, a model that would help us better understand the dynamics of C and cox interaction in the native phage sequence. These two plasmid systems consist of four new [](https://www.notion.so/028fe35f-fa1d-47d8-baa8-fb3a88cf00a0) that represent different parts of the phage genome or phases in phage life cycles.

As a consequence of not using active phage particles, we could also not anymore count on cell lysis to prove we induced the lytic cycle but we had to use reporter genes that would represent lysogenic or lytic expression profiles. The project design is based on the following parts:

### Plasmid vectors

AraC is a natural E.coli protein and inhibitor of pBad. This is of interest to us as araC can be inhibited with arabinose, thus allowing us to gain full control over the pBad promoter. However, as we are dealing with a high-copy number plasmid, we could not guarantee that the naitive expression of araC by the bacteria itself would be enough to fully inhibit pBad. Because of this uncertainty, we decided to add a copy of the araC gene to our system.

All parts were cloned into the B1C3 high-copy plasmid [https://parts.igem.org/Part:pSB1C3](https://parts.igem.org/Part:pSB1C3) which includes the araC gene. Parts that did not contain pBad were cloned on the same vector for the sake of consistency.

### Lysgenic stabilizer module

This composite part is composed by the constitutive promoter J23119, followed by two tet-Operators, and the gene that encodes for C protein fused with FLAG-tag (DYKDDDDK epitope) which will allow us to detect C protein with immunological techniques, since there is no antibody against C commercially available. Finally, RFP gene is expressed downstream as a real-time cell reporter. This module imitates the plasmid that the carrier bacteria would be transporting before being infected with the delC P2 strain. Details: Flag tag is fused, RFP not fused to not impair C kinetics or function, 2x RBSs to achieve the highest expression of all the cistrons on the transcript. The promoter used is known to be very strong (ref registry [http://parts.igem.org/Part:BBa_J23119](http://parts.igem.org/Part:BBa_J23119) to drive as much expression of C as possible.

### Lytic expression module

A composite, tricistronic part that co-expresses TetR, Cox and GFP under the control of pBad promoter. Cox gene is fused with cMyc tag for immunological detection (similarly to C protein, no commercial antibody for cox is available). TetR is an inhibitor acting on Tet-operator regions (tetO). Cox is a transcription factor known to activate downstream genes that cause the lytic cycle, thus this module was designed to experimentally induce the switch from lysogeny to lytic cycle.

### Switch plasmid

The two previous parts are designed to work together on one vector making what we call the **Switch plasmid**. When together, the cell expresses C protein constitutively, until we induce cox expression with arabinose. Then, we also express tetR which strongly inhibits tetO hence C production. Since we are not working with active phages and we cannot observe cell lysis, we can see that from a high RFP (and C) expression and low or none GFP (and cox), representing a “lysogenic profile” after arabinose induction we eventually have a lot of GFP and less RFP, what would signal a “lytic profile”.

The switch plasmid - C protein is constitutively expressed, whereas Cox is ineducable. Once induced, Cox protein will be expressed and C protein will be inhibited, causing the phage to become lytic.

#### Regulated Lysogenic stabilizer module

Regulated lysogenic stabilizer module - Allows characterization of C protein expression

This part has the exact same sequence as Lytic stabilizer module with only difference being the inducible promoter pBad (instead of pTet). This gives us the ability to increase its expression by administrating the monosaccharide arabinose in the growth medium. Due to very limited literature on the dynamics of C inhibition on Pe (the promoter of cox factor), and due to the fact that our model suggested we would not manage to induce the switch using pTet to drive C expression, we designed this part to test the concentration-dependent effect of C on the native regulatory region of the P2 switch.

#### Phage genome simulation module

Phage genome simulation module - Replication of the genomic switch of the P2 DelC phage.

A module consisting of the intragenic region between C and cox genes, which also contains both their promoters, the downstream cox gene fused with cMyc tag, followed by YFP reporter. It is used to simulate the delC strain Phage genome and the dynamics C protein has on the native cox promoter.

### Model plasmid

The latter two parts are again designed to work on the same vector. Only when we combine them we can externally create a gradient in the concentration of C and test how this influences the Pe promoter and get a better idea of what would be needed for the switch to happen if we would infect bacteria with phages and only intervene in C production (as was the original idea). By synthesizing this plasmid we aimed to create a model of the dynamics of C and cox to get an insight on the native P2 switch since so little is known about it, hence we named it the **Model plasmid**.

The model plasmid - Replicates the presence of only Cox protein in the phage, with C protein being an external ineducable factor. Used to replicate phage behaviour without the need for the actual P2 phage.

### Final remarks

With our proposed system we can improve the efficiency of the P2 phage. A highly praised characteristic of phages however is their specificity, meaning that the application of the P2 phage might be limited. However, this also means that any potential bacteriophage has to be characterized first, before it can be edited for use in phage therapy. It has already been proposed that altering the scaffold allows for this change in specific target (2). Therefore, we envision that the focus would be to characterize one phage, such as the P2, extremely well and continue by reprogramming the target of the phage.

Esther could potentially be applied in the more general context of phage therapy. The fundamental idea of replicating the life-cycle gene regulatory network or a model of it on a plasmid could be adapted for many classes of temperate phages with minor changes. Development of Esther-like libraries of plasmids using different phages could be used to fight different critical infections, or be combined for higher efficiency, as administration of phage cocktails is currently a common practice on this sake [citation needed-do we mention this somewhere else?]

Where our system currently uses arabinose for the induction of the switch, we also explored the idea of using a NO-induced system, where the detection of a site of inflammation would trigger the molecular switch of the phage. Although all requirements for such a system could be found in the iGEM distribution kit, we were unable to continue with this idea due to time restraints. This sensing system could however also be further developed towards a pathogen/target-specific induction system and we are aware that many other improvements could yet be devised, making out project but a first step in a large scale project.

References

(1) Gail E. Christie and Richard Calendar (2016). Bacteriophage P2. _Bacteriophage_. Jan-Mar; 6(1): e1145782

(2) Ando, H., Lemire, S., Pires, D. P., & Lu, T. K. (2015). Engineering Modular Viral Scaffolds for Targeted Bacterial Population Editing. Cell systems, 1(3), 187–196. doi:10.1016/j.cels.2015.08.013
