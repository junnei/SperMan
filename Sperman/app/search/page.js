"use client";

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Slider } from "@nextui-org/slider";
import { CheckboxGroup, Checkbox } from "@nextui-org/checkbox";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

const formatFeet = (value) => {
    return `${value.toFixed(1)} ft`;
};

const hairColors = {
    Any: "",
    Brown: "brown",
    Black: "black",
    Blond: "yellow",
    Auburan: "darkorange",
    Red: "red",
};

const eyeColors = {
    Any: "",
    Blue: "blue",
    Brown: "brown",
    Hazel: "#8E7618",
    Green: "green",
    Black: "black",
};

export default function SearchPage() {
    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["1"]));

    const router = useRouter();
    const link = "/";

    const handleClick = () => {
        router.push(link); // 클릭 시 지정된 링크로 이동
    };

    return (
        <div className="flex flex-col w-full">
            <Accordion
                className="w-full min-w-[320px]"
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
            >
                <AccordionItem key="1" aria-label="Basic Search" title="Basic Search">
                    <Slider
                        label="Height"
                        step={0.1}
                        minValue={5}
                        maxValue={6.5}
                        defaultValue={[5.5, 6]}
                        formatOptions={{
                            style: "unit",
                            unit: "foot",
                            minimumFractionDigits: 1,
                            maximumFractionDigits: 1,
                        }}
                        getAriaValueText={formatFeet} // 화면 리더기를 위한 텍스트 표시
                        className="max-w-md"
                        valueLabelDisplay="auto" // 슬라이더에서 값 표시
                    />

                    <div className="flex justify-start py-4">
                        <CheckboxGroup
                            label="Ancestry"
                            orientation="horizontal"
                            color="secondary"
                            className="w-full text-left"
                        >
                            <Checkbox value="Any">Any</Checkbox>
                            <Checkbox value="Black">Black</Checkbox>
                            <Checkbox value="Latino">Latino</Checkbox>
                            <Checkbox value="Asian">Asian</Checkbox>
                            <Checkbox value="Caucasion">Caucasion</Checkbox>
                            <Checkbox value="Multi">Multi</Checkbox>
                        </CheckboxGroup>
                    </div>

                    <div className="flex justify-start py-4">
                        <CheckboxGroup
                            label="Hair Color"
                            orientation="horizontal"
                            color="secondary"
                            className="w-full text-left"
                        >
                            {Object.keys(hairColors).map((color) => (
                                <Checkbox value={color} key={color}>
                                    {hairColors[color] && (
                                        <span
                                            style={{
                                                display: "inline-block",
                                                width: "12px",
                                                height: "12px",
                                                backgroundColor: hairColors[color],
                                                marginRight: "8px",
                                                borderRadius: "2px",
                                            }}
                                        ></span>
                                    )}
                                    {color}
                                </Checkbox>
                            ))}
                        </CheckboxGroup>
                    </div>

                    <div className="flex justify-start py-4">
                        <CheckboxGroup
                            label="Eye Color"
                            orientation="horizontal"
                            color="secondary"
                            className="w-full text-left"
                        >
                            {Object.keys(eyeColors).map((color) => (
                                <Checkbox value={color} key={color}>
                                    {eyeColors[color] && (
                                        <span
                                            style={{
                                                display: "inline-block",
                                                width: "12px",
                                                height: "12px",
                                                backgroundColor: eyeColors[color],
                                                marginRight: "8px",
                                                borderRadius: "2px",
                                            }}
                                        ></span>
                                    )}
                                    {color}
                                </Checkbox>
                            ))}
                        </CheckboxGroup>
                    </div>

                    <div className="flex justify-start py-4">
                        <CheckboxGroup
                            label="Education"
                            orientation="horizontal"
                            color="secondary"
                            className="w-full text-left"
                        >
                            <Checkbox value="Any">Any</Checkbox>
                            <Checkbox value="Graduate">Graduate</Checkbox>
                        </CheckboxGroup>
                    </div>
                </AccordionItem>

                <AccordionItem key="2" aria-label="Accordion 2" title="Advanced Search">
                    <div className="flex justify-start py-4">
                        <CheckboxGroup
                            label="Ethnic Background"
                            orientation="horizontal"
                            color="secondary"
                            className="w-full text-left"
                        >
                            <Checkbox value="Any">Any</Checkbox>
                            <Checkbox value="Black">European</Checkbox>
                            <Checkbox value="Latino">African</Checkbox>
                            <Checkbox value="Asian">Middle Eastern</Checkbox>
                            <Checkbox value="Caucasion">Asian</Checkbox>
                            <Checkbox value="Multi">Native American</Checkbox>
                        </CheckboxGroup>
                    </div>

                    <div className="flex justify-start py-4">
                        <CheckboxGroup
                            label="Skin Tone"
                            orientation="horizontal"
                            color="secondary"
                            className="w-full text-left"
                        >
                            <Checkbox value="Any">Any</Checkbox>
                            <Checkbox value="Black">Medium</Checkbox>
                            <Checkbox value="Latino">Light</Checkbox>
                            <Checkbox value="Asian">Medium Dark</Checkbox>
                            <Checkbox value="Caucasion">Medium Light</Checkbox>
                            <Checkbox value="Multi">Dark</Checkbox>
                        </CheckboxGroup>
                    </div>

                    <div className="flex justify-start py-4">
                        <CheckboxGroup
                            label="Hair Type"
                            orientation="horizontal"
                            color="secondary"
                            className="w-full text-left"
                        >
                            <Checkbox value="Any">Any</Checkbox>
                            <Checkbox value="Black">Curly</Checkbox>
                            <Checkbox value="Latino">Straight</Checkbox>
                            <Checkbox value="Asian">Wavy</Checkbox>
                        </CheckboxGroup>
                    </div>

                    <div className="flex justify-start py-4">
                        <CheckboxGroup
                            label="CMV status"
                            orientation="horizontal"
                            color="secondary"
                            className="w-full text-left"
                        >
                            <Checkbox value="Any">Any</Checkbox>
                            <Checkbox value="Positive">Positive</Checkbox>
                        </CheckboxGroup>
                    </div>

                    <div className="flex justify-start py-4">
                        <CheckboxGroup
                            label="Age Range"
                            orientation="horizontal"
                            color="secondary"
                            className="w-full text-left"
                        >
                            <Checkbox value="Any">Any</Checkbox>
                            <Checkbox value="1">18-22</Checkbox>
                            <Checkbox value="2">23-28</Checkbox>
                            <Checkbox value="3">29-34</Checkbox>
                            <Checkbox value="4">35-39</Checkbox>
                        </CheckboxGroup>
                    </div>

                    <div className="flex justify-start py-4">
                        <CheckboxGroup
                            label="Positive Pregnancy"
                            orientation="horizontal"
                            color="secondary"
                            className="w-full text-left"
                        >
                            <Checkbox value="Any">Any</Checkbox>
                            <Checkbox value="Yes">Yes</Checkbox>
                            <Checkbox value="No">No</Checkbox>
                        </CheckboxGroup>
                    </div>

                    <div className="flex justify-start py-4">
                        <CheckboxGroup
                            label="Blood Type"
                            orientation="horizontal"
                            color="secondary"
                            className="w-full text-left"
                        >
                            <Checkbox value="Any">Any</Checkbox>
                            <Checkbox value="A">A</Checkbox>
                            <Checkbox value="B">B</Checkbox>
                            <Checkbox value="O">O</Checkbox>
                            <Checkbox value="AB">AB</Checkbox>
                        </CheckboxGroup>
                    </div>

                    <div className="flex justify-start py-4">
                        <CheckboxGroup
                            label="RH Factor"
                            orientation="horizontal"
                            color="secondary"
                            className="w-full text-left"
                        >
                            <Checkbox value="Any">Any</Checkbox>
                            <Checkbox value="RH+">RH+</Checkbox>
                            <Checkbox value="RH-">RH-</Checkbox>
                        </CheckboxGroup>
                    </div>
                </AccordionItem>
            </Accordion>

            <div className="flex flex-row justify-between">
                <Button color="black" variant="light">
                    Clear
                </Button>

                <Button color="secondary" onClick={handleClick}>
                    See Results
                </Button>
            </div>
        </div>
    );
}