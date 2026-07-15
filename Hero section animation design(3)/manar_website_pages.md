Manar, additional website pages

Pages in this file

1. About
2. Industries
3. How Manar Builds
4. Model Registry
5. Security and Data
6. Partners
7. Frequently Asked Questions
8. Careers
9. Contact
10. Privacy Policy

---

# About

Suggested address: /about

Manar trains and deploys artificial intelligence on the hardware of the organization that will use it. Not on a shared cloud. Not on a server in another country. On a machine inside the building where the data already lives.

Every organization in Pakistan produces information it does not get to use. A factory records more than anyone reviews. A hospital keeps years of scans and files. A warehouse runs cameras nobody watches in real time. A school holds records going back decades. That information is accurate and current. It just sits there, unread, because reading it properly takes more time than anyone has.

Cloud AI asks an organization to send that information elsewhere before anything can be done with it. For a lot of organizations in Pakistan, that is not a minor request. A bank cannot send account records abroad. A hospital cannot send patient scans to a server it does not control. A factory does not want its production floor footage leaving the floor it was recorded on. Sovereignty is not a preference for these organizations. It is a requirement.

Manar's answer is direct. Start with a strong, openly available foundation model. Train it further on the specific conditions of one site. Run it on hardware sized for that site, kept inside the building it serves. The organization keeps its data. It keeps the hardware. It keeps the trained model. None of it depends on a connection to somewhere else.

The team is small by design. Every model that gets deployed is trained and reviewed directly, not passed to a support queue. That will not scale the way a subscription product scales, and it is not meant to. It is meant to produce something that works on one real site before it gets called finished, and something the client actually owns once it is installed.

Manar works between Spain and Pakistan, with its attention on the Pakistani market first. Textile and sportswear factories in Faisalabad and Sialkot. Cold chains carrying dairy and mango exports. Farms across Punjab. Hospitals, clinics, schools, and the government and finance offices that keep the country's records moving. Growth into the wider Gulf region will follow the same rule everything else here follows. Prove it on one site before calling it ready for the next.

---

# Industries

Suggested address: /industries

Manar maintains a registry of seventeen models across six families. Every deployment starts from one of them, trained further on the site that will run it. What follows is what that looks like, industry by industry.

## Institutions

Schools, colleges, government offices, finance and legal offices

Most institutions in Pakistan hold years of files that nobody has the hours to search properly. Board policy, past exam papers, student and staff records, government notifications, contracts, service rules. All of it sits in filing cabinets or scattered folders, in Urdu, in English, sometimes both in the same file.

A Sijill model reads that archive and answers questions against it directly, citing the actual document a claim came from. A school can search years of policy in one query. A government office can find the notification that applies to a specific case without reading through a decade of circulars. A finance or legal team can pull the exact clause that matters out of a long contract instead of reading the whole thing.

Models used: SIJILL-DOCUMENT-RAG for general records and archives, SIJILL-CURRICULUM-MT for teaching material and curricula.

## Security and retail

Retail stores, warehouses, plants, facilities

Cameras are already running in most of these buildings. Almost nobody is watching all of them, all the time. A Simah model watches instead, trained on the specific site it covers rather than a generic dataset of unrelated locations.

A retail floor gets theft and empty shelf detection from cameras already installed. A production line gets a packaging or stitching defect caught the moment it happens, not after the lot ships. A plant or office gate flags an unrecognized face without needing a guard staring at a monitor all shift.

Models used: SIMAH-PERIMETER-VT for sites and perimeters, SIMAH-QUALITY-VT for line defects, SIMAH-SAFETY-VT for compliance, SIMAH-RETAIL-VT for shelf and loss prevention.

## Factories

Textiles, sportswear, pharma, FMCG, leather

A textile floor in Faisalabad or a sportswear line in Sialkot produces more data in a shift than any manager can review. Cameras, machine sensors, and dispatch records all run separately, telling three different parts of the same story.

A Simah model reads a weave or stitching line for defects as they appear. A Tanin model reads vibration and machine telemetry alongside that footage, so a quality issue and a machine fault get connected instead of investigated separately. A Wakil model tracks materials and outbound shipments against the production schedule, so a delay gets flagged before it becomes a missed order.

Models used: SIMAH-QUALITY-VT for line defects, SIMAH-SAFETY-VT for compliance, TANIN-VIBRATION-TS for machine health, WAKIL-SUPPLY-AG for dispatch and supply.

## Warehouses

FMCG, cold storage, logistics hubs

Stock and access in a lot of distribution hubs are still reconciled by hand, against records that are already a day behind by the time anyone checks them.

A Simah model verifies stock against dispatch records without a manual count. A Sijill model reads access logs and documents already kept, so who entered which bay and when is answered in seconds, not by pulling paper logs. A Wakil model follows goods through the building using the systems already running. A Tanin model reads building telemetry, HVAC, loading docks, and facility systems from the same feed.

Models used: SIMAH-PERIMETER-VT for access and perimeter, SIJILL-DOCUMENT-RAG for records, WAKIL-SUPPLY-AG for movement and dispatch, TANIN-BUILDING-TS for building systems.

## Cold chain

Pharma, dairy, mango export, horticulture

A single temperature excursion in a mango export shipment or a vaccine cold chain can spoil the entire consignment, and by the time it is noticed manually, it is usually too late to act.

A Tanin model reads pressure and temperature sensors already installed and flags a drift the moment it happens, not at the next scheduled check. A Ufuq model layers in seasonal and climate risk specific to the route or the region. A Sijill model keeps a complete, searchable record of the chain for the buyer or regulator who eventually asks for it.

Models used: TANIN-PRESSURE-TS for flow and cold chain, UFUQ-CLIMATE-EO for climate risk, SIJILL-DOCUMENT-RAG for audit records.

## Farms and land

Cotton, wheat, mango orchards, rice

A cotton holding or a mango orchard often has decades of yield sitting in a paper register that nobody has turned into anything usable.

A Hisad model reads that register directly, so decisions about what to sow and where are based on the holding's own history rather than a provincial average that may not reflect one specific plot. A Ufuq model brings in satellite and climate data tied to that same plot, tracking seasonal risk and environmental conditions as they change.

Models used: HISAD-FARM-RA for farm records, UFUQ-CLIMATE-EO for seasonal risk, UFUQ-MONITOR-EO for environmental monitoring.

## Clinics and health

Diagnostic labs, hospitals, imaging centers

A diagnostic lab or a teaching hospital sits on years of its own scans, a record no general model has ever seen because it was never allowed to leave the building.

A Simah model supports a scan reading alongside the radiologist, never in place of one, trained on the specific imaging equipment and conditions of that facility. A Sijill model surfaces a relevant pattern from the facility's own patient history on request and can draft a first pass report for a clinician to check and sign.

Models used: SIMAH-CLINICAL-VT for imaging support, SIJILL-DOCUMENT-RAG for patient records.

## Your operation

Transport, utilities, banking, ports, and anything else you run

If the data and the systems exist, a model gets trained on the operation specifically, whatever it is. A banking back office, a utility, a port, a transport company. The starting point is the same Hikma method used everywhere else on this page, scoped to whatever the work actually is.

Models used: HIKMA-OPERATION-STF, scoped to the client's own operation, and WAKIL-COMMERCE-AG where a platform or transaction system is involved.

---

# How Manar Builds

Suggested address: /methodology

Every deployment follows the same four steps. Train, deploy, adapt, compound. The steps do not change from one industry to the next. What changes is the data, the hardware, and the specific job the model is trained to do.

## Train

A deployment starts from a registered model already built for the general classification a client needs, a vision model for cameras, a knowledge model for documents, a time series model for sensor data. That starting model is then trained further on the client's own conditions. Its own cameras, its own documents, its own machines. Nothing generic stays generic past this step.

## Deploy

The trained model installs on hardware the client owns, sized to what that specific model actually needs to do. A document search system and a sixteen camera vision system do not need the same hardware, and Manar does not price or size them as if they did. Everything runs inside the client's building, offline if the client requires it, with no cloud dependency built into the arrangement.

## Adapt

A model does not stay static once it is installed. It retrains as the client's own data grows, so it reflects the operation as it is today rather than as it was on the day it went live. This is scheduled with the client, not run silently in the background without their knowledge.

## Compound

Accuracy on a client's own conditions improves with every day the model runs there. An organization that starts training on its own data now holds a record, six months or two years from now, that a competitor starting later cannot shortcut or buy. This is the actual advantage of the approach, not a claim about the model being smarter in the abstract.

## The Hikma method

Every model Manar deploys begins as an openly available foundation model. The strongest one available for a given domain, reviewed as the open field moves forward. What makes it useful to one specific client is what happens after that starting point. It gets trained on the data of the exact domain and environment it will serve, local conditions and local patterns no general training run has ever been shown. What leaves that process is not the same model that entered it. It belongs to the client, runs on hardware the client owns, and reflects a site no other model in the world has been trained on.

## A typical engagement

A deployment usually starts with a site visit, not a proposal. Manar looks at the cameras, records, or systems already running before recommending anything, because the right model and the right hardware depend entirely on what is actually there. After that, training runs against real data from the site, not simulated or generic data, and validation happens against the same conditions the model will run in once it is live. Installation and handover follow once the client has seen the results and is satisfied with them. Nothing about this timeline is fixed in advance, because no two sites start from the same place.

## Naming

Every model that gets trained is given a formal code before it is deployed, a family, a domain, and a method, in that order. A vision model trained for a security site is not the same registry entry as a vision model trained for quality control on a production line, even if both come from the same family. This is a discipline, not decoration. It means every model Manar has ever trained can be found, checked, and accounted for.

---

# Model Registry

Suggested address: /registry

Manar maintains seventeen registered models across six families. Every one of them started as an open foundation model and was trained further on a real site's own conditions. This page lists the current registry.

## Simah, vision

سِمة

Trained vision over cameras, imaging, and physical sites.

SIMAH-PERIMETER-VT, sites and perimeters
SIMAH-QUALITY-VT, line and production defects
SIMAH-SAFETY-VT, safety and compliance
SIMAH-RETAIL-VT, shelf and loss prevention
SIMAH-CLINICAL-VT, imaging support

## Tanin, time series

طنين

Reads vibration, pressure, grid load, and building telemetry as it streams.

TANIN-VIBRATION-TS, machine health
TANIN-PRESSURE-TS, flow and cold chain
TANIN-GRID-TS, power and grid
TANIN-BUILDING-TS, building systems

## Sijill, knowledge

سِجِلّ

Documents, curricula, and farm records, retrieved and reasoned over in Urdu or English.

SIJILL-DOCUMENT-RAG, documents and records
SIJILL-CURRICULUM-MT, teaching and curricula
HISAD-FARM-RA, farm records and advisory

## Ufuq, geospatial

أُفُق

Climate risk and environmental monitoring read across a property's own ground.

UFUQ-CLIMATE-EO, climate and seasonal risk
UFUQ-MONITOR-EO, environmental monitoring

## Wakil, agents

وَكيل

Acting models for supply chain and commerce platforms, scoped to one operation.

WAKIL-SUPPLY-AG, supply chain and dispatch
WAKIL-COMMERCE-AG, commerce platforms

## Hikma, custom

حِكمة

The same method, trained on whatever the client's operation actually is.

HIKMA-OPERATION-STF, scoped to the client's work

## Reading a code

Every code follows the same order, family, then domain, then method. SIMAH-PERIMETER-VT is a Simah vision model, trained for perimeter and site monitoring, using a vision transformer method. The structure is fixed so any model in the registry can be identified from its name alone, without needing to ask what it does.

---

# Security and Data

Suggested address: /security

The core promise behind every Manar deployment is simple to state and meant to be checked, not taken on faith. Client data does not leave the building it was recorded in. The hardware running a model belongs to the client, not to Manar. The trained model itself belongs to the client once it is installed.

## What runs where

A Manar model reads data where it already lives, cameras, records, or sensors already in place. There is no export of that data to a third party and no requirement to rebuild existing systems around Manar's software. Reasoning happens on the hardware installed at the site, not on a remote server. Alerts, answers, and reports are produced there and stay there unless the client chooses to move them.

## Offline by default, connected only where the client decides

A deployment can run fully offline if the client requires it. Where a client wants a partner system, a dashboard, or a software product to call into a Manar model as a feature, that integration is scoped and agreed with the client directly, not enabled by default. Sovereignty is a property of the deployment, not a description added afterward.

## Hardware and access

Hardware is sized to the specific model and workload it runs, not sold as a single fixed box regardless of the job. Physical placement, whether that is a camera at a gate or a server in a server room, is decided during the site visit that precedes every deployment, based on what the site actually needs rather than a standard template.

## Data collected by the website

This page describes what happens once a system is deployed at a client's site. Separately, the Manar website itself collects a small amount of information through its contact form, covered in full in the Privacy Policy. The two are not the same thing. A visitor filling in a contact form is not a client with a deployed system, and the information involved is handled differently, as described on that page.

## Questions

Any organization evaluating Manar for a security sensitive environment, a bank, a hospital, a government office, is welcome to raise specific questions about data handling before a deployment begins. These questions are answered directly, as part of the site visit and proposal process, not through a generic compliance document.

---

# Partners

Suggested address: /partners

Manar reaches clients through three paths. All three end the same way, a client's data staying inside their own building, but they start differently depending on who already has the relationship.

## Direct

Manar trains the model, ships it, and installs it inside the client's environment directly. This path is used where Manar already has the relationship with the client, from the first conversation through ongoing support.

## Through an installer

A systems integrator or distributor often already sells and maintains the hardware a client runs, cameras, servers, or industrial equipment. In this path, Manar trains the model for that hardware and hands it to the integrator to install and support. The integrator keeps the client relationship and the install. Manar keeps the model.

## Inside a partner's product

A partner's existing software can call a Manar model as a feature inside its own product. The partner's customers see the partner's interface, not Manar's. Manar supplies and trains the model behind it, scoped to what that feature needs to do.

## Working with Manar as a partner

In every path, the client's data stays in their own building regardless of how the deployment started. A partner is not asked to route client data through Manar's infrastructure, because there is no such infrastructure in the arrangement to route it through. What a partner brings is the relationship, the install base, or the software. What Manar brings is a model trained specifically for that partner's use case.

Organizations already selling hardware, software, or services into the industries Manar covers, security, factories, warehouses, cold chain, agriculture, healthcare, institutions, are the natural fit for this kind of partnership. Reach out through the contact page to start that conversation.

---

# Frequently Asked Questions

Suggested address: /faq

## How long does a deployment take

It depends entirely on the site. A deployment starts with a visit, not a fixed timeline, because the right hardware and the right training data depend on what is actually running at that site already. A straightforward vision deployment on cameras already in place moves faster than a knowledge system built from years of scattered paper records.

## Does this work without internet

Yes. A deployment can run fully offline where the client requires it. Where a client wants an optional integration with another system or software product, that connection is scoped and agreed separately, not switched on by default.

## Who owns the hardware

The client. Hardware is specified or supplied as part of a deployment, but ownership sits with the organization it is installed for, the same as any other equipment on their site.

## What if our records are incomplete or messy

Most organizations' data looks like this, which is exactly why it sits unread in the first place. A site visit and data review happen before training starts, specifically to work out what is usable and what needs cleaning up first. This is normal, not a blocker.

## Can we start small

Yes. A single camera feed, one archive of documents, or one production line is enough to start with. The four step process, train, deploy, adapt, compound, works the same way at small scale as it does at large scale.

## What happens if we want to change vendors later

The trained model belongs to the client once it is installed, along with the hardware it runs on. Nothing about the arrangement locks an organization into an ongoing dependency they cannot leave.

## Do you work in Urdu

Yes. Knowledge models built on the Sijill family read and answer in Urdu, English, or a mix of both, depending on how the client's own records are written.

## What happens after we send an inquiry

A reply comes within two working days. That first conversation covers what the client already runs and what sits unread, before anything is proposed.

## How is pricing worked out

Pricing is scoped per deployment, based on the hardware a specific model needs and the complexity of the training involved. There is no fixed price list, because a document search system and a sixteen camera vision system are not the same job.

---

# Careers

Suggested address: /careers

Manar is small right now, by design. Every model that gets trained and deployed goes through direct review, not a process built to hide who is actually doing the work.

The people Manar looks for are comfortable with both sides of the job, the technical part, training and tuning models against real data, and the practical part, visiting a site, understanding what is actually running there, and building something that works on that specific ground. Vision and computer vision experience matters most right now, given the current mix of deployments, but this changes as the work changes.

There is no long list of open roles here, because there is no long list of open roles right now. When Manar needs to grow the team, this page will say so directly, with what the role actually involves rather than a generic description. In the meantime, anyone who thinks their work fits what Manar does is welcome to reach out through the contact page.

---

# Contact

Suggested address: /contact

## Get in touch

Tell Manar what you run and what sits unread. A reply comes within two working days, and the response will say plainly which model reads what you described, not a generic pitch sent back at you.

## What to include

Your name and the organization you represent, if any. What kind of site or systems you run, cameras, records, machines, or something else. What currently sits unread or unused that you would want a model to work on.

## Response time

Two working days, every time. If a proposal is needed after that first conversation, it follows a site visit, not a quote sent blind.

## Channels

Email: hello@manar.pk
WhatsApp: add number here
Phone: add number here

## Where Manar works

Manar's current focus is Pakistan, with Punjab as the center of activity so far. Inquiries from anywhere in the country, and from the wider Gulf region, are welcome.

---

# Privacy Policy

Suggested address: /privacy

This policy covers information collected through the Manar website, primarily through the contact form. It does not cover data handled as part of a deployed system at a client's site, which is governed by the terms agreed directly with that client and described on the Security and Data page.

## What is collected

When a message is sent through the contact form, Manar receives the name, email address, phone number, organization if provided, industry if selected, and the message itself.

## Why it is collected

This information is used only to respond to the inquiry sent. It is not used for advertising, and it is not sold or shared with third parties.

## How it is stored

Contact form submissions are kept only as long as needed to respond to and follow up on an inquiry. Manar does not run advertising and does not use tracking tools built for ad targeting.

## Your rights

Anyone who has submitted a message through the contact form can ask for it to be deleted at any time by writing to hello@manar.pk.

## Changes to this policy

If this policy changes, the updated version will be posted on this page with a new date.

Last updated: add date here
