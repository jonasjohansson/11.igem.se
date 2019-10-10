---
title: Outlook
preamble:
permalink: /wiki/outlook/
tags: wiki
---

# How does the future look with Esther?

We ask ourselves this question many times! There are plenty of things to consider when developing a new technology, such as the safety of your product (link to Safety & Phages), the potential market space (link to Business Model), and how will your product be perceived by the general public (link to Integrated Human Practices). In this page, we wanted to take a look at how a future world would look like for Esther, going from the very beginning of the manufacturing process, continuing with diagnosis and finally how our treatment be administered to the patient.

Image: simple icons with a "factory" (manufacturing), a "doctor" (diagnosis) and a "pill" (treatment). To be easier to understand, the icons should have the written words in between brackets underneath. I would like to click on this icons and direct me to the part of the text that talks about this.

# The making of Esther

Our visit to Eliava Phage Therapy helped us to understand how the current manufacturing process of phages look like. The center has the largest library of phages in the world, with strains that are sent to them from international researchers and others that they isolate themselves from sewage systems. They explained to us that isolation and manufacture of phages is extremely fast and easy compared to antibiotics development. However, one has to be careful when filtering the phages so that they are free of toxins, since they are grown in bacteria that can sometimes release these molecules. To learn more about our visit to the Eliava Phage Therapy Center, please visit our Integrated Human Practices! (link)

We wanted to take a similar approach with Esther. Modern synthetic biology techniques would allow us to create libraries with highly characterized phages and vehicle bacteria, which are optimal for probiotics purposes and can be the infected by the specific phages.

### Preparing the phage library

The phages for the library preparation will be isolated from environmental reservoirs such as sewage. The isolation and cultivation will be followed in accordance to the recommended standard protocols. In the temperate phage genome, C protein will be deleted by directed mutagenesis, and further sequenced to validate the presence of the lytic status and absence of the toxins. To decrease the chance of gene transfer of antibiotic resistance (link to Safety and Phages), the switch will be integrated into a plasmid, and not directly modified into the phage. Same approach can be taken with other temperate phages, as long as their repressor protein is known.

Image: we could represent a library of phages as a row of phages but in different colours. We could also play with patters or sizes, whatever looks better with the over all design!

### Preparing the vehicle bacteria library

Survival of the probiotics in GI tract has to be secured till it reaches the target area. Resistance against the salivary enzymes, pH changes, secretion of biles and stomach acid could be encountered while the probiotics pass the intestine. In our project design, we utilized the non-pathogenic E. Coli Nilsson as a proof of concept, but the library of vehicle bacteria can also be broadened. Manufacture starts with the isolation of the bacteria from the human organism, to provide the “human friendly” vehicle. The bacteria will be sequenced for the toxins and characterized before its insertion into the library to exclude the toxin contamination. In addition, bacteria will be transformed with our switch plasmid so that we can find them ready for the treatment in our library.

Image: we could represent a library of bacteria as a row of bacteria but in different colours. We could also play with patters, having pili, flagella, sizes, whatever looks better with the over all design!

Moreover, the strain has to be genetically stable, cultivability ability on the large scale, and viability in combination with the supplement or to other food product (1). According to requirements in Canada and Italy a minimum amount of 10^9of colony forming units in order to provide health benefits (2). However, there is no report that the higher dose is detrimental. Probiotics usually stored in ambient temperature and humidity; however, it could cause loss of viability compared to frozen storage. Therefore, over 10^9has to be added to reach target dose.

### Quality control & upscaling

Quality control testing is required to verity that the product is free of contamination and includes only pure strain; and to prepare to large scale manufacture process. Frozen glycerol stock containing the plasmid switch will be directly inoculated to the fermentation containers. The containers will not have any nitrogen source, as recommended by regular standard protocols.

Then, the centrifugation step will allow to separate cells from the medium and obtain them in high concentration. The obtained highly concentrated bacteria will be infected by the modified phages, and we will proceed with the preservation techniques. The cryoprotectants and lyoprotectants added to the cells allow to perform lyophilization of end product. The lyophilized material is then blended with excipients, forming the final product as a tablet. A second round of quality control testing is applied to check for the high quality of end-product and contamination. The lyophilized bacteria tablets have to be stored at 40C temperature to extend the shelf-life for three months (3).

Image: a symbol of a bacteria + a symbol of a phage = phage inside bacteria —> (draw arrow) symbol of pill.

This image will describe the main concept: you produce bacteria, you add phages, it becomes Esther (phage inside bacteria) and then you turn it into a pill

# A successful treatment requires the right diagnosis.

Most infections go un-diagnosed or miss-diagnosed, and sometimes, the most common form of diagnosis is the treatment itself. In other words, in many countries, broad-spectrum antibiotics are given to the patient during their first visit to the clinic, because a proper diagnosis can take days and economic resources. For Phage Therapy to be effective, a proper diagnosis is required, since there are no broad-spectrum phages that can kill many types of bacteria. Therefore, it is important to facilitate diagnosis tools to physicians, so that the right phage can be provided to the patient.

Image —> person infected by a bacteria on the gut with a question mark on the side

We decided to start a collaboration with iGEM TU Eindhoven, who has been developing a fast diagnosis system. Their system uses lytic phages to indirectly detect which bacteria is causing the infection. This system presents a double win to us, because not only it will tell us what bacteria is causing the infection, it will also show us what phage can be used in Esther to effectively treat the infection.

But how does iGEM TU Eindhoven system work? Based on the suspicion on the origin of the infection by the general practitioner, specific lytic phages are selected and added to the device in separate compartments. Thereafter the sample of the patient is added from which we can detect whether the suspected bacteria are present. For example, if there is a urinary tract infection, there are five different bacteria which can cause this infection.

The sample of the patient is then divided over five aliquots (figure 1). To each aliquot a specific lytic phage will be added. When the target bacteria of the phage are present, the phage amplifies itself, which creates an increase in phage DNA. The increase in phage DNA is measured using the dCas9-BRET sensor which sends out a light signal. The sample that lights up red indicates which phage has amplified, so indirectly the bacteria causing the infection is identified. At the same time, it is also confirmed which phage will kill the bacteria, so this diagnosis system is perfect to combine with Phage Therapy. However, when the phages do not find the specific bacteria in the sample, there is no amplification of phages, and therefore no red light signal.

Image —> Eindhoven system

Note: I have the image that the team sent me (I will forward it on slack). We could just copy it or re-design it with our own colors

As we were discussing with Team Eindhoven how our two systems would work together, we realized what could be a potential obstacle: their system was using lytic phages, while our system had been designed for temperate phages. After some brainstorming, we realized that our phages could be integrated in their system, as we have engineered them to be obligated lytic. In Esther, our phage is able to enter the lysogenic cycle because we are providing the C protein within a plasmid. However, the phage on itself is obligated lytic, as it has been depleted of the C protein (link to Safety and Phages page).

In the future, we would like to design a library of phages that can be ready for use. These phages will be used for diagnosis, and once identified which phage is amplified in the patient sample, it will be ready to be administered to the patient using Esther. Thus, the combination of Esther with Eindhoven’s diagnosis system will cut down the action time and make the process more simplistic, both to the patient and the doctor.

Image —> Eindhoven diagnosis (arrow) cute phage (arrow) phage inside a bacteria and a human taking this bacteria

# Using Esther

Our Integrated Human Practices team travelled to the Phage Therapy Centre in Tbilisi, Georgia, an active centre which provides unconventional phage therapy solutions to patients suffering from antibiotic resistant bacterial infections. From them, we learned how patients are usually treated with their phages, which consists of a series of repetitive doses, depending on the condition of the patient and how well they progress. Given the uniqueness of our system, it is hard to predict how many doses to provide for the patients, so clinical trials will be required before launching this product.

# Potential future applications of Esther

As part of our visit to Georgia, we also asked them how we could improve Esther so that it would suit their needs. They specialize in treating a wide variety of infections such as acute and chronic infections, like cystic fibrosis, colitis, bronchitis, UTIs ; Infections with poor circulation , such as bed sores, Osteomyelitis, tropic ulcers etc. Apart from these, bacterial infections which are antibiotic-resistant are also treated- E.coli, Pseudomonas, Salmonella etc. Therefore, we wanted to explore the possibility of using Esther to treat different infections.

Though our project specifically focuses on delivering phages towards gut inflammation using NO-sensing system, the system could be modified to suit other plausible potential applications:

1. *Methicillin resistant Staphylococcus Aureu*s (MRSA):

MRSA is known to be one of the most common antibiotic-resistant bacteria in hospital settings. It is responsible for contracting life threatening infections at surgical sites, skin and bloodstream. It is not just resistant to methicillin but also amoxicillin, penicillin and oxacillin. The prime reason of resistance to β-lactam antibiotics is expression of the enzyme PC1β-lactamase. A similar sensing system highly specific for this enzyme could be adopted to create lytic phages against MRSAs. (4)

2. _Pseudomonas Aeruginosa in Lung Infections_:

Cystic fibrosis and other lung disorders generally caused by _P. Aeruginosa_ infection confer antibiotic resistance due to antibiotic activating enzymes such as β-lactamases and other quinolone efflux proteins (5). Another possible mechanism of acquiring resistance is biofilm formation by extracellular amino-peptidases, a quorum sensing regulated enzyme. Hence ,sensing system recognising these enzymes or recognition of specific molecules involved in the biofilm formation , phages can turn lytic to this specific bacteria (6)

3. _Antibiotic Resistant Gonorrhea_ :

There are several STIs caused by a wide variety of bacteria. One of the most notorious STI facing antibiotic resistance currently is _Neisseria gonorrhoeae (7)._ A primary reason of resistance against _Neisseria gonorrhoeae_ infection is its ability to produce penicillinase. It is mediated by TEM-1 type beta-lactamase which falls under the third general category of β- lactam resistance. A similar sensing system targeting this enzyme, might be a potential application of treating UTI infections (8)

4. _Antibiotic Resistance in Acute Respiratory Infections (ARI) :_

_Haemophilus influenzae_ is one of the major bacterial pathogen responsible for acute respiratory infections such as pneumonia. This is mainly resistant to antibiotics penicillin, cefuroxime, clarithromycin, amoxicillin etc. Similar to _P. Aeruginosa ,_ the primary cause of resistance is seen to be due to β-lactamases, predominantly mediated by TEM-1 or ROB-1 β-lactamases. A similar approach of targeting this enzyme using Esther serves as a potential solution of treating respiratory infections (9)

References:

(1) Ayichew T., Belete, A., Alebachew, T., Tsehaye, H., Berhanu, H., Minwuyelet, A. (2017). Bacterial Probiotics their Importances and Limitations: A Review. *Journal of Nutrition and Health Sciences*, 8(4).

(2) Hill, C., Guarner, F., Reid, G., Gibson, G., Merenstein, D., Pot, B., Morelli, L.; Canani, R.B., Flint, H.J., Salminen, S., et al. (2014). Expert consensus document. The International Scientific Association for Probiotics and Prebiotics consensus statement on the scope and appropriate use of the term probiotic. *Nat. Rev. Gastroenterol. Hepatoly,*11, 506–514.

(3) Jalali, M., Abedi, D., Varshosaz, J., Najjarzadeh, M., Mirlohi, M., & Tavakoli, N. (2012). Stability evaluation of freeze-dried Lactobacillus paracasei subsp. tolerance and Lactobacillus delbrueckii subsp. bulgaricus in oral capsules. *Research in pharmaceutical sciences*, *7*(1), 31–36.

(4) Fuda, C.C.S., Fisher, J.F. & Mobashery. (2005).β-Lactam resistance in Staphylococcus aureus: the adaptive resistance of a plastic genome. _S. Cell. Mol. Life Sci_, 62: 2617

(5) Zheng Pang, Renee Raudonis, Bernard R.Glick, Tong-Jun Lin, Zhenyu Cheng. (2019). Antibiotic resistance in Pseudomonas aeruginosa: mechanisms and alternative therapeutic strategies. _Biotechnology Advances_ ; 37(1)

(6) Zhao T , Zhang Y , Wu H , Wang D, Chen Y, Zhu MJ , Ma LZ. (2018) Extracellular aminopeptidase modulates biofilm development of Pseudomonas aeruginosa by affecting matrix exopolysaccharide and bacterial cell death. _environmental microbiology reports_ ; 10((5):583-593):

(7) Kirkcaldy RD, Harvey A, Papp JR, et al. (2014) Neisseria gonorrhoeae Antimicrobial Susceptibility Surveillance — The Gonococcal Isolate Surveillance Project, 27 Sites, United States, 2014. MMWR Surveill Summ 2016;65(No. SS-7):1–19.

(8) Tapsall, J. and World Health Organization, 2001. Antimicrobial resistance in Neisseria gonorrhoeae (No. WHO/CDS/CSR/DRS/2001.3). Geneva: World Health Organization.

(9) Bae, S., Lee, J., Lee, J., Kim, E., Lee, S., Yu, J. and Kang, Y., 2010. Antimicrobial resistance in Haemophilus influenzae respiratory tract isolates in Korea: results of a nationwide acute respiratory infections surveillance. Antimicrobial agents and chemotherapy, 54(1), pp.65-71.
