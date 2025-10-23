import PageContainer from "@/components/base/structuring/PageContainer";
import ButtonShowcase from "./ButtonShowcase";
import SelectShowcase from "./SelectShowcase";
import TextInputShowcase from "./TextInputShowcase";

export default function UIShowcase() {
    return (
        <PageContainer title="UI Showcase">
            <ButtonShowcase />
            <SelectShowcase />
            <TextInputShowcase />
        </PageContainer>
    );
}
