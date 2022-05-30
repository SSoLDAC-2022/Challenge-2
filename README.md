# Challenge 2: Grouping and Submodels in AEC design projects

**Champions**: Mads Holten Rasmussen, Jeroen Werbrouck

**Number of people per team**: 3-4
**Anticipated workload**: about 20-25 hours per person, which includes time for preparation of the presentation.

## Learning objectives for this challenge
[...]

## Challenge description: 
Numerous stakeholders are involved in the design of construction projects and they all have specific requirements to all the sub-components of the building. In practice, different designers will typically group building elements or spaces that from their perspective are equivalent to make it easier to specify requirements for the whole batch at once. For example, an architect could specify that there are two types of windows in the project: “narrow windows” and “wide windows” and all geometrical and material properties would be the same for all instances of these groups. But for the indoor climate engineer it would also be relevant to distinguish by orientation and for maintenance they would all be considered equivalent. And as the project progresses, the architect might wish to do a further subdivision based on for example hinge placement (left/right). The grouping depends on the eyes who see and current classification and identification approaches don’t support this in a meaningful way.


## Success:
[...]

Within the coding challenge you will work on the following tasks:
[...]

## Challenger Research Questions:
* Can you, with the use of LBD technologies, provide designers with a tool that would allow them to 1) define grouping constraints, 2) specify properties that are relevant for all instances belonging to this group and 3) inherit these new properties to instances. 
* What could a tool for interacting with such data model look like? Can it be personalised based on the role of the current user? What outputs could we get? 
* Can you combine multiple project resources to generate the required submodel view?


## Data Sets available: 
* [Duplex](https://github.com/LBDserver/resources/tree/main/duplex) (IFC, TTL)
* [Schependomlaan](https://github.com/buildingSMART/Sample-Test-Files/tree/master/IFC%202x3/Schependomlaan) (IFC, TTL)
* ... bring your own BIM model

## Challenge Instructions
Bring your laptop.

## Tools
* [IFCtoLBD converter](https://github.com/jyrkioraskari/IFCtoLBD/releases/tag/2.34.0)
* [GraphDB Free](https://www.ontotext.com/products/graphdb/graphdb-free/) or other triple store