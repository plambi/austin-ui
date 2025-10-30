"use client";

import { useState } from "react";
import { SectionContainer } from "../containers/SectionContainer";
import { TextField } from "../core/TextField";
import { TextArea } from "../core/TextArea";
import { NumberField } from "../core/NumberField";

export function TextInputShowcase() {
    const [text, setText] = useState<string>("");
    const [number, setNumber] = useState<string>("0");

    return (
        <SectionContainer
            title="Text"
            showUnderline
            className="flex flex-col gap-5"
        >
            <div className="flex flex-col gap-3">
                <p className="font-semibold">TextField</p>
                <div className="flex flex-row gap-3">
                    <TextField
                        label="Enter Text"
                        overrideWidthFull
                        value={text}
                        setValue={setText}
                        placeholder="Placeholder"
                    />
                    <TextField
                        label="Disabled"
                        disabled
                        overrideWidthFull
                        value={text}
                        setValue={setText}
                        placeholder="Placeholder"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <p className="font-semibold">TextArea</p>
                <div className="flex flex-row gap-3">
                    <TextArea
                        label="Enter Text"
                        overrideWidthFull
                        value={text}
                        setValue={setText}
                        placeholder="Placeholder"
                    />
                    <TextArea
                        label="Disabled"
                        disabled
                        overrideWidthFull
                        value={text}
                        setValue={setText}
                        placeholder="Placeholder"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <p className="font-semibold">NumberField</p>
                <div className="flex flex-row gap-3">
                    <NumberField
                        label="Enter A Number"
                        overrideWidthFull
                        value={number}
                        setValue={setNumber}
                        placeholder="Enter a number"
                    />
                    <NumberField
                        label="Disabled"
                        disabled
                        overrideWidthFull
                        value={number}
                        setValue={setNumber}
                        placeholder="Disabled number"
                    />
                </div>
            </div>
        </SectionContainer>
    );
}
