import React from 'react';

const HelpfulLinks = () => {
  const links = [
    {
      title: 'Grammarly',
      url: 'https://www.grammarly.com/signin',
      description: 'Improve your writing with Grammarly.'
    },
    {
      title: 'APA Formatting Guide',
      url: 'https://owl.purdue.edu/owl/research_and_citation/apa_style/apa_formatting_and_style_guide/general_format.html',
      description: 'APA formatting and style guide by Purdue OWL.'
    }
  ];

  return (
    <div>
      <h2>Helpful Links</h2>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.title}
            </a>
            <p>{link.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HelpfulLinks;
