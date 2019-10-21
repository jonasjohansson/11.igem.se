---
title: Notebook
preamble: iGEM Stockholm 2019
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

[Taq Colony PCR Protocol.pdf](https://www.notion.so/43f62212507445a992050f386b8c1095#0990c9f567824b41b3fc21ff56a4f17e)

[Q5 PCR Protocol.pdf](https://www.notion.so/43f62212507445a992050f386b8c1095#acb95051e2e54fe68f55c823642a0cf5)

### Digestion

[Digestion Protocol AraC3 Vector and BioBricks.pdf](https://www.notion.so/43f62212507445a992050f386b8c1095#e33081c8021a46aab639f4b541ac0f4b)

[Digestion Protocol C3 Vector and BioBricks.pdf](https://www.notion.so/43f62212507445a992050f386b8c1095#0835733b696c42a28fe2d4376111dc5d)

### Ligation and Transformation

[Ligation and Transformation Protocol AraC3 and C3 vectors.pdf](https://www.notion.so/43f62212507445a992050f386b8c1095#d6a8404d4f0e46339aa263380b2beb89)

### HIFI Cloning

Manufacturers protocol:

[NEBuilder HiFi DNA Assembly Reaction Protocol](https://international.neb.com/protocols/2014/11/26/nebuilder-hifi-dna-assembly-reaction-protocol)

Alterations on the manufacturers protocol:

Create inserts with complementary ends to the vector, by either amplifying the vector or the inserts. a Total amount of max 200fmol DNA, with 50ng of Vector, is mixed with the HIFI master mix and incubated at 50°C for 15 minutes. Of the 20µl ligation reaction, 2µl were mixed with 6µl of water and 2µl 5x KCM. After one minute on Ice, this mix was used for transformation by heat-shock with 10µl of KCM competent cells.

[HIFI cloning.pdf](https://www.notion.so/43f62212507445a992050f386b8c1095#629d112231354c7fbcc17f2f6b5032bf)

### Fluorescence spectrometry

[Fluorescence Spectrometry Method.pdf](https://www.notion.so/43f62212507445a992050f386b8c1095#194d585bda674cac9686cb525905c51f)

### Flow cytometry

[Flow Cytometry Protocol.pdf](https://www.notion.so/43f62212507445a992050f386b8c1095#14e32e9104a849429f99f61ca4ca21da)

### Absorbance spectrometry

[Absorbance Spectrometry.pdf](https://www.notion.so/43f62212507445a992050f386b8c1095#1e1f275b5c914b03b5e6033de7babdca)

### KCM Competent Cells

[KCM Competent Cells Protocol.pdf](https://www.notion.so/43f62212507445a992050f386b8c1095#499afaa82e6148e6b6ddb1254ce206b7)

### Westernblot

[WESTERN-BLOT-Amans-protocol.pdf](https://www.notion.so/43f62212507445a992050f386b8c1095#f7bcb8f4770f481a890c96fcfdc13ce7)

### Overlap Extension

[OE-PCR protocol.pdf](https://www.notion.so/43f62212507445a992050f386b8c1095#cdb71d9b40764019a5f05b54d6022e5c)

[Overlap Extension Protocol.pdf](https://www.notion.so/43f62212507445a992050f386b8c1095#bd2aba113c0848cbaf2d18853d9e4f6e)

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

[Notebook Plasmid A and Plasmid B Characterization · Benchling.pdf](https://www.notion.so/43f62212507445a992050f386b8c1095#1919fc859a384d008d658514339258cd)

[HiFI cloning · Benchling.pdf](https://www.notion.so/43f62212507445a992050f386b8c1095#6abf216bd73c4168ac9463447f234ef8)

[](https://www.notion.so/43f62212507445a992050f386b8c1095#874a391e490e450a8c6f764b9a081b98)
