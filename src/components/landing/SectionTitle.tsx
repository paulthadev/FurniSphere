import { Separator } from "../ui/separator";

function SectionTitle({ text }: { text: string }) {
  return (
    <div>
      <h2 className="mb-8 text-3xl font-medium capitalize tracking-wider">
        {text}
      </h2>
      <Separator />
    </div>
  );
}

export default SectionTitle;
