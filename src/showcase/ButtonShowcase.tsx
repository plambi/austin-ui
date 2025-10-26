"use client";

import { useState } from "react";
import { SectionContainer } from "../containers/SectionContainer";
import { Button } from "../core/Button";
import { Toggle } from "../core/Toggle";

export function ButtonShowcase() {
    const [buttonEnabled, setbuttonEnabled] = useState<boolean>(true);

    return (
        <SectionContainer
            title="Buttons"
            showUnderline
            className="flex flex-col gap-5"
        >
            {/* Toggles */}
            <div className="flex flex-col gap-3">
                <p className="font-semibold">Toggle</p>
                <div className="flex flex-row gap-3 justify-center">
                    {/* Green */}
                    <div className="flex flex-col gap-3">
                        <Toggle
                            label="Enabled"
                            variant="green"
                            size="small"
                            value={buttonEnabled}
                            setValue={setbuttonEnabled}
                        />
                        <Toggle
                            label="Enabled"
                            variant="green"
                            size="normal"
                            value={buttonEnabled}
                            setValue={setbuttonEnabled}
                        />
                        <Toggle
                            label="Enabled"
                            variant="green"
                            size="large"
                            value={buttonEnabled}
                            setValue={setbuttonEnabled}
                        />
                    </div>

                    {/* Red */}
                    <div className="flex flex-col gap-3">
                        <Toggle
                            label="Enabled"
                            variant="red"
                            size="small"
                            value={buttonEnabled}
                            setValue={setbuttonEnabled}
                        />
                        <Toggle
                            label="Enabled"
                            variant="red"
                            size="normal"
                            value={buttonEnabled}
                            setValue={setbuttonEnabled}
                        />
                        <Toggle
                            label="Enabled"
                            variant="red"
                            size="large"
                            value={buttonEnabled}
                            setValue={setbuttonEnabled}
                        />
                    </div>

                    {/* Blue */}
                    <div className="flex flex-col gap-3">
                        <Toggle
                            label="Enabled"
                            variant="blue"
                            size="small"
                            value={buttonEnabled}
                            setValue={setbuttonEnabled}
                        />
                        <Toggle
                            label="Enabled"
                            variant="blue"
                            size="normal"
                            value={buttonEnabled}
                            setValue={setbuttonEnabled}
                        />
                        <Toggle
                            label="Enabled"
                            variant="blue"
                            size="large"
                            value={buttonEnabled}
                            setValue={setbuttonEnabled}
                        />
                    </div>

                    {/* Plain */}
                    <div className="flex flex-col gap-3">
                        <Toggle
                            label="Enabled"
                            variant="plain"
                            size="small"
                            value={buttonEnabled}
                            setValue={setbuttonEnabled}
                        />
                        <Toggle
                            label="Enabled"
                            variant="plain"
                            size="normal"
                            value={buttonEnabled}
                            setValue={setbuttonEnabled}
                        />
                        <Toggle
                            label="Enabled"
                            variant="plain"
                            size="large"
                            value={buttonEnabled}
                            setValue={setbuttonEnabled}
                        />
                    </div>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3">
                <p className="font-semibold">Button</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {/* Green Column */}
                    <div className="flex flex-col gap-3 items">
                        <Button
                            disabled={!buttonEnabled}
                            variant="green"
                            size="small"
                        >
                            Green (Small)
                        </Button>
                        <Button
                            disabled={!buttonEnabled}
                            variant="green"
                            size="normal"
                        >
                            Green (Normal)
                        </Button>
                        <Button
                            disabled={!buttonEnabled}
                            variant="green"
                            size="large"
                        >
                            Green (Large)
                        </Button>
                    </div>
                    {/* Red Column */}
                    <div className="flex flex-col gap-3 items-center">
                        <Button
                            disabled={!buttonEnabled}
                            variant="red"
                            size="small"
                        >
                            Red (Small)
                        </Button>
                        <Button
                            disabled={!buttonEnabled}
                            variant="red"
                            size="normal"
                        >
                            Red (Normal)
                        </Button>
                        <Button
                            disabled={!buttonEnabled}
                            variant="red"
                            size="large"
                        >
                            Red (Large)
                        </Button>
                    </div>
                    {/* Blue Column */}
                    <div className="flex flex-col gap-3 items-center">
                        <Button
                            disabled={!buttonEnabled}
                            variant="blue"
                            size="small"
                        >
                            Blue (Small)
                        </Button>
                        <Button
                            disabled={!buttonEnabled}
                            variant="blue"
                            size="normal"
                        >
                            Blue (Normal)
                        </Button>
                        <Button
                            disabled={!buttonEnabled}
                            variant="blue"
                            size="large"
                        >
                            Blue (Large)
                        </Button>
                    </div>
                    {/* Plain Column */}
                    <div className="flex flex-col gap-3 items-center">
                        <Button
                            disabled={!buttonEnabled}
                            variant="plain"
                            size="small"
                        >
                            Plain (Small)
                        </Button>
                        <Button
                            disabled={!buttonEnabled}
                            variant="plain"
                            size="normal"
                        >
                            Plain (Normal)
                        </Button>
                        <Button
                            disabled={!buttonEnabled}
                            variant="plain"
                            size="large"
                        >
                            Plain (Large)
                        </Button>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
}
