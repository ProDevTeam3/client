import {
  dateOfBirthMatchesPESEL,
  NIPIsCorrect,
  PESELIsCorrect,
  requiredValue,
  sexMatchesPESEL,
  correctPostalCode,
  combineValidators,
} from "../validators";

describe("requiredValue", () => {
  test("Returns error text when no value passed", () => {
    const defaultText = "error";
    expect(requiredValue(defaultText)(undefined)).toEqual(defaultText);
  });
  test("Returns undefined is check passes", () => {
    expect(requiredValue("error")("Value")).toBe(undefined);
  });
});

describe("sexMatchesPESEL", () => {
  test("Returns error text when no sex passed", () => {
    const defaultText = "error";
    expect(sexMatchesPESEL(defaultText)(undefined, "49082134678")).toEqual(
      defaultText
    );
  });
  test("Returns error text when no PESEL passed", () => {
    const defaultText = "error";
    expect(sexMatchesPESEL(defaultText)("M", undefined)).toEqual(defaultText);
  });
  test("Returns undefined if check passes", () => {
    expect(sexMatchesPESEL("error")("M", "49082134678")).toBe(undefined);
  });
  test("Returns error text if check fails", () => {
    const defaultText = "error";
    expect(sexMatchesPESEL(defaultText)("K", "49082134678")).toEqual(
      defaultText
    );
  });
});

describe("dateOfBirthMatchesPESEL", () => {
  test("Returns error text when no date passed", () => {
    const defaultText = "error";
    expect(
      dateOfBirthMatchesPESEL(defaultText)(undefined, "49082134678")
    ).toEqual(defaultText);
  });
  test("Returns error text when no PESEL passed", () => {
    const defaultText = "error";
    expect(
      dateOfBirthMatchesPESEL(defaultText)("1949-08-21", undefined)
    ).toEqual(defaultText);
  });
  test("Returns undefined if check passes", () => {
    expect(dateOfBirthMatchesPESEL("error")("1949-08-21", "49082134678")).toBe(
      undefined
    );
  });
  test("Returns error text if check fails", () => {
    const defaultText = "error";
    expect(
      dateOfBirthMatchesPESEL(defaultText)("2020-01-01", "49082134678")
    ).toEqual(defaultText);
  });
});

describe("PESELIsCorrect", () => {
  test("Returns error text when no PESEL passed", () => {
    const defaultText = "error";
    expect(PESELIsCorrect(defaultText)(undefined)).toEqual(defaultText);
  });
  test("Returns error text when PESEL is less than 11 digits", () => {
    const defaultText = "error";
    expect(PESELIsCorrect(defaultText)("111")).toEqual(defaultText);
  });
  test("Returns undefined if check passes", () => {
    expect(PESELIsCorrect("error")("49082134678")).toBe(undefined);
  });
  test("Returns error text if check fails", () => {
    const defaultText = "error";
    expect(PESELIsCorrect(defaultText)("11111111111")).toEqual(defaultText);
  });
});

describe("NIPIsCorrect", () => {
  test("Returns error text when no NIP passed", () => {
    const defaultText = "error";
    expect(NIPIsCorrect(defaultText)(undefined)).toEqual(defaultText);
  });
  test("Returns error text when NIP is less than 10 digits", () => {
    const defaultText = "error";
    expect(NIPIsCorrect(defaultText)("111")).toEqual(defaultText);
  });
  test("Returns undefined if check passes", () => {
    expect(NIPIsCorrect("error")("1234563218")).toBe(undefined);
  });
  test("Returns error text if check fails", () => {
    const defaultText = "error";
    expect(NIPIsCorrect(defaultText)("1139907434")).toEqual(defaultText);
  });
});

describe("correctPostalCode", () => {
  test("Returns error text when no postal code passed", () => {
    const defaultText = "error";
    expect(correctPostalCode(defaultText)(undefined)).toEqual(defaultText);
  });
  test("Returns undefined if check passes", () => {
    expect(correctPostalCode("error")("00-000")).toBe(undefined);
  });
  test("Returns error text if check fails", () => {
    const defaultText = "error";
    expect(correctPostalCode(defaultText)("00000")).toEqual(defaultText);
  });
});

describe("combineValidators", () => {
  test("Returns error text of first error", () => {
    const defaultText = "error";
    expect(combineValidators(requiredValue(defaultText))(undefined)).toEqual(
      defaultText
    );
  });
  test("Returns error text of second error if first is valid", () => {
    const defaultText1 = "error1";
    const defaultText2 = "error2";
    expect(
      combineValidators(
        requiredValue(defaultText1),
        correctPostalCode(defaultText2)
      )("00000")
    ).toEqual(defaultText2);
  });
  test("Returns undefined if all checks passed", () => {
    expect(
      combineValidators(
        requiredValue("error1"),
        correctPostalCode("error2")
      )("00-000")
    ).toBe(undefined);
  });
});
