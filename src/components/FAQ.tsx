import { faq } from "../content/home";
import { Icon } from "./Icon";

/** Native <details>/<summary>: keyboard accessible (Tab, Enter, Space) with no JavaScript. */
export function FAQ() {
  return (
    <section id="faq" className="section" aria-labelledby="faq-title">
      <div className="container faq-wrap">
        <header className="section-head">
          <p className="kicker">{faq.kicker}</p>
          <h2 id="faq-title">{faq.title}</h2>
        </header>
        <div className="faq-list">
          {faq.items.map((item) => (
            <details key={item.question} className="faq-item">
              <summary>
                <span>{item.question}</span>
                <span className="faq-chevron">
                  <Icon name="chevron" size={20} />
                </span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
