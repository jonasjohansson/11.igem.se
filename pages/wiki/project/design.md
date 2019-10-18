---
title: Design
preamble:
permalink: /wiki/design/
tags: wiki
---

> We [designed a delivery system](https://www.notion.so/Description-JooAnaAnd-1098d1a501a04f12bc8318252d695c1c) that carries temperate phages right to the site of infection. Once there, our molecular switch will trigger the phage to burst out of the carrier, infecting the surrounding bacteria. This will increase the effective dose of phages, allowing them to avoid barriers that would otherwise limit their efficiency in phage therapy.

## Introduction

We will introduce the P2 Switch, and we will explain how we reproduced it in our lab using four different biobricks. With these biobricks we built two plasmids, one called the Switch Plasmid, and the other called the **Model Plasmid**. The **Switch Plasmid** will be activated when there is inflammation, so we also explain our **Sensing System**. _Due to safety restrictions we were not allowed to use phages in the lab, which is why we had to simulate our model._

### The P2 Switch

Temperate phages have two life cycles. It is unknown what triggers the phage to change from one to the other, but we know that it is controlled by a molecular switch.

We chose the P2 phage switch because it is a simple system consisting of two promoters and their corresponding genes. On one end, you have the Pe promoter that produces cox protein, causing the phages to become lytic. On the other end, you have the Pc promoter. This promoter produces C protein, which keeps the phage in the lysogenic cycle.

To add to the equation, the C protein represses the Pe promoter, whereas cox protein represses the Pc promoter (1).

[](https://www.notion.so/f4c539ce345245f280bb8dc169a7f65f#1e62a5c59b7541778a5fe7ceca94e4eb)

### How to control the switch

We use P2 phages that do not produce C protein. These phages are obligatory lytic, since C protein regulates downstream targets that promote lysogeny (1). Instead, we will express the C protein in the vehicle bacteria, by introducing the gene into a plasmid. When the phage enters our carrier bacteria, expressing C protein on high levels, the phage will immediately enter lysogeny (based on interviews with experts, unpublished research).

[](https://www.notion.so/f4c539ce345245f280bb8dc169a7f65f#224122d02c434ec4a198547cf6fa82af)

By including the genes of the C protein and cox protein inside the plasmid, we are able to control their expression using different promoters, which in turn allows us to control the cycle of the phage. The pathogenic bacteria that our phage targets do not produce C protein by themselves, thus preventing the phages from going into lysogeny. This is also an added [safety](https://www.notion.so/Safety-NerAzhSan-b85ed5c2dc5f45b8978bd47b217148eb) feature to our project. Instead, they will remain lytic and continue on this cycle until there are no more target bacteria left.

As a consequence of not using active phage particles, we could also not anymore count on cell lysis to prove we induced the lytic cycle but we had to use reporter genes that would represent lysogenic or lytic expression profiles.

The project design is based on the following parts:

[Plasmid Vectors](https://www.notion.so/6cee7bb17bb44f38ad0175d7e7940504)

## Switch plasmid

The two previous parts are designed to work together on one vector making what we call the **Switch plasmid**. When together, the cell expresses C protein constitutively, until we induce cox expression with arabinose. Then, we also express tetR which strongly inhibits tetO hence C production. Since we are not working with active phages and we cannot observe cell lysis, we can see that from a high RFP (and C) expression and low or none GFP (and cox), representing a “lysogenic profile” after arabinose induction we eventually have a lot of GFP and less RFP, what would signal a “lytic profile”.

[](https://www.notion.so/f4c539ce345245f280bb8dc169a7f65f#c2378d7ce1604e809e56dca1057b98f1)

The switch plasmid - C protein is constitutively expressed, whereas Cox is ineducable. Once induced, Cox protein will be expressed and C protein will be inhibited, causing the phage to become lytic.

For further information on the two biobricks that made up this plasmid click below:

[Lysogenic stabilizer module – C protein expression](https://www.notion.so/d37d159f7e7046ddbb1bc851051de66c)

[**Lytic expression module – TetR/Cox protein expression**](https://www.notion.so/1c1f0f0726ac4117a4c6571ef1a28c3a)

## Model plasmid

The latter two parts are again designed to work on the same vector. Only when we combine them we can externally create a gradient in the concentration of C and test how this influences the Pe promoter and get a better idea of what would be needed for the switch to happen if we would infect bacteria with phages and only intervene in C production (as was the original idea). By synthesizing this plasmid we aimed to create a model of the dynamics of C and cox to get an insight on the native P2 switch since so little is known about it, hence we named it the **Model plasmid**.

[](https://www.notion.so/f4c539ce345245f280bb8dc169a7f65f#da060578103349d1a77e091a3866e397)

The model plasmid - Replicates the presence of only Cox protein in the phage, with C protein being an external ineducable factor. Used to replicate phage behaviour without the need for the actual P2 phage.

For further information on the two biobricks that made up this plasmid click below:

-   [Regulated Lysogenic stabilizer module – C protein under pBad control](https://www.notion.so/643e5689136b43d9b2509c43aa3c61ec)
-   [Phage genome simulation module – native cox promoter](https://www.notion.so/3a05cfe57e2544f29457818464f737f1)

## The Sensing System

In order to make phage delivery more efficient, it is not enough to enclose the phages in bacteria. We wanted the phages to get active and enter the lytic cycle only when they have reached the infection site, in order to make our treatment specific and efficient. Inspired by natural inflammation-detecting systems in E. coli, we chose to adapt a nitric oxide (NO)-induced transcriptional module to our project main design. In this design, we create a composite part that detects nitric oxide (No-sensing construct) that we can characterize and use on our switch plasmid instead of pBad promoter. That way, instead of inducing the switch with arabinose, we can induce it with nitric oxide, simulating how our system would work as a treatment.

-   [Nitric oxide and inflammation](https://www.notion.so/a2f0d08e15984eb69425f14f801d3b67)

## Final remarks

With our proposed system we can improve the efficiency of the P2 phage. A highly praised characteristic of phages however is their specificity, meaning that the application of the P2 phage might be limited. However, this also means that any potential bacteriophage has to be characterized first, before it can be edited for use in phage therapy. It has already been proposed that altering the scaffold allows for this change in specific target (2). Therefore, we envision that the focus would be to characterize one phage, such as the P2, extremely well and continue by reprogramming the target of the phage.

Where our system currently uses arabinose for the induction of the switch, we also explored the idea of using a NO-induced system, where the detection of a site of inflammation would trigger the molecular switch of the phage. Although all requirements for such a system could be found in the iGEM distribution kit, we were unable to continue with this idea due to time restraints. This sensing system could however also be further developed towards a pathogen/target-specific induction system and we are aware that many other improvements could yet be devised, making out project but a first step in a large scale project.

More about the potential of phage therapy and this project can be found in the [Outlook (NerAzhSan)](https://www.notion.so/31b0d1eb-186c-4856-b7a0-0e0b897a754e). If you want to learn more about the specific protocols we used during this project, continue to the [Wet Lab / Notebook (JooAndRebMilTob)](https://www.notion.so/43f62212-5074-45a9-9205-0f386b8c1095)!

## References

(1) Gail E. Christie and Richard Calendar (2016). Bacteriophage P2. _Bacteriophage_. Jan-Mar; 6(1): e1145782

(2) Ando, H., Lemire, S., Pires, D. P., & Lu, T. K. (2015). Engineering Modular Viral Scaffolds for Targeted Bacterial Population Editing. Cell systems, 1(3), 187–196. doi:10.1016/j.cels.2015.08.013

Avdagić, N. _et al._ (2013) ‘Nitric oxide as a potential biomarker in infl ammatory bowel disease’, _Bosnian Journal of Basic Medical Sciences_. doi: 10.17305/bjbms.2013.2402.

Daeffler, K. N.-M. _et al._ (2017) ‘Engineering bacterial thiosulfate and tetrathionate sensors for detecting gut inflammation’, _Mol Syst Biol_, 13, p. 923. doi: 10.15252/msb.20167416.

Gardner, A. M., Gessner, C. R. and Gardner, P. R. (2003) ‘Regulation of the nitric oxide reduction operon (norRVW) in Escherichia coli. Role of NorR and sigma54 in the nitric oxide stress response.’, _The Journal of biological chemistry_. American Society for Biochemistry and Molecular Biology, 278(12), pp. 10081–6. doi: 10.1074/jbc.M212462200.

Kolios, G., Valatas, V. and Ward, S. G. (no date) ‘Nitric oxide in inflammatory bowel disease: a universal messenger in an unsolved puzzle’. doi: 10.1111/j.1365-2567.2004.01984.x.

Lundberg, J. O. N. _et al._ (1994) ‘Greatly increased luminal nitric oxide in ulcerative colitis’, _The Lancet_. doi: 10.1016/S0140-6736(94)90460-X.

Protopapas, A. _et al._ (2016) ‘Elevated levels of alveolar nitric oxide in patients with inflammatory bowel disease’, in _5.2 Monitoring Airway Disease_. European Respiratory Society, p. PA1065. doi: 10.1183/13993003.congress-2016.PA1065.

Riglar, D. T. _et al._ (2017) ‘Engineered bacteria function in the mammalian gut as long term live diagnostics of inflammation HHS Public Access Author manuscript’, _Nat Biotechnol_, 35(7), pp. 653–658. doi: 10.1038/nbt.3879.

[](https://www.notion.so/f4c539ce345245f280bb8dc169a7f65f#8ba176550268428fb8d7998a40b191be)
