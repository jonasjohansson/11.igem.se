---
title: Nitric Oxide
preamble:
permalink: /wiki/design-nitric-oxide/
tags: wiki
---

![](https://2019.igem.org/wiki/images/d/d4/T--Stockholm--design-nitric-01.png)

Nitric oxide (NO), in the past considered a potentially toxic chemical, is now known to play an important role in cell-to-cell communication throughout the body. It is physiologically produced by Nitric Oxide Synthetase enzymes (NOS) using L-arginine as substrate. Once produced, it can freely diffuse across cell membranes.

Constitutive NO production by the endothelial NOS isoform (eNOS) is crucial for intestinal homeostasis since it regulates many functions of the intestinal mucosa and epithelial cells <sup>2</sup>. In case of tissue damage and inflammation, NO is produced in much higher quantities by upregulation of the inducible NOS isoform (iNOS). This is a mechanism implicated in inflammatory responses and -particularly in the gut- it also serves as a host defense mechanism against pathogenic bacteria. <sup>1</sup>

It has been suggested that NO can be a reliable biomarker of gut inflammatory conditions such as irritable bowel disease, ulcerative colitis, and Crohn’s disease. <sup>2,3</sup> In patients with active ulcerative colitis, NO levels were found more than 100 times higher than in healthy controls <sup>4</sup>, showing an enormous NO elevation at the inflammation site.

Not surprisingly, bacteria have evolved their own NO regulatory systems to avoid cytotoxicity caused by the host’s NO induction. Bacteria can sense NO, through various pathways, and detoxify the molecule using reductases. <sup>5</sup> We are focusing on a NO-sensing system for E.coli since this will be our carrier-bacteria to deliver the phages to the site of infection.

Our goal is to include this sensing system into our already existing Switch plasmid. For such purpose, we have designed the following construct.

![](https://2019.igem.org/wiki/images/f/fc/T--Stockholm--design-nitric-02.jpeg)

The No-sensing composite part drives overexpression of NorR transcription factor under pTet constitutive promoter and, upon NO induction, it induces transcription of GFP.

This construct contains the _NorR_ gene under a strong constitutive promoter (pTet) together with its response element (pNorV) followed by genes encoding for COX and tetR . Our team wants to introduce pNorV in the Switch plasmid to induce cox production when the vehicle bacteria reaches the site of inflammation. Thus, when the bacteria “senses” NO in the gut, or when we add it in the growth medium, NorR protein should get activated, bind to pNorV, and induce transcription of cox and tetR. In turn, tetR will strongly inhibit C production, switching the phage from a dormant state to its lytic state.

The NO-sensing construct was ordered form IDT. Due to lack of time, we decided to prioritize the synthesis and characterization of our biobricks and Switch plasmids and did not continue on testing and integrating the sensing system.

1. Kolios G, Valatas V, Ward SG. Nitric oxide in inflammatory bowel disease: a universal messenger in an unsolved puzzle. [cited 2019 Jun 24]; Available from: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1782592/pdf/imm0113-0427.pdf
2. Avdagić N, Zaćiragić A, Babić N, Hukić M, Šeremet M, Lepara O, et al. Nitric oxide as a potential biomarker in infl ammatory bowel disease. Bosn J Basic Med Sci. 2013;
3. Protopapas A, Vradelis S, Karampitsakos T, Chatzimichail A, Paraskakis E. Elevated levels of alveolar nitric oxide in patients with inflammatory bowel disease. In: 52 Monitoring Airway Disease [Internet]. European Respiratory Society; 2016 [cited 2019 Jun 24]. p. PA1065. Available from: http://erj.ersjournals.com/lookup/doi/10.1183/13993003.congress-2016.PA1065
4. Lundberg JON, Lundberg JM, Alving K, Hellström PM. Greatly increased luminal nitric oxide in ulcerative colitis. Lancet. 1994;
5. Gardner AM, Gessner CR, Gardner PR. Regulation of the nitric oxide reduction operon (norRVW) in Escherichia coli. Role of NorR and sigma54 in the nitric oxide stress response. J Biol Chem [Internet]. 2003 Mar 21 [cited 2019 Jun 24];278(12):10081–6. Available from: http://www.ncbi.nlm.nih.gov/pubmed/12529359
