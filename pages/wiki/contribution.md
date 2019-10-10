---
title: Contribution
preamble:
permalink: /wiki/contribution/
tags: wiki
---

## Background information

Our team has chosen to characterize briobrick [BBa_K611059](http://parts.igem.org/Part:BBa_K611059) ([http://parts.igem.org/Part:BBa_K611059](http://parts.igem.org/Part:BBa_K611059)), which is composed of two separate expression units. In one hand, we have a pBad promoter, followed by a Ribosome Binding Site (RBS) and the tetR protein. We can activate the expression of tetR by adding different concentrations of arabinose, which will bind to AraC3 and allow for transcription of the following genes. On the other hand, we have ptet promoter variant #9, followed by an RBS and a GFP protein. When tetR binds to ptet promoter, it inhibits the expression of GFP.

INCLUDE IMAGE OF THE BIOBRICK —> from snap gene or registry

Therefore, in non-arabinose conditions, this construct will produce GFP protein, which can be detected by its fluorescence. When adding arabinose, tetR will be produced, which will repress the expression of GFP and thus, decrease the fluorescent signal.

## Aim and Hypothesis

Our aim is to study the expression of this biobrick under different conditions.

First, we will study the effect of adding different concentrations of arabinose, ranging from 0uM to 1uM. Our hypothesis is that GFP expression negatively correlates to the concentration of arabinose. In other words, when we increase the amount of arabinose, we increase the amount of TetR repressor, and therefore, GFP expression is decreased.

Secondly, we will study change in expression over time. This will allow us to observe whether the repression of GFP expression is stable over time or if rather unstable. Our hypothesis is that point 0 - right after adding arabinose - the GFP expression will be similar to that of the control (no arabinose). Fluorescence will decrease over time, until it reaches a stable state - which would indicate that the repression is quite stable - or it increases again - which would indicate that the repression is unstable.

Lastly, we will compare the behaviour of this biobrick in two different backbones: the standard C3 backbone (**include proper name**) and a vector constitutively expressing AraC3. Our hypothesis is that the C3- BBa_K611059 construct will show leakiness, due to the overexpression of the pBAD promoter but not it’s regulator, AraC3. If our hypothesis is correct, the AraC3- BBa_K611059 construct will show a stronger repression of GFP, since we will also over express the AraC3 protein, which will allow for a higher expression of the TetR repressor protein.

INCLUDE SIMPLE IMAGES WITH OUR HYPOTHESIS

## Material and Methods

1. Material

-   Competent Top10 E.Coli
-   Biobricks (from distribution kit)
    -   BBa_K611059 → biobrick for characterization
    -   ####### → biobrick to express AraC3
-   Plasmid purification kit → LOOK FOR NAME
-   PCR purification kit → name?
-   Agarose Gel purification kit
-   L- arabinose from Sigma Aldritch
-   FLUOstar OMEGA microplate reader, from BMG labtech
-   Nano drop
-   96 well plate, dark bottom
-   For digestion:
    -   dH2O
    -   Buffers: Fast Digest, Buffer H, Acetyl BSA
    -   Restriction enzymes SacI, EcoRI, XbaI
-   For ligation
-   T4 buffer
-   T4 ligase
-   dH2O

2. Methods

HOW DID WE GET COLONIES FROM BIOBRICK KIT? Ask Azhar

**Restriction cloning of AraC3-BBa_K611059**

After performing overnight cultures with TOP10 C3- BBa_K611059 plate and TOP 10 AraC3 plate, we purified the plasmid and measured the concentration using a nano drop. After this, we proceeded with digestion. Because the size of biobrick BBa_K611059 is similar to that of C3 vector, we needed a way other than size to separate the digestion products. For that, we used SacI enzyme, that cut the C3 vector in the middle, allowing us to separate the final product by size with an agarose gel.

Therefore, we performed 2 separate digestions. The first was a single digestion 1 µg C3-BBa_K611059 with SacI, 15 minutes at 37 degrees.

[Untitled](https://www.notion.so/404a154ca38a41569180b5c6f8b232a7)

We then PCR purified the digested C3- BBa_K611059 and made Buffer H + BSA mix of 5 µl Buffer H + 0.5 µl BSA.

Then, we double digested C3-BBa_K611059, 400 ng with EcoRI and SpeI.

[Untitled](https://www.notion.so/7db92467e48a476888b331341e6626a0)

Now we could separate our briobrick from the C3 vector according to size in an agarose gel, after which we purified the DNA using an agarose gel purification kit.

We also double digested AraC3 vector 500 ng with EcoRI and XbaI.

[Untitled](https://www.notion.so/ef3f4e41456c492ea13b16f08be1d9d4)

Finally, ligation was performed in both 1:3 ratio and 1:5 ratio. Ligated at room temperature over night.

[Untitled](https://www.notion.so/3358a57752d44d4f8f4fdb4632e3c9e9)

**GFP measurement using FLUOstar**

After transformation into TOP 10 cells, we seeded the E.Coli and cultured them overnight. The next day, we were able to pick which colony had successfully been transformed with a BBa_K611059 briobrick by placing the plate on top of UV light. This excites the GFP protein, resulting in a green-shiny colony visible to the eye (results not shown due to low quality of camera). We obtained an overnight culture of 2 successfully cloned AraC3 BBa_K611059 colonies, an overnight culture of a C3-BBa_K611059 colony and an overnight culture of AraC3 colony (negative control).

We prepared a 1M agarose stock solution diluted in LB media containing chloramphenicol, which we used to create the different exponential dilutions.Then, we performed the following steps to set up the 96 well plate with the different concentrations:

-   Blank (LB+ chloramphenicol only with different concentrations of arabinose)
-   _For the Top10 AraC3 (negative control) and the C3 BBa_K611059 colony_
    -   _Aliquot 7 eppendorf tube with enough for 250 µl Top10-AraC3 cells OD = 0.4._
    -   _Spin down the tubes and discard the supernatant._
    -   _Resuspend the cells in 200 µl of each of the arabinose-adjusted-media._
    -   _Load 200 µl of the samples according to the table below._
-   _For colony 1 of TOP 10 AraC3 BBa_K611059 (repeat same for colony 2)_
    -   _Aliquot 7 tube with enough for 500 µl Top10- BB cells OD= 0.15_
    -   _Spin down the tubes and discard the supernatant._
    -   _Resuspend the cells in 500 µl of each of the arabinose-adjusted-media._
    -   _Load 200 µl of the samples according to the table below (in duplicates)_
-   For standard curve → follow protocol from Measurement kit

The distribution on the 96 x well plate was as followed:

[Plate reader distribution](https://www.notion.so/64f9f5af42924e2ca0e8370665c5901e)

Where:

B = blank (arabinose+ LB + chloramphenicol)

C- = negative control (AraC3)

C+ = C3 BBa_K611059 colony

23 = colony 1 in replicates

27 = colony 2 in replicates

Last row: measurement kit (from less concentrated to more concentrated)

Measurements were taken every 15 minutes over 5 hours.
