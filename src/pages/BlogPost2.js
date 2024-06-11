import React from "react";
import { useNavigate } from "react-router-dom";
import ScrollTop from "../components/ScrollTop";
import "../index.css";

function BlogPost2() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/theory");
  };

  return (
    <div className="blog-post-page">
      <button className="back-button" onClick={handleGoBack}>
        &larr; Back
      </button>
      <h1>Blog Post 2: Mailloux</h1>
      <div className="blog-post-content">
        <p>
          After browsing through the text, I've been thinking a lot lately about
          the roles that conventions and context play in how we interpret texts
          and understand human actions more broadly. Steven Mailloux in his
          article “Convention and Context” dives deep into this topic, unpacking
          the complex relationship between these two key concepts (Mailloux,
          1983).
        </p>
        <p>
          Mailloux explains that conventions refer to shared practices - things
          like genre conventions in literature, or social conventions that
          prescribe certain behaviours in certain situations. Context, on the
          other hand, points to the unique circumstances surrounding any given
          action or interpretation. What I found interesting is how theorists
          strategically employ both concepts to build their explanatory
          frameworks. For example, when analyzing human action, theorists often
          use the idea of context to acknowledge differences and variations that
          arise even within conventional, shared practices. The same
          conventional action, performed in different historical or cultural
          contexts, can take on very different meanings and implications.
        </p>
        <p>
          When it comes to interpreting texts, the interplay between convention
          and context becomes even more intriguing. Some theorists argue that we
          apply certain interpretive conventions based on contextual cues and
          signals within the text itself. Others claim that it is actually our
          pre-existing interpretive conventions that lead us to pick out certain
          textual features as significant in the first place. In both cases,
          context seems to play a key role in determining which interpretive
          frameworks are most appropriate and relevant. Mailloux points out that
          ultimately, convention and context are not totally separate -
          interpretive conventions, for instance, can be seen as one specifiable
          aspect of the larger context surrounding any act of textual
          interpretation. Other contextual factors, like the purpose and setting
          of the interpretation, also vitally shape the process.
        </p>
        <p>
          While conventions alone can never fully explain the complexity of
          human behaviours and interpretations, I believe the concepts of
          convention and context remain invaluable tools as we strive to
          understand social actions and the production of meaning. Examining the
          conventions at play in any situation helps us identify shared
          practices and assumptions. Considering relevant contextual factors
          allows us to better comprehend the unique significance and
          implications of the action or text at hand. Navigating the tension and
          interplay between these concepts is a constant challenge, but one that
          yields richer, more nuanced interpretations of our social and textual
          worlds.
        </p>
        <p>
          Mailloux, S., 1983. Convention and Context. New Literary History,
          14(2), pp.399-407.
        </p>
      </div>
      <ScrollTop />
    </div>
  );
}

export default BlogPost2;
