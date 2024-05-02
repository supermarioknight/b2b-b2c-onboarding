export type THeader = "json" | "multipart" | "default";

/**
 * transform header based on headerType
 *
 * @param {THeader} headerType
 */
export const getHeader = (headerType: THeader) => {
  let header: HeadersInit = {};

  switch (headerType) {
    case "json":
    case "default":
      header = {
        "Content-Type": "application/json",
      };
      break;

    case "multipart":
      header = {
        "Content-Type": "multipart/form-data",
      };
      break;

    default:
      header = { "Content-Type": "application/json" };
  }

  return header;
};
