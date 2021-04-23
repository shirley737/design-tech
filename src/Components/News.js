import React from "react";
import "./News.scss";
import march from "../news/march-2021.json";
import april from "../news/april-2021.json";

const news = [april, march];

function News() {
  return (
    <div className="news">
      {news.map((news) => {
        return news.blocks.map((block, i) => {
          if (block.type === "header") {
            return (
              <div key={i} className="title">
                {block.text.text}
              </div>
            );
          }

          if (block.type === "section") {
            if (/\*/.test(block.text.text)) {
              return (
                <div key={i} className="section-title">
                  <strong>{block.text.text.slice(1, -1)}</strong>
                </div>
              );
            }

            const [first, second] = block.text.text.split("|");
            const href = first.replace(/^\</, "");
            const text = second.replace(/\>/, "");

            return (
              <li key={i} className="section-item">
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {text}
                </a>
              </li>
            );
          }

          return null;
        });
      })}
    </div>
  );
}

export default News;
