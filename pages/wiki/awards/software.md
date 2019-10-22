---
title: Software
preamble:
permalink: /wiki/software/
tags: wiki
---

> Four members of the [iGEM Stockholm team participated in the 2019 hackathon in Vilnius](/wiki/collaborations/#biohackathon), a three-day immersion into biosafety and security of data, synthetic biology, lab efficiency, and life sciences education.

# Brick 🧱 the Biobrick Designer

Have you tried looking up information about the iGEM parts? We have, and we don’t approve of the process… The registry in its current state (August 2019) lacks a sense of overview and simple navigation, we aimed to remedy that.

We decided to spend the hackathon creating [Brick](https://brick.bio/), a drag-and-drop tool where you choose your parts, place them in the desired order you and generate a sequence. The sequence can be downloaded for review, and later uploaded to a shared database along with additional information.

_Brick had many names… Brick by Brick, Gene Hackman, Brick and Morty… In the end, the domain name we found settled it. Our favorite space-time continuum and alternative dimensions explorers may make a comeback…_

![](https://2019.igem.org/wiki/images/4/4f/T--Stockholm--software-01.png)

Brick functions well in all modern desktop browsers, as well as on mobile, albeit a bit less smooth. It’s receiving its data from a manually constructed database and contains relevant links for the curious. The downside of our current database solution is that it’s not immediately the actual iGEM inventory, but this could be easily fixed through collaboration with the main organization. It generates both FASTA and GeneBank files, and can also make music of your sequence!

[⤓ Download Brick](https://2019.igem.org/wiki/images/1/1f/T--Stockholm--brick.zip)!

## So, how did we make it

### 1. Wireframes! ✊

We decided early on that we wanted “form to follow function”. We began by outlining the application using Whimsical, a collaborative design tool. After not even an hour we had a rough wireframe going.

![](https://2019.igem.org/wiki/images/2/27/T--Stockholm--software-02.png)

![](https://2019.igem.org/wiki/images/d/d4/T--Stockholm--software-03.png)

![](https://2019.igem.org/wiki/images/2/22/T--Stockholm--software-04.png)

The idea of using drag-and-drop of the bricks was emphasized in this phase, and several iterations of this functionality would later be used. Using Whimsical we could also quickly get an understanding of the content flow on mobile, which would have to be reduced.

Having this outline made developing the application much easier!

### 2. Spreadsheets! 🏓 (because we used tables…)

The absolute fastest way of building a database is not setting up a MySQL or similar, it’s using Google Spreadsheet, making it public, and then fetching the results as JSON. And that’s what we did.

![](https://2019.igem.org/wiki/images/1/16/T--Stockholm--software-05.png)

In order to fetch the JSON we used the library [Parse GSX by Drumwolf](https://github.com/drumwolf/parse-gsx) but others such as [GSX2JSON](http://gsx2json.com/) would also work.

### 3. Forms! 📝

Since we are using Spreadsheets, a great way of gathering information is to couple it with Forms! This service comes with tons of greatness that would take several hours to code well. When the user has created their sequence, downloaded and reviewed it, they can access a form which encourages them to share their work. This information gets, you guessed it, added to a spreadsheet which is used on a separate part of the Brick app. We added this as we believe that we could generally improve in how we share our learnings between teams and individuals.

### 4. HTML/CSS and JavaScript + more!

Everything was done with the basic building blocks of web development. There’s very little motivation to build native iOS or Android apps or use Python when there are the all-mighty web development tools which work cross-platform, cross-devices.

You can pull the complete project and revamp it, it’s all on our [Brick.bio Github repository](https://github.com/jonasjohansson/brick.bio). And with that said, we used Github for uploading our work and Github Pages for making it visible to the world. [Sublime Text](https://www.sublimetext.com/) was the editor in charge of code, and [Piktochart](https://piktochart.com/) was used for art. Another option would be to use [Sketch](https://www.sketch.com/) or [Figma](https://www.figma.com/), as it is literally made for designing digital assets and interfaces.

## Onwards and upwards

A hackathon is such a great opportunity for exploring specific challenges fast. Perhaps we organize our own next year since we saw just how much potential such an event holds. Either way, we are very happy to have been part of the event made by the Vilnius-Lithuania iGEM team and look forward to future activities!

🏳️‍🌈 Brick was made by Milda Valiukonytė, Stella Axelsson, Tobias Willi and Jonas Johansson.

> Psst. We also made the iGEM Scraper which searches all previous teams and collects their Description pages, creating a searchable database. Could be useful! [⤓ Download iGEM Scraper](https://2019.igem.org/wiki/images/e/e3/T--Stockholm--igem-scraper.zip).
