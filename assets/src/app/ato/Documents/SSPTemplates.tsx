import {
    Flex, FlexItem,
    Page, PageSection, PageSectionVariants,
    Text, TextContent
} from '@patternfly/react-core';
import { FileWordIcon } from '@patternfly/react-icons';
import { Table, TableBody, TableHeader, TableVariant } from '@patternfly/react-table';
import * as React from 'react';

interface FedRAMPsProps {
    productID: string;
}

class ComponentSSPTemplates extends React.Component<FedRAMPsProps> {
    columns = ['FedRAMP Low', 'FedRAMP Moderate', 'FedRAMP High'];

    buildRows(products) {
             return [[
                (<TextContent key={products+'l'}>
                    <Text component="a" href={'/api/v1/components/' + products + '/fedramp/Low'}><FileWordIcon/> .docx</Text>
                </TextContent>),
                (<TextContent key={products+'m'}>
                    <Text component="a" href={'/api/v1/components/' + products + '/fedramp/Moderate'}><FileWordIcon/> .docx</Text>
                </TextContent>),
                (<TextContent key={products+'h'}>
                    <Text component="a" href={'/api/v1/components/' + products + '/fedramp/High'}><FileWordIcon/> .docx</Text>
                </TextContent>),
            ]]
    }

    render() {
        const textMod = {modifier: 'flex-2' as 'flex-default', breakpoint: 'md' as 'md'};
        const emptyMod = {modifier: 'flex-1' as 'flex-default', breakpoint: 'md' as 'md'};
        return (
            <Page>
                <PageSection variant={PageSectionVariants.light}>
                    <Flex>
                        <Flex breakpointMods={[textMod]}>
                            <FlexItem>
                                <TextContent>
                                    <Text component="h1">SSP Templates</Text>
                                    <Text component="p">
                                        The FedRAMP templates are dynamically generated using the <Text component="a" href="https://github.com/opencontrol/fedramp-templater">OpenControl FedRAMP Templater</Text> tool, originally created by <Text component="a" href="https://18f.gsa.gov/">GSA's 18F</Text>. An automated build system incorporates <Text component="a" href="https://github.com/ComplianceAsCode/redhat">Red Hat's OpenControl Content</Text> directly into the FedRAMP Templates <Text component="a" href="https://www.fedramproductstemplates/">provided by the GSA FedRAMP PMO</Text>.
                                    </Text>
                                </TextContent>
                            </FlexItem>
                        </Flex>
                        <Flex breakpointMods={[emptyMod]}>
                            <FlexItem/>
                        </Flex>
                    </Flex>

                    <TextContent>
                        <Table
                            caption="Download Section"
                            variant={TableVariant.compact}
                            rows={this.buildRows(this.props.productID)}
                            cells={this.columns}>
                            <TableHeader />
                            <TableBody />
                        </Table>
                    </TextContent>
                </PageSection>
            </Page>
        )
    }
}

export { ComponentSSPTemplates };