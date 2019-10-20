---
title: Sequences
preamble:
permalink: /wiki/sequences/
tags: wiki
---

## Amplification primers

| Name                    | Sequence                                             |
| ----------------------- | ---------------------------------------------------- |
| Amplification1_F        | GACGCCAGGTTGAAT-GAATTCGCGGCCGCTT                     |
| Amplification1_R        | CCGTATTTGGAGGTA-CTGCAGCGGCCGCTA                      |
| Amplification_Brick2_F: | GACGCCAGGTTGAAT-GAATTCGCGGCCGCTTCTAGAACATTGATTATTTGC |
| Amplification_Brick2_R: | CCGTATTTGGAGGTA-CTGCAGCGGCCGCTACTAGTAGCT             |

## Sequencing primers

| Name     | Sequence                |
| -------- | ----------------------- |
| Seq_P1_R | GAGTTCGAAATCGAAGGTGAAGG |
| Seq_P1_F | CCTTCACCTTCGATTTCGAAC   |
| Seq_P2_R | TTTATCGCCGCCAACAATTTG   |
| Seq_P2_F | TTAGATGGTGATGTTAATGGGC  |
| Seq_P3_F | TTAGATGGTGATGTTAATGGGC  |
| Seq_P3_R | GTTGCATCACCTTCACCCTCTC  |
| VF2      | TGCCACCTGACGTCTAAGAA    |
| VR       | ATTACCGCCTTTGAGTGAGC    |

## New amplification primers

| New                    | Sequence                                             |
| ---------------------- | ---------------------------------------------------- |
| Max_primer_BB1/BB1.2_F | GACGCCAGGTTGAAT-GAATTCGCGGCCGCTTCTAGAATTTCAG         |
| Max_primer_BB1/BB1.2_R | CCGTATTTGGAGGTA-CTGCAGCGGCCGCTACTAGTATGG             |
| Tobi_BB2_F             | GACGCCAGGTTGAAT-GAATTCGCGGCCGCTTCTAGAACATTGATTATTTGC |
| Tobi_BB2_R             | CCGTATTTGGAGGTA-CTGCAGCGGCCGCTACTAGTAGC              |
| Tobi_BB3_F             | GACGCCAGGTTGAAT-GAATTCGCGGCCGCTTCTAGAGACTATCTTC      |
| Tobi_BB3_R             | CCGTATTTGGAGGTA-CTGCAGCGGCCGCTACTAGTAAGG             |

## Overlap extension and HIFI primer

| Name             | Sequence                                    |
| ---------------- | ------------------------------------------- |
| Q5 Tm for primer | Ta = Tm_lower+1°C                           |
| OE_1_1+2_F_0008  | CGCCAGGTTGAATGAATTCGC                       |
| OE_1_1+2_R_0009  | CAAATAATCAATGTTGGCCGGCTTGACGG               |
| OE_2_1+2_F_00010 | GTCAAGCCGGCCAACATTGATTATTTGCACGGCGTCAC      |
| OE_2_1+2_R_00011 | GTATTTGGAGGTACTGCAGCGG                      |
| OE_1_1+3_F_00012 | CGCCAGGTTGAATGAATTCGC                       |
| OE_1_1+3_R_00013 | CGAGAAGATAGTCTTGACGGCTAGCTCAGTCCT           |
| OE_3_1+3_F_00014 | AGCTAGCCGTCAAGACTATCTTCTCGCTTATCGTGTT       |
| OE_3_1+3_R_00015 | GTATTTGGAGGTACTGCAGCGG                      |
| OE_1.2_1.2+3_F   | CGCCAGGTTGAATGAATTCGC                       |
| OE_1.2_1.2+3_R   | GCGAGAAGATAGTCGGCACATTGATTATTTGCACGG        |
| OE_3_1.2+3_F     | ATAATCAATGTGCCGACTATCTTCTCGCTTATCGTGTTTGACA |
| OE_3_1.2+3_R     | GTATTTGGAGGTACTGCAGCGG                      |

## New OE primers

| Name             | Sequence                               |
| ---------------- | -------------------------------------- |
| OE_2_1+2_F_00010 | GTCAAGCCGGCCAACATTGATTATTTGCACGGCGTCAC |
| OE_2_1+2_R_00011 | GTATTTGGAGGTACTGCAGCGGC                |

## HIFI primers AraC3 Linearization Vectors

### Linearization for Vector to be complementary to OE primer amplified BB (OE)

|                            |                                                     |
| -------------------------- | --------------------------------------------------- |
| Vector_openingRBB1_1.2_2_3 | CGAATTCATTCAACCTGGCGTC-CGGGTATGGAGAAACAGTAGAGAGTTGC |
| Vector_openingFBB1_1.2_2_3 | GCTGCAGTACCTCCAAATACGG-CGCGTTATGCAGGCTTCCTCGC       |

|                        |                                |
| ---------------------- | ------------------------------ |
|                        |                                |
| Vector opening 1.2+3 F | CTAGGACTGAGCTAGCCGTCAAGCC      |
| Vector opening 1.2+3 R | GTTGAACAGTACGAACGTGCCGAGG      |
| Delete BB2 F           | TTTGTAACAGCTGCTGGGATTACACATGGC |
| Delete BB2 R           | CGGCTTGACGGCTAGCTCAGTCC        |

### Linearization for Vector to be complementary to Amplified BB (BB)

|                            |                                                     |
| -------------------------- | --------------------------------------------------- |
| Vector_openingRBB1_1.2_2_3 | CGAATTCATTCAACCTGGCGTC-CGGGTATGGAGAAACAGTAGAGAGTTGC |
| Vector_openingFBB1_1.2_2_3 | GCTGCAGTACCTCCAAATACGG-CGCGTTATGCAGGCTTCCTCGC       |

## Deletion primer

| Name         | Sequence                       |
| ------------ | ------------------------------ |
| Delete BB1 F | CTAGGACTGAGCTAGCCGTCAAGCC      |
| Delete BB1 R | GTTGAACAGTACGAACGTGCCGAGG      |
| Delete BB2 F | TTTGTAACAGCTGCTGGGATTACACATGGC |
| Delete BB2 R | CGGCTTGACGGCTAGCTCAGTCC        |

## Primer to add RBS

| Name              | Sequence                                        |
| ----------------- | ----------------------------------------------- |
| add RBS3 to RFP F | AGCCATCTAGTACGTCATGTCTTTCTTATTATTTGTCGTCGTCG    |
| add RBS3 to RFP R | ATGTGACCGACTGTGAATCTG                           |
| add RBS3 to GFP F | ACTAGATGCGTAAAGGAGAAGAACTTTTCACTGGAGTTGTCC      |
| add RBS3 to GFP R | ACGTCATGTCTTTCTTATTACAGATCTTCTTCGCTAATCAGTTTCTG |

## NO-Sensing System Primers

| Name           | Sequence                                                  |
| -------------- | --------------------------------------------------------- |
| Amp1           | ATCGCTAATGTGAGCCCATC                                      |
| Amp2           | ATGTGACCGACTGTGAATCTG                                     |
| Cutout F       | CCCATCGTGGTCCTCAGATA                                      |
| Cutout R       | CTGCAGCGGCCGCTACTAGTAGTACTTCGCCACTAATTCCACA               |
| Sens_Opti F    | ATCGCTAATGTGAGCCCATCGTGGTCC                               |
| Sens_Opti R    | CAATGTGACCGACTGTGAATCTGCAGCGG                             |
| Alternative_1: | CAGATATGAATTCGCGGCCGCTTCTAGAGTGTGGAATTAGTGGCGAAGTACGATTCC |
