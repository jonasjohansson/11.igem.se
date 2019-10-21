---
title: Team
permalink: /wiki/team/
tags: wiki
cover: https://2019.igem.org/wiki/images/e/e7/T--Stockholm--team-01.jpg
---

> Esther was invented and made possible by colourful and fantastic team of people. With 🇪🇸🇬🇷🇸🇪🇰🇿🇮🇳🇮🇩🇳🇱🇫🇷🇱🇹🇮🇩🇦🇷🇮🇳🇨🇳🇩🇪 diverse backgrounds and perspectives we went from ambitious strangers to dedicated creators, and most importantly, became great friends.

{% div "members" %}

{% for member in metadata.members %}

{% div "member" %}

<img src="{{member.image}}">

{% div "member-data" %}

### {{ member.name }}

-   <u>{{ member.role }}</u>
-   {{ member.program }}
-   {{ member.school }}

{{ member.motivation }}

{% enddiv %}

{% enddiv %}

{% endfor %}

{% enddiv %}

![](https://2019.igem.org/wiki/images/a/a0/T--Stockholm--team-02.jpg)

