---
title: Notebook
preamble:
permalink: /wiki/notebook/
tags: wiki
---

> From early June to late October we have worked hard in the lab to realize Esther. Here, you can find all of the protocols used, a timeline of important points in the process, as well as the lab notes themselves.

## Dictionary

During our laboratory work, we assigned nicknames to our BioBricks for the sake of simplicity. This table will allow the reader to understand what BioBrick we are mentioning in our notebook.

| Notebook name | Wiki name                                                 | Registry Link                           |
| ------------- | --------------------------------------------------------- | --------------------------------------- |
| BB1           | C-protein Characterization Construct (Lysogenic module)   | http://parts.igem.org/Part:BBa_K3024004 |
| BB1.2         | Inducible C-protein construct - Regulate lysogenic module | http://parts.igem.org/Part:BBa_K3024009 |
| BB2           | Inducible cox characterization construct (Lytic module)   | http://parts.igem.org/Part:BBa_K3024011 |
| BB3           | Phage genome simulation module                            | http://parts.igem.org/Part:BBa_K3024012 |

## Protocols

### PCR

[Taq Colony PCR Protocol.pdf](https://2019.igem.org/wiki/images/1/10/T--Stockholm--Taq_Colony_PCR_Protocol.pdf)

[Q5 PCR Protocol.pdf](https://2019.igem.org/wiki/images/1/1f/T--Stockholm--Q5_PCR_Protocol.pdf)

### Digestion

[Digestion Protocol AraC3 Vector and BioBricks.pdf](https://2019.igem.org/wiki/images/9/94/T--Stockholm--Digestion_Protocol_AraC3_Vector_and_BioBricks.pdf)

[Digestion Protocol C3 Vector and BioBricks.pdf](https://2019.igem.org/wiki/images/e/eb/T--Stockholm--Digestion_Protocol_C3_Vector_and_BioBricks.pdf)

### Ligation and Transformation

[Ligation and Transformation Protocol AraC3 and C3 vectors.pdf](https://2019.igem.org/wiki/images/7/70/T--Stockholm--Ligation_and_Transformation_Protocol_AraC3_and_C3_vectors.pdf)

### HIFI Cloning

Manufacturers protocol:

[NEBuilder HiFi DNA Assembly Reaction Protocol](https://international.neb.com/protocols/2014/11/26/nebuilder-hifi-dna-assembly-reaction-protocol)

Alterations on the manufacturers protocol:

Create inserts with complementary ends to the vector, by either amplifying the vector or the inserts. a Total amount of max 200fmol DNA, with 50ng of Vector, is mixed with the HIFI master mix and incubated at 50°C for 15 minutes. Of the 20µl ligation reaction, 2µl were mixed with 6µl of water and 2µl 5x KCM. After one minute on Ice, this mix was used for transformation by heat-shock with 10µl of KCM competent cells.

[HIFI cloning.pdf](https://2019.igem.org/wiki/images/0/04/T--Stockholm--HIFI_cloning.pdf)

### Fluorescence spectrometry

[Fluorescence Spectrometry Method.pdf](https://2019.igem.org/wiki/images/c/c6/T--Stockholm--Fluorescence_Spectrometry_Method.pdf)

### Flow cytometry

[Flow Cytometry Protocol.pdf](https://2019.igem.org/wiki/images/7/73/T--Stockholm--Flow_Cytometry_Protocol.pdf)

### Absorbance spectrometry

[Absorbance Spectrometry.pdf](https://2019.igem.org/wiki/images/4/47/T--Stockholm--Absorbance_Spectrometry.pdf)

### KCM Competent Cells

[KCM Competent Cells Protocol.pdf](https://2019.igem.org/wiki/images/7/75/T--Stockholm--KCM_Competent_Cells_Protocol.pdf)

### Western blot

[Western blot Protocol.pdf](https://2019.igem.org/wiki/images/0/0b/T--Stockholm--Western_Blot.pdf)

### Overlap Extension

[OE-PCR protocol.pdf](https://2019.igem.org/wiki/images/3/3b/T--Stockholm--OE-PCR_protocol.pdf)

[Overlap Extension Protocol.pdf](https://2019.igem.org/wiki/images/6/69/T--Stockholm--Overlap_Extension_Protocol.pdf)

Q5 Site Directed Mutagenesis

[Q5® Site-Directed Mutagenesis Kit Protocol (E0554)](https://international.neb.com/protocols/2013/01/26/q5-site-directed-mutagenesis-kit-protocol-e0554)

## Workflow

### June

-   12/6 p15A with kanamycin resistance was chosen as backbone.
-   12/6 Improved BioBricks with RBS and Terminators were ordered.
-   26/6 Improved BioBricks arrived with primers that will insert overhangs past the prefix and suffix.
-   27/6 Altered growth curve protocol for E.coli C1757 to reduce chance of contamination.
-   28/6 Ordered primers that add basepairs past the prefix and suffix, to facilitate better binding sites for restriction enzymes.

### July

-   1/7 Switch from p15A to the C3 and C5 plasmids that have chloramphenicol instead of kanamycin and are easier to handle.
-   5/7 Successfully created competent C1757 cells using the KCM protocol.
-   6/7 Ligation with T4 ligase for 10 min according to the manufacturer protocol did not work.
-   8/7 Brick 1.2 and Brick 3 are amplified but not brick 1 and 2, we ordered more specific primers. An advisor suggested including AraC in constructs containing pBAd.
-   9/7 New primers for overlap extension ordered and will a different cloning method will be tried.
-   10/7 We were advised to do larger PCR reactions, not to purify after digestion, use T4 ligase at 16C overnight and not to exceed the total reaction volume of 20ul and to try different molar rations. And to use much bigger volumes of insert and vector.
-   15/7 AraC3 was isolated from The iGEM kit, to be used as the standard cloning vector.
-   16/7-22/7 We tried to clone all BioBricks into either the C3 or AraC3 vector in 1:3 ratio and 1:5 ratio and there is a lot of background signaling.
-   18/7 Charactarization started. Sequencing results revealed that we had not inserted our desired brick.
-   25/7 Used Phusion ad Pfu polymerases to do colony pcr. Pfu PCR was unsuccessful at the chosen annealing temperature. All colonies were negative.
-   31/7 Added an initial cell lysis step of colonies to the Colony PCR protocol.
-   31/7 In order to reduce the background signaling, we have tried to dephosphorylate our vector.

### August

-   5/8 Successfully cloned brick 1.2 into AraC3 thanks to dephosphorylation.
-   13/8 Adding a second BioBrick to the previously created construct failed. Expected it to be caused by non-specifically digested BioBricks.
-   19/8 Time of digestion decreased from 2h to 15 min to minimize star activity.
-   26/8 Gelelectrophoresis of BB3 suddenly produces some shorter unspecific bands.

### September

-   3/9 Some of the previous positive colonies of AraC3 BB1.2, were cultured and the plasmids isolated. After sequencing, it appeared there was an extensive deletion in the RFP sequence and 2-3 new stop codons had appeared.
-   9/9 One of our advisors recommended that we change the cloning assembly technique, as well as to refrain from doing overlap extension since it is less likely you will get it to work with short overlaps. We started working with Hi-Fi cloning.
-   14/9 To reduce the amount of background the template concentration was reduced.
-   16/9 We successfully cloned BB1.2 and the Switch Plasmid. Low background noise visible.
-   20/9 Cloning of Model Plasmid not successful due to unspecific PCR products in both inserts.
-   23/9 Sequencing confirmed successful cloning of Switch Plasmid.
-   26/9 Created new inserts for cloning of Model Plasmid.

### October

-   3/10 Site-directed mutagenesis in Switch Plasmid to create BB1 and BB22 in separate plasmids.
-   4/10 Screening of colonies of BB1 and BB2
-   8/10 Sequencing confirmed that the sequences of BB1, BB2, BB1.2, BB3, and AraC3 were correct. The sequencing of the Model Plasmid showed variations on the expected sequence.
-   10/10 Adding full RBS to BB1 and BB2.
-   16/10 Construct arrived and was transformed
-   18/10 Flow Cytometry and western blot were performed on induced (Arabinose 0.2%) and non-induced BB1, BB2, Switch Plasmid, AraC3.

## Detailed lab notes

[Notebook Plasmid A and Plasmid B Characterization (Benchling).pdf](https://2019.igem.org/wiki/images/8/8e/T--Stockholm--notebook-plasmid-a-and-plasmid-b-characterization.pdf)

[HiFI cloning (Benchling).pdf](https://2019.igem.org/wiki/images/3/31/T--Stockholm--notebook-hifi-cloning.pdf)
