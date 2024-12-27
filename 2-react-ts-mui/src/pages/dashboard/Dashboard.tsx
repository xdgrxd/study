import { ToolListItems } from "../../shared/components";
import { DefaultPageLayout } from "../../shared/layouts"

export const Dashboard = () => {

  return (
    <DefaultPageLayout title="Home Page" toolBar={(<ToolListItems showSearchInput/>)}>
      Testando kkk
    </DefaultPageLayout>
  );
}