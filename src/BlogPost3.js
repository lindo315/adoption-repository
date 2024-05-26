import React from "react";
import { useNavigate } from "react-router-dom";
import ScrollTop from "./ScrollTop";
import "./index.css";

function BlogPost3() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/theory");
  };

  return (
    <div className="blog-post-page">
      <button className="back-button" onClick={handleGoBack}>
        &larr; Back
      </button>
      <h1>Blog Post 3: Net Artwork</h1>
      <div className="blog-post-content">
        <p>
          The rise of the internet has revolutionized countless aspects of
          modern life, and the art world is no exception. Over the past few
          decades, a new form of art has emerged that is created specifically
          through, on, and for the internet: Net Art (Ricci, 2020). This
          innovative medium challenges traditional notions of what constitutes
          art and has opened up exciting new possibilities for artistic
          expression and audience engagement. Net Art encompasses a wide range
          of manifestations, from code and algorithms to websites and
          interactive experiences. While difficult to define precisely, it is
          often characterized by features such as connectivity, multimediality,
          immateriality, and interactivity (Ricci, 2020). The roots of the
          movement can be traced back to early experiments in communication
          networking and Mail Art in the 1920s and 1960s, but it truly came into
          its own with the advent of the World Wide Web in the 1990s.
        </p>
        <p>
          Early pioneers of Net Art, such as Vuk Ćosić, Alexei Shulgin, and Olia
          Lialina, saw the internet as a democratic and participatory space
          where they could create innovative, collaborative artworks that were
          immaterial and not mediated by traditional institutions (Ricci, 2020).
          They explored themes of virtual identity, community, and the
          relationship between online and offline spaces, often with a
          subversive and critical approach. One key feature of Net Art is its
          self-referential nature, with the internet's own characteristics
          becoming both the subject and means of expression. Hyperlinks, for
          instance, have been used as storytelling devices, as in Olia Lialina's
          groundbreaking 1996 work “My Boyfriend Came Back From the War” (Ricci,
          2020). Other artists have focused on the aesthetic qualities of web
          elements like code and markup, such as the duo JODI's explorations of
          abstract code layers.
        </p>
        <p>
          Net Art also frequently engages with social and political issues,
          leveraging the power of the internet to create critical dialogue and
          raise awareness. Projects like Darius Kazemi's “Last Words,” a bot
          that excerpts statements by death row inmates, and !Mediengruppe
          Bitnik's “The Random Darknet Shopper,” which unveiled the secrets of
          the deep web, demonstrate the potential for Net Art to provoke
          reflection and spark debate (Ricci, 2020). As an inherently
          process-based, interactive, and often ephemeral medium, Net Art poses
          unique challenges for conservation and preservation. Authenticity lies
          in the code rather than the hardware, and rapid technological
          obsolescence can render older works unreadable by contemporary systems
          (Ricci, 2020). Institutions and platforms are developing new
          strategies, such as hardware emulation and specialized archiving
          methodologies, to ensure these vital artworks remain accessible to
          future generations.
        </p>
        <p>
          The story of Net Art is still unfolding, but its impact on the art
          world is undeniable. By embracing the internet as a medium, artists
          have not only created innovative new forms of expression but also
          challenged us to rethink our understanding of what art can be and how
          it can engage with the issues and technologies that shape our world.
        </p>
        <p>
          Ricci, B., 2020. Net Art and How The Internet Has Created A New
          Medium. [online] Artland Magazine. Available at:
          https://magazine.artland.com/agents-of-change-net-art/ [Accessed 18
          August 2021].
        </p>
      </div>
      <ScrollTop />
    </div>
  );
}

export default BlogPost3;
