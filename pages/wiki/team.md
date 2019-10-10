---
title: Team
preamble: iGEM Stockholm 2019
permalink: /wiki/team/
tags: wiki
---

Our project was made by this team of fantastic people from 13 different nationalities with diverse backgrounds, educations and perspectives. We went from strangers to the creators of Esther in the span of 9 months, but most importantly we all became great friends for life!

{% image "/static/img/team.jpg"  %}

## Superstars

{% div "members" %}

{% for member in metadata.members %}

{% div "member" %}

![]({{member.image}})

{% div "member-data" %}

### {{ member.name }}

-   Role: {{ member.role }}
-   School: {{ member.school }}
-   Program: {{ member.program }}

{{ member.motivation }}

{% enddiv %}

{% enddiv %}

{% endfor %}

{% enddiv "" %}

{% image "https://scontent-prg1-1.cdninstagram.com/vp/6ebcaba48fbcbee67acfecd93cafeffb/5E20F236/t51.2885-15/e15/70795655_488994548602356_1345699702879015763_n.jpg?_nc_ht=scontent-prg1-1.cdninstagram.com&_nc_cat=100"  %}
