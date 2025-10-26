"use client";

import { useState } from "react";
import { SectionContainer } from "../containers/SectionContainer";
import { Select } from "../core/Select";
import { LabelValuePair } from "../types";
import { Button } from "../core/Button";
import { CheckboxGroup } from "../functional/CheckboxGroup";
import { Pagination } from "../functional/Pagination";
import { RadioGroup } from "../functional/RadioGroup";

export function SelectShowcase() {
    const [choice, setChoice] = useState<string>("");
    const [checkboxesChoice, setCheckboxesChoice] = useState<string[]>([]);
    const [radioChoice, setRadioChoice] = useState<string>("Choice 1");
    const [page, setPage] = useState<number>(0);

    const options: LabelValuePair[] = [
        { label: "Choice 1", value: "value" },
        { label: "Choice 2", value: "value2" },
        { label: "Choice 3", value: "value3" },
    ];

    return (
        <SectionContainer
            title="Choices"
            showUnderline
            className="flex flex-col gap-5"
        >
            <div className="flex flex-col gap-3">
                <p className="font-semibold">Select</p>
                <div className="flex flex-row gap-5 justify-center">
                    <div>
                        <Button
                            variant="red"
                            overrideWidthFull
                            onClick={() => setChoice("")}
                        >
                            Clear Choice
                        </Button>
                    </div>
                    <Select
                        label="Ignore Default (false)"
                        placeholder="Placeholder"
                        options={options}
                        choice={choice}
                        setChoice={setChoice}
                    />
                    <Select
                        label="Ignore Default (true)"
                        ignoreDefaultValue
                        options={options}
                        choice={choice}
                        setChoice={setChoice}
                    />
                    <Select
                        label="Small"
                        size="small"
                        options={options}
                        choice={choice}
                        setChoice={setChoice}
                    />
                    <Select
                        label="Normal"
                        size="normal"
                        options={options}
                        choice={choice}
                        setChoice={setChoice}
                    />
                    <Select
                        label="Large"
                        size="large"
                        options={options}
                        choice={choice}
                        setChoice={setChoice}
                    />
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <p className="font-semibold">CheckboxGroup</p>
                <CheckboxGroup
                    label="Small !Compact"
                    variant="red"
                    size="small"
                    options={options}
                    choice={checkboxesChoice}
                    setChoice={setCheckboxesChoice}
                />
                <CheckboxGroup
                    label="Normal Compact"
                    variant="green"
                    size="normal"
                    compact
                    options={options}
                    choice={checkboxesChoice}
                    setChoice={setCheckboxesChoice}
                />
                <CheckboxGroup
                    label="Large Compact"
                    size="large"
                    compact
                    options={options}
                    choice={checkboxesChoice}
                    setChoice={setCheckboxesChoice}
                />
            </div>

            <div className="flex flex-col gap-3">
                <p className="font-semibold">RadioGroup</p>
                <RadioGroup
                    label="Small !Compact"
                    variant="red"
                    size="small"
                    options={options}
                    choice={radioChoice}
                    setChoice={setRadioChoice}
                />
                <RadioGroup
                    label="Normal Compact"
                    variant="green"
                    size="normal"
                    compact
                    options={options}
                    choice={radioChoice}
                    setChoice={setRadioChoice}
                />
                <RadioGroup
                    label="Large Compact"
                    size="large"
                    compact
                    options={options}
                    choice={radioChoice}
                    setChoice={setRadioChoice}
                />
            </div>

            <div className="flex flex-col gap-3">
                <p className="font-semibold">Pagination</p>
                <Pagination
                    currentPage={page}
                    onPageChange={setPage}
                    totalPages={10}
                />
            </div>
        </SectionContainer>
    );
}
