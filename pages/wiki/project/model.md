---
title: Model
preamble:
permalink: /wiki/model/
tags: wiki
---

## Abstract

Bacteriophage P2 is a typical example of a system exhibiting bistable behavior. In our project, we aim to control this behavior by using a plasmid to switch the phage from one state (lysogenic) to another (lytic). This requires fine-tuning of parameters to make the switch as robust as possible. Here, we used computer modeling to derive a model and simulate a P2 genetic switch to understand better its bistable properties, which we are manipulating. We also simulate our plasmid systems and estimate their sensitivity to different parameters. In this way, we inform the project design and provide a framework for parameter estimation once the experimental results are available.

## Key achievements

In our modeling project, we managed to achieve these goals:

-   Derived models for bacteriophage P2 genetic switch and our two plasmid systems using mass-action based formalisms, making the first documented attempt to model bacteriophage P2 genetic switch.
-   Simulated our models in both deterministic and stochastic settings.
-   Investigated the bistable properties of P2 genetic switch and determined key parameters influencing our plasmid systems, including the arabinose binding to AraC protein, leading to improved project design.

## Introduction

One of the fundamental characteristics that some biological systems exhibit is bistability. In a dynamical system, bistability means that the system has two equilibrium states, characterized by distinct gene expression profiles (Figure 1). Some examples include the lactose operon repressor system, the genetic toggle switch, and the bacteriophage λ genetic switch. A bacteriophage genetic switch is characterized by its ability to switch between 'lytic-lysogeny states' depending upon the kind of regulator that is expressed, making it a bistable system. In bistable systems, small perturbations cause the system to return to the original state, while more significant perturbations lead to "state switching." (1)

{% image "/static/img/wiki/project/model-01.png", "Figure 1. Bistability is a property of a system that contains two local energy minima." %}

Another example of a system with bistable behavior is bacteriophage P2, which is our system of interest in project Esther. As described in [Design](/wiki/design/), the switch between the lytic and lysogenic states in bacteriophage P2 is controlled by a simple transcriptional switch. The C protein, responsible for the lysogenic state, autoregulates the Pc promoter and represses the Pe promoter as a dimer while the Cox protein, responsible for the lytic state, represses both promoters as a tetramer (Figure 2). We plan to use two different plasmids to simulate different parts of this system. The first plasmid is the Switch plasmid, and the second plasmid is the Model plasmid.

[](https://www.notion.so/769313af890b43c98cadaa5167f263c2#913a0b1dfb194abb88a3f128d4899b6d)

{% image "/static/img/wiki/project/model-02.png", "Figure 2: An illustration of the transcriptional switch. We see the C protein repress both the Pc and Pe promoters as a dimer. We see Cox repress both promoters as a tetramer." %}

To characterize and better understand these systems, we have applied deterministic and stochastic modeling to study them. Deterministic models are based on defining the dynamics of proteins involved with ordinary differential equations, while stochastic models also take into account the influence of both intrinsic and extrinsic noise.

## Workflow

![](/static/img/wiki/project/model-03.png)

### Model Development

Deterministic and stochastic models that have been developed by applying rate laws to the various biochemical reactions involved in the systems. [→ Learn more](/wiki/model-development/)

### Model Simulation

Simulation of our plasmid systems according to the models we developed above. We present graphs of protein dynamics as well as steady state analysis for both deterministic and stochastic settings. [→ Learn more](/wiki/model-simulation/)

### Model Analysis

Analysis of a bifurcation analysis for P2 genetic switch in order to explore its bistability, as well as sensitivity analysis for both plasmid systems to determine the influence of various parameters. [→ Learn more](/wiki/model-analysis/)

## Conclusions

-   P2 genetic switch and our plasmid systems tend towards a steady state, where the C and Cox protein concentrations are in equilibrium with other components;
-   P2 genetic switch bistability is highly sensitive to specific parameter values, which need to be fine-tuned to achieve bistable behavior in model systems;
-   Parameters having the most significant influence on our systems include protein degradation and arabinose binding constants. For this reason, we suggest the wet lab team use the AraC vector to be able to manipulate the AraC sequence and hence, the arabinose binding dynamics.

## References

1. Bednarz M, Halliday JA, Herman C, Golding I. Revisiting bistability in the lysis/lysogeny circuit of bacteriophage lambda. PloS one. 2014 Jun 25;9(6):e100876.
2. Renberg-Eriksson SK, Ahlgren-Berg A, DeGrooth J, Haggård-Ljungquist E. Characterization of the developmental switch region of bacteriophage P2 Hy dis. Virology. 2001 Nov 25;290(2):199-210.
3. Mestivier D, Boelle P-Y, Pakdaman K, Richard A, Comet J-P, Hutzler G, et al. modeling of λ phage genetic switch. :109.

All code was written in Python and MATLAB, [click to download](https://2019.igem.org/wiki/images/8/8d/T--Stockholm--model-github.zip).
