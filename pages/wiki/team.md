---
title: Team
preamble:
permalink: /wiki/team/
---

[](https://www.notion.so/8f6262d406b04820aae6a788f03714d8#055894d39e624801a1eb8384a22314e0)

Esther was invented and made possible by this fantastic team of people. With 13 different nationalities, diverse backgrounds, educations, perspectives and ideas, we developed this project. We went from strangers to the creators of Esther in the span of only 9 months, but most importantly we all became great friends for life. This is us: iGEM Stockholm 2019.

{% image "/static/img/team.jpg"  %}

## Team members

{% div "members" %}

{% for member in metadata.members %}

{% div "member" %}

![]({{member.image}})

{% div "member-data" %}

### {{ member.name }}

-   Team role: {{ member.role }}
-   School: {{ member.school }}
-   Program: {{ member.program }}
-   Motivation: {{ member.motivation }}

{% enddiv %}

{% enddiv %}

{% endfor %}

{% enddiv "" %}
