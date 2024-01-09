---
layout: archive
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<div style="font-size: 80%;">

<h1>Academic Appointments</h1>
<hr class="short-line">

<div style="display: flex;">
    <div style="width: 100px;">2016-present:</div>
    <div>Associate Professor of Accounting, Erasmus University, Rotterdam, The Netherlands</div>
</div>

<div style="display: flex;">
    <div style="width: 100px;">2011-2016:</div>
    <div>Assistant Professor of Accounting, Erasmus University, Rotterdam, The Netherlands</div>
</div>

<div style="display: flex;">
    <div style="width: 100px;">2014:</div>
    <div>Visiting Scholar, University of Texas at Austin, Austin, USA</div>
</div>

<div style="display: flex;">
    <div style="width: 100px;">2010:</div>
    <div>Visiting Scholar, Universidad Pablo de Olavide, Seville, Spain</div>
</div>

<br>
<h1>Education</h1>
<hr class="short-line">

<div style="display: flex;">
    <div style="width: 100px;">2011:</div>
    <div>PhD in Business Administration, WHU - Otto Beisheim School of Management, Vallendar, Germany</div>
</div>

<div style="display: flex;">
    <div style="width: 100px;">2007:</div>
    <div>MSc in Information System, University of Münster, Münster, Germany</div>
</div>

<br>
<h1>Research Interests</h1>
<hr class="short-line">
<p>Incentive system design, governance mechanisms, target setting, performance evaluation.</p>

<h1>Working Papers and Ongoing Projects</h1>
<hr class="short-line">
<ul>
  <li>Relative Performance Evaluation and Long-Term Incentives, with M. Matejka.</li>
  <li>CEO-workforce Ideological Divergence and Firm Efficiency, with F. Dai and M. Reimer.</li>
  <li>Incentive Effects of Performance Vesting Equity Grants, with T. Keusch and D. Tsui.</li>
  <li>The Big Birthday Crisis: Exploring the Influence of 9-Ending Ages on CEO Behavior and Firm Outcomes, single-authored.</li>
</ul>

<br>
<h1>Publications</h1>
<hr class="short-line">
<ul>
  {% assign sorted_publications = site.publications | sort: "date" | reverse %}
  {% for post in sorted_publications %}
    {% include archive-single-cv.html %}
  {% endfor %}
</ul>

<br>

<h1>Teaching</h1>
<hr class="short-line">
  {% assign ongoing_courses = site.teaching | where: "ongoing", true | sort: "date" | reverse %}
  {% for post in ongoing_courses %}
    {% include archive-single-teaching.html %}
  {% endfor %}
  
  {% assign finished_courses = site.teaching | where: "ongoing", false | sort: "date" | reverse %}
  {% for post in finished_courses %}
    {% include archive-single-teaching.html %}
  {% endfor %}


<br>
<h1>Research Presentations</h1>
<hr class="short-line">
{% assign presentations = site.talks | where: "type", "Presentation" | sort: "date" | reverse %}
{% for presentation in presentations %}
  <div style="display: flex;">
      <div style="width: 70px;">{{ presentation.date | date: "%Y" }}:</div>
      <div>{{ presentation.title }} at {{ presentation.venue }}, {{ presentation.location }}</div>
  </div>
{% endfor %}

<br>
<h1 style="margin-bottom: 0;">Editorial Positions and Reviewing</h1>
<hr class="short-line">
<h2 style="margin-top: 0;margin-bottom: 0;">Editorial Board</h2>
<div style="display: flex;margin-top: 0;">
    <div style="width: 100px;">2017-present:</div>
    <div>Behavioral Research in Accounting</div>
</div>
<h2 style="margin-bottom: 0; margin-top: 0.5em;">Ad-hoc Editor</h2>
<div style="display: flex;margin-top: 0;">
    <div style="width: 100px;">2023-present:</div>
    <div>Management Accounting Research</div>
</div>
<h2 style="margin-top: 0.5em;margin-bottom: 0.5em;">Ad-hoc Reviewing for Journals:</h2>
<ul style="line-height: 1.0;margin-bottom: 0;margin-top: 0;">
    <li>The Accounting Review</li>
    <li>Accounting, Organizations and Society</li>
    <li>Contemporary Accounting Research</li>
    <li>Management Science</li>
    <li>Management Accounting Research</li>
    <li>European Accounting Review</li>
    <li>Journal of Management Accounting Research</li>
    <li>Abacus</li>
    <li>Accounting Horizons</li>
    <li>Journal of Management Control</li>
    <li>Accounting and Business Research</li>
    <li>Advances in Accounting</li>
</ul>

<h2 style="margin-top: 0.5em;margin-bottom: 0.5em;">Ad-hoc reviewing for Conferences and Funding Bodies:</h2>
<ul style="line-height: 1.0;margin-bottom: 0;margin-top: 0;">
    <li>AAA Annual Meeting</li>
    <li>AAA MAS Midyear Meeting</li>
    <li>European Accounting Association Annual Conference</li>
    <li>German Academic Association for Business Research Conference (VHB)</li>
    <li>German Research Foundation (Deutsche Forschungsgemeinschaft - DFG)</li>
</ul>

<br>

<h1 style="margin-bottom: 0;">Service and Leadership</h1>
<hr class="short-line">

<div style="display: flex; margin-bottom: 0.5em;">
    <div style="width: 100px;">2017-2021:</div>
    <div>Academic Director</div>
</div>

<div style="display: flex; margin-bottom: 0.5em;">
    <div style="width: 100px;">2017-2021:</div>
    <div>Master thesis and internship coordinator</div>
</div>

<div style="display: flex; margin-bottom: 0.5em;">
    <div style="width: 100px;">2018:</div>
    <div>AACSB/NVAO accreditation team member</div>
</div>

<div style="display: flex; margin-bottom: 0.5em;">
    <div style="width: 100px;">2018:</div>
    <div>IMA Endorsement lead</div>
</div>

<div style="display: flex; margin-bottom: 0.5em;">
    <div style="width: 100px;">2016-2017:</div>
    <div>Master of science program committee member</div>
</div>

<div style="display: flex; margin-bottom: 0.5em;">
    <div style="width: 100px;">2013-2014:</div>
    <div>Accounting research seminar coordinator</div>
</div>

<br>

<h1 style="margin-bottom: 0;">Awards, Grants and Qualifications</h1>
<hr class="short-line">

<div style="display: flex; margin-bottom: 0.5em;">
    <div style="width: 100px;">2023:</div>
    <div>Professor of the Year Award Winner</div>
</div>

<div style="display: flex; margin-bottom: 0.5em;">
    <div style="width: 100px;">2018-present:</div>
    <div>High Performance Member at the Erasmus Research Institute of Management (ERIM)</div>
</div>

<div style="display: flex; margin-bottom: 0.5em;">
    <div style="width: 100px;">2021:</div>
    <div>European Accounting Review Outstanding Reviewer Award</div>
</div>

<div style="display: flex; margin-bottom: 0.5em;">
    <div style="width: 100px;">2019-2020:</div>
    <div>Academic Leadership Certification</div>
</div>

<div style="display: flex; margin-bottom: 0.5em;">
    <div style="width: 100px;">2019:</div>
    <div>Management Accounting Section Best Reviewer Award</div>
</div>

<div style="display: flex; margin-bottom: 0.5em;">
    <div style="width: 100px;">2017-2018:</div>
    <div>Professor of the Year Award Nominee</div>
</div>

<div style="display: flex; margin-bottom: 0.5em;">
    <div style="width: 100px;">2016:</div>
    <div>David Solomons Prize for the Best Annual Article in Management Accounting Research</div>
</div>

<div style="display: flex; margin-bottom: 0.5em;">
    <div style="width: 100px;">2013:</div>
    <div>CIMA Research Grant (£ 20,000)</div>
</div>

<div style="display: flex; margin-bottom: 0.5em;">
    <div style="width: 100px;">2011:</div>
    <div>CIMA Seedcorn Grant (£ 5,000)</div>
</div>

<div style="display: flex; margin-bottom: 0.5em;">
    <div style="width: 100px;">2011:</div>
    <div>IMA Research Grant ($6,000)</div>
</div>

<br>

<h1 style="margin-bottom: 0;">Skills and Languages</h1>
<hr class="short-line">

<h2 style="margin-top: 0.5em; margin-bottom: 0.5em;">Skills</h2>
<ul style="list-style-type: none; padding-left: 0;">
    <li>Stata</li>
    <li>Python</li>
    <li>SQL</li>
</ul>

<h2 style="margin-top: 0.5em; margin-bottom: 0.5em;">Languages</h2>
<ul style="list-style-type: none; padding-left: 0;">
    <li>German, Dutch, English: fluent</li>
    <li>Spanish: intermediate</li>
</ul>

