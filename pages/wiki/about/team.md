---
title: Team
permalink: /wiki/team/
tags: wiki
cover: /static/img/wiki/about/team-01.jpg
---

> Esther was invented and made possible by colourful and fantastic team of people. With 🇪🇸🇬🇷🇸🇪🇰🇿🇮🇳🇮🇩🇳🇱🇫🇷🇱🇹🇮🇩🇦🇷🇮🇳🇨🇳🇩🇪 diverse backgrounds and perspectives we went from ambitious strangers to dedicated creators, and most importantly, became great friends.

{% div "members" %}

{% for member in metadata.members %}

{% div "member" %}

<img src="{{member.image}}">

{% div "member-data" %}

### {{ member.name }}

-   Role: {{ member.role }}
-   {{ member.program }}. {{ member.school }}

{{ member.motivation }}

{% enddiv %}

{% enddiv %}

{% endfor %}

{% enddiv %}

![](/static/img/wiki/about/team-02.jpg)
