const Section = ({ title, content }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-1 text-yellow-400">{title}</h2>
      {Array.isArray(content) ? (
        <ul className="list-disc list-inside space-y-1">
          {content.map((item, id) => (
            <li key={id}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>{content}</p>
      )}
    </div>
  );
};

export default Section
