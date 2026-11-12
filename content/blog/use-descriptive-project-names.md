---
title: "There is great power in a descriptive project name"
tagline: What we call our projects shapes how we understand the work, define success, and decide when we're done
description: What we call our projects shapes how we understand the work, define success, and decide when we're done
date: "2023-12-29"
slug: "/use-descriptive-project-names/"
tags:
  - Communication
  - Project Management
  - Software Engineering
---

Somewhere in your company's backlog is a project called "Important Thing V2."

Nobody remembers exactly what happened in V2, and nobody's quite sure what V2 is supposed to accomplish. But there's a decent chance V4 is already being discussed.

I've seen plenty of projects named this way, and I understand the temptation. It's easy, familiar, and gives everyone a sense that we're making progress. After all, if we've made it to version three, we must have accomplished something in the first two, right?

But I've come to think that how we name projects has more influence on how we approach them than we might realize.

## Naming the Outcome

Take "Notifications V2" and compare it to "Let Users Customize Their Notifications." Both could describe the same work, but they communicate very different things. One tells us which part of the product we're working on. The other tells us what we're trying to accomplish.

That distinction matters when you're trying to get a team aligned around a shared goal. A descriptive name gives everyone a starting point for understanding the work, even if they haven't been involved in the planning. It also gives us something to measure success against. When we've delivered customizable notifications, we can reasonably say the project is done. When have we finished Notifications V2? Presumably when we're ready to start V3.

There's also the question of scope. I've found that projects with vague names have a tendency to collect unrelated work. If we're already touching notifications, why not sneak in that other improvement we've been putting off? It seems harmless enough, especially when the project name doesn't give us much reason to say no.

A more specific name doesn't prevent scope creep, but it makes those conversations easier. We can ask whether a proposed change actually contributes to the goal or whether it deserves its own project. Sometimes the extra work makes sense. At least we're making that decision intentionally.

## When Names Outlive Their Projects

This gets even more interesting when the naming convention makes its way into the codebase.

Anyone who's spent time maintaining an older system has probably encountered something like `NotificationsV2`, `NotificationsV3`, and `NotificationsNew`. Which one is current? Is V2 still being used somewhere? Was `NotificationsNew` created before or after V3? Is there a `NotificationsV4` somewhere that we just didn't see?

And, more importantly, which one can we safely delete?

Version numbers are useful when we're actually managing versions of something. There's nothing wrong with them in the right context. But using them as a default for projects and features can leave us carrying around history that doesn't tell us much about the present.

## A Useful Question Before We Start

Of course, descriptive names aren't magic. They can become outdated, and a good name won't rescue a poorly defined project. But I've found the exercise of naming a project to be useful in its own right.

If we're struggling to come up with a name that describes what we're trying to accomplish, there's a reasonable chance we haven't quite figured it out yet. Maybe we're bundling together several unrelated changes. Maybe we know which system needs work but haven't agreed on the outcome. Or maybe we're simply continuing something because it was already on the roadmap.

Those are useful conversations to have before anyone starts writing code.

So the next time "Dashboard V5" comes up in planning, it's worth asking what V5 is actually supposed to do. You might end up with a better project name, or you might discover that the team still has some figuring out to do.

Either way, that's probably more useful than getting a head start on V6.
