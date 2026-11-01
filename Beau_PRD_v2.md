# Beau Product Requirements Document

**Working title:** Beau  
**Client:** EBUBE ELLA  
**Prepared by:** Ezeocha Obioma - Karma Groups  
**Version:** 2.0  
**Date:** 1 November 2026  
**Platform:** Responsive web first with customer, business and admin portals  
**Launch market:** Nigeria  
**Transaction currency:** Nigerian naira (NGN)

## 1. Product summary

Beau is a beauty and wellness service marketplace where customers discover verified businesses near them, compare services and portfolios, select appointment times, pay a deposit and manage their bookings. Customers and businesses communicate through monitored, text-only messaging within Beau. The remaining service balance is collected through Beau before service begins, allowing the platform to account for the full service value and its commission.

Businesses manage their services, camera-captured work images, externally uploaded references, staff schedules, branches, bookings and financial records through a business portal. Basic, Growth and Business subscriptions provide progressively broader operational capabilities. Administrators oversee verification, conversations, content, subscriptions, disputes, payments and payouts through a separate permission-controlled portal.

Trust is central to the experience. Customer and business actions require completed verification. External portfolio images display a clear source disclaimer. Both customers and vendors can publish reviews linked to completed appointments. Camera capture identifies the image's capture route; it does not establish that a vendor performed the depicted work.

This document replaces the discovery assumptions in the original PRD wherever the client has now confirmed a decision. It defines product behavior and acceptance criteria for design, engineering, QA and client review. It is not a delivery-date or fixed-price commitment.

## 2. Document control and requirement status

### 2.1 How to read this document

| Label | Meaning | Treatment |
| --- | --- | --- |
| Confirmed | Agreed in the client brief and planning discussion | Required in the launch product unless formally changed |
| Proposed default | A recommended operational or technical behavior needed to make the confirmed feature workable | Review at requirements sign-off; use as the planning baseline |
| Pending approval | A commercial, policy or provider value that has not been agreed | Must be approved before dependent production functionality is enabled |
| Roadmap | Deliberately outside launch | Estimate and approve separately |

Requirement identifiers remain stable across designs, tickets and test cases. Acceptance criteria describe observable outcomes rather than a mandatory framework or vendor.

### 2.2 Confirmed product decisions

- Launch a responsive website first for Nigeria, taking payments in NGN.
- Launch service discovery and booking. Product checkout, fulfilment, AI booking assistance and native apps are roadmap features.
- Permit open registration and browsing. Permit businesses to prepare private drafts while unverified. Gate booking, payments, messaging, reviews and public business publishing on completed verification.
- Combine verification API checks with document upload and manual review.
- Confirm bookings through an admin-configured percentage deposit, and collect the balance through Beau before the appointment starts.
- Calculate commission against the full service price and make vendor payout eligible after recorded completion, subject to disputes and provider capability.
- Support verified pre-booking text enquiries, block obvious contact-sharing and allow authorized, audited admin access to conversations.
- Mark externally uploaded media **Not captured in Beau**. Apply automatic quality cleanup to camera-captured images without changing the service result.
- Include vendor subscriptions and branches at launch.
- Publish booking-linked reviews from both customers and vendors on public profiles, subject to privacy and moderation controls.

### 2.3 Relationship to the original PRD

The baseline is `KARMA_Groups_Beauty_Wellness_Marketplace_PRD_v1.docx`. Its search, vendor onboarding, scheduling, payment verification, auditability, disputes, responsive design and operational reporting requirements remain relevant and are expanded here. Its tentative name, client and team entries are replaced. Product commerce and the AI assistant move to the roadmap. Tiering and branches move into launch scope. The earlier eight-week estimate is not carried forward as an approved commitment.

No new external research is asserted in this revision. Provider capabilities, jurisdiction-specific legal obligations and contractual payment arrangements must be validated during implementation planning. The original document remains unchanged.

## 3. Vision, problems and objectives

### 3.1 Vision

Make it easy to find a suitable beauty or wellness professional nearby and complete a trustworthy, traceable booking in one place.

### 3.2 Problems Beau addresses

| Problem | Product response |
| --- | --- |
| Customers struggle to compare nearby providers | Searchable categories, location matching, transparent prices, schedules and public reviews |
| Portfolio images may be references rather than vendor work | Persistent image-source labels, in-site camera capture and reporting |
| Manual appointments lead to scheduling conflicts | Staff and branch availability, temporary reservations and atomic booking confirmation |
| Informal payments obscure booking and commission records | Deposit and balance collection, receipts and reconciled financial records |
| Businesses need tools suitable for different operating sizes | Subscription capabilities, branch access and role-specific dashboards |
| Communication and disputes lack a reliable record | Monitored in-platform text and controlled admin case access |

### 3.3 Objectives and success measures

| Objective | Measure | Launch acceptance or measurement approach |
| --- | --- | --- |
| Customers find suitable local services | Search-to-service and service-to-checkout conversion | Instrument by category, area, device and acquisition source; establish pilot baseline |
| Verified businesses become bookable | Approved businesses with a published service, price, staff/resource schedule and location | All businesses included in the launch pilot satisfy the readiness checklist |
| Appointments remain reliable | Confirmed double bookings attributable to the platform | Zero in release testing; investigate every production incident |
| Charges and vendor funds remain traceable | Duplicate charges, unmatched provider events and reconciliation exceptions | Zero unresolved critical discrepancies at release |
| Trust controls work | Verification bypasses, unlabeled external images and unauthorized data access | Zero known bypasses at release |
| Notifications reach participants | Delivery, retry exhaustion and failed critical notifications | Establish pilot baseline and operational alert thresholds |
| Paid tiers deliver value | Subscription conversion, renewals and usage of branch/staff/reporting capabilities | Track separately from commission revenue |
| Reviews support informed decisions | Eligible bookings reviewed, disputes and moderation outcomes | Establish baseline without inventing adoption targets |

Targets for revenue, acquisition, retention and city expansion require client approval after baseline measurements. Pilot cohort size and participating sectors are also approval items.

## 4. Launch boundaries and priorities

### 4.1 Launch scope

All confirmed launch modules are required: registration and verification; nearby discovery; service catalogue; camera and gallery media; business and branch management; staff calendars; deposits and balances; commissions and payouts; monitored messaging; bilateral reviews; notifications; Basic, Growth and Business subscriptions; admin oversight; reporting and audit trails.

Within launch, the implementation sequence should prioritize the trust and transaction foundation before secondary reporting polish. A feature does not move outside launch merely because it is built later in the sequence.

### 4.2 Outside launch

- Product sales, product carts, stock management, delivery, fulfilment and retail returns.
- AI booking assistants, facial analysis, hairstyle suitability and generative service-image editing.
- Native iOS and Android applications; the web experience must remain usable on mobile browsers.
- Advertising auctions, sponsored ranking, referral rewards, advanced CRM and loyalty memberships.
- Multi-country settlement, foreign currencies, appointment packages and recurring service bookings.

Perfumery-related businesses may list genuine bookable services such as fragrance consultations. Listing a perfumery category does not enable retail checkout. Service-at-home delivery, travel pricing, group sessions and medical services require separate scope approval; the proposed launch default is appointments at an approved branch.

## 5. People, roles and permissions

### 5.1 User groups

| Role | Main needs | Access boundary |
| --- | --- | --- |
| Visitor | Browse services and understand Beau | Public approved listings and public review profiles only |
| Unverified customer | Explore and finish verification | Own profile, verification and public browsing; no transactional actions |
| Verified customer | Discover, enquire, book, pay and review | Own conversations, bookings, payments and customer account |
| Unverified business owner | Prepare business for approval | Own verification and private business drafts; no public publishing or trading |
| Verified business owner | Manage business, subscriptions, branches and income | Own business and authorized branches; sensitive finance and role management restricted to owner permissions |
| Branch manager | Operate assigned locations | Assigned branches, staff and bookings; no unrelated branch access |
| Staff member | Deliver assigned appointments | Assigned schedule and minimum booking details; no owner finance or identity documents |
| Verification reviewer | Review identity and business evidence | Assigned verification cases; no general finance or message access |
| Support or moderator | Resolve reports and cases | Scoped case access; message access only with a permitted purpose and audit event |
| Finance admin | Reconcile funds and manage authorized refunds/payouts | Finance workspace; no unrestricted identity-document access |
| Superadmin | Configure platform and privileged roles | Explicitly assigned platform permissions with audited sensitive actions |

A person may hold multiple roles, but each action must be evaluated in the active customer or business context. Role switching must not grant access across businesses. Staff invitations and role assignments do not replace individual verification.

### 5.2 Permission principles

- Enforce roles, ownership, branch scope and verification on the server for every protected operation.
- Use separate contact verification, identity/business verification, publishing approval and subscription entitlement checks.
- Require stronger authentication for admins and sensitive business finance changes; proposed default is MFA for privileged roles.
- Treat account suspension and re-verification as explicit states, not deletion of historical bookings or financial records.
- Do not disclose customer contact details or verification documents to businesses. Public business addresses are permitted for appointment attendance; direct phone, email, social and messaging links are not.

## 6. Detailed functional requirements

Each requirement below is launch scope unless identified otherwise. Operational settings marked pending approval must be recorded and versioned before production use.

### 6.1 Accounts and verification

**AUTH-01 Registration and secure access**  
Customers and business owners can register, verify a contact channel, sign in, sign out and recover access. Support duplicate-account handling, rate limits, expiring single-use codes and session revocation.  
**Acceptance:** A successful contact OTP alone does not unlock identity-gated actions. Expired or reused codes fail. Recovery does not reveal whether another person's account exists.

**AUTH-02 Verification gates**  
Gate booking, slot reservation, deposit/balance payment, subscriptions, messaging, review publication and public business publishing on completed verification. Unverified business drafts remain private.  
**Acceptance:** Direct API calls cannot bypass disabled UI controls. A customer reaching checkout is redirected to verification with their intended service preserved, but no slot is promised until they return and revalidate availability. Businesses must satisfy both owner identity and business approval requirements.

**VER-01 Verification submission**  
Collect the approved customer or business fields, notices, consent where needed and supporting documents. Route checks to an approved API provider and make evidence available to authorized reviewers. Customer and business evidence requirements are separate configurable policies.  
**Acceptance:** Unsupported, oversized or unsafe documents are rejected. Documents are private, access-controlled and excluded from public profiles and logs. Exact identity fields and document types remain pending approval; do not assume every customer must supply business documents.

**VER-02 Review and decisions**  
Track `not_started`, `draft`, `submitted`, `checks_pending`, `manual_review`, `changes_requested`, `approved`, `rejected`, `expired` and `suspended`. Proposed default: API checks plus a recorded manual approval for initial verification; API unavailability never grants automatic approval.  
**Acceptance:** Reviewer approval, rejection and change requests include actor, time and reason. Users receive status updates and safe explanations. Resubmission retains previous evidence and decisions according to the approved retention policy.

**VER-03 Re-verification and suspension**  
Material identity, ownership, bank or business changes trigger the appropriate re-check. Staff must be verified before exercising operational roles.  
**Acceptance:** Suspension blocks new transactions and publishing immediately. Existing paid bookings enter an admin resolution queue; required balance payment/refund handling and case communication remain available through explicitly scoped admin-managed resolution, without reopening general account privileges.

### 6.2 Discovery and service catalogue

**DISC-01 Categories and service search**  
Maintain configurable categories and subcategories for hairstyling, barbering, nail care, manicure, pedicure, spas, massage, wellness and perfumery services. Search by service, business, category and area.  
**Acceptance:** Only active, approved businesses, branches and services appear. Disabled categories stop new publishing without erasing past bookings. Product items are not treated as appointments.

**DISC-02 Nearby matching and filters**  
Offer browser location with permission and a manual city/area alternative. Combine category, service price, distance, rating and available date/time filters. Proposed default: relevance and proximity, with clear distance/price/rating sorts.  
**Acceptance:** Permission denial does not block manual search. Distances refer to the service branch and are labeled approximate. Filters apply to the matching service, not an unrelated lowest-price service. Do not silently expand the requested radius when no results exist; offer that choice.

**DISC-03 Service and business pages**  
Show verified status, branch address, service description, full service price, estimated duration, deposit requirements, staff options, availability, portfolio provenance and review summary. Provide a stable business/branch link and a message action for eligible users.  
**Acceptance:** Direct contact fields and external contact links are excluded from public pages. Customers can identify the branch they are booking. Outdated or suspended services cannot be purchased through saved links.

**CAT-01 Catalogue maintenance**  
Owners and permitted managers create services with category, description, NGN price, duration, buffers, branch availability, staff eligibility and images. Proposed launch default: fixed-price services; no open-ended quotation checkout.  
**Acceptance:** Invalid or missing price/duration blocks publishing. Editing a service does not change existing booking snapshots. Archiving stops future bookings and preserves history. Price-affecting add-ons require explicit checkout selection and server pricing if included.

### 6.3 Businesses, branches and staff

**BIZ-01 Business onboarding**  
Collect approved business details, owner identity, categories, branches, service locations and payout account evidence. Show onboarding readiness and review outcomes.  
**Acceptance:** A private draft is not searchable. Verification, subscription entitlement, valid schedule and published service requirements all pass before a branch becomes bookable. Public verification badges describe verification status rather than guaranteeing service quality.

**BIZ-02 Branch management**  
Give each branch its own address, coordinates, opening hours, closures, staff assignments, services and appointment calendar. Support branch activation and archival within tier entitlements.  
**Acceptance:** Branch managers cannot access unrelated branches through modified identifiers. Archival stops new appointments but preserves customer instructions, upcoming-booking resolution and historical reporting.

**BIZ-03 Staff and resources**  
Invite and verify staff, assign branch/service roles and define working hours, breaks and absences. A sole operator may use the owner as the appointment resource. Proposed default: one staff resource per appointment, with additional shared resources only when configured.  
**Acceptance:** A staff member shared across branches cannot be booked twice at overlapping times. Changes to staff roles take effect on subsequent protected requests. Removing staff with future appointments requires reassignment or an explicit customer resolution process.

**BIZ-04 Business workspace**  
Provide upcoming appointments, balances due, service/portfolio management, branch calendars, messages, reviews, subscription details and finance summaries according to role.  
**Acceptance:** Every status-changing action records the actor. Staff see only the minimum customer information required to deliver their appointments.

### 6.4 Camera capture and portfolio media

**MEDIA-01 Camera and external upload paths**  
Offer an in-site camera using a supported browser on a secure origin, with preview, retake and confirmation. Gallery/file upload remains available when camera access is denied, unsupported or unavailable.  
**Acceptance:** Camera permission failures have clear recovery instructions. A file picker, including a mobile browser's camera hint, is treated as external unless the controlled capture flow can establish the route. External assets display the exact label **Not captured in Beau** with an accessible icon and text explanation wherever shown.

**MEDIA-02 Provenance and replacement**  
Record `beau_camera` or `external_upload` as an immutable asset source, alongside capture/upload time, uploader and business/branch association. Server-issued capture sessions and controlled uploads reduce casual origin spoofing; browser capture is not tamper-proof attestation.  
**Acceptance:** Users cannot edit source metadata through the API. Camera assets may display **Captured in Beau**, with an explanation that capture does not verify authorship. A camera photo of a screen does not establish original work. An external asset keeps its disclaimer permanently; replacing it creates a new asset and association rather than clearing its label.

**MEDIA-03 Automatic quality cleanup**  
For camera assets, automatically normalize orientation, exposure and colour, apply conservative crop/framing, resize, compress and generate display variants. Keep the uncropped source securely under the approved retention policy.  
**Acceptance:** No hairstyle, nail result, body feature, skin condition or service outcome is generated, removed or materially altered. The vendor can compare the result and reject/revert an enhancement. Processing errors retain a safe source preview or retry state and do not change provenance. Published enhancements show an **Automatically enhanced** indicator.

**MEDIA-04 Safety, rights and client consent**  
Require an uploader rights declaration and permission to publish recognizable clients. Validate actual file content, remove location metadata from published derivatives, restrict file sizes and provide content reports.  
**Acceptance:** Rejected or quarantined assets are not public. Reporting enters a moderation queue. Vendors cannot remove provenance or enhancement indicators by editing captions. Captions, service descriptions and recognizable contact details in media are included in moderation and contact-sharing review; automated blocking cannot guarantee detection of all embedded text.

### 6.5 Availability and booking

**BOOK-01 Availability calculation**  
Calculate slots from branch hours, staff schedules, service duration, buffers, closures, existing appointments and active reservations. Store timestamps consistently and display Nigeria appointments in Africa/Lagos time.  
**Acceptance:** Cross-branch staff conflicts and service buffers are respected. A calendar change does not silently invalidate an existing confirmed appointment. Availability is rechecked when reserving and confirming, not trusted from a cached page.

**BOOK-02 Deposit reservation and confirmation**  
After verification, create a temporary slot hold and deposit payment attempt against a server-priced booking snapshot. Proposed default hold duration is 10 minutes, configurable before launch. Only verified successful deposit payment confirms the appointment.  
**Acceptance:** Competing requests cannot own the same exclusive resource/time interval. Failed or expired attempts release reservations. A late successful payment must revalidate the slot; if unavailable, open a paid-but-unconfirmed exception, notify the customer and trigger controlled refund/resolution rather than double booking.

**BOOK-03 Lifecycle and fulfilment**  
Use appointment states `awaiting_deposit`, `confirmed`, `checked_in`, `in_progress`, `completed`, `cancelled`, `no_show` and `expired`. Payment and dispute states are separate. Staff may check in a customer, but cannot start a service until the balance is verified paid.  
**Acceptance:** Invalid transitions fail server-side. Completion requires authorized staff/owner action after the appointment has started; early or unusual completion is flagged. Proposed default: notify the customer of completion and provide a dispute route; disputed funds are held where supported. The dispute window and payout delay require approval.

**BOOK-04 Rescheduling**  
Allow eligible reschedule requests according to the policy accepted at checkout. Reserve the new slot before releasing the original one and preserve a change history. Proposed default: only same-service, same-price rescheduling at launch; price or branch changes use a controlled cancellation/rebooking process.  
**Acceptance:** Failed rescheduling retains the original booking. No second deposit is collected without an explicit reconciled adjustment. Staff changes and revised attendance instructions notify the customer.

**BOOK-05 Cancellation and no-shows**  
Display and snapshot cancellation windows, refund eligibility and no-show terms before deposit payment. Distinguish customer cancellation, vendor cancellation and customer/vendor no-show.  
**Acceptance:** Approved policy determines refund and commission adjustments; deductions never come from an unpublished charge. Vendor cancellation creates customer notification and refund/rebooking resolution. A vendor cannot unilaterally claim a disputed no-show without a review path. Policy values remain pending approval.

### 6.6 Payments, commission and payouts

**PAY-01 Pricing and deposit calculation**  
Show full service price, deposit payable now, remaining balance, disclosed customer fees if any, and total customer obligation before authorization. Admin configures the deposit percentage and commission rules.  
**Acceptance:** Calculate in integer minor units with deterministic rounding; balance equals service price minus deposit. Client amounts are never authoritative. Snapshot the deposit, commission and policy versions on booking. Processor-fee bearer and any taxes/customer fees require approval.

**PAY-02 Payment verification**  
Use an approved payment provider for deposit and balance transactions, server verification, authenticated callbacks, refunds and reconciliation. Keep provider tokens/references rather than raw card information.  
**Acceptance:** A browser success redirect cannot mark a booking paid. Signed/verified duplicate or out-of-order events produce one financial effect. A payment-provider outage shows a pending state and recovery path without inventing success.

**PAY-03 Remaining balance**  
Enable the customer to pay the exact outstanding amount through Beau before service start, including at attendance if needed. Send a balance-due notice and offer a payment link into authenticated Beau checkout.  
**Acceptance:** Failed or pending balance payment blocks service start. Zero outstanding balance creates no additional charge. Cash collection and direct vendor transfers are not accepted as platform payment confirmation. Admin exceptions must be explicit, permissioned and reconciled; they cannot fabricate provider settlement.

**PAY-04 Commission and accounting**  
Calculate commission once against the full booked service price according to the snapshotted rate, not independently against both instalments. Separate gross service value, deposits, balances, processor fees, commission, subscriptions, refunds, adjustments and vendor entitlements.  
**Acceptance:** The sum of instalments equals the service price. Refunds reverse or adjust the original allocations under the approved policy. Refunds cannot exceed captured refundable funds. Every ledger entry links to a booking, transaction or subscription and has an auditable reason.

**PAY-05 Completion and payout**  
Make a vendor entitlement eligible only when the service is completed, full payment is verified, required settlement has occurred and no applicable hold remains. Eligibility is distinct from transfer initiation and confirmed transfer success.  
**Acceptance:** Provider payout failures remain unresolved until reconciled; retry cannot create duplicate payouts. Changes to a payout account require authorization and verification. No funds are described as escrow without an arrangement that supports that description. Provider-supported holding/settlement capability is a launch dependency.

**PAY-06 Refunds, disputes and chargebacks**  
Provide case submission, evidence, payout holds where possible, authorized refund actions, provider status updates and customer/vendor notifications. Keep refund state separate from appointment state.  
**Acceptance:** A completed booking may have an open dispute without rewriting its history. Refund requests are not shown as completed until verified. If a chargeback/refund occurs after payout, record the resulting vendor/platform liability under the approved recovery policy rather than deleting the payout.

**PAY-07 Reconciliation**  
Provide daily operational reconciliation of payment attempts, captured amounts, refunds, fees, vendor allocations and transfers against provider records, plus an exception queue.  
**Acceptance:** Admins can trace a booking through both instalments to its payout and commission. Unmatched and late events have owners and resolution history. Exports respect permissions and escape spreadsheet formula content.

### 6.7 Subscriptions and tier entitlements

**TIER-01 Tier catalogue**  
Offer Basic, Growth and Business at launch. The following is a proposed capability structure, not approved prices or numerical limits.

| Capability | Basic | Growth | Business |
| --- | --- | --- | --- |
| Verified listing, bookings, payments and reviews | Included | Included | Included |
| Source-labeled portfolio and monitored messaging | Included | Included | Included |
| Branch operations | Entry branch allowance | Expanded multi-branch allowance | Highest multi-branch allowance |
| Staff and role permissions | Owner and standard staff access | Branch manager roles and branch-scoped staff management | Organization-wide administration plus branch-scoped management |
| Calendar workspace | Branch calendar | Branch calendars and cross-branch overview | Consolidated organization and branch views |
| Reporting | Booking totals, payment history and commission statements | Branch comparison and staff appointment summaries | Consolidated trends with branch/staff breakdowns |
| Export capabilities | Financial statements | Financial statements and branch booking exports | Consolidated operational and financial exports |

All tiers retain core verification, privacy, provenance and financial controls. Safety and access protection are not paid upgrades. Each tier must have an explicit approved branch/staff allowance, monthly price, billing rules and applicable commission rate before purchase is enabled. Do not represent the Basic tier as free unless approved.

**TIER-02 Subscription purchase and entitlements**  
Proposed default billing interval is monthly in NGN. Track `pending_payment`, `active`, `past_due`, `grace_period`, `cancel_at_period_end`, `expired` and `suspended`. Only verified provider payment activates paid entitlements.  
**Acceptance:** Subscription charges appear separately from appointment payments and commission. New business publishing requires an active launch plan. Staff/branch creation and restricted actions enforce entitlements on the server.

**TIER-03 Plan changes**  
Proposed default: upgrades take effect after successful payment of the disclosed prorated difference; downgrades take effect at the end of the paid period. Show resulting capabilities and limits before confirmation.  
**Acceptance:** An upgrade is not granted on payment initiation alone. A downgrade requires choosing the branches/users that remain within the new allowance. Existing records are never deleted. Excess branches stop accepting new bookings when the lower tier takes effect, while already-paid appointments remain accessible for fulfilment and resolution.

**TIER-04 Renewal failures and cancellation**  
Proposed default: a seven-day renewal grace period, followed by restriction of new bookings/publishing on affected businesses or excess branches. Notify owners before expiry and during failure. Support owner cancellation at period end.  
**Acceptance:** Customers with existing paid bookings retain access to attendance details, messages, balance payment and dispute/refund routes. Businesses retain the access needed to fulfil those bookings and view finance records. Restoring a subscription restores eligible functionality without recreating data. Subscription restriction alone does not freeze legitimately owed vendor funds.

Proration, grace period, refunds, renewal authorization and subscription cancellation terms are proposed policies requiring commercial approval. If automatic renewal is unsupported, provide explicit manual renewal rather than assuming a stored payment can be charged.

### 6.8 Monitored text messaging

**MSG-01 Verified conversations**  
Allow a verified customer to start a text enquiry with an approved business before booking. Link a conversation to the business and optionally a branch, service or booking. Proposed default: one customer/business thread with booking references; permitted business representatives respond.  
**Acceptance:** Both participants must be eligible and verified. Unverified or unrelated accounts cannot send or read messages. No voice calls, video, file attachments or external chat handoffs are provided at launch.

**MSG-02 Contact-sharing controls**  
Hide direct contact details and block obvious phone numbers, email addresses, social handles used for contact, external contact URLs and obfuscated variants detectable by normalization. Apply server validation to messages and public business text.  
**Acceptance:** A blocked message is not delivered and explains how to continue within Beau. Dates, appointment times and amounts are not indiscriminately rejected. Users can report a false positive; moderators cannot use exceptions to silently expose private contact details. Unknown evasions remain a moderation risk rather than a promise of perfect prevention.

**MSG-03 Privacy notice and admin access**  
Before first messaging, clearly state: **Messages are not end-to-end encrypted. Authorized Beau administrators can view them for support, safety and dispute resolution.** Encrypt traffic and stored data according to the security design.  
**Acceptance:** Admin conversation views require the appropriate permission and a recorded case/purpose. Record viewer, conversation, time, purpose and export action. Ordinary admins do not receive unrestricted chat access by default. Retention and export permissions follow approved policy.

**MSG-04 Delivery and moderation**  
Show sent/delivered status and unread counts; retry transient failures without duplicating messages. Allow abuse reports, case escalation and restrictions. Proposed default: no user message editing/deletion at launch, preserving the dispute record, with privacy requests handled through authorized workflows.  
**Acceptance:** Failed delivery is visible and retryable. Moderation retains an auditable record under the approved retention policy. Email/SMS notifications prompt users to open Beau without reproducing sensitive message content.

### 6.9 Bilateral ratings and reviews

**REV-01 Review eligibility**  
After a completed booking, allow one customer review of the vendor/branch and one vendor review of the customer, each with a one-to-five rating and text. Staff may draft only if permitted; publication represents the business. Proposed default: a 14-day submission window.  
**Acceptance:** Booking ownership and reviewer identity are checked server-side. Vendor review is unavailable for merely cancelled/no-show appointments under the launch default. No self-review or unrelated review is allowed.

**REV-02 Public publication and replies**  
Publish both sides on public profiles, using the customer's chosen public display name and minimal identity. Proposed default: blind publication when both submit, or when the review window closes, to reduce retaliation. Allow one public reply from the reviewed party.  
**Acceptance:** Neither side can see the other's unpublished review. No customer contact, home location, identity document, private appointment detail or conversation excerpt is exposed. Public profiles use non-sequential identifiers and are not searchable by private identifiers. Customer profiles may be reached from reviews; broad customer-directory browsing is not required.

**REV-03 Moderation and aggregates**  
Support reporting, moderator decisions, appeals and reasoned removal/redaction of abusive, irrelevant or privacy-violating content. Aggregate customer and vendor ratings separately.  
**Acceptance:** Vendors cannot remove unfavorable customer reviews themselves. Removed content no longer contributes to aggregates; audit evidence is retained according to policy. Financial disputes do not automatically erase legitimate reviews. Proposed default: submitted reviews are locked, with correction requests handled through moderation.

### 6.10 Notifications

**NOTIF-01 Event coverage**  
Notify customers and businesses of verification submission/decision, change requests, new enquiries, deposit confirmation, balance due/paid, appointment reminders, reschedule/cancellation, completion, review eligibility, refunds, disputes and payout outcomes. Notify owners of subscription purchase, renewal, failure, downgrade and expiry. Notify admins of actionable exceptions.  
**Acceptance:** Templates identify the booking or case with a safe reference and link into the relevant authenticated page. Notifications are created from committed events, not speculative frontend actions.

**NOTIF-02 Channel policy**  
Provide an in-platform notification center and transactional email. Use SMS for critical verification decisions, booking confirmations/cancellations and imminent attendance changes; exact trigger matrix and provider costs require sign-off. Proposed reminders: 24 hours and two hours before attendance, only when those times remain in the future.  
**Acceptance:** Notification preferences distinguish optional engagement from essential transaction notices. Promotional opt-in is separate. Avoid duplicate reminder bursts for short-notice bookings. Respect approved messaging consent and channel rules.

**NOTIF-03 Reliable delivery**  
Use queued notifications, deduplication keys, bounded retries and provider callback tracking. Proposed default: retry transient failures with backoff over 24 hours; time-sensitive reminders expire when no longer useful.  
**Acceptance:** Record queued, sent, delivered where supported, failed and exhausted states; never equate provider acceptance with confirmed delivery. Exhausted critical notices enter an operations queue. A delivery failure never reverses a valid booking or payment.

### 6.11 Admin operations

**ADMIN-01 Operational queues**  
Provide dashboards for verification, publishing readiness, reported media/reviews/messages, active appointments, suspended accounts, payment exceptions, disputes, refunds and payouts.  
**Acceptance:** Cases have status, priority, owner, evidence, decision and timestamps. Sensitive information is visible only to authorized roles. Administrative edits preserve booking and financial history.

**ADMIN-02 Platform settings**  
Manage categories, launch areas, verification policies, subscription catalogue and limits, deposit/commission settings, cancellation rules, notification templates and privileged roles.  
**Acceptance:** Changes are versioned and permission-controlled. Historical transactions keep their original pricing/policy versions. The interface previews the effect of commercial changes before activation.

**ADMIN-03 Audit and reporting**  
Audit sensitive reads and writes, including verification-document access, conversation access, role changes, bank changes, refunds and payouts. Proposed default: maker-checker approval for payout-account changes and exceptional financial adjustments.  
**Acceptance:** Audit records cannot be edited through ordinary application tools. Reports can be filtered by business, branch, date and transaction status without leaking another tenant's information.

## 7. User flows

### Flow F01 Customer registration and verification

1. Visitor browses a service or chooses to register as a customer.
2. Customer creates an account and verifies their contact channel.
3. Beau explains the verification requirement and presents the approved identity fields and document process.
4. Customer submits; Beau runs API checks and routes the case for manual review.
5. Customer sees pending status and may continue browsing.
6. Reviewer approves, rejects or requests changes; customer receives a notification.
7. Approved customer returns to the intended service and rechecks availability.

**Exceptions:** API outage leaves checks pending. Rejected documents can be resubmitted where permitted. No appointment is reserved during verification. Contact verification never silently becomes full identity approval.

### Flow F02 Nearby discovery and paid booking

1. Customer permits location access or selects a city/area manually.
2. Customer selects a service category and filters by price, distance, rating and time.
3. Customer compares verified business branches and reads portfolio labels and reviews.
4. Customer opens a service, selects eligible staff if offered and chooses a live slot.
5. Beau checks verification and creates a temporary reservation.
6. Checkout displays branch, service, date/time, full price, deposit, balance and policy.
7. Customer accepts the terms and authorizes the deposit through the payment provider.
8. Server verification confirms payment and commits the booking atomically.
9. Both parties receive confirmation; the customer can view a booking reference and balance due.

**Exceptions:** Denied geolocation uses manual search. An expired slot prompts fresh availability. Declined payment offers retry while eligible. Late payment after slot loss enters refund/resolution; it never forces a second booking into the slot.

### Flow F03 Balance payment, attendance and completion

1. Beau reminds the customer of the appointment and outstanding balance.
2. Customer pays the balance through Beau before service begins.
3. Provider verification updates the booking's payment state.
4. Assigned staff checks in the customer and starts the service after full payment is verified.
5. Staff records completion; Beau notifies the customer and opens review eligibility.
6. Finance evaluates payout eligibility against completion, settlement and dispute rules.
7. Beau initiates a supported payout and tracks its confirmed outcome.

**Exceptions:** Pending balance prevents service start. Customer disputes completion through a case. Failed transfers remain visible for reconciliation and do not trigger blind duplicate retries.

### Flow F04 Monitored pre-booking enquiry

1. Verified customer opens a business page and selects Message.
2. Beau displays the admin-access and no-direct-contact notice.
3. Customer enters a service enquiry.
4. Server checks eligibility, abuse limits and contact-sharing rules.
5. Allowed text is delivered to permitted business representatives.
6. Either side may link the conversation to a service or existing booking and report abuse.
7. Authorized support accesses the thread only with a recorded purpose or case.

**Exceptions:** Blocked contact-sharing text remains undelivered. A false positive can be reported. Suspended participants use the scoped support resolution route for existing paid bookings.

### Flow F05 Business owner onboarding and subscription

1. Owner registers, verifies contact and chooses the business role.
2. Owner submits identity/business evidence and API-check details.
3. While awaiting approval, owner prepares private business, branch, service and schedule drafts.
4. Admin reviews evidence and requests changes or approves.
5. Verified owner compares Basic, Growth and Business capabilities and approved prices.
6. Owner purchases a plan; verified payment activates entitlements.
7. Owner completes staff verification/assignment and portfolio requirements.
8. Beau validates readiness and publishes the approved, eligible branch/services.

**Exceptions:** Subscription cannot substitute for verification. A rejected business stays private. Publishing fails with a clear checklist if a schedule, branch approval or entitlement is missing.

### Flow F06 Camera capture and image replacement

1. Verified vendor opens the service portfolio and chooses Take photo in Beau.
2. Browser requests camera permission; vendor captures, previews and confirms a photo.
3. Beau records capture-route evidence and safely uploads the asset.
4. Automatic cleanup generates display variants; vendor previews/reverts the result.
5. Approved media is associated with the service with source/enhancement indicators.
6. If replacing an external asset, Beau creates a new asset and changes the service association; the old asset's source remains external.

**Exceptions:** Denied/unsupported camera offers instructions and gallery upload. Gallery uploads always show **Not captured in Beau**. Processing failure permits retry or safe source publication after validation. Capture does not prove vendor authorship.

### Flow F07 Branch manager and staff operations

1. Owner invites an individual and assigns an eligible role and branch scope.
2. Invitee verifies their account and accepts the role.
3. Manager defines permitted schedules; staff views assigned appointments.
4. Staff checks in customers, verifies balance status and starts/completes assigned services.
5. Staff flags absences or disputes for manager/admin resolution.

**Exceptions:** Cross-branch identifiers are rejected. A staff member's overlapping availability across branches cannot create overlapping appointments. Reassignment sends changed attendance details to affected customers.

### Flow F08 Cancellation, reschedule and dispute

1. Customer or business opens the booking and sees available policy-governed actions.
2. For rescheduling, Beau holds the new slot and confirms the change before releasing the old slot.
3. For cancellation, Beau previews applicable refund/deduction amounts.
4. Authorized confirmation updates the appointment and creates any refund request.
5. A disputed outcome creates a case with evidence and an assigned reviewer.
6. Reviewer records a reasoned decision; provider outcomes update refunds/payouts and notifications.

**Exceptions:** A failed reschedule preserves the original booking. A failed refund remains pending/failed with a case reference. Vendor cancellation never silently reassigns the customer.

### Flow F09 Public bilateral reviews

1. Completion creates one review opportunity for the customer and one for the business.
2. Each side submits a rating/text within the configured window.
3. Content checks prevent contact information and private appointment details.
4. Reviews publish together or at the window deadline under the proposed blind-publication policy.
5. Reviewed parties may reply or report a policy violation.
6. Moderators record decisions and recalculate aggregates when content is removed.

### Flow F10 Subscription change and renewal failure

1. Owner compares current and target plan, limits and charges.
2. Upgrade payment activates additional capabilities after verification.
3. A downgrade is scheduled for period end with an explicit branch/user selection.
4. Beau sends renewal/failure notices and starts the configured grace period if needed.
5. At restriction, new trading is limited while existing paid bookings and financial records remain accessible.
6. Successful renewal restores eligible operations; all changes remain auditable.

### Flow F11 Admin verification and operational resolution

1. Reviewer opens an assigned verification case and records evidence access.
2. Reviewer inspects provider results and uploaded documents, then records a decision/reason.
3. Support handles booking/content reports in a separate queue with scoped permissions.
4. Message inspection requires a purpose; financial action requires finance privileges and applicable approval.
5. The admin records the resolution, triggers appropriate notices and checks provider outcomes.
6. Unresolved reconciliation and delivery exceptions remain assigned until closed with evidence.

## 8. User stories and acceptance criteria

| ID | User story | Acceptance criteria | Requirements |
| --- | --- | --- | --- |
| US-01 | As a visitor, I want nearby services so I can choose a suitable provider. | Location permission is optional; manual area works; only eligible branch services appear with meaningful distance and price. | DISC-01–03 |
| US-02 | As a new customer, I want to see what verification requires before submitting. | Requirements and notices are visible; progress is saved; pending verification cannot book, pay or message. | AUTH-01–02, VER-01–02 |
| US-03 | As a customer, I want to correct rejected evidence. | A safe reason and resubmission path are shown; prior decisions remain auditable; resubmission does not auto-approve. | VER-02 |
| US-04 | As a customer, I want image-source labels so I can distinguish capture routes. | Every external image has visible and accessible disclaimer text; camera labels do not claim authorship. | MEDIA-01–02 |
| US-05 | As a verified customer, I want to pay a deposit to confirm my appointment. | The full price, deposit and balance are shown; only server-verified success confirms the reserved slot. | BOOK-01–02, PAY-01–02 |
| US-06 | As a customer, I want a clear balance payment route before attendance. | Exact outstanding amount is payable once; pending payment is visible; verified full payment unlocks service start. | PAY-03, BOOK-03 |
| US-07 | As a customer, I want to ask questions without leaving Beau. | Verified pre-booking text works; direct contact-sharing is blocked; monitored access is disclosed. | MSG-01–03 |
| US-08 | As a customer, I want to change or cancel an appointment under known terms. | Policies are shown before purchase; refund preview is traceable; failed rescheduling retains the original slot. | BOOK-04–05, PAY-06 |
| US-09 | As a customer, I want appointment notifications I can rely on. | Confirmations and relevant reminders appear in-platform; channel outcomes and retries are tracked without duplicate messages. | NOTIF-01–03 |
| US-10 | As a customer, I want to review a completed service publicly. | Only my eligible booking permits one review; blind publication applies; private details are blocked/moderated. | REV-01–03 |
| US-11 | As an unverified owner, I want to prepare my business privately. | I can save branch/service drafts; they cannot be searched, booked or publicly opened before approval and readiness. | AUTH-02, BIZ-01 |
| US-12 | As an owner, I want a subscription suitable for my business size. | Approved prices and limits are shown; payment activates only the purchased entitlements; subscription receipts are separate. | TIER-01–02 |
| US-13 | As an owner, I want to run multiple branches. | Each branch has its own address, services and calendar; branch creation follows entitlements; history survives archival. | BIZ-02, TIER-01 |
| US-14 | As an owner, I want staff to access only their assigned work. | Verified invitations and roles are required; changing a branch ID cannot expose unrelated data or finance. | BIZ-03–04 |
| US-15 | As a vendor, I want camera photos cleaned up automatically. | Controlled capture receives route metadata; cleanup preserves service results; I can preview/revert; fallback uploads retain the external label. | MEDIA-01–04 |
| US-16 | As a vendor, I want to replace a reference with a fresh photo. | Replacement creates a new asset; the old asset remains externally labeled; historical references remain traceable. | MEDIA-02 |
| US-17 | As staff, I want an accurate working calendar. | Duration, buffers, leave and cross-branch conflicts affect slots; two simultaneous customers cannot confirm the same exclusive time. | BIZ-03, BOOK-01–02 |
| US-18 | As staff, I want to record attendance and completion. | Only assigned/authorized staff can act; unpaid balances block start; completion creates customer notice and payout evaluation. | BOOK-03, PAY-03–05 |
| US-19 | As a vendor, I want to review a completed customer booking. | One business review per eligible booking; public customer identity is minimized; moderation and reply are available. | REV-01–03 |
| US-20 | As an owner, I want to understand my earnings. | Reports distinguish gross value, instalments, commission, refunds and transfer state; no pending transfer is labeled paid. | PAY-04–07 |
| US-21 | As an owner, I want plan changes to preserve my existing appointments. | Upgrade requires payment; downgrade/expiry restricts new activity without deleting paid bookings or financial records. | TIER-03–04 |
| US-22 | As a reviewer, I want to approve or reject verification with evidence. | API results and protected documents are available only to my role; each decision/access is recorded and user notified. | VER-01–03, ADMIN-01 |
| US-23 | As support, I want to inspect relevant messages for a dispute. | Access requires permission and recorded purpose; unrelated cases are denied; viewing/export is audited. | MSG-03, ADMIN-03 |
| US-24 | As finance admin, I want to resolve payment exceptions without duplicate money movement. | Provider events and ledger are traceable; refunds and transfers are idempotent; approval rules apply. | PAY-02, PAY-05–07 |
| US-25 | As a moderator, I want to address abusive media and reviews. | Reports enter an owned queue; reasoned decisions change public visibility and aggregates while retaining audit evidence. | MEDIA-04, REV-03, ADMIN-01 |
| US-26 | As superadmin, I want settings changes to apply predictably. | Policies and rates are versioned; historical booking amounts do not change; privileged role changes are audited. | ADMIN-02–03 |

## 9. Information architecture and screen inventory

| Surface | Required screens or workspaces |
| --- | --- |
| Public/customer discovery | Home, category directory, location selection, search/filter results, business and branch page, service detail, public review profile |
| Customer access and trust | Registration, sign-in/recovery, contact verification, identity/document submission, verification status and resubmission |
| Customer transaction | Staff/time selection, checkout/deposit, payment pending/result, booking list/detail, balance payment, reschedule/cancel, dispute case |
| Customer communication/account | Text inbox/thread, notification center/preferences, review submission/reply/report, profile and privacy requests |
| Business onboarding | Owner registration/verification, business evidence, private readiness checklist, branch setup, plan comparison and purchase |
| Business operations | Overview, branch management, service editor, media library, in-site camera/preview, staff invitations/roles, calendars and appointment detail |
| Business trust and finance | Inbox, notification center, review/reply/report, financial statements, payouts, subscription/renewal/change plan |
| Admin access and verification | Privileged sign-in/MFA, dashboard, verification queues/case, evidence viewer, account and branch status management |
| Admin operations | Booking case, scoped conversation viewer, media/review moderation, disputes/refunds, reconciliation and payout exceptions |
| Admin configuration | Categories/areas, versioned commercial settings, plan entitlements, notification templates/delivery logs, roles, audit and reports |

Every major workspace must include loading, empty, validation, permission-denied, offline/retry and failure states. Mobile layouts must make camera capture, checkout, appointment details and message composition practical without desktop-only interactions.

## 10. Lifecycle rules and conceptual data model

### 10.1 Separate state machines

| Domain | States and rules |
| --- | --- |
| Verification | Not started → draft → submitted → checks pending → manual review → approved; change request/resubmission or rejection branches; expiry/suspension can revoke eligibility |
| Business/branch publication | Draft → ready for review → approved/private or published → restricted/archived; verification and entitlements are separate prerequisites |
| Appointment | Awaiting deposit → confirmed → checked in → in progress → completed; cancellation, no-show or expiry are controlled branches |
| Payment attempt | Created → pending → succeeded/failed/expired; later reversals are financial events, not deletion of success history |
| Booking funding | Deposit unpaid → deposit paid/balance due → fully paid; refunds/chargebacks tracked separately |
| Refund | Requested → approved/rejected → provider pending → succeeded/failed |
| Payout | Not eligible → eligible → held or queued → processing → paid/failed; release from hold requires authorization |
| Subscription | Pending payment → active → renewal/past due/grace → active or expired; cancellation at period end and suspension tracked explicitly |
| Media | Pending validation → processing → ready → published; rejected/quarantined/archived branches; origin never changes |
| Review | Eligible → submitted/private → published → reported/under review → retained/redacted/removed |
| Dispute | Open → triaged → evidence requested → decision pending → resolved → closed; reopen only with recorded authority/reason |

### 10.2 Conceptual entities

| Entity group | Key responsibilities and relationships |
| --- | --- |
| User, RoleAssignment, Consent | Contact status, public display identity, verification relationship, customer/business context, scoped permissions and accepted notice versions |
| VerificationCase, VerificationCheck, Evidence, Decision | Subject, provider reference/results, private storage reference, review status, decision history and expiry |
| Business, Branch, StaffAssignment | Owner, categories, approval, location, branch settings, role scope and verified staff relationships |
| Service, ServiceBranch, StaffService | Price, duration, buffers, category, publication and branch/staff eligibility |
| Schedule, Blackout, Reservation | Resource availability, time intervals, hold expiry and concurrency ownership |
| MediaAsset, MediaVariant, ServiceMedia | Immutable source, capture session, rights/consent, moderation, enhancement version and service associations |
| Booking, BookingChange | Customer/business/branch/resource, immutable service and pricing snapshots, policy versions, time, state and history |
| PaymentAttempt, ProviderEvent, Refund | Deposit/balance/subscription purpose, unique references, amounts, verified events and refund history |
| LedgerEntry, VendorEntitlement, Payout | Amount allocations, commission/fees, holds, eligibility, transfers and reconciliation links |
| PlanVersion, Entitlement, Subscription, Invoice | Approved price/limits, billing period, status, plan changes and payment references |
| Conversation, Participant, Message, ModerationReport | Customer/business relationship, booking context, text/delivery state, reports and scoped access |
| Review, ReviewReply | Booking, author side, subject, rating, publication window, public text and moderation |
| Notification, DeliveryAttempt, Preference | Source event, recipient, channel, deduplication key, delivery outcomes and opt-ins |
| SupportCase, AuditEvent, PolicyVersion | Evidence and decisions, sensitive access/actions and versioned commercial/operating rules |

Store amounts as integer minor units with explicit currency. Preserve historical service names, branch attendance details, prices, rates and policy versions on bookings. Use durable references for provider events and processing actions. Separate private identity/evidence storage from public profile/media access.

## 11. Interfaces and system behavior

### 11.1 Architecture direction

Use a modular, API-oriented web system with customer/business/admin experiences, transactional storage, private/public media boundaries, background processing and provider adapters. The engineering team should select the framework, database, hosting and libraries after technical discovery; this PRD does not mandate a stack.

Business rules belong on the server. Queued work covers media processing, notifications, reconciliation and provider-event handling. Financial and booking changes commit consistently with durable events so notifications cannot precede the underlying transaction.

### 11.2 API capability groups

| Group | Minimum capabilities |
| --- | --- |
| Identity and verification | Register/authenticate, view current permissions, submit evidence, read own status, review decisions under admin scope |
| Discovery and catalogue | Categories, areas, eligible branch/service search, public profiles, service management and staff eligibility |
| Business operations | Branches, staff invitations/roles, schedules, blackouts and scoped dashboards |
| Media | Create capture/upload session, validate/process, preview/revert enhancement, associate/replace asset and report content |
| Appointments | Read availability, create expiring hold, initiate deposit, retrieve booking, pay balance, reschedule/cancel, check in/start/complete |
| Finance | Provider callbacks, verify transaction, request/approve refund, reconcile, evaluate/execute payout and export statements |
| Plans | Read approved catalogue, purchase/renew subscription, preview/change/cancel plan and inspect effective entitlements |
| Communication | Create permitted thread, send validated text, mark delivery/read, notifications/preferences and report abuse |
| Reputation | Review eligibility, submit/reply, retrieve public reviews and moderator decisions |
| Administration | Scoped cases, policy/plan versions, sensitive access, audit queries and controlled exports |

Use versioned, validated interfaces and predictable errors for unverified access, unavailable slots, expired holds, blocked contact-sharing, entitlement limits and pending payment. Mutation requests that can be retried must accept or internally derive idempotency identifiers. Never accept client-controlled business ownership, source labels, payment success or finance totals as authority.

### 11.3 Events and integrations

Core events include verification submitted/decided, service published, slot held/expired, deposit verified, booking confirmed, balance verified, booking changed/cancelled/completed, dispute opened/resolved, refund updated, payout updated, subscription changed, message accepted and review published.

Each event needs a unique identifier, event time, resource reference, actor/system source and minimal safe context. Consumers deduplicate events. Operational logs must not contain identity documents, payment credentials or full private conversations.

Integration adapters are required for verification APIs, payments/refunds/transfers, transactional email, SMS, location/geocoding and secure media storage/processing. Each adapter must support the provider's real status model, outage handling, credentials management, quotas and costs. Provider callbacks need authentication and replay protection appropriate to that integration.

## 12. Non-functional requirements

The following are proposed engineering targets for sign-off, rather than evidence of existing performance or statements of legal compliance.

| Area | Requirement and acceptance target |
| --- | --- |
| Responsive usability | Support current mobile and desktop browser families; agree a browser/device matrix. Camera denial and unsupported browsers retain a labeled-upload alternative. |
| Accessibility | Target WCAG 2.2 AA. Test keyboard access, focus, errors, labels, contrast, screen-reader announcements and icons with text alternatives. |
| Performance | Target mobile p75 LCP ≤2.5 seconds, INP ≤200 milliseconds and CLS ≤0.1 on key discovery pages, measured under an agreed device/network profile. Monitor production separately. |
| Availability | Proposed 99.5% monthly application availability excluding agreed maintenance; provider outages tracked separately and surfaced honestly. |
| Security | TLS, protected storage, server authorization, least privilege, secure sessions, MFA for privileged roles, rate limits, input validation and secrets management. Conduct risk-based security review before launch. |
| Privacy | Minimize identity collection; define approved retention, lawful processing basis, notices, access/deletion handling and processor agreements for the Nigeria launch. Obtain appropriate legal review rather than assuming this PRD establishes compliance. |
| Public customer reviews | Minimize public identity, block sensitive content and explain visibility before submission. Do not expose private booking pages through review links. |
| Consistency | Zero accepted double bookings for exclusive resources; payment/refund/payout retries produce one financial effect; protected actions recheck verification and entitlements. |
| Media | Validate actual file content, impose configurable size limits, use responsive variants, remove published location metadata and protect source/evidence storage. |
| Recovery | Proposed recovery point objective ≤24 hours and recovery time objective ≤8 hours; test restoration before launch. Include provider/ledger reconciliation in recovery procedures. |
| Observability | Correlate booking, payment and provider event IDs; monitor queue delays, processing failures, unauthorized access and reconciliation exceptions with assigned responders. |
| Data retention | Approve separate retention periods for verification evidence, chats, financial records, source photos, public media and audit logs. Deletion must preserve required records under the approved policy. |

## 13. Analytics and operational reports

Instrument the funnel from discovery → service view → verification → slot selection → deposit initiation → deposit verified → confirmed → balance paid → completed → reviewed. Measure failed and abandoned steps without logging sensitive evidence or messages.

Business reports show appointments, gross service value, deposit/balance status, cancellations, commission, refunds and payouts, with branch/staff depth controlled by tier. Customer ratings and business ratings remain distinct measures.

Admin reporting covers verification turnaround and failure reasons, active supply by category/area, booking conversion, no-shows, subscription activation/renewal, message blocks/reports, media provenance mix, notification delivery and financial exception age. Attribution may use stable shareable business links; referral rewards are outside launch.

Report definitions must specify event timestamp, reporting timezone, inclusion of cancellations/refunds and treatment of late provider events. Proposed default: Africa/Lagos calendar periods with explicit period filters. Finance reports distinguish booked value, money captured and money settled.

## 14. Delivery team and responsibilities

| Team member | Role and responsibility |
| --- | --- |
| Ezeocha Obioma | Project Manager / Quality Assurance / Software Engineering — Admin, QA and Audit |
| Omilabu Samuel | Creative Director |
| Jasmine Daniels | Frontend Developer — Customer and Business Portals with integration |
| Kayode Ojo | Backend Developer — Full Backend with Payment Integration |

Karma Groups is the delivery team. EBUBE ELLA is the client. Ezeocha Obioma coordinates requirement decisions, dependencies, QA evidence and client acceptance. Omilabu Samuel owns creative direction and design consistency. Jasmine Daniels implements the customer/business frontend journeys and integration. Kayode Ojo implements backend business rules, integrations, transactional behavior and finance infrastructure. Admin engineering, QA and audit implementation are covered by Ezeocha Obioma's stated role, with backend/frontend interfaces agreed across the team.

Production verification reviewers, moderators, support agents, finance approvers and ongoing infrastructure/on-call owners must be assigned before launch; these operational positions are not assumed to be filled by the delivery team indefinitely.

## 15. Delivery sequence and acceptance

| Phase | Outputs | Exit criteria |
| --- | --- | --- |
| Decisions and feasibility | Approved launch scope, commercial settings, policy drafts, provider feasibility and cost assumptions | Critical items in Section 18 resolved for dependent implementation |
| Design and contracts | Customer/business/admin flows, responsive screens, role matrix and API contracts | Client reviews primary journeys, including failures and public review visibility |
| Identity and business foundation | Verification, categories, branches, staff, subscriptions and private drafts | Verified/entitled publishing and cross-account isolation pass |
| Discovery and media | Nearby search, service pages, camera/upload labels and cleanup | Camera fallback, immutable provenance and location flows pass |
| Booking and money | Calendars, holds, deposits, balances, commission, refunds and payouts | Concurrency, provider replay and end-to-end reconciliation pass |
| Communication and oversight | Text messaging, contact blocks, reviews, notifications and admin case tools | Audited access, delivery retries and moderation pass |
| Integrated beta and release | Cross-browser UAT, security checks, restore rehearsal, support handover and pilot | Release gates satisfied and client go/no-go recorded |

Phases may overlap where dependencies allow. Dates, capacity, budget and pilot size must be estimated after critical decisions and provider feasibility are resolved. There is no approved eight-week commitment in this version.

## 16. QA and user acceptance scenarios

| ID | Scenario | Expected result |
| --- | --- | --- |
| UAT-01 | Contact-verified but identity-pending customer calls booking/payment/message/review APIs directly. | Every gated action fails; browsing and own verification remain available. |
| UAT-02 | Unverified owner prepares services and attempts to publish via API. | Drafts save privately; public access/search and trading remain blocked. |
| UAT-03 | Verification API times out, then returns a duplicate callback. | Case stays pending until valid processing; duplicate result does not duplicate decisions or approve automatically. |
| UAT-04 | Reviewer requests corrected documents and user resubmits. | New submission links to prior history; protected evidence access and decision reasons are audited. |
| UAT-05 | Browser location is denied. | Manual area search works; displayed branch distances are approximate and filters remain usable. |
| UAT-06 | A branch has a NGN 15,000 service; customer filters maximum NGN 10,000. | That service is excluded even if another service at the business is cheaper. |
| UAT-07 | Two customers reserve/confirm overlapping slots for one exclusive staff member. | Only one valid reservation/booking owns the interval; no duplicate confirmed appointment or charge effect. |
| UAT-08 | Staff works across two branches and a buffer overlaps a requested slot. | Availability excludes the conflict across branches and respects buffers. |
| UAT-09 | Deposit charge succeeds but browser closes; webhook repeats three times. | One deposit, one confirmation and one allocation set; customer can retrieve the booking. |
| UAT-10 | Deposit succeeds after the hold expires and the slot has been booked. | No double booking; paid-but-unconfirmed exception is visible and refund/resolution starts. |
| UAT-11 | For test-only values, price is NGN 15,000, deposit 30% and commission 10%. | Deposit is NGN 4,500; balance NGN 10,500; commission NGN 1,500 once against the full price, before separately defined fees/refunds. These are fixtures, not commercial rates. |
| UAT-12 | Balance is pending/declined and staff tries to start service. | Server blocks start; verified balance success later permits it without duplicate charge. |
| UAT-13 | Customer reschedules while another customer takes the requested new slot. | Change fails safely and the original appointment remains intact. |
| UAT-14 | Business cancels a paid appointment. | Customer receives notice and approved refund/rebooking handling; history and financial links remain. |
| UAT-15 | A dispute opens before payout; transfer callback later repeats. | Applicable hold prevents release; reconciled callbacks cannot duplicate a transfer or clear a dispute. |
| UAT-16 | Refund fails, or chargeback occurs after payout. | No false refund success; liability/exception is recorded and assigned for resolution. |
| UAT-17 | Gallery upload claims it was captured in Beau using modified metadata. | Client claim is ignored; external asset shows **Not captured in Beau** everywhere displayed. |
| UAT-18 | Camera permission is denied or device lacks supported capture. | Clear fallback is offered; fallback file remains externally labeled. |
| UAT-19 | Vendor replaces an external image with a controlled camera asset. | A new asset is created; old provenance remains; camera label does not claim authorship. |
| UAT-20 | Automatic cleanup processes a hairstyle image or fails mid-job. | Result preserves actual work, shows enhancement indicator and permits revert; failure never changes source or publishes unsafe output. |
| UAT-21 | Verified participants exchange normal dates/prices, then phone/email/contact links. | Normal booking text passes; obvious contact-sharing is blocked server-side and not delivered. |
| UAT-22 | Ordinary admin or unrelated vendor requests a conversation. | Access is denied; authorized case access records purpose, actor and time. |
| UAT-23 | Completed booking receives customer and vendor reviews. | Each side can submit once; blind/public publication rules apply; private identity and appointment information are not exposed. |
| UAT-24 | Vendor tries to delete a negative review or review an unrelated customer. | Both requests fail; report/appeal route remains available; moderator removal changes aggregates with an audit reason. |
| UAT-25 | Branch manager alters a branch ID or requests owner finance. | Cross-branch/privilege access is denied regardless of the UI. |
| UAT-26 | Upgrade payment fails, then a valid payment is verified. | No early entitlement; verified payment activates only the correct plan/version. |
| UAT-27 | Business downgrades below its current branch usage. | Effective date and retained branches are explicit; excess branches stop new bookings while existing appointments remain fulfillable. |
| UAT-28 | Renewal fails and grace ends with future paid appointments. | New activity is restricted; balance collection, attendance, messages/cases and finance history for existing bookings remain available. |
| UAT-29 | Queue retries a booking notice and SMS delivery callback repeats. | One logical notice per channel/event; states are accurate and exhausted critical delivery enters operations. |
| UAT-30 | Booking is made one hour before attendance. | No stale 24-hour/two-hour reminder burst; confirmation and relevant immediate information are sent. |
| UAT-31 | Commission setting changes after a booking deposit. | Historical rate and deposit snapshots remain unchanged; new bookings use the new approved version. |
| UAT-32 | Payout account changes and a single admin attempts to approve their own exceptional adjustment. | Required verification and maker-checker rules apply; no unauthorized payout destination or adjustment is accepted. |
| UAT-33 | Mobile user completes camera, verification, checkout and chat using keyboard/screen-reader support where applicable. | Controls, notices, focus and errors remain usable; no desktop-only blocker. |
| UAT-34 | Backups are restored in a controlled rehearsal. | Records and access boundaries recover; provider/ledger discrepancies are reconciled within the approved recovery targets. |

### 16.1 Release gates

Release requires a recorded client go/no-go and evidence that:

- All confirmed launch journeys work end to end with approved providers and configured commercial policies.
- No known critical/high defect permits verification bypass, unauthorized identity/chat access, cross-business access, double booking, incorrect charge or duplicate financial effect.
- Reconciliation has no unexplained material differences; refund/payout exception handling has been rehearsed.
- External media labels, camera fallbacks, automatic cleanup boundaries and bilateral review privacy have passed review.
- Approved tier prices/limits, deposit and commission rates, cancellation terms and verification requirements are configured and versioned.
- Transactional notifications, failure queues, monitoring, backup restoration and admin audit trails operate in the release environment.
- Support, moderation, verification and finance owners have runbooks and access; escalation coverage is assigned.
- Remaining lower-severity defects have an agreed owner, mitigation and acceptance record.

## 17. Risks and dependencies

| Risk or dependency | Impact | Response and accountable area |
| --- | --- | --- |
| Provider cannot support planned collection and delayed vendor payout | Core financial model cannot operate as described | Backend/PM validate payment arrangement before checkout implementation; client approves any model change |
| Deposit reduces missed bookings but does not ensure balance collection | Unpaid attendance and disputes | Require verified full payment before start; reminders and clear no-show policy |
| Verification is too costly or slow for every user | Drop-off and operations backlog | Client approves evidence proportionality, provider budgets and reviewer capacity; no silent gate bypass |
| Browser camera origin is spoofable or photographs a screen | Misleading customer trust | Describe capture route accurately, retain labels, moderate reports and avoid authorship claims |
| Cleanup changes a result or skin appearance materially | Misrepresentation of work | Conservative transforms, comparison/revert, review samples and no generative editing |
| Contact blocking misses evasions or rejects harmless text | Off-platform leakage or poor usability | Normalize obvious patterns, test false positives, provide reports and moderation |
| Public vendor reviews of customers expose private or retaliatory content | Customer harm and trust loss | Minimal public identity, blind publication, content restrictions and appeals |
| Subscription restrictions interrupt paid appointments | Customer service failure | Preserve fulfilment and resolution access; restrict new activity rather than deleting history |
| Staff/branch concurrency is implemented only in the UI | Double bookings | Server-side transactional reservation and resource-conflict testing |
| Notifications or API providers fail | Missed appointments and stalled verification | Durable retries, honest pending states, manual queues and provider monitoring |
| Four-person delivery team has broad scope | Schedule and QA pressure | Estimate after feasibility, phase delivery, preserve release gates and formalize changes |
| Operations and third-party recurring costs are unassigned | Launch without support capacity | Approve operational staffing, usage budgets and incident ownership before release |

## 18. Approval register and proposed defaults

### 18.1 Commercial and policy decisions pending approval

| ID | Decision needed | Decision owner and implementation gate |
| --- | --- | --- |
| A-01 | Final brand/domain and first launch cities | Client with Creative Director; before final branding and area rollout |
| A-02 | Deposit percentage and rounding/minimum-charge implications | Client with Backend/PM; before live booking checkout |
| A-03 | Commission rates, possible tier differences, processor-fee bearer and tax treatment | Client with finance/payment advice; before live financial configuration |
| A-04 | Basic/Growth/Business prices, exact branch/staff limits and whether Basic is paid | Client; before subscription sales and entitlement activation |
| A-05 | Subscription renewal, proration, grace, cancellation and refund terms | Client with PM/Backend; before billing activation |
| A-06 | Cancellation/reschedule windows, customer/vendor no-show treatment, deductions and refund rules | Client; before checkout policy publication |
| A-07 | Completion disputes, payout delay, settlement schedule and post-payout loss recovery | Client with finance and selected provider; before payout activation |
| A-08 | Verification APIs, required identity/business fields and documents, review rules, staff checks and re-verification triggers | Client/operations with Backend; before production onboarding |
| A-09 | Payment, messaging, email/SMS, geocoding, storage and hosting providers and recurring budgets | Client with delivery team; before production integrations |
| A-10 | Customer public display identity, review window, blind-publication and appeals policy | Client/operations; before review launch |
| A-11 | Retention schedules, privacy/consent notices, public photo permissions and platform terms | Client with appropriate review; before real-user data collection |
| A-12 | Critical SMS trigger matrix, notification preferences and customer support channels | Client/operations; before production messaging |
| A-13 | Operational staffing, escalation ownership, service targets and infrastructure handover | Client with PM; before beta/go-live |
| A-14 | Pilot cohort, representative categories/cities, budget, schedule and acceptance authority | Client with PM; before delivery commitment |

Pending values must not be silently filled with production defaults. Test fixtures may be used in non-production environments and must be labeled as such. Commercial changes must not retroactively change an accepted booking's financial or cancellation terms.

### 18.2 Proposed operating defaults consolidated

Use these as the baseline for estimation and design, subject to sign-off: branch-based appointments; fixed-price services; API checks plus manual initial approval; one primary staff resource per appointment; 10-minute payment holds; same-price/service rescheduling; monthly subscriptions; paid prorated upgrades; period-end downgrades; seven-day renewal grace; 14-day blind review window; no user chat editing/deletion; 24-hour and two-hour appointment reminders where relevant; auditable dual approval for sensitive financial exceptions.

These defaults are product proposals, not newly confirmed client decisions. Numerical tier limits, actual prices, percentage rates, document lists and cancellation charges remain unassigned until approved.

## 19. Traceability to the requested update

| Requested capability | Requirement coverage | Flows/stories | Acceptance coverage |
| --- | --- | --- | --- |
| Beau name, client, author, web first and Nigeria | Document identity, Sections 2 and 4 | All primary web journeys | Release review |
| Nearby beauty/wellness discovery across sectors | DISC-01–03, CAT-01 | F02; US-01 | UAT-05–06 |
| Universal registration with gated actions | AUTH-01–02, VER-01–03 | F01, F05; US-02–03, US-11 | UAT-01–04 |
| API and manual document verification | VER-01–03 | F01, F11; US-22 | UAT-03–04 |
| Monitored text, no direct contact | MSG-01–04, DISC-03 | F04; US-07, US-23 | UAT-21–22 |
| External-image disclaimer and camera replacement | MEDIA-01–02 | F06; US-04, US-16 | UAT-17–19 |
| Automatic quality editing | MEDIA-03–04 | F06; US-15 | UAT-20 |
| Scheduling, deposit, balance and commission | BOOK-01–05, PAY-01–07 | F02–03, F08; US-05–06, US-17–20 | UAT-07–16, UAT-31 |
| Paid tiers and branches | BIZ-01–04, TIER-01–04 | F05, F07, F10; US-12–14, US-21 | UAT-25–28 |
| Proper notifications | NOTIF-01–03 | F01–F11 as applicable; US-09 | UAT-29–30 |
| Customer and vendor public reviews | REV-01–03 | F09; US-10, US-19, US-25 | UAT-23–24 |
| User flows and user stories | Sections 7 and 8 | F01–F11; US-01–26 | Section 16 |
| Admin/QA/audit and named Karma Groups team | ADMIN-01–03, Section 14 | F11; US-22–26 | UAT-22, UAT-31–34 |
| Deferred commerce, AI and native apps | Section 4.2 | Separate future release definition | Excluded from launch acceptance |

## 20. Change control and final acceptance

EBUBE ELLA approves the product and commercial decisions for the client. Ezeocha Obioma coordinates the review and records scope, policy and acceptance changes for Karma Groups. Any change to confirmed launch behavior must include its effect on user journeys, data, integrations, cost, schedule and existing bookings.

Designs and tickets must refer to requirement IDs. QA records evidence against UAT IDs and release gates. A scoped delivery agreement should set approved features, costs, third-party fees, ownership, support responsibilities and milestone acceptance without treating unresolved commercial settings or the previous discovery timeline as agreed commitments.

Launch acceptance is complete only when the confirmed scope is demonstrable, the pending production decisions have been resolved, the release gates pass and the client records approval.
