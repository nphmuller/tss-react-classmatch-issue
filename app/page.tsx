import ComponentWithIssue from "@/components/ComponentWithIssue";
import OtherComponentThatCallsMakeStyles from "@/components/OtherComponentThatCallsMakeStyles";

const IndexPage = async () => {
  return (
    <>
      {/* 
        We need to call makeStyles previously in the tree to trigger the issue.
      */}
      <OtherComponentThatCallsMakeStyles />
      <ComponentWithIssue />
    </>
  );
};

export default IndexPage;
