---
title: The changing cost of compromise
tagline: Not every productivity gain needs to become a shorter deadline
description: Not every productivity gain needs to become a shorter deadline
date: "2026-11-24"
tags:
  - AI
  - Leadership
  - Software Engineering
  - Software Quality
  - Technical Debt
---

I think we're chasing the wrong metric when it comes to AI in software engineering.

We're so focused on how much faster we can build things that we've largely skipped over a more important question: What compromises could we *stop* making?

Engineering has long been about compromise. How do we deliver value to the business quickly while also building a system that's sustainable in the long run?

Failing to do either is bad business. Eventually, everything grinds to a halt because you're trying to build inside a junk heap. Or you lose out to your competitors because you're still trying to polish the perfect system while they've already established themselves in the market.

We've spent decades trying to find the right balance between the two. Now we're introducing technology that changes that balance, and our immediate reaction is to move up all of our deadlines.

We get the same thing, but faster. Sounds great, right? But if you look at what we've been building up until now, is that actually what we want?

## Making fewer compromises

Think about some of the things we've historically sacrificed in the interest of time.

- Refactoring parts of a system before building on top of them.
- Accounting for edge cases we know exist but aren't likely to encounter right away.
- Writing more comprehensive tests.
- Improving observability before something goes wrong.
- Addressing architectural problems before they become business problems.

These weren't necessarily bad engineering decisions. In many cases, they were perfectly reasonable business decisions given the cost of doing otherwise.

But if that cost is going down, why are we still making the same compromises?

Let's say a feature would historically take four weeks to build, with a handful of engineering compromises along the way. If we can now build that same feature in two weeks, that's great for the business.

But what if we spent three weeks building it instead? How many of those compromises could we eliminate with that extra week? And how much easier would it be to build the next feature as a result?

We're still getting to market a week earlier than we would have before, but we're also investing in our ability to continue delivering value. That's harder to measure, though, especially if all we're tracking is how quickly we deliver features.

## The consequences of building faster

The [2025 DORA State of AI-assisted Software Development report](https://dora.dev/research/2025/dora-report/) found that increased AI adoption was associated with both higher delivery throughput and greater delivery instability.

That shouldn't be all that surprising. If we're already struggling to maintain the quality of our systems at the rate we're building them, what happens when we start building even faster?

There's another problem with this. We run into the consequences of our bad decisions faster, too.

Maybe we put off refactoring part of a system because we didn't anticipate doing much work in that area over the next year. That was a reasonable decision at the time. But what happens when we start making a year's worth of changes to that system in a few months?

Part of the problem is that we're still making decisions based on assumptions that may no longer be true.

The same goes for how much time we have before performance issues, security vulnerabilities, and other problems are discovered. The people finding those problems have access to much of the same technology we're using to build the systems in the first place.

Delivering a product that doesn't work quickly isn't a win. And neither is delivering a product quickly only to spend the next several months dealing with the problems we've introduced.

## Redefining good enough

As an engineering manager, I'm interested in how these changes should affect the conversations we have when we're planning work.

When an engineer brings up a concern about the existing system, are we still as quick to push that work off until later? When we're estimating a feature, are we reconsidering what should be included in that work or just reducing how long we expect it to take?

There are plenty of engineering problems that AI isn't going to make significantly cheaper to solve. We also have to account for the time it takes to understand and verify the code we're generating. And there will always be good business reasons to take on technical debt.

I'm not suggesting we suddenly start striving for perfect systems. We didn't have that luxury before, and we don't have it now.

But I'd like us to start questioning some of the compromises we've collectively accepted as necessary parts of software engineering. Some of them may not be nearly as expensive to avoid as they once were.

If we're going to start expecting engineers to deliver faster, we should also start expecting more from what they deliver.

We should be raising the bar, not just moving the deadline.
