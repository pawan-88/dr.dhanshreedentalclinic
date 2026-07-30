// Content for the dedicated service landing pages.
//
// Each page targets its own search intent ("dental implants in Lohegaon",
// "root canal cost Pune", etc.) rather than competing with the homepage.
// The copy is deliberately written fresh per page — duplicated or spun text
// across service pages is one of the fastest ways to get them all ignored.
//
// Nothing here promises a clinical outcome. Every page states that treatment
// depends on an examination, which is both accurate and what Google's
// health-content guidelines expect from a medical site.

export type ServiceSection = {
  heading: string;
  body: string[];
  list?: string[];
};

export type ServicePage = {
  slug: string;
  /** <title> — keep under ~60 characters before the site name is appended. */
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  /** Short label used in navigation and breadcrumbs. */
  navLabel: string;
  h1: string;
  intro: string;
  image: string;
  imageAlt: string;
  /** Name used in the MedicalProcedure schema. */
  procedureName: string;
  /**
   * schema.org procedure classification. Implants and root canals are surgical;
   * whitening, orthodontics and cosmetic work are not. Declaring them all
   * noninvasive would be inaccurate.
   */
  procedureType: "SurgicalProcedure" | "NoninvasiveProcedure";
  highlights: string[];
  sections: ServiceSection[];
  faqs: { question: string; answer: string }[];
  related: string[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "dental-implants-lohegaon",
    metaTitle: "Dental Implants in Lohegaon, Pune",
    metaDescription:
      "Dental implants in Lohegaon, Pune at Dr. Dhanshree's Dental Clinic. Single tooth implants, multiple implants and implant-supported bridges. Open 10 AM–9 PM daily. Book on WhatsApp: +91 82751 72931.",
    keywords: [
      "dental implants Lohegaon",
      "dental implant clinic Pune",
      "tooth implant near me Lohegaon",
      "implant dentist Pune",
      "single tooth implant cost Pune",
    ],
    navLabel: "Dental Implants",
    h1: "Dental Implants in Lohegaon, Pune",
    intro:
      "A dental implant replaces the root of a missing tooth with a small titanium post that fuses with your jawbone, and carries a crown that looks and functions like a natural tooth. At Dr. Dhanshree's Dental Clinic on Wadgaon Shinde Road, implant treatment is planned carefully around your bone, your bite, and your budget — and explained fully before anything begins.",
    image: "/images/Dental-Implants.jpg",
    imageAlt:
      "Dental implant treatment at Dr. Dhanshree's Dental Clinic in Lohegaon, Pune",
    procedureName: "Dental Implant Placement",
    procedureType: "SurgicalProcedure",
    highlights: [
      "Single, multiple, and full-arch implant options",
      "Treatment plan and cost estimate before you commit",
      "Local anaesthesia — most patients return to normal routine next day",
      "Follow-up reviews included in the plan",
    ],
    sections: [
      {
        heading: "When a dental implant is worth considering",
        body: [
          "Losing a tooth is not only a cosmetic issue. The neighbouring teeth gradually drift into the gap, the opposing tooth over-erupts, chewing shifts to one side, and the jawbone in that area slowly loses volume because nothing is stimulating it any more. An implant is currently the only replacement that addresses the root as well as the visible crown, which is why it preserves bone in a way bridges and dentures do not.",
          "That said, an implant is not automatically the right answer for everyone. It depends on how much healthy bone you have, the condition of your gums, whether you have uncontrolled diabetes, and whether you smoke. A bridge or a partial denture is sometimes the more sensible option, and we will say so rather than pushing the more expensive treatment.",
        ],
      },
      {
        heading: "What the process actually involves",
        body: [
          "The honest version: implant treatment is not a single appointment. It is spread over a few months, because the bone needs time to integrate with the implant. Most of that time you are simply going about your life.",
        ],
        list: [
          "Examination and X-ray to assess bone height, width, and gum health",
          "A written treatment plan with stages, timeline, and cost",
          "Implant placement under local anaesthesia — usually 30 to 60 minutes",
          "A healing period, typically 3 to 6 months, while bone integrates",
          "Impression and fitting of the final crown",
          "Review appointments to check the bite and gum response",
        ],
      },
      {
        heading: "Managing discomfort",
        body: [
          "Placement itself is done under local anaesthesia, so you should not feel pain during the procedure. Afterwards, most patients describe mild soreness and some swelling for two to three days, manageable with the medication prescribed. It is generally reported as less uncomfortable than a difficult extraction.",
          "You will be given clear aftercare instructions: what to eat, how to clean the area, and which symptoms mean you should call us rather than wait.",
        ],
      },
      {
        heading: "Looking after an implant long term",
        body: [
          "Implants do not decay, but the gum and bone around them can become inflamed if plaque builds up — a condition called peri-implantitis, and the main reason implants fail years later. Daily brushing, cleaning between the teeth, and a professional check every six months are what keep an implant healthy for decades.",
          "Smoking meaningfully increases the risk of implant failure. If you smoke, we will discuss this openly with you before treatment rather than after.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much do dental implants cost in Pune?",
        answer:
          "Cost depends on the implant system used, whether bone grafting is needed, and the type of crown fitted, so a single figure would be misleading. After examining you and reviewing your X-ray, we give a written estimate covering every stage before treatment starts — no charges appear later that were not discussed.",
      },
      {
        question: "How long do dental implants last?",
        answer:
          "With good daily cleaning and regular check-ups, implants commonly last 15 to 25 years or more, and many last a lifetime. The crown on top may need replacing sooner than the implant itself. Longevity depends heavily on gum health, smoking, and diabetes control.",
      },
      {
        question: "Is the implant procedure painful?",
        answer:
          "The placement is carried out under local anaesthesia, so you should not feel pain during it. Mild soreness and swelling for a few days afterwards is normal and is managed with prescribed medication. Most patients return to their usual routine the next day.",
      },
      {
        question: "Am I too old for a dental implant?",
        answer:
          "There is no upper age limit. What matters is bone quality, gum health, and general medical condition rather than age. Patients in their seventies and eighties receive implants routinely. We assess suitability at the consultation.",
      },
      {
        question: "How long does the whole treatment take?",
        answer:
          "Typically 3 to 6 months from placement to final crown, because the bone needs that time to fuse with the implant. The appointments themselves are short — most of the timeline is healing that happens while you carry on normally.",
      },
    ],
    related: ["root-canal-treatment-lohegaon", "smile-design-lohegaon"],
  },

  {
    slug: "root-canal-treatment-lohegaon",
    metaTitle: "Painless Root Canal Treatment in Lohegaon, Pune",
    metaDescription:
      "Root canal treatment in Lohegaon, Pune at Dr. Dhanshree's Dental Clinic. Modern anaesthesia, single and multi-visit RCT, crown after treatment. Open 10 AM–9 PM daily. Call +91 82751 72931.",
    keywords: [
      "root canal treatment Lohegaon",
      "painless root canal Pune",
      "RCT clinic near me Lohegaon",
      "root canal cost Pune",
      "emergency dentist Lohegaon",
    ],
    navLabel: "Root Canal",
    h1: "Root Canal Treatment in Lohegaon, Pune",
    intro:
      "Root canal treatment saves a tooth that has become infected or badly decayed, instead of removing it. The reputation it has for being painful is largely out of date — with modern anaesthesia, the procedure is usually comparable to having a filling, and it relieves the toothache that brought you in.",
    image: "/images/root canel.jpg",
    imageAlt:
      "Root canal treatment at Dr. Dhanshree's Dental Clinic in Lohegaon, Pune",
    procedureName: "Root Canal Treatment",
    procedureType: "SurgicalProcedure",
    highlights: [
      "Same-day appointments for acute dental pain where possible",
      "Modern anaesthesia — the goal is a comfortable visit",
      "Single-visit RCT in suitable cases",
      "Crown fitted afterwards to protect the treated tooth",
    ],
    sections: [
      {
        heading: "Signs you may need a root canal",
        body: [
          "The pulp inside a tooth contains its nerve and blood supply. When decay, a crack, or repeated dental work lets bacteria reach it, the pulp becomes inflamed or infected. Once that happens it cannot heal on its own — the infection either gets treated or it spreads into the bone around the root.",
        ],
        list: [
          "Lingering pain after something hot or cold, rather than a brief twinge",
          "Pain that wakes you at night or throbs when you lie down",
          "Tenderness when biting on one particular tooth",
          "Swelling of the gum, or a small pimple-like spot near the tooth",
          "A tooth that has darkened compared to its neighbours",
        ],
      },
      {
        heading: "Why saving the tooth is usually the better option",
        body: [
          "Extraction is faster and cheaper on the day. It is rarely cheaper overall. Once a tooth is gone, the gap has to be managed — an implant or a bridge costs considerably more than the root canal would have, and neither performs quite as well as your own tooth root.",
          "There are situations where a tooth genuinely cannot be saved: a root fractured vertically, or a tooth with too little structure left to hold a crown. In those cases we will tell you straight rather than starting treatment that is unlikely to work.",
        ],
      },
      {
        heading: "What happens during the procedure",
        body: [
          "The tooth is numbed thoroughly and isolated. The infected pulp is removed, the canals inside the root are cleaned and shaped, and then sealed. Depending on which tooth it is and how infected it is, this takes one or two visits.",
          "A back tooth that has had a root canal becomes more brittle, because a large amount of its internal structure has been removed. Fitting a crown afterwards is not an upsell — it is what stops the tooth fracturing under chewing forces a year or two later. We will explain where a crown is genuinely necessary and where it is not.",
        ],
      },
      {
        heading: "If you are in pain right now",
        body: [
          "Call us on +91 82751 72931 or message on WhatsApp. We are open every day from 10 AM to 9 PM, including weekends, and we keep room for patients in acute pain.",
          "In the meantime: over-the-counter painkillers you normally tolerate, avoid very hot or very cold food on that side, and keep your head slightly raised when sleeping. Do not place aspirin directly against the gum — it burns the tissue.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is root canal treatment painful?",
        answer:
          "Most patients report little to no pain during the procedure. The tooth is thoroughly numbed with modern local anaesthesia, and Dr. Dhanshree explains each step before starting. The lasting impression for most people is relief, because the treatment removes the source of the toothache. Mild tenderness for a couple of days afterwards is normal.",
      },
      {
        question: "How many visits does a root canal take?",
        answer:
          "Many cases are completed in a single visit. Teeth with several canals, significant infection, or a curved root anatomy may need two appointments to clean and seal the canals properly. We will tell you which applies to your tooth after examining it.",
      },
      {
        question: "Do I really need a crown after a root canal?",
        answer:
          "For back teeth, usually yes. A treated tooth has had a lot of internal structure removed and can fracture under chewing load without a crown protecting it — and a fractured root cannot be repaired. Some front teeth with minimal decay can be restored with a filling instead. We will explain which applies to your case.",
      },
      {
        question: "What does root canal treatment cost in Lohegaon?",
        answer:
          "It varies with the tooth — front teeth have one canal, molars often have three or four — and with whether a crown is needed afterwards. We give you the full figure in writing after examination, before any treatment begins.",
      },
      {
        question: "Can I go to work the same day?",
        answer:
          "Most patients do. Your lip and tongue will stay numb for two to three hours, so avoid hot drinks and be careful not to bite your cheek until sensation returns.",
      },
    ],
    related: ["dental-implants-lohegaon", "braces-and-aligners-lohegaon"],
  },

  {
    slug: "braces-and-aligners-lohegaon",
    metaTitle: "Braces & Clear Aligners in Lohegaon, Pune",
    metaDescription:
      "Braces and clear aligners in Lohegaon, Pune for children, teenagers and adults. Metal, ceramic and invisible aligner options at Dr. Dhanshree's Dental Clinic. Book on WhatsApp: +91 82751 72931.",
    keywords: [
      "braces in Lohegaon",
      "clear aligners Pune",
      "invisible braces Lohegaon",
      "orthodontist near me Pune",
      "braces cost Pune",
    ],
    navLabel: "Braces & Aligners",
    h1: "Braces and Clear Aligners in Lohegaon, Pune",
    intro:
      "Crowded, gapped, or protruding teeth are harder to clean, wear unevenly, and for many people affect how comfortable they feel smiling. We offer metal braces, ceramic braces, and clear aligners for children, teenagers, and adults at our Lohegaon clinic — with an honest conversation about which one suits your case, your routine, and your budget.",
    image: "/images/braces.jpg",
    imageAlt:
      "Braces and clear aligner treatment at Dr. Dhanshree's Dental Clinic in Lohegaon, Pune",
    procedureName: "Orthodontic Treatment",
    procedureType: "NoninvasiveProcedure",
    highlights: [
      "Metal, ceramic, and clear aligner options",
      "Treatment for children, teenagers, and adults",
      "Written plan with expected duration before you start",
      "Retainer guidance so the result holds",
    ],
    sections: [
      {
        heading: "Choosing between braces and aligners",
        body: [
          "This decision gets made emotionally more often than it should. Clear aligners are appealing because they are nearly invisible and removable — but they only work if you actually wear them 20 to 22 hours a day. If you are likely to leave them out, fixed braces will give you a better result.",
          "Fixed braces handle complex movements — significant rotations, large bite corrections, moving roots — more predictably. Ceramic brackets are a middle ground: fixed, but far less visible than metal. What suits you depends on how your teeth need to move, not just on appearance.",
        ],
        list: [
          "Metal braces — most economical, handles the widest range of cases",
          "Ceramic braces — tooth-coloured brackets, much less noticeable",
          "Clear aligners — removable and near-invisible, needs strict discipline",
        ],
      },
      {
        heading: "The right age to start",
        body: [
          "For children, an orthodontic assessment around age 7 to 9 is useful. Not because treatment usually starts then, but because some problems — crossbites, severe crowding, jaw growth discrepancies — are far simpler to guide while the jaw is still developing than to correct later.",
          "For adults, there is no age limit. Teeth move throughout life. What matters is that your gums and the bone supporting your teeth are healthy first; active gum disease has to be treated before any orthodontic work begins.",
        ],
      },
      {
        heading: "What treatment is like day to day",
        body: [
          "Expect some soreness for three to five days after fitting and after each adjustment. It is a dull ache rather than sharp pain, and soft food plus your usual painkiller handles it.",
          "Cleaning takes more effort with fixed braces, and this genuinely matters — the most common bad outcome in orthodontics is straight teeth with white decalcification marks around where the brackets were. We will show you the technique and check your cleaning at each visit.",
          "Most treatments run 12 to 24 months depending on complexity, with adjustment visits every 4 to 6 weeks.",
        ],
      },
      {
        heading: "Retainers are not optional",
        body: [
          "Teeth have a memory and will drift back toward their original position if nothing holds them. Every case finishes with a retainer, and wearing it as instructed is what protects the money and time you have just invested. Patients who stop wearing retainers after a year commonly see noticeable relapse.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long does braces treatment take?",
        answer:
          "Most cases take 12 to 24 months. Mild crowding can finish sooner; significant bite corrections take longer. After examining you and reviewing X-rays we give an estimated duration, though it can shift depending on how your teeth respond and how consistently instructions are followed.",
      },
      {
        question: "Are clear aligners as effective as braces?",
        answer:
          "For mild to moderate crowding and spacing, yes — provided they are worn 20 to 22 hours a day. For complex rotations, large bite corrections, or cases needing significant root movement, fixed braces remain more predictable. We will tell you honestly which category your case falls into.",
      },
      {
        question: "Do braces hurt?",
        answer:
          "Fitting itself does not hurt. Expect a dull ache and tenderness when biting for three to five days afterwards, and again for a day or two after each adjustment. Soft food and ordinary painkillers manage it well.",
      },
      {
        question: "What do braces cost in Lohegaon, Pune?",
        answer:
          "Cost depends on the appliance — metal, ceramic, or aligners — and on how complex the movement required is. We give a complete figure covering the full treatment and the retainer at the consultation, and we can discuss instalment options.",
      },
      {
        question: "Can adults get braces?",
        answer:
          "Yes, and a substantial share of our orthodontic patients are adults. There is no upper age limit as long as your gums and supporting bone are healthy. Ceramic braces and clear aligners are popular with adults who prefer something discreet.",
      },
    ],
    related: ["smile-design-lohegaon", "teeth-whitening-lohegaon"],
  },

  {
    slug: "teeth-whitening-lohegaon",
    metaTitle: "Teeth Whitening in Lohegaon, Pune",
    metaDescription:
      "Professional teeth whitening in Lohegaon, Pune at Dr. Dhanshree's Dental Clinic. Safe in-clinic whitening and take-home kits, with realistic guidance on results. Book on WhatsApp: +91 82751 72931.",
    keywords: [
      "teeth whitening Lohegaon",
      "teeth whitening Pune cost",
      "professional teeth cleaning near me",
      "teeth bleaching Pune",
      "cosmetic dentist Lohegaon",
    ],
    navLabel: "Teeth Whitening",
    h1: "Professional Teeth Whitening in Lohegaon, Pune",
    intro:
      "Professional whitening lifts stains from tea, coffee, tobacco, and years of ordinary use, using a controlled concentration of whitening gel applied with your gums protected. It is safe when carried out by a dentist — and it works on some kinds of discolouration far better than others, which is worth knowing before you spend anything.",
    image: "/images/Whitening.jpg",
    imageAlt:
      "Professional teeth whitening at Dr. Dhanshree's Dental Clinic in Lohegaon, Pune",
    procedureName: "Teeth Whitening",
    procedureType: "NoninvasiveProcedure",
    highlights: [
      "In-clinic whitening in a single appointment",
      "Take-home kits with custom trays",
      "Shade assessed before and after, so you can see the actual change",
      "Honest advice when whitening is not the right answer",
    ],
    sections: [
      {
        heading: "What whitening can and cannot fix",
        body: [
          "Whitening works well on extrinsic staining — the surface discolouration built up from tea, coffee, red wine, tobacco, and time. It works reasonably on mild yellowing of the natural tooth shade.",
          "It does not change the colour of crowns, veneers, or composite fillings. If you have a crown on a front tooth, whitening the teeth around it will make the crown stand out more, not less. It also works poorly on grey discolouration from tetracycline or from a tooth that died after trauma — those usually need veneers or internal bleaching instead.",
          "This is exactly why we check before treating. Paying for whitening that cannot work on your particular staining helps nobody.",
        ],
      },
      {
        heading: "Cleaning first, whitening second",
        body: [
          "A professional clean removes plaque, tartar, and a meaningful amount of surface staining on its own. A number of patients who come in asking about whitening are satisfied with the result after a scaling and polish alone, at a fraction of the cost.",
          "Whitening gel also penetrates unevenly through a layer of tartar, so cleaning first produces a more uniform result regardless.",
        ],
      },
      {
        heading: "In-clinic versus take-home",
        body: [
          "In-clinic whitening uses a stronger gel with your gums carefully isolated, and is completed in one appointment of roughly 60 to 90 minutes. Take-home kits use custom-made trays and a milder gel worn for a set period over one to two weeks — slower, gentler on sensitivity, and easier to top up later.",
          "Both reach a comparable end point. The choice usually comes down to how quickly you need the result and how sensitive your teeth are.",
        ],
      },
      {
        heading: "Sensitivity and how long results last",
        body: [
          "Temporary sensitivity to cold during and shortly after whitening is common and settles within a day or two. Tell us if you already have sensitive teeth — we can adjust the concentration and use a desensitising agent.",
          "Results typically hold for one to two years, but this depends heavily on your habits. Regular tea, coffee, or tobacco will re-stain teeth faster. Whitening is not permanent, and any clinic promising otherwise is overselling.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is teeth whitening safe for enamel?",
        answer:
          "Professional whitening supervised by a dentist does not damage enamel at the concentrations used. Risks come from unregulated over-the-counter products used incorrectly, or from repeated whitening at too high a concentration without professional oversight. Temporary sensitivity is the main side effect and it resolves on its own.",
      },
      {
        question: "How long do whitening results last?",
        answer:
          "Usually one to two years, depending on diet and habits. Tea, coffee, red wine, and tobacco re-stain teeth faster. A top-up with a take-home kit can maintain the shade without repeating the full in-clinic treatment.",
      },
      {
        question: "Will whitening work on my crowns or fillings?",
        answer:
          "No. Whitening gel does not change the colour of crowns, veneers, or composite fillings. If you have visible restorations on your front teeth, whitening the natural teeth may make them look mismatched. We check this before treatment and will discuss replacing restorations if it applies to you.",
      },
      {
        question: "How much does teeth whitening cost in Pune?",
        answer:
          "It depends on whether you choose in-clinic whitening or a take-home kit, and whether a scaling and polish is needed first. We quote the full amount at the consultation once we have looked at the type of staining you have.",
      },
      {
        question: "Does whitening hurt?",
        answer:
          "It should not be painful. Some patients notice sharp cold sensitivity during and for a day or two after treatment, which settles by itself. If you already have sensitive teeth, tell us beforehand so we can adjust the approach.",
      },
    ],
    related: ["smile-design-lohegaon", "braces-and-aligners-lohegaon"],
  },

  {
    slug: "smile-design-lohegaon",
    metaTitle: "Smile Design & Cosmetic Dentistry in Lohegaon, Pune",
    metaDescription:
      "Smile design and cosmetic dentistry in Lohegaon, Pune — veneers, bonding, contouring and full smile makeovers at Dr. Dhanshree's Dental Clinic. Natural-looking results. Call +91 82751 72931.",
    keywords: [
      "smile design Pune",
      "cosmetic dentist Lohegaon",
      "veneers Pune cost",
      "smile makeover Lohegaon",
      "dental veneers near me",
    ],
    navLabel: "Smile Design",
    h1: "Smile Design and Cosmetic Dentistry in Lohegaon, Pune",
    intro:
      "Smile design means planning the shape, shade, proportion, and alignment of your front teeth as a whole, rather than fixing one tooth at a time. Done well, nobody can tell you have had anything done — they just notice you look well. That is the standard we work to at our Lohegaon clinic.",
    image: "/images/Veneers.jpg",
    imageAlt:
      "Smile design and cosmetic dentistry at Dr. Dhanshree's Dental Clinic in Lohegaon, Pune",
    procedureName: "Smile Design",
    procedureType: "NoninvasiveProcedure",
    highlights: [
      "Veneers, composite bonding, contouring and reshaping",
      "Planned around your face, not a template",
      "Shade matched to look natural, not artificial",
      "Clear costs and stages agreed before starting",
    ],
    sections: [
      {
        heading: "Starting from what actually bothers you",
        body: [
          "The first conversation is not about treatment. It is about what you notice when you look at photographs of yourself — a chipped edge, a tooth that sits behind the others, a gap, uneven lengths, a shade that has darkened over the years.",
          "Sometimes the answer is much smaller than people expect. Reshaping a single edge, or a composite bonding on one tooth, can resolve what someone has been self-conscious about for a decade. We would rather do the small thing that works than the large thing that pays better.",
        ],
      },
      {
        heading: "The options, and what each costs you",
        body: [
          "Different problems call for genuinely different solutions, and the trade-off is usually between how conservative the treatment is and how far it can go.",
        ],
        list: [
          "Contouring and polishing — reshapes small chips and uneven edges, removes almost no tooth structure",
          "Composite bonding — tooth-coloured material sculpted directly, done in one visit, reversible, but stains over years",
          "Veneers — thin ceramic facings, the most durable and colour-stable option, but requires removing a small amount of enamel permanently",
          "Orthodontics first — where teeth are misaligned, moving them often gives a better and more conservative result than covering them",
        ],
      },
      {
        heading: "Why we push back on very white",
        body: [
          "The most common regret in cosmetic dentistry is teeth that are too white and too uniform for the person's face and age. It reads as artificial immediately, and with veneers it is not easily undone.",
          "Natural teeth are slightly translucent at the edges, marginally different from each other, and not the shade of printer paper. We aim for a shade that suits your skin tone and age. If you want something brighter than we would recommend, we will say so — and then it is your decision, made with the information.",
        ],
      },
      {
        heading: "Health comes before appearance",
        body: [
          "Cosmetic work placed over active decay or untreated gum disease fails. Before any smile design begins, we treat what needs treating — fillings, gum therapy, root canals if required. It adds a step, and it is the difference between a result that lasts and one that has to be redone.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long do dental veneers last?",
        answer:
          "Well-made ceramic veneers commonly last 10 to 15 years or more with good care. Composite bonding typically lasts 4 to 7 years before it needs refreshing or replacing. Grinding your teeth at night shortens the life of both — if you grind, a night guard is part of the plan.",
      },
      {
        question: "Do veneers damage your natural teeth?",
        answer:
          "Veneers require removing a thin layer of enamel, which does not grow back — so it is a permanent commitment for that tooth. This is why we discuss more conservative options first, and why we do not recommend veneers where contouring, bonding, or orthodontics would achieve what you want.",
      },
      {
        question: "How much does a smile makeover cost in Pune?",
        answer:
          "It varies enormously with how many teeth are involved and which treatments are used — reshaping two edges and placing eight veneers are very different undertakings. After the consultation we give a written plan with each stage costed, so you can decide what to do and in what order.",
      },
      {
        question: "Will people be able to tell?",
        answer:
          "That is precisely the goal — that they cannot. Shade, translucency, edge shape, and proportion are matched to your face and your remaining teeth. Work that announces itself is work that has been done badly.",
      },
      {
        question: "Can I see the result before committing?",
        answer:
          "For most smile design cases we can show you the planned outcome before irreversible work begins, so you can give feedback on shape and shade while changes are still easy to make. We will explain what is possible for your specific case at the consultation.",
      },
    ],
    related: ["teeth-whitening-lohegaon", "dental-implants-lohegaon"],
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((page) => page.slug === slug);
}
