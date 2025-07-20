function buildJson(fields) {
  const result = {};
  for (const field of fields) {
    if (!field.key) continue;
    if (field.type === "nested") {
      result[field.key] = buildJson(field.children);
    } else {
      result[field.key] = field.type;
    }
  }
  return result;
}

export default function JsonOutput({ fields }) {
  const jsonOutput = JSON.stringify(buildJson(fields), null, 2);

  return (
    <pre>
      <div
        style={{
          backgroundColor: "#f7f7f7",
          borderRadius: "4px",
          marginLeft: "10px",
          minWidth: "400px",
          padding: "5px",
        }}
      >
        {jsonOutput}
      </div>
    </pre>
  );
}
