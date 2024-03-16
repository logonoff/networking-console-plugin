import React, { FC } from 'react';

import { IoK8sApiNetworkingV1NetworkPolicy } from '@kubevirt-ui/kubevirt-api/kubernetes/models';
import { Grid, GridItem, PageSection, PageSectionVariants, Title } from '@patternfly/react-core';
import Loading from '@utils/components/Loading/Loading';
import { useNetworkingTranslation } from '@utils/hooks/useNetworkingTranslation';

import NetworkPolicyDetailsEgress from './components/NetworkPolicyDetailsEgress';
import NetworkPolicyDetailsIngress from './components/NetworkPolicyDetailsIngress';
import NetworkPolicyDetailsMetadata from './components/NetworkPolicyDetailsMetadata';

type NetworkPolicyDetailsProps = {
  obj: IoK8sApiNetworkingV1NetworkPolicy;
};

const NetworkPolicyDetails: FC<NetworkPolicyDetailsProps> = ({ obj: networkPolicy }) => {
  const { t } = useNetworkingTranslation();

  if (!networkPolicy) return <Loading />;

  return (
    <>
      <PageSection variant={PageSectionVariants.light}>
        <Title headingLevel="h2">{t('NetworkPolicy details')}</Title>
        <Grid span={6}>
          <GridItem>
            <NetworkPolicyDetailsMetadata networkPolicy={networkPolicy} />
          </GridItem>
        </Grid>
      </PageSection>
      <PageSection variant={PageSectionVariants.light}>
        <NetworkPolicyDetailsIngress networkPolicy={networkPolicy} />
      </PageSection>
      <PageSection variant={PageSectionVariants.light}>
        <NetworkPolicyDetailsEgress networkPolicy={networkPolicy} />
      </PageSection>
    </>
  );
};

export default NetworkPolicyDetails;
