# Manar — Build Strategy
**What to build now. Who to hire. How to make it work.**

---

## The Real Situation

The website claims 17 models across 6 families. The honest inventory right now is:

- **SIMAH (vision)** — needs client camera feeds, Jetson hardware, on-site access. You can't build it in a room without a client already signed.
- **SIJILL (knowledge/RAG)** — needs documents. Every school, office, clinic, and government department in Pakistan has documents. You can start today.
- Everything else — TANIN, UFUQ, WAKIL — is downstream of having clients and data. Not now.

**The immediate business is SIJILL. That's what gets built first.**

---

## Why SIJILL Is the Right First Move

SIJILL-DOCUMENT-RAG and SIJILL-CURRICULUM-MT can be built, demonstrated, and deployed without:
- Any client footage
- Any edge hardware (Jetson, GPU at site)
- Any physical installation visit
- Any raw data that doesn't already exist publicly

What you need to build a working demo: a laptop, open-source LLMs, a vector database, and Pakistani documents that are already public (PCTB textbooks, government circulars, legal templates).

What a non-technical buyer sees when you demo it: they type a question, it answers from *their* documents, offline, without internet. That's the whole pitch proven in one room in 10 minutes.

**This is your sales tool. Nothing else you can build right now does that.**

---

## What to Build — In Order

### 1. The Core SIJILL Stack (Weeks 1–4)
The base pipeline that every SIJILL deployment runs on.

**Components:**
- Open LLM running offline — Mistral 7B or Llama 3 via Ollama/llama.cpp on CPU or modest GPU
- Vector database — Qdrant (self-hosted, runs on any Linux box)
- Embedding model — multilingual sentence-transformers supporting Urdu + English
- Document ingest pipeline — PDF, Word, scanned images via OCR (Tesseract with Urdu support)
- Query interface — minimal, clean, local web UI (nothing cloud-dependent)

**Demo dataset to build on publicly (no client needed):**
- Punjab Curriculum & Textbook Board (PCTB) textbooks in Urdu and English
- Government of Pakistan circulars and SROs (publicly available)
- Sample HR policy / law firm document templates

**Deliverable at end of Week 4:** One person types a question in Urdu or English, gets an accurate answer sourced from those documents, running entirely on a laptop. No internet. Record this. That's your first proof-of-work video.

---

### 2. SIJILL-CURRICULUM-MT (Months 1–3)
The education vertical. Pakistan-specific, genuinely differentiated.

**What it does:**
- Teachers query the curriculum AI for lesson plan ideas, past paper analysis, syllabus alignment
- Students query for explanations of concepts in their own textbook's language
- School admin queries for policy documents, result records, HR circulars
- Works in Urdu and English simultaneously
- Runs on a single machine inside the school — no student data leaves the premises

**Why this beats anything else in the market:**
- No Pakistani equivalent exists offline
- Schools cannot use cloud AI for student data (even if the principal wanted to)
- The Urdu-English bilingual layer is something generic products skip
- Budget exists: private school chains, higher secondary boards, cadet colleges, vocational institutes

**Target for first paid pilot:** One mid-size private school group (they have multiple branches, IT person, a budget, and someone who makes decisions). Not a government school first — too slow. Not a university — too complex. A 3–5 campus private school group in Lahore, Multan, or Faisalabad.

---

### 3. SIJILL-DOCUMENT-RAG for Institutions (Months 2–4)
Law firms, government offices, HR departments, finance offices.

**What it does:**
- Query internal policy documents, case files, HR records in seconds
- Replace the intern-who-searches-folders workflow
- Answer: "what does the SECP circular from March say about X" without anyone reading 40 pages

**Why it converts:**
- Every office has the problem. No one has solved it for Urdu + English mixed documents.
- The "no data leaves your office" angle is not just a feature — for legal and finance, it's a compliance requirement that makes it the *only* acceptable option.

**Target for first paid pilot:** A law firm (50+ lawyers, Lahore or Karachi). They have the budget, the document volume, and a strong reason to keep data in-house.

---

### 4. HISAD-FARM-RA — Farm Records Advisory (Month 3–5)
Do not confuse this with drone/vision/camera work. This is a SIJILL-class problem.

**What it is:** Decades of yield data, crop logs, input purchase records sitting in paper registers or Excel files. A Hisad model reads that history and gives advisory on what to sow, where, and when — based on *that holding's own record*, not a provincial average.

**Who to pilot with:** A mid-size cotton or mango landowner in Punjab who already keeps records (even paper). You digitize the records, build the model on top, deploy it on a tablet or laptop on-site.

**Why it's viable now:** No camera or sensor hardware. Just data ingestion + RAG + advisory layer.

---

## What Does NOT Get Built Yet

| What | Why not yet |
|---|---|
| SIMAH (any vision model) | Needs client footage, on-site hardware, physical deployment |
| TANIN (time series) | Needs sensors streaming live data at a real site |
| UFUQ (satellite/geospatial) | Needs satellite imagery pipeline, specialist expertise |
| WAKIL (agents) | Needs working base models + integration layer first |

These are not abandoned. They get built when SIJILL delivers a first paying pilot and you have proof the deployment method works.

---

## The One Hire

**Not:** a data science intern, a comms person, or a "generalist who can do a bit of everything."

**Yes:** A junior ML/NLP engineer who can build RAG pipelines and deploy LLMs offline.

### What They Need to Know
- Python — must be clean, not notebooks-only
- LangChain or LlamaIndex — either, not both on day one
- Qdrant or ChromaDB — vector DB setup and query
- HuggingFace ecosystem — loading models, embeddings, tokenizers
- Basic Linux and Docker — the stack runs on a server, not just a laptop
- Some comfort with Urdu text — tokenization quirks, mixed-script documents

### What They Don't Need
- MLOps at scale
- Cloud experience (actually irrelevant)
- PhD-level theory
- Prior startup experience

### Where to Find Them
FAST-NUCES (Lahore/Islamabad), LUMS CS, ITU Lahore, UET. Final-year or fresh grad with 1–2 real NLP/RAG projects — even academic ones. Interview in code, not in concepts.

### The Arrangement That Works for Both of You

This matters because you said "make it work for him/her." Here is the structure:

**Base salary:** Market junior rate (PKR 80–120K/month for strong fresh grad in Lahore)

**Pilot bonus:** For every paid pilot deployment they build, they receive a fixed bonus (PKR 20–30K per signed pilot). This makes them a stakeholder in selling, not just building.

**Ownership of the stack:** They are the named engineer on every SIJILL deployment. Their name is on the internal build playbook. As the company grows, their role title grows with it.

**90-day trial with a real outcome:** At the end of 3 months, there is a working demo and at least one pilot in discussion. If both are true, full-time permanent offer. The bar is clear. No vague "we'll see how it goes."

**What they get that no large company gives them:** Real ownership of something that runs in a real client's building on day one. That is a career-defining thing at 22 years old.

---

## The 90-Day Plan

### Month 1 — Build
| Week | What happens |
|---|---|
| 1 | Hire is onboarded. Stack decisions made (Qdrant + Ollama + sentence-transformers). Dev environment set up. |
| 2 | Document ingest pipeline built. PCTB textbooks loaded into vector DB. Urdu OCR tested. |
| 3 | Query interface built. End-to-end RAG working on PCTB data. Bilingual queries tested. |
| 4 | Demo recorded. Internal build playbook written. First version of client-facing one-pager drafted. |

### Month 2 — Sell
| Week | What happens |
|---|---|
| 5–6 | Identify 5 target schools or law firms. Get intro meetings through personal network. |
| 7 | Live demo to 2–3 targets. Bring the laptop. Show it on their own sample documents if they share any. |
| 8 | Follow-up. First pilot proposal sent. Scope: 3-month pilot, one location, defined outcome. |

### Month 3 — First Deployment
| Week | What happens |
|---|---|
| 9–10 | First pilot signed. Ingest client's actual documents. Deploy on their hardware (a simple NUC or tower PC is sufficient). |
| 11 | Client uses it. You document everything that broke and fixed it. This becomes the deployment playbook. |
| 12 | Pilot review with client. Renewal or expansion conversation begins. Case study written (anonymised). |

---

## Documents to Create (In This Order)

1. **Internal SIJILL Build Spec** — technical architecture, stack decisions, component versions. Written by the hire in Week 1. This is the single source of truth for every future deployment.

2. **Demo Script** — a 10-minute structured walkthrough for showing the system to a non-technical buyer. What you say, what you type, what you show. Written by you in Week 3.

3. **Pilot Proposal Template** — scope, deliverables, cost, timeline, support terms. Simple. One page. Used for every first conversation.

4. **NDA + Data Handling Agreement** — the hire touches client documents. Clients need assurance. You need protection. One legal document serves both.

5. **Junior ML Engineer JD** — built from the existing SIMAH job post style but rewritten for SIJILL. Posted on LinkedIn and university job boards.

6. **Trial Task for Candidates** — a small take-home task: "here is a 50-page PDF, build a RAG system that answers 5 given questions from it." Should take 4–6 hours. Tells you more than any interview.

7. **Education Sector One-Pager** — one printed page you can leave after a school meeting. Explains what SIJILL-CURRICULUM-MT does, who owns the data, what hardware it runs on, what a pilot costs.

---

## Pricing — First Pilots

Don't overthink this. Be concrete.

| Pilot type | Setup fee | Monthly support |
|---|---|---|
| School (1 campus) | PKR 150,000 | PKR 25,000/month |
| School group (3–5 campuses) | PKR 350,000 | PKR 50,000/month |
| Law firm / finance office | PKR 250,000 | PKR 40,000/month |
| Government office (pilot) | Subsidised or free | Case study in exchange |

The government pilot is free because it becomes a reference that unlocks ten more. The school group pricing is intentionally high enough to be taken seriously and low enough to not require a committee decision.

---

## The One Challenge Back to You

The site says "the team is small by design. Every model that gets deployed is trained and reviewed directly." That is the right instinct.

But right now there is no model that has been deployed on a real client site, and the hire will not change that by themselves. The thing that changes it is **you getting in a room with a school principal or a law firm partner in the next 30 days** and agreeing to run a pilot — even a small, cheap, or free one. The hire builds the product. You find the first client. That is the split that makes this work.

If you wait for the product to be "ready" before selling, it will never be ready enough. The first deployment is what makes it ready.

---

*Manar — Sovereign Intelligence. Built on Your Ground.*
*Internal strategy document — not for external distribution.*
