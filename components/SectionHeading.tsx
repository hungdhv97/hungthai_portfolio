export default function SectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
      <h2 className="text-sm font-bold uppercase tracking-widest text-lightest lg:sr-only">
        <span className="font-mono text-teal lg:hidden">{number}.</span> {title}
      </h2>
    </div>
  );
}
