import { checkIfPeselIsCorrect, getSexFromPesel } from "../pesel";

describe("getSexFromPesel", () => {
  const variants = [
    ["00000000010", "M"],
    ["00000000030", "M"],
    ["00000000050", "M"],
    ["00000000070", "M"],
    ["00000000090", "M"],
    ["00000000000", "K"],
    ["00000000020", "K"],
    ["00000000040", "K"],
    ["00000000060", "K"],
    ["00000000080", "K"],
  ];
  test.each(variants)(
    "Gets correct value from PESEL number",
    (pesel, result) => {
      expect(getSexFromPesel(pesel)).toEqual(result);
    }
  );
});

describe("checkIfPeselIsCorrect", () => {
  const variants = [
    ["03262512681", true],
    ["49082134678", true],
    ["80041934254", true],
    ["54051333697", true],
    ["63040423525", true],
    ["17012585735", true],
    ["05112579057", true],
    ["12345678901", false],
    ["11111111111", false],
    ["22222252222", false],
    ["33333333333", false],
    ["64051333697", false],
  ];
  test.each(variants)("Correctly checks PESEL", (pesel, result) => {
    expect(checkIfPeselIsCorrect(pesel)).toBe(result);
  });
});
