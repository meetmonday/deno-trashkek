if (import.meta.main) {
  const rawimports = JSON.parse(
    Deno.readTextFileSync("./config/_atlas.json"),
  );
  const imports: string[] = [];
  const exports: string[] = [];
  rawimports.forEach((el: {
    enabled: boolean;
    import: string[];
    from: string;
  }) => {
    if (!el.enabled) return false;
    if (typeof el.import === "string") {
      imports.push(`import ${el.import} from "#m/${el.import}.ts"`);
      exports.push(el.import);
    } else {
      imports.push(`import { ${el.import.join(", ")} } from "${el.from}"`);
      exports.push(...el.import);
    }
  });

  const atlas = `${imports.join(";\n")};
export default { ${exports.join(", ")} };
`;

  Deno.writeTextFileSync("./src/_atlas.ts", atlas);
}
