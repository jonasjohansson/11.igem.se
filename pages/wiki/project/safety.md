---
title: Safety
preamble:
permalink: /wiki/safety/
tags: wiki
---

> One of the biggest questions among researchers, policymakers, and stakeholders regarding Phage Therapy is: how safe is it? Our team considers of extreme importance to understand the implications of this new therapy, and to integrate these concerns into our project to make sure we develop a treatment that is safe to use.

<!-- {% callout "💡" %} We have divided this question into two categories: 1) How safe it is to use temperate phages for Phage Therapy, and 2) how safe it is to treat patients using Esther. {% endcallout %} -->

## About the safety of temperate phages

Temperate phages can be a source of genetic transduction, a rare occurrence in which, at the moment of encapsulation, bacterial DNA gets trapped in the bacteriophage’s capsule. If the phage then infects other bacteria and activates the lysogenic cycle, it can integrate DNA from the donor into the receptor, therefore providing new genes.

Transduction can be a vehicle to exchange resistance genes, or genes to increase the virulence of the receptor bacteria. Because of this, some researchers agree that temperate phages should not be used in phage therapy. <sup>1</sup> For this reason, it was essential during our experimental design to make sure that the use of our phages did not contribute to the increase of antibiotic resistance or the virulence of the pathogen.

![](https://2019.igem.org/wiki/images/8/87/T--Stockholm--safety-01.png)

For this purpose, we spoke to professor Graham F. Hatfull, the first and only researcher up to date, to engineer a temperate bacteriophage to be clinically used in the treatment of a patient with an antibiotic-resistant infection of Mycobacterium abscessus. <sup>2</sup> For the treatment, they genetically modified the temperate phage Zoej and made it obligated lytic by removing its repressor gene 45, which was responsible for keeping the phage at the lysogenic cycle. <sup>3</sup>

![](https://2019.igem.org/wiki/images/9/9b/T--Stockholm--safety-02.png)

This helped us confirm the safety of our [project design](/wiki/design/). The repressor protein for our P2 phage is the C protein. Moreover, it has been previously shown that removal of this protein will block the activation of the lysogenic cycle. <sup>4</sup> By eliminating the C protein from our P2 phage, we make sure that it cannot enter the lysogenic cycle in another host, preventing transduction and the exchange of resistance genes.

## Humans and Esther

Esther consists of two parts – the vehicle bacteria and the P2 phage. It is crucial to evaluate the impact of these two types of organisms on human health separately since they have different characteristics.

### The phage

We have all heard about the microbiome, but did you know that we also have a phageome? Bacteriophages are, in fact, one of the most common and diverse organisms in our gut flora. Often, phages form symbiotic alliances with the microbiome to protect them against invasive pathogens. We can also find them adhere to mucus layers, providing us with an antimicrobial defense mechanism. <sup>5</sup> Even though not all phages are candidates for this role, these findings show that our bodies are already familiar with these organisms, whom they benefit from.

Esther delivers phages directly to the site of infection, in this case, the gut, were other phages are already present. Thus, it is important to understand what happens to the phages after they have been delivered to the intestine. An in-vivo study by Otero et al. <sup>6</sup>, using fluorescence-labeled phages encapsulated in a lipid vesicle and delivered orally, concludes that no bacteriophages could be observed in other organs or tissues other than those in the Gastro-Intestinal tract. Their experiments also show that non-encapsulated phages can easily cross the Gastro-Intestinal barrier and accumulate in organs such as the liver or the kidneys, while encapsulated phages didn’t show significant accumulation.

Similarly, we will encapsulate our phages, but in this case, using a bacteria that will keep the phage in a dormant state until it reaches the site of infection, increasing the localized concentration of phages and preventing its inactivation or filtration to other parts of the human body. Therefore, just as we have studied the safety concerns of phages, we should also consider the risks of our bacterial vehicle.

### The bacteria

The bacterial component in Esther will be used as a delivery method for the localized release of phages. The bacteria we have chosen to work with have been defined as a non-pathogenic strain of Escherichia coli called Nilson 1917 (EcN). It has been characterized as non-pathogenic because it cannot produce pathogenic adhesion factors, enterotoxins, and cytotoxins, which are commonly produced by its pathogenic counterparts. <sup>8</sup>

Because exogenous bacteria can be the source of an inflammatory reaction, it is important to understand how the body reacts to the use of Esther. Studies have shown that EcN does not exhibit toxicity after administration to germ-free mice and conventional mice <sup>9</sup>. It showed anti-inflammatory effects in sepsis-induced mice. <sup>10</sup>

These results, however, do not apply to certain mutations causing immunodeficiency (9), and therefore, it is important to consider the genetic background of the patient before administering Esther. [To learn more about EcN, visit Outlook!](/wiki/outlook/)

![](https://2019.igem.org/wiki/images/b/b9/T--Stockholm--safety-04.png)

## Conclusions

As we have seen, neither the use of phages nor Escherichia coli Nilson 1917 has shown adverse effects so far. However, for our product to be proved safe, in-vivo studies should be performed. An excellent way to monitor the distribution of Esther throughout a mammalian body would be to mimic the experiment by Otero et al. <sup>6</sup>, adding different fluorochrome tags to our vehicle bacteria and our phage. This would allow us to observe whether our Switch gets activated before it reaches the site of infection and whether E. coli Nilson can easily travel throughout the gut carrying the Switch Plasmid.

## References

1. Kakasis A, Panitsa G. Bacteriophage therapy as an alternative treatment for human infections . A comprehensive review. Int J Antimicrob Agents [Internet]. 2019;53(1):16–21. Available from: https://doi.org/10.1016/j.ijantimicag.2018.09.004
2. Dedrick RM, Guerrero-bustamante CA, Garlena RA, Russell DA, Ford K, Harris K, et al. Engineered bacteriophages for treatment of a patient with a disseminated drug-resistant Mycobacterium abscessus. Nat Med [Internet]. 2019;25(May). Available from: http://dx.doi.org/10.1038/s41591-019-0437-z
3. Dedrick RM, Guerrero CA, Garlena RA, Pinches RS, Cornely K, Hatfull GF. Mycobacteriophage ZoeJ : A broad host-range close relative of mycobacteriophage TM4. Tuberculosis [Internet]. 2019;115(December 2018):14–23. Available from: https://doi.org/10.1016/j.tube.2019.01.002
4. Berit Lundqvist; Bertani C. Immunity Repressor of Bacteriophage P2. J Mol Biol. 1984;178:629–51.
5. Barr JJ, Auro R, Furlan M, Whiteson KL, Erb ML, Pogliano J, et al. Bacteriophage adhering to mucus provide a non – host-derived immunity. 2013;110(26):10771–6.
6. Otero J, García-rodríguez A, Cano-sarabia M, Maspoch D, Marcos R, Cortés P. Biodistribution of Bacteriophages and Their Transcytosis During Oral Phage Therapy. 2019;10(April):1–12.
7. Vandenheuvel D, Lavigne R. Bacteriophage Therapy : Advances in Formulation Strategies and Human Clinical Trials. 2015;
8. Sonnenborn U, Schulze J, Sonnenborn U, Schulze J. The non-pathogenic Escherichia coli strain Nissle 1917 – features of a versatile probiotic. Microb Ecol Heal Dis. 2009;2235.
9. Bleich A, Sundberg JP, Smoczek A, Wasielewski R Von, Buhr MF De, Janus LM, et al. Sensitivity to Escherichia coli Nissle 1917 in mice is dependent on environment and genetic background. 2008;45–54.
10. Arribas B, Rodríguez-cabezas ME, Camuesco D, Comalada M, Bailón E, Utrilla P, et al. A probiotic strain of Escherichia coli , Nissle 1917 , given orally exerts local and systemic anti-inflammatory effects in lipopolysaccharide-induced sepsis in mice. 2009;1024–33.
