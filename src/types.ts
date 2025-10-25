export type LabelValuePair = {
    label: string;
    value: string;
};

export type AustinUISize = "small" | "normal" | "large";
export type AustinUISizeClassMap = Record<AustinUISize, string>;

export type AustinUIColor = "red" | "blue" | "green" | "plain";
export type AustinUIColorClassMap = Record<AustinUIColor, string>;
