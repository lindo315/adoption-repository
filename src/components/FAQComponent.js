import React from "react";

function FAQComponent({ faqData }) {
  return (
    <section className="faq-section">
      <p className="get-to">Frequently</p>
      <h2>Asked Questions</h2>
      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQComponent;
