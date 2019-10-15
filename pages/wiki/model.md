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

## Model development

{% div 'section' %}

### P2 genetic switch

We started modelling the P2 genetic switch by describing the system graphically in terms of C protein dynamics, based on a similar approach applied to bacteriophage λ, as described by Mestivier et al. (3)

[](https://www.notion.so/ed7982c9b21e494e9791de03e5bcfe46#125fbca748694f7c9347ea7130a530d7)

Figure 3. _Graphical representation of P2 genetic switch system_

Based on the graphical representation, we derived differential equations for each of the reactions that the C protein is involved in. Notation: x - concentration of C; y - concentration of C2 (c protein dimer).

1. _Degradation of C protein_

    $$  \frac{dx}{dt}=-k_0x$$

2. _Dimerization of C protein_

    $$  \frac{dx}{dt}=-k_{12}x^2+2k_{21}y;\ \frac{dy}{dt}=k_{12}x^2-k_{21}y$$

3. _Synthesis of C protein_

    $$  \frac{dx}{dt}=nk_tD_0P$$

4. _Binding of C dimer to Pc promoter at low concentrations_

    $$  \frac{dy}{dt}=-k_1yD_0+k_{-1}D_1;\ \frac{dD_0}{dt}=-k_1yD_0+k_{-1}D_1;\ \frac{dD_1}{dt}=k_1yD_0-k_{-1}D_1$$

5. _Stimulated synthesis of C protein_

    $$  \frac{dx}{dt}=nk_{t2}D_1P$$

6. _Binding of C dimer to Pc promoter at high concentrations_

$$  \frac{dy}{dt}=-k_2yD_1+k_{-2}D_2;\ \frac{dD_1}{dt}=-k_2yD_1+k_{-2}D_2;\ \frac{dD_2}{dt}=k_2yD_1-k_{-2}D_2\ $$

We then gathered all differential equations into one model, describing the dynamics of C protein:

$$\frac{dx}{dt}=-k_0-k_{12}x^2+2k_{21}y+nk_tD_0P+nk_{t2}D_1P$$

Following that, we made an assumption that dimerization and binding to the operator sites are faster chemical reactions than synthesis, and for these reactions:

$$\frac{dx}{dt}=0$$

This assumption allowed us to neglect some parts of the main equation, as well as derive expressions of some constants and species involved in the reactions. Specifically, for reaction #2 (dimerization):

$$\frac{dx}{dt}=-k_{12}x^2+2k_{21}y=0;\ \frac{dy}{dt}=\ k_{12}x^2-k_{21}y=0\rightarrow k_{12}x^2=k_{21}y\rightarrow y=\ \frac{k_{12}}{k_{21}}x^2=K_Dx^2$$

For reaction #4 (binding):

$$\frac{dy}{dt}=-k_1yD_0+k_{-1}D_1\rightarrow D_1=\frac{k_1}{k_{-1}}yD_0\rightarrow\ D_1=K_1D_0y\rightarrow D_1=K_1D_0\left(K_Dx^2\right)=K_1K_DD_0x^2$$

For reaction #6 (binding):

$$\frac{dy}{dt}=-k_2yD_1+k_{-2}D_2=0\rightarrow\ k_2yD_1=k_{-2}D_2\rightarrow D_2=\frac{k_2}{k_{-2}}yD_1=K_2yD_1=K_D^2K_1K_2x^4D_0$$

Another assumption we made is that when C dimer binds to D0, the affinity constant of C dimer to D0 changes by a factor σ , that is

$${\ K}_2=σK_1$$

This results in expression:

$$D_2=K_D^2σK_1^2x^4D_0$$

The general model of C protein concentration now looks like this:

$$\frac{dx}{dt}=-k_0x+nk_tD_0P+nk_{t2}D_1P$$

We make yet another assumption, that total phage DNA concentration is constant, and derive an expression of D0.

$$D=D_0+D_1+D_2=D_0+K_1K_DD_0x^2+σK_1^2K_D^2x^4D_0$$

Inserting this expression into the general model equation results in an updated model:

$$\frac{dx}{dt}=-k_0x+nk_tD_0P+nk_{t2}K_1K_DD_0x^2P=nD_0P\left(k_t+k_{t2}K_1K_Dx^2\right)-k_0x=\frac{nDP\left(k_t+k_{t2}K_1K_2K_Dx^2\right)}{1+K_1K_Dx^2+σK_1^2K_D^2x^4}-k_0x$$

First we relate the two transcription parameters:

$$k_{t2}=τk_t$$

Then we introduce a new parameter:

$$w=nk_tDP$$

The updated general model now looks like this:

$$\frac{1}{w}\frac{dx}{dt}=\frac{1+τK_1K_Dx^2}{1+K_1K_Dx^2+σK_1^2K_D^2x^4}-\frac{k_0}{w}x$$

Here we introduce a new time unit:

$$t\prime=wt$$

As well as two new parameters:

$$\gamma=\frac{k_0}{w}; u=K_DK_1$$

The final model is:

$$\frac{dx}{dt\prime}=\frac{1+\tau u x^2}{1+ux^2+\sigma u^2x^4}-\gamma x=f(x)$$

We use this equation to simulate C protein dynamics over time using python. To compute the concentration of species x (C protein) versus time t, we use **_‘Euler scheme of numerical integration’_**. We set the initial conditions of species x and the parameter dt to compute small variation in concentration of C protein (dx) over a small time interval (dt) using f (x) ; the variation being f (x).dt.

$$dx/dt = f(x)$$

Hence, the concentration of protein C at a time t + dt is the concentration x at a time t + f(x). dt x(t + dt) = x(t) + dt. f (x) , where x(t) = concentration of x at time t. Having x(t + dt), we can compute the small variation of species x during the next time interval dt, and compute x ((t + dt) + dt) i.e. x(t + 2.dt) and thus follow an iterative procedure further to plot time evolution of x in this case. We also find steady states of our system by plotting f (x) over x. The system achieves a steady state, when C protein would not have a net new concentration i.e. change in x in small time interval dt would be zero.

Hence, the concentration of protein C at a time t + dt is the concentration x at a time t + f(x). dt

$$x(t + dt) = x(t) + dt. f (x)$$

where x(t) = concentration of x at time t. Having x(t + dt), we can compute the small variation of species x during the next time interval dt, and compute x ((t + dt) + dt) i.e. x(t + 2.dt) and thus follow an iterative procedure further to plot time evolution of x in this case.

We also find steady states of our system by plotting f (x) over x. The system achieves a steady state, when C protein would not have a net new concentration i.e. change in x in small time interval dt would be zero.

$$dx/dt =0,  f(x)=0$$

Any value of x that nullifies f(x) would be a steady state concentration. The concentration of x at which f(x) crosses the horizontal axis in the plot thus gives us the steady state concentration.

In order to adapt the above general model to a stochastic setting, we use Poisson τ-leap approach - a simple technique to introduce noise into a deterministic model. As described by Tian et al, it is assumed that a number of reactions are occuring in a relatively large time interval interval [t, t +τ). The number of these reactions corresponds to a sample value generated from a Poisson distribution with a mean of a:

$$P(a_j\left({x}\right)\tau); a_j({x})\tau$$

Once this value is generated, the system can be updated in the following way:

$${x}\left(t+\tau\right)={x}\left(t\right)+\sum_{j=1}^{M}{v_jP(a_j\left({x}\right)τ)}$$

We adopt this approach to derive our general stochastic model with a τ value of 0.01. For our general model, the updated equation looks like this:

$$x\left(t+\tau\right)={x}\left(t\right)+\mathcal{P}\left[\frac{1+\tau u x^2}{1+ux^2+\sigma u^2x^4}\tau\right]-\mathcal{P}\left[\gamma x\tau\right]$$

We implement this approach in Python, using numpy.random.poisson function (see our GitHub page).

### Model plasmid

[](https://www.notion.so/ed7982c9b21e494e9791de03e5bcfe46#88d0d034b4de49eeb3131ac7566e5f7d)

Figure 4. _Graphical representation of Model Plasmid_

Based on the graphical representation, we have derived the following differential equations. Notation: x - concentration of C; y- concentration of C2; m - concentration of Cox; n - concentration of Cox4.

1. _Synthesis of C protein_

    $$\frac{dx}{dt}=nk_{t1}D_1P$$

2. _Degradation of C protein_

    $$\frac{dx}{dt}=-k_0x$$

3. _Binding of arabinose_

    $$\frac{d[arabinose]}{dt}=-k_1D_0[arabinose]+k_{-1}D_1$$

    $$\frac{dD_0}{dt}=-k_1D_0[arabinose]+k{-1}D_1$$

    $$\frac{dD_1}{dt}=k_1D_0[arabinose]-k{-1}D_1$$

4. _Dimerization of C protein_

    $$\frac{dx}{dt}=-k_{12}x^2+2k_{21}y$$

    $$\frac{dy}{dt}=k_{12}x^2-k_{21}y$$

5. _Synthesis of Cox from Pe promoter_

    $$\frac{dm}{dt}=Nk_{t2}D_1P$$

6. _Tetramerization of Cox_

    $$\frac{dm}{dt}=-k_{14}m^4+4k_{41}n$$

    $$\frac{dn}{dt}=k_{14}m^4-k_{41}n$$

7. _Degradation of Cox_

    $$\frac{dm}{dt}=-k_0m$$

8. _Binding of C2 at low concentrations to Pe promoter_

    $$\frac{dy}{dt}=-k_2D_1y+k_{-2}D_3$$

    $$\frac{dD_1}{dt}=-k_2D_1y+k_{-2}D_3$$

    $$\frac{dD_3}{dt}=k_2D_1y-k_{-2}D_3$$

9. _Slowed synthesis of Cox because of C2 binding_

    $$\frac{dm}{dt}=Nk_{t3}D_3P$$

10. _Binding of Cox4 at low concentrations to Pe promoter_

    $$\frac{dn}{dt}=-k_3D_1n+k_{-3}D_2$$

    $$\frac{dD_1}{dt}=-k_3D_1n+k_{-3}D_2$$

    $$\frac{dD_2}{dt}=k_3D_1n-k_{-3}D_2$$

11. _Slowed synthesis of Cox because of Cox4 binding to Pe promoter_

    $$\frac{dm}{dt}=Nk_{t4}D_2P$$

12. _Binding of C2 at high concentrations to Pe_

    $$\frac{dy}{dt}=-k_4D_3y+k_{-4}D_5$$

    $$\frac{dD_3}{dt}=-k_4D_3y+k_{-4}D_5$$

    $$\frac{dD_5}{dt}=k_4D_3y-k_{-4}D_5$$

13. _Binding of Cox4 leading to inhibited synthesis_

    $$\frac{dn}{dt}=-k_5D_3n+k_{-5}D_6$$

    $$\frac{dD_3}{dt}=-k_5D_3n+k_{-5}D_6$$

    $$\frac{{\rm dD}_6}{dt}=k_5D_3n-k_{-5}D_6$$

14. _Binding of C2 leading to inhibited synthesis_

    $$\frac{dy}{dt}=-k_6D_2y+k_{-6}D_6$$

    $$\frac{dD_2}{dt}=-k_6D_2y+k_{-6}D_6$$

    $$\frac{dD_6}{dt}=k_6D_2y-k_{-6}D_6$$

15. _Binding of Cox4 at high concentrations to Pe_

$$\frac{dn}{dt}=-k_7D_2n+k_{-7}D_4$$

$$\frac{dD_2}{dt}=-k_7D_2n+k_{-7}D_4$$

$$\frac{dD_4}{dt}=k_7D_2n-k_{-7}D_4$$

We then make an assumption that dimerization, tetramerization, and binding are very fast chemical reactions, faster than synthesis. For these reactions:

From reaction #3 we derive:

$$k_1D_0[arabinose]=k_{-1}D_1$$

$$D_1=\frac{k_1}{k_{-1}}D_0[arabinose]=K_1D_0[arabinose]$$

From reaction #4 we derive:

$$k_{12}x^2=k_{21}y$$

$$y=\frac{k_{12}}{k_{21}}x^2=K_Dx^2$$

From reaction #6 we derive:

$$k_{14}m^4=k_{41}n$$

$$n=\frac{k_{14}}{k_{41}}m^4={K_Tm}^4$$

From reaction #8 we derive:

$$k_2D_1y=k_{-2}D_3$$

$$D_3=\frac{k_2}{k_{-2}}D_1y=K_2K_1D_0[arabinose]K_Dx^2$$

From reaction #10 we derive:

$$k_3D_1n=k_{-3}D_2$$

$$D_2=\frac{k_3}{k_{-3}}D_1n=K_3K_1D_0[arabinose]K_Tm^4$$

From reaction #12 we derive:

$$k_4D_3y=k_{-4}D_5$$

$$D_5=\frac{k_4}{k_{-4}}D_3y=K_4K_2K_1D_0[arabinose]K_D^2m^4$$

From reaction #13 we derive:

$$k_5D_3n=k_{-5}D_6$$

$$D_6=\frac{k_5}{k_{-5}}D_3n=K_5K_2K_1D_0[arabinose]K_Dx^2K_Tm^4$$

From reaction #14 we derive:

$$k_6D_2y=k_{-6}D_6$$

$$D_6=\frac{k_6}{k_{-6}}D_2y=K_6K_3K_1D_0[arabinose]K_Dx^2K_Tm^4$$

From reaction #15 we derive:

$$k_7D_2n=k_{-7}D_4$$

$$D_4=\frac{k_7}{k_{-7}}D_2n=K_7K_3K_1D_0[arabinose]K_T^2m^4$$

The general models with these equations plugged in look like this:

$$\frac{dx}{dt}=Nk_{t1}D_1P-k_0x=Nk_{t1}K_1D_0[arabinose]P-k_0x$$

$$\frac{dm}{dt}=Nk_{t2}D_1P-k_{02}m+Nk_{t3}D_3P+Nk_{t4}D_2P=Nk_{t2}K_1D_0[arabinose]P-k_{02}m+Nk_{t3}K_2K_1D_0[arabinose]K_Dx^2P+Nk_{t4}K_3K_1D_0[arabinose]K_Tm^4P$$

The total plasmid concentration stays the same:

$$D=D_0+D_1+D_2+D_3+D_4+D_5+D_6=D_0+K_1D_0[arabinose]+K_3K_1D_0[arabinose]K_Tm^4+K_2K_1D_0[arabinose]K_Dx^2+K_7K_3K_1D_0[arabinose]K_T^2m^4+K_4K_2K_1D_0[arabinose]K_D^2m^4+K_6K_3K_1D_0[arabinose]K_Dx^2K_Tm^4$$

We introduce new parameters:

$$w=NDP$$

$$\alpha=\frac{k_0}{w};\ \beta=\frac{k_{02}}{w}$$

The final models are:

$$\frac{dx}{dt}=\frac{K_{t1}K_1[arabinose]}{1+[arabinose](K_1+K_3K_1m^4+K_2K_1K_Dx^2+K_7K_3K_5K_T^2m^8+K_4K_2K_1K_D^2x^4+K_5K_2K_1K_Dx^2K_Tm^4)}-αx$$

$$\frac{dm}{dt}=\frac{[arabinose](K_{t2}K_1+k_{t3}K_1K_2K_Dx^2+k_{t4}K_1K_3K_Tm^4)}{1+[arabinose](K_1+K_3K_1m^4+K_2K_1K_Dx^2+K_7K_3K_5K_T^2m^8+K_4K_2K_1K_D^2x^4+K_5K_2K_1K_Dx^2K_Tm^4)}-βm$$

### Switch plasmid

[](https://www.notion.so/ed7982c9b21e494e9791de03e5bcfe46#705d1e66450c4746a0fa1548307a2595)

Figure 5. _Graphical representation of the Switch Plasmid_

Based on the graphical representation, we have derived the following differential equations for each of the reactions in the network. Notation: x - concentration of C; m - concentration of Cox; r - concentrattion of tetR, q - concentration of tetR2.

1. _Synthesis of C protein_

    $$\frac{dx}{dt}=Nk_{t1}D_0P$$

2. _Degradation of C protein_

    $$\frac{dx}{dt}=-k_0x$$

3. _Synthesis of Cox and tetR_

    $$\frac{dm}{dt}=Nk_{t2}D_1P$$

    $$\frac{dr}{dt}=Nk_{t2}D_1P$$

4. _Degradation of Cox protein_

    $$\frac{dm}{dt}=-k_{02}m$$

5. _Dimerization of tetR_

    $$\frac{dr}{dt}=-k_{12}r^2+2k_{21}q$$

    $$\frac{dq}{dt}=k_{12}r^2-k_{21}q$$

6. _Binding of tetR2 to D0_

    $$\frac{dq}{dt}=-k_1D_0q+k_{-1}D_2$$

    $$\frac{dD_0}{dt}=-k_1D_0q+k_{-1}D_2$$

    $$\frac{dD_2}{dt}=k_1D_0q-k_{-1}D_2$$

7. _Slowed synthesis of C_

    $$\frac{dx}{dt}=Nk_{t3}D_2P$$

8. _Binding of tetR2 to D2_

    $$\frac{dq}{dt}=-k_2D_2q+k_{-2}D_3$$

    $$\frac{dD_2}{dt}=-k_2D_2q+k_{-2}D_3$$

    $$\frac{dD_3}{dt}=k_2D_2q-k_{-2}D_3-k_{-2}D_3$$

9. _Binding of arabinose_

    $$\frac{dD_0}{dt}=-k_3D_0[arabinose]+k-3D1$$

    $$\frac{dD_1}{dt}=k_3D_0[arabinose]-k-3D1$$

10. _Degradation of tetR_

$$\frac{dr}{dt}=-k_{03}r$$

Then we gathered all the equations into one per each protein involved (general models).

$$\frac{dx}{dt}=Nk_{t1}D_0P-k_0x+Nk_{t3}D_2P$$

$$\frac{dm}{dt}=Nk_{t2}D_1P+k_{02}m$$

$$\frac{dr}{dt}=Nk_{t2}D_1P-k_{12}r^2$$

$$\frac{dq}{dt}=k_{12}r^2-k_{21}q-k_1D_0q-k_{-1}D_2-k_2D_2q+k_{-2}D_3$$

We made an assumption that dimerization and binding are very fast chemical reactions, faster than synthesis. Hence, reaction #5, #6, #8 and #9 are equal to 0.

From reaction #5 we derive:

$$\frac{dr}{dt}=-k_{12}r^2+2k_{21}q=0$$

$$k_{12}r^2=k_{21}q$$

$$q=\frac{k_{12}}{k_{21}}r^2={K_Dr}^2$$

From reaction #6 we derive:

$$\frac{dq}{dt}=-k_1D_0q+k_{-1}D_2=0$$

$$k_1D_0q=k_{-1}D_2$$

$$D_2=\frac{k_1}{k_{-1}}D_0q=K_1D_0q=K_1K_DD_0r^2$$

From reaction #8 we derive:

$$\frac{dq}{dt}=-k_2D_2q+k_{-2}D_3=0$$

$$k_2D_2q=k_{-2}D_3$$

$$D_3=K_2K_1K_DD_0r^2K_Dr^2=K_D^2K_2K_1D_0r^4$$

From reaction #9 we derive:

$$\frac{dD_0}{dt}=-k_3D_0[arabinose]+k_{-3}D_1=0$$

$$k_3D_0[arabinose]=k_{-3}D_1$$

$$D_1=\frac{k_3}{k_{-3}}D_0[arabinose]=K_3D_0[arabinose]$$

Filling in these equations into the general model equations yields:

$$\frac{dx}{dt}=Nk_{t1}D_0P-k_0x+Nk_{t3}D_2P=Nk_{t1}D_0P-k_0x+Nk_{t3}PK_1K_Dr^2D_0$$

$$\frac{dm}{dt}=Nk_{t2}D_1P+k_{02}m=Nk_{t2}K_3D_0[arabinose]P-k_{02}m$$

$$\frac{dr}{dt}=Nk_{t2}D_1P-k_{12}r^2=Nk_{t2}K_3D_0[arabinose]P-k_{03}r$$

The total plasmid concentration stays the same:

$$D=D_0+D_1+D_2+D_3=D_0+K_3[arabinose]D_0+K_1K_Dr^2D_0+K_D^2K_1K_2D_0r^4$$

$$D_0=\frac{D}{D_1+K_3[arabinose]+K_1K_Dr^2+K_D^2K_1K_2r^4}$$

Updated general model now looks like this:

$$\frac{dx}{dt}=\frac{Nk_{t1}DP+Nk_{t3}PK_1K_Dr^2D}{1+K_3[arabinose]+K_1K_Dr^2+K_D^2K_1K_2r^4}-\frac{k_0}{w}x$$

We introduce new parameters:

$$w=NDP$$

$$\alpha=\frac{k_0}{w};\ \beta=\frac{k_{02}}{w};\gamma=\frac{k_{03}}{w}$$

The final models are:

$$\frac{dx}{dt}=\frac{k_{t1}+k_{t3}K_1K_Dr^2}{1+K_3[arabinose]+K_1K_Dr^2+K_D^2K_1K_2r^4}-αx$$

$$\frac{dm}{dt}=\frac{k_{t2}K_3[arabinose]}{1+K_3[arabinose]+K_1K_Dr^2+K_D^2K_1K_2r^4}-βx$$

$$\frac{dr}{dt}=\frac{k_{t2}K_3[arabinose]}{1+K_3[arabinose]+K_1K_Dr^2+K_D^2K_1K_2r^4}-γx$$

{% enddiv %}

## Conclusions

-   P2 genetic switch and our plasmid systems tend towards a steady state, where the C and Cox protein concentrations are in equilibrium with other components;
-   P2 genetic switch bistability is highly sensitive to specific parameter values, which need to be fine-tuned in order to achieve bistable behaviour in model systems;
-   Parameters having the biggest influence on our systems include protein degradation and arabinose binding constants. For this reason, we suggest the wet lab team to use AraC vector in order to be able to manipulate AraC sequence and hence the arabinose binding dynamics.

## References

1. Bednarz M, Halliday JA, Herman C, Golding I. Revisiting bistability in the lysis/lysogeny circuit of bacteriophage lambda. PloS one. 2014 Jun 25;9(6):e100876.

2. Renberg-Eriksson SK, Ahlgren-Berg A, DeGrooth J, Haggård-Ljungquist E. Characterization of the developmental switch region of bacteriophage P2 Hy dis. Virology. 2001 Nov 25;290(2):199-210.

3. Mestivier D, Boelle P-Y, Pakdaman K, Richard A, Comet J-P, Hutzler G, et al. Modeling of λ phage genetic switch. :109.
