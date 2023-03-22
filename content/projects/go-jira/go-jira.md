---
title: "go-jira"
date: 2019-03-20T15:49:38Z
draft: false
tags: ["React", "Node"]
Type: development
---

<img src="https://github.com/zemmsoares/GO-JIRA/blob/master/FrontEnd/src/img/logo.png" width="350"/>

Application for monitoring Issues from JIRA Projects. Check status, issues & storypoints for a given Sprint, Search Issues status, type per Assignee. Advanced Search for filtering issues on multiple Assignees and Date Range.

![Go-jira](/projects/go-jira/index.png)

![Go-jira](/projects/go-jira/advanced_filters.png)

![Go-jira](/projects/go-jira/storypoints_sprint.png)



Please report any issues or bugs you may find by [creating an issue ticket](https://github.com/zemmsoares/GO-JIRA/issues/new) here on GitHub.  
Make sure you include steps on how to reproduce it.

## Table of Contents

- [Introduction](#introduction)
- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Cloning the Repository](#cloning-the-repository)
  - [Configuration](#configuration)
  - [Generating your Encoded_Token](#generating-your-encoded_token)
  - [Find customfield_ID](#find-customfield_id)
  - [Contributors](#contributors)

## Introduction

The main purpose of **GO-JIRA** is to help users monitor Jira Projects

Some of the functionalities:

- See Active, Closed, Future Sprints
- Issues (Complete, Not Complete, Completed in another Sprint & Punted) from Selected Sprint
- Assignee storypoints for a selected Sprint
- Issues Assigned to each user
- Filter by Issue type (Story, Bug, Incident, task, Sub-task, Epic)
- Filter by Issue status (Done, Ready for Dev, QA ...)
- Advanced Search for Multiple Assignee / Date range filter
- Issue timeline (status changes w/ date)

## Getting Started

These instructions will get you a copy of the project up and running.

### Prerequisites

A Jira API Token must be generated. [Follow these steps to generate your token](https://developer.atlassian.com/cloud/jira/platform/jira-rest-api-basic-authentication/)

### Cloning the Repository

Clone the repository to your local machine

```
$ git clone https://github.com/zemmsoares/GO-JIRA.git
```

### Configuration

#### Generating your ENCODED_TOKEN:

- Generate an API token for Jira using your Atlassian Account: https://id.atlassian.com/manage/api-tokens.
- Build a string of the form email:api_token.
- BASE64 encode the string.

Change **host** and **token** at `GO-JIRA/Backend/settings/config.json`

```
{
	"jira" : {
		"host" : "your-atlassian.jira.com",
		"token" : "ENCODED_TOKEN"
	}
}
```

#### Find customfield_ID

The storypoint field is different between installations, we have to specify customfield_ID

Select Issues> Fields > Custom Fields to open the Custom Fields page, hover Configure and the following status will appear at bottom left corner:
`http://id.atlassian.com/secure/**/TranslateCustomfield!default.jspa?id=10013`
on this example, storypointsfield will be customfield_10013

Change **projectkey**, **server** and **storypointsfield** at `GO-JIRA/Frontend/src/config.json`

```
{
	"jira" : {
		"projectkey" : "TES",
		"server" : "http://localhost:8000",
		"storypointsfield" : "customfield_10002"
	}
}
```

- projectkey (Your Atlassian project Key)
- server (GOJIRA Backend URL)
- storypointsfield
