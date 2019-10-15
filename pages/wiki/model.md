---
title: Model
preamble:
permalink: /wiki/model/
tags: wiki
---

> Bacteriophage P2 is a typical example of a system exhibiting bistable behavior. In our project, we are aiming to control this behavior by using a plasmid in order to switch the phage from one state (lysogenic) to another (lytic). This requires fine-tuning of parameters to make the switch as robust as possible. Here, we used computer modeling to derive a model and simulate a P2 genetic switch in order to better understand its bistable properties, which we are manipulating. We also simulate our plasmid systems and estimate their sensitivity to different parameters. In this way, we inform the project design and provide a framework for parameter estimation once the experimental results are available.

## Key achievement

In our modelling project we have managed to achieve these goals:

-   Derived models for bacteriophage P2 genetic switch and our two plasmid systems using mass-action based formalisms, making the first documented attempt to model bacteriophage P2 genetic switch;
-   Simulated our models in both deterministic and stochastic settings;
-   Investigated the bistable properties of P2 genetic switch and determined key parameters influencing our plasmid systems, including the arabinose binding to AraC protein, leading to improved project design

## Introduction

### Bistability

One of the fundamental characteristics that some biological systems exhibit is bistability. In a dynamical system, bistability means that the system has two equilibrium states, characterized by distinct gene expression profiles. Some examples include the lactose operon repressor system, the genetic toggle switch and bacteriophage λ genetic switch. A bacteriophage genetic switch is characterized by its ability to switch between ‘lytic-lysogeny states’ depending upon the kind of regulator that is expressed, making it a bistable system. In bistable systems, small perturbations cause the system to return to the original state, while larger perturbations lead to „state switching“ (1)

Another example of a system with bistable behaviour is bacteriophage P2, which is our system of interest in project Esther.

### P2 genetic switch system

The switch between the lytic and lysogenic phase in bacteriophage P2 is controlled by a simple transcriptional switch. It uses the concentration of two repressor proteins to maintain a certain state and when the concentration of these repressor proteins shifts then these repressor proteins shift, the phage switches cycle switches cycles. What the natural trigger to this is, is unknown. The transcriptional switch is illustrated in _Figure 2_. The C protein expression is regulated by the Pc promoter while the Cox protein expression is controlled by the Pe promoter. The former triggers the lysogenic cycle while the latter triggers the lytic. The C protein autoregulates the Pc promoter and represses the Pe promoter as a dimer while the Cox protein represses both promoters as a tetramer. (2)

The product we wish to create is a stable bacterial carrier of the P2 phage and a switch plasmid which is inducing the lysogenic (passive, inactive) phase in the phage. Thus, the initial state of the product is a carrier of the genetic material of the P2 phage that has the ability to survive within the digestion tract of humans. When the carrier reaches the pathogenic target, a signal within the carrier is triggered and the switch induces the lytic (offensive, active) phase in the phage. At this point, there will be a high concentration of phages near the target which in turn should ward off the infection as a whole. The plan is to use two different plasmids to simulate different parts of the system. The first plasmid is the switch plasmid and the second plasmid is the model plasmid.

### Deterministic and stochastic modeling

In order to characterize and better understand systems as the ones described above, one can apply deterministic and stochastic modeling to study them. Deterministic models are based on describing the dynamics of proteins involved with differential ordinary equations, while stochastic models also take into account the influence of both intrinsic and extrinsic noise. Here, we present deterministic and stochastic models that we have developed by applying rate laws to the various biochemical reactions involved in the systems.

[Model development](../model-development)

[Model simulation](../model-simulation)

[Model analysis](../model-analysis)

## Conclusions

-   P2 genetic switch and our plasmid systems tend towards a steady state, where the C and Cox protein concentrations are in equilibrium with other components;
-   P2 genetic switch bistability is highly sensitive to specific parameter values, which need to be fine-tuned in order to achieve bistable behaviour in model systems;
-   Parameters having the biggest influence on our systems include protein degradation and arabinose binding constants. For this reason, we suggest the wet lab team to use AraC vector in order to be able to manipulate AraC sequence and hence the arabinose binding dynamics.

## References

1. Bednarz M, Halliday JA, Herman C, Golding I. Revisiting bistability in the lysis/lysogeny circuit of bacteriophage lambda. PloS one. 2014 Jun 25;9(6):e100876.

2. Renberg-Eriksson SK, Ahlgren-Berg A, DeGrooth J, Haggård-Ljungquist E. Characterization of the developmental switch region of bacteriophage P2 Hy dis. Virology. 2001 Nov 25;290(2):199-210.

3. Mestivier D, Boelle P-Y, Pakdaman K, Richard A, Comet J-P, Hutzler G, et al. Modeling of λ phage genetic switch. :109.
