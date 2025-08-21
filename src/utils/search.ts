export const searchByRegex = <T extends object, K extends keyof T>({
  data,
  keys,
  formatters,
  regex,
}: {
  data: T[];
  regex: RegExp;
  formatters?: Partial<Record<K, (value: unknown) => string>>;
  keys: K[];
}) =>
  data.filter((item) =>
    keys.some((key) => {
      const value = item[key];

      return regex.test(formatters?.[key] ? formatters[key](value) : `${value}`);
    })
  );
