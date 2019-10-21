---
title: Demonstrate
preamble:
permalink: /wiki/demonstrate/
tags: wiki
---

> Our team has [designed a delivery system](/wiki/description/) that carries temperate phages right to the site of infection. Once there, our molecular switch will trigger the phage to burst out of the carrier, infecting the surrounding bacteria. This will increase the effective dose of phages, allowing them to avoid barriers that would otherwise limit their efficiency in phage therapy.

## The Switch Plasmid

This plasmid was designed to be a functional system, and it is a core component of our project. Here, C protein is expressed constitutively; but upon an arabinose stimulus, expression will switch from predominantly C-protein to cox protein expression.

![](https://2019.igem.org/wiki/images/d/d4/T--Stockholm--demonstrate-01.png)

In the design of our switch construct we added two different techniques of characterization, both with FLAG tag and c-Myc tags for western blot and GFP & RFP fluorescent reporters for FLUOstar/ Flow Cytometry.

This way we could get more reliable results, as we would have two methods of confirmation. Our [Results](/wiki/results/) shows how our fluorescence experiments did not succeed and we have hypothesized that there could be issues with the fluorescence signal of the reporter protein. However, we were able to demonstrate protein expression with western blot.

## Measuring C protein dynamics

Our team was able to demonstrate how the Switch Plasmid works using a western blot. We can observe how protein C-Flag is highly expressed in the absence of arabinose (see **Figure 1**). When the concentration of arabinose increases we can observe a decrease in C-Flag.

{% image "https://2019.igem.org/wiki/images/b/bd/T--Stockholm--demonstrate-02.png", "**Figure 1.** western blot shows Switch Plasmid under different arabinose concentrations (0%, 0.1% and 0.4%). L= ladder, C-= Negative control. No loading control was added, as we had previously seen in our results that the GAPDH antibody interfered with GFP antibody and created many unspecific bands." %}

**Figure 1** demonstrates that:

1. C protein-Flag works as expected under a constitutive promoter.
2. TetR is expressed when adding arabinose, as expected under a pbad promoter. TetR has successfully repressed C protein-Flag protein expression, as expected from the interaction with TetR Operator. We can deduce this from the decline in C protein -Flag expression

We were unable to observe a complete repression of C protein -Flag at our highest concentration (0.4%). However, we cannot know if our Switch would require a complete repression in order to activate the lytic cycle, or if it would be enough to have a decline like the one shown in Figure 1. Knowing that this information would be crucial for our system, we designed the Model Plasmid, but given the time constrain, we were unable to test it.

If it would have turned out that a total repression of C protein -Flag is needed, there are multiple parameters we could modify to obtain this:

-   Increase the concentration of arabinose, playing an effect on the pbad promoter.
-   Perform directed mutagenesis in TetR or TetR Operator, playing with the affinity binding of the repression components.
-   Add an AraD gene to our backbone plasmid. AraD codes for a membrane protein that transports arabinose inside bacteria, which would increase the availability of intracellular arabinose.
-   Use a different antibody as a loading control, such as tubuline or actin.

As for the expression of RFP, we unfortunately observe many unspecific bands, which could be due to the quality of the anti-RFP antibody. A possible solution would be to change the antibody for a different one, which are commercially available.

## Measuring cox protein dynamics

{% image "/static/img/wiki/project/demonstrate-03.png", "Figure 2. western blot shows Switch Plasmid under different arabinose concentrations. L= ladder, C-= Negative control. No loading control was added, as we had previously seen in our results that the GAPDH antibody interfered with GFP antibody and created many unspecific bands." %}

In Figure 2 we can observe a different western blot. We used the same samples as were used for the western blot in Figure 1, but in this case, the staining was made with different antibodies. We can observe an increase in expression of both GFP and cox-cMyc that correspond to an increase in arabinose. These two genes are under the same pBAD promoter, which expression is induced by adding arabinose, so our results seem to correspond with our design.

As mentioned above, we cannot know whether this increase in expression would be enough to trigger the lytic cycle, which we could have tested using our Model Plasmid. If it would have turned out that more cox protein expression is needed, we could modify the following parameters:

-   Increase the concentration of arabinose, playing an effect on the pbad promoter.
-   Study the downstream pathway that leads to lytic activation, and increase the binding affinity of cox to different players with directed mutagenesis.
-   Add an AraD gene to our backbone plasmid. AraD codes for a membrane protein that transports arabinose inside bacteria, which would increase the availability of intracellular arabinose.
-   Use a different antibody as a loading control, such as tubuline or actin.
