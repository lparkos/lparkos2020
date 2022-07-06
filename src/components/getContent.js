import React from 'react';

const getContent = async () => {
  const spreadsheetId = '1ENg7FZrfixYGUSMqXSragg24b7Wz6z1fpyt-zdbour4';
  const response = await fetch(`https://api.graphqlsheet.com/api/${spreadsheetId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'token': '154b9270cc971fc2a7d3fb4c796414ec4a98b13d'
    },
    body: JSON.stringify({
      query: `
        {
          get (limit: 30) {
            PROJECT
            ROLE
            CLIENT
            IMAGE1
            IMAGE2
            IMAGE3
            IMAGE4
            IMAGE5
            IMAGE6
            IMAGE7
            IMAGE8
            IMAGE9
            IMAGE10
            IMAGE11
            IMAGE12
            COPY1
            COPY2
            COPY3
            COPY4
            COPY5
            COPY6
            COPY7
            COPY8
            COPY9
            SUMMARY
            GOAL
            SUCCESS
            TIMELINE
            PROBLEM
          }
        }
      `
    })
  });
  const responseJSON = await response.json();
  return responseJSON && responseJSON.data && responseJSON.data.get && responseJSON.data.get;
};

export default getContent;

