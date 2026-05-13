type StructuredDataProps = {
  data: object | object[];
};

export const StructuredData = ({ data }: StructuredDataProps) => {
  const json = JSON.stringify(data);
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
};
