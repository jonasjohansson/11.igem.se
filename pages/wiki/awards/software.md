---
title: Software
preamble:
permalink: /wiki/software/
tags: wiki
---

> In order to better understand the status quo of (antimicrobial resistance and) phage therapy we made a documentary built around interviews with top experts within the field, treated patients and other persons of interest.
> Four members of the [iGEM Stockholm team participated in the 2019 hackathon in Vilnius](https://igem.se/projects/biohackathon/), a three-day immersion into biosafety and security of data, synthetic biology, lab efficiency, and life sciences education.

# **Brick 🧱 the Biobrick Designer**

Have you tried looking up information about the iGEM parts? We have, and we don’t approve of the process… The registry in its current state (August 2019) lacks a sense of overview and simple navigation, we aimed to remedy that.

We decided to spend the hackathon creating [Brick](https://brick.bio/), a drag-and-drop tool where you choose your parts, place them in the desired order you and generate a sequence. The sequence can be downloaded for review, and later uploaded to a shared database along with additional information.

_Brick had many names… Brick by Brick, Gene Hackman, Brick and Morty… In the end, the domain name we found settled it. Our favorite space-time continuum and alternative dimensions explorers may make a comeback…_

![](https://2019.igem.org/wiki/images/4/4f/T--Stockholm--software-01.png)

Brick functions well in all modern desktop browsers, as well as on mobile, albeit a bit less smooth. It’s receiving its data from a manually constructed database and contains relevant links for the curious. The downside of our current database solution is that it’s not immediately the actual iGEM inventory, but this could be easily fixed through collaboration with the main organization.

**So, how did we make it?**

# **1. Wireframes! ✊**

We decided early on that we wanted “form to follow function”. We began by outlining the application using Whimsical, a collaborative design tool. After not even an hour we had a rough wireframe going.

![](https://2019.igem.org/wiki/images/2/27/T--Stockholm--software-02.png)

![](https://2019.igem.org/wiki/images/d/d4/T--Stockholm--software-03.png)

![](https://2019.igem.org/wiki/images/2/22/T--Stockholm--software-04.png)

The idea of using drag-and-drop of the bricks was emphasized in this phase, and several iterations of this functionality would later be used. Using Whimsical we could also quickly get an understanding of the content flow on mobile, which would have to be reduced.

Having this outline made developing the application much easier!

# **2. Spreadsheets! 🏓 (because we used tables…)**

The absolute fastest way of building a database is not setting up a MySQL or similar, it’s using Google Spreadsheet, making it public, and then fetching the results as JSON. And that’s what we did.

![](https://2019.igem.org/wiki/images/1/16/T--Stockholm--software-05.png)

In order to fetch the JSON we used the library [Parse GSX by Drumwolf](https://github.com/drumwolf/parse-gsx) but others such as [GSX2JSON](http://gsx2json.com/) would also work.

# **3. Forms! 📝**

Since we are using Spreadsheets, a great way of gathering information is to couple it with Forms! This service comes with tons of greatness that would take several hours to code well. When the user has created their sequence, downloaded and reviewed it, they can access a form which encourages them to share their work. This information gets, you guessed it, added to a spreadsheet which is used on a separate part of the Brick app. We added this as we believe that we could generally improve in how we share our learnings between teams and individuals.

# **4. HTML/CSS and JavaScript + more!**

Everything was done with the basic building blocks of web development. There’s very little motivation to build native iOS or Android apps or use Python when there are the all-mighty web development tools which work cross-platform, cross-devices.

You can pull the complete project and revamp it, it’s all on our [Brick.bio Github repository](https://github.com/jonasjohansson/brick.bio). And with that said, we used Github for uploading our work and Github Pages for making it visible to the world. [Sublime Text](https://www.sublimetext.com/) was the editor in charge of code, and [Piktochart](https://piktochart.com/) was used for art. Another option would be to use [Sketch](https://www.sketch.com/) or [Figma](https://www.figma.com/), as it is literally made for designing digital assets and interfaces.

# **Onwards and upwards**

A hackathon is such a great opportunity for exploring specific challenges fast. Perhaps we organize our own next year since we saw just how much potential such an event holds. Either way, we are very happy to have been part of the event made by the Vilnius-Lithuania iGEM team and look forward to future activities!

🏳️‍🌈 Brick was made by Milda Valiukonytė, Stella Axelsson, Tobias Willi and Jonas Johansson.

# Other ideas

This post is a summary of the different ideas we explored prior to the event, the idea we later settled on as well as suggestions on design tools… “And it goes a little somethin’ like this…”

# **Take me to the candy shop 🍬**

We began sharing a document with the team which included basic information about the event as well as some contribution guidelines. Proposals required a *Title*, description of the *Idea*, as well as a definition of *Context*. We would be very happy if any of these ideas were made, and if they already exist, please write to us at [info@igem.se](mailto:info@igem.se). Here we go!

# **Lab Assistant**

An application that listens to commands and transcribes spoken words into a text log. The commands would be predefined and relevant for the work being done.

_How? By using Chrome on Desktop and the Voice API. Commands would be listened to, and any words following the command would become logged._

# **Troubleshooting**

A digital service which provides suggestions based on collective research and data. The idea here is that there are often things going sideways in the lab and that all of our learnings could become a great shared resource.

_How? Databases such as Quora and Stack Overflow would be scraped for questions and answers related to biotechnology, and later turned into a chatbot using [wit.ai](https://wit.ai/) or Facebook/Slack’s built-in bot._

# **Restriction digestion**

Checking sequences on the computer (SnapGene or VectorNTI software) is tiresome! A better solution would be to open .dna type files (or other, simpler DNA sequence files) on the phone to import sequences, show features of those sequences (promoter/gene/terminator etc), and, importantly, allow to select one or several restriction enzymes to analyze what restriction products you get and what their sizes (bp) are.

_How? Create a mobile-friendly version of [Restriction Mapper](http://www.restrictionmapper.org/) by downloading the open-source code and applying a new CSS._

# **Biotechnology Recipe Book**

A solution that enables the rescaling of components. We imagine this as a recipe book where successful and failed experiments are documented along with the ratios used. A quick calculator can easily scale the project up and down within a certain percentage, and when the scaling doesn’t make sense there would be informative prompts.

_How? Provide all iGEM teams with a form where they can share their experiment and the components included. The form entries then get turned into a giant cookbook which anyone can view, review and rate. A high rating means a high rate of success._

# **Time Keeper**

There are so many ways of taking time, but in the end, we still seem to occasionally fail, or miss a few minutes. This idea attempts at simplifying timekeeping as you can create, edit or choose options such as “incubation” or “heat shock”. The times should be logged, ring an alarm and prompt the user for documentation. Several people should be able to experience the alarm going off locally on their device.

_How? Use [Socket.io](https://socket.io/) and create a web service where a user creates a project and can choose from a list of predefined times (which can be edited). When the timer starts, everyone who is part of that project receives relevant time information._

# **Smart Researcher**

An app that provides a holistic view to scattered data points, aimed at speeding up the innovation & research process. For instance, selecting qualitative sources, which when provided with keywords produce a reading package. The smart researcher goes from mention to mention and traverses a large amount of data. Could use education libraries or paper abstracts.

_How? Actually, this one could be very complex, but let’s simplify. Create a web page which requests a topic, later inquire Google and other sites of interest for articles and contents that include that topic, and related topics, along with imagery. Based on certain criteria, filter out the non-interesting ones, and return a package of information. If the information is great, save it, otherwise, shuffle to get a new list with new parameters._

—

We actually had a few more but will leave you with these as they were the ones we discussed a little to a lot. Now, here’s what we chose to work with…
