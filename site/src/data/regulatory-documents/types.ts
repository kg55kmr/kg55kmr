export type RegulatoryDocuments = RegulatoryDocumentSection[];
export type RegulatoryDocumentSection = {
  section: string;
  items: Item[] | RegulatoryDocumentSection[];
};
type Item = { title: string; url: string };

export function isItem(
  items: Item[] | RegulatoryDocumentSection[],
): items is Item[] {
  return "url" in items[0];
}
