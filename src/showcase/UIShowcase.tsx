import { PageContainer } from "../containers/PageContainer";
import { ButtonShowcase } from "./ButtonShowcase";
import { SelectShowcase } from "./SelectShowcase";
import { TextInputShowcase } from "./TextInputShowcase";

export function UIShowcase() {
    return (
        <PageContainer title="UI Showcase">
            <ButtonShowcase />
            <SelectShowcase />
            <TextInputShowcase />
        </PageContainer>
    );
}
