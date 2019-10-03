---
title: Team
preamble: iGEM Stockholm 2019
permalink: /team/
---

[](https://www.notion.so/8f6262d406b04820aae6a788f03714d8#055894d39e624801a1eb8384a22314e0)

Our project was made by this team of fantastic people from 13 different nationalities with diverse backgrounds, educations and perspectives. We went from strangers to the creators of Esther in the span of 9 months, but most importantly we all became great friends for life!

{% image "/static/img/team.jpg"  %}

## Superstars

{% div "members" %}

{% for member in metadata.members %}

{% div "member" %}

![]({{member.image}})

{% div "member-data" %}

### {{ member.name }}

-   Team role: {{ member.role }}
-   School: {{ member.school }}
-   Program: {{ member.program }}

{{ member.motivation }}

{% enddiv %}

{% enddiv %}

{% endfor %}

{% enddiv "" %}
