import React from 'react';

const SingleInfo = ({ text, Image }) => {
  const isEmail = text.includes('@');
  const isPhone = /^\+?\d[\d\s-]+$/.test(text);

  // For address, assume anything else (not email or phone)
  const isAddress = !isEmail && !isPhone;

  let content = text;

  if (isEmail) {
    content = <a href={`mailto:${text}`} className="hover:underline">{text}</a>;
  } else if (isPhone) {
    const phoneNumber = text.replace(/\s+/g, '');
    content = <a href={`tel:${phoneNumber}`} className="hover:underline">{text}</a>;
  } else if (isAddress) {
    // Encode address for Google Maps query
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(text)}`;
    content = (
      <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
        {text}
      </a>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <Image className="text-cyan text-2xl" />
      <span>{content}</span>
    </div>
  );
};

export default SingleInfo;
