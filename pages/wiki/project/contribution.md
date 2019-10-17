---
title: Contribution
preamble:
permalink: /wiki/contribution/
tags: wiki
---

Our team has chosen to characterize briobrick [BBa_K611059](http://parts.igem.org/Part:BBa_K611059), which is composed of two separate expression units. On the one hand, we have a pBad promoter, followed by a Ribosome Binding Site (RBS) and the tetR gene. Expression of tetR can be activated by adding different concentrations of arabinose, which will bind to AraC3 and allow for transcription of the following genes. On the other hand, we have ptet promoter variant #9, followed by an RBS and a GFP protein. When tetR binds to ptet promoter, it inhibits the expression of GFP.

![](/static/img/wiki/contribution_biobrick.png)

Therefore, in absence of arabinose, this construct will produce GFP protein, which can be detected by its fluorescence. When adding arabinose, tetR will be produced, which will repress the expression of GFP and thus, decrease the fluorescent signal.

## Aim and Hypothesis

Our aim is to study the expression of this biobrick under different conditions.

First, we will study the effect of adding different concentrations of arabinose, ranging from 0µM to 1uM. Our hypothesis is that GFP expression negatively correlates with the concentration of arabinose. In other words, when we increase the amount of arabinose, we increase the amount of TetR repressor, and therefore, GFP expression is decreased.

Secondly, we will study change of expression over time. This will allow us to observe whether the repression of GFP expression is stable or unstable. Our hypothesis is that at time 0 - right after adding arabinose - the GFP expression will be similar to that of the control (no arabinose). Fluorescence will decrease over time, until it reaches a stable state - which would indicate that the repression is quite stable - or it increases again - which would indicate that the repression is unstable.

Lastly, we will compare the behaviour of this biobrick in two different backbones: the standard B1C3 backbone and a vector constitutively expressing AraC3. Our hypothesis is that the C3- BBa_K611059 construct will show lower expression of GFP, due to the overexpression of the pBAD promoter but not its regulator, AraC3. If our hypothesis is correct, the AraC3- BBa_K611059 construct will show a stronger repression of GFP, since we will also overexpress the AraC3 protein, which will allow for a higher expression of the TetR repressor protein.

## Material and Methods

### Material

-   Competent Top10 E.Coli
-   Biobricks (from distribution kit)
    -   BBa_K611059 → biobrick for characterization
    -   Backbone containing AraC3
-   Plasmid purification kit
-   PCR purification kit
-   Agarose Gel purification kit
-   L- arabinose from Sigma Aldritch
-   FLUOstar OMEGA microplate reader, from BMG labtech
-   Nano drop
-   96 well plate, dark bottom

#### For digestion

-   dH2O
-   Buffers: Fast Digest, Buffer H, Acetyl BSA
-   Restriction enzymes SacI, EcoRI, XbaI

#### For ligation

-   T4 buffer
-   T4 ligase
-   dH2O

### Methods

Transform TOP10 cells with C3- BBa_K611059 plasmid from the distribution kit, according to iGEM general protocol. Culture them on a plate overnight at 37 degrees.

#### Restriction cloning of AraC3-BBa_K611059

After performing overnight cultures with TOP10 C3- BBa_K611059 plate and TOP 10 AraC3 plate, we purified the plasmid and measured the concentration using a nano drop. After this, we proceeded with digestion. Because the size of biobrick BBa_K611059 is similar to that of C3 vector, we needed a way other than size to separate the digestion products. For that, we used SacI enzyme, that cut the C3 vector in the middle, allowing us to separate the final product by size in an agarose gel.

Therefore, we performed 2 separate digestions. The first was a single digestion 1 µg C3-BBa_K611059 with SacI, 15 minutes at 37 degrees.

| Component         | C3-BBa_K611059 |
| ----------------- | -------------- |
| dH2O              | 13.2 µl        |
| FastDigest buffer | 2.0 µl         |
| DNA (up to 2 µg)  | 3.8 µl         |
| SacI              | 1.0 µl         |
| Final volume      | 20.0 µl        |

We then PCR purified the digested C3- BBa_K611059 and made Buffer H + BSA mix of 5 µl Buffer H + 0.5 µl BSA.

Then, we double digested C3-BBa_K611059, 400 ng with EcoRI and SpeI.

| Reagent          | C3-BBa_K611059 |
| ---------------- | -------------- |
| dH2O             | 4.5 µl         |
| Buffer H         | 2.0 µl         |
| Acetyl BSA       | 0.2 µl         |
| DNA (up to 2 µg) | 12.4 µl        |
| EcoRI            | 0.42 µl        |
| SpeI             | 0.5 µl         |
| Final volume     | 20.0 µl        |

Now we could separate our biobrick from the C3 vector according to size in an agarose gel, after which we purified the DNA using an agarose gel purification kit. We also double digested AraC3 vector 500 ng with EcoRI and XbaI.

| Reagent          | Vector AraC3 |
| ---------------- | ------------ |
| dH2O             | 6.4 µl       |
| Buffer H         | 2.0 µl       |
| Acetyl BSA       | 0.2 µl       |
| DNA (up to 2 µg) | 10.5 µl      |
| EcoRI            | 0.42 µl      |
| XbaI             | 0.5 µl       |
| Final volume     | 20.0 µl      |

Finally, we performed ligation in both 1:3 ratio and 1:5 ratio. Ligated at room temperature over night.

| Reagent      | 1:3     | 1:5     | Negative |
| ------------ | ------- | ------- | -------- |
| T4 buffer    | 4.0 µl  | 4.0 µl  | 4        |
| Vector       | 0.1 µl  | 0.1 µl  | 0.5      |
| Insert       | 3.9 µl  | 6.5 µl  | -        |
| H2O          | 11 µl   | 8.4 µl  | 14.5 µl  |
| T4 Ligase    | 1.0 µl  | 1.0 µl  | 1        |
| Final volume | 20.0 µl | 20.0 µl | 20.0 µl  |

**GFP measurement using FLUOstar**

After transformation into TOP 10 cells, we seeded the E.Coli and cultured them overnight. The next day, we were able to pick which colony had successfully been transformed with a BBa_K611059 briobrick by placing the plate on top of UV light. This excites the GFP protein, resulting in a green-shiny colony visible to the eye (results not shown due to low quality of camera). We obtained an overnight culture of 2 successfully cloned AraC3 BBa_K611059 colonies, an overnight culture of a C3-BBa_K611059 colony and an overnight culture of AraC3 colony (negative control).

We prepared a 1M agarose stock solution diluted in LB media containing chloramphenicol, which we used to create the different exponential dilutions. Then, we performed the following steps to set up the 96 well plate with the different concentrations:

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

| 1M  | B   | 100mM | 10mM | 1mM | 100uM | 10uM | 1uM | 0uM | Property | Property 1 | Property 2 |
| --- | --- | ----- | ---- | --- | ----- | ---- | --- | --- | -------- | ---------- | ---------- |
| C - | 0   | C -   | C -  | C - | C -   | C -  | C - | C - | 0        | 0          | 0          |
| C+  | 0   | C+    | C+   | C+  | C+    | C+   | C+  | C+  | 0        | 0          | 0          |
| 23  | 0   | 23    | 23   | 23  | 23    | 23   | 23  | 23  | 0        | 0          | 0          |
| 23  | 0   | 23    | 23   | 23  | 23    | 23   | 23  | 23  | 0        | 0          | 0          |
| 27  | 0   | 27    | 27   | 27  | 27    | 27   | 27  | 27  | 0        | 0          | 0          |
| 27  | 0   | 27    | 27   | 27  | 27    | 27   | 27  | 27  | 0        | 0          | 0          |
| 2   | 1   | 3     | 4    | 5   | 6     | 7    | 8   | 9   | 10       | 11         | 12         |

Where:

-   B = blank (arabinose+ LB + chloramphenicol)
-   C- = negative control (AraC3)
-   C+ = C3 BBa_K611059 colony
-   23 = colony 1 in replicates
-   27 = colony 2 in replicates.

Last row: measurement kit (from less concentrated to more concentrated). Measurements were taken every 15 minutes over 5 hours.

## Results

<!-- ![](/static/img/wiki/contribution-bronze_agarose.jpeg)  -->

_Image 1: agarose gel showing results from double digestion of biobrick BBa_K611059 (A) and a negative control (B). In column A, we can see 2 smaller bands (1.2 kB and 0.8 kB), which correspond to the digestion of the backbone with SacI. This way we were able to separate the backbone from the biobrick (upper band)._

<!-- ![](/static/img/wiki/contribution-fluo_over_time-02.jpeg) -->

_Image 2: AraC3- BBa_K611059 fluorescence over time and under different concentrations of arabinose (n=2)_

<!-- ![](/static/img/wiki/contribution-fluo_over_time-01.jpeg)  -->

_Image 3: comparison between C3-BBa_K611059 and AraC3- BBa_K611059 fluorescence over time and incubated on 1M (n=2)_

## Discussion

Our results seem to be congruent with our hypothesis. As we can observe in image 2, fluorescence decreases with higher concentrations of arabinose, so there seems to be a negative correlation. Therefore, our first hypothesis is confirmed.

According to our second hypothesis, fluorescence would decrease over time, until it reached a plateau. Our results don’t seem to reach a plateau, and in fact, we can observe that fluorescence increases at low concentrations of arabinose. An increase in fluorescence can be explained by bacterial growth - the more bacteria divide, the more GFP they will produce. The system seems to reach an equilibrium point around 100µM, were the rate of cell growth-GFP production seems to be equal to the amount of inhibition by pbad-tetR. This result can be useful for systems where an stable production of a protein over time is required. Teams could design their construct by introducing the sequence of their desired protein instead of GFP, therefore, obtaining a stable expression of their protein over time, even if bacteria multiply.

In order to repress the system totally, one should either test for higher concentration of arabinose (more than 1M) or testing the system for a longer time period (longer than 5 hours). One possible outcome is that the pbad promoter is not strong enough to express as much tetR as required to repress the system, so saturation with arabinose will not decrease the expression of GFP. In this case, we recommend future teams that wish to further characterize this system to perform a similar experiment but including different concentrations of anhydrotetracycline (ATc) or its analogue, doxycycline (dox). This inhibitors bind to TetR protein and inhibit its function, this is, TetR can no longer bind to ptet and inhibit the expression of GFP. This would allow the team to understand how much concentration of TetR is necessary to repress the system.

Last, but not least, our system shows increased GFP production when AraC protein is overexpressed, as observed in image 3. AraC protein binds to pBad promoter and in the presence of arabinose, it promotes gene expression. These results seem to correspond to our third hypothesis, and it demonstrates that overexpression of AraC protein is required to achieve higher promoter strenght . Therefore, it is recommended for future teams using this system and who wish to achieve higher production of protein to change the backbone of the biobrick to one containing the AraC gene.