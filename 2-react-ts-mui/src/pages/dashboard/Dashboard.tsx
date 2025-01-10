import { DetailTools } from '../../shared/components/DetailTools/DetailTools';
import { DefaultPageLayout } from '../../shared/layouts';

export const Dashboard = () => {
  return (
    <DefaultPageLayout title="Home Page" toolBar={<DetailTools />}>
      Test :)
    </DefaultPageLayout>
  );
};
