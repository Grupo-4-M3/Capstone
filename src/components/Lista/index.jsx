import { SectionList } from "./styles";

export function List({
  children,
  tituloList,
  maxSizeY = "60vh",
  size = "250px",
  sizeY = "60vh",
  minSize = "250px",
  maxSizeWidth = "none",
}) {
  return (
    <SectionList
      size={size}
      sizeY={sizeY}
      maxSizeY={maxSizeY}
      minSize={minSize}
      maxSizeWidth={maxSizeWidth}
    >
      <header>
        <h1>{tituloList || "titulo"}</h1>
      </header>
      <ul>{children}</ul>
    </SectionList>
  );
}
