import { ToolBar } from "../../shared/components";
import { DefaultPageLayout } from "../../shared/layouts"

export const Dashboard = () => {

  return (
    <DefaultPageLayout title="Home Page" toolBar={(<ToolBar showSearchInput/>)}>
      Testando kkk
    </DefaultPageLayout>
  );
}