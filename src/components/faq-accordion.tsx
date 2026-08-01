"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

/**
 * Interactive FAQ accordion. Receives plain serialisable data so it can be
 * used from server components (e.g. the /faq page).
 */
export default function FaqAccordion({
  faqs,
  defaultOpen = 0,
}: {
  faqs: ReadonlyArray<{ question: string; answer: string }>;
  defaultOpen?: number;
}) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  return (
    <div className="faq-list">
      {faqs.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <article
            className={`faq-item ${isOpen ? "open" : ""}`}
            key={item.question}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span>{item.question}</span>
              <ChevronDown size={20} />
            </button>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
