// src/components/ReviewHighlighter.js
import React from 'react';
import Tooltip from './Tooltip';

const sentimentColors = {
  Positive: 'bg-green-100',
  Negative: 'bg-red-100',
  Mixed: 'bg-yellow-100',
  Neutral: 'bg-gray-100',
};

const ReviewHighlighter = ({ review }) => {
  const { content, analytics } = review;

  // This function highlights sentences based on sentiment and adds the tooltip
  const highlightSentences = () => {
    let highlightedContent = content;

    // Loop through analytics to apply highlights and tooltips
    analytics.forEach(({ sentiment, highlight_indices}) => {
      highlight_indices.forEach(([start, end, sentimentType]) => {
        const highlightedSentence = `<span class="relative group" data-sentiment="${sentimentType}" data-topic="${analytics[0].topic}">
                                       <span class="${sentimentColors[sentimentType]} p-1 rounded">${content.substring(start, end)}</span>
                                       <span class="tooltip absolute hidden group-hover:block bg-gray-800 text-white text-xs p-2 rounded">${analytics[0].topic}</span>
                                     </span>`;
        const regex = new RegExp(`.{${start}}(.{${end - start}})`, 'g');
        highlightedContent = highlightedContent.replace(regex, match => highlightedSentence);
      });
    });
    return highlightedContent;
  };

  return (
    <div className="my-4 p-4 border rounded shadow-sm">
      <h2 className="text-xl font-bold">{review.reviewer_name}</h2>
      <p className="mt-2" dangerouslySetInnerHTML={{ __html: highlightSentences() }} />
   
    </div>
  );
};

export default ReviewHighlighter;
