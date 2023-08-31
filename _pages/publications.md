---
layout: archive
title: "Scientific publications"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

<div style="font-size: 80%;">
{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
</div>

<br/><br/>

<span style="font-weight:bold">Practitioner oriented publications</span>
======

<div style="font-size: 80%;">
{% for post in site.practitioner_pubs reversed %}
  {% include archive-single.html %}
{% endfor %}
</div>

<br/><br/>

<span style="font-weight:bold">German publications</span>
======

<div style="font-size: 80%;">
{% for post in site.german_pubs reversed %}
  {% include archive-single.html %}
{% endfor %}
</div>