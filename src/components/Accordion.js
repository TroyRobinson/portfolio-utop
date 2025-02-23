import React, { useState } from 'react';

const Accordion = ({ items, styles = {} }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const defaultStyles = {
    container: {
      width: '100%',
      maxWidth: '800px',
      margin: '20px auto',
      ...styles.container
    },
    item: {
      border: '1px solid #e0e0e0',
      marginBottom: '10px',
      borderRadius: '4px',
      overflow: 'hidden',
      ...styles.item
    },
    header: {
      padding: '15px 20px',
      backgroundColor: '#f5f5f5',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      transition: 'background-color 0.3s ease',
      ...styles.header
    },
    headerActive: {
      backgroundColor: '#e8e8e8',
      ...styles.headerActive
    },
    title: {
      margin: 0,
      fontSize: '16px',
      fontWeight: 500,
      ...styles.title
    },
    content: {
      padding: '0',
      maxHeight: '0',
      overflow: 'hidden',
      transition: 'all 0.3s ease-in-out',
      ...styles.content
    },
    contentActive: {
      padding: '20px',
      maxHeight: '500px',
      ...styles.contentActive
    },
    icon: {
      transform: 'rotate(0deg)',
      transition: 'transform 0.3s ease',
      ...styles.icon
    },
    iconActive: {
      transform: 'rotate(180deg)',
      ...styles.iconActive
    }
  };

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={defaultStyles.container}>
      {items.map((item, index) => (
        <div key={index} style={defaultStyles.item}>
          <div
            style={{
              ...defaultStyles.header,
              ...(activeIndex === index ? defaultStyles.headerActive : {})
            }}
            onClick={() => toggleAccordion(index)}
          >
            <h3 style={defaultStyles.title}>{item.title}</h3>
            <span
              style={{
                ...defaultStyles.icon,
                ...(activeIndex === index ? defaultStyles.iconActive : {})
              }}
            >
              ▼
            </span>
          </div>
          <div
            style={{
              ...defaultStyles.content,
              ...(activeIndex === index ? defaultStyles.contentActive : {})
            }}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
